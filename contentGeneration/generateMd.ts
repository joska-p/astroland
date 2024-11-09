import { writeFile } from "node:fs/promises"
import { getPaintings } from "./getPaintings.ts"
import matter from "gray-matter"

const CONTENT_PATH = "contentGeneration/content/paintings/md/"

const paintings = await getPaintings("src/assets/paintings/")
for (const painting of paintings) {
  const filename = `${painting.filename.split(".")[0]}.md`
  const content = `![${painting.title}.](../../assets/paintings/${painting.filename})`
  await writeFile(`${CONTENT_PATH}${filename}`, matter.stringify(content, painting))
  console.log(`Successfully wrote ${filename}`)
}

console.log(`Successfully wrote ${paintings.length} md files`)
