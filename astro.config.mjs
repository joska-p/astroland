// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import process from "node:process"

export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE,
  trailingSlash: "never",
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
