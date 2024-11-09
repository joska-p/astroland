import { writeFile } from "node:fs/promises"
import { getPaintings } from "./getPaintings.ts"

const CONTENT_PATH = "contentGeneration/content/paintings/json/"

const paintings = await getPaintings("src/assets/paintings/")
for (const painting of paintings) {
  await writeFile(`${CONTENT_PATH}${painting.slug}.json`, JSON.stringify(painting))
  console.log(`Successfully wrote ${painting.slug}.json`)
}

console.log(`Successfully wrote ${paintings.length} json files`)
