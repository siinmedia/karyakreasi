import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, whatsappUrl } from "@/lib/seo";
import { kotaGerobak } from "@/routes/kota-data";

export const nav: [string, string][] = [
  ["Tentang", "/#tentang"],
  ["Layanan", "/#layanan"],
  ["Workshop", "/#workshop"],
  ["Proses", "/#proses"],
  ["Proyek", "/#proyek"],
  ["Paket Usaha", "/pabrik-gerobak"],
  ["Kontak", "/#kontak"],
];

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-[11px] font-bold uppercase tracking-[0.12em] md:text-xs">
      <span className="mr-2 inline-block size-1.5 rounded-full bg-accent align-middle" />
      {children}
    </p>
  );
}

export function SiteHeader({ tone = "overlay" }: { tone?: "overlay" | "solid" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = tone === "solid";
  return (
    <>
      <header
        className={
          "relative z-20 mx-auto grid max-w-[1600px] grid-cols-[1fr_auto] items-center gap-x-6 px-5 py-5 md:px-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8 lg:px-16 " +
          (solid ? "text-foreground" : "text-overlay-foreground")
        }
      >
        <div className="flex items-center gap-8 lg:gap-10">
          <Link
            to="/"
            aria-label="Karya Kreasi Bersama, kembali ke beranda"
            className="flex shrink-0 items-center gap-2.5 font-display text-xs font-bold leading-[1.03] md:text-sm"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-accent font-display text-lg text-accent-foreground">
              K<span className="text-[10px]">/</span>
            </span>
            <span className="whitespace-nowrap">
              KARYA KREASI
              <br />
              BERSAMA
            </span>
          </Link>
        </div>
        <nav
          className={
            "hidden items-center gap-1 rounded-full border px-2 py-2 text-xs font-semibold shadow-[0_6px_24px_-12px_rgba(0,0,0,.5)] backdrop-blur-xl lg:flex " +
            (solid
              ? "border-border bg-card/95 text-foreground"
              : "border-overlay-foreground/20 bg-charcoal/90 text-overlay-foreground")
          }
          aria-label="Navigasi utama"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={
                "rounded-full px-4 py-2 tracking-[0.01em] transition-colors " +
                (solid ? "hover:bg-secondary" : "hover:bg-overlay-foreground/15")
              }
            >
              {label}
            </a>
          ))}
          <Link
            to="/portfolio"
            activeProps={{ className: "bg-accent text-accent-foreground" }}
            className={
              "rounded-full px-4 py-2 font-semibold tracking-[0.01em] transition-colors " +
              (solid
                ? "text-foreground hover:bg-secondary"
                : "text-lime hover:bg-overlay-foreground/20")
            }
          >
            Portofolio
          </Link>
          <Link
            to="/pabrik-gerobak"
            activeProps={{ className: "bg-accent text-accent-foreground" }}
            className={
              "rounded-full px-4 py-2 font-semibold tracking-[0.01em] transition-colors " +
              (solid
                ? "text-foreground hover:bg-secondary"
                : "text-lime hover:bg-overlay-foreground/20")
            }
          >
            Pabrik Gerobak
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-4">
          <Button
            asChild
            variant="industrial"
            size="sm"
            className="hidden h-10 px-5 text-xs md:inline-flex"
          >
            <a href="/#kontak">
              Konsultasi <ArrowUpRight />
            </a>
          </Button>
          <Button
            variant={solid ? "outline" : "industrialOutline"}
            size="icon"
            className="size-10 lg:hidden"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      {menuOpen && (
        <nav
          className="absolute inset-x-5 top-20 z-30 rounded-2xl border border-line-light bg-charcoal p-5 text-overlay-foreground lg:hidden"
          aria-label="Navigasi seluler"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-line-light py-3 font-display text-xl last:border-b-0"
            >
              {label}
            </a>
          ))}
          <Link
            to="/portfolio"
            onClick={() => setMenuOpen(false)}
            className="block py-3 font-display text-xl text-lime"
          >
            Portofolio
          </Link>
          <Link
            to="/pabrik-gerobak"
            activeProps={{ className: "bg-accent text-accent-foreground" }}
            onClick={() => setMenuOpen(false)}
            className="rounded-full px-4 py-3 font-semibold tracking-[0.01em] text-lime transition-colors hover:bg-overlay-foreground/15 hover:text-overlay-foreground"
          >
            Pabrik Gerobak
          </Link>
        </nav>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-overlay-foreground">
      <div className="mx-auto max-w-[1600px] px-5 pt-16 md:px-10 md:pt-24 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_.5fr_.7fr]">
          <div>
            <p className="font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold uppercase leading-[.95]">
              KARYA KREASI
              <br />
              BERSAMA<span className="text-lime">.</span>
            </p>
            <p className="mt-6 text-sm text-overlay-foreground/65">
              Custom Fabrication Workshop · Jepara, Jawa Tengah
            </p>
          </div>
          <div>
            <p className="mb-5 text-xs uppercase text-overlay-foreground/55">Jelajahi</p>
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="mb-3 block text-sm hover:text-lime">
                {label}
              </a>
            ))}
            <Link to="/portfolio" className="mb-3 block text-sm text-lime">
              Portofolio
            </Link>
            {kotaGerobak.map((kota) => (
              <a
                key={kota.slug}
                href={kota.route}
                className="mb-3 block text-sm hover:text-lime"
              >
                Gerobak Usaha {kota.nama}
              </a>
            ))}
          </div>
          <div>
            <p className="mb-5 text-xs uppercase text-overlay-foreground/55">Temukan kami</p>
            <p className="mb-5 text-sm leading-[1.7]">
              Kdamarjati, Kalinyamatan
              <br />
              Jepara, Jawa Tengah
            </p>
            <ul className="mb-5 flex flex-col gap-2 text-sm">
              <li>
                <a
                  href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 hover:text-lime"
                >
                  <Phone size={14} /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-lime"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kdamarjati+Kalinyamatan+Jepara"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm underline underline-offset-4"
            >
              Lihat di Google Maps <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-line-light py-6 text-[11px] uppercase text-overlay-foreground/55 md:flex-row">
          <span>© {new Date().getFullYear()} Karya Kreasi Bersama</span>
          <a href="#atas" className="inline-flex items-center gap-2 hover:text-overlay-foreground">
            Kembali ke atas <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
