// Example: A cheatsheet of many common Zod datatypes
import { z, defineCollection } from "astro:content"

const painting = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      slug: z.string(),
      filename: image(),
      title: z.string(),
      year: z.string(),
      height: z.string(),
      width: z.string(),
    }),
})

const resume = defineCollection({
  type: "content",
  schema: z.object({
    start: z.number(),
    end: z.number().optional(),
  }),
})

export const collections = {
  painting: painting,
  resume: resume,
}
