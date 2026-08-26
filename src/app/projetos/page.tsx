import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'
import styles from './page.module.scss'
export const metadata: Metadata = { title: 'Projetos', description: 'Projetos e estudos de Luis Botelho.' }
export default function ProjectsPage() { return <><Header /><main className={styles.main}><p className="eyebrow">Projetos / catálogo</p><h1>O que existe no mapa.</h1><p className={styles.intro}>Produtos publicados, MVPs concluídos e fundações em construção. O status faz parte da história de cada projeto.</p><div className={styles.grid}>{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></main><Footer /></> }
