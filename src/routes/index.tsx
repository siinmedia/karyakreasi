import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  canonicalLink,
  faqSchema,
  jsonLdScript,
  localBusinessSchema,
  PHONE_DISPLAY,
  socialMeta,
  whatsappUrl,
} from "@/lib/seo";
import { SiteHeader } from "@/routes/site-chrome";
import hero from "@/assets/workshop-hero.jpg";
import container from "@/assets/container-project.jpg";
import canopy from "@/assets/canopy-project.jpg";
import steel from "@/assets/steel-workshop.jpg";

const TITLE = "Pabrik Gerobak Usaha Jepara — Fabrikasi Custom & Booth";
const DESCRIPTION =
  "Pabrik gerobak usaha di Jepara, melayani Kudus, Pati, dan Demak. Gerobak custom, paket usaha siap jualan, booth, kanopi, gerbang, dan struktur besi. Kirim ukuran, kami kerjakan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/" }),
    ],
    links: [canonicalLink("/")],
    scripts: [jsonLdScript(localBusinessSchema()), jsonLdScript(faqSchema(faqs as [string, string][]))],
  }),
  component: Home,
});

const nav = [
  ["Tentang", "#tentang"], ["Layanan", "#layanan"], ["Workshop", "#workshop"],
  ["Proses", "#proses"], ["Proyek", "#proyek"], ["Kontak", "#kontak"],
];
const services = [
  { title: "Container & Booth", detail: "Ruang usaha, booth komersial, dan bangunan modular yang dirancang sesuai fungsi dan karakter brand Anda.", image: container },
  { title: "Canopy & Roofing", detail: "Kanopi dan struktur atap dengan perencanaan material dan detail sambungan yang rapi.", image: canopy },
  { title: "Gate & Fence", detail: "Gerbang dan pagar custom yang menggabungkan kekuatan konstruksi dengan tampilan yang berkarakter.", image: steel },
  { title: "Steel Fabrication", detail: "Pengerjaan struktur besi, rangka, serta elemen logam sesuai kebutuhan dan ukuran di lapangan.", image: hero },
  { title: "Custom Project", detail: "Punya rancangan yang tidak biasa? Kami siap membantu menerjemahkan ide menjadi produk yang dapat dibangun.", image: container },
];
const steps = ["Konsultasi", "Desain", "Fabrikasi", "Finishing", "Pengiriman"];
const faqs = [
  ["Apakah ukuran bisa dibuat custom?", "Ya. Dimensi dan spesifikasi dapat disesuaikan dengan kebutuhan proyek serta kondisi lokasi."],
  ["Apakah bisa mengerjakan desain dari referensi?", "Bisa. Kirim gambar referensi, sketsa, atau drawing agar kami dapat mendiskusikan detail pengerjaannya."],
  ["Apa saja jenis pekerjaan yang diterima?", "Kami mengerjakan container dan booth, kanopi, gerbang, pagar, struktur besi, serta kebutuhan fabrikasi custom lainnya."],
  ["Apakah melayani pengiriman?", "Kebutuhan pengiriman dan pemasangan dapat dibicarakan saat konsultasi sesuai lokasi dan jenis proyek."],
  ["Bagaimana sistem pembayaran?", "Detail pembayaran disepakati bersama setelah lingkup pekerjaan dan penawaran proyek ditentukan."],
  ["Apa yang perlu disiapkan untuk konsultasi?", "Cukup siapkan gambaran kebutuhan, perkiraan ukuran, lokasi, dan referensi visual jika ada."],
];
const whatsappShare = whatsappUrl();

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-display text-[11px] font-bold uppercase tracking-[0.12em] md:text-xs"><span className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />{children}</p>;
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return <main className="overflow-x-hidden">
    <section id="atas" className="relative min-h-[640px] h-[78svh] md:h-[min(850px,92svh)] text-overlay-foreground md:min-h-[680px]">
      <img src={hero} alt="Ilustrasi suasana pengerjaan struktur container di workshop fabrikasi" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      <div className="hero-shade absolute inset-0" />
      <SiteHeader />
      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col justify-center px-5 pb-24 pt-6 md:px-10 md:pb-28 lg:px-16">
        <p className="mb-7 font-display text-[11px] font-semibold uppercase tracking-[0.2em] md:text-xs">CUSTOM FABRICATION WORKSHOP · JEPARA, INDONESIA</p>
        <h1 className="max-w-[1100px] font-display text-[clamp(3.8rem,9vw,9.5rem)] font-medium leading-[0.91] uppercase">WE BUILD.<br />YOU <span className="text-accent">IMAGINE.</span></h1>
        <div className="mt-8 flex flex-col items-start gap-7 md:mt-12 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[440px] text-sm leading-relaxed text-overlay-foreground/85 md:text-base">Karya Kreasi Bersama adalah workshop fabrikasi custom untuk container, booth, kanopi, pagar, struktur besi, dan ide-ide yang belum punya bentuk.</p>
          <div className="flex flex-wrap gap-2.5"><Button asChild variant="industrial" className="h-11 px-6"><a href="#proyek">Lihat Proyek <ArrowUpRight /></a></Button><Button asChild variant="industrialOutline" className="h-11 px-6"><a href="#kontak">Mulai Konsultasi <ArrowUpRight /></a></Button></div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-line-light bg-charcoal/35 backdrop-blur-sm"><div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto] items-center gap-5 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] md:grid-cols-[1fr_1fr_auto] md:px-10 lg:px-16"><span>01 / Dibuat dengan presisi</span><span className="hidden md:block">Workshop berbasis di Jepara, Jawa Tengah</span><a href="#tentang" className="flex items-center gap-2">Jelajahi <ArrowDown size={14} /></a></div></div>
    </section>

    <section id="tentang" className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-28 lg:px-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-20"><div><Eyebrow>Tentang kami</Eyebrow><h2 className="mt-8 max-w-[850px] font-display text-[clamp(2.5rem,5.5vw,6rem)] font-medium uppercase leading-[.98]">IDE BESAR.<br />DIBANGUN <span className="text-muted-foreground">NYATA.</span></h2></div><div className="flex items-end"><p className="max-w-[430px] text-sm leading-[1.9] text-muted-foreground md:text-base">Kami percaya bahwa setiap ide layak dikerjakan dengan cermat. Dari potongan pertama hingga sentuhan akhir, proses fabrikasi adalah tentang menyatukan fungsi, kekuatan, dan detail yang tepat.</p></div></div>
      <div className="mt-14 grid gap-3 md:grid-cols-[1.15fr_.85fr]"><div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-charcoal text-overlay-foreground md:min-h-[510px]"><img src={steel} alt="Ilustrasi perajin mengelas gerbang besi di workshop" loading="lazy" width={1200} height={1504} className="absolute inset-0 h-full w-full object-cover object-center" /><div className="image-shade absolute inset-0" /><div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4"><div><Eyebrow>Di balik setiap bentuk</Eyebrow><p className="mt-3 font-display text-2xl uppercase md:text-3xl">BUILT IN OUR WORKSHOP.</p></div><ArrowUpRight className="shrink-0" /></div></div><div className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-accent p-6 text-accent-foreground md:p-9"><div className="flex items-start justify-between"><span className="font-display text-xs font-bold uppercase">Cara kami bekerja</span><ArrowUpRight /></div><p className="max-w-[550px] font-display text-[clamp(2rem,3.6vw,4.1rem)] font-medium uppercase leading-[1.05]">DARI SKETSA, MATERIAL, HINGGA SESUATU YANG BERDIRI.</p><span className="text-xs font-semibold uppercase">Karya Kreasi Bersama — Jepara</span></div></div>
    </section>

    <section id="proyek" className="bg-card py-20 md:py-28"><div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16"><div className="grid items-end gap-7 md:grid-cols-[1.15fr_.85fr] md:gap-12"><div><Eyebrow>Bidang pekerjaan</Eyebrow><h2 className="mt-8 font-display text-[clamp(2.5rem,5.5vw,6rem)] font-medium uppercase leading-[.98]">BENTUK YANG<br />PUNYA <span className="text-muted-foreground">TUJUAN.</span></h2></div><p className="max-w-[420px] text-sm leading-[1.8] text-muted-foreground md:pb-1 md:text-base">Setiap kebutuhan punya tantangannya sendiri. Berikut gambaran jenis pekerjaan yang bisa kami wujudkan bersama Anda.</p></div>
      <div className="mt-12 grid gap-3 md:grid-cols-3">{[
        { image: container, name: "Container & Booth", type: "Ruang usaha modular", number: "01" },
        { image: canopy, name: "Canopy & Roofing", type: "Struktur atap", number: "02" },
        { image: steel, name: "Gate & Fence", type: "Fabrikasi besi", number: "03" },
      ].map((item) => <a href="#kontak" key={item.name} className="group relative aspect-[.9] overflow-hidden rounded-2xl bg-muted text-overlay-foreground md:aspect-[.75]"><img src={item.image} alt={`Ilustrasi ${item.name.toLowerCase()}`} loading="lazy" width={1200} height={1504} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="image-shade absolute inset-0" /><div className="absolute left-5 top-5 font-display text-xs">{item.number} / 03</div><div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3"><div><p className="mb-2 text-xs">{item.type}</p><h3 className="font-display text-2xl font-medium uppercase md:text-3xl">{item.name}</h3></div><ArrowUpRight className="shrink-0" /></div></a>)}</div>
      <p className="mt-3 text-[11px] text-muted-foreground">Visual merupakan ilustrasi konsep, bukan dokumentasi proyek klien.</p>
    </div></section>

    <section id="layanan" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28 lg:px-16"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div><Eyebrow>Layanan kami</Eyebrow><h2 className="mt-8 font-display text-[clamp(2.5rem,4.6vw,5rem)] font-medium uppercase leading-[1]">APA YANG<br />KAMI <span className="text-muted-foreground">BANGUN.</span></h2><p className="mt-7 max-w-[340px] text-sm leading-[1.8] text-muted-foreground">Solusi fabrikasi yang dimulai dari kebutuhan nyata, bukan dari bentuk yang seragam.</p></div><div><div className="relative mb-5 aspect-[1.55] overflow-hidden rounded-2xl bg-muted"><img src={services[activeService]?.image ?? hero} alt={`Ilustrasi layanan ${services[activeService]?.title ?? "fabrikasi"}`} loading="lazy" width={1200} height={1504} className="h-full w-full object-cover" /></div>{services.map((service, i) => <div key={service.title} className="border-t border-border"><Button variant="ghost" className="flex h-auto w-full justify-between rounded-none px-0 py-4 text-left hover:bg-transparent md:py-5" onClick={() => setActiveService(i)} aria-expanded={activeService === i}><span className="flex min-w-0 items-center gap-4 md:gap-7"><span className="font-display text-xs text-muted-foreground">0{i + 1}</span><span className="font-display text-xl font-medium uppercase md:text-3xl">{service.title}</span></span><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary"><Plus size={16} className={activeService === i ? "rotate-45 transition-transform" : "transition-transform"} /></span></Button>{activeService === i && <p className="max-w-[460px] pb-5 pl-9 text-sm leading-relaxed text-muted-foreground md:pl-12">{service.detail}</p>}</div>)}</div></div></section>

    <section id="paket" className="border-y border-border bg-secondary py-20 md:py-28"><div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16"><div className="grid gap-8 md:grid-cols-2"><div><Eyebrow>Paket usaha gerobak</Eyebrow><h2 className="mt-8 font-display text-[clamp(2.5rem,4.8vw,5.3rem)] font-medium uppercase leading-[1]">SIAP JUALAN<br /><span className="text-muted-foreground">TANPA RIBET.</span></h2></div><p className="max-w-[430px] self-end text-sm leading-[1.9] text-muted-foreground md:text-base">Untuk Anda yang baru memulai usaha, gerobak bisa datang sudah lengkap dengan kebutuhan dasar. Ukuran tetap menyesuaikan lokasi, dan isi paket bisa diubah sesuai menu.</p></div><div className="mt-12 grid gap-3 md:grid-cols-3">{["Gerobak Kopi Susu", "Gerobak Makanan", "Booth Usaha"].map((nama, i) => <Link key={nama} to="/pabrik-gerobak" className="group flex flex-col justify-between rounded-2xl bg-card p-6 transition-colors hover:bg-background md:p-7"><span className="font-display text-xs text-muted-foreground">0{i + 1}</span><span className="mt-14 font-display text-xl font-medium uppercase leading-tight md:text-2xl">{nama}</span><span className="mt-5 inline-flex items-center gap-2 font-display text-[11px] font-bold uppercase tracking-[0.1em]">Lihat paket <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span></Link>)}</div><p className="mt-8 text-sm text-muted-foreground">Melayani pengiriman gerobak ke <span className="text-foreground">Jepara, Kudus, Pati, Demak, Rembang, dan Semarang</span>. <Link to="/pabrik-gerobak" className="underline underline-offset-4 hover:text-foreground">Selengkapnya soal pabrik gerobak</Link>.</p></div></section>

    <section id="workshop" className="bg-charcoal py-20 text-overlay-foreground md:py-28"><div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16"><div className="grid gap-8 md:grid-cols-2"><div><Eyebrow>Workshop / Jepara</Eyebrow><h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-medium uppercase leading-[1]">KARYA DIBENTUK<br /><span className="text-lime">DENGAN TANGAN.</span></h2></div><p className="max-w-[410px] self-end text-sm leading-[1.9] text-overlay-foreground/70 md:text-base">Pemotongan, perakitan, pengelasan, dan finishing adalah tahapan yang memberi setiap karya ketahanan sekaligus karakternya.</p></div><div className="mt-12 grid gap-3 md:grid-cols-[1.3fr_.7fr]"><div className="h-[380px] overflow-hidden rounded-2xl md:h-[540px]"><img src={hero} alt="Ilustrasi proses perakitan container di workshop" loading="lazy" width={1920} height={1088} className="h-full w-full object-cover" /></div><div className="h-[380px] overflow-hidden rounded-2xl md:h-[540px]"><img src={steel} alt="Ilustrasi proses pengelasan logam" loading="lazy" width={1200} height={1504} className="h-full w-full object-cover" /></div></div><p className="mt-3 text-[11px] text-overlay-foreground/60">Visual workshop merupakan ilustrasi konsep.</p></div></section>

    <section id="proses" className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28 lg:px-16"><div className="grid gap-8 md:grid-cols-2"><div><Eyebrow>Proses kami</Eyebrow><h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,5.5rem)] font-medium uppercase leading-[1]">DARI PERCAKAPAN<br />KE <span className="text-muted-foreground">KONSTRUKSI.</span></h2></div><p className="max-w-[380px] self-end text-sm leading-[1.9] text-muted-foreground md:text-base">Setiap proyek dimulai dengan memahami kebutuhan. Lalu kami memilih pendekatan yang tepat untuk merealisasikannya.</p></div><div className="mt-14 grid gap-2.5 md:grid-cols-5 md:gap-0 md:border-t md:border-border">{steps.map((step, i) => <div key={step} className="flex items-center justify-between rounded-xl bg-secondary px-5 py-4 md:block md:min-h-[170px] md:border-r md:bg-transparent md:px-4 md:py-5 md:first:pl-0 md:last:border-r-0"><span className="font-display text-sm text-muted-foreground">0{i + 1}</span><h3 className="font-display text-xl uppercase md:mt-16 md:text-2xl">{step}</h3></div>)}</div></section>

    <section className="bg-secondary py-20 md:py-28"><div className="mx-auto grid max-w-[1600px] gap-10 px-5 md:grid-cols-[.9fr_1.1fr] md:gap-20 md:px-10 lg:px-16"><div><Eyebrow>Material & kualitas</Eyebrow><h2 className="mt-8 font-display text-[clamp(2.5rem,4.8vw,5.3rem)] font-medium uppercase leading-[1]">DIBANGUN UNTUK<br /><span className="text-muted-foreground">BERTAHAN.</span></h2></div><div className="self-end"><p className="mb-8 max-w-[460px] text-sm leading-[1.8] text-muted-foreground">Material dipilih sesuai fungsi, lingkungan penggunaan, dan kebutuhan akhir proyek.</p><div className="flex flex-col gap-2">{["Hollow Galvanis", "Galvalum", "ACP Waterproof", "Steel", "Electrical Components"].map((material, i) => <div key={material} className="flex items-center justify-between rounded-xl bg-card px-5 py-3.5 font-display text-lg uppercase md:text-xl"><span>{material}</span><span className="text-xs text-muted-foreground">0{i + 1}</span></div>)}</div></div></div></section>

    <section id="kontak" className="bg-accent py-20 text-accent-foreground md:py-28"><div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16"><Eyebrow>Mulai dari sebuah ide</Eyebrow><h2 className="mt-9 max-w-[1300px] font-display text-[clamp(3.3rem,9vw,10rem)] font-medium uppercase leading-[.9]">GOT SOMETHING<br />IN MIND?</h2><div className="mt-11 flex flex-col items-start justify-between gap-7 border-t border-accent-foreground/30 pt-8 md:flex-row md:items-end"><p className="max-w-[550px] text-sm leading-[1.8] md:text-base">Kirim ukuran, gambar referensi, drawing, atau cukup ceritakan idenya. Mari ubah menjadi sesuatu yang bisa berdiri, digunakan, dan bertahan.</p><div className="flex flex-col gap-4 sm:flex-row sm:items-center"><Button asChild variant="industrialDark" size="lg" className="h-13 px-7"><a href={whatsappShare} target="_blank" rel="noreferrer">Siapkan Pesan WhatsApp <ArrowUpRight /></a></Button><a href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`} className="font-display text-sm font-bold uppercase tracking-[0.06em] underline underline-offset-4 hover:no-underline">Telepon {PHONE_DISPLAY}</a></div></div></div></section>

    <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28 lg:px-16"><div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20"><div><Eyebrow>FAQ</Eyebrow><h2 className="mt-8 font-display text-[clamp(2.5rem,5vw,5rem)] font-medium uppercase leading-[1]">PERTANYAAN<br />UMUM.</h2></div><div className="flex flex-col gap-2.5">{faqs.map(([question, answer], i) => <div key={question} className="rounded-xl bg-secondary px-5"><Button variant="ghost" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex h-auto w-full justify-between gap-5 px-0 py-4 text-left hover:bg-transparent md:py-5"><span className="whitespace-normal font-display text-base font-medium md:text-xl">{question}</span><Plus className={`shrink-0 transition-transform ${openFaq === i ? "rotate-45" : ""}`} /></Button>{openFaq === i && <p className="max-w-[560px] pb-5 text-sm leading-[1.8] text-muted-foreground">{answer}</p>}</div>)}</div></div></section>

    <footer className="bg-charcoal text-overlay-foreground"><div className="mx-auto max-w-[1600px] px-5 pt-16 md:px-10 md:pt-24 lg:px-16"><div className="grid gap-12 md:grid-cols-[1.5fr_.5fr_.7fr]"><div><p className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[.95]">KARYA KREASI<br />BERSAMA<span className="text-lime">.</span></p><p className="mt-6 text-sm text-overlay-foreground/65">Custom Fabrication Workshop · Jepara, Jawa Tengah</p></div><div><p className="mb-5 text-xs uppercase text-overlay-foreground/55">Jelajahi</p>{nav.map(([label, href]) => <a key={href} href={href} className="mb-3 block text-sm hover:text-lime">{label}</a>)}<Link to="/portfolio" className="mb-3 block text-sm text-lime">Portofolio</Link></div><div><p className="mb-5 text-xs uppercase text-overlay-foreground/55">Temukan kami</p><p className="mb-5 text-sm leading-[1.7]">Kdamarjati, Kalinyamatan<br />Jepara, Jawa Tengah</p><a href="https://www.google.com/maps/search/?api=1&query=Kdamarjati+Kalinyamatan+Jepara" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">Lihat di Google Maps <ArrowUpRight size={14} /></a></div></div><div className="mt-20 flex flex-col justify-between gap-3 border-t border-line-light py-6 text-[11px] uppercase text-overlay-foreground/55 md:flex-row"><span>© {new Date().getFullYear()} Karya Kreasi Bersama</span><a href="#atas" className="inline-flex items-center gap-2 hover:text-overlay-foreground">Kembali ke atas <ArrowRight className="-rotate-90" size={14} /></a></div></div></footer>
  </main>;
}
