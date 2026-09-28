import { createFileRoute } from "@tanstack/react-router";
import { KotaGerobakPage, headKota } from "@/routes/kota-gerobak-page";
import { getKota } from "@/routes/kota-data";

const kota = getKota("semarang")!;

export const Route = createFileRoute("/gerobak-usaha-di-semarang")({
  head: () => headKota(kota, "/gerobak-usaha-di-semarang"),
  component: () => <KotaGerobakPage kota={kota} />,
});
