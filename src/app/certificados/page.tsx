import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CertificateExplorer } from '@/components/certificates/CertificateExplorer'
import { certificates } from '@/data/certificates'
import { CertificateCard } from '@/components/certificates/CertificateCard'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Certificados e formação',
  description:
    '25 credenciais de Luis Botelho, organizadas por instituição e conectadas às competências dos projetos.',
  alternates: { canonical: '/certificados' },
}
export default function CertificatesPage() {
  return (
    <>
      <Header />
      <main id="conteudo" className={styles.main}>
        <header className={styles.hero}>
          <p className="eyebrow">Formação / Evidências de aprendizagem</p>
          <h1>Conhecimento que encontra a prática.</h1>
          <p>
            Certificados da Blue EdTech, DIO e Growdev. Explore a formação,
            consulte os documentos e descubra as conexões com os projetos.
          </p>
          <p className={styles.note}>
            Os vínculos indicam competências relacionadas. Cursos introdutórios
            estão identificados; cada credencial preserva seu próprio escopo.
          </p>
        </header>
        <CertificateExplorer cards={Object.fromEntries(certificates.map(certificate => [certificate.id, <CertificateCard key={certificate.id} certificate={certificate} />]))} />
      </main>
      <Footer />
    </>
  )
}
