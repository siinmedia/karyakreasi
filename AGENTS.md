# Panduan Proyek (AGENTS.md)

## Prinsip tampilan

- Halaman utama `/` dipertahankan sebagai **satu halaman editorial** dengan navigasi
  anchor antar-seksi, karena referensi visualnya adalah komposisi satu halaman menerus.
- Halaman `/portfolio` dan `/portfolio/$slug` harus tetap **selaras** dengan halaman utama:
  gunakan komponen bersama di `src/routes/site-chrome.tsx` (`SiteHeader`, `SiteFooter`,
  `Eyebrow`) dan palet warna dari `src/styles.css` (`charcoal`, `accent`/`lime`,
  `secondary`, font display Archivo).
- Header dan footer tidak boleh diduplikasi per halaman. Ubah di `site-chrome.tsx`
  agar semua halaman ikut berubah.

## Struktur file penting

| File | Fungsi |
| --- | --- |
| `src/routes/index.tsx` | Halaman utama |
| `src/routes/portfolio.tsx` | Halaman daftar portofolio |
| `src/routes/portfolio.$slug.tsx` | Halaman detail proyek |
| `src/routes/portfolio-data.ts` | Data proyek (tambah/ubah gerobak di sini) |
| `src/routes/portfolio-types.ts` | Tipe `Project` |
| `src/routes/site-chrome.tsx` | Header, footer, dan `Eyebrow` bersama |
| `src/routeTree.gen.ts` | Route tree TanStack — jangan diedit manual |
| `src/styles.css` | Token warna, font, dan utility kustom |
| `scripts/make-favicon.py` | Generator favicon/ikon situs |

## Catatan konten

- Gambar workshop dan proyek adalah **ilustrasi konsep**, bukan dokumentasi proyek klien.
- Saat menambah proyek baru, tambahkan entri di `portfolio-data.ts`; halaman daftar,
  detail, dan navigasi sebelumnya/selanjutnya akan otomatis mengikuti.

## Routing

Proyek memakai **file-based routing** TanStack Start: setiap `.tsx` di `src/routes/`
menjadi satu rute. File komponen bersama sebaiknya diberi awalan `-` atau diletakkan
di luar `src/routes/` agar tidak diperingatkan sebagai rute tanpa export `Route`.
