import { SiteDocument } from '@/components/layout/SiteDocument'
import { pageMetadata } from '@/lib/i18n'
export const metadata = pageMetadata(
  'en',
  '/',
  'Luis Fellype Botelho (Luiz Maia) | Developer',
  'Luis Fellype Botelho (Luiz Maia), front-end and full-stack developer. Experience at OSF Digital, React and TypeScript projects, resume and contact.',
)
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument english>{children}</SiteDocument>
}
