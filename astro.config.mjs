// @ts-check
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

import vercel from "@astrojs/vercel"

export default defineConfig({
  site: "https://astroland-sigma.vercel.app",
  output: "static",
  integrations: [tailwind()],
  compressHTML: false,

  prefetch: {
    defaultStrategy: "load",
    prefetchAll: true,
  },

  adapter: vercel({
    webAnalytics: { enabled: true },
    maxDuration: 8,
    imageService: true,
    imagesConfig: {
      sizes: [400, 800, 1200],
      domains: [],
    },
  }),
})
