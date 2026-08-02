/**
 * The mask atlas. Each entry pairs one experience from data/countries.json with
 * the masking tradition of the people whose land it sits on.
 *
 * Rules for adding to this list live in .claude/skills/mask-atlas/SKILL.md. The
 * short version: name the people rather than the country, only call a people
 * indigenous when they are, source every claim, and leave a land out entirely
 * rather than stretch some unrelated object into a "mask".
 */
export interface MaskEntry {
  slug: string;
  mask: string;
  /** The people who carry the tradition — never just the country. */
  people: string;
  /** True only where that people is indigenous to the land. */
  indigenous: boolean;
  country: string;
  place: string;
  lat: number;
  lon: number;
  /** One sentence: who makes or wears it, and what it is for. */
  origin: string;
  /** One sentence: what it has to do with the paired experience. */
  relation: string;
  /** Quoted verbatim from that country's activities in data/countries.json. */
  experience: string;
  source: string;
}

export const MASK_ATLAS: MaskEntry[] = [
  {
    slug: "noh",
    mask: "Noh mask",
    people: "Japanese (Yamato)",
    indigenous: false,
    country: "Japan",
    place: "Kyoto",
    lat: 35.01,
    lon: 135.77,
    origin:
      "Carved wooden masks worn in Noh, the theatre codified in fourteenth-century Kyoto, where tilting the head a few degrees is enough to change the face's expression.",
    relation:
      "Like the tea ceremony in the same city, Noh asks you to sit still long enough that very small changes become the whole event.",
    experience: "Sit through a full tea ceremony in Kyoto without checking the time",
    source: "https://en.wikipedia.org/wiki/Noh",
  },
  {
    slug: "barong",
    mask: "Barong",
    people: "Balinese",
    indigenous: true,
    country: "Indonesia",
    place: "Bali",
    lat: -8.41,
    lon: 115.19,
    origin:
      "Barong is the lion-like protector of Balinese Hindu belief, danced against the witch Rangda at temple ceremonies across the island.",
    relation:
      "It appears at exactly the ceremonies a visitor is asked to sit quietly at the edge of. The mask is the thing you came to watch.",
    experience: "Observe a Balinese temple ceremony as a quiet guest",
    source: "https://en.wikipedia.org/wiki/Barong_(mythology)",
  },
  {
    slug: "tsam",
    mask: "Tsam",
    people: "Mongolian Buddhists",
    indigenous: true,
    country: "Mongolia",
    place: "Ulaanbaatar",
    lat: 47.89,
    lon: 106.91,
    origin:
      "Tsam is the masked Buddhist dance carried into Mongolia from Tibet, in which monks put on protector deities such as Begtse and take them through the monastery courtyard.",
    relation:
      "It belongs to the same open steppe where a ger goes up, comes down and moves on, because everything here is built to be carried.",
    experience: "Sleep in a family ger on the open steppe",
    source: "https://en.wikipedia.org/wiki/Cham_dance",
  },
  {
    slug: "lakhe",
    mask: "Lakhe",
    people: "Newar",
    indigenous: true,
    country: "Nepal",
    place: "Kathmandu Valley",
    lat: 27.67,
    lon: 85.32,
    origin:
      "Lakhe is a red-faced demon of Newar belief, danced through the streets of the Kathmandu Valley by a masked performer during the Indra Jatra festival.",
    relation:
      "Indra Jatra closes the monsoon, which is the same turn of the season that opens the trekking routes north of the valley.",
    experience: "Trek the Langtang Valley teahouse to teahouse",
    source: "https://en.wikipedia.org/wiki/Lakhey",
  },
  {
    slug: "boujloud",
    mask: "Boujloud",
    people: "Amazigh",
    indigenous: true,
    country: "Morocco",
    place: "Aourir",
    lat: 30.49,
    lon: -9.63,
    origin:
      "Boujloud is an Amazigh masquerade in which a man wrapped in fresh goatskins runs through the streets in the days after Eid al-Adha.",
    relation:
      "It is a few days of licensed disorder, roughly the footing a stranger is on inside a medina. Go slowly and let it stay confusing.",
    experience: "Get lost in the Fez medina without a map",
    source: "https://en.wikipedia.org/wiki/Boujloud",
  },
  {
    slug: "mapiko",
    mask: "Mapiko",
    people: "Makonde",
    indigenous: true,
    country: "Tanzania",
    place: "Makonde Plateau",
    lat: -10.9,
    lon: 39.3,
    origin:
      "Mapiko are helmet masks carved by the Makonde of the Ruvuma river country and worn in the dances that close a young person's initiation.",
    relation:
      "The dance is a lesson delivered in public, which is how the language gets learned here too, badly at first and in front of everybody.",
    experience: "Learn Swahili greetings from your neighbors, badly, then better",
    source: "https://en.wikipedia.org/wiki/Makonde_people",
  },
  {
    slug: "calavera",
    mask: "Turquoise mosaic mask",
    people: "Mixtec or Nahua",
    indigenous: true,
    country: "Mexico",
    place: "Valley of Mexico",
    lat: 19.43,
    lon: -99.13,
    origin:
      "A turquoise mosaic mask built over a human skull, made by Mixtec or Nahua craftsmen before the Spanish arrived and associated with the god Tezcatlipoca.",
    relation:
      "It was made for a city arranged around a ceremonial square, the ancestor of the zócalo you can still sit in for a whole evening.",
    experience: "Sit in a zócalo through an entire evening",
    source: "https://en.wikipedia.org/wiki/Turquoise_mosaics_of_Mesoamerica",
  },
  {
    slug: "diablada",
    mask: "Paucartambo mask",
    people: "Quechua",
    indigenous: true,
    country: "Peru",
    place: "Paucartambo",
    lat: -13.32,
    lon: -71.6,
    origin:
      "Paucartambo's Virgen del Carmen festival fills a Quechua town in the Andes with masked companies, each a fixed character danced by the same families year after year.",
    relation:
      "It runs for days at three thousand metres, so like the trek that starts nearby it belongs to whoever paced themselves on arrival.",
    experience: "Acclimatize in Cusco with coca tea and patience",
    source: "https://en.wikipedia.org/wiki/Paucartambo_Province",
  },
  {
    slug: "bauta",
    mask: "Carnival mask",
    people: "Venetians",
    indigenous: false,
    country: "Italy",
    place: "Venice",
    lat: 45.44,
    lon: 12.34,
    origin:
      "Venice's carnival masks let rank disappear in public for a season, a licence the republic regulated by law for centuries.",
    relation:
      "Both the carnival and the passeggiata treat the street as the room where everyone is seen. One of them just leaves the face on.",
    experience: "Take the passeggiata with the whole town at golden hour",
    source: "https://en.wikipedia.org/wiki/Carnival_of_Venice",
  },
  {
    slug: "baining",
    mask: "Baining fire dance mask",
    people: "Baining",
    indigenous: true,
    country: "Papua New Guinea",
    place: "East New Britain",
    lat: -4.35,
    lon: 152.18,
    origin:
      "The Baining of East New Britain build tall barkcloth masks for a night dance in which men step through and over an open fire.",
    relation:
      "The Baining live an island and a mountain range away from the highlands clans. Here the next village is a different world, which is why so much of the travelling is done by boat.",
    experience: "Travel by banana boat between coastal villages",
    source: "https://en.wikipedia.org/wiki/Baining_people",
  },
];

export interface Traveller {
  name: string;
  dates: string;
  bio: string;
  /** An experience in the database that his own route actually passed through. */
  experience: string;
  where: string;
}

/* The three names on the hero, and one experience apiece taken from ground each
   of them actually covered. */
export const TRAVELLERS: Traveller[] = [
  {
    name: "Marco Polo",
    dates: "1254–1324",
    bio: "A Venetian merchant who spent twenty-four years on the roads between Venice and the court of Kublai Khan, and dictated the account of it from a Genoese prison cell. His book promises to set down things seen as seen and things heard as heard only, which is the oldest sourcing rule this project follows.",
    experience: "Sail the Nile on a felucca at dusk",
    where: "Polo went east by water like this for much of the way.",
  },
  {
    name: "Xuanzang",
    dates: "602–664",
    bio: "A Chinese Buddhist monk who left Tang China in 629 in defiance of an imperial ban on foreign travel, because the translations of scripture available to him contradicted each other. He walked to India, studied there for years, and came home in 645 with 657 Sanskrit texts on twenty packhorses.",
    experience: "Take an overnight sleeper train and surrender the schedule",
    where: "He crossed northern India on foot; the same ground now takes a night.",
  },
  {
    name: "Anthony Bourdain",
    dates: "1956–2018",
    bio: "A New York cook who made his television out of eating what he was given and letting the people feeding him do the talking. His argument was simply to move, across an ocean or across a river, because eating someone's food is the shortest way into their life.",
    experience: "Pull up a plastic stool for street-side phở at dawn",
    where: "Hanoi's low plastic stools were his clearest argument, made at one.",
  },
];
