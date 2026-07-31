"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MASK_ATLAS, TRAVELLERS, type MaskEntry } from "@/lib/masks";

/**
 * The map is a Mercator wall chart centred near 17°E and cropped top and bottom,
 * so it covers roughly 164°W–199°E and 85°N–61°S — Antarctica is off the sheet.
 * It carries no graticule, so these constants were fitted to ten labelled
 * landmarks: longitude against Alaska, Mexico, Brazil, Saudi Arabia, Mongolia
 * and New Zealand; latitude against Iceland, North Cape, Cape Agulhas and Cape
 * Horn. All positions are percentages of the image.
 */
const PRIME_MERIDIAN_X = 45.3;
const PERCENT_PER_DEGREE_LON = 0.2755;
const EQUATOR_Y = 70.05;
const MERCATOR_SCALE = 22.11;

/** Mercator's y, in the projection's own units. */
const project = (deg: number) => Math.log(Math.tan(Math.PI / 4 + (deg * Math.PI) / 360));

function position(entry: MaskEntry) {
  return {
    left: `${PRIME_MERIDIAN_X + entry.lon * PERCENT_PER_DEGREE_LON}%`,
    top: `${EQUATOR_Y - project(entry.lat) * MERCATOR_SCALE}%`,
  };
}

export default function MaskAtlas() {
  const [unrolled, setUnrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const scroll = useRef<HTMLDivElement>(null);

  /* The map unrolls the first time the section comes into view. */
  useEffect(() => {
    const node = scroll.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setUnrolled(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setUnrolled(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const active = MASK_ATLAS.find((m) => m.slug === open) ?? null;

  return (
    <section aria-labelledby="atlas-heading" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-warmstone">The atlas</p>
        <h2 id="atlas-heading" className="text-3xl font-medium sm:text-4xl">
          Ten masks, ten experiences
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-warmstone">
          Every experience in the database happens on someone&apos;s land. Open a mask to see who
          carries it, and what it has to do with the thing you would go there to do.
        </p>
      </div>

      {/* the scroll: two rollers with the map unrolling between them */}
      <div ref={scroll} className="relative mx-auto">
        <Roller />
        <div
          className="relative overflow-hidden rounded-[2px] shadow-[0_24px_60px_-24px_rgba(23,21,15,0.5)]"
          style={{
            transformOrigin: "top center",
            transform: unrolled ? "scaleY(1)" : "scaleY(0.02)",
            opacity: unrolled ? 1 : 0.4,
            transition: "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.8s ease",
          }}
        >
          <div className="relative aspect-[1920/1280] w-full">
            <Image
              src="/map/world-vintage.jpg"
              alt="A vintage-styled physical map of the world"
              fill
              sizes="(max-width: 768px) 100vw, 1100px"
              className="object-cover"
            />

            {/* the pins */}
            {MASK_ATLAS.map((entry, i) => (
              <button
                key={entry.slug}
                type="button"
                onClick={() => setOpen(open === entry.slug ? null : entry.slug)}
                aria-expanded={open === entry.slug}
                aria-label={`${entry.mask} — ${entry.people}`}
                className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{
                  ...position(entry),
                  opacity: unrolled ? 1 : 0,
                  transition: `opacity 0.5s ease ${900 + i * 90}ms`,
                }}
              >
                <span
                  className={`block h-[clamp(2.5rem,5vw,3.75rem)] w-[clamp(2.5rem,5vw,3.75rem)] overflow-hidden rounded-full border-2 bg-paper shadow-lg transition-[border-color,box-shadow] group-hover:animate-shake ${
                    open === entry.slug ? "border-butter-deep" : "border-paper"
                  }`}
                >
                  <Image
                    src={`/masks/${entry.slug}.png`}
                    alt=""
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
        <Roller bottom />
      </div>

      {/* the popup, below the map so it never covers the pin you just pressed */}
      <div aria-live="polite" className="mx-auto mt-8 max-w-2xl">
        {active ? (
          <article className="animate-fade-up rounded-card border border-ink/10 bg-paper p-6 shadow-md sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-medium sm:text-2xl">{active.mask}</h3>
              <p className="text-sm text-warmstone">
                {active.people}
                {active.indigenous && " · indigenous to this land"} · {active.place},{" "}
                {active.country}
              </p>
            </div>
            <p className="mt-4 leading-relaxed">{active.origin}</p>
            <p className="mt-3 leading-relaxed text-warmstone">{active.relation}</p>
            <p className="mt-5 border-t border-ink/10 pt-4 text-sm">
              <span className="text-warmstone">The experience: </span>
              {active.experience}
            </p>
            <a
              href={active.source}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-xs text-warmstone underline underline-offset-2 hover:text-ink"
            >
              Source
            </a>
          </article>
        ) : (
          <p className="text-center text-sm text-warmstone">
            Pick a mask on the map.
          </p>
        )}
      </div>

      {/* who the three travellers were */}
      <div className="mt-16 border-t border-ink/10 pt-12">
        <h3 className="mb-8 text-center text-2xl font-medium">The three on the cover</h3>
        <ul className="grid gap-6 sm:grid-cols-3">
          {TRAVELLERS.map((t) => (
            <li key={t.name} className="rounded-card bg-paper p-6 shadow-sm">
              <p className="text-lg font-medium">{t.name}</p>
              <p className="mb-3 text-xs uppercase tracking-wider text-warmstone">{t.dates}</p>
              <p className="text-sm leading-relaxed text-warmstone">{t.bio}</p>
              <p className="mt-4 border-t border-ink/10 pt-4 text-sm leading-relaxed">
                {t.experience}
                <span className="mt-1 block text-xs text-warmstone">{t.where}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** A turned wooden roller at the head or foot of the scroll. */
function Roller({ bottom = false }: { bottom?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative z-20 h-4 w-[calc(100%+1.5rem)] -translate-x-3 rounded-full sm:h-5 ${
        bottom ? "mt-[-2px]" : "mb-[-2px]"
      }`}
      style={{
        background:
          "linear-gradient(to bottom, #6b4f2a 0%, #a8763c 22%, #d9b273 45%, #8a6330 78%, #4e3819 100%)",
        boxShadow: "0 4px 14px rgba(23,21,15,0.35)",
      }}
    />
  );
}
