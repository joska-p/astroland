import { writeFile } from "node:fs/promises"
import path from "node:path"
import { getPaintings } from "./getPaintings.ts"

const INPUT_PATH = "src/assets/paintings/"
const OUTPUT_PATH = "contentGeneration/content/paintings/md/"

const paintings = await getPaintings(INPUT_PATH)
for (const painting of paintings) {
  const outputFilePath = path.join(OUTPUT_PATH, `${painting.slug}.md`)
  const markdownContent = `![${painting.title}](${path.join(INPUT_PATH, painting.filename)})`
  const frontMatter = Object.entries(painting)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")
  await writeFile(outputFilePath, `---\n${frontMatter}\n---\n\n${markdownContent}`)
  console.log(`Successfully wrote ${painting.slug}.md`)
}

console.log(`Successfully wrote ${paintings.length} md files in ${OUTPUT_PATH}`)
