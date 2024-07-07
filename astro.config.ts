import { defineConfig } from "astro/config";
import unocss from "@unocss/astro";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [unocss({ injectReset: true }), sitemap()],
  output: "server",
  adapter: vercel(),
});
