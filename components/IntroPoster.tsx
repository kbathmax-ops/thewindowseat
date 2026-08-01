"use client";

import { useEffect, useRef, useState } from "react";

const SEEN_KEY = "tws-intro-seen";

/**
 * The intro poster, ported from the Claude Design project "The Window Seat quiz"
 * (Intro Poster.dc.html, variant 2a — "Stacked skyline").
 *
 * The design is a 900x900 poster. Every measurement below is kept as its original
 * design number against --u, one 900th of the stage's side, so the composition
 * scales to any viewport without being redrawn. The stage is letterboxed rather
 * than cropped, so the foot never gets cut off on a narrow screen.
 */
const DESIGN = 900;
const u = (n: number) => `calc(var(--u) * ${n})`;

export default function IntroPoster() {
  const [phase, setPhase] = useState<"hidden" | "showing" | "leaving" | "done">("hidden");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    setPhase(sessionStorage.getItem(SEEN_KEY) ? "done" : "showing");
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const finish = () => {
    sessionStorage.setItem(SEEN_KEY, "1");
    setPhase("done");
  };

  const takeOff = () => {
    if (phase !== "showing") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    setPhase("leaving");
    timers.current.push(setTimeout(finish, 900));
  };

  /* Escape leaves too — the design has no visible skip control. */
  useEffect(() => {
    if (phase !== "showing") return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && takeOff();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (phase === "hidden" || phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={
        {
          "--u": `calc(min(100vw, 100vh) / ${DESIGN})`,
          background: "linear-gradient(#f6f2e7 0%, #efeade 55%, #e6e0d0 100%)",
          color: "#17150f",
          opacity: phase === "leaving" ? 0 : 1,
          transform: phase === "leaving" ? "scale(1.04)" : "scale(1)",
          transition: "opacity 0.85s ease, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
        } as React.CSSProperties
      }
      aria-label="The Window Seat"
    >
      <div
        className="relative overflow-hidden"
        style={{ width: u(DESIGN), height: u(DESIGN) }}
      >
        {/* the photograph, dissolved into the paper along its top edge */}
        <img
          src="/intro/machu-picchu-1912.jpg"
          alt="Machu Picchu, photographed by the 1912 Peruvian expedition"
          style={{
            position: "absolute",
            left: u(-58),
            top: u(103),
            width: u(1031),
            height: u(852),
            /* Tailwind preflight caps images at 100% of their box, which would
               clamp the plate to the stage and leave a gap at its right edge. */
            maxWidth: "none",
            objectFit: "cover",
            filter: "sepia(0.34) contrast(1.06) brightness(1.02)",
            zIndex: 1,
            WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,1) ${u(110)})`,
            maskImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,1) ${u(110)})`,
          }}
        />

        {/* THE WINDOW. The design's 72-unit left offset sits on this wrapper,
            because fade-up also drives transform and would otherwise cancel it. */}
        <div
          className="absolute inset-x-0 text-center font-display"
          style={{ top: u(62), zIndex: 2, transform: `translateX(${u(-72)})` }}
        >
          <div
            className="animate-fade-up"
            style={{ fontSize: u(180), lineHeight: 0.88, letterSpacing: 0, marginTop: u(10) }}
          >
            THE WINDOW
          </div>
        </div>

        {/* SEAT, in front of the ridge */}
        <div
          className="absolute text-center font-display"
          style={{
            left: u(106),
            top: u(209),
            zIndex: 4,
            transform: `translateX(${u(-72)})`,
            fontSize: u(180),
            lineHeight: 0.88,
            letterSpacing: "-0.005em",
            textShadow: `0 ${u(10)} ${u(44)} rgba(242,239,231,0.45)`,
          }}
        >
          <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
            SEAT
          </div>
        </div>

        {/* the foot: take off, the credit, the tagline */}
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col items-center"
          style={{
            zIndex: 5,
            gap: u(16),
            padding: `0 ${u(60)} ${u(46)}`,
            background: "linear-gradient(rgba(23,21,15,0) 0%, rgba(23,21,15,0.72) 62%)",
          }}
        >
          <button
            onClick={takeOff}
            className="animate-fade-up cursor-pointer whitespace-nowrap uppercase transition-transform hover:scale-[1.03] active:scale-[0.98]"
            style={{
              background: "#fbfaf5",
              color: "#17150f",
              borderRadius: 999,
              padding: `${u(15)} ${u(44)}`,
              fontSize: `max(11px, ${u(13)})`,
              letterSpacing: "0.22em",
              boxShadow: `0 ${u(12)} ${u(34)} rgba(23,21,15,0.4)`,
              animationDelay: "320ms",
            }}
          >
            Take off
          </button>
          <p
            className="animate-fade-up text-center uppercase"
            style={{
              fontSize: `max(11px, ${u(14)})`,
              letterSpacing: "0.2em",
              color: "#f2efe7",
              animationDelay: "420ms",
            }}
          >
            Created with stories by Marco Polo, Anthony Bourdain, and Xuanzang
          </p>
          <p
            className="animate-fade-up text-center font-bold uppercase"
            style={{
              fontSize: `max(14px, ${u(18)})`,
              letterSpacing: "0.2em",
              color: "#f2efe7",
              animationDelay: "520ms",
            }}
          >
            &ldquo;Be a traveller, not a tourist.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
