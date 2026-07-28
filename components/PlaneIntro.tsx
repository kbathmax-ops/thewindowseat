"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "seated" | "zoom" | "fade" | "done";

const SEEN_KEY = "tws-intro-seen";

/* The camera zooms toward this point: the center of the cabin window. */
const WINDOW_X = "72%";
const WINDOW_Y = "44%";

const SUNSET =
  "linear-gradient(to bottom, #4f6d88 0%, #7e97a9 24%, #b9c3c6 42%, #e6cba4 54%, #f2a75d 66%, #ee7d28 76%, #93481c 83%, #2a1a10 92%, #140d08 100%)";

/**
 * Recreation of the reference photo: a dark cabin at dusk, glowing seat-back
 * screens on the left, one bright window on the right. Clicking zooms the
 * whole scene into the window's view, which dissolves into the landing page.
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

  const board = () => {
    if (phase !== "seated") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    setPhase("zoom");
    timers.current.push(setTimeout(() => setPhase("fade"), 1650));
    timers.current.push(setTimeout(finish, 2250));
  };

  if (phase === null || phase === "done") return null;

  const zooming = phase === "zoom" || phase === "fade";

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden bg-[#0a0703] transition-opacity duration-500 ${
        phase === "fade" ? "opacity-0" : "opacity-100"
      } ${zooming ? "pointer-events-none" : ""}`}
      aria-label="Airplane cabin introduction"
    >
      {/* the cabin scene; scales into the window on boarding */}
      <div
        className="absolute inset-0"
        style={{
          transformOrigin: `${WINDOW_X} ${WINDOW_Y}`,
          transform: zooming ? "scale(11)" : "scale(1)",
          transition: "transform 1.7s cubic-bezier(0.72, 0, 0.3, 1)",
          willChange: "transform",
        }}
        aria-hidden="true"
      >
        {/* warm ceiling light strip and its glow */}
        <div
          className="absolute inset-x-0 top-0 h-[42%]"
          style={{
            background:
              "radial-gradient(90% 90% at 70% 0%, rgba(214,170,96,0.5) 0%, rgba(120,88,44,0.22) 45%, transparent 75%)",
          }}
        />
        <div
          className="absolute left-0 right-0 top-[5%] h-[6%] opacity-80 blur-[6px]"
          style={{
            background: "linear-gradient(to right, #4a3418, #e8ce8f 55%, #f7e3ab 70%, #6d4f26)",
          }}
        />

        {/* overhead service panel with lit signs */}
        <div className="absolute left-[21%] top-[13%] flex h-[3.5%] w-[7%] -rotate-3 items-center justify-center gap-[18%] rounded-md bg-[#191106]">
          <span className="h-2 w-2 rounded-full bg-[#ff9b3d] shadow-[0_0_10px_#ff9b3d]" />
          <span className="h-2 w-2 rounded-full bg-[#e0752c] shadow-[0_0_8px_#e0752c]" />
        </div>

        {/* seat backs with glowing screens, receding to the right */}
        {[
          { left: "-6%", height: "82%", screen: 1 },
          { left: "13%", height: "73%", screen: 1 },
          { left: "29%", height: "64%", screen: 1 },
          { left: "42%", height: "56%", screen: 0.8 },
        ].map((seat, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-[24%] rounded-t-[3.5rem]"
            style={{
              left: seat.left,
              height: seat.height,
              background: "linear-gradient(to bottom, #1c130a 0%, #120b06 30%, #090503 100%)",
              boxShadow: "inset -14px 8px 40px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.6)",
              zIndex: 4 - i,
            }}
          >
            <div
              className="absolute left-1/2 top-[9%] w-[62%] -translate-x-1/2 overflow-hidden rounded-lg"
              style={{
                aspectRatio: "4/3",
                background: "radial-gradient(80% 80% at 50% 45%, #16283f 0%, #0a1422 70%)",
                boxShadow: "0 0 34px rgba(110,160,230,0.18)",
                opacity: seat.screen,
              }}
            >
              {/* faint flight-map glow on each screen */}
              <div className="absolute left-[18%] top-[30%] h-[3px] w-[55%] rounded bg-[#3d5a80]/70" />
              <div className="absolute left-[30%] top-[52%] h-[3px] w-[40%] rounded bg-[#31496a]/60" />
              <div className="absolute left-[62%] top-[26%] h-1.5 w-1.5 rounded-full bg-[#8fb4e0]/80" />
              <div className="absolute left-[24%] top-[64%] h-1 w-1 rounded-full bg-[#6c92c2]/70" />
            </div>
          </div>
        ))}

        {/* cabin wall on the right */}
        <div
          className="absolute bottom-0 right-0 top-0 w-[44%]"
          style={{
            background:
              "radial-gradient(120% 100% at 100% 30%, #1a130b 0%, #100b06 55%, #070402 100%)",
          }}
        />

        {/* the window and its dusk view */}
        <div
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: WINDOW_X,
            top: WINDOW_Y,
            width: "clamp(110px, 13vw, 185px)",
            aspectRatio: "3 / 4.1",
          }}
        >
          <div
            className="h-full w-full p-[8%]"
            style={{
              borderRadius: "46% / 40%",
              background: "linear-gradient(145deg, #2b2013, #171008)",
              boxShadow: "0 0 60px rgba(240,150,60,0.18), inset 0 2px 6px rgba(255,220,160,0.12)",
            }}
          >
            <div
              className="h-full w-full"
              style={{
                borderRadius: "46% / 40%",
                background: SUNSET,
                boxShadow: "inset 0 0 24px rgba(20,10,5,0.55)",
              }}
            >
              <div className="relative h-full w-full">
                <span
                  className="absolute left-[42%] top-[70%] h-[7%] w-[13%] rounded-full bg-[#ffd9a0] blur-[3px]"
                  style={{ boxShadow: "0 0 18px 6px rgba(255,190,110,0.65)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* sleeping passenger silhouette at the right edge */}
        <div
          className="absolute bottom-0 right-[-6%] h-[38%] w-[20%] bg-[#040201] blur-[2px]"
          style={{ borderRadius: "58% 42% 0 0 / 52% 44% 0 0" }}
        />
        <div
          className="absolute bottom-[30%] right-[1%] h-[13%] w-[10%] bg-[#050302] blur-[3px]"
          style={{ borderRadius: "55% 45% 60% 40% / 60% 55% 45% 40%" }}
        />

        {/* foreground seat and blanket */}
        <div
          className="absolute bottom-0 left-[30%] h-[26%] w-[42%] bg-[#0b0704]"
          style={{ borderRadius: "40% 40% 0 0 / 90% 90% 0 0" }}
        />
        <div className="absolute bottom-[6%] left-[58%] h-[9%] w-[12%] rounded-[45%] bg-[#cdbfa4]/40 blur-[6px]" />

        {/* vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(105% 105% at 50% 45%, transparent 52%, rgba(0,0,0,0.6) 100%)" }}
        />
      </div>

      {/* full-screen sky that the window view becomes */}
      <div
        className="absolute inset-0"
        style={{
          background: SUNSET,
          opacity: zooming ? 1 : 0,
          transition: "opacity 0.55s ease 1.05s",
        }}
        aria-hidden="true"
      />

      {/* copy and controls */}
      <div
        className={`absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-6 pb-12 text-center transition-opacity duration-400 ${
          zooming ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.35em] text-[#c9b98f]">Now boarding</p>
        <h1 className="text-4xl font-medium text-cream sm:text-5xl">The Window Seat</h1>
        <p className="max-w-md text-sm leading-relaxed text-[#b7ac93]">
          A short quiz that matches you with three countries, using lessons from real travel
          essays.
        </p>
        <button
          onClick={board}
          className="rounded-full bg-butter px-8 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Take the window seat
        </button>
      </div>

      <button
        onClick={finish}
        className={`absolute right-5 top-5 rounded-full border border-[#4a4130] px-4 py-2 text-xs text-[#b7ac93] transition-colors hover:text-cream ${
          zooming ? "opacity-0" : ""
        }`}
      >
        Skip intro
      </button>
    </div>
  );
}
