/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        daniel: ["Daniel", "cursive"],
        sans: ["open-sans", "sans-serif"],
        mono: ["jetbrains", "monospace"],
        raleway: ["raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
