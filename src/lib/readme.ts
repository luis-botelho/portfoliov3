import 'server-only'

import type { Project } from '@/types/project'

export type ReadmeSource = NonNullable<Project['readme']>

const allowedLinkProtocols = new Set(['http:', 'https:', 'mailto:'])

export function getReadmeGithubUrl(source: ReadmeSource) {
  return `https://github.com/${source.repository}/blob/${source.branch}/${source.path}`
}

export async function getReadme(source: ReadmeSource) {
  const url = `https://raw.githubusercontent.com/${source.repository}/${source.branch}/${source.path}`

  try {
    const response = await fetch(url, { next: { revalidate: 86400 } })
    if (!response.ok) return null
    return await response.text()
  } catch {
    return null
  }
}

export function resolveReadmeUrl(url: string, key: string, source: ReadmeSource) {
  const value = url.trim()
  if (!value) return ''
  if (value.startsWith('#')) return key === 'href' ? value : ''

  try {
    const absolute = new URL(value)
    if (key === 'src') return ['http:', 'https:'].includes(absolute.protocol) ? absolute.href : ''
    return allowedLinkProtocols.has(absolute.protocol) ? absolute.href : ''
  } catch {
    const path = value.startsWith('/') ? value.slice(1) : value
    const base = key === 'src'
      ? `https://raw.githubusercontent.com/${source.repository}/${source.branch}/${source.path}`
      : getReadmeGithubUrl(source)

    try {
      const resolved = new URL(path, base)
      return resolved.protocol === 'https:' ? resolved.href : ''
    } catch {
      return ''
    }
  }
}
