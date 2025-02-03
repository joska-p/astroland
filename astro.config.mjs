// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import { loadEnv } from "vite"
import process from "process"

const { BASE_URL, SITE } = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "")

export default defineConfig({
  site: SITE,
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
