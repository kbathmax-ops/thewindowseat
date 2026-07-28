interface Wonder {
  name: string;
  place: string;
  art: React.ReactNode;
}

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/* Line icons of the New Seven Wonders of the World. */
const WONDERS: Wonder[] = [
  {
    name: "Great Wall",
    place: "China",
    art: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <path {...stroke} d="M4 34 Q14 24 24 28 Q36 32 44 22" />
        <path {...stroke} d="M8 34 v-8 h3 v3 h4 v-3 h3 v9 M30 30 v-9 h3 v3 h4 v-3 h3 v7" />
      </svg>
    ),
  },
  {
    name: "Petra",
    place: "Jordan",
    art: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <path {...stroke} d="M10 40 V18 L24 8 L38 18 V40" />
        <path {...stroke} d="M15 40 V22 M24 40 V20 M33 40 V22 M12 18 h24" />
      </svg>
    ),
  },
  {
    name: "Colosseum",
    place: "Italy",
    art: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <path {...stroke} d="M6 38 Q6 16 24 14 Q42 16 42 38" />
        <path {...stroke} d="M6 38 h36 M12 38 v-8 q3 -4 6 0 v8 M27 38 v-8 q3 -4 6 0 v8 M10 24 h28" />
      </svg>
    ),
  },
  {
    name: "Chichén Itzá",
    place: "Mexico",
    art: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <path {...stroke} d="M6 40 h36 M10 40 v-6 h4 v-6 h4 v-6 h4 v-8 h4 v8 h4 v6 h4 v6 h4 v6" />
      </svg>
    ),
  },
  {
    name: "Machu Picchu",
    place: "Peru",
    art: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <path {...stroke} d="M6 40 L20 12 L28 26 L36 16 L44 40" />
        <path {...stroke} d="M12 34 h10 M10 38 h14 M32 32 h8 M30 36 h12" />
      </svg>
    ),
  },
  {
    name: "Taj Mahal",
    place: "India",
    art: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <path {...stroke} d="M16 40 v-14 Q16 18 24 14 Q32 18 32 26 v14 M24 14 v-4 M8 40 V22 M40 40 V22 M6 40 h36" />
        <path {...stroke} d="M8 22 q0 -3 0 0 M8 20 a2 3 0 0 1 0 2 M40 20 a2 3 0 0 1 0 2" />
      </svg>
    ),
  },
  {
    name: "Christ the Redeemer",
    place: "Brazil",
    art: (
      <svg viewBox="0 0 48 48" className="h-9 w-9" aria-hidden="true">
        <path {...stroke} d="M24 12 a3 3 0 1 0 0.01 0 M24 18 v14 M8 22 h32 M20 32 h8 M22 32 v8 h4 v-8" />
      </svg>
    ),
  },
];

/** Marquee band of the seven wonders — lessons carved in stone. */
export default function Wonders() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {WONDERS.map((w) => (
        <li key={w.name} className="flex items-center gap-3 whitespace-nowrap text-ink">
          {w.art}
          <span className="text-sm">
            {w.name}
            <span className="text-warmstone"> · {w.place}</span>
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="The seven wonders of the world" className="border-y border-ink/10 bg-paper py-6">
      <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-warmstone">
        Lessons carved in stone — the seven wonders
      </p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
