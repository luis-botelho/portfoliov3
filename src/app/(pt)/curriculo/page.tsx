import { pageMetadata } from '@/lib/i18n'
import Link from 'next/link'
import { curriculo } from '@/content/curriculo'
import styles from './page.module.scss'

export const metadata = pageMetadata(
  'pt',
  '/curriculo',
  'Currículo | Luis Fellype Botelho',
  'Currículo profissional de Luis Fellype Botelho, Desenvolvedor Full-stack Júnior. PDF e DOCX em português e inglês.',
)

export default function ResumePage() {
  const { identity, summary, experience, projects, skills, education, other } =
    curriculo
  const contact = identity.contacts

  return (
    <main id="conteudo" className={styles.main}>
      <nav className={styles.tools} aria-label="Ações do currículo">
        <Link href="/sobre">← Voltar ao portfólio</Link>
        <a href="/cv/luis-botelho-curriculo.pdf" download>
          Baixar PDF ↓
        </a>
        <a href="/cv/luis-botelho-curriculo.docx" download>
          Baixar DOCX ↓
        </a>
      </nav>
      <article className={styles.sheet}>
        <header>
          <h1>{identity.name}</h1>
          <p className={styles.title}>{identity.tagline.pt}</p>
          <p>
            {contact.phone} · {contact.email} · {contact.city.pt}
          </p>
          <p>
            <a href={`https://${contact.linkedin}`}>{contact.linkedin}</a> ·{' '}
            <a href={`https://${contact.github}`}>{contact.github}</a> ·{' '}
            <a href={`https://${contact.site}`}>{contact.site}</a>
          </p>
        </header>
        <section>
          <h2>Resumo</h2>
          <p>{summary.pt}</p>
        </section>
        <section>
          <h2>Experiência em tecnologia</h2>
          {experience.map((item) => (
            <div className={styles.entry} key={item.company}>
              <h3>
                {item.role.pt} · {item.company}
              </h3>
              <p>
                {item.period.pt} · {item.location.pt}
              </p>
              <ul className={styles.operations}>
                {item.bullets.pt.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section>
          <h2>Projetos</h2>
          {projects.map((project) => (
            <div className={styles.entry} key={project.name}>
              <h3>
                {project.name} · {project.status.pt}
              </h3>
              <ul className={styles.operations}>
                {project.bullets.pt.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section>
          <h2>Competências</h2>
          {skills.pt.map((group) => (
            <p key={group.group}>
              <strong>{group.group}:</strong> {group.items.join(', ')}
            </p>
          ))}
        </section>
        <section>
          <h2>Formação</h2>
          {education.pt.map((item) => (
            <div className={styles.entry} key={item.title}>
              <h3>{item.title}</h3>
              {item.detail && <p>{item.detail}</p>}
            </div>
          ))}
        </section>
        <section>
          <h2>Outras experiências</h2>
          {other.pt.map((item) => (
            <div className={styles.entry} key={item.title}>
              <h3>{item.title}</h3>
              <ul className={styles.operations}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </article>
    </main>
  )
}
