import { pageMetadata } from '@/lib/i18n'
import { ProjectCard } from '@/components/projects/ProjectCard'
import {
  englishFeaturedProjects,
  englishStudyProjects,
} from '@/data/projects.en'
import styles from '@/app/(pt)/projetos/page.module.scss'

export const metadata = pageMetadata(
  'en',
  '/projetos',
  'Projects | Luis Fellype Botelho',
  'Published platform, completed MVPs, studies and legacy projects by Luis Fellype Botelho, with an explicit status for each one.',
)

export default function ProjectsPage() {
  return (
    <main id="conteudo" className={styles.main}>
      <p className="eyebrow">Projects / catalog</p>
      <h1>What’s on the map.</h1>
      <p className={styles.intro}>
        Platform in production, completed MVPs, studies and legacy projects. The
        status is part of each project description.
      </p>
      <section className={styles.group} aria-labelledby="projetos-solidos">
        <h2 id="projetos-solidos">Projects</h2>
        <p>Work with a completed MVP or a published platform.</p>
        <div className={styles.grid}>
          {englishFeaturedProjects.map((project) => (
            <ProjectCard locale="en" key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className={styles.group} aria-labelledby="estudos-legado">
        <h2 id="estudos-legado">Studies and legacy</h2>
        <p>Foundations, labs and older projects, described with their actual scope.</p>
        <div className={styles.grid}>
          {englishStudyProjects.map((project) => (
            <ProjectCard locale="en" key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
