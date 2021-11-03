import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dataDirectory = path.join(process.cwd(), 'data')

export async function getData(type) {
  let file = null
  if (type.toLowerCase() === 'json') file = await extractJSON('data.json')
  else if (type.toLowerCase() === 'markdown') file = await extractMarkdown()
  return JSON.parse(file)
}

function extractJSON(fileName) {
  const filepath = path.join(dataDirectory, fileName)
  let file = fs.readFileSync(filepath, 'utf8')

  const parsedData = JSON.parse(file)
  const portfolio = {
    webdev: {
      work: parsedData.mywork.web,
      categories: Array.from(
        new Set(parsedData.mywork.web.map((item) => item.category)),
      ),
    },
    design: {
      work: parsedData.mywork.graphic,
      categories: Array.from(
        new Set(parsedData.mywork.graphic.map((item) => item.category)),
      ),
    },
  }

  return JSON.stringify(portfolio)
}

async function extractMarkdown() {
  let data = []
  const fileNames = readdirSync(`${dataDirectory}/experience`)
  fileNames.map((fileName) => {
    const fullPath = path.join(`${dataDirectory}/experience`, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    data = [...data, { ...matterResult.data, content: matterResult.content }]
    return data
  })

  // return JSON.stringify({ data: { experience: data } })

  return JSON.stringify({
    data: {
      experience: data.sort((a, b) => {
        if (a['year-started'] > b['year-started']) return 1
        else if (a['year-started'] < b['year-started']) return -1
        else return 0
      }),
    },
  })

  // return allFiles.sort(({ ['year-started']: a }, { ['year-started']: b }) => {
  //   if (a < b) return 1
  //   else if (a > b) return -1
  //   else return 0
  // })
}
