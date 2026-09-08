import { pageMetadata } from '@/lib/i18n'
import { CertificateExplorer } from '@/components/certificates/CertificateExplorer'
import { certificates } from '@/data/certificates'
import { CertificateCard } from '@/components/certificates/CertificateCard'
import styles from '@/app/(pt)/certificados/page.module.scss'

export const metadata = pageMetadata(
  'en',
  '/certificados',
  'Certificates and education | Luis Botelho',
  'Verified learning credentials in React, backend and security, connected to Luis Botelho’s projects.',
)
export default function CertificatesPage() {
  return (
    <>
      <main id="conteudo" className={styles.main}>
        <header className={styles.hero}>
          <p className="eyebrow">Education / Evidence of learning</p>
          <h1>Knowledge that meets practice.</h1>
          <p>
            Certificates from Blue EdTech, DIO and Growdev. Explore the
            training, view the documents and discover connections to the
            projects.
          </p>
          <p className={styles.note}>
            Connections indicate related skills. Introductory courses are
            labeled, and each credential retains its own scope.
          </p>
        </header>
        <CertificateExplorer
          locale="en"
          cards={Object.fromEntries(
            certificates.map((certificate) => [
              certificate.id,
              <CertificateCard
                locale="en"
                key={certificate.id}
                certificate={certificate}
              />,
            ]),
          )}
        />
      </main>
    </>
  )
}
