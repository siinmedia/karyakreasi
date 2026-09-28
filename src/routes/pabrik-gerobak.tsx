import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MapPin, Truck, Wrench } from "lucide-react";
import { Eyebrow, SiteFooter, SiteHeader } from "@/routes/site-chrome";
import {
  canonicalLink,
  faqSchema,
  gerobakServiceSchema,
  jsonLdScript,
  localBusinessSchema,
  PAKET_USAHA,
  PHONE_DISPLAY,
  SERVICE_AREAS,
  socialMeta,
  whatsappUrl,
} from "@/lib/seo";

const TITLE = "Pabrik Gerobak Jepara & Kudus — Paket Usaha Siap Jualan";
const DESCRIPTION =
  "Pabrik gerobak usaha di Jepara melayani Kudus, Pati, Demak, dan Semarang. Gerobak custom, paket usaha siap jualan, booth, dan kanopi. Kirim ukuran, kami kerjakan.";

/** Jarak tempuh dari workshop ke kota tujuan, untuk bagian jangkauan layanan. */
const AREAS: Record<string, string> = {
  Jepara: "Lokasi workshop di Kalinyamatan, Jepara.",
  Kudus: "Sekitar 45 menit dari Kudus via Jalan Lingkar.",
  Pati: "Sekitar 1 jam dari Pati lewat Mayong.",
  Demak: "Sekitar 1,5 jam dari Demak.",
  Rembang: "Sekitar 2 jam dari Rembang.",
  Semarang: "Sekitar 2 jam dari Semarang via Pantura.",
};

const FAQS = [
  [
    "Di mana lokasi pabrik gerobak ini?",
    "Workshop kami berada di Kdamarjati, Kalinyamatan, Kabupaten Jepara, Jawa Tengah. Pengunjung dapat melihat langsung proses pengerjaan dengan membuat janji terlebih dahulu.",
  ],
  [
    "Apakah bisa mengirim gerobak ke Kudus dan sekitarnya?",
    "Ya. Kami rutin mengirim gerobak usaha ke Kudus, Pati, Demak, Rembang, dan Semarang. Biaya dan cara pengiriman dibicarakan setelah ukuran gerobak dan lokasi tujuan diketahui.",
  ],
  [
    "Apa itu paket usaha gerobak?",
    "Paket usaha adalah gerobak yang sudah dilengkapi kebutuhan dasar untuk mulai berjualan, seperti meja kerja, rak penyimpanan, penyangga kompor, dan kanopi. Jadi Anda tidak perlu membeli perlengkapan satu per satu.",
  ],
  [
    "Berapa lama proses pembuatan satu gerobak?",
    "Untuk gerobak ukuran standar umumnya selesai dalam dua sampai empat minggu, tergantung tingkat kerumitan dan antrean pesanan. Estimasi pasti diberikan saat penawaran.",
  ],
  [
    "Bisakah saya datang membawa desain sendiri?",
    "Bisa. Kirim gambar referensi, sketsa, atau drawing. Kami akan membahas penyesuaian ukuran dan material agar hasilnya sesuai rencana Anda dan tetap kuat saat dipakai harian.",
  ],
  [
    "Apakah gerobak bisa dibuat khusus untuk ukuran lokasi saya?",
    "Ya, itu justru yang paling sering kami kerjakan. Ukuran disesuaikan dengan lebar area parkir, lebar pintu, atau ruang teras yang tersedia di lokasi usaha Anda.",
  ],
] as const;

export const Route = createFileRoute("/pabrik-gerobak")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      ...socialMeta({
        title: TITLE,
        description: DESCRIPTION,
        url: "/pabrik-gerobak",
        image: "/og/gerobak.jpg",
      }),
    ],
    links: [canonicalLink("/pabrik-gerobak")],
    scripts: [
      jsonLdScript(localBusinessSchema()),
      jsonLdScript(gerobakServiceSchema()),
      jsonLdScript(faqSchema(FAQS)),
    ],
  }),
  component: PabrikGerobak,
});

function PabrikGerobak() {
  return (
    <>
      <SiteHeader tone="solid" />
      <main className="overflow-x-hidden">
        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
            <Eyebrow>Pabrik gerobak usaha</Eyebrow>
            <h1 className="mt-7 max-w-[22ch] font-display text-[clamp(2.2rem,5vw,4.4rem)] font-medium uppercase leading-[1.02]">
              Pabrik Gerobak
              <br />
              <span className="text-muted-foreground">Jepara &amp; Kudus.</span>
            </h1>
            <p className="mt-7 max-w-[620px] text-sm leading-[1.9] text-muted-foreground md:text-base">
              Kami membuat gerobak usaha custom langsung di workshop Jepara, lalu mengirimnya ke
              Kudus, Pati, Demak, Rembang, Semarang, dan sekitarnya. Semua dikerjakan sesuai ukuran
              lokasi Anda, bukan sekadar ukuran standar pabrik.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl(
                  "Halo Karya Kreasi Bersama, saya ingin tanya soal pembuatan gerobak usaha.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                Tanya ukuran &amp; harga
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

            <dl className="mt-14 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
              <div>
                <dt className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em]">
                  <Wrench size={14} /> Dikerjakan sendiri
                </dt>
                <dd className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                  Diproduksi di workshop Jepara, bukan dipesan ulang dari pihak ketiga.
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em]">
                  <MapPin size={14} /> Ukuran menyesuaikan
                </dt>
                <dd className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                  Dimensi disesuaikan lokasi usaha Anda, termasuk area parkir yang sempit.
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.1em]">
                  <Truck size={14} /> Kirim ke luar kota
                </dt>
                <dd className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                  Melayani pengiriman ke Kudus, Pati, Demak, Rembang, dan Semarang.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
          <Eyebrow>Paket usaha</Eyebrow>
          <h2 className="mt-7 max-w-[26ch] font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium uppercase leading-[1.05]">
            Paket Usaha Siap
            <br />
            <span className="text-muted-foreground">Mulai Jualan.</span>
          </h2>
          <p className="mt-6 max-w-[620px] text-sm leading-[1.9] text-muted-foreground md:text-base">
            Kalau Anda baru memulai usaha, paket ini menghemat waktu karena gerobak datang sudah
            lengkap dengan kebutuhan dasar. Semua paket tetap bisa disesuaikan dengan menu dan cara
            jualan Anda.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PAKET_USAHA.map((paket) => (
              <article key={paket.name} className="rounded-2xl border border-border p-7 md:p-9">
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.02em]">
                  {paket.name}
                </h3>
                <p className="mt-4 text-sm leading-[1.9] text-muted-foreground">{paket.description}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {paket.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Check size={12} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
            <Eyebrow>Jangkauan layanan</Eyebrow>
            <h2 className="mt-7 max-w-[26ch] font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium uppercase leading-[1.05]">
              Kirim ke Kota
              <br />
              <span className="text-muted-foreground">Sekitar Jepara.</span>
            </h2>
            <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="border-t border-border pt-5">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.08em]">
                    Gerobak &amp; Booth {area}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{AREAS[area]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:gap-16">
            <div>
              <Eyebrow>Pertanyaan umum</Eyebrow>
              <h2 className="mt-7 font-display text-[clamp(1.9rem,3.6vw,3.2rem)] font-medium uppercase leading-[1.05]">
                Sebelum
                <br />
                <span className="text-muted-foreground">Memesan.</span>
              </h2>
            </div>
            <dl className="flex flex-col">
              {FAQS.map(([question, answer]) => (
                <div key={question} className="border-t border-border py-6">
                  <dt className="font-display text-sm font-bold uppercase tracking-[0.06em]">
                    {question}
                  </dt>
                  <dd className="mt-3 max-w-[720px] text-sm leading-[1.9] text-muted-foreground">
                    {answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
