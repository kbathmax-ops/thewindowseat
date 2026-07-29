import Link from "next/link";
import PlaneIntro from "@/components/PlaneIntro";
import Masks from "@/components/Masks";
import Wonders from "@/components/Wonders";
import { COUNTRIES } from "@/lib/data";

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

function Chip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-butter-deep/70 bg-paper/90 px-4 py-2 text-xs font-medium shadow-sm backdrop-blur sm:text-sm ${className}`}
    >
      <span aria-hidden="true" className="inline-block h-2 w-2 rotate-45 bg-butter-deep" />
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <PlaneIntro />
      <div className="p-3 sm:p-5">
        <main className="mx-auto max-w-7xl">
          {/* hero — framed like a cabin window onto a landscape */}
          <section className="relative overflow-hidden rounded-frame border-[6px] border-paper bg-gradient-to-b from-haze via-[#c3cbc2] to-[#e3c98f] shadow-xl sm:border-[10px]">
            {/* distant mountains */}
            <svg
              className="absolute bottom-0 left-0 h-3/5 w-full text-[#7d8f94]"
              viewBox="0 0 1200 400"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path fill="currentColor" opacity="0.5" d="M0 400 L0 260 L140 150 L260 250 L390 120 L520 260 L640 170 L760 280 L900 100 L1040 240 L1200 160 L1200 400 Z" />
              <path fill="#5f7176" opacity="0.55" d="M0 400 L0 320 L180 220 L330 320 L480 210 L650 330 L820 230 L980 330 L1120 260 L1200 300 L1200 400 Z" />
              <path fill="#d9b273" opacity="0.9" d="M0 400 L0 360 Q300 330 600 356 Q900 380 1200 350 L1200 400 Z" />
            </svg>

            {/* header */}
            <header className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-10">
              <Logo />
              <nav className="hidden items-center gap-8 text-sm text-ink/70 md:flex" aria-label="Primary">
                <a href="#masks" className="transition-colors hover:text-ink">Masks</a>
                <a href="#sources" className="transition-colors hover:text-ink">Sources</a>
              </nav>
              <Link
                href="/quiz"
                className="rounded-full bg-butter px-5 py-2.5 text-sm font-medium transition-transform hover:scale-[1.03]"
              >
                Take the quiz
              </Link>
            </header>

            {/* headline — the intro's type lands here and stays */}
            <div className="relative z-10 mx-auto max-w-3xl px-6 pt-10 text-center sm:pt-16">
              <h1 className="animate-fade-up font-serif text-[clamp(2.75rem,9vw,6rem)] font-medium leading-[0.94] tracking-[-0.02em]">
                The Window Seat
              </h1>
              <p
                className="animate-fade-up mt-5 font-serif text-lg text-ink/80 sm:text-2xl"
                style={{ animationDelay: "120ms" }}
              >
                Be a traveller, not a tourist.
              </p>
              <p
                className="animate-fade-up mx-auto mt-4 max-w-2xl font-serif text-sm leading-relaxed tracking-wide text-ink/60 sm:text-base"
                style={{ animationDelay: "220ms" }}
              >
                Created with stories by Marco Polo, Anthony Bourdain, and Xuanzang.
              </p>
              <p
                className="animate-fade-up mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base"
                style={{ animationDelay: "320ms" }}
              >
                A short quiz for creatives, builders and founders. Answer six questions and get
                three countries, each picked for the lesson travel writers say it teaches.
              </p>
            </div>

            {/* floating chips + stat */}
            <div className="relative z-10 mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3 px-6 sm:mt-14">
              <Chip className="animate-drift">{COUNTRIES.length} sourced essays</Chip>
              <Chip className="animate-drift [animation-delay:600ms]">5 continents</Chip>
              <Chip className="animate-drift [animation-delay:1200ms]">Zero AI at runtime</Chip>
            </div>

            <div className="relative z-10 flex items-end justify-between px-6 pb-32 pt-10 sm:px-12 sm:pb-36">
              <p className="max-w-[16rem] text-xs leading-relaxed text-ink/70 sm:text-sm">
                Every match comes with the lesson its country tends to teach, and a link to the
                essay behind it.
              </p>
              <p className="text-right">
                <span className="text-4xl font-medium sm:text-5xl">{COUNTRIES.length}</span>
                <span className="block text-xs text-ink/70 sm:text-sm">
                  real essays, five continents
                </span>
              </p>
            </div>

            {/* booking-style quiz bar */}
            <div className="absolute inset-x-3 bottom-3 z-20 sm:inset-x-10 sm:bottom-6">
              <div className="flex flex-col items-stretch gap-3 rounded-[1.9rem] bg-paper p-3 shadow-lg sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:p-2.5">
                {[
                  ["Questions", "6, one at a time"],
                  ["Time", "About 2 minutes"],
                  ["Results", "3 countries + sources"],
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={`flex-1 px-4 py-1.5 sm:py-1 ${i > 0 ? "sm:border-l sm:border-ink/10" : ""}`}
                  >
                    <p className="text-[11px] uppercase tracking-wider text-warmstone">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                ))}
                <Link
                  href="/quiz"
                  className="rounded-full bg-butter px-7 py-3.5 text-center text-sm font-medium transition-transform hover:scale-[1.02] sm:ml-2"
                >
                  Find my three countries
                </Link>
              </div>
            </div>
          </section>

          {/* masks gateway */}
          <div id="masks">
            <Masks />
          </div>

          {/* seven wonders band */}
          <Wonders />

          {/* sources note / footer */}
          <footer id="sources" className="mt-16 rounded-frame bg-ink px-6 py-14 text-center text-cream sm:mt-24 sm:px-12">
            <h2 className="mx-auto max-w-2xl font-serif text-2xl font-medium sm:text-3xl">
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
          </footer>
        </main>
      </div>
    </>
  );
}
