import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import gendiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fixturesPath = path.join(__dirname, '..', '__fixtures__')

const resultStylish = fs.readFileSync(path.join(fixturesPath, 'resultStylish.txt'), 'utf-8')
const resultPlain = fs.readFileSync(path.join(fixturesPath, 'resultPlain.txt'), 'utf-8')
const resultJson = fs.readFileSync(path.join(fixturesPath, 'resultJson.txt'), 'utf-8')

describe('get different from two files', () => {
  test.each([
    ['yml'],
    ['json'],
  ])('files format - %p', (extension) => {
    const fileOneFullPath = path.join(fixturesPath, `file1.${extension}`)
    const fileTwoFullPath = path.join(fixturesPath, `file2.${extension}`)

    expect(gendiff(fileOneFullPath, fileTwoFullPath, 'stylish')).toEqual(resultStylish)
    expect(gendiff(fileOneFullPath, fileTwoFullPath, 'plain')).toEqual(resultPlain)
    expect(gendiff(fileOneFullPath, fileTwoFullPath, 'json')).toEqual(resultJson)
    expect(gendiff(fileOneFullPath, fileTwoFullPath)).toEqual(resultStylish)
  })
})
