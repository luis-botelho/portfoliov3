import type { Metadata } from 'next'
import { siteUrl } from './site'
export type Locale = 'pt' | 'en'
export const localizedPath = (locale: Locale, path: string) =>
  locale === 'en' ? `/en${path === '/' ? '' : path}` : path
export const languageAlternates = (path: string) => ({
  'pt-BR': path,
  en: localizedPath('en', path),
  'x-default': path,
})
export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title:
      path === '/'
        ? { default: title, template: '%s | Luis Botelho' }
        : { absolute: title },
    description,
    robots: { index: process.env.VERCEL_ENV !== 'preview', follow: true },
    alternates: {
      canonical: localizedPath(locale, path),
      languages: languageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: localizedPath(locale, path),
      locale: locale === 'en' ? 'en_US' : 'pt_BR',
      alternateLocale: locale === 'en' ? ['pt_BR'] : ['en_US'],
      siteName: 'Luis Botelho',
      type: 'website',
      images: [
        {
          url: locale === 'en' ? '/en/opengraph-image' : '/opengraph-image',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}
export const englishStatus: Record<string, string> = {
  'Em produção': 'Live',
  'MVP concluído': 'MVP completed',
  'Em construção': 'Under construction',
  Fundação: 'Foundation',
  Laboratório: 'Lab',
  Legado: 'Legacy',
  Arquivado: 'Archived',
}
