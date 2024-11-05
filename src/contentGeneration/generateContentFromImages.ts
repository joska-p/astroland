import { readdir, writeFile } from "node:fs/promises"

type Painting = {
  id: string
  slug: string
  filename: string
  title: string
  year: number
  height: number
  width: number
}

const extractTitle = (filename: string) => {
  const regextitle = /[^-]*/ // Everything from the start to the first "-"
  const extractedTitle = filename.match(regextitle)
  const rawTitle = extractedTitle ? extractedTitle[0] : "Untitled"

  return (
    rawTitle[0].toUpperCase() +
    rawTitle.substring(1, filename.lastIndexOf(".")).replaceAll("_", " ")
  )
}

const extractYear = (filename: string) => {
  const regexYear = /-\d{4}-/gm // Four digits between "-"
  const extractedYear = filename.match(regexYear)
  return extractedYear ? parseInt(extractedYear[0].slice(1, 5), 10) : 0
}

const extractDimensions = (filename: string) => {
  const regexFormat = /-\d+x\d+/gm // two group of digits with "x" in between
  const extractedFormat = filename.match(regexFormat)
  if (!extractedFormat) return { height: 0, width: 0 }
  const format = extractedFormat[0].slice(1)
  const formatArr = format.split("x")
  const height = parseInt(formatArr[0], 10)
  const width = parseInt(formatArr[1], 10)
  return { height, width }
}

const slugify = (string: string) =>
  string
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")

const getImageData = (filename: string): Painting => {
  const title = extractTitle(filename)
  const year = extractYear(filename)
  const { height, width } = extractDimensions(filename)
  const slug = slugify(title)

  return {
    id: slug,
    slug,
    filename,
    title,
    year,
    height,
    width,
  }
}

const imagesPath = "src/assets/paintings/"
const contentPath = "src/content/paintings/"

const writeJson = (painting: Painting) => {
  const json = JSON.stringify(painting)
  return writeFile(`${contentPath}${painting.slug}.json`, json)
}

const generateContentFromImages = async () => {
  const filenames = await readdir(imagesPath)
  const paintings = filenames.map((filename) => getImageData(filename))
  console.log("generating content from images", paintings.length)
  for (const painting of paintings) {
    await writeJson(painting)
    console.log(`wrote ${painting.slug}.json`)
  }
  console.log("done")
}

generateContentFromImages()
