import raw from "@/data/countries.json";

export type GrowthTheme = "patience" | "courage" | "belonging" | "self_knowledge";

export interface Traits {
  novelty: number;
  sociality: number;
  discomfort: number;
  structure: number;
  pace: number;
  growthTheme: GrowthTheme;
}

export interface Source {
  title: string;
  author: string | null;
  publication: string;
  url: string;
}

export interface Country {
  id: string;
  name: string;
  continent: string;
  region: string;
  lesson: string;
  summary: string;
  source: Source;
  pullQuote: string;
  pullQuoteVerbatim: boolean;
  traits: Traits;
  activities: string[];
}

export const COUNTRIES = raw as Country[];

export const CONTINENTS = [...new Set(COUNTRIES.map((c) => c.continent))];
