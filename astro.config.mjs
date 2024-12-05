// @ts-check
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://astroland-sigma.vercel.app",
  output: "static",
  integrations: [tailwind()],
  compressHTML: false,
  prefetch: {
    defaultStrategy: "load",
    prefetchAll: true,
  },
})
