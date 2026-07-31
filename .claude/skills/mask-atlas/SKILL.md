---
name: mask-atlas
description: Build or extend the mask atlas — pair experiences from the country database with the real masking traditions of the peoples whose land they sit on, place them on the antique world map, and write the popup copy. Use when adding masks to the atlas, refreshing its sources, swapping which experiences appear, or auditing existing entries for cultural accuracy.
---

# Mask Atlas

The atlas pins masks onto an antique world map. Each pin ties one experience from
`data/countries.json` to the masking tradition of the people whose land that
experience happens on, and opens a popup with two sentences: where the mask comes
from, and what it has to do with the experience.

This is a research task before it is a build task. The failure mode is not an ugly
map — it is a confident sentence about someone's culture that is wrong.

## The accuracy rules — read these before writing a single entry

**1. Name the specific people, never the country.** "Amazigh," "Makonde," "Newar,"
"Quechua." Not "Moroccan masks," not "African masks." A country is a border; a
mask belongs to a people.

**2. Do not say "indigenous" unless it is true.** Many lands in this database have
no indigenous population distinct from the general one — Iceland was uninhabited
before Norse settlement; Italy's Venetian masks belong to the majority culture.
Japan's tea ceremony is Yamato, while the indigenous people of Japan are the Ainu,
whose traditions are different and should not be blended with it. Where the
carrying culture is the majority culture, say so plainly and move on. Reserve
"indigenous" for peoples who actually are.

**3. No tradition, no pin.** Some lands have no documented masking tradition —
Jordan, Kenya and Iceland among the current experience set. Drop those from the
atlas rather than stretching an unrelated object into a "mask." A face covering
worn as dress (the Gulf *battoulah*, for instance) is a garment, not a ritual
mask. Do not promote one into the other to fill a slot.

**4. Every claim carries a source.** Each entry records a real URL — Wikipedia,
a museum collection (the Met, the British Museum, the Smithsonian NMAI), or a
university page. If you cannot source a claim, cut the claim. This is the same
no-fabrication rule the rest of the product runs on; see `PHILOSOPHY.md`.

**5. Living traditions are present tense.** Barong is danced in Bali now. Write
"is danced," not "was danced." Do not put a living culture in a museum.

**6. Sacred is not decorative.** Some masks are ritual objects with restrictions
on who may see or wear them. Describe what public sources describe. Do not invent
ceremonial detail for colour, and do not imply a visitor can attend or wear
something they cannot.

## Procedure

### 1. Gather the experiences

Read `data/countries.json`. Every country carries an `activities` array — those
are the experiences. Note the `lesson` too; the popup's second sentence should
sit comfortably beside it.

### 2. Find the tradition

For each candidate country, research whether a documented masking tradition
exists and who carries it. Confirm with a real source before it earns a pin.
Traditions already verified for this atlas live in `lib/masks.ts` with their
source URLs — start there and extend.

Prefer a country where the mask and the experience genuinely touch. A Balinese
temple ceremony and the Barong danced at those ceremonies are one thing seen
twice; a Venetian mask and a passeggiata are both about the street as theatre.
That resonance is the whole point of the pairing — if the only link is "same
country," find a better experience from that country's `activities`.

### 3. Write the popup

Two sentences, in this order, both plain:

- **Origin** — one sentence: who makes or wears it, and what it is for.
- **Relation** — one sentence: what it has to do with the paired experience.

No superlatives, no "mystical," no "ancient" as a mood word (use it only for a
sourced date). Match the register of `PHILOSOPHY.md`: describe faithfully, judge
little.

### 4. Place it on the map

The map is equirectangular, so the projection is linear and the conversion is:

```
x% = (longitude + 180) / 360 * 100
y% = (90 - latitude) / 180 * 100
```

Use the coordinates of where the tradition actually lives — Ambrym island for the
Rom dance, not the capital of Vanuatu. Then **render it and look**: map scans are
often cropped slightly off-graticule, so verify each pin lands on the right
coastline and nudge the stored percentage if it does not. Do not trust the
formula over your eyes.

### 5. Source the mask image

Wikimedia Commons, same rules as the hero photographs:

```bash
curl -s 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=<terms>&gsrnamespace=6&gsrlimit=15&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=900&format=json'
curl -sL -A 'TheWindowSeat/1.0' '<thumburl>' -o /tmp/candidate.jpg
```

- Accept only CC0, public domain, CC-BY or CC-BY-SA. Never NC, ND, or fair use.
- **Look at every image before you keep it.** Filenames lie; API dimensions
  sometimes lie too.
- Convert to PNG for the atlas: `sips -s format png in.jpg --out public/masks/<slug>.png`
- Record author, licence and Commons URL in `public/masks/credits.json`. CC BY and
  CC BY-SA legally require visible attribution — the footer renders it.

### 6. Wire it up

Add the entry to `lib/masks.ts`. `components/MaskAtlas.tsx` renders everything
from that array, so no component edit is needed for a new pin.

## Verification before you call it done

- [ ] Every entry names a specific people, not a country.
- [ ] "Indigenous" appears only where it is accurate.
- [ ] Every origin claim has a working source URL.
- [ ] Every mask image is a verified JPEG/PNG, correctly licensed, credited.
- [ ] Every pin sits on the correct landmass in a rendered screenshot.
- [ ] `npm run build` passes.
