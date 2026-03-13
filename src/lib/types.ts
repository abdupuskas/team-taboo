export interface Player {
  id: string;
  name: string;
  teamId: string | null;
  socketId: string;
  connected: boolean;
}

export interface Team {
  id: string;
  name: string;
  color: string;
  playerIds: string[];
  score: number;
  describerIndex: number; // cycles through players for each round
}

export type GamePhase = 'lobby' | 'turn-start' | 'describing' | 'turn-end' | 'game-over';

export interface WordCard {
  word: string;
  guessedBy: string | null; // player name
  perfectSpelling: boolean;
  points: number;
}

export interface TurnState {
  teamId: string;
  describerId: string;
  words: WordCard[];
  timeLeft: number;
  wordsGuessed: number;
}

export interface GameState {
  roomCode: string;
  phase: GamePhase;
  teams: Team[];
  players: Record<string, Player>;
  currentTurn: TurnState | null;
  turnOrder: { teamId: string; describerId: string }[];
  currentTurnIndex: number;
  totalRounds: number;
  currentRound: number;
  hostId: string;
  serverHost?: string;
}

export interface GuessResult {
  matched: boolean;
  perfectSpelling: boolean;
  points: number;
  wordIndex: number;
  guesserName: string;
}

// Socket event types
export interface ServerToClientEvents {
  'lobby-update': (state: GameState) => void;
  'game-state': (state: GameState) => void;
  'timer-tick': (timeLeft: number) => void;
  'guess-result': (result: GuessResult) => void;
  'turn-start': (turn: TurnState) => void;
  'turn-end': (turn: TurnState) => void;
  'game-over': (state: GameState) => void;
  'error': (message: string) => void;
  'kicked': () => void;
  'room-created': (data: { roomCode: string; playerId: string }) => void;
  'joined-room': (data: { playerId: string; state: GameState }) => void;
  'wrong-guess': (data: { guess: string }) => void;
}

export interface ClientToServerEvents {
  'create-room': (data: { playerName: string }, callback: (response: { roomCode: string; playerId: string }) => void) => void;
  'join-room': (data: { roomCode: string; playerName: string }, callback: (response: { success: boolean; playerId?: string; state?: GameState; error?: string }) => void) => void;
  'pick-team': (data: { playerId: string; teamId: string }) => void;
  'start-game': (data: { playerId: string }) => void;
  'submit-guess': (data: { playerId: string; guess: string }) => void;
  'skip-word': (data: { playerId: string; wordIndex: number }) => void;
  'play-again': (data: { playerId: string }) => void;
  'next-turn': (data: { playerId: string }) => void;
  'add-team': (data: { playerId: string }) => void;
  'remove-team': (data: { playerId: string; teamId: string }) => void;
  'remove-player': (data: { playerId: string; targetId: string }) => void;
  'revoke-word': (data: { playerId: string; wordIndex: number }) => void;
  'reconnect-player': (data: { playerId: string; roomCode: string }, callback: (response: { success: boolean; state?: GameState; error?: string }) => void) => void;
}
