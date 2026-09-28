import { createFileRoute } from "@tanstack/react-router";
import { KotaGerobakPage, headKota } from "@/routes/kota-gerobak-page";
import { getKota } from "@/routes/kota-data";

const kota = getKota("kudus")!;

export const Route = createFileRoute("/gerobak-usaha-di-kudus")({
  head: () => headKota(kota, "/gerobak-usaha-di-kudus"),
  component: () => <KotaGerobakPage kota={kota} />,
});
