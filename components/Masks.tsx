import Link from "next/link";

interface Mask {
  name: string;
  origin: string;
  art: React.ReactNode;
}

/* Stylized, simplified masks — one from each corner of the world. */
const MASKS: Mask[] = [
  {
    name: "Noh",
    origin: "East Asia",
    art: (
      <svg viewBox="0 0 80 100" className="h-full w-full" aria-hidden="true">
        <ellipse cx="40" cy="50" rx="30" ry="42" fill="#f3ead6" stroke="#17150f" strokeWidth="2" />
        <path d="M26 40 q6 -4 12 0" stroke="#17150f" strokeWidth="2" fill="none" />
        <path d="M42 40 q6 -4 12 0" stroke="#17150f" strokeWidth="2" fill="none" />
        <path d="M28 44 h10 M42 44 h10" stroke="#17150f" strokeWidth="2.5" />
        <path d="M34 66 q6 5 12 0" stroke="#a33b2b" strokeWidth="3.5" fill="none" />
        <circle cx="40" cy="26" r="1.8" fill="#17150f" />
      </svg>
    ),
  },
  {
    name: "Gèlèdé",
    origin: "West Africa",
    art: (
      <svg viewBox="0 0 80 100" className="h-full w-full" aria-hidden="true">
        <path d="M40 6 L64 26 V74 Q64 92 40 96 Q16 92 16 74 V26 Z" fill="#5b3a21" stroke="#17150f" strokeWidth="2" />
        <path d="M24 22 L40 12 L56 22" stroke="#d9a85f" strokeWidth="3" fill="none" />
        <path d="M28 30 L52 30" stroke="#d9a85f" strokeWidth="2" />
        <ellipse cx="31" cy="46" rx="6" ry="4" fill="#f2efe7" />
        <ellipse cx="49" cy="46" rx="6" ry="4" fill="#f2efe7" />
        <circle cx="31" cy="46" r="2" fill="#17150f" />
        <circle cx="49" cy="46" r="2" fill="#17150f" />
        <path d="M40 52 v12 M36 68 h8" stroke="#f2efe7" strokeWidth="2.5" />
        <path d="M24 58 l6 3 M56 58 l-6 3" stroke="#d9a85f" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: "Volto",
    origin: "Europe",
    art: (
      <svg viewBox="0 0 80 100" className="h-full w-full" aria-hidden="true">
        <path d="M40 8 Q68 8 66 44 Q64 78 40 92 Q16 78 14 44 Q12 8 40 8 Z" fill="#fbfaf5" stroke="#17150f" strokeWidth="2" />
        <path d="M22 36 q8 -8 16 0 M42 36 q8 -8 16 0" stroke="#d9a85f" strokeWidth="2.5" fill="none" />
        <ellipse cx="30" cy="40" rx="6" ry="3.5" fill="#17150f" />
        <ellipse cx="50" cy="40" rx="6" ry="3.5" fill="#17150f" />
        <path d="M30 14 Q40 22 50 14" stroke="#d9a85f" strokeWidth="2" fill="none" />
        <path d="M36 58 q4 3 8 0" stroke="#c9c2ae" strokeWidth="2" fill="none" />
        <path d="M20 70 q20 14 40 0" stroke="#d9a85f" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: "Barong",
    origin: "Southeast Asia",
    art: (
      <svg viewBox="0 0 80 100" className="h-full w-full" aria-hidden="true">
        <path d="M40 4 L50 14 L60 6 L58 20 L70 18 L60 30 L64 34 L54 36" fill="#d9a85f" stroke="#17150f" strokeWidth="1.5" />
        <path d="M40 4 L30 14 L20 6 L22 20 L10 18 L20 30 L16 34 L26 36" fill="#d9a85f" stroke="#17150f" strokeWidth="1.5" />
        <path d="M22 30 Q40 20 58 30 L60 70 Q60 88 40 92 Q20 88 20 70 Z" fill="#b5402f" stroke="#17150f" strokeWidth="2" />
        <circle cx="31" cy="48" r="7" fill="#f2e88c" stroke="#17150f" strokeWidth="1.5" />
        <circle cx="49" cy="48" r="7" fill="#f2e88c" stroke="#17150f" strokeWidth="1.5" />
        <circle cx="31" cy="48" r="3" fill="#17150f" />
        <circle cx="49" cy="48" r="3" fill="#17150f" />
        <path d="M28 70 h24" stroke="#17150f" strokeWidth="2.5" />
        <path d="M31 70 l2 6 M40 70 l0 7 M49 70 l-2 6" stroke="#f2efe7" strokeWidth="3" />
      </svg>
    ),
  },
  {
    name: "Calavera",
    origin: "The Americas",
    art: (
      <svg viewBox="0 0 80 100" className="h-full w-full" aria-hidden="true">
        <path d="M40 8 Q66 8 66 40 Q66 58 56 64 L56 78 Q56 88 40 88 Q24 88 24 78 L24 64 Q14 58 14 40 Q14 8 40 8 Z" fill="#fbfaf5" stroke="#17150f" strokeWidth="2" />
        <circle cx="30" cy="42" r="8" fill="#f2e88c" stroke="#17150f" strokeWidth="1.5" />
        <circle cx="50" cy="42" r="8" fill="#f2e88c" stroke="#17150f" strokeWidth="1.5" />
        <circle cx="30" cy="42" r="3.5" fill="#17150f" />
        <circle cx="50" cy="42" r="3.5" fill="#17150f" />
        <g stroke="#b5402f" strokeWidth="1.5">
          <path d="M30 30 v-6 M50 30 v-6 M20 42 h-5 M60 42 h5" />
        </g>
        <path d="M40 52 l-4 8 h8 Z" fill="#17150f" />
        <path d="M30 74 h20 M32 70 v8 M38 70 v8 M44 70 v8 M48 70 v8" stroke="#17150f" strokeWidth="1.5" />
        <path d="M37 16 q3 -4 6 0 q-3 4 -6 0" fill="#b5402f" />
      </svg>
    ),
  },
  {
    name: "Tapa",
    origin: "Oceania",
    art: (
      <svg viewBox="0 0 80 100" className="h-full w-full" aria-hidden="true">
        <path d="M40 6 Q62 12 62 44 Q62 76 40 94 Q18 76 18 44 Q18 12 40 6 Z" fill="#8a5a30" stroke="#17150f" strokeWidth="2" />
        <path d="M24 26 L40 18 L56 26" stroke="#f2efe7" strokeWidth="2" fill="none" />
        <path d="M26 32 L40 25 L54 32" stroke="#f2e88c" strokeWidth="2" fill="none" />
        <circle cx="31" cy="46" r="5" fill="#f2efe7" />
        <circle cx="49" cy="46" r="5" fill="#f2efe7" />
        <circle cx="31" cy="46" r="2" fill="#17150f" />
        <circle cx="49" cy="46" r="2" fill="#17150f" />
        <path d="M40 52 q-6 8 0 14 q6 -6 0 -14" fill="none" stroke="#f2efe7" strokeWidth="2" />
        <path d="M28 72 q12 10 24 0 M30 80 q10 8 20 0" stroke="#f2e88c" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
];

/**
 * The gateway to the quiz: masks from cultures on every inhabited continent.
 * Picking any mask begins the journey.
 */
export default function Masks() {
  return (
    <section aria-labelledby="masks-heading" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-warmstone">Enter the app</p>
        <h2 id="masks-heading" className="text-3xl font-medium sm:text-4xl">
          Enter through the masks
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-warmstone">
          People everywhere carve what they know into masks. Pick one from any corner of the world
          to start the quiz.
        </p>
      </div>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
        {MASKS.map((mask) => (
          <li key={mask.name}>
            <Link
              href="/quiz"
              className="group flex flex-col items-center gap-3 rounded-card bg-paper p-5 shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-lg"
              aria-label={`Begin the quiz — ${mask.name} mask, ${mask.origin}`}
            >
              <div className="h-24 w-20 transition-transform group-hover:scale-105">{mask.art}</div>
              <div className="text-center">
                <p className="text-sm font-medium">{mask.name}</p>
                <p className="text-xs text-warmstone">{mask.origin}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
