# Workshop Connect

Website profil workshop fabrikasi custom **Karya Kreasi Bersama** (Jepara, Jawa Tengah),
dibangun dengan TanStack Start + React + Vite + Tailwind CSS.

## Struktur halaman

| URL | Isi |
| --- | --- |
| `/` | Halaman utama editorial (satu halaman, navigasi anchor antar-seksi) |
| `/portfolio` | Daftar portofolio: gerobak usaha, booth, kanopi, dan fabrikasi besi |
| `/portfolio/$slug` | Halaman detail per proyek (spesifikasi, material, highlight) |

## Development

Butuh Node.js dan npm — [install dengan nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

Dev server berjalan di `http://localhost:8080`.

### Skrip

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Jalankan dev server (Vite) |
| `npm run build` | Build produksi |
| `npm run preview` | Preview hasil build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

### Aset & ikon

Ikon situs (`public/favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`)
dibuat ulang dengan:

```sh
python3 scripts/make-favicon.py
```

Skrip ini menghasilkan mark "K/" berlatar charcoal dengan aksen lime, sesuai palet warna
di `src/styles.css`.

## Catatan konten

Gambar workshop dan proyek bersifat **ilustrasi konsep**, bukan dokumentasi proyek klien,
karena tidak ada foto proyek asli yang disertakan. Data proyek pada halaman portofolio
adalah contoh dan dapat disesuaikan di `src/routes/portfolio-data.ts`.
