'use client';

import type { GameState, TurnState } from '../lib/types';
import Timer from './Timer';
import { TURN_DURATION } from '../lib/utils';

interface SpectatorViewProps {
  gameState: GameState;
  turn: TurnState;
  timeLeft: number;
}

export default function SpectatorView({ gameState, turn, timeLeft }: SpectatorViewProps) {
  const describingTeam = gameState.teams.find(t => t.id === turn.teamId);
  const describer = gameState.players[turn.describerId];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 flex flex-col items-center justify-center">
      <div className="text-center mb-6">
        <p className="text-slate-500 text-sm mb-1">
          <span style={{ color: describingTeam?.color }} className="font-bold">{describingTeam?.name}</span> is playing
        </p>
        <p className="text-slate-400 text-xs">{describer?.name} is describing</p>
      </div>

      <Timer timeLeft={timeLeft} totalTime={TURN_DURATION} size={140} />

      {/* Word cards for anti-cheat monitoring */}
      <div className="w-full max-w-sm mt-6 space-y-2">
        <p className="text-xs text-slate-400 text-center mb-2">Words to guess — watch for cheating!</p>
        {turn.words.map((card, i) => (
          <div
            key={i}
            className={`flex items-center justify-between px-4 py-3 rounded-xl ${
              card.guessedBy
                ? 'bg-green-50 border border-green-200'
                : 'bg-white border border-slate-200'
            }`}
          >
            <span className={`font-medium ${card.guessedBy ? 'text-green-700 line-through' : 'text-slate-800'}`}>
              {card.word}
            </span>
            {card.guessedBy ? (
              <span className="text-green-600 text-sm">{card.guessedBy} +{card.points}</span>
            ) : (
              <span className="text-slate-400 text-sm">unguessed</span>
            )}
          </div>
        ))}
      </div>

      {/* Team scores */}
      <div className="w-full max-w-sm mt-6 space-y-2">
        {gameState.teams.filter(t => t.playerIds.length > 0).map((team) => (
          <div
            key={team.id}
            className={`flex items-center justify-between px-4 py-3 rounded-xl ${
              team.id === turn.teamId ? 'bg-white border border-slate-200 shadow-sm' : 'bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: team.color }} />
              <span className="font-medium">{team.name}</span>
            </div>
            <span className="font-bold text-lg">{team.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
