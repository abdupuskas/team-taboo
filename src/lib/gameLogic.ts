import { GameState, Player, Team, TurnState, WordCard, GamePhase } from './types';
import { generateRoomCode, generatePlayerId, getTeamConfig, TURN_DURATION, TURN_START_COUNTDOWN, TURN_END_DISPLAY, WORDS_PER_TURN, ROOM_CLEANUP_MS } from './utils';
import { getWords } from './words';
import { checkGuess } from './scoring';

interface RoomData {
  state: GameState;
  usedWords: Set<string>;
  timer: ReturnType<typeof setInterval> | null;
  cleanupTimer: ReturnType<typeof setTimeout> | null;
}

export class GameManager {
  private rooms: Map<string, RoomData> = new Map();
  private onStateChange: (roomCode: string, state: GameState) => void;
  private onTimerTick: (roomCode: string, timeLeft: number) => void;
  private onTurnEnd: (roomCode: string, turn: TurnState) => void;
  private onGameOver: (roomCode: string, state: GameState) => void;
  private onGuessResult: (roomCode: string, teamId: string, result: { matched: boolean; perfectSpelling: boolean; points: number; wordIndex: number; guesserName: string }) => void;
  private onWrongGuess: (roomCode: string, playerId: string, guess: string) => void;

  constructor(callbacks: {
    onStateChange: (roomCode: string, state: GameState) => void;
    onTimerTick: (roomCode: string, timeLeft: number) => void;
    onTurnEnd: (roomCode: string, turn: TurnState) => void;
    onGameOver: (roomCode: string, state: GameState) => void;
    onGuessResult: (roomCode: string, teamId: string, result: { matched: boolean; perfectSpelling: boolean; points: number; wordIndex: number; guesserName: string }) => void;
    onWrongGuess: (roomCode: string, playerId: string, guess: string) => void;
  }) {
    this.onStateChange = callbacks.onStateChange;
    this.onTimerTick = callbacks.onTimerTick;
    this.onTurnEnd = callbacks.onTurnEnd;
    this.onGameOver = callbacks.onGameOver;
    this.onGuessResult = callbacks.onGuessResult;
    this.onWrongGuess = callbacks.onWrongGuess;
  }

  createRoom(playerName: string, socketId: string): { roomCode: string; playerId: string } {
    const roomCode = generateRoomCode();
    const playerId = generatePlayerId();

    const player: Player = {
      id: playerId,
      name: playerName,
      teamId: null,
      socketId,
      connected: true,
    };

    // Create default teams
    const teams: Team[] = [];
    for (let i = 0; i < 2; i++) {
      const config = getTeamConfig(i);
      teams.push({
        id: `team-${i}`,
        name: config.name,
        color: config.color,
        playerIds: [],
        score: 0,
        describerIndex: 0,
      });
    }

    const state: GameState = {
      roomCode,
      phase: 'lobby',
      teams,
      players: { [playerId]: player },
      currentTurn: null,
      turnOrder: [],
      currentTurnIndex: 0,
      totalRounds: 0,
      currentRound: 1,
      hostId: playerId,
    };

    this.rooms.set(roomCode, {
      state,
      usedWords: new Set(),
      timer: null,
      cleanupTimer: null,
    });

    this.resetCleanupTimer(roomCode);
    return { roomCode, playerId };
  }

  joinRoom(roomCode: string, playerName: string, socketId: string): { success: boolean; playerId?: string; state?: GameState; error?: string } {
    const room = this.rooms.get(roomCode);
    if (!room) return { success: false, error: 'Room not found' };
    if (room.state.phase !== 'lobby') return { success: false, error: 'Game already in progress' };

    const playerId = generatePlayerId();
    const player: Player = {
      id: playerId,
      name: playerName,
      teamId: null,
      socketId,
      connected: true,
    };

    room.state.players[playerId] = player;
    this.resetCleanupTimer(roomCode);
    return { success: true, playerId, state: this.getClientState(roomCode) };
  }

  reconnectPlayer(playerId: string, roomCode: string, socketId: string): { success: boolean; state?: GameState; error?: string } {
    const room = this.rooms.get(roomCode);
    if (!room) return { success: false, error: 'Room not found' };

    const player = room.state.players[playerId];
    if (!player) return { success: false, error: 'Player not found' };

    player.socketId = socketId;
    player.connected = true;
    this.resetCleanupTimer(roomCode);
    return { success: true, state: this.getClientState(roomCode) };
  }

  pickTeam(playerId: string, teamId: string): GameState | null {
    const room = this.findRoomByPlayer(playerId);
    if (!room) return null;

    const player = room.state.players[playerId];
    if (!player) return null;

    // Remove from current team
    if (player.teamId) {
      const oldTeam = room.state.teams.find(t => t.id === player.teamId);
      if (oldTeam) {
        oldTeam.playerIds = oldTeam.playerIds.filter(id => id !== playerId);
      }
    }

    // Add to new team
    const newTeam = room.state.teams.find(t => t.id === teamId);
    if (!newTeam) return null;

    newTeam.playerIds.push(playerId);
    player.teamId = teamId;

    this.resetCleanupTimer(room.state.roomCode);
    return this.getClientState(room.state.roomCode);
  }

  startGame(playerId: string): { success: boolean; state?: GameState; error?: string } {
    const room = this.findRoomByPlayer(playerId);
    if (!room) return { success: false, error: 'Room not found' };
    if (room.state.players[playerId]?.id !== room.state.hostId) {
      return { success: false, error: 'Only the host can start the game' };
    }

    const activeTeams = room.state.teams.filter(t => t.playerIds.length >= 1);
    if (activeTeams.length < 2) {
      return { success: false, error: 'Need at least 2 teams with players' };
    }

    // Calculate rounds = max team size
    const maxTeamSize = Math.max(...activeTeams.map(t => t.playerIds.length));
    room.state.totalRounds = maxTeamSize;
    room.state.currentRound = 1;

    // Build turn order: alternate teams, each round advances describer index
    room.state.turnOrder = [];
    for (let round = 0; round < maxTeamSize; round++) {
      for (const team of activeTeams) {
        const describerIdx = round % team.playerIds.length;
        room.state.turnOrder.push({
          teamId: team.id,
          describerId: team.playerIds[describerIdx],
        });
      }
    }

    room.state.currentTurnIndex = 0;
    this.startTurnCountdown(room.state.roomCode);
    return { success: true, state: this.getClientState(room.state.roomCode) };
  }

  submitGuess(playerId: string, guess: string): void {
    const room = this.findRoomByPlayer(playerId);
    if (!room || room.state.phase !== 'describing') return;

    const turn = room.state.currentTurn;
    if (!turn) return;

    const player = room.state.players[playerId];
    if (!player) return;

    // Can't guess if you're the describer
    if (playerId === turn.describerId) return;

    // Can't guess if you're not on the describing team
    if (player.teamId !== turn.teamId) return;

    // Check each unguessed word
    for (let i = 0; i < turn.words.length; i++) {
      const card = turn.words[i];
      if (card.guessedBy) continue; // already guessed

      const result = checkGuess(guess, card.word);
      if (result.matched) {
        card.guessedBy = player.name;
        card.perfectSpelling = result.perfectSpelling;
        card.points = result.points;
        turn.wordsGuessed++;

        // Add points to team
        const team = room.state.teams.find(t => t.id === turn.teamId);
        if (team) team.score += result.points;

        this.onGuessResult(room.state.roomCode, turn.teamId, {
          matched: true,
          perfectSpelling: result.perfectSpelling,
          points: result.points,
          wordIndex: i,
          guesserName: player.name,
        });

        this.onStateChange(room.state.roomCode, this.getClientState(room.state.roomCode));

        // All words guessed? End turn early
        if (turn.wordsGuessed >= WORDS_PER_TURN) {
          this.endTurn(room.state.roomCode);
        }
        return;
      }
    }

    // No match
    this.onWrongGuess(room.state.roomCode, playerId, guess);
  }

  handleDisconnect(socketId: string): void {
    for (const [roomCode, room] of this.rooms) {
      for (const player of Object.values(room.state.players)) {
        if (player.socketId === socketId) {
          player.connected = false;

          // If describer disconnects during turn, end turn
          if (room.state.phase === 'describing' && room.state.currentTurn?.describerId === player.id) {
            this.endTurn(roomCode);
          }

          // Transfer host if needed
          if (player.id === room.state.hostId) {
            const connectedPlayer = Object.values(room.state.players).find(p => p.connected && p.id !== player.id);
            if (connectedPlayer) {
              room.state.hostId = connectedPlayer.id;
            }
          }

          this.onStateChange(roomCode, this.getClientState(roomCode));

          // Check if room is empty
          const anyConnected = Object.values(room.state.players).some(p => p.connected);
          if (!anyConnected) {
            this.resetCleanupTimer(roomCode);
          }
          return;
        }
      }
    }
  }

  getSocketRoom(roomCode: string): string {
    return `room:${roomCode}`;
  }

  getTeamRoom(roomCode: string, teamId: string): string {
    return `room:${roomCode}:team:${teamId}`;
  }

  getRoom(roomCode: string): RoomData | undefined {
    return this.rooms.get(roomCode);
  }

  // --- Private methods ---

  private startTurnCountdown(roomCode: string): void {
    const room = this.rooms.get(roomCode);
    if (!room) return;

    const turnInfo = room.state.turnOrder[room.state.currentTurnIndex];
    if (!turnInfo) {
      this.endGame(roomCode);
      return;
    }

    // Calculate current round
    const teamsInPlay = new Set(room.state.turnOrder.map(t => t.teamId)).size;
    room.state.currentRound = Math.floor(room.state.currentTurnIndex / teamsInPlay) + 1;

    const words = getWords(WORDS_PER_TURN, room.usedWords);
    const wordCards: WordCard[] = words.map(w => ({
      word: w,
      guessedBy: null,
      perfectSpelling: false,
      points: 0,
    }));

    room.state.currentTurn = {
      teamId: turnInfo.teamId,
      describerId: turnInfo.describerId,
      words: wordCards,
      timeLeft: TURN_START_COUNTDOWN,
      wordsGuessed: 0,
    };

    room.state.phase = 'turn-start';
    this.onStateChange(roomCode, this.getClientState(roomCode));

    // Countdown before describing starts
    let countdown = TURN_START_COUNTDOWN;
    this.clearTimer(room);

    room.timer = setInterval(() => {
      countdown--;
      if (room.state.currentTurn) {
        room.state.currentTurn.timeLeft = countdown;
      }
      this.onTimerTick(roomCode, countdown);

      if (countdown <= 0) {
        this.clearTimer(room);
        this.startDescribing(roomCode);
      }
    }, 1000);
  }

  private startDescribing(roomCode: string): void {
    const room = this.rooms.get(roomCode);
    if (!room || !room.state.currentTurn) return;

    room.state.phase = 'describing';
    room.state.currentTurn.timeLeft = TURN_DURATION;
    this.onStateChange(roomCode, this.getClientState(roomCode));

    let timeLeft = TURN_DURATION;
    this.clearTimer(room);

    room.timer = setInterval(() => {
      timeLeft--;
      if (room.state.currentTurn) {
        room.state.currentTurn.timeLeft = timeLeft;
      }
      this.onTimerTick(roomCode, timeLeft);

      if (timeLeft <= 0) {
        this.endTurn(roomCode);
      }
    }, 1000);
  }

  private endTurn(roomCode: string): void {
    const room = this.rooms.get(roomCode);
    if (!room) return;

    this.clearTimer(room);
    room.state.phase = 'turn-end';

    if (room.state.currentTurn) {
      this.onTurnEnd(roomCode, room.state.currentTurn);
    }
    this.onStateChange(roomCode, this.getClientState(roomCode));
    // Stay in turn-end phase until host manually triggers next turn
  }

  nextTurn(playerId: string): { success: boolean; error?: string } {
    const room = this.findRoomByPlayer(playerId);
    if (!room) return { success: false, error: 'Room not found' };
    if (room.state.phase !== 'turn-end') {
      return { success: false, error: 'Not in turn-end phase' };
    }

    // Only the next describer can start their turn
    const nextIndex = room.state.currentTurnIndex + 1;
    const nextTurnInfo = room.state.turnOrder[nextIndex];
    if (!nextTurnInfo) {
      // No more turns — only host can end the game
      if (playerId !== room.state.hostId) {
        return { success: false, error: 'Only the host can end the game' };
      }
      room.state.currentTurnIndex++;
      this.endGame(room.state.roomCode);
      return { success: true };
    }

    if (playerId !== nextTurnInfo.describerId) {
      return { success: false, error: 'Only the next describer can start the turn' };
    }

    room.state.currentTurnIndex++;
    this.startTurnCountdown(room.state.roomCode);
    return { success: true };
  }

  private endGame(roomCode: string): void {
    const room = this.rooms.get(roomCode);
    if (!room) return;

    this.clearTimer(room);
    room.state.phase = 'game-over';
    room.state.currentTurn = null;
    this.onGameOver(roomCode, this.getClientState(roomCode));
    this.onStateChange(roomCode, this.getClientState(roomCode));
  }

  addTeam(playerId: string): { roomCode: string; state: GameState } | null {
    const room = this.findRoomByPlayer(playerId);
    if (!room) return null;
    if (room.state.players[playerId]?.id !== room.state.hostId) return null;
    if (room.state.phase !== 'lobby') return null;

    const index = room.state.teams.length;
    const config = getTeamConfig(index);
    room.state.teams.push({
      id: `team-${index}`,
      name: config.name,
      color: config.color,
      playerIds: [],
      score: 0,
      describerIndex: 0,
    });

    return { roomCode: room.state.roomCode, state: this.getClientState(room.state.roomCode) };
  }

  removeTeam(playerId: string, teamId: string): { roomCode: string; state: GameState } | null {
    const room = this.findRoomByPlayer(playerId);
    if (!room) return null;
    if (room.state.players[playerId]?.id !== room.state.hostId) return null;
    if (room.state.phase !== 'lobby') return null;

    const teamIndex = room.state.teams.findIndex(t => t.id === teamId);
    if (teamIndex === -1) return null;

    // Must keep at least 2 teams
    if (room.state.teams.length <= 2) return null;

    const team = room.state.teams[teamIndex];

    // Move players on this team back to unassigned
    for (const pid of team.playerIds) {
      const p = room.state.players[pid];
      if (p) p.teamId = null;
    }

    room.state.teams.splice(teamIndex, 1);

    return { roomCode: room.state.roomCode, state: this.getClientState(room.state.roomCode) };
  }

  resetGame(roomCode: string): GameState | null {
    const room = this.rooms.get(roomCode);
    if (!room) return null;

    this.clearTimer(room);
    room.usedWords.clear();

    // Reset scores and describer indices
    for (const team of room.state.teams) {
      team.score = 0;
      team.describerIndex = 0;
    }

    room.state.phase = 'lobby';
    room.state.currentTurn = null;
    room.state.turnOrder = [];
    room.state.currentTurnIndex = 0;
    room.state.totalRounds = 0;
    room.state.currentRound = 1;

    return this.getClientState(roomCode);
  }

  removePlayer(playerId: string, targetId: string): { roomCode: string; state: GameState; removedSocketId: string } | null {
    const room = this.findRoomByPlayer(playerId);
    if (!room) return null;
    if (playerId !== room.state.hostId) return null;
    if (targetId === room.state.hostId) return null; // can't remove yourself
    const target = room.state.players[targetId];
    if (!target) return null;

    const removedSocketId = target.socketId;

    // Remove from team
    if (target.teamId) {
      const team = room.state.teams.find(t => t.id === target.teamId);
      if (team) {
        team.playerIds = team.playerIds.filter(id => id !== targetId);
      }
    }

    // If removed player is current describer, end the turn
    if (room.state.currentTurn?.describerId === targetId &&
        (room.state.phase === 'describing' || room.state.phase === 'turn-start')) {
      this.endTurn(room.state.roomCode);
    }

    // Remove player from state
    delete room.state.players[targetId];

    return { roomCode: room.state.roomCode, state: this.getClientState(room.state.roomCode), removedSocketId };
  }

  revokeWord(playerId: string, wordIndex: number): { roomCode: string; state: GameState } | null {
    const room = this.findRoomByPlayer(playerId);
    if (!room) return null;
    if (playerId !== room.state.hostId) return null;
    if (room.state.phase !== 'turn-end') return null;
    if (!room.state.currentTurn) return null;

    const card = room.state.currentTurn.words[wordIndex];
    if (!card || !card.guessedBy) return null;

    // Find the team that scored and subtract points
    const team = room.state.teams.find(t => t.id === room.state.currentTurn!.teamId);
    if (team) {
      team.score = Math.max(0, team.score - card.points);
    }

    card.guessedBy = null;
    card.points = 0;
    card.perfectSpelling = false;

    return { roomCode: room.state.roomCode, state: this.getClientState(room.state.roomCode) };
  }

  getDescriberState(roomCode: string): GameState | null {
    const room = this.rooms.get(roomCode);
    if (!room) return null;
    return { ...room.state };
  }

  private getClientState(roomCode: string): GameState {
    const room = this.rooms.get(roomCode);
    if (!room) throw new Error('Room not found');

    const state = { ...room.state };
    // Hide unguessed words during describing and turn-start phases
    if ((state.phase === 'describing' || state.phase === 'turn-start') && state.currentTurn) {
      state.currentTurn = {
        ...state.currentTurn,
        words: state.currentTurn.words.map(w => ({
          ...w,
          word: w.guessedBy ? w.word : '???',
        })),
      };
    }
    return state;
  }

  private findRoomByPlayer(playerId: string): RoomData | null {
    for (const room of this.rooms.values()) {
      if (room.state.players[playerId]) return room;
    }
    return null;
  }

  private clearTimer(room: RoomData): void {
    if (room.timer) {
      clearInterval(room.timer as ReturnType<typeof setInterval>);
      clearTimeout(room.timer as unknown as ReturnType<typeof setTimeout>);
      room.timer = null;
    }
  }

  private resetCleanupTimer(roomCode: string): void {
    const room = this.rooms.get(roomCode);
    if (!room) return;

    if (room.cleanupTimer) {
      clearTimeout(room.cleanupTimer);
    }

    room.cleanupTimer = setTimeout(() => {
      this.clearTimer(room);
      this.rooms.delete(roomCode);
    }, ROOM_CLEANUP_MS);
  }
}
