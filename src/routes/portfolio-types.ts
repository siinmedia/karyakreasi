export type Project = {
  slug: string;
  name: string;
  category: "Gerobak" | "Booth" | "Kanopi" | "Besi";
  year: string;
  materials: string[];
  location: string;
  detail: string;
  image: string;
  /** URL publik stabil untuk og:image (dari /public, bukan bundler asset). */
  ogImage: string;
  size: string;
  duration: string;
  finish: string;
  highlights: string[];
};
