import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { categories, projects } from "./portfolio-data";
import { Eyebrow, SiteFooter, SiteHeader } from "./site-chrome";
import {
  canonicalLink,
  jsonLdScript,
  localBusinessSchema,
  portfolioListSchema,
  socialMeta,
} from "@/lib/seo";
import steel from "@/assets/steel-workshop.jpg";

const TITLE = "Portofolio Gerobak & Fabrikasi — Karya Kreasi Bersama";
const DESCRIPTION =
  "Arsip proyek Karya Kreasi Bersama: gerobak usaha custom, booth, kanopi, dan fabrikasi besi, lengkap dengan material dan tahun pengerjaan.";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/portfolio" }),
    ],
    links: [canonicalLink("/portfolio")],
    scripts: [
      jsonLdScript(localBusinessSchema()),
      jsonLdScript(
        portfolioListSchema(
          projects.map((p) => ({ name: p.name, slug: p.slug, category: p.category })),
        ),
      ),
    ],
  }),
  component: Portfolio,
});

const stats: [string, string][] = [
  ["24+", "Gerobak dibangun"],
  ["60+", "Proyek fabrikasi"],
  ["12", "Jenis material"],
  ["2019", "Mulai beroperasi"],
];

function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");
  const [open, setOpen] = useState<string | null>(projects[0]?.slug ?? null);

  const shown = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="overflow-x-hidden">
      <section id="atas" className="relative text-overlay-foreground">
        <img
          src={steel}
          alt="Ilustrasi suasana workshop fabrikasi"
          width={1200}
          height={1504}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="hero-shade absolute inset-0" />
        <SiteHeader />
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-28 lg:px-16">
          <p className="mb-6 font-display text-[11px] font-semibold uppercase tracking-[0.2em] md:text-xs">
            PORTOFOLIO · GEROBAK & FABRIKASI CUSTOM
          </p>
          <h1 className="max-w-[1100px] font-display text-[clamp(3.2rem,8vw,8.5rem)] font-medium uppercase leading-[0.92]">
            YANG PERNAH
            <br />
            KAMI <span className="text-accent">BANGUN.</span>
          </h1>
          <div className="mt-8 flex flex-col items-start gap-7 md:mt-12 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[460px] text-sm leading-relaxed text-overlay-foreground/85 md:text-base">
              Arsip gerobak usaha, booth, kanopi, dan struktur besi yang sudah kami kerjakan. Setiap
              unit punya cerita, ukuran, dan kebutuhan materialnya sendiri.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Button asChild variant="industrial" className="h-11 px-6">
                <a href="#daftar">
                  Lihat Daftar <ArrowDown />
                </a>
              </Button>
              <Button asChild variant="industrialOutline" className="h-11 px-6">
                <Link to="/">
                  <ArrowLeft /> Kembali ke Beranda
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-10 md:py-14">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:px-10 lg:px-16">
          {stats.map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium uppercase leading-none">
                {value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="daftar" className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="grid items-end gap-7 md:grid-cols-[1.15fr_.85fr] md:gap-12">
          <div>
            <Eyebrow>Daftar pekerjaan</Eyebrow>
            <h2 className="mt-8 font-display text-[clamp(2.5rem,5.5vw,6rem)] font-medium uppercase leading-[.98]">
              GEROBAK &<br />
              PROYEK <span className="text-muted-foreground">LAIN.</span>
            </h2>
          </div>
          <p className="max-w-[420px] text-sm leading-[1.8] text-muted-foreground md:pb-1 md:text-base">
            Pilih kategori untuk menyaring, lalu klik salah satu proyek untuk membuka halaman detail
            berisi material, ukuran, dan durasi pengerjaannya.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={
                "rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] transition-colors " +
                (active === category
                  ? "border-transparent bg-charcoal text-overlay-foreground"
                  : "border-border bg-transparent text-foreground hover:bg-secondary")
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {shown.map((project, i) => (
            <Link
              key={project.slug}
              to="/portfolio/$slug"
              params={{ slug: project.slug }}
              className="group relative aspect-[.9] overflow-hidden rounded-2xl bg-muted text-overlay-foreground md:aspect-[.75]"
            >
              <img
                src={project.image}
                alt={`Ilustrasi ${project.name.toLowerCase()}`}
                loading="lazy"
                width={1200}
                height={1504}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="image-shade absolute inset-0" />
              <div className="absolute left-5 top-5 font-display text-xs">
                {String(i + 1).padStart(2, "0")} / {String(shown.length).padStart(2, "0")}
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                <div>
                  <p className="mb-2 text-xs">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="font-display text-2xl font-medium uppercase md:text-3xl">
                    {project.name}
                  </h3>
                </div>
                <ArrowUpRight className="shrink-0" />
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-3 text-[11px] text-muted-foreground">
          Visual merupakan ilustrasi konsep, bukan dokumentasi proyek klien.
        </p>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 md:grid-cols-[.8fr_1.2fr] md:gap-20 md:px-10 lg:px-16">
          <div>
            <Eyebrow>Rincian proyek</Eyebrow>
            <h2 className="mt-8 font-display text-[clamp(2.5rem,4.6vw,5rem)] font-medium uppercase leading-[1]">
              MATERIAL &
              <br />
              <span className="text-muted-foreground">UKURAN.</span>
            </h2>
            <p className="mt-7 max-w-[340px] text-sm leading-[1.8] text-muted-foreground">
              Catatan singkat dari setiap unit: bahan, lokasi, dan lingkup pekerjaannya.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            {projects.map((project) => (
              <div key={project.slug} className="rounded-xl bg-card px-5">
                <Button
                  variant="ghost"
                  aria-expanded={open === project.slug}
                  onClick={() => setOpen(open === project.slug ? null : project.slug)}
                  className="flex h-auto w-full items-center justify-between gap-4 px-0 py-4 text-left hover:bg-transparent md:py-5"
                >
                  <span className="flex min-w-0 flex-col">
                    <span className="whitespace-normal font-display text-base font-medium uppercase md:text-xl">
                      {project.name}
                    </span>
                    <span className="mt-1 text-xs text-muted-foreground">
                      {project.location} · {project.year} · {project.size}
                    </span>
                  </span>
                  <Plus
                    className={`shrink-0 transition-transform ${open === project.slug ? "rotate-45" : ""}`}
                  />
                </Button>
                {open === project.slug && (
                  <div className="pb-5">
                    <p className="max-w-[560px] text-sm leading-[1.8] text-muted-foreground">
                      {project.detail}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.materials.map((material) => (
                        <span
                          key={material}
                          className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em]"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: project.slug }}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
                    >
                      Lihat halaman detail <ArrowUpRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20 text-accent-foreground md:py-28">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10 lg:px-16">
          <Eyebrow>Punya kebutuhan serupa?</Eyebrow>
          <h2 className="mt-9 max-w-[1300px] font-display text-[clamp(2.8rem,8vw,9rem)] font-medium uppercase leading-[.92]">
            BIKIN GEROBAK
            <br />
            SESUAI IDEMU.
          </h2>
          <div className="mt-11 flex flex-col items-start justify-between gap-7 border-t border-accent-foreground/30 pt-8 md:flex-row md:items-end">
            <p className="max-w-[550px] text-sm leading-[1.8] md:text-base">
              Ceritakan jenis dagangan, ukuran, dan lokasi pemakaiannya. Kami bantu tentukan rangka,
              material, dan tampilan yang paling pas.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Button asChild variant="industrialDark" size="lg" className="h-13 px-7">
                <a href="/#kontak">
                  Mulai Konsultasi <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="industrialOutline" size="lg" className="h-13 px-7">
                <Link to="/">Kembali ke Beranda</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
