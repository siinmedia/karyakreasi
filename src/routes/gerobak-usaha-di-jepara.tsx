import { createFileRoute } from "@tanstack/react-router";
import { KotaGerobakPage, headKota } from "@/routes/kota-gerobak-page";
import { getKota } from "@/routes/kota-data";

const kota = getKota("jepara")!;

export const Route = createFileRoute("/gerobak-usaha-di-jepara")({
  head: () => headKota(kota, "/gerobak-usaha-di-jepara"),
  component: () => <KotaGerobakPage kota={kota} />,
});
