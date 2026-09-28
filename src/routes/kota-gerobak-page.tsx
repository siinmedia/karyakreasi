import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MapPin, Package, Ruler, ShieldCheck } from "lucide-react";
import { Eyebrow, SiteFooter, SiteHeader } from "@/routes/site-chrome";
import { getKotaLain, type KotaGerobak } from "@/routes/kota-data";
import {
  absoluteUrl,
  canonicalLink,
  faqSchema,
  jsonLdScript,
  localBusinessSchema,
  PHONE_DISPLAY,
  SERVICE_AREAS,
  SITE_NAME,
  SITE_URL,
  socialMeta,
  whatsappUrl,
} from "@/lib/seo";

/**
 * Komponen bersama untuk halaman "gerobak usaha di <kota>".
 *
 * Tiap kota punya berkas rute sendiri karena TanStack Router hanya mengenali
 * parameter bila berada di awal segmen. Dengan berkas terpisah, URL tetap satu
 * segmen seperti yang diinginkan: /gerobak-usaha-di-jepara.
 */

/** Susun head (meta, canonical, JSON-LD) untuk satu kota. */
export function headKota(kota: KotaGerobak, path: string) {
  // Pertanyaan yang memang khas untuk kota ini, bukan daftar generik.
  const faq: [string, string][] = [
    [
      `Berapa lama pengiriman gerobak usaha ke ${kota.nama}?`,
      `${kota.jarak} Waktu pengerjaan gerobak sendiri umumnya dua sampai empat minggu sejak desain disetujui, tergantung tingkat kerumitan.`,
    ],
    [
      `Apakah ukuran gerobak bisa disesuaikan dengan lokasi di ${kota.nama}?`,
      `Bisa, dan itu yang kami sarankan. Ukur dulu lebar lokasi usaha Anda di ${kota.nama}, lalu kirimkan angkanya. Kami sesuaikan dimensi gerobak agar pas dan tidak menutup akses jalan.`,
    ],
    [
      `Apa saja yang perlu saya siapkan sebelum memesan?`,
      `Cukup tiga hal: perkiraan ukuran lokasi, jenis menu yang akan dijual, dan referensi tampilan yang Anda suka. Dari situ kami bisa menyusun penawaran untuk usaha Anda di ${kota.nama}.`,
    ],
    [
      `Apakah gerobak bisa dibongkar untuk menghemat ongkos kirim ke ${kota.nama}?`,
      `Ya. Gerobak kami dirancang knockdown, jadi lemari, meja, dan kanopi bisa dilepas saat pengiriman. Ini membuat pengiriman ke ${kota.nama} bisa memakai satu pikap biasa.`,
    ],
    [
      `Bagaimana kalau saya belum punya desain sama sekali?`,
      `Tidak masalah. Ceritakan saja menu dan lokasinya, kami bantu susun tata letaknya. Banyak pesanan dari ${kota.nama} dimulai tanpa gambar, hanya dari percakapan.`,
    ],
  ];

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name: `Pembuatan Gerobak Usaha di ${kota.nama}`,
    serviceType: "Fabrikasi gerobak usaha custom",
    description: kota.deskripsi,
    url: absoluteUrl(path),
    provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
    areaServed: { "@type": "City", name: kota.nama },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: whatsappUrl(
        `Halo ${SITE_NAME}, saya ingin tanya gerobak usaha untuk jualan di ${kota.nama}.`,
      ),
      servicePhone: { "@type": "ContactPoint", telephone: "+628176735788" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Pilihan gerobak usaha untuk ${kota.nama}`,
      itemListElement: kota.jenisUsaha.map((jenis) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Gerobak untuk ${jenis.toLowerCase()}` },
      })),
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pabrik Gerobak",
        item: absoluteUrl("/pabrik-gerobak"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Gerobak Usaha di ${kota.nama}`,
        item: absoluteUrl(path),
      },
    ],
  };

  return {
    meta: [
      { title: kota.judul },
      { name: "description", content: kota.deskripsi },
      ...socialMeta({
        title: kota.judul,
        description: kota.deskripsi,
        url: path,
        image: kota.ogImage,
      }),
    ],
    links: [canonicalLink(path)],
    scripts: [
      jsonLdScript(localBusinessSchema()),
      jsonLdScript(service),
      jsonLdScript(breadcrumb),
      jsonLdScript(faqSchema(faq)),
    ],
  };
}

export function KotaGerobakPage({ kota }: { kota: KotaGerobak }) {
  const kotaLain = getKotaLain(kota.slug);
  const wa = whatsappUrl(
    `Halo ${SITE_NAME}, saya ingin konsultasi gerobak usaha untuk jualan di ${kota.nama}.`,
  );

  return (
    <>
      <SiteHeader tone="solid" />
      <main className="overflow-x-hidden">
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
            >
              <Link to="/" className="hover:text-foreground">
                Beranda
              </Link>
              <span>/</span>
              <Link to="/pabrik-gerobak" className="hover:text-foreground">
                Pabrik Gerobak
              </Link>
              <span>/</span>
              <span className="text-foreground">{kota.nama}</span>
            </nav>

            <Eyebrow>Gerobak usaha · {kota.nama}</Eyebrow>
            <h1 className="mt-7 max-w-[24ch] font-display text-[clamp(2.1rem,4.8vw,4.2rem)] font-medium uppercase leading-[1.02]">
              Gerobak Usaha
              <br />
              <span className="text-muted-foreground">di {kota.nama}.</span>
            </h1>
            <p className="mt-7 max-w-[660px] text-sm leading-[1.9] text-muted-foreground md:text-base">
              {kota.pembuka}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                Konsultasi gerobak {kota.nama}
                <ArrowUpRight size={16} />
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:bg-background"
              >
                Lihat hasil pengerjaan
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Telepon atau WhatsApp:{" "}
              <a
                href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
                className="font-semibold text-foreground underline underline-offset-4"
              >
                {PHONE_DISPLAY}
              </a>
            </p>

            <dl className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em]">
                  <MapPin size={14} /> Jangkauan
                </dt>
                <dd className="mt-3 text-sm leading-[1.8] text-muted-foreground">{kota.jarak}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em]">
                  <Ruler size={14} /> Ukuran menyesuaikan
                </dt>
                <dd className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                  Dimensi dibuat mengikuti lebar lokasi usaha Anda di {kota.nama}, bukan ukuran
                  pabrik yang seragam.
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em]">
                  <Package size={14} /> Knockdown
                </dt>
                <dd className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                  Bisa dibongkar saat pengiriman, sehingga ongkos kirim ke {kota.nama} jauh lebih
                  hemat.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
            <div>
              <Eyebrow>Kendala di {kota.nama}</Eyebrow>
              <h2 className="mt-7 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium uppercase leading-[1.05]">
                Yang Kami
                <br />
                <span className="text-muted-foreground">Perhatikan.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {kota.kendala.map((item) => (
                <article key={item.judul} className="rounded-2xl border border-border p-6 md:p-8">
                  <h3 className="font-display text-base font-bold uppercase tracking-[0.02em] md:text-lg">
                    {item.judul}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">{item.isi}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-secondary p-7 md:p-10">
            <h3 className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em]">
              <ShieldCheck size={14} /> Pertimbangan teknis untuk {kota.nama}
            </h3>
            <p className="mt-4 max-w-[820px] text-sm leading-[1.9] text-muted-foreground md:text-base">
              {kota.teknis}
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div>
                <Eyebrow>Cocok untuk</Eyebrow>
                <h2 className="mt-7 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium uppercase leading-[1.05]">
                  Usaha yang
                  <br />
                  <span className="text-muted-foreground">Paling Sering.</span>
                </h2>
                <ul className="mt-8 flex flex-col gap-3">
                  {kota.jenisUsaha.map((jenis) => (
                    <li key={jenis} className="flex items-start gap-3 text-sm md:text-base">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Check size={14} />
                      </span>
                      {jenis}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="self-center">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.1em]">
                  Gambaran pasar di {kota.nama}
                </h3>
                <p className="mt-4 text-sm leading-[1.9] text-muted-foreground md:text-base">
                  {kota.pasar}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
            <div>
              <Eyebrow>Alur pemesanan</Eyebrow>
              <h2 className="mt-7 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium uppercase leading-[1.05]">
                Dari Ukuran
                <br />
                <span className="text-muted-foreground">ke Gerobak.</span>
              </h2>
            </div>
            <ol className="flex flex-col">
              {(
                [
                  [
                    "Kirim kebutuhan",
                    `Sebutkan menu, perkiraan ukuran lokasi di ${kota.nama}, dan referensi tampilan bila ada.`,
                  ],
                  [
                    "Penawaran dan desain",
                    "Kami susun tata letak dan rincian biaya, lalu Anda beri masukan sampai pas.",
                  ],
                  [
                    "Fabrikasi di workshop",
                    "Pengerjaan rangka, perakitan, dan finishing dilakukan di Kalinyamatan, Jepara.",
                  ],
                  [
                    `Pengiriman ke ${kota.nama}`,
                    "Gerobak dibongkar sebagian untuk menghemat ruang, lalu dikirim dan dirakit kembali di lokasi.",
                  ],
                ] as [string, string][]
              ).map(([judul, isi], i) => (
                <li key={judul} className="border-t border-border py-6">
                  <span className="font-display text-xs text-muted-foreground">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-base font-bold uppercase tracking-[0.02em] md:text-lg">
                    {judul}
                  </h3>
                  <p className="mt-2 max-w-[680px] text-sm leading-[1.9] text-muted-foreground">
                    {isi}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-accent py-16 text-accent-foreground md:py-20">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
            <h2 className="max-w-[20ch] font-display text-[clamp(2rem,5vw,4rem)] font-medium uppercase leading-[1]">
              Mulai dari ukuran lokasi Anda di {kota.nama}.
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-overlay-foreground transition-opacity hover:opacity-90"
              >
                Tanya lewat WhatsApp
                <ArrowUpRight size={16} />
              </a>
              <a
                href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
                className="font-display text-sm font-bold uppercase tracking-[0.06em] underline underline-offset-4"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {kotaLain.length > 0 && (
          <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
            <Eyebrow>Kota lain</Eyebrow>
            <h2 className="mt-7 font-display text-[clamp(1.7rem,3vw,2.6rem)] font-medium uppercase leading-[1.05]">
              Gerobak Usaha di Kota Lain.
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {kotaLain.map((lain) => (
                <a
                  key={lain.slug}
                  href={lain.route}
                  className="group flex flex-col justify-between rounded-2xl border border-border p-6 transition-colors hover:bg-secondary md:p-7"
                >
                  <span className="font-display text-xl font-medium uppercase md:text-2xl">
                    {lain.nama}
                  </span>
                  <span className="mt-6 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.1em]">
                    Lihat halaman
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-8 max-w-[720px] text-sm leading-[1.9] text-muted-foreground">
              Kami juga melayani pengiriman gerobak usaha ke{" "}
              {SERVICE_AREAS.filter((a) => a !== kota.nama).join(", ")} dan kota lain di Jawa Tengah.
            </p>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
