import type { Metadata } from 'next'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { projects } from '@/data/projects'
import styles from './page.module.scss'
export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Projetos e estudos de Luis Botelho.',
  alternates: { canonical: '/projetos' },
  openGraph: { title: 'Projetos de Luis Botelho', description: 'Cases de desenvolvimento e arquitetura: Caminhos de Mambucaba, Liahona, FrostyCamp e outros projetos.', url: '/projetos', type: 'website' },
}
export default function ProjectsPage() {
  return (
    <>
      <main id="conteudo" className={styles.main}>
        <p className="eyebrow">Projetos / catálogo</p>
        <h1>O que existe no mapa.</h1>
        <p className={styles.intro}>
          Produtos publicados, MVPs concluídos e fundações em construção. O
          status faz parte da história de cada projeto.
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </>
  )
}
