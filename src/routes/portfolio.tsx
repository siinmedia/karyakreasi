import { createFileRoute, Outlet } from "@tanstack/react-router";

/**
 * Layout untuk seluruh rute /portfolio.
 *
 * Tidak mendeklarasikan `links` (canonical) di sini karena akan diwariskan ke
 * rute anak /portfolio/$slug dan menghasilkan canonical ganda. Setiap halaman
 * menetapkan canonical-nya sendiri.
 */
export const Route = createFileRoute("/portfolio")({
  component: () => <Outlet />,
});
