// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
  site: "https://joska-p.github.io",
  base: "/astroland",
  trailingSlash: "always",
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
