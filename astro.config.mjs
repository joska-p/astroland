// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import { loadEnv } from "vite"
import process from "process"
import sitemap from "@astrojs/sitemap"
const { SITE_URL, BASE_URL } = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "")

export default defineConfig({
  site: SITE_URL || "https://joska-p.github.io",
  base: BASE_URL || "astroland/",
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

  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
      xslURL: "/sitemap.xsl",
    }),
  ],
})
