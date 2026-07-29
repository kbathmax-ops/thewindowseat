"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { QUESTIONS } from "@/lib/questions";

/**
 * Six single-select questions, one at a time. Answers are stored as option
 * indices and encoded into the results URL (?q=32102&g=1) so results are
 * shareable and computed deterministically from the same data.
 */
export default function QuizFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(QUESTIONS.map(() => null));
  const [leaving, setLeaving] = useState(false);

  const question = QUESTIONS[step];
  const total = QUESTIONS.length;

  const select = (optionIndex: number) => {
    if (leaving) return;
    const next = [...answers];
    next[step] = optionIndex;
    setAnswers(next);
    setLeaving(true);

    setTimeout(() => {
      if (step < total - 1) {
        setStep(step + 1);
        setLeaving(false);
      } else {
        const scalar = next.slice(0, 5).join("");
        const theme = next[5] ?? 0;
        router.push(`/results?q=${scalar}&g=${theme}`);
      }
    }, 280);
  };

  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-4 py-6">
      {/* top bar */}
      <div className="mb-10 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium">
          <span aria-hidden="true" className="inline-block h-5 w-3.5 rounded-[45%/34%] border-2 border-ink bg-butter" />
          The Window Seat
        </Link>
        <p className="text-sm text-warmstone" aria-live="polite">
          Question {step + 1} of {total}
        </p>
      </div>

      {/* progress bar */}
      <div
        className="mb-12 h-1.5 w-full overflow-hidden rounded-full bg-ink/10"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={step}
        aria-label="Quiz progress"
      >
        <div
          className="h-full rounded-full bg-butter-deep transition-all duration-500"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>

      {/* question card */}
      <div
        key={step}
        className={`flex-1 transition-all duration-300 ${leaving ? "-translate-x-4 opacity-0" : "animate-fade-up"}`}
      >
        <h1 className="mb-8 font-serif text-3xl font-medium leading-tight sm:text-4xl">{question.prompt}</h1>
        <div className="flex flex-col gap-3" role="group" aria-label="Answers">
          {question.options.map((option, i) => {
            const selected = answers[step] === i;
            return (
              <button
                key={option.label}
                onClick={() => select(i)}
                aria-pressed={selected}
                className={`rounded-card border px-6 py-4.5 text-left text-base transition-all sm:py-5 ${
                  selected
                    ? "border-butter-deep bg-butter shadow-md"
                    : "border-ink/10 bg-paper hover:-translate-y-0.5 hover:border-butter-deep hover:shadow-md"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* back */}
      <div className="mt-10 flex justify-between text-sm text-warmstone">
        <button
          onClick={() => step > 0 && setStep(step - 1)}
          disabled={step === 0}
          className="rounded-full px-4 py-2 transition-colors enabled:hover:text-ink disabled:opacity-40"
        >
          ← Back
        </button>
        <span>Your answers stay in the URL. Nothing is sent to a model.</span>
      </div>
    </div>
  );
}
