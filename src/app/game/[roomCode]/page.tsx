'use client';

import { useGame } from '../../../hooks/useGame';
import { useSocket } from '../../../hooks/useSocket';
import Lobby from '../../../components/Lobby';
import DescriberView from '../../../components/DescriberView';
import GuesserView from '../../../components/GuesserView';
import SpectatorView from '../../../components/SpectatorView';
import Scoreboard from '../../../components/Scoreboard';
import { TURN_START_COUNTDOWN } from '../../../lib/utils';

export default function GamePage() {
  useSocket(); // ensure connected

  const {
    gameState,
    playerId,
    timeLeft,
    isHost,
    isDescriber,
    isGuesser,
    lastGuessResult,
    wrongGuess,
    error,
    pickTeam,
    startGame,
    submitGuess,
    playAgain,
    nextTurn,
    addTeam,
    removeTeam,
    transferHost,
    revokeWord,
  } = useGame();

  if (!gameState || !playerId) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-slate-500">Connecting...</p>
        </div>
      </div>
    );
  }

  // Error toast
  const errorToast = error ? (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce">
      {error}
    </div>
  ) : null;

  // Lobby phase
  if (gameState.phase === 'lobby') {
    return (
      <>
        {errorToast}
        <Lobby
          gameState={gameState}
          playerId={playerId}
          isHost={isHost}
          onPickTeam={pickTeam}
          onStartGame={startGame}
          onAddTeam={addTeam}
          onRemoveTeam={removeTeam}
          onTransferHost={transferHost}
        />
      </>
    );
  }

  // Turn start countdown
  if (gameState.phase === 'turn-start' && gameState.currentTurn) {
    const describingTeam = gameState.teams.find(t => t.id === gameState.currentTurn?.teamId);
    const describer = gameState.players[gameState.currentTurn.describerId];

    return (
      <>
        {errorToast}
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col items-center justify-center p-4">
          <p className="text-slate-500 text-sm mb-2">
            Round {gameState.currentRound} of {gameState.totalRounds}
          </p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: describingTeam?.color }}>
            {describingTeam?.name}
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            <span className="font-bold">{describer?.name}</span> is describing
          </p>
          <div className="text-8xl font-black animate-pulse text-indigo-600">
            {timeLeft || TURN_START_COUNTDOWN}
          </div>
          <p className="mt-4 text-slate-400">Get ready!</p>
        </div>
      </>
    );
  }

  // Describing phase
  if (gameState.phase === 'describing' && gameState.currentTurn) {
    if (isDescriber) {
      return (
        <>
          {errorToast}
          <DescriberView turn={gameState.currentTurn} timeLeft={timeLeft} />
        </>
      );
    }

    if (isGuesser) {
      return (
        <>
          {errorToast}
          <GuesserView
            turn={gameState.currentTurn}
            timeLeft={timeLeft}
            onSubmitGuess={submitGuess}
            lastGuessResult={lastGuessResult}
            wrongGuess={wrongGuess}
          />
        </>
      );
    }

    // Spectator (other team)
    return (
      <>
        {errorToast}
        <SpectatorView
          gameState={gameState}
          turn={gameState.currentTurn}
          timeLeft={timeLeft}
        />
      </>
    );
  }

  // Turn end
  if (gameState.phase === 'turn-end') {
    const nextIndex = gameState.currentTurnIndex + 1;
    const nextTurnInfo = gameState.turnOrder[nextIndex];
    const isNextDescriber = nextTurnInfo?.describerId === playerId;
    const nextDescriberName = nextTurnInfo ? gameState.players[nextTurnInfo.describerId]?.name : undefined;

    return (
      <>
        {errorToast}
        <Scoreboard
          gameState={gameState}
          turnResult={gameState.currentTurn}
          isGameOver={false}
          isHost={isHost}
          isNextDescriber={isNextDescriber}
          nextDescriberName={nextDescriberName}
          onNextTurn={nextTurn}
          onRevokeWord={revokeWord}
        />
      </>
    );
  }

  // Game over
  if (gameState.phase === 'game-over') {
    return (
      <>
        {errorToast}
        <Scoreboard
          gameState={gameState}
          isGameOver={true}
          isHost={isHost}
          onPlayAgain={playAgain}
        />
      </>
    );
  }

  return null;
}
