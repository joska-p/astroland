// Example: A cheatsheet of many common Zod datatypes
import { z, defineCollection } from "astro:content"

const painting = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      filename: image(),
      title: z.string(),
      year: z.number(),
      height: z.number(),
      width: z.number(),
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
