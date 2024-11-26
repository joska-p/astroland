/** @type {import("prettier").Config} */
export default {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  trailingComma: "es5",
  arrowParens: "avoid",
  bracketSpacing: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
}
