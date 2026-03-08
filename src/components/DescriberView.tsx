'use client';

import type { TurnState } from '../lib/types';
import Timer from './Timer';
import { TURN_DURATION } from '../lib/utils';

interface DescriberViewProps {
  turn: TurnState;
  timeLeft: number;
}

export default function DescriberView({ turn, timeLeft }: DescriberViewProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 flex flex-col items-center">
      <div className="text-center mb-4">
        <p className="text-indigo-600 text-sm font-medium mb-1">You are describing!</p>
        <p className="text-slate-500 text-xs">Say these words out loud — don't say the word itself!</p>
      </div>

      <Timer timeLeft={timeLeft} totalTime={TURN_DURATION} size={100} />

      <div className="w-full max-w-md mt-6 grid gap-3">
        {turn.words.map((card, i) => (
          <div
            key={i}
            className={`rounded-xl p-5 text-center text-2xl font-bold transition-all duration-300 ${
              card.guessedBy
                ? 'bg-green-50 border-2 border-green-300 text-green-700'
                : 'bg-white border-2 border-slate-200 text-slate-800 shadow-sm'
            }`}
          >
            <span className={card.guessedBy ? 'line-through opacity-60' : ''}>
              {card.word}
            </span>
            {card.guessedBy && (
              <p className="text-sm font-normal text-green-600 mt-1">
                Guessed by {card.guessedBy} (+{card.points})
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-slate-400 text-sm">
        {turn.wordsGuessed}/{turn.words.length} guessed
      </p>
    </div>
  );
}
