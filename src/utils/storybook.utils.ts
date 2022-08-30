import { capitalize } from './text.utils'

export function getStoryName(basePath: string, fileName: string, isNested: boolean = false) {
  const noSrcPath = basePath.replace('/src/', '')
  const title = isNested ? noSrcPath.replace(/\/$/, '') : noSrcPath.replace(/\/[\w-]+\/$/, '')

  const name = fileName
    .replace('.stories', '')
    .split('-')
    .map(str => (str ? capitalize(str) : ''))
    .join('')

  return `${title}/${name}`
}
