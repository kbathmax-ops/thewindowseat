"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "seated" | "shade" | "zoom" | "done";

const SEEN_KEY = "tws-intro-seen";

/**
 * Full-screen airplane-cabin intro. One click lifts the window shade, then the
 * window itself expands until its view becomes the app. Shown once per session.
 */
export default function PlaneIntro() {
  const [phase, setPhase] = useState<Phase | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setPhase(sessionStorage.getItem(SEEN_KEY) ? "done" : "seated");
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const finish = () => {
    sessionStorage.setItem(SEEN_KEY, "1");
    setPhase("done");
  };

  const open = () => {
    if (phase !== "seated") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      finish();
      return;
    }
    setPhase("shade");
    timers.current.push(setTimeout(() => setPhase("zoom"), 950));
    timers.current.push(setTimeout(finish, 2150));
  };

  if (phase === null || phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-night transition-opacity duration-500 ${
        phase === "zoom" ? "pointer-events-none" : ""
      }`}
      aria-label="Airplane cabin introduction"
    >
      {/* warm cabin ceiling light */}
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#8a6b3e]/60 via-[#4a3a22]/30 to-transparent" />
      {/* seat-back silhouettes */}
      <div className="absolute bottom-0 left-[-4rem] hidden h-[70%] w-[46%] items-end gap-6 sm:flex" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="relative h-full w-40 shrink-0 rounded-t-[2.5rem] bg-cabin/90 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]"
            style={{ height: `${72 - i * 6}%` }}
          >
            <div className="absolute left-1/2 top-10 h-16 w-24 -translate-x-1/2 rounded-md bg-[#2e2617] shadow-[0_0_24px_rgba(240,180,90,0.25)]" />
          </div>
        ))}
      </div>

      {/* the window */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative h-[19rem] w-[14rem] border-[14px] border-[#37301f] bg-[#0d1b33] shadow-[0_0_0_10px_#221c10,0_0_80px_rgba(0,0,0,0.8)]"
          style={{
            borderRadius: "42% / 34%",
            overflow: "hidden",
            animation: phase === "zoom" ? "window-zoom 1.2s cubic-bezier(0.65,0,0.35,1) forwards" : undefined,
          }}
        >
          {/* sunset view inside the window */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2c4f] via-[#5c3f68] via-40% to-[#f08a36]">
            <div className="absolute bottom-6 left-1/2 h-10 w-10 -translate-x-1/2 rounded-full bg-[#ffd27a] blur-[6px]" />
            <div className="absolute bottom-0 h-8 w-full bg-[#2a1a10]/70 blur-[3px]" />
          </div>
          {/* the shade */}
          <div
            className="absolute inset-x-0 top-0 h-[104%] bg-gradient-to-b from-[#d9d2bf] to-[#b9b09a]"
            style={{
              animation: phase !== "seated" ? "shade-lift 0.9s cubic-bezier(0.6,0,0.3,1) forwards" : undefined,
            }}
          >
            <div className="absolute bottom-3 left-1/2 h-1.5 w-14 -translate-x-1/2 rounded-full bg-[#8f866f]" />
          </div>
        </div>
      </div>

      {/* copy + controls */}
      <div
        className={`absolute inset-x-0 bottom-0 flex flex-col items-center gap-5 px-6 pb-14 text-center transition-opacity duration-500 ${
          phase === "zoom" ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.35em] text-[#c9b98f]">Now boarding</p>
        <h1 className="text-4xl font-medium text-cream sm:text-5xl">The Window Seat</h1>
        <p className="max-w-md text-sm leading-relaxed text-[#b7ac93]">
          Three countries. One lesson each. Matched from real travel essays — not an algorithm's
          imagination.
        </p>
        <button
          onClick={open}
          className="rounded-full bg-butter px-8 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Open the shade
        </button>
      </div>

      <button
        onClick={finish}
        className="absolute right-5 top-5 rounded-full border border-[#4a4130] px-4 py-2 text-xs text-[#b7ac93] transition-colors hover:text-cream"
      >
        Skip intro
      </button>
    </div>
  );
}
