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
  visible: z.boolean(),
  featured: z.boolean(),
  imageWidth: z.number(),
  imageHeight: z.number(),
  thumbnailWidth: z.number(),
  thumbnailHeight: z.number(),
  imageBlurhash: z.string(),
  squareBlurhash: z.string(),
  order: z.number(),
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
