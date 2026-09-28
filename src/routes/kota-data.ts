/**
 * Data halaman "gerobak usaha di <kota>".
 *
 * Tiap kota sengaja memiliki konten yang berbeda: karakter lokasi, kendala
 * lapangan, dan pertimbangan teknisnya sendiri. Ini penting supaya halaman
 * tidak dianggap konten duplikat oleh mesin pencari — hanya nama kotanya yang
 * berbeda, isinya harus benar-benar lain.
 */

import container from "@/assets/container-project.jpg";
import canopy from "@/assets/canopy-project.jpg";
import steel from "@/assets/steel-workshop.jpg";
import hero from "@/assets/workshop-hero.jpg";

export type KotaGerobak = {
  /** Slug kota untuk URL, mis. "jepara" pada /gerobak-usaha-di-jepara. */
  slug: string;
  /** Nama kota seperti yang ditulis manusia. */
  nama: string;
  /** Rute TanStack untuk kota ini (dibuat statis per kota). */
  route: string;
  /** Judul halaman yang sudah dioptimasi panjangnya. */
  judul: string;
  /** Meta description. */
  deskripsi: string;
  /** Paragraf pembuka: kenapa gerobak usaha cocok di kota ini. */
  pembuka: string;
  /** Jarak dan cara tempuh dari workshop di Kalinyamatan, Jepara. */
  jarak: string;
  /** Kendala khas lapangan di kota ini. */
  kendala: { judul: string; isi: string }[];
  /** Pertimbangan teknis yang kami sesuaikan untuk kota ini. */
  teknis: string;
  /** Jenis usaha yang paling sering memesan dari kota ini. */
  jenisUsaha: string[];
  /** Konteks pasar kuliner setempat. */
  pasar: string;
  /** Rincian ukuran dan spesifikasi teknis yang ditampilkan per kota. */
  spesifikasi: { label: string; nilai: string; catatan: string }[];
  /** Slug proyek portofolio yang relevan untuk kota ini. */
  contohProyek: string[];
  /** Foto latar hero, diimpor dari src/assets agar resolusinya cukup. */
  fotoHero: string;
  /** Gambar og:image, diambil dari /public. */
  ogImage: string;
};

export const kotaGerobak: KotaGerobak[] = [
  {
    slug: "jepara",
    nama: "Jepara",
    route: "/gerobak-usaha-di-jepara",
    judul: "Gerobak Usaha di Jepara — Dibuat Langsung di Kalinyamatan",
    deskripsi:
      "Buat gerobak usaha di Jepara langsung dari workshop Kalinyamatan. Bisa dilihat prosesnya, ukuran menyesuaikan lokasi. Konsultasi gratis via WhatsApp.",
    pembuka:
      "Karena workshop kami memang ada di Jepara — tepatnya di Kdamarjati, Kalinyamatan — gerobak usaha untuk wilayah ini bisa Anda lihat langsung prosesnya sebelum jadi. Anda bisa datang, memeriksa kekuatan rangka, mencoba buka-tutup jendela servis, dan menilai finishing catnya sendiri. Ini yang tidak Anda dapatkan kalau memesan dari luar kota.",
    jarak:
      "Workshop berada di dalam Kabupaten Jepara. Anda bisa datang langsung dengan membuat janji terlebih dahulu.",
    kendala: [
      {
        judul: "Lokasi usaha yang berpindah mengikuti acara",
        isi: "Jepara punya banyak bazar, car free day, dan pasar malam musiman. Gerobak yang terlalu berat akan menyulitkan saat harus dipindah tiap pekan, jadi kami utamakan rangka ringan dengan roda yang mudah dilepas.",
      },
      {
        judul: "Udara pesisir yang cepat mengubah logam",
        isi: "Udara Jepara mengandung garam laut. Rangka hollow galvanis kami pilih khusus karena lapisan galvanisnya menahan karat jauh lebih baik dibanding besi polos, lalu tetap kami cat duco sebagai lapisan kedua.",
      },
      {
        judul: "Halaman ruko yang sempit",
        isi: "Banyak ruko di Jepara kota punya teras sempit. Kami biasa membuat meja servis lipat agar gerobak tetap bisa diparkir tanpa menutup jalan pejalan kaki.",
      },
    ],
    teknis:
      "Untuk wilayah Jepara kami sering memakai rangka hollow galvanis berukuran lebih kecil agar gerobak cukup ringan didorong satu orang, dengan tetap memperkuat titik dudukan roda. Karena jaraknya dekat, Anda juga bisa meminta pengecekan langsung di lokasi usaha sebelum gerobak difinalkan.",
    jenisUsaha: [
      "Kopi susu dan minuman kekinian",
      "Mie ayam dan bakso",
      "Dimsum dan makanan ringan",
      "Ayam geprek dan nasi goreng",
    ],
    pasar:
      "Jepara punya dua kantong pembeli yang berbeda: area kota yang ramai pada pagi dan sore, serta kawasan wisata yang padat saat akhir pekan dan musim libur. Gerobak yang bisa berpindah memungkinkan Anda mengikuti kedua kantong itu tanpa membuka cabang kedua.",
    ogImage: "/og/gerobak.jpg",
    fotoHero: hero,
    spesifikasi: [
      {
        label: "Panjang gerobak",
        nilai: "140 – 200 cm",
        catatan:
          "Ukuran terbanyak untuk Jepara. Pilih 140–160 cm bila sering berpindah lokasi bazar, atau 180–200 cm bila lokasi tetap dan butuh meja kerja luas.",
      },
      {
        label: "Lebar & tinggi",
        nilai: "70 – 95 cm · 180 – 215 cm",
        catatan:
          "Lebar dijaga di bawah 95 cm agar tetap bisa lewat teras ruko sempit. Tinggi 200–215 cm memberi ruang berdiri nyaman bagi penjual.",
      },
      {
        label: "Rangka",
        nilai: "Hollow galvanis 4 × 4 cm",
        catatan:
          "Dipilih karena udara pesisir Jepara cepat mengaratkan besi polos. Ketebalan 1,2–1,6 mm, seluruh sambungan las penuh.",
      },
      {
        label: "Roda",
        nilai: '6 inci heavy duty / 8 inci',
        catatan:
          "Roda 6 inci untuk jalanan kampung, 8 inci bila sering melewati jalan berbatu atau menanjak.",
      },
      {
        label: "Waktu pengerjaan",
        nilai: "2 – 4 minggu",
        catatan:
          "Dihitung sejak desain dan ukuran disetujui. Pesanan menjelang musim libur bisa lebih lama.",
      },
    ],
    contohProyek: ["gerobak-kopi-kayu", "gerobak-es-teh", "gerobak-dimsum"],
  },
  {
    slug: "kudus",
    nama: "Kudus",
    route: "/gerobak-usaha-di-kudus",
    judul: "Gerobak Usaha di Kudus — Kirim Langsung dari Jepara",
    deskripsi:
      "Pembuatan gerobak usaha untuk jualan di Kudus. Knockdown, ongkos kirim hemat, ukuran custom. Melayani Kudus kota, Jati, Bae, dan sekitarnya. Konsultasi via WhatsApp.",
    pembuka:
      "Kudus adalah kota dengan budaya kuliner yang kuat — mulai dari sate kerbau, lentog, sampai jenang. Artinya pembeli di sana sudah terbiasa menilai makanan dari tampilan dan kebersihannya, sehingga gerobak usaha Anda harus terlihat rapi dan meyakinkan sejak pandangan pertama. Kami membuat gerobak untuk usaha di Kudus dengan pendekatan itu: tampilan bersih, panel mudah dilap, dan area kerja yang tidak terlihat berantakan.",
    jarak:
      "Sekitar 45 menit berkendara dari workshop via Jalan Lingkar Kudus–Jepara. Pengiriman rutin kami lakukan ke Kudus kota, Jati, Bae, dan Kaliwungu.",
    kendala: [
      {
        judul: "Pembeli Kudus peka pada kebersihan",
        isi: "Karena itu kami utamakan meja kerja stainless food grade dan menghindari sudut rangka yang sulit dibersihkan. Panel penutup dibuat rata supaya tidak ada celah menumpuk kotoran atau minyak.",
      },
      {
        judul: "Jalanan kota yang padat pada jam sibuk",
        isi: "Sebagian lokasi usaha di Kudus berada di tepi jalan ramai. Kami membuat jendela servis model geser, bukan buka-tutup, agar tidak menghalangi pejalan kaki dan tidak mudah tersenggol kendaraan.",
      },
      {
        judul: "Ongkos kirim yang harus dihitung",
        isi: "Gerobak kami dirancang knockdown — lemari, meja, dan kanopi bisa dilepas. Dengan begitu pengiriman ke Kudus bisa memakai satu pikap tanpa perlu armada besar, dan biayanya jauh lebih hemat.",
      },
    ],
    teknis:
      "Untuk usaha di Kudus kami sering menambahkan bidang branding yang lebih besar di sisi depan, karena gerobak di sana banyak berhadapan langsung dengan lalu lintas pelan. Instalasi lampu juga kami siapkan untuk jualan sore hingga malam, yang di Kudus berlangsung cukup panjang.",
    jenisUsaha: [
      "Sate dan makanan bakar",
      "Lentog dan makanan tradisional",
      "Kopi susu dan minuman",
      "Ayam dan olahan daging",
    ],
    pasar:
      "Kudus punya perputaran pembeli yang tinggi pada pagi — untuk sarapan — dan malam. Gerobak yang punya penerangan memadai dan area kerja efisien memungkinkan Anda melayani dua jam sibuk itu tanpa mengubah tata letak.",
    ogImage: "/og/besi.jpg",
    fotoHero: steel,
    spesifikasi: [
      {
        label: "Panjang gerobak",
        nilai: "160 – 220 cm",
        catatan:
          "Lokasi usaha di Kudus umumnya menghadap jalan ramai, jadi meja servis dibuat lebih panjang agar bisa melayani beberapa pembeli sekaligus.",
      },
      {
        label: "Lebar & tinggi",
        nilai: "80 – 100 cm · 195 – 220 cm",
        catatan:
          "Bidang branding depan diperbesar mengikuti tinggi pandang pengendara yang melintas pelan.",
      },
      {
        label: "Permukaan kerja",
        nilai: "Stainless food grade 304",
        catatan:
          "Pembeli Kudus peka pada kebersihan. Panel dibuat rata tanpa sambungan terbuka agar mudah dilap dan tidak menahan minyak.",
      },
      {
        label: "Jendela servis",
        nilai: "Model geser 70 – 90 cm",
        catatan:
          "Geser, bukan buka-tutup, supaya tidak menghalangi pejalan kaki di trotoar yang sempit.",
      },
      {
        label: "Waktu pengerjaan",
        nilai: "2 – 4 minggu",
        catatan:
          "Gerobak knockdown dikirim utuh dalam satu pikap, lalu dirakit kembali di lokasi Anda.",
      },
    ],
    contohProyek: ["gerobak-sate", "gerobak-nasi-goreng", "gerobak-bakso"],
  },
  {
    slug: "semarang",
    nama: "Semarang",
    route: "/gerobak-usaha-di-semarang",
    judul: "Gerobak Usaha di Semarang — Ukuran Menyesuaikan Lokasi",
    deskripsi:
      "Gerobak usaha untuk jualan di Semarang: Tembalang, Pedurungan, Simpang Lima. Knockdown, kuat untuk pemakaian harian. Konsultasi kebutuhan lewat WhatsApp.",
    pembuka:
      "Semarang punya karakter pasar yang berbeda dari kota kecil: persaingan kuliner sangat rapat, dari kawasan kampus Tembalang sampai pusat kota, dan pembeli di sana cepat berpindah kalau satu tempat dianggap biasa saja. Karena itu gerobak usaha di Semarang harus punya daya tarik visual yang jelas dan area kerja yang mampu melayani antrean panjang tanpa membuat penjual kelabakan.",
    jarak:
      "Sekitar 2 jam dari workshop via Pantura. Pengiriman ke Semarang kami layani untuk area Tembalang, Pedurungan, Banyumanik, dan pusat kota.",
    kendala: [
      {
        judul: "Volume penjualan yang harus ditopang",
        isi: "Antrean di kawasan kampus bisa panjang dalam waktu singkat. Kami memperlebar meja servis dan menyusun rak bumbu bertingkat supaya semua bahan terjangkau tanpa penjual berpindah posisi.",
      },
      {
        judul: "Lokasi tanpa atap permanen",
        isi: "Banyak titik usaha di Semarang terbuka terhadap hujan. Kami siapkan kanopi melekat dengan talang sederhana agar air tidak menggenang di atas gerobak atau menetes ke area kerja.",
      },
      {
        judul: "Persyaratan lokasi yang beragam",
        isi: "Dari teras ruko sampai area parkir, ukuran yang tersedia berbeda-beda. Kami selalu meminta Anda mengukur lebar lokasi lebih dulu, bukan memaksa gerobak ukuran produk standar.",
      },
    ],
    teknis:
      "Untuk Semarang kami menekankan kekuatan sambungan, karena pemakaian harian dengan volume tinggi membuat sambungan yang kurang kuat akan cepat longgar. Seluruh sambungan kami las penuh, bukan las titik, lalu dicat termasuk bagian dalam rangka. Instalasi listrik juga kami siapkan untuk lampu, mesin kasir, dan alat minuman.",
    jenisUsaha: [
      "Kopi susu dan booth minuman",
      "Ayam geprek dan nasi ayam",
      "Dimsum dan jajanan malam",
      "Menu kekinian untuk area kampus",
    ],
    pasar:
      "Semarang punya dua pola yang harus diantisipasi: pembeli cepat di sekitar kampus dengan waktu makan terbatas, dan pembeli keluarga yang lebih memilih tampilan bersih. Tata letak gerobak perlu melayani keduanya, dan itu bisa dibahas saat konsultasi.",
    ogImage: "/og/kanopi.jpg",
    fotoHero: canopy,
    spesifikasi: [
      {
        label: "Panjang gerobak",
        nilai: "180 – 240 cm",
        catatan:
          "Volume antrean di area kampus Tembalang menuntut meja servis lebar. Ukuran 180 cm ke atas memberi ruang rak bumbu bertingkat.",
      },
      {
        label: "Lebar & tinggi",
        nilai: "90 – 110 cm · 200 – 230 cm",
        catatan:
          "Bila lokasi di teras ruko, ukur lebar tersedia lebih dulu. Kami sesuaikan agar tidak menutup akses.",
      },
      {
        label: "Sambungan",
        nilai: "Las penuh, bukan las titik",
        catatan:
          "Pemakaian harian volume tinggi membuat sambungan las titik cepat longgar. Seluruh sambungan dilas penuh lalu dicat termasuk bagian dalam.",
      },
      {
        label: "Kanopi & listrik",
        nilai: "Kanopi + talang · instalasi 220 V",
        catatan:
          "Banyak titik usaha di Semarang terbuka terhadap hujan. Instalasi listrik disiapkan untuk lampu, mesin kasir, dan alat minuman.",
      },
      {
        label: "Waktu pengerjaan",
        nilai: "3 – 5 minggu",
        catatan:
          "Lebih panjang dari kota lain karena ukuran besar dan instalasi listrik. Pengiriman via Pantura sekitar 2 jam.",
      },
    ],
    contohProyek: ["booth-kopi-susu", "kanopi-gerobak-teras", "gerobak-nasi-goreng"],
  },
];

export function getKota(slug: string) {
  return kotaGerobak.find((kota) => kota.slug === slug);
}

/** Kota lain untuk bagian navigasi antar halaman. */
export function getKotaLain(slug: string) {
  return kotaGerobak.filter((kota) => kota.slug !== slug);
}
