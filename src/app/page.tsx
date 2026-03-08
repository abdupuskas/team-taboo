'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGame } from '../hooks/useGame';

export default function Home() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [roomCode, setRoomCode] = useState('');
  const { createRoom } = useGame();
  const router = useRouter();

  const handleHost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || loading) return;
    setLoading(true);
    try {
      const { roomCode } = await createRoom(name.trim());
      router.push(`/game/${roomCode}`);
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black mb-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Team Taboo
        </h1>
        <p className="text-slate-500 text-lg">The word guessing party game</p>
      </div>

      <form onSubmit={handleHost} className="w-full max-w-sm space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          maxLength={20}
          className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 text-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors text-center shadow-sm"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={!name.trim() || loading}
          className={`w-full py-4 rounded-xl text-xl font-bold transition-all cursor-pointer ${
            name.trim() && !loading
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {loading ? 'Creating...' : 'Host a Game'}
        </button>
      </form>

      <div className="mt-8 w-full max-w-sm">
        {!showJoin ? (
          <button
            onClick={() => setShowJoin(true)}
            className="w-full text-indigo-600 hover:text-indigo-500 text-sm font-medium cursor-pointer transition-colors"
          >
            Got a room code? Join a game
          </button>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
              placeholder="Room code"
              maxLength={6}
              className="flex-1 bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors text-center font-mono tracking-widest shadow-sm"
              autoFocus
              autoComplete="off"
            />
            <button
              onClick={() => {
                if (roomCode.trim()) {
                  router.push(`/join/${roomCode.trim()}`);
                }
              }}
              disabled={!roomCode.trim()}
              className={`px-6 py-3 rounded-xl font-bold transition-all cursor-pointer ${
                roomCode.trim()
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Join
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
