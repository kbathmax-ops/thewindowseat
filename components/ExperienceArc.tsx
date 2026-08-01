import Image from "next/image";
import { HERO_EXPERIENCES } from "@/lib/experiences";

/* The fan sweeps from the lower left, over the top, and back down the right. */
const SPAN = 115;
/* Cards lean with the arc, but only three quarters of the way, so the ones at
   the ends stay readable instead of turning on their side. */
const TILT = 0.75;

function Card({ exp, index }: { exp: (typeof HERO_EXPERIENCES)[number]; index: number }) {
  return (
    <>
      <div className="overflow-hidden rounded-[1.25rem] bg-paper shadow-[0_18px_45px_-12px_rgba(23,21,15,0.35)]">
        <Image
          src={`/experiences/${exp.file}`}
          alt=""
          width={400}
          height={500}
          sizes="(max-width: 768px) 45vw, 190px"
          className="h-full w-full object-cover"
          style={{ aspectRatio: "4 / 5" }}
          priority={index > 2 && index < 7}
        />
      </div>
      <figcaption className="mt-2.5 px-1 text-center font-sans text-[0.62rem] font-bold leading-snug text-ink/70 sm:text-[0.68rem]">
        {exp.caption}
        <span className="mt-0.5 block text-ink/40">{exp.country}</span>
      </figcaption>
    </>
  );
}

/** The fan of experiences behind the title. Desktop only — see ExperienceStrip. */
export default function ExperienceArc() {
  const last = HERO_EXPERIENCES.length - 1;

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-[64%] hidden h-0 md:block"
      aria-label="Ten experiences from the database"
    >
      {HERO_EXPERIENCES.map((exp, i) => {
        const angle = -SPAN + (i * (SPAN * 2)) / last;
        return (
          <figure
            key={exp.file}
            /* the arc transform lives here; the drift animation lives on the
               child, since an animation's transform would otherwise win over
               this inline one and collapse every card onto the centre */
            className="absolute left-1/2 top-0 w-[var(--card)]"
            style={{
              transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(var(--arc) * -1)) rotate(${-angle * (1 - TILT)}deg)`,
            }}
          >
            <div className="animate-drift" style={{ animationDelay: `${i * 420}ms` }}>
              <Card exp={exp} index={i} />
            </div>
          </figure>
        );
      })}
    </div>
  );
}

/** The same ten experiences as a swipeable row, for screens too narrow to fan. */
export function ExperienceStrip() {
  return (
    <div
      className="-mx-6 mt-10 overflow-x-auto px-6 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Ten experiences from the database"
    >
      <div className="flex w-max gap-3">
        {HERO_EXPERIENCES.map((exp, i) => (
          <figure key={exp.file} className="w-[8.5rem] shrink-0">
            <Card exp={exp} index={i} />
          </figure>
        ))}
      </div>
    </div>
  );
}
