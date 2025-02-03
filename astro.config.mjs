// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: import.meta.env.SITE,
  base: import.meta.env.BASE,
  output: "static",
  compressHTML: false,
  prefetch: {
    defaultStrategy: "load",
    prefetchAll: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
