import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/seo";
import { projects } from "@/routes/portfolio-data";

/**
 * Sitemap XML dinamis.
 *
 * Menyertakan halaman utama, daftar portofolio, dan setiap halaman detail proyek
 * agar mesin pencari dapat menemukan seluruh halaman.
 */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const urls = [
          { loc: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly" },
          { loc: `${SITE_URL}/portfolio`, priority: "0.9", changefreq: "weekly" },
          { loc: `${SITE_URL}/pabrik-gerobak`, priority: "0.9", changefreq: "monthly" },
          ...projects.map((p) => ({
            loc: `${SITE_URL}/portfolio/${p.slug}`,
            priority: "0.7",
            changefreq: "monthly",
          })),
        ];

        const body = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls.map(
            (u) =>
              `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod>` +
              `<changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
          ),
          "</urlset>",
        ].join("\n");

        return new Response(body, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
