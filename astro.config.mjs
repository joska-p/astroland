// @ts-check
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://joska-p.github.io",
  base: "/astroland",
  output: "static",
  integrations: [tailwind()],
  compressHTML: false,

  prefetch: {
    defaultStrategy: "load",
    prefetchAll: true,
  },
})
