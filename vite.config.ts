import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig, loadEnv, mergeConfig, type UserConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";
import { devtools as tanstackDevtools } from "@tanstack/devtools-vite";

/**
 * Standalone Vite config for this project.
 *
 * The previous config came from a managed preset config package, which bundled
 * the TanStack Start, React, Tailwind, tsconfig-paths, nitro and TanStack devtools
 * plugins plus editor-specific preview proxying. This file reproduces the parts
 * that matter for the app and removes all editor-specific behaviour.
 *
 * Note: `vite-tsconfig-paths` is kept because the `@/*` alias resolution relies on
 * the tsconfig path mapping. Vite 8 also supports `resolve.tsconfigPaths: true`.
 */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  const base: UserConfig = {
    envPrefix: "VITE_",
    define: Object.fromEntries(
      Object.entries(env).map(([key, value]) => [`import.meta.env.${key}`, JSON.stringify(value)]),
    ),
    resolve: {
      // Dedupe React and TanStack packages so a single instance is bundled.
      dedupe: [
        "react",
        "react-dom",
        "@tanstack/react-router",
        "@tanstack/react-start",
        "@tanstack/react-query",
      ],
    },
    server: {
      // Allow Cloudflare quick tunnels and any host so the site can be tested from a phone.
      host: true,
      allowedHosts: true,
      // Fixed port so the Cloudflare tunnel and Control UI portal stay valid.
      port: 8080,
      strictPort: true,
    },
  };

  const app: UserConfig = mergeConfig(base, {
    plugins: [
      tanstackDevtools(),
      tanstackStart({
        // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
        server: { entry: "server" },
      }),
      viteReact(),
      tailwindcss(),
      tsConfigPaths(),
      nitro({ preset: "cloudflare-module" }),
    ],
  });

  return app;
});
