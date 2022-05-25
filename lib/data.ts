import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dataDirectory: string = path.join(process.cwd(), 'data')

async function getDocument(dir: string) {}

export async function getData(dir: string) {
  return dir
}
