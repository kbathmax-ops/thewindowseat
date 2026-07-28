# The Window Seat

A personality quiz for ambitious creatives, builders and founders. Six questions, three
countries — each recommendation framed by the lesson that country tends to teach, sourced
from **real first-person travel essays** across five continents.

- **No LLM at runtime.** Matching is a deterministic trait-vector similarity computed
  against a database built once from real writing.
- **No fabricated sources.** Every country entry cites the essay it came from, with a
  verifiable URL. Pull-quotes are either short verbatim fragments (≤15 words, marked
  verbatim) or clearly-labeled paraphrases — never lifted paragraphs.

## Stack

- **Next.js (App Router) + Tailwind CSS 4** — deployable to Vercel as-is
- **Supabase Postgres** — schema + seed in `supabase/migrations/` (project: `window-seat`)
- **Canonical dataset** — `data/countries.json`, typed by `lib/data.ts` and bundled into
  the app so runtime needs no network or env vars; the Supabase database mirrors it

## Running locally

```bash
npm install
npm run dev
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel — no environment variables are required (the dataset is bundled;
   matching runs server-side from the committed data).
3. If you want the app to read from Supabase instead of the bundled dataset, the schema
   and seed live in `supabase/migrations/0001_schema.sql` and `0002_seed.sql`; all tables
   have public-read RLS policies.

## How matching works (`lib/matching.ts`)

Each quiz answer maps onto five scalar axes (0–1):

| Axis | 0 | 1 |
|---|---|---|
| `novelty` | legible / familiar | disorienting / unfamiliar |
| `sociality` | solitude | connection with people |
| `discomfort` | comfort & ease | growth through discomfort |
| `structure` | spontaneous | planned / orderly |
| `pace` | slow immersion | broad movement |

plus one categorical `growth_theme`: `patience | courage | belonging | self_knowledge`.

Score per country = `1 − mean(|user − country|)` across the five axes, `+0.15` when the
growth theme matches. Top 3 win; ties break alphabetically so results are fully
deterministic. Answers are encoded in the results URL (`/results?q=32102&g=1`), so results
are shareable and reproducible.

## Database schema

```
countries          id (slug pk), name, continent, region
lessons            id, country_id → countries, lesson, summary,
                   source_title, source_author, source_publication, source_url,
                   pull_quote, pull_quote_verbatim
country_traits     country_id → countries, novelty, sociality, discomfort,
                   structure, pace (numeric 0–1), growth_theme (enum-checked)
country_activities country_id → countries, position, activity
```

## Adding a country

1. Find a real first-person essay about what that country taught the writer. If you can't
   verify the source URL, don't add the entry.
2. Append an object to `data/countries.json` (same shape as the others): lesson, 2–3
   sentence summary, source attribution, a pull-quote (mark `pullQuoteVerbatim` honestly),
   trait scores that reflect what the essay actually describes, and three activities.
3. Regenerate the SQL and re-apply the seed:

```bash
npm run generate:seed   # rewrites supabase/migrations/0002_seed.sql
```

No other code changes needed — the quiz, matcher and results read the dataset directly.

## Sourcing notes

The 32 entries span Africa (6), Asia (8), Europe (7), the Americas (6) and Oceania (5).
Source URLs were located and verified via live web search in July 2026. Trait scores are
editorial interpretations of each essay's content — not national stereotypes.
