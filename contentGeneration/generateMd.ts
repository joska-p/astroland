import { writeFile } from "node:fs/promises";
import path from "node:path";
import { getPaintings } from "./getPaintings.ts";

const INPUT_PATH = "contentGeneration/input";
const OUTPUT_PATH = "contentGeneration/output";
const paintings = await getPaintings(INPUT_PATH);

for (const painting of paintings) {
  const outputFilePath = path.join(OUTPUT_PATH, `${painting.id}.md`);
  const markdownContent = `${painting.title}`;
  const frontMatter = Object.entries(painting)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  await writeFile(
    outputFilePath,
    `---\n${frontMatter}\n---\n\n${markdownContent}`,
  );
  console.log(`Successfully wrote ${painting.id}.md`);
}

console.log(
  `Successfully wrote ${paintings.length} md files in ${OUTPUT_PATH}`,
);
