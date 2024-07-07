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
  rules: [
    [
      "dotted-bg",
      {
        "background-image":
          "radial-gradient(rgba(255, 255, 255, 0.10) 2px, transparent 0);",
        "background-size": "40px 40px;",
      },
    ],
  ],
  theme: {
    height: {
      navbar: "104px",
      "body-with-navbar": "calc(100vh - 104px)",
    },
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
