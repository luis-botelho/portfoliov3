import { pageMetadata } from '@/lib/i18n'
import { CertificateExplorer } from '@/components/certificates/CertificateExplorer'
import { certificates } from '@/data/certificates'
import { CertificateCard } from '@/components/certificates/CertificateCard'
import styles from './page.module.scss'

export const metadata = pageMetadata(
  'pt',
  '/certificados',
  'Certificados e formação | Luis Fellype Botelho',
  'Formação complementar em desenvolvimento web e full-stack na Blue EdTech (2021), segurança na DIO (set/2026) e introduções a bootcamps.',
)

export default function CertificatesPage() {
  return (
    <main id="conteudo" className={styles.main}>
      <header className={styles.hero}>
        <p className="eyebrow">Formação / Evidências de aprendizagem</p>
        <h1>Conhecimento que encontra a prática.</h1>
        <p>
          Certificados da Blue EdTech e da DIO, além de introduções a bootcamps.
          Explore a formação, consulte os documentos e veja as conexões com os
          projetos.
        </p>
        <p className={styles.note}>
          Os vínculos indicam competências relacionadas. Cursos introdutórios
          estão identificados; cada credencial preserva seu próprio escopo.
        </p>
      </header>
      <CertificateExplorer
        cards={Object.fromEntries(
          certificates.map((certificate) => [
            certificate.id,
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />,
          ]),
        )}
      />
    </main>
  )
}
