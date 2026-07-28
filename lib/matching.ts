import { COUNTRIES, type Country, type GrowthTheme } from "./data";
import { QUESTIONS, type ScalarAxis } from "./questions";

export interface UserVector {
  novelty: number;
  sociality: number;
  discomfort: number;
  structure: number;
  pace: number;
  growthTheme: GrowthTheme;
}

export interface Match {
  country: Country;
  score: number;
  themeMatched: boolean;
}

const SCALAR_AXES: ScalarAxis[] = ["novelty", "sociality", "discomfort", "structure", "pace"];
const THEME_BONUS = 0.15;

/**
 * Deterministic similarity: 1 − mean(|user − country|) across the five scalar
 * axes, plus a flat bonus when the country's growth theme matches the user's.
 * No randomness, no model calls — same answers always yield the same three.
 */
export function scoreCountry(user: UserVector, country: Country): Match {
  const meanDiff =
    SCALAR_AXES.reduce((sum, axis) => sum + Math.abs(user[axis] - country.traits[axis]), 0) /
    SCALAR_AXES.length;
  const themeMatched = country.traits.growthTheme === user.growthTheme;
  return {
    country,
    score: 1 - meanDiff + (themeMatched ? THEME_BONUS : 0),
    themeMatched,
  };
}

export function topMatches(user: UserVector, n = 3): Match[] {
  return COUNTRIES.map((c) => scoreCountry(user, c))
    .sort((a, b) => b.score - a.score || a.country.name.localeCompare(b.country.name))
    .slice(0, n);
}

/**
 * Decode quiz answers from the results URL: `q` holds the five scalar option
 * indices as digits (0–3), `g` the growth-theme option index. Malformed
 * params fall back to middle-of-the-road defaults instead of crashing.
 */
export function vectorFromParams(q: string | undefined, g: string | undefined): UserVector {
  const digits = (q ?? "").split("").map((d) => Number.parseInt(d, 10));
  const scalars = QUESTIONS.filter((question) => question.kind === "scalar");
  const vector = { novelty: 0.5, sociality: 0.5, discomfort: 0.5, structure: 0.5, pace: 0.5 };
  scalars.forEach((question, i) => {
    const idx = digits[i];
    if (Number.isInteger(idx) && idx >= 0 && idx < question.options.length) {
      vector[question.axis] = question.options[idx].value;
    }
  });

  const themeQuestion = QUESTIONS.find((question) => question.kind === "theme");
  const gi = Number.parseInt(g ?? "", 10);
  const growthTheme =
    themeQuestion && Number.isInteger(gi) && gi >= 0 && gi < themeQuestion.options.length
      ? themeQuestion.options[gi].value
      : "self_knowledge";

  return { ...vector, growthTheme };
}

/** Human-readable tags derived from a country's dominant trait pulls. */
export function traitTags(country: Country): string[] {
  const { novelty, sociality, discomfort, structure, pace } = country.traits;
  const tags: string[] = [];
  if (novelty >= 0.7) tags.push("Disorienting");
  else if (novelty <= 0.35) tags.push("Familiar ground");
  if (sociality >= 0.7) tags.push("People-powered");
  else if (sociality <= 0.3) tags.push("Solitude");
  if (discomfort >= 0.7) tags.push("Growth by friction");
  else if (discomfort <= 0.25) tags.push("Ease");
  if (structure >= 0.7) tags.push("Orderly");
  else if (structure <= 0.2) tags.push("Improvised");
  if (pace >= 0.7) tags.push("Broad movement");
  else if (pace <= 0.3) tags.push("Slow immersion");
  return tags;
}
