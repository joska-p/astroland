const baseUrl = import.meta.env.BASE_URL

type Route = {
  text: string
  href: string
}

type Routes = Record<string, Route>

export const routes: Routes = {
  home: {
    text: "Accueil",
    href: baseUrl,
  },

  painting: {
    text: "Peinture",
    href: baseUrl + "painting/1/",
  },

  about: {
    text: "À propos",
    href: baseUrl + "about/",
  },
} as const
