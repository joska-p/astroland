import { readdir } from "node:fs/promises"

// The image filenames are in the following format:
// [title_of_the_painting]-[year]-[height]x[width].[extension]
// e.g. "realite_x_y-2011-100x81.jpg"
// the images are in the /src/assets/paintings/ folder
// the content is in the /src/content/paintings/ folder in a json file per painting
// the json file is in the following format:
// {
//   "id": "realite-x-y",
//   "slug": "realite-x-y",
//   "filename": "realite_x_y-2011-100x81.jpg",
//   "title": "Realite x y",
//   "year": 2011,
//   "height": 100,
//   "width": 81
// }

// const IMAGES_PATH = "contentGeneration/assets/paintings/"
const TITLE_REGEX = /^[^-]*/ // Everything from the start to the first "-"
const YEAR_REGEX = /-\d{4}-/ // Four digits between "-"
const DIMENSIONS_REGEX = /-\d+x\d+/ // Two groups of digits with "x" in between

const extractTitle = (filename: string): string => {
  const match = filename.match(TITLE_REGEX)
  return match ? match[0] : filename
}

const extractYear = (filename: string) => {
  const match = filename.match(YEAR_REGEX)
  return match ? match[0].slice(1, 5) : "0"
}

const extractDimensions = (filename: string) => {
  const match = filename.match(DIMENSIONS_REGEX)
  if (!match) return { height: "0", width: "0" }
  const [height, width] = match[0].slice(1).split("x")
  return { height, width }
}

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export const getPaintings = async (path: string) => {
  const filenames = await readdir(path)
  if (!filenames) throw new Error(`No files found in ${path}`)
  return filenames.map((filename) => {
    const id = filename.split(".")[0]
    const title = extractTitle(filename).replaceAll("_", " ")
    const year = extractYear(filename)
    const { height, width } = extractDimensions(filename)
    const slug = slugify(title)
    return {
      id,
      slug,
      filename,
      title,
      year,
      height,
      width,
    }
  })
}
