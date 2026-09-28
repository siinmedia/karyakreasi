import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Package,
  Ruler,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";
import { Eyebrow, SiteFooter, SiteHeader } from "@/routes/site-chrome";
import { getKotaLain, type KotaGerobak } from "@/routes/kota-data";
import { getProject } from "@/routes/portfolio-data";
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
  const contoh = kota.contohProyek
    .map((slug) => getProject(slug))
    .filter((proyek): proyek is NonNullable<typeof proyek> => Boolean(proyek));
  const wa = whatsappUrl(
    `Halo ${SITE_NAME}, saya ingin konsultasi gerobak usaha untuk jualan di ${kota.nama}.`,
  );

  return (
    <>
      <main className="overflow-x-hidden">
        <section className="relative isolate overflow-hidden bg-charcoal text-overlay-foreground">
          {kota.fotoHero && (
            <img
              src={kota.fotoHero}
              alt=""
              aria-hidden="true"
              width={1920}
              height={1088}
              fetchPriority="high"
              className="absolute inset-0 -z-10 size-full object-cover opacity-30"
            />
          )}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/45" />
          <SiteHeader />
          <div className="mx-auto max-w-[1600px] px-5 pb-16 pt-8 md:px-10 md:pb-28 md:pt-12 lg:px-16">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-overlay-foreground/60"
            >
              <Link to="/" className="hover:text-lime">
                Beranda
              </Link>
              <span>/</span>
              <Link to="/pabrik-gerobak" className="hover:text-lime">
                Pabrik Gerobak
              </Link>
              <span>/</span>
              <span className="text-lime">{kota.nama}</span>
            </nav>

            <Eyebrow>Gerobak usaha · {kota.nama}</Eyebrow>
            <h1 className="mt-7 max-w-[24ch] font-display text-[clamp(2.1rem,4.8vw,4.2rem)] font-medium uppercase leading-[1.02]">
              Gerobak Usaha
              <br />
              <span className="text-lime">di {kota.nama}.</span>
            </h1>
            <p className="mt-7 max-w-[660px] text-sm leading-[1.9] text-overlay-foreground/75 md:text-base">
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
                className="inline-flex items-center gap-2 rounded-full border border-overlay-foreground/25 px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.1em] transition-colors hover:bg-overlay-foreground/10"
              >
                Lihat hasil pengerjaan
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="mt-6 text-sm text-overlay-foreground/70">
              Telepon atau WhatsApp:{" "}
              <a
                href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
                className="font-semibold text-lime underline underline-offset-4"
              >
                {PHONE_DISPLAY}
              </a>
            </p>

            <dl className="mt-14 grid gap-8 border-t border-overlay-foreground/20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <dt className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-lime">
                  <MapPin size={14} /> Jangkauan
                </dt>
                <dd className="mt-3 text-sm leading-[1.8] text-overlay-foreground/75">
                  {kota.jarak}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-lime">
                  <Ruler size={14} /> Ukuran menyesuaikan
                </dt>
                <dd className="mt-3 text-sm leading-[1.8] text-overlay-foreground/75">
                  Rincian dimensi dan bahan untuk {kota.nama} ada di bagian berikutnya, bukan ukuran
                  seragam pabrik.
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-lime">
                  <Package size={14} /> Knockdown
                </dt>
                <dd className="mt-3 text-sm leading-[1.8] text-overlay-foreground/75">
                  Bisa dibongkar saat pengiriman, sehingga ongkos kirim ke {kota.nama} jauh lebih
                  hemat.
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-[11px] text-overlay-foreground/50">
              Visual workshop merupakan ilustrasi konsep.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
            <div>
              <Eyebrow>Ukuran &amp; spesifikasi</Eyebrow>
              <h2 className="mt-7 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium uppercase leading-[1.05]">
                Ukuran untuk
                <br />
                <span className="text-muted-foreground">{kota.nama}.</span>
              </h2>
              <p className="mt-6 text-sm leading-[1.9] text-muted-foreground">
                Angka di bawah ini rentang yang paling sering kami kerjakan, bukan ukuran wajib.
                Kirim ukuran lokasi Anda, kami sesuaikan.
              </p>
            </div>
            <div className="grid gap-3">
              {kota.spesifikasi.map((spek) => (
                <article
                  key={spek.label}
                  className="grid gap-3 rounded-2xl border border-border bg-card p-5 sm:grid-cols-[minmax(0,190px)_1fr] sm:gap-6 md:p-6"
                >
                  <div>
                    <h3 className="font-display text-xs font-bold uppercase tracking-[0.1em]">
                      {spek.label}
                    </h3>
                    <p className="mt-2 font-display text-lg font-medium text-accent md:text-xl">
                      {spek.nilai}
                    </p>
                  </div>
                  <p className="text-sm leading-[1.9] text-muted-foreground">{spek.catatan}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
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
                  <article key={item.judul} className="rounded-2xl border border-border bg-background p-6 md:p-8">
                    <h3 className="font-display text-base font-bold uppercase tracking-[0.02em] md:text-lg">
                      {item.judul}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.9] text-muted-foreground">{item.isi}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-charcoal p-7 text-overlay-foreground md:p-10">
              <h3 className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] text-lime">
                <ShieldCheck size={14} /> Pertimbangan teknis untuk {kota.nama}
              </h3>
              <p className="mt-4 max-w-[820px] text-sm leading-[1.9] text-overlay-foreground/75 md:text-base">
                {kota.teknis}
              </p>
            </div>
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

        {contoh.length > 0 && (
          <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Contoh pengerjaan</Eyebrow>
                <h2 className="mt-7 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium uppercase leading-[1.05]">
                  Gerobak yang
                  <br />
                  <span className="text-muted-foreground">Sudah Kami Buat.</span>
                </h2>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em] underline underline-offset-4 decoration-border hover:decoration-foreground"
              >
                Semua portofolio
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contoh.map((proyek) => (
                <article key={proyek.slug} className="group overflow-hidden rounded-2xl border border-border">
                  <div className="aspect-4/3 overflow-hidden bg-secondary">
                    <img
                      src={proyek.image}
                      alt={proyek.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-display text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {proyek.category} · {proyek.year}
                    </span>
                    <h3 className="mt-2 font-display text-base font-bold uppercase tracking-[0.02em]">
                      {proyek.name}
                    </h3>
                    <dl className="mt-5 flex flex-col gap-2 border-t border-border pt-4 text-sm">
                      <div className="flex justify-between gap-4">
                        <dt className="flex items-center gap-2 text-muted-foreground">
                          <Ruler size={13} /> Ukuran
                        </dt>
                        <dd className="text-right font-medium">{proyek.size}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="flex items-center gap-2 text-muted-foreground">
                          <Timer size={13} /> Pengerjaan
                        </dt>
                        <dd className="text-right font-medium">{proyek.duration}</dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="flex items-center gap-2 text-muted-foreground">
                          <Wrench size={13} /> Finishing
                        </dt>
                        <dd className="text-right font-medium">{proyek.finish}</dd>
                      </div>
                    </dl>
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: proyek.slug }}
                      className="mt-5 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-accent"
                    >
                      Lihat detail
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
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
          </div>
        </section>

        <section className="bg-charcoal py-16 text-overlay-foreground md:py-24">
          <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
            <Eyebrow>Mulai dari ukuran</Eyebrow>
            <h2 className="mt-7 max-w-[20ch] font-display text-[clamp(2rem,5vw,4rem)] font-medium uppercase leading-[1] text-lime">
              Ukur lokasi Anda di {kota.nama}, lalu kirim angkanya.
            </h2>
            <p className="mt-6 max-w-[620px] text-sm leading-[1.9] text-overlay-foreground/75 md:text-base">
              Tanpa perlu gambar. Sebutkan lebar dan panjang area yang tersedia, jenis menu, dan
              kami susun penawaran beserta ukuran gerobak yang pas.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                Tanya lewat WhatsApp
                <ArrowUpRight size={16} />
              </a>
              <a
                href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
                className="font-display text-sm font-bold uppercase tracking-[0.06em] text-lime underline underline-offset-4"
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
