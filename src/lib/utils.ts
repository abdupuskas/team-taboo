import { nanoid } from 'nanoid';

export function generateRoomCode(): string {
  return nanoid(6).toUpperCase();
}

export function generatePlayerId(): string {
  return nanoid(12);
}

const TEAM_CONFIGS = [
  { name: 'Red Team', color: '#EF4444' },
  { name: 'Blue Team', color: '#3B82F6' },
  { name: 'Green Team', color: '#22C55E' },
  { name: 'Purple Team', color: '#A855F7' },
  { name: 'Orange Team', color: '#F97316' },
  { name: 'Pink Team', color: '#EC4899' },
];

export function getTeamConfig(index: number) {
  return TEAM_CONFIGS[index % TEAM_CONFIGS.length];
}

export const TURN_DURATION = 40;
export const TURN_START_COUNTDOWN = 3;
export const TURN_END_DISPLAY = 5;
export const WORDS_PER_TURN = 5;
export const ROOM_CLEANUP_MS = 30 * 60 * 1000; // 30 minutes
