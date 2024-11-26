import fluid, { extract, fontSize, screens } from "fluid-tailwind";
import type { Config } from "tailwindcss";

export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontFamily: {
        daniel: ["Daniel", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), fluid],
} satisfies Config;
