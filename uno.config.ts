// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        clash: "Clash Grotesk",
        inter: "Inter",
      },
    }),
  ],
  theme: {
    colors: {
      secondary: {
        900: "#101018",
        800: "#202028",
        700: "#282830",
        600: "#303040",
        500: "#383850",
        400: "#505068",
        300: "#686880",
        200: "#A8A8BA",
        100: "#D7D7E3",
        50: "#F3F3F9",
      },
      primary: {},
    },
  },
});
