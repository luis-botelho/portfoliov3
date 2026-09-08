import { siteUrl } from '@/lib/site'
import { languageAlternates, localizedPath, type Locale } from '@/lib/i18n'
import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/projetos',
    '/certificados',
    '/sobre',
    '/curriculo',
    ...projects.map(({ slug }) => `/projetos/${slug}`),
  ]
  return paths.flatMap((path) =>
    (['pt', 'en'] as Locale[]).map((locale) => ({
      url: `${siteUrl}${localizedPath(locale, path)}`,
      lastModified: new Date('2026-09-08'),
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(path)).map(([lang, value]) => [
            lang,
            `${siteUrl}${value}`,
          ]),
        ),
      },
    })),
  )
}
