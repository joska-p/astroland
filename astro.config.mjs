// @ts-check
import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: "https://joska-p.github.io",
  base: "/astroland",
  trailingSlash: "always",
  integrations: [tailwind()],
  prefetch: {
    defaultStrategy: "load",
    prefetchAll: true,
  },
})
