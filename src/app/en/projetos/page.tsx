import { pageMetadata } from '@/lib/i18n'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { englishProjects as projects } from '@/data/projects.en'
import styles from '@/app/(pt)/projetos/page.module.scss'
export const metadata = pageMetadata(
  'en',
  '/projetos',
  'Projects | Luis Botelho',
  'Software development and architecture case studies: Caminhos de Mambucaba, Liahona, FrostyCamp and more.',
)
export default function ProjectsPage() {
  return (
    <>
      <main id="conteudo" className={styles.main}>
        <p className="eyebrow">Projects / catalog</p>
        <h1>What’s on the map.</h1>
        <p className={styles.intro}>
          Published products, completed MVPs and foundations under construction.
          Status is part of each project’s story.
        </p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard locale="en" key={project.slug} project={project} />
          ))}
        </div>
      </main>
    </>
  )
}
