export type Project = {
  slug: string;
  name: string;
  category: "Gerobak" | "Booth" | "Kanopi" | "Besi";
  year: string;
  materials: string[];
  location: string;
  detail: string;
  image: string;
  size: string;
  duration: string;
  finish: string;
  highlights: string[];
};
