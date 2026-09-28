import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNeighbors, getProject } from "./portfolio-data";
import { Eyebrow, SiteFooter, SiteHeader } from "./site-chrome";
import {
  SITE_NAME,
  canonicalLink,
  jsonLdScript,
  localBusinessSchema,
  projectSchema,
  socialMeta,
} from "@/lib/seo";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const project = loaderData?.project;
    if (!project) {
      return { meta: [{ title: `Proyek tidak ditemukan — ${SITE_NAME}` }] };
    }
    const path = `/portfolio/${project.slug}`;
    const title = `${project.name} — ${project.category} ${project.year} | ${SITE_NAME}`;
    const description = `${project.name}: ${project.category} ${project.year} di ${project.location}. ${project.detail}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        ...socialMeta({
          title,
          description,
          url: path,
          image: project.ogImage,
          type: "article",
        }),
      ],
      links: [canonicalLink(path)],
      scripts: [
        jsonLdScript(localBusinessSchema()),
        jsonLdScript(
          projectSchema({
            name: project.name,
            slug: project.slug,
            category: project.category,
            year: project.year,
            detail: project.detail,
            image: project.ogImage,
            materials: project.materials,
          }),
        ),
      ],
    };
  },
  notFoundComponent: NotFoundProject,
  component: ProjectDetail,
});

function NotFoundProject() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
      <p className="font-display text-[clamp(3rem,10vw,8rem)] font-medium uppercase leading-none">
        404
      </p>
      <h1 className="font-display text-2xl uppercase">Proyek tidak ditemukan</h1>
      <p className="max-w-[420px] text-sm text-muted-foreground">
        Proyek yang kamu cari mungkin sudah dipindahkan atau tautannya tidak lengkap.
      </p>
      <Button asChild variant="industrial">
        <Link to="/portfolio">
          <ArrowLeft /> Kembali ke Portofolio
        </Link>
      </Button>
    </main>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const { prev, next } = getNeighbors(project.slug);
  const specs: [string, string][] = [
    ["Kategori", project.category],
    ["Tahun", project.year],
    ["Lokasi", project.location],
    ["Ukuran", project.size],
    ["Durasi", project.duration],
    ["Finishing", project.finish],
  ];

  return (
    <main className="overflow-x-hidden">
      <section className="bg-charcoal text-overlay-foreground">
        <SiteHeader />
        <div className="mx-auto max-w-[1600px] px-5 pb-10 md:px-10 md:pb-14 lg:px-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-overlay-foreground/70 hover:text-lime"
          >
            <ArrowLeft size={14} /> Semua Portofolio
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>
                {project.category} · {project.year}
              </Eyebrow>
              <h1 className="mt-7 font-display text-[clamp(2.6rem,6vw,5.6rem)] font-medium uppercase leading-[.96]">
                {project.name}
              </h1>
              <p className="mt-7 max-w-[560px] text-sm leading-[1.9] text-overlay-foreground/80 md:text-base">
                {project.detail}
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <Button asChild variant="industrial" className="h-11 px-6">
                  <a href="/#kontak">
                    Buat yang Serupa <ArrowUpRight />
                  </a>
                </Button>
                <Button asChild variant="industrialOutline" className="h-11 px-6">
                  <Link to="/portfolio">Lihat Proyek Lain</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-muted">
              <img
                src={project.image}
                alt={`Ilustrasi ${project.name.toLowerCase()}`}
                width={1200}
                height={1504}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-12 md:py-16">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-9 px-5 md:grid-cols-3 md:px-10 lg:grid-cols-6 lg:px-16">
          {specs.map(([label, value]) => (
            <div key={label}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {label}
              </p>
              <p className="mt-2 font-display text-lg uppercase leading-tight md:text-xl">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>Detail pengerjaan</Eyebrow>
            <h2 className="mt-7 font-display text-[clamp(2rem,3.6vw,3.4rem)] font-medium uppercase leading-[1.02]">
              APA YANG KAMI
              <br />
              <span className="text-muted-foreground">KERJAKAN.</span>
            </h2>
            <p className="mt-6 max-w-[520px] text-sm leading-[1.9] text-muted-foreground md:text-base">
              Unit ini dirancang mengikuti kebutuhan pemakaian harian, mulai dari rangka, tata letak
              kerja, hingga finishing agar mudah dibersihkan dan tahan lama.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl bg-secondary p-6 md:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.1em]">
                Material yang dipakai
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {project.materials.map((material, i) => (
                  <div
                    key={material}
                    className="flex items-center justify-between rounded-xl bg-card px-5 py-3.5 font-display text-lg uppercase md:text-xl"
                  >
                    <span>{material}</span>
                    <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-accent p-6 text-accent-foreground md:p-8">
              <p className="font-display text-xl uppercase leading-tight md:text-2xl">
                Mau gerobak dengan ukuran &amp; fungsi seperti ini?
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                Kirim ukuran area usaha dan kebutuhan peralatannya, kami buatkan gambaran rancangannya.
              </p>
              <Button asChild variant="industrialDark" className="mt-6 h-11 px-6">
                <a href="/#kontak">
                  Konsultasi Sekarang <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <p className="mt-6 text-[11px] text-muted-foreground">
          Visual merupakan ilustrasi konsep, bukan dokumentasi proyek klien.
        </p>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] gap-px px-5 py-12 md:grid-cols-2 md:px-10 lg:px-16">
          <Link
            to="/portfolio/$slug"
            params={{ slug: prev?.slug ?? project.slug }}
            className="group flex items-center gap-4 py-4 text-left"
          >
            <ArrowLeft className="shrink-0 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Proyek sebelumnya
              </span>
              <span className="mt-1 block font-display text-xl uppercase md:text-2xl">
                {prev?.name}
              </span>
            </span>
          </Link>
          <Link
            to="/portfolio/$slug"
            params={{ slug: next?.slug ?? project.slug }}
            className="group flex items-center justify-end gap-4 py-4 text-right md:border-l md:border-border md:pl-10"
          >
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Proyek selanjutnya
              </span>
              <span className="mt-1 block font-display text-xl uppercase md:text-2xl">
                {next?.name}
              </span>
            </span>
            <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
