import Link from 'next/link'
import type { Project } from '@/types/project'
import styles from './ProjectCard.module.scss'
export function ProjectCard({ project }: { project: Project }) { return <article className={styles.card}><div className={styles.meta}><span>{project.status}</span><span>{project.slug}</span></div><h3>{project.name}</h3><p>{project.summary}</p><ul>{project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}</ul><Link href={`/projetos/${project.slug}`}>Ler case study <span aria-hidden="true">↗</span></Link></article> }
