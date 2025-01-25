import typography from "@tailwindcss/typography"

export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontFamily: {
        daniel: ["Daniel", "cursive"],
      },
    },
  },
  plugins: [typography],
}
