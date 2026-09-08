import Link from 'next/link'
import { certificateDescriptions } from '@/data/certificate-editorial'
import {
  certificateRelations,
  formatCertificateDate,
  type Certificate,
} from '@/data/certificates'
import { getProject } from '@/data/projects'
import styles from './Certificates.module.scss'

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  const relations = certificateRelations.filter(
    (item) => item.certificateId === certificate.id,
  )
  return (
    <article className={styles.card} id={certificate.id}>
      <div className={styles.meta}>
        <span>{certificate.issuer}</span>
        <time dateTime={certificate.date}>
          {formatCertificateDate(certificate.date)}
        </time>
      </div>
      <div className={styles.badges}>
        {certificate.highlight && <span>Reconhecimento de destaque</span>}
        {certificate.introductory && <span>Conteúdo introdutório</span>}
      </div>
      <h3>{certificate.title}</h3>
      <p>{certificateDescriptions[certificate.id]}</p>
      <p className={styles.details}>
        {certificate.hours ? `${certificate.hours} horas · ` : ''}
        {certificate.format === 'PDF'
          ? 'Documento original'
          : 'Validação no emissor'}
      </p>
      {certificate.technologies.length > 0 && (
        <ul className={styles.tags} aria-label="Competências">
          {certificate.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
      {relations.length > 0 && (
        <div className={styles.related}>
          <p>Conexões com a prática</p>
          {relations.map((relation) => (
            <div key={relation.projectSlug}>
              <Link href={`/projetos/${relation.projectSlug}`}>
                {getProject(relation.projectSlug)?.name} ↗
              </Link>
              <p>{relation.reason}</p>
            </div>
          ))}
        </div>
      )}
      <a
        className={styles.document}
        href={certificate.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${certificate.format === 'PDF' ? 'Ver PDF' : 'Validar credencial'}: ${certificate.title}`}
      >
        {certificate.format === 'PDF'
          ? 'Ver PDF original'
          : 'Validar credencial'}{' '}
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}
