import Link from 'next/link'
import { certificates } from '@/data/certificates'
import { CertificateCard } from './CertificateCard'
import styles from './Certificates.module.scss'
import { englishUI } from '@/lib/ui-translations'
import { localizedPath, type Locale } from '@/lib/i18n'

export function CertificateSection({ locale = 'pt' }: { locale?: Locale }) {
  const t = (text: string) =>
    locale === 'en' ? (englishUI[text] ?? text) : text
  const selected = [
    'dio-TOA8DRBH',
    'blue-2021-backend-final',
    'blue-2021-frontend-tasks',
  ]
  return (
    <section
      id="certificados"
      className={styles.section}
      aria-labelledby="certificados-titulo"
    >
      <div className={styles.heading}>
        <div>
          <p className="eyebrow">{t('05 / Formação em prática')}</p>
          <h2 id="certificados-titulo">
            {t('Aprender. Construir. Conectar.')}
          </h2>
          <p>
            {t(
              'Formação complementar, dos fundamentos de programação à segurança. Cada conexão mostra onde esse conhecimento encontra os projetos.',
            )}
          </p>
        </div>
        <Link href={localizedPath(locale, '/certificados')}>
          {t('Explorar certificados ↗')}
        </Link>
      </div>
      <div className={styles.stats}>
        <p>
          <strong>
            {certificates.filter((item) => item.hours !== null).length}
          </strong>
          {t('certificados com carga horária')}
        </p>
        <p>
          <strong>
            {
              certificates.filter(
                (item) => !item.introductory && item.hours === null,
              ).length
            }
          </strong>
          {t('formações em segurança')}
        </p>
        <p>
          <strong>
            {certificates.filter((item) => item.introductory).length}
          </strong>
          {t('conteúdos introdutórios')}
        </p>
      </div>
      <div className={styles.grid}>
        {selected.map((id) => (
          <CertificateCard
            locale={locale}
            key={id}
            certificate={certificates.find((item) => item.id === id)!}
          />
        ))}
      </div>
    </section>
  )
}
