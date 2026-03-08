import { stringSimilarity } from 'string-similarity-js';

function normalize(str: string): string {
  return str.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '');
}

function normalizeCompact(str: string): string {
  return normalize(str).replace(/\s+/g, '');
}

export function checkGuess(
  guess: string,
  target: string
): { matched: boolean; perfectSpelling: boolean; points: number } {
  const normalizedGuess = normalize(guess);
  const normalizedTarget = normalize(target);

  if (!normalizedGuess) {
    return { matched: false, perfectSpelling: false, points: 0 };
  }

  // Exact match (normalized)
  if (normalizedGuess === normalizedTarget) {
    return { matched: true, perfectSpelling: true, points: 2 };
  }

  // Compact match (e.g., "icecream" vs "ice cream")
  if (normalizeCompact(guess) === normalizeCompact(target)) {
    return { matched: true, perfectSpelling: true, points: 2 };
  }

  // Fuzzy match using Dice coefficient
  const similarity = stringSimilarity(normalizedGuess, normalizedTarget);
  const threshold = normalizedTarget.length <= 4 ? 0.8 : 0.7;

  if (similarity >= threshold) {
    return { matched: true, perfectSpelling: false, points: 1 };
  }

  // Also check compact versions for fuzzy
  const compactSimilarity = stringSimilarity(
    normalizeCompact(guess),
    normalizeCompact(target)
  );
  if (compactSimilarity >= threshold) {
    return { matched: true, perfectSpelling: false, points: 1 };
  }

  return { matched: false, perfectSpelling: false, points: 0 };
}
