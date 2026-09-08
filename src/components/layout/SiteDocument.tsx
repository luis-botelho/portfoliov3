import { siteUrl } from '@/lib/site'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/styles/globals.scss'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const identity = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Luis Fellype Botelho',
      alternateName: ['Luis Botelho', 'Luiz Maia'],
      url: siteUrl,
      jobTitle: 'Desenvolvedor Front-end e Full-stack',
      sameAs: [
        'https://github.com/luis-botelho',
        'https://linkedin.com/in/luis-botelho',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Luis Botelho — Portfólio',
      inLanguage: 'pt-BR',
      author: { '@id': `${siteUrl}/#person` },
    },
  ],
}
export function SiteDocument({
  children,
  english = false,
}: Readonly<{ children: React.ReactNode; english?: boolean }>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang={english ? 'en' : 'pt-BR'}
      className={`${space.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...identity,
              '@graph': identity['@graph'].map((item) =>
                item['@type'] === 'WebSite'
                  ? { ...item, inLanguage: ['pt-BR', 'en'] }
                  : item,
              ),
            }).replace(/</g, '\\u003c'),
          }}
        />
        <div className="site-chrome">
          <Header />
        </div>
        {children}
        <div className="site-chrome">
          <Footer english={english} />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
