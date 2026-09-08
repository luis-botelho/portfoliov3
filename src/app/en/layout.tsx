import { SiteDocument } from '@/components/layout/SiteDocument'
import { pageMetadata } from '@/lib/i18n'
export const metadata = pageMetadata(
  'en',
  '/',
  'Luis Fellype Botelho (Luiz Maia) | Full-stack Developer',
  'Luis Fellype Botelho (Luiz Maia), full-stack developer. Software development experience, React and TypeScript projects, resume and contact.',
)
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument english>{children}</SiteDocument>
}
