import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const painting = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/painting" }),
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
  loader: glob({ pattern: "**/*.md", base: "./src/content/resume" }),
  schema: z.object({
    start: z.number(),
    end: z.number().optional(),
  }),
})

export const collections = { painting, resume }
