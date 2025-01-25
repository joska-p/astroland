import fluid, { extract, fontSize, screens } from "fluid-tailwind"
import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    extract,
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1 rem",
        lg: "1.5 rem",
        xl: "2 rem",
        "2xl": "2.5 rem",
      },
    },
    screens,
    fontSize,
    extend: {
      fontFamily: {
        daniel: ["Daniel", "cursive"],
      },
    },
  },
  plugins: [typography, fluid],
} satisfies Config
