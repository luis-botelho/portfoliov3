import { SiteDocument } from '@/components/layout/SiteDocument'
import { pageMetadata } from '@/lib/i18n'
export const metadata = pageMetadata('pt', '/', 'Luis Fellype Botelho | Desenvolvedor Full-stack Júnior', 'Desenvolvedor Full-stack Júnior e estudante de Engenharia de Software. Projetos, certificados, trajetória e currículo.')
export default function Layout({ children }: { children: React.ReactNode }) { return <SiteDocument>{children}</SiteDocument> }
