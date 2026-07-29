/**
 * The ten experiences fanned across the landing hero. Each `activity` is quoted
 * verbatim from that country's entry in data/countries.json; `caption` is the
 * short form that fits under a card.
 */
export interface Experience {
  file: string;
  country: string;
  caption: string;
  activity: string;
}

export const HERO_EXPERIENCES: Experience[] = [
  {
    file: "japan-tea.jpg",
    country: "Japan",
    caption: "A full tea ceremony, Kyoto",
    activity: "Sit through a full tea ceremony in Kyoto without checking the time",
  },
  {
    file: "vietnam-pho.jpg",
    country: "Vietnam",
    caption: "Street-side phở at dawn",
    activity: "Pull up a plastic stool for street-side phở at dawn",
  },
  {
    file: "mongolia-ger.jpg",
    country: "Mongolia",
    caption: "A family ger on the steppe",
    activity: "Sleep in a family ger on the open steppe",
  },
  {
    file: "jordan-petra.jpg",
    country: "Jordan",
    caption: "The Treasury through the Siq",
    activity: "Walk through the Siq as Petra's Treasury reveals itself",
  },
  {
    file: "morocco-sahara.jpg",
    country: "Morocco",
    caption: "Saharan stars, desert camp",
    activity: "Sleep under Saharan stars at a desert camp",
  },
  {
    file: "kenya-mara.jpg",
    country: "Kenya",
    caption: "The Mara at dawn",
    activity: "Watch the Maasai Mara from an open vehicle at dawn",
  },
  {
    file: "iceland-spring.jpg",
    country: "Iceland",
    caption: "A hot spring in bad weather",
    activity: "Soak in a hot spring while the weather does its worst",
  },
  {
    file: "italy-passeggiata.jpg",
    country: "Italy",
    caption: "The passeggiata at golden hour",
    activity: "Take the passeggiata with the whole town at golden hour",
  },
  {
    file: "peru-machu.jpg",
    country: "Peru",
    caption: "The Salkantay route",
    activity: "Hike the Salkantay route to Machu Picchu",
  },
  {
    file: "brazil-samba.jpg",
    country: "Brazil",
    caption: "Late samba in Lapa",
    activity: "Follow live samba until late in Rio's Lapa district",
  },
];

export interface PhotoCredit {
  file: string;
  title: string;
  author: string;
  license: string;
  sourceUrl: string;
}

/* CC BY and CC BY-SA both require attribution, so the hero photographers are
   named in the footer. */
export { default as PHOTO_CREDITS } from "@/public/experiences/credits.json";
