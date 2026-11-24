import { SiteDocument } from '@/components/layout/SiteDocument'
import { pageMetadata } from '@/lib/i18n'
export const metadata = pageMetadata(
  'en',
  '/',
  'Luis Fellype Botelho | Junior Full-stack Developer',
  'Junior full-stack developer and Software Engineering student. Projects, certificates, background and resume.'
)
export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument english>{children}</SiteDocument>
}
