import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dataDirectory = path.join(process.cwd(), 'data')
const DIR = path.join(process.cwd(), 'data')

/*
 ***
 */
// export async function fetchMDFile(directory) {
//   directory = `${dataDirectory}/${directory}`
//   console.log(directory)
//   const dirFiles = readdirSync(directory)
//   dirFiles.map((filename) => {
//     const filePath = path.join(directory, filename)
//     const content = fs.readFileSync(filePath, 'utf8')

//     const result = matter(content)
//     // console.log(result)
//     return [{ result }]
//   })
// }
/*
 ***
 */

export async function fetch_parsed_data(type, file_name = null) {
  if (typeof type !== 'string') return null
  return JSON.parse(await getData(type, file_name))
}

//  get data returns promise | null
async function getData(type = 'json', file_name) {
  file_name = file_name || 'data'
  const file_type = type.toLowerCase()

  // return parsed json data
  if (file_type === 'json')
    return await getJSONData(file_name + '.' + file_type)
  if (file_type === 'markdown') return await getMarkdownData()

  return null

  // let file = null
  // if (type.toLowerCase() === 'json') file = await extractJSON('data.json')
  // else if (type.toLowerCase() === 'markdown') file = await extractMarkdown()
  // return JSON.parse(file)
}

function getJSONData(file_name) {
  if (typeof file_name !== 'string') return null

  const file_path = path.join(DIR, file_name)
  const file = fs.readFileSync(file_path, 'utf8')
  const data = JSON.parse(file)

  const row = {
    ...data,
    test: 'voila',
  }

  return JSON.stringify(row)
}

function getMarkdownData() {
  let exp = /.md/
  const directory = DIR + '/experience'

  const res = readdirSync(directory).map((file_name) => {
    const file = fs.readFileSync(path.join(directory, file_name), 'utf8')
    const matter_result = matter(file)
    // return JSON.stringify(matter_result)
    return matter_result
  })

  return JSON.stringify(res)
}

// used for extracting data from .json file
// function extractJSON(fileName) {
//   const filepath = path.join(dataDirectory, fileName)
//   let file = fs.readFileSync(filepath, 'utf8')

//   const parsedData = JSON.parse(file)
//   const portfolio = {
//     webdev: {
//       work: parsedData.mywork.web,
//       categories: Array.from(
//         new Set(parsedData.mywork.web.map((item) => item.category)),
//       ),
//     },
//     design: {
//       work: parsedData.mywork.graphic,
//       categories: Array.from(
//         new Set(parsedData.mywork.graphic.map((item) => item.category)),
//       ),
//       images: parsedData.mywork.images,
//     },
//   }

//   return JSON.stringify(portfolio)
// }

// used for extracting data from markdown/.md file
// async function extractMarkdown() {
//   let data = []
//   const fileNames = readdirSync(`${dataDirectory}/experience`)
//   fileNames.map((fileName) => {
//     const fullPath = path.join(`${dataDirectory}/experience`, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     const matterResult = matter(fileContents)

//     data = [...data, { ...matterResult.data, content: matterResult.content }]
//     return data
//   })

//   // return JSON.stringify({ data: { experience: data } })

//   return JSON.stringify({
//     data: {
//       experience: data.sort((a, b) => {
//         if (a['year-started'] > b['year-started']) return 1
//         else if (a['year-started'] < b['year-started']) return -1
//         else return 0
//       }),
//     },
//   })

//   // return allFiles.sort(({ ['year-started']: a }, { ['year-started']: b }) => {
//   //   if (a < b) return 1
//   //   else if (a > b) return -1
//   //   else return 0
//   // })
// }
