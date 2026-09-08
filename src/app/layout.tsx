import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: process.env.VERCEL_ENV !== 'preview', follow: true },
  title: {
    default: 'Luis Fellype Botelho (Luiz Maia) | Desenvolvedor',
    template: '%s | Luis Botelho',
  },
  description:
    'Luis Fellype Botelho (Luiz Maia), desenvolvedor front-end e full-stack. Experiência na OSF Digital, projetos em React e TypeScript, currículo e contato.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Luis Fellype Botelho (Luiz Maia) | Desenvolvedor',
    description: 'Produtos digitais para problemas reais.',
    url: '/',
    locale: 'pt_BR',
    siteName: 'Luis Botelho',
    type: 'website',
  },
}

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
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="pt-BR"
      className={`${space.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(identity).replace(/</g, '\\u003c'),
          }}
        />
        <div className="site-chrome">
          <Header />
        </div>
        {children}
        <div className="site-chrome">
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
