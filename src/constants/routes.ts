const baseUrl = import.meta.env.BASE_URL

export const routes = [
  {
    text: "Accueil",
    href: baseUrl,
  },
  {
    text: "Peinture",
    href: baseUrl + "/painting/1",
  },
  {
    text: "À propos",
    href: baseUrl + "/about",
  },
]
