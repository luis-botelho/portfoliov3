import Link from 'next/link'
import { certificateDescriptions } from '@/data/certificate-editorial'
import {
  certificateRelations,
  formatCertificateDate,
  type Certificate,
} from '@/data/certificates'
import { getProject } from '@/data/projects'
import { englishCertificates, englishRelations } from '@/data/certificates.en'
import styles from './Certificates.module.scss'
import { englishUI } from '@/lib/ui-translations'
import { localizedPath, type Locale } from '@/lib/i18n'

export function CertificateCard({
  certificate,
  locale = 'pt',
}: {
  certificate: Certificate
  locale?: Locale
}) {
  const english = locale === 'en'
  const title = english
    ? englishCertificates[certificate.id].title
    : certificate.title
  const t = (text: string) => (english ? (englishUI[text] ?? text) : text)
  const relations = certificateRelations.filter(
    (item) => item.certificateId === certificate.id,
  )
  return (
    <article className={styles.card} id={certificate.id}>
      <div className={styles.meta}>
        <span>{certificate.issuer}</span>
        <time dateTime={certificate.date}>
          {formatCertificateDate(certificate.date, locale)}
        </time>
      </div>
      <div className={styles.badges}>
        {certificate.highlight && (
          <span>{t('Reconhecimento de destaque')}</span>
        )}
        {certificate.introductory && <span>{t('Conteúdo introdutório')}</span>}
      </div>
      <h3>{title}</h3>
      {english && (
        <p className={styles.details} lang="pt-BR">
          {certificate.title}
        </p>
      )}
      <p>
        {english
          ? englishCertificates[certificate.id].description
          : certificateDescriptions[certificate.id]}
      </p>
      <p className={styles.details}>
        {certificate.hours
          ? `${certificate.hours} ${english ? 'hours' : 'horas'} · `
          : ''}
        {certificate.format === 'PDF'
          ? t('Documento original')
          : t('Validação no emissor')}
      </p>
      {certificate.technologies.length > 0 && (
        <ul className={styles.tags} aria-label={t('Competências')}>
          {certificate.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
      {relations.length > 0 && (
        <div className={styles.related}>
          <p>{t('Conexões com a prática')}</p>
          {relations.map((relation) => (
            <div key={relation.projectSlug}>
              <Link
                href={localizedPath(
                  locale,
                  `/projetos/${relation.projectSlug}`,
                )}
              >
                {getProject(relation.projectSlug)?.name} ↗
              </Link>
              <p>
                {english
                  ? englishRelations[
                      `${relation.certificateId}:${relation.projectSlug}`
                    ]
                  : relation.reason}
              </p>
            </div>
          ))}
        </div>
      )}
      <a
        className={styles.document}
        href={certificate.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${certificate.format === 'PDF' ? t('Ver PDF') : t('Validar credencial')}: ${title}`}
      >
        {certificate.format === 'PDF'
          ? t('Ver PDF original')
          : t('Validar credencial')}{' '}
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}
