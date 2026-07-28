import type { GrowthTheme } from "./data";

export type ScalarAxis = "novelty" | "sociality" | "discomfort" | "structure" | "pace";

export interface ScalarQuestion {
  kind: "scalar";
  axis: ScalarAxis;
  prompt: string;
  options: { label: string; value: number }[];
}

export interface ThemeQuestion {
  kind: "theme";
  prompt: string;
  options: { label: string; value: GrowthTheme }[];
}

export type Question = ScalarQuestion | ThemeQuestion;

const STEPS = [0, 1 / 3, 2 / 3, 1];

export const QUESTIONS: Question[] = [
  {
    kind: "scalar",
    axis: "novelty",
    prompt: "It's day one in a new country. What's the ideal feeling?",
    options: [
      { label: "Soft landing — legible, easy, familiar", value: STEPS[0] },
      { label: "Mostly familiar, with a few surprises", value: STEPS[1] },
      { label: "Noticeably foreign — keep me curious", value: STEPS[2] },
      { label: "Total disorientation. Rewire my brain", value: STEPS[3] },
    ],
  },
  {
    kind: "scalar",
    axis: "sociality",
    prompt: "Your best travel memories tend to involve…",
    options: [
      { label: "Being completely alone somewhere vast", value: STEPS[0] },
      { label: "Long solo stretches, a few good encounters", value: STEPS[1] },
      { label: "A rotating cast of strangers turned friends", value: STEPS[2] },
      { label: "Getting pulled into someone's family dinner", value: STEPS[3] },
    ],
  },
  {
    kind: "scalar",
    axis: "discomfort",
    prompt: "How do you feel about being uncomfortable?",
    options: [
      { label: "I optimize it away — comfort fuels me", value: STEPS[0] },
      { label: "A little friction is fine", value: STEPS[1] },
      { label: "Discomfort is usually where the good stuff is", value: STEPS[2] },
      { label: "If it doesn't test me, why go?", value: STEPS[3] },
    ],
  },
  {
    kind: "scalar",
    axis: "structure",
    prompt: "Your itinerary looks like…",
    options: [
      { label: "A blank page — I'll figure it out there", value: STEPS[0] },
      { label: "A loose list of maybes", value: STEPS[1] },
      { label: "Key things booked, gaps left open", value: STEPS[2] },
      { label: "A color-coded spreadsheet, and I love it", value: STEPS[3] },
    ],
  },
  {
    kind: "scalar",
    axis: "pace",
    prompt: "Two weeks, one country. How do you spend it?",
    options: [
      { label: "One town — I want to be a regular by Friday", value: STEPS[0] },
      { label: "Two bases, deep roots in each", value: STEPS[1] },
      { label: "A handful of stops, moving every few days", value: STEPS[2] },
      { label: "Cover as much ground as physically possible", value: STEPS[3] },
    ],
  },
  {
    kind: "theme",
    prompt: "What are you actually trying to learn right now?",
    options: [
      { label: "Patience — how to slow down without falling behind", value: "patience" },
      { label: "Courage — how to do the thing that scares me", value: "courage" },
      { label: "Belonging — how to connect beyond my own bubble", value: "belonging" },
      { label: "Self-knowledge — what I want when nobody's watching", value: "self_knowledge" },
    ],
  },
];

export const THEME_LABELS: Record<GrowthTheme, string> = {
  patience: "Patience",
  courage: "Courage",
  belonging: "Belonging",
  self_knowledge: "Self-knowledge",
};
