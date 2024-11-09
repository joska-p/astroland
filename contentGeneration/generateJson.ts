import { writeFile } from "node:fs/promises"
import path from "node:path"
import { getPaintings } from "./getPaintings.ts"

const INPUT_PATH = "src/assets/paintings/"
const OUTPUT_PATH = "contentGeneration/content/paintings/json/"

const paintings = await getPaintings(INPUT_PATH)
for (const painting of paintings) {
  const outputFilePath = path.join(OUTPUT_PATH, `${painting.slug}.json`)
  await writeFile(outputFilePath, JSON.stringify(painting))
  console.log(`Successfully wrote ${painting.slug}.json`)
}

console.log(`Successfully wrote ${paintings.length} json files in ${OUTPUT_PATH}`)
