import { SiteDocument } from '@/components/layout/SiteDocument'
import { pageMetadata } from '@/lib/i18n'
export const metadata = pageMetadata('pt', '/', 'Luis Fellype Botelho (Luiz Maia) | Desenvolvedor', 'Luis Fellype Botelho (Luiz Maia), desenvolvedor front-end e full-stack. Experiência na OSF Digital, projetos em React e TypeScript, currículo e contato.')
export default function Layout({ children }: { children: React.ReactNode }) { return <SiteDocument>{children}</SiteDocument> }
