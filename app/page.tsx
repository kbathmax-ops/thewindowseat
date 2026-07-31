import Link from "next/link";
import PlaneIntro from "@/components/PlaneIntro";
import Wonders from "@/components/Wonders";
import ExperienceArc, { ExperienceStrip } from "@/components/ExperienceArc";
import MaskAtlas from "@/components/MaskAtlas";
import { COUNTRIES } from "@/lib/data";
import { PHOTO_CREDITS } from "@/lib/experiences";
import MASK_CREDITS from "@/public/masks/credits.json";
import MAP_CREDIT from "@/public/map/credits.json";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-sm font-medium">
      <span
        aria-hidden="true"
        className="inline-block h-5 w-3.5 rounded-[45%/34%] border-2 border-ink bg-butter"
      />
      The Window Seat
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <PlaneIntro />
      <div className="p-3 sm:p-5">
        <main className="mx-auto max-w-7xl">
          {/* hero — ten experiences fanned around the title */}
          <section
            className="relative flex flex-col overflow-hidden rounded-frame border-[6px] border-paper bg-paper shadow-xl md:min-h-[64rem] md:border-[10px]"
            style={
              {
                "--card": "clamp(104px, 9vw, 132px)",
                "--arc": "clamp(210px, 29vw, 434px)",
              } as React.CSSProperties
            }
          >
            {/* header */}
            <header className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-10">
              <Logo />
              <nav className="hidden items-center gap-8 text-sm text-ink/70 md:flex" aria-label="Primary">
                <a href="#atlas" className="transition-colors hover:text-ink">Atlas</a>
                <a href="#sources" className="transition-colors hover:text-ink">Sources</a>
              </nav>
              <Link
                href="/quiz"
                className="rounded-full bg-butter px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.03]"
              >
                Take the quiz
              </Link>
            </header>

            {/* the arc, with the title sitting in the clearing at its centre */}
            <div className="relative flex-1">
              <ExperienceArc />

              <div className="z-10 px-6 pb-10 pt-8 text-center md:absolute md:left-1/2 md:top-[64%] md:w-full md:max-w-2xl md:-translate-x-1/2 md:-translate-y-1/2 md:p-0">
                <h1 className="animate-fade-up text-[clamp(2.25rem,4.75vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.03em]">
                  The Window Seat
                </h1>
                {/* the tagline is a quotation, so it wears quotation marks */}
                <p
                  className="animate-fade-up mt-5 text-lg text-ink/80 sm:text-2xl"
                  style={{ animationDelay: "120ms" }}
                >
                  &ldquo;Be a traveller, not a tourist.&rdquo;
                </p>
                <p
                  className="animate-fade-up mx-auto mt-2 max-w-2xl text-sm leading-relaxed tracking-wide text-ink/60 sm:text-base"
                  style={{ animationDelay: "220ms" }}
                >
                  Created with stories by Marco Polo, Anthony Bourdain, and Xuanzang.
                </p>
                <Link
                  href="/quiz"
                  className="animate-fade-up mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-cream transition-transform hover:scale-[1.03]"
                  style={{ animationDelay: "320ms" }}
                >
                  Find my three countries
                  <span aria-hidden="true">→</span>
                </Link>

                <ExperienceStrip />
              </div>
            </div>

            {/* the three facts, below the fan */}
            <div className="relative z-10 grid gap-6 border-t border-ink/10 bg-paper/85 px-6 py-8 text-center backdrop-blur sm:grid-cols-3 sm:gap-0 sm:px-12">
              {[
                ["Six questions", "One at a time, about two minutes."],
                ["Three countries", "Each with the lesson it tends to teach."],
                [`${COUNTRIES.length} sourced essays`, "Every match links to the writing behind it."],
              ].map(([title, body], i) => (
                <div key={title} className={i > 0 ? "sm:border-l sm:border-ink/10 sm:px-6" : "sm:px-6"}>
                  <p className="text-lg font-medium sm:text-xl">{title}</p>
                  <p className="mx-auto mt-1.5 max-w-xs text-xs leading-relaxed text-ink/60 sm:text-sm">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* the mask atlas */}
          <MaskAtlas />

          {/* seven wonders band */}
          <Wonders />

          {/* sources note / footer */}
          <footer id="sources" className="mt-16 rounded-frame bg-ink px-6 py-14 text-center text-cream sm:mt-24 sm:px-12">
            <h2 className="mx-auto max-w-2xl text-2xl font-medium sm:text-3xl">
              Every lesson traces to a real essay by a real traveler.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/60">
              {COUNTRIES.length} countries across Africa, Asia, Europe, the Americas and Oceania.
              Each entry cites the first-person essay it came from. If we couldn&apos;t find real
              writing about a place, it isn&apos;t in the database.
            </p>
            <Link
              href="/quiz"
              className="mt-8 inline-block rounded-full bg-butter px-8 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Take the window seat
            </Link>
            <p className="mt-10 text-xs text-cream/40">
              The Window Seat · sources verified July 2026 · quotes are short and credited
            </p>

            {/* CC BY / BY-SA obliges us to name each photographer */}
            <p className="mx-auto mt-4 max-w-3xl text-[0.65rem] leading-relaxed text-cream/30">
              Hero photographs from Wikimedia Commons, used under CC BY and CC BY-SA:{" "}
              {PHOTO_CREDITS.map((credit, i) => (
                <span key={credit.file}>
                  {i > 0 && " · "}
                  <a
                    href={credit.sourceUrl}
                    className="underline decoration-cream/20 underline-offset-2 transition-colors hover:text-cream/60"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {credit.author}
                  </a>{" "}
                  ({credit.license})
                </span>
              ))}
            </p>

            <p className="mx-auto mt-3 max-w-3xl text-[0.65rem] leading-relaxed text-cream/30">
              Atlas masks, likewise:{" "}
              {MASK_CREDITS.map((credit, i) => (
                <span key={credit.file}>
                  {i > 0 && " · "}
                  <a
                    href={credit.sourceUrl}
                    className="underline decoration-cream/20 underline-offset-2 transition-colors hover:text-cream/60"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {credit.author}
                  </a>{" "}
                  ({credit.license})
                </span>
              ))}
              . Map:{" "}
              <a
                href={MAP_CREDIT.sourceUrl}
                className="underline decoration-cream/20 underline-offset-2 transition-colors hover:text-cream/60"
                target="_blank"
                rel="noreferrer"
              >
                world map
              </a>{" "}
              (public domain).
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
