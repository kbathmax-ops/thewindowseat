"use client";

import { useEffect, useRef, useState } from "react";

const SEEN_KEY = "tws-intro-seen";

/**
 * The intro poster, ported from the Claude Design project "The Window Seat quiz"
 * (Intro Poster.dc.html, variant 2a — "Stacked skyline").
 *
 * The composition is a 900x900 poster: the 1912 Machu Picchu photograph fills the
 * lower seven eighths, THE / WINDOW sit behind the ridgeline, a cut-out of the
 * peaks is layered over them, and SEAT lands in front of everything. Every design
 * measurement below is expressed against --u, one 900th of the poster's side, so
 * the whole thing scales without redrawing the layout.
 */
const DESIGN = 900;

/* Both photographic layers sit at the same size and grade, so they register exactly. */
const PLATE: React.CSSProperties = {
  position: "absolute",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "calc(var(--u) * 788)",
  objectFit: "cover",
  filter: "sepia(0.34) contrast(1.06) brightness(1.02)",
};

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

  /* Escape leaves the poster too — the design has no visible skip control. */
  useEffect(() => {
    if (phase !== "showing") return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && takeOff();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (phase === "hidden" || phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
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
      {/* the photograph, dissolved into the paper along its top edge */}
      <img
        src="/intro/machu-picchu-1912.png"
        alt="Machu Picchu photographed in 1912"
        style={{
          ...PLATE,
          zIndex: 1,
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,1) calc(var(--u) * 110))",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,1) calc(var(--u) * 110))",
        }}
      />

      {/* THE / WINDOW — behind the peaks. The design's 72-unit left offset lives on
          this wrapper, because the fade-up animation on the child also drives
          transform and would otherwise cancel it. */}
      <div
        className="absolute inset-x-0 text-center font-display"
        style={{
          top: "calc(var(--u) * 62)",
          zIndex: 2,
          transform: "translateX(calc(var(--u) * -72))",
        }}
      >
        <div className="animate-fade-up">
          <div style={{ fontSize: "calc(var(--u) * 54)", lineHeight: 1, letterSpacing: "0.05em" }}>
            THE
          </div>
          <div
            style={{
              fontSize: "calc(var(--u) * 180)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              marginTop: "calc(var(--u) * 10)",
            }}
          >
            WINDOW
          </div>
        </div>
      </div>

      {/* the cut-out ridgeline, laid back over the type */}
      <img src="/intro/machu-mountains.png" alt="" aria-hidden="true" style={{ ...PLATE, zIndex: 3 }} />

      {/* SEAT — in front of everything */}
      <div
        className="absolute inset-x-0 text-center font-display"
        style={{
          top: "calc(var(--u) * 288)",
          zIndex: 4,
          transform: "translateX(calc(var(--u) * -72))",
          fontSize: "calc(var(--u) * 180)",
          lineHeight: 0.88,
          letterSpacing: "-0.005em",
          textShadow: "0 calc(var(--u) * 10) calc(var(--u) * 44) rgba(242,239,231,0.45)",
        }}
      >
        <div className="animate-fade-up" style={{ animationDelay: "160ms" }}>
          SEAT
        </div>
      </div>

      {/* the foot: take off, the credit, the quotation */}
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col items-center"
        style={{
          zIndex: 5,
          gap: "calc(var(--u) * 16)",
          padding: "0 calc(var(--u) * 60) calc(var(--u) * 46)",
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
            padding: "calc(var(--u) * 15) calc(var(--u) * 44)",
            fontSize: "calc(var(--u) * 13)",
            letterSpacing: "0.22em",
            boxShadow: "0 calc(var(--u) * 12) calc(var(--u) * 34) rgba(23,21,15,0.4)",
            animationDelay: "320ms",
          }}
        >
          Take off
        </button>
        <p
          className="animate-fade-up text-center uppercase"
          style={{
            fontSize: "calc(var(--u) * 11)",
            letterSpacing: "0.2em",
            color: "#f2efe7",
            animationDelay: "420ms",
          }}
        >
          Created with stories by Marco Polo, Anthony Bourdain, and Xuanzang
        </p>
        <p
          className="animate-fade-up font-display"
          style={{
            fontSize: "calc(var(--u) * 26)",
            letterSpacing: "0.02em",
            color: "#fbfaf5",
            animationDelay: "520ms",
          }}
        >
          &ldquo;Be a traveller, not a tourist.&rdquo;
        </p>
      </div>
    </div>
  );
}
