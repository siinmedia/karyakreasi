/**
 * Pusat konfigurasi SEO.
 *
 * Semua halaman mengambil URL kanonik, gambar Open Graph, dan struktur data
 * (schema.org) dari sini supaya konsisten dan mudah diubah di satu tempat.
 */

/** Domain produksi. Bisa ditimpa lewat env VITE_SITE_URL saat build. */
export const SITE_URL =
  (import.meta.env?.["VITE_SITE_URL"] as string | undefined)?.replace(/\/$/, "") ??
  "https://karyakreasi.web.id";

export const SITE_NAME = "Karya Kreasi Bersama";
export const SITE_LOCATION = "Jepara, Jawa Tengah, Indonesia";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

/** Profil usaha untuk schema.org LocalBusiness. */
export const BUSINESS = {
  name: SITE_NAME,
  description:
    "Workshop fabrikasi custom di Jepara untuk gerobak usaha, container, booth, kanopi, pagar, gerbang, dan struktur besi.",
  streetAddress: "Kdamarjati, Kalinyamatan",
  addressLocality: "Jepara",
  addressRegion: "Jawa Tengah",
  addressCountry: "ID",
  telephone: "",
  priceRange: "$$",
} as const;

/** Susun URL absolut dari sebuah path. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Meta tag Open Graph + Twitter untuk satu halaman. */
export function socialMeta(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: "website" | "article";
}) {
  const image = absoluteUrl(opts.image ?? DEFAULT_OG_IMAGE);
  return [
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: absoluteUrl(opts.url) },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: image },
  ] as const;
}

/** Tag canonical untuk sebuah halaman. */
export function canonicalLink(path: string) {
  return { rel: "canonical", href: absoluteUrl(path) } as const;
}

type JsonLd = Record<string, unknown>;

/** Schema.org LocalBusiness — dipakai di semua halaman. */
export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    ...(BUSINESS.telephone ? { telephone: BUSINESS.telephone } : {}),
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    areaServed: { "@type": "AdministrativeArea", name: "Jepara" },
    knowsAbout: [
      "Gerobak usaha custom",
      "Booth dan container",
      "Kanopi dan struktur atap",
      "Gerbang dan pagar besi",
      "Fabrikasi besi",
    ],
  };
}

/** Schema.org untuk satu proyek portofolio. */
export function projectSchema(project: {
  name: string;
  slug: string;
  category: string;
  year: string;
  detail: string;
  image: string;
  materials: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.detail,
    url: absoluteUrl(`/portfolio/${project.slug}`),
    image: absoluteUrl(project.image),
    dateCreated: project.year,
    genre: project.category,
    keywords: [project.category, ...project.materials].join(", "),
    creator: { "@type": "LocalBusiness", name: BUSINESS.name, url: SITE_URL },
    locationCreated: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS.addressLocality,
        addressRegion: BUSINESS.addressRegion,
        addressCountry: BUSINESS.addressCountry,
      },
    },
  };
}

/** Schema.org ItemList untuk halaman daftar portofolio. */
export function portfolioListSchema(
  items: { name: string; slug: string; category: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portofolio Karya Kreasi Bersama",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(`/portfolio/${item.slug}`),
    })),
  };
}

/** Bungkus JSON-LD sebagai tag script siap pakai di `head().scripts`. */
export function jsonLdScript(data: JsonLd) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
