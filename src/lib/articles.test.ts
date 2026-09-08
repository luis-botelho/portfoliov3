import { afterEach, describe, expect, it, vi } from 'vitest'
import { getArticles } from './articles'

const dev = (day: number) => ({
  title: `Dev ${day}`,
  url: `https://dev.to/luisbotelho/${day}`,
  published_at: `2026-09-0${day}T12:00:00Z`,
  description: 'A short description',
  tag_list: ['react'],
})
const rss =
  '<rss version="2.0"><channel><title>Posts</title><item><title>Medium newest</title><link>https://medium.com/post</link><pubDate>Tue, 08 Sep 2026 12:00:00 GMT</pubDate><description><![CDATA[<p>A useful summary</p>]]></description></item></channel></rss>'
function sources(
  devResponse: () => Promise<Response>,
  mediumResponse: () => Promise<Response>,
) {
  vi.stubGlobal(
    'fetch',
    vi.fn((url: string) =>
      url.includes('dev.to') ? devResponse() : mediumResponse(),
    ),
  )
  vi.spyOn(console, 'warn').mockImplementation(() => {})
}
afterEach(() => {
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('article aggregation', () => {
  it('merges RSS and JSON, sorts newest first, limits to five and caches both sources', async () => {
    sources(
      async () =>
        Response.json([dev(2), dev(7), dev(3), dev(6), dev(1), dev(4)]),
      async () => new Response(rss),
    )
    const articles = await getArticles()
    expect(articles.map((a) => a.title)).toEqual([
      'Medium newest',
      'Dev 7',
      'Dev 6',
      'Dev 4',
      'Dev 3',
    ])
    expect(articles[0].summary).toBe('A useful summary')
    expect(articles[1].tags).toEqual(['react'])
    for (const [, options] of vi.mocked(fetch).mock.calls)
      expect(options).toMatchObject({ next: { revalidate: 21600 } })
  })
  it('keeps Medium when Dev.to returns an HTTP error', async () => {
    sources(
      async () => new Response('', { status: 503 }),
      async () => new Response(rss),
    )
    expect((await getArticles()).map((a) => a.platform)).toEqual(['Medium'])
  })
  it('keeps Dev.to when Medium returns malformed XML', async () => {
    sources(
      async () => Response.json([dev(7)]),
      async () => new Response('broken XML'),
    )
    expect((await getArticles()).map((a) => a.platform)).toEqual(['Dev.to'])
  })
  it('handles both sources failing without rejecting', async () => {
    sources(
      async () => {
        throw new Error('timeout')
      },
      async () => new Response('', { status: 403 }),
    )
    expect(await getArticles()).toEqual([])
  })
  it('skips unusable entries and bounds summaries without rendering HTML', async () => {
    sources(
      async () =>
        Response.json([
          null,
          { ...dev(1), published_at: 'invalid' },
          { ...dev(2), url: 'javascript:alert(1)' },
          { ...dev(3), description: '<b>' + 'word '.repeat(100) + '</b>' },
        ]),
      async () =>
        new Response(
          '<rss version="2.0"><channel><title>Empty</title></channel></rss>',
        ),
    )
    const articles = await getArticles()
    expect(articles).toHaveLength(1)
    expect(articles[0].summary.length).toBeLessThanOrEqual(220)
    expect(articles[0].summary).not.toContain('<b>')
  })
})
