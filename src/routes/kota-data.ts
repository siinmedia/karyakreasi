/**
 * Data halaman "gerobak usaha di <kota>".
 *
 * Tiap kota sengaja memiliki konten yang berbeda: karakter lokasi, kendala
 * lapangan, dan pertimbangan teknisnya sendiri. Ini penting supaya halaman
 * tidak dianggap konten duplikat oleh mesin pencari — hanya nama kotanya yang
 * berbeda, isinya harus benar-benar lain.
 */

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
  },
];

export function getKota(slug: string) {
  return kotaGerobak.find((kota) => kota.slug === slug);
}

/** Kota lain untuk bagian navigasi antar halaman. */
export function getKotaLain(slug: string) {
  return kotaGerobak.filter((kota) => kota.slug !== slug);
}
