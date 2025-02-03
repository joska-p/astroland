// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
const BASE_URL = import.meta.env.BASE_URL

export default defineConfig({
  site: "https://joska-p.github.io",
  base: BASE_URL,
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
