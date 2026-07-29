import type { Metadata } from "next";
import Link from "next/link";
import { topMatches, traitTags, vectorFromParams } from "@/lib/matching";
import { THEME_LABELS } from "@/lib/questions";

export const metadata: Metadata = {
  title: "Your Three Countries — The Window Seat",
};

const SEATS = ["1A", "1B", "1C"];

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; g?: string }>;
}) {
  const { q, g } = await searchParams;
  const user = vectorFromParams(q, g);
  const matches = topMatches(user, 3);

  return (
    <div className="p-3 sm:p-5">
      <main className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between px-2 py-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium">
            <span aria-hidden="true" className="inline-block h-5 w-3.5 rounded-[45%/34%] border-2 border-ink bg-butter" />
            The Window Seat
          </Link>
          <Link
            href="/quiz"
            className="rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-sm font-medium transition-colors hover:border-butter-deep"
          >
            Retake the quiz
          </Link>
        </header>

        <section className="px-2 py-10 text-center sm:py-14">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-warmstone">Boarding complete</p>
          <h1 className="font-serif text-4xl font-medium sm:text-5xl">Your three countries</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-warmstone sm:text-base">
            Matched to your answers, with extra weight on{" "}
            <span className="rounded-full bg-butter px-2.5 py-0.5 font-medium text-ink">
              {THEME_LABELS[user.growthTheme].toLowerCase()}
            </span>
            . Each lesson links to the essay it came from.
          </p>
        </section>

        <div className="flex flex-col gap-6 pb-10">
          {matches.map((match, rank) => {
            const c = match.country;
            const pct = Math.round(Math.min(match.score, 1) * 100);
            return (
              <article
                key={c.id}
                className="animate-fade-up overflow-hidden rounded-frame bg-paper shadow-md"
                style={{ animationDelay: `${rank * 140}ms` }}
              >
                {/* card header band */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 bg-gradient-to-r from-butter/70 to-cream px-6 py-4 sm:px-9">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border-2 border-ink bg-paper px-3 py-1 text-sm font-medium">
                      Seat {SEATS[rank]}
                    </span>
                    <span className="text-sm text-warmstone">
                      {c.continent} · {c.region}
                    </span>
                  </div>
                  <span className="text-sm font-medium">{pct}% match</span>
                </div>

                <div className="px-6 py-8 sm:px-9">
                  <h2 className="font-serif text-3xl font-medium sm:text-4xl">{c.name}</h2>
                  <p className="mt-3 text-xl leading-snug sm:text-2xl">
                    <span className="bg-butter px-1.5">{c.lesson}</span>
                  </p>
                  <p className="mt-5 max-w-2xl leading-relaxed text-warmstone">{c.summary}</p>

                  {/* pull quote */}
                  <blockquote className="mt-6 border-l-4 border-butter-deep pl-5 text-lg leading-snug">
                    {c.pullQuoteVerbatim ? <>&ldquo;{c.pullQuote}&rdquo;</> : <>{c.pullQuote}</>}
                    <footer className="mt-2 text-xs text-warmstone">
                      {c.pullQuoteVerbatim ? "From the essay" : "Paraphrased from the essay"}
                    </footer>
                  </blockquote>

                  {/* trait tags */}
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Traits">
                    {traitTags(c).map((tag) => (
                      <li key={tag} className="rounded-full border border-ink/15 px-3.5 py-1.5 text-xs font-medium">
                        {tag}
                      </li>
                    ))}
                    <li className="rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-cream">
                      Teaches {THEME_LABELS[c.traits.growthTheme].toLowerCase()}
                    </li>
                    {match.themeMatched && (
                      <li className="rounded-full bg-butter px-3.5 py-1.5 text-xs font-medium">
                        Matches your goal
                      </li>
                    )}
                  </ul>

                  {/* activities */}
                  <h3 className="mt-8 text-xs uppercase tracking-[0.25em] text-warmstone">
                    While you&apos;re there
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-1">
                    {c.activities.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm leading-relaxed">
                        <span aria-hidden="true" className="mt-1.5 inline-block h-2 w-2 shrink-0 rotate-45 bg-butter-deep" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* source citation */}
                  <p className="mt-8 border-t border-ink/10 pt-5 text-sm text-warmstone">
                    Lesson sourced from{" "}
                    <a
                      href={c.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-ink underline decoration-butter-deep decoration-2 underline-offset-4 transition-colors hover:decoration-ink"
                    >
                      &ldquo;{c.source.title}&rdquo;
                    </a>{" "}
                    {c.source.author ? `by ${c.source.author}, ` : "— "}
                    {c.source.publication} ↗
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="pb-14 text-center text-xs text-warmstone">
          <p>
            The same answers always return the same three countries. No model runs at any point.
          </p>
          <Link href="/" className="mt-3 inline-block underline underline-offset-4 hover:text-ink">
            Back to the window
          </Link>
        </footer>
      </main>
    </div>
  );
}
