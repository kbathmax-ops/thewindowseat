import { search, licensed } from "./source-masks.mjs";
import { writeFile, access } from "node:fs/promises";

const UA = "TheWindowSeat/1.0 (mask atlas sourcing; contact orcabuildnow@gmail.com)";
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/* Commons throttles hard, so every call is spaced and retried. */
async function searchSlow(terms, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await search(terms, 14, 900);
      if (r.length) return r;
    } catch { /* rate limited — back off below */ }
    await wait(3000 * (i + 1));
  }
  return [];
}

const WANTED = [
  { slug: "noh",      qs: ["Noh mask Japan theatre"] },
  { slug: "barong",   qs: ["Barong mask Bali Indonesia"] },
  { slug: "tsam",     qs: ["Tsam dance mask", "Cham dance mask Mongolia", "Mongolian mask museum"] },
  { slug: "lakhe",    qs: ["Lakhe", "Newar mask dance Nepal", "Nepalese mask"] },
  { slug: "boujloud", qs: ["Boujloud", "Bilmawn", "Morocco mask festival"] },
  { slug: "mapiko",   qs: ["Makonde mask", "mapiko mask", "Makonde helmet mask"] },
  { slug: "calavera", qs: ["calavera mask", "Day of the Dead mask Mexico", "Mexican mask museum"] },
  { slug: "diablada", qs: ["Diablada mask", "Paucartambo", "Peruvian dance mask"] },
  { slug: "bauta",    qs: ["Bauta mask", "Venetian carnival mask", "Volto mask Venice"] },
  { slug: "baining",  qs: ["Baining fire dance", "Sepik mask", "Papua New Guinea mask"] },
];

async function grab(url, out, tries = 3) {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (r.ok) { await writeFile(out, Buffer.from(await r.arrayBuffer())); return true; }
    await wait(2500 * (i + 1));
  }
  return false;
}

const credits = [];
for (const { slug, qs } of WANTED) {
  const out = `public/masks/${slug}.jpg`;
  try { await access(out); console.log(`${slug}: already have it`); continue; } catch {}

  let picked = null;
  for (const q of qs) {
    const cands = (await searchSlow(q)).filter(licensed);
    await wait(2500);
    for (const c of cands.slice(0, 3)) {
      if (await grab(c.thumb, out)) { picked = c; break; }
      await wait(1500);
    }
    if (picked) break;
  }
  if (picked) {
    credits.push({ file: `${slug}.png`, title: picked.title, author: picked.author || "Unknown", license: picked.license, sourceUrl: picked.page });
    console.log(`${slug}: ${picked.w}x${picked.h} ${picked.license} — ${picked.title}`);
  } else {
    console.log(`${slug}: FAILED`);
  }
  await wait(2000);
}
await writeFile("public/masks/credits.new.json", JSON.stringify(credits, null, 2));
