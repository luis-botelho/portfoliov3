import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/types/project'
import { getProjectCertificates } from '@/data/certificates'
import styles from './ProjectCard.module.scss'

export function ProjectCard({ project }: { project: Project }) {
  const connections = getProjectCertificates(project.slug).length
  return (
    <article className={styles.card}>
      {project.cover && (
        <div className={styles.image}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={800}
            height={450}
            sizes="(max-width: 760px) 100vw, 33vw"
          />
        </div>
      )}
      <div className={styles.meta}>
        <span>{project.status}</span>
        <span>{project.eyebrow}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <ul>
        {project.stack.slice(0, 4).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {connections > 0 && (
        <span className={styles.connections}>
          {connections}{' '}
          {connections === 1
            ? 'conexão com a formação'
            : 'conexões com a formação'}
        </span>
      )}
      <Link href={`/projetos/${project.slug}`}>
        Ler case study <span aria-hidden="true">↗</span>
      </Link>
    </article>
  )
}
