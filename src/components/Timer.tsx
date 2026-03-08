'use client';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
  size?: number;
}

export default function Timer({ timeLeft, totalTime, size = 120 }: TimerProps) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / totalTime;
  const strokeDashoffset = circumference * (1 - progress);
  const isWarning = timeLeft <= 10;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="6"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={isWarning ? '#ef4444' : '#4F46E5'}
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <span
        className={`absolute text-3xl font-bold ${isWarning ? 'text-red-500 animate-pulse' : 'text-slate-800'}`}
      >
        {timeLeft}
      </span>
    </div>
  );
}
