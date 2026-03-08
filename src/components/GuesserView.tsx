'use client';

import { useState, useRef, useEffect } from 'react';
import type { TurnState, GuessResult } from '../lib/types';
import Timer from './Timer';
import { TURN_DURATION } from '../lib/utils';

interface GuesserViewProps {
  turn: TurnState;
  timeLeft: number;
  onSubmitGuess: (guess: string) => void;
  lastGuessResult: GuessResult | null;
  wrongGuess: string | null;
}

export default function GuesserView({ turn, timeLeft, onSubmitGuess, lastGuessResult, wrongGuess }: GuesserViewProps) {
  const [guess, setGuess] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim()) {
      onSubmitGuess(guess.trim());
      setGuess('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 flex flex-col items-center">
      <div className="text-center mb-4">
        <p className="text-green-600 text-sm font-medium mb-1">Listen and guess!</p>
        <p className="text-slate-500 text-xs">Type your guesses below</p>
      </div>

      <Timer timeLeft={timeLeft} totalTime={TURN_DURATION} size={100} />

      <div className="w-full max-w-md mt-6">
        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mb-6">
          {turn.words.map((card, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-all ${
                card.guessedBy
                  ? 'bg-green-500 text-white scale-110'
                  : 'bg-slate-200 text-slate-400'
              }`}
            >
              {card.guessedBy ? '✓' : i + 1}
            </div>
          ))}
        </div>

        {/* Feedback */}
        <div className="h-12 flex items-center justify-center mb-4">
          {lastGuessResult && lastGuessResult.matched && (
            <div className="animate-bounce text-green-600 text-xl font-bold">
              Correct! +{lastGuessResult.points} {lastGuessResult.perfectSpelling && '(Perfect!)'}
            </div>
          )}
          {wrongGuess && (
            <div className="text-red-500/70 text-sm animate-pulse">
              &quot;{wrongGuess}&quot; — nope!
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="Type your guess..."
            className="flex-1 bg-white border-2 border-slate-200 rounded-xl px-4 py-4 text-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-sm transition-colors"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 rounded-xl px-6 py-4 text-lg font-bold text-white cursor-pointer transition-colors"
          >
            Go
          </button>
        </form>
      </div>

      <p className="mt-6 text-slate-400 text-sm">
        {turn.wordsGuessed}/{turn.words.length} guessed
      </p>
    </div>
  );
}
