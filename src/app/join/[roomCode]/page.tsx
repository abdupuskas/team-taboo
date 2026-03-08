'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useGame } from '../../../hooks/useGame';

export default function JoinPage() {
  const params = useParams();
  const roomCode = params.roomCode as string;
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { joinRoom } = useGame();
  const router = useRouter();

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || loading) return;
    setLoading(true);
    setError('');

    const result = await joinRoom(roomCode, name.trim());
    if (result.success) {
      router.push(`/game/${roomCode}`);
    } else {
      setError(result.error || 'Failed to join room');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Team Taboo
        </h1>
        <p className="text-slate-500">
          Joining room <span className="font-mono font-bold text-slate-800 tracking-widest">{roomCode}</span>
        </p>
      </div>

      <form onSubmit={handleJoin} className="w-full max-w-sm space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          maxLength={20}
          className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 text-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors text-center shadow-sm"
          autoComplete="off"
          autoFocus
        />

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={!name.trim() || loading}
          className={`w-full py-4 rounded-xl text-xl font-bold transition-all cursor-pointer ${
            name.trim() && !loading
              ? 'bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/20'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {loading ? 'Joining...' : 'Join Game'}
        </button>
      </form>
    </div>
  );
}
