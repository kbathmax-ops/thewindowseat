const UA = "TheWindowSeat/1.0 (mask atlas sourcing)";
const API = "https://commons.wikimedia.org/w/api.php";

export async function search(terms, limit = 12, width = 900) {
  const u = `${API}?action=query&generator=search&gsrsearch=${encodeURIComponent(terms)}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|extmetadata|size&iiurlwidth=${width}&format=json`;
  const r = await fetch(u, { headers: { "User-Agent": UA } });
  const j = await r.json();
  const pages = j?.query?.pages ?? {};
  return Object.values(pages).map((p) => {
    const ii = p.imageinfo?.[0] ?? {};
    const md = ii.extmetadata ?? {};
    const strip = (s) => (s ? String(s).replace(/<[^>]*>/g, "").trim() : "");
    return {
      title: p.title,
      thumb: ii.thumburl,
      w: ii.thumbwidth, h: ii.thumbheight,
      author: strip(md.Artist?.value),
      license: strip(md.LicenseShortName?.value),
      page: ii.descriptionurl,
    };
  }).filter((c) => c.thumb && /\.(jpe?g|png)$/i.test(c.thumb));
}

const OK = /^(CC0|Public domain|CC BY [\d.]+|CC BY-SA [\d.]+|PDM.*)$/i;
export const licensed = (c) => OK.test(c.license || "");
