import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/styles/globals.scss'

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: 'Luis Fellype Botelho | Desenvolvedor Full-Stack', template: '%s | Luis Botelho' }, description: 'Portfólio de Luis Fellype Botelho, desenvolvedor Full-Stack e estudante de Engenharia de Software.', alternates: { canonical: '/' }, openGraph: { title: 'Luis Fellype Botelho | Desenvolvedor Full-Stack', description: 'Produtos digitais para problemas reais.', type: 'website' } }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR" className={`${space.variable} ${mono.variable}`}><body>{children}<Analytics /><SpeedInsights /></body></html> }
