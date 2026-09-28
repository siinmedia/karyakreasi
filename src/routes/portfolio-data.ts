import type { Project } from "./portfolio-types";
import container from "@/assets/container-project.jpg";
import canopy from "@/assets/canopy-project.jpg";
import steel from "@/assets/steel-workshop.jpg";
import hero from "@/assets/workshop-hero.jpg";

export type { Project };

export const projects: Project[] = [
  { slug: "gerobak-kopi-kayu", name: "Gerobak Kopi Kayu + Rangka Besi", category: "Gerobak", year: "2024", materials: ["Hollow Galvanis", "Kayu Jati", "ACP Waterproof"], location: "Jepara Kota", detail: "Gerobak kopi beroda dengan meja lipat, kabinet penyimpanan, dan finishing cat duco dua warna.", image: container, size: "180 × 90 × 210 cm", duration: "3 minggu", finish: "Cat duco 2 warna + kayu jati natural", highlights: ["Meja sajian lipat", "Kabinet bawah terkunci", "Rak gelas & cup", "Roda heavy duty 6 inci"] },
  { slug: "gerobak-mie-ayam", name: "Gerobak Mie Ayam Modul", category: "Gerobak", year: "2024", materials: ["Hollow Galvanis", "Stainless", "Galvalum"], location: "Kalinyamatan", detail: "Gerobak angkut berpanel galvalum dengan kompor, wadah kuah, dan rak piring yang bisa dibongkar.", image: steel, size: "200 × 80 × 200 cm", duration: "2,5 minggu", finish: "Panel galvalum + stainless meja", highlights: ["Penyangga kompor tinggi", "Wadah kuah stainless", "Rak piring bongkar-pasang", "Pegangan dorong dilapisi karet"] },
  { slug: "gerobak-bakso", name: "Gerobak Bakso + Meja Servis", category: "Gerobak", year: "2023", materials: ["Steel", "Stainless", "Electrical Components"], location: "Mayong", detail: "Unit dorong beratap kanopi kecil, dilengkapi lampu LED dan tempat tabung gas di bagian bawah.", image: canopy, size: "190 × 95 × 215 cm", duration: "3 minggu", finish: "Cat besi anti karat", highlights: ["Kanopi kecil melengkung", "Lampu LED 12V", "Kompartemen tabung gas", "Meja servis samping"] },
  { slug: "gerobak-dimsum", name: "Gerobak Dimsum Kaca", category: "Gerobak", year: "2023", materials: ["Hollow Galvanis", "Kaca Tempered", "ACP Waterproof"], location: "Pecangaan", detail: "Gerobak display dengan etalase kaca, laci uap, dan branding yang dipasang di dua sisi.", image: hero, size: "170 × 85 × 205 cm", duration: "2 minggu", finish: "ACP putih + aksen kayu", highlights: ["Etalase kaca tempered", "Laci uap stainless", "Panel branding 2 sisi", "Lampu etalase hangat"] },
  { slug: "gerobak-sate", name: "Gerobak Sate Portable", category: "Gerobak", year: "2023", materials: ["Hollow Galvanis", "Besi Beton", "Kayu Jati"], location: "Bangsri", detail: "Gerobak lipat untuk pasar malam dengan panggangan terbuka dan penyangga yang bisa diturunkan.", image: steel, size: "160 × 75 × 195 cm", duration: "2 minggu", finish: "Kayu jati + rangka dicat", highlights: ["Sistem lipat ringkas", "Panggangan terbuka", "Penyangga turun", "Rak bumbu gantung"] },
  { slug: "gerobak-es-teh", name: "Gerobak Es Teh Keliling", category: "Gerobak", year: "2022", materials: ["Hollow Galvanis", "Galvalum", "Aluminium"], location: "Jepara Kota", detail: "Unit ringan dengan dua roda besar, wadah es berinsulasi, dan panel branding cetak.", image: container, size: "140 × 70 × 180 cm", duration: "2 minggu", finish: "Panel aluminium + stiker branding", highlights: ["Bobot ringan", "Wadah es berinsulasi", "Roda besar 8 inci", "Gelas gantung"] },
  { slug: "gerobak-nasi-goreng", name: "Gerobak Nasi Goreng Set", category: "Gerobak", year: "2022", materials: ["Steel", "Stainless", "Electrical Components"], location: "Mlonggo", detail: "Set gerobak dengan tungku angin, meja potong, dan rak bumbu yang disusun sesuai alur masak.", image: canopy, size: "175 × 90 × 200 cm", duration: "2,5 minggu", finish: "Cat besi + meja stainless", highlights: ["Tungku angin", "Meja potong lebar", "Rak bumbu bertingkat", "Stop kontak & lampu"] },
  { slug: "booth-kopi-susu", name: "Booth Kopi Susu Kontainer", category: "Booth", year: "2024", materials: ["ACP Waterproof", "Steel", "Electrical Components"], location: "Jepara", detail: "Booth kontainer berukuran compact dengan jendela servis geser dan area penyimpanan belakang.", image: hero, size: "220 × 150 × 250 cm", duration: "4 minggu", finish: "ACP + cat duco", highlights: ["Jendela servis geser", "Gudang belakang", "Instalasi listrik", "Meja bar kayu"] },
  { slug: "kanopi-gerobak-teras", name: "Kanopi Gerobak & Teras Usaha", category: "Kanopi", year: "2023", materials: ["Galvalum", "Hollow Galvanis", "ACP Waterproof"], location: "Jepara", detail: "Kanopi melengkung untuk area gerobak usaha, dirancang menahan hujan deras dan mudah dibersihkan.", image: canopy, size: "400 × 250 cm", duration: "1,5 minggu", finish: "Atap galvalum + talang", highlights: ["Bentuk melengkung", "Talang air", "Rangka hollow galvanis", "Titik lampu"] },
  { slug: "gerbang-bengkel", name: "Gerbang & Rangka Besi Bengkel", category: "Besi", year: "2022", materials: ["Steel", "Hollow Galvanis"], location: "Kalinyamatan", detail: "Gerbang geser dan rangka portal untuk bengkel usaha dengan perhitungan bukaan lebar.", image: steel, size: "Lebar bukaan 500 cm", duration: "3 minggu", finish: "Cat besi anti karat", highlights: ["Gerbang geser rel", "Rangka portal", "Roda rel heavy duty", "Panel isi hollow"] },
];

export const categories = ["Semua", "Gerobak", "Booth", "Kanopi", "Besi"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNeighbors(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
