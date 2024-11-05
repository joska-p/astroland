// Example: A cheatsheet of many common Zod datatypes
import { z, defineCollection } from "astro:content"

const painting = z.object({
  id: z.string(),
  filename: z.string(),
  title: z.string(),
  year: z.number(),
  height: z.number(),
  width: z.number(),
  slug: z.string(),
})

const paintings = defineCollection({
  type: "data",
  schema: painting,
})

const resume = defineCollection({
  type: "content",
  schema: z.object({
    start: z.number(),
    end: z.number().optional(),
  }),
})

export const collections = {
  paintings: paintings,
  resume: resume,
}
