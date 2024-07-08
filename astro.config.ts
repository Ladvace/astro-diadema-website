import { defineConfig } from "astro/config";
import unocss from "@unocss/astro";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [unocss({
    injectReset: true
  }), sitemap(), robotsTxt()],
  output: "server",
  adapter: vercel()
});