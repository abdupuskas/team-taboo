import { io, Socket } from 'socket.io-client';
import type { ServerToClientEvents, ClientToServerEvents } from './types';

type GameSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

let socket: GameSocket | null = null;

export function getSocket(): GameSocket {
  if (!socket) {
    socket = io({
      autoConnect: false,
      transports: ['websocket', 'polling'],
    }) as GameSocket;
  }
  return socket;
}
