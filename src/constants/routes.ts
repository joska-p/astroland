type Route = {
  text: string
  href: string
}

type Routes = Record<string, Route>

export const routes: Routes = {
  home: {
    text: "Accueil",
    href: "/",
  },

  painting: {
    text: "Peinture",
    href: "/painting/1/",
  },

  about: {
    text: "À propos",
    href: "/about/",
  },
} as const
