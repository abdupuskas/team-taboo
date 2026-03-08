'use client';

import { QRCodeSVG } from 'qrcode.react';
import type { GameState, Player } from '../lib/types';

interface LobbyProps {
  gameState: GameState;
  playerId: string;
  isHost: boolean;
  onPickTeam: (teamId: string) => void;
  onStartGame: () => void;
  onAddTeam?: () => void;
  onRemoveTeam?: (teamId: string) => void;
}

export default function Lobby({ gameState, playerId, isHost, onPickTeam, onStartGame, onAddTeam, onRemoveTeam }: LobbyProps) {
  const joinUrl = typeof window !== 'undefined'
    ? gameState.serverHost
      ? `http://${gameState.serverHost}/join/${gameState.roomCode}`
      : `${window.location.origin}/join/${gameState.roomCode}`
    : '';

  const currentPlayer = gameState.players[playerId];
  const activeTeams = gameState.teams.filter(t => t.playerIds.length > 0);
  const canStart = activeTeams.length >= 2 && activeTeams.every(t => t.playerIds.length >= 1);

  // Players not on a team
  const unassigned = Object.values(gameState.players).filter(p => !p.teamId);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 flex flex-col items-center">
      <h1 className="text-4xl font-black mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Team Taboo
      </h1>

      <div className="bg-white rounded-xl p-4 mb-6 text-center w-full max-w-md shadow-sm border border-slate-200">
        <p className="text-slate-500 text-sm mb-1">Room Code</p>
        <p className="text-3xl font-mono font-bold tracking-widest mb-3">{gameState.roomCode}</p>

        {joinUrl && (
          <div className="flex flex-col items-center gap-3">
            <QRCodeSVG value={joinUrl} size={160} bgColor="white" fgColor="#1E293B" />
            <button
              onClick={() => navigator.clipboard.writeText(joinUrl)}
              className="text-sm text-indigo-600 hover:text-indigo-500 underline cursor-pointer"
            >
              Copy invite link
            </button>
          </div>
        )}
      </div>

      {/* Teams */}
      <div className="w-full max-w-md space-y-3 mb-6">
        {gameState.teams.map((team) => {
          const teamPlayers = team.playerIds
            .map(id => gameState.players[id])
            .filter(Boolean) as Player[];
          const isOnTeam = currentPlayer?.teamId === team.id;

          return (
            <div
              key={team.id}
              className={`rounded-xl p-4 border-2 transition-all cursor-pointer ${
                isOnTeam
                  ? 'border-current bg-indigo-50'
                  : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
              }`}
              onClick={() => onPickTeam(team.id)}
              style={{ borderColor: isOnTeam ? team.color : undefined }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: team.color }} />
                  <span className="font-bold">{team.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm">{teamPlayers.length} players</span>
                  {isHost && onRemoveTeam && gameState.teams.length > 2 && (
                    <button
                      onClick={(e) => { e.stopPropagation(); onRemoveTeam(team.id); }}
                      className="text-slate-400 hover:text-red-500 text-sm px-1 transition-colors cursor-pointer"
                      title="Remove team"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {teamPlayers.map((p) => (
                  <span
                    key={p.id}
                    className={`px-2 py-1 rounded-lg text-sm ${
                      p.id === playerId ? 'bg-indigo-100 font-bold' : 'bg-slate-200'
                    } ${!p.connected ? 'opacity-50' : ''}`}
                  >
                    {p.name} {p.isHost ? '👑' : ''}
                  </span>
                ))}
                {teamPlayers.length === 0 && (
                  <span className="text-slate-400 text-sm italic">Tap to join this team</span>
                )}
              </div>
            </div>
          );
        })}

        {isHost && onAddTeam && gameState.teams.length < 6 && (
          <button
            onClick={onAddTeam}
            className="w-full rounded-xl p-4 border-2 border-dashed border-slate-300 text-slate-400 hover:border-indigo-400 hover:text-indigo-500 transition-all cursor-pointer"
          >
            + Add Team
          </button>
        )}
      </div>

      {/* Unassigned players */}
      {unassigned.length > 0 && (
        <div className="w-full max-w-md mb-6">
          <p className="text-slate-500 text-sm mb-2">Waiting to pick a team:</p>
          <div className="flex flex-wrap gap-2">
            {unassigned.map((p) => (
              <span key={p.id} className="px-2 py-1 bg-slate-200 rounded-lg text-sm">
                {p.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Start button */}
      {isHost && (
        <button
          onClick={onStartGame}
          disabled={!canStart}
          className={`w-full max-w-md py-4 rounded-xl text-xl font-bold transition-all ${
            canStart
              ? 'bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/20 cursor-pointer'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          {canStart ? 'Start Game' : 'Need 2+ teams with players'}
        </button>
      )}

      {!isHost && (
        <p className="text-slate-500 text-sm mt-4">Waiting for host to start the game...</p>
      )}
    </div>
  );
}
