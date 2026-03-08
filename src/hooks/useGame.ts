'use client';

import { useState, useEffect, useCallback } from 'react';
import type { GameState, TurnState, GuessResult } from '../lib/types';
import { useSocket } from './useSocket';

export function useGame() {
  const socket = useSocket();
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [lastGuessResult, setLastGuessResult] = useState<GuessResult | null>(null);
  const [wrongGuess, setWrongGuess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Try to restore session
    const savedPlayerId = sessionStorage.getItem('playerId');
    const savedRoomCode = sessionStorage.getItem('roomCode');
    if (savedPlayerId && savedRoomCode) {
      socket.emit('reconnect-player', { playerId: savedPlayerId, roomCode: savedRoomCode }, (response) => {
        if (response.success && response.state) {
          setPlayerId(savedPlayerId);
          setGameState(response.state);
        } else {
          sessionStorage.removeItem('playerId');
          sessionStorage.removeItem('roomCode');
        }
      });
    }
  }, [socket]);

  useEffect(() => {
    const onGameState = (state: GameState) => setGameState(state);
    const onTimerTick = (time: number) => setTimeLeft(time);
    const onGuessResult = (result: GuessResult) => {
      setLastGuessResult(result);
      setTimeout(() => setLastGuessResult(null), 2000);
    };
    const onWrongGuess = (data: { guess: string }) => {
      setWrongGuess(data.guess);
      setTimeout(() => setWrongGuess(null), 1000);
    };
    const onError = (message: string) => {
      setError(message);
      setTimeout(() => setError(null), 3000);
    };

    socket.on('game-state', onGameState);
    socket.on('timer-tick', onTimerTick);
    socket.on('guess-result', onGuessResult);
    socket.on('wrong-guess', onWrongGuess);
    socket.on('error', onError);

    return () => {
      socket.off('game-state', onGameState);
      socket.off('timer-tick', onTimerTick);
      socket.off('guess-result', onGuessResult);
      socket.off('wrong-guess', onWrongGuess);
      socket.off('error', onError);
    };
  }, [socket]);

  const createRoom = useCallback((playerName: string): Promise<{ roomCode: string; playerId: string }> => {
    return new Promise((resolve) => {
      socket.emit('create-room', { playerName }, (result) => {
        setPlayerId(result.playerId);
        sessionStorage.setItem('playerId', result.playerId);
        sessionStorage.setItem('roomCode', result.roomCode);
        resolve(result);
      });
    });
  }, [socket]);

  const joinRoom = useCallback((roomCode: string, playerName: string): Promise<{ success: boolean; error?: string }> => {
    return new Promise((resolve) => {
      socket.emit('join-room', { roomCode, playerName }, (result) => {
        if (result.success && result.playerId && result.state) {
          setPlayerId(result.playerId);
          setGameState(result.state);
          sessionStorage.setItem('playerId', result.playerId);
          sessionStorage.setItem('roomCode', roomCode);
        }
        resolve(result);
      });
    });
  }, [socket]);

  const pickTeam = useCallback((teamId: string) => {
    if (playerId) {
      socket.emit('pick-team', { playerId, teamId });
    }
  }, [socket, playerId]);

  const startGame = useCallback(() => {
    if (playerId) {
      socket.emit('start-game', { playerId });
    }
  }, [socket, playerId]);

  const submitGuess = useCallback((guess: string) => {
    if (playerId) {
      socket.emit('submit-guess', { playerId, guess });
    }
  }, [socket, playerId]);

  const playAgain = useCallback(() => {
    if (playerId) {
      socket.emit('play-again', { playerId });
    }
  }, [socket, playerId]);

  const nextTurn = useCallback(() => {
    if (playerId) {
      socket.emit('next-turn', { playerId });
    }
  }, [socket, playerId]);

  const addTeam = useCallback(() => {
    if (playerId) {
      socket.emit('add-team', { playerId });
    }
  }, [socket, playerId]);

  const removeTeam = useCallback((teamId: string) => {
    if (playerId) {
      socket.emit('remove-team', { playerId, teamId });
    }
  }, [socket, playerId]);

  // Derived state
  const currentPlayer = playerId && gameState ? gameState.players[playerId] : null;
  const isHost = currentPlayer?.isHost ?? false;
  const isDescriber = gameState?.currentTurn?.describerId === playerId;
  const isOnActiveTeam = currentPlayer?.teamId === gameState?.currentTurn?.teamId;
  const isGuesser = isOnActiveTeam && !isDescriber;

  return {
    socket,
    gameState,
    playerId,
    currentPlayer,
    timeLeft,
    lastGuessResult,
    wrongGuess,
    error,
    isHost,
    isDescriber,
    isOnActiveTeam,
    isGuesser,
    createRoom,
    joinRoom,
    pickTeam,
    startGame,
    submitGuess,
    playAgain,
    nextTurn,
    addTeam,
    removeTeam,
  };
}
