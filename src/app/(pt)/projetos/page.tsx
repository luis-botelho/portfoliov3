import { pageMetadata } from '@/lib/i18n'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { featuredProjects, studyProjects } from '@/data/projects'
import styles from './page.module.scss'

export const metadata = pageMetadata(
  'pt',
  '/projetos',
  'Projetos | Luis Fellype Botelho',
  'Plataforma publicada, MVPs concluídos, estudos e legados de Luis Fellype Botelho, com status explícito em cada projeto.',
)

export default function ProjectsPage() {
  return (
    <main id="conteudo" className={styles.main}>
      <p className="eyebrow">Projetos / catálogo</p>
      <h1>O que existe no mapa.</h1>
      <p className={styles.intro}>
        Plataforma em produção, MVPs concluídos, estudos e legados. O status faz
        parte da descrição de cada projeto.
      </p>
      <section className={styles.group} aria-labelledby="projetos-solidos">
        <h2 id="projetos-solidos">Projetos</h2>
        <p>Trabalhos com MVP concluído ou plataforma publicada.</p>
        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className={styles.group} aria-labelledby="estudos-legado">
        <h2 id="estudos-legado">Estudos e legado</h2>
        <p>
          Fundação, laboratórios e projetos antigos, apresentados com o escopo
          que possuem.
        </p>
        <div className={styles.grid}>
          {studyProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
