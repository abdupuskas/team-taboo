import { createServer } from 'http';
import { networkInterfaces } from 'os';
import next from 'next';
import { Server } from 'socket.io';
import { GameManager } from './src/lib/gameLogic';
import type { ServerToClientEvents, ClientToServerEvents, GameState } from './src/lib/types';

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);

function getLanIp(): string {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

const lanIp = getLanIp();
const publicDomain = process.env.RAILWAY_PUBLIC_DOMAIN;
const serverHost = publicDomain || `${lanIp}:${port}`;

function withServerHost(state: GameState): GameState {
  return { ...state, serverHost };
}

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    handler(req, res);
  });

  const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
    cors: { origin: '*' },
  });

  const gameManager = new GameManager({
    onStateChange: (roomCode, state) => {
      if (state.currentTurn && (state.phase === 'describing' || state.phase === 'turn-start')) {
        const describerId = state.currentTurn.describerId;
        const activeTeamId = state.currentTurn.teamId;
        const describerState = gameManager.getDescriberState(roomCode);

        if (describerState) {
          const redactedState = withServerHost(state);
          const fullState = withServerHost(describerState);

          for (const player of Object.values(state.players)) {
            if (player.id === describerId) {
              // Describer — always gets full unredacted state
              io.to(player.socketId).emit('game-state', fullState);
            } else if (player.teamId === activeTeamId) {
              // Guesser on active team — redacted words
              io.to(player.socketId).emit('game-state', redactedState);
            } else {
              // Spectator (other team) — full words for anti-cheat
              io.to(player.socketId).emit('game-state', fullState);
            }
          }
          return;
        }
      }
      // Default: send to all (lobby, turn-end, game-over phases)
      io.to(`room:${roomCode}`).emit('game-state', withServerHost(state));
    },
    onTimerTick: (roomCode, timeLeft) => {
      io.to(`room:${roomCode}`).emit('timer-tick', timeLeft);
    },
    onTurnEnd: (roomCode, turn) => {
      io.to(`room:${roomCode}`).emit('turn-end', turn);
    },
    onGameOver: (roomCode, state) => {
      io.to(`room:${roomCode}`).emit('game-over', withServerHost(state));
    },
    onGuessResult: (roomCode, teamId, result) => {
      io.to(`room:${roomCode}`).emit('guess-result', result);
    },
    onWrongGuess: (roomCode, playerId, guess) => {
      // Find the socket for this player and send only to them
      const room = gameManager.getRoom(roomCode);
      if (room) {
        const player = room.state.players[playerId];
        if (player) {
          io.to(player.socketId).emit('wrong-guess', { guess });
        }
      }
    },
  });

  io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('create-room', (data, callback) => {
      const result = gameManager.createRoom(data.playerName, socket.id);
      socket.join(`room:${result.roomCode}`);
      callback(result);
      console.log(`Room ${result.roomCode} created by ${data.playerName}`);
    });

    socket.on('join-room', (data, callback) => {
      const result = gameManager.joinRoom(data.roomCode, data.playerName, socket.id);
      if (result.success && result.state) {
        socket.join(`room:${data.roomCode}`);
        callback({ ...result, state: withServerHost(result.state) });
        io.to(`room:${data.roomCode}`).emit('game-state', withServerHost(result.state));
        console.log(`${data.playerName} joined room ${data.roomCode}`);
      } else {
        callback(result);
      }
    });

    socket.on('reconnect-player', (data, callback) => {
      const result = gameManager.reconnectPlayer(data.playerId, data.roomCode, socket.id);
      if (result.success && result.state) {
        const roomCode = data.roomCode;
        socket.join(`room:${roomCode}`);
        // Also rejoin team room
        const player = result.state.players[data.playerId];
        if (player?.teamId) {
          socket.join(`room:${roomCode}:team:${player.teamId}`);
        }

        // Send correct state to the reconnecting player (role-aware)
        if (result.state.currentTurn && (result.state.phase === 'describing' || result.state.phase === 'turn-start')) {
          const describerId = result.state.currentTurn.describerId;
          if (data.playerId === describerId || player?.teamId !== result.state.currentTurn.teamId) {
            // Describer or spectator — send full state
            const fullState = gameManager.getDescriberState(roomCode);
            callback({ success: true, state: withServerHost(fullState || result.state) });
          } else {
            // Guesser — send redacted state
            callback({ success: true, state: withServerHost(result.state) });
          }
        } else {
          callback({ success: true, state: withServerHost(result.state) });
        }

        // Broadcast connected status update to others (role-aware)
        const clientState = result.state;
        if (clientState.currentTurn && (clientState.phase === 'describing' || clientState.phase === 'turn-start')) {
          const describerState = gameManager.getDescriberState(roomCode);
          if (describerState) {
            const redacted = withServerHost(clientState);
            const full = withServerHost(describerState);
            const describerId = clientState.currentTurn.describerId;
            const activeTeamId = clientState.currentTurn.teamId;
            for (const p of Object.values(clientState.players)) {
              if (p.id === data.playerId) continue; // already sent via callback
              if (p.id === describerId || p.teamId !== activeTeamId) {
                io.to(p.socketId).emit('game-state', full);
              } else {
                io.to(p.socketId).emit('game-state', redacted);
              }
            }
          }
        } else {
          // Non-active phase — safe to broadcast to all except reconnecting player
          socket.to(`room:${roomCode}`).emit('game-state', withServerHost(clientState));
        }
      } else {
        callback(result);
      }
    });

    socket.on('pick-team', (data) => {
      const state = gameManager.pickTeam(data.playerId, data.teamId);
      if (state) {
        // Leave old team rooms, join new one
        const player = state.players[data.playerId];
        // Leave all team rooms for this room
        for (const room of socket.rooms) {
          if (room.includes(':team:')) {
            socket.leave(room);
          }
        }
        if (player?.teamId) {
          socket.join(`room:${state.roomCode}:team:${player.teamId}`);
        }
        io.to(`room:${state.roomCode}`).emit('game-state', withServerHost(state));
      }
    });

    socket.on('start-game', (data) => {
      const result = gameManager.startGame(data.playerId);
      if (!result.success) {
        socket.emit('error', result.error || 'Failed to start game');
      }
    });

    socket.on('submit-guess', (data) => {
      gameManager.submitGuess(data.playerId, data.guess);
    });

    socket.on('next-turn', (data) => {
      const result = gameManager.nextTurn(data.playerId);
      if (!result.success) {
        socket.emit('error', result.error || 'Failed to advance turn');
      }
    });

    socket.on('add-team', (data) => {
      const result = gameManager.addTeam(data.playerId);
      if (result) {
        io.to(`room:${result.roomCode}`).emit('game-state', withServerHost(result.state));
      }
    });

    socket.on('remove-team', (data) => {
      const result = gameManager.removeTeam(data.playerId, data.teamId);
      if (result) {
        io.to(`room:${result.roomCode}`).emit('game-state', withServerHost(result.state));
      }
    });

    socket.on('remove-player', (data) => {
      const result = gameManager.removePlayer(data.playerId, data.targetId);
      if (result) {
        // Notify the removed player before disconnecting them
        io.to(result.removedSocketId).emit('kicked');
        // Remove them from the room
        const removedSocket = io.sockets.sockets.get(result.removedSocketId);
        if (removedSocket) {
          removedSocket.leave(`room:${result.roomCode}`);
        }
        // Broadcast updated state
        io.to(`room:${result.roomCode}`).emit('game-state', withServerHost(result.state));
      }
    });

    socket.on('revoke-word', (data) => {
      const result = gameManager.revokeWord(data.playerId, data.wordIndex);
      if (result) {
        io.to(`room:${result.roomCode}`).emit('game-state', withServerHost(result.state));
      }
    });

    socket.on('play-again', (data) => {
      // Find the room for this player
      const room = gameManager.getRoom(
        Array.from(socket.rooms).find(r => r.startsWith('room:') && !r.includes(':team:'))?.replace('room:', '') || ''
      );
      if (room && room.state.players[data.playerId]?.id === room.state.hostId) {
        const state = gameManager.resetGame(room.state.roomCode);
        if (state) {
          io.to(`room:${room.state.roomCode}`).emit('game-state', withServerHost(state));
        }
      }
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
      gameManager.handleDisconnect(socket.id);
    });
  });

  httpServer.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
    console.log(`> LAN:      http://${serverHost}`);
  });
});
