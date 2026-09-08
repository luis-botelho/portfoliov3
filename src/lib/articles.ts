import Parser from 'rss-parser'

export type Article = {
  title: string
  url: string
  publishedAt: string
  summary: string
  platform: 'Dev.to' | 'Medium'
  tags: string[]
}

const sources = {
  dev: 'https://dev.to/api/articles?username=luisbotelho',
  medium: 'https://medium.com/feed/@luisfellypebotelho',
}

function normalize(
  title: unknown,
  url: unknown,
  date: unknown,
  summary: unknown,
  platform: Article['platform'],
  tags: unknown = [],
): Article | null {
  if (
    typeof title !== 'string' ||
    !title.trim() ||
    typeof url !== 'string' ||
    typeof date !== 'string'
  )
    return null
  const timestamp = Date.parse(date)
  if (!Number.isFinite(timestamp)) return null
  try {
    if (!['http:', 'https:'].includes(new URL(url).protocol)) return null
  } catch {
    return null
  }
  const text =
    typeof summary === 'string'
      ? summary
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      : ''
  return {
    title: title.trim(),
    url,
    publishedAt: new Date(timestamp).toISOString(),
    platform,
    summary: text.length > 220 ? `${text.slice(0, 217).trimEnd()}…` : text,
    tags: Array.isArray(tags)
      ? tags.filter((tag): tag is string => typeof tag === 'string').slice(0, 3)
      : [],
  }
}

async function fetchSource(url: string) {
  const response = await fetch(url, {
    next: { revalidate: 21600 },
    signal: AbortSignal.timeout(10000),
  })
  if (!response.ok)
    throw new Error(`Article source returned HTTP ${response.status}`)
  return response
}

async function devArticles(): Promise<Article[]> {
  const data: unknown = await (await fetchSource(sources.dev)).json()
  if (!Array.isArray(data)) throw new Error('Invalid Dev.to response')
  return data.flatMap((item) => {
    if (!item || typeof item !== 'object') return []
    const article = normalize(
      item.title,
      item.url,
      item.published_at,
      item.description,
      'Dev.to',
      item.tag_list,
    )
    return article ? [article] : []
  })
}

async function mediumArticles(): Promise<Article[]> {
  const xml = await (await fetchSource(sources.medium)).text()
  const feed = await new Parser().parseString(xml)
  return feed.items.flatMap((item) => {
    const article = normalize(
      item.title,
      item.link,
      item.pubDate,
      item.contentSnippet || item['content:encodedSnippet'],
      'Medium',
    )
    return article ? [article] : []
  })
}

// Called only by the async Server Component; feeds never reach the client bundle.
export async function getArticles(): Promise<Article[]> {
  const results = await Promise.allSettled([devArticles(), mediumArticles()])
  return results
    .flatMap((result, index) => {
      if (result.status === 'fulfilled') return result.value
      console.warn(
        `Unable to load ${index === 0 ? 'Dev.to' : 'Medium'} articles`,
        result.reason instanceof Error
          ? result.reason.message
          : 'Unknown source error',
      )
      return []
    })
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, 5)
}
