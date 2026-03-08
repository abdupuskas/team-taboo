'use client';

import type { GameState, TurnState } from '../lib/types';

interface ScoreboardProps {
  gameState: GameState;
  turnResult?: TurnState | null;
  isGameOver: boolean;
  isHost: boolean;
  isNextDescriber?: boolean;
  nextDescriberName?: string;
  onPlayAgain?: () => void;
  onNextTurn?: () => void;
}

export default function Scoreboard({ gameState, turnResult, isGameOver, isHost, isNextDescriber, nextDescriberName, onPlayAgain, onNextTurn }: ScoreboardProps) {
  const sortedTeams = [...gameState.teams]
    .filter(t => t.playerIds.length > 0)
    .sort((a, b) => b.score - a.score);

  const winner = isGameOver ? sortedTeams[0] : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 flex flex-col items-center justify-center">
      {isGameOver ? (
        <>
          <h2 className="text-2xl font-bold mb-1" style={{ color: winner?.color }}>
            {winner?.name} Wins!
          </h2>
          <p className="text-slate-500 text-sm mb-8">Final Scores</p>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold text-slate-600 mb-1">Turn Over</h2>
          <p className="text-slate-400 text-sm mb-6">
            Round {gameState.currentRound} of {gameState.totalRounds}
          </p>
        </>
      )}

      {/* Turn result words */}
      {turnResult && (
        <div className="w-full max-w-md mb-8 space-y-2">
          {turnResult.words.map((card, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                card.guessedBy ? 'bg-green-50 border border-green-200' : 'bg-slate-100 border border-slate-200'
              }`}
            >
              <span className={`font-medium ${card.guessedBy ? 'text-green-700' : 'text-slate-400'}`}>
                {card.word}
              </span>
              {card.guessedBy ? (
                <span className="text-green-600 text-sm">
                  {card.guessedBy} +{card.points}
                </span>
              ) : (
                <span className="text-slate-400 text-sm">missed</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Scores / Leaderboard */}
      {!isGameOver && (
        <p className="text-slate-500 text-sm font-semibold mb-2 w-full max-w-md">Leaderboard</p>
      )}
      <div className="w-full max-w-md space-y-3">
        {sortedTeams.map((team, idx) => (
          <div
            key={team.id}
            className={`flex items-center justify-between px-5 py-4 rounded-xl transition-all ${
              idx === 0 && isGameOver
                ? 'bg-amber-50 border-2 border-amber-300'
                : 'bg-white border border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3">
              {isGameOver && idx === 0 && <span className="text-2xl">🏆</span>}
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: team.color }} />
              <span className="font-bold">{team.name}</span>
            </div>
            <span className="text-2xl font-black">{team.score}</span>
          </div>
        ))}
      </div>

      {isGameOver && isHost && onPlayAgain && (
        <button
          onClick={onPlayAgain}
          className="mt-8 w-full max-w-md py-4 rounded-xl text-xl font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all cursor-pointer"
        >
          Play Again
        </button>
      )}

      {!isGameOver && isNextDescriber && onNextTurn && (
        <button
          onClick={onNextTurn}
          className="mt-8 w-full max-w-md py-4 rounded-xl text-xl font-bold bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/20 transition-all cursor-pointer"
        >
          Go — Your Turn to Describe!
        </button>
      )}

      {!isGameOver && !isNextDescriber && nextDescriberName && (
        <p className="mt-6 text-slate-400 text-sm animate-pulse">
          Waiting for {nextDescriberName} to start...
        </p>
      )}

      {!isGameOver && !isNextDescriber && !nextDescriberName && (
        <p className="mt-6 text-slate-400 text-sm animate-pulse">Last round!</p>
      )}
    </div>
  );
}
