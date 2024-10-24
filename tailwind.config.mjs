/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        daniel: ["Daniel", "cursive"],
        danielbd: ["Danielbd", "cursive"],
      },
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(10rem, 1fr))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
