import { pageMetadata } from '@/lib/i18n'
import Link from 'next/link'
import { curriculo } from '@/content/curriculo'
import styles from '@/app/(pt)/curriculo/page.module.scss'

export const metadata = pageMetadata(
  'en',
  '/curriculo',
  'Resume | Luis Fellype Botelho',
  'Professional resume of Luis Fellype Botelho, Junior Full-stack Developer. PDF and DOCX in Portuguese and English.',
)

export default function ResumePage() {
  const { identity, summary, experience, projects, skills, education, other } =
    curriculo
  const contact = identity.contacts

  return (
    <main id="conteudo" className={styles.main}>
      <nav className={styles.tools} aria-label="Resume actions">
        <Link href="/en/sobre">← Back to portfolio</Link>
        <a href="/cv/luis-botelho-resume.pdf" download>
          Download PDF ↓
        </a>
        <a href="/cv/luis-botelho-resume.docx" download>
          Download DOCX ↓
        </a>
      </nav>
      <article className={styles.sheet}>
        <header>
          <h1>{identity.name}</h1>
          <p className={styles.title}>{identity.tagline.en}</p>
          <p>
            {contact.phone} · {contact.email} · {contact.city.en}
          </p>
          <p>
            <a href={`https://${contact.linkedin}`}>{contact.linkedin}</a> ·{' '}
            <a href={`https://${contact.github}`}>{contact.github}</a> ·{' '}
            <a href={`https://${contact.site}`}>{contact.site}</a>
          </p>
        </header>
        <section>
          <h2>Summary</h2>
          <p>{summary.en}</p>
        </section>
        <section>
          <h2>Technology experience</h2>
          {experience.map((item) => (
            <div className={styles.entry} key={item.company}>
              <h3>
                {item.role.en} · {item.company}
              </h3>
              <p>
                {item.period.en} · {item.location.en}
              </p>
              <ul className={styles.operations}>
                {item.bullets.en.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section>
          <h2>Projects</h2>
          {projects.map((project) => (
            <div className={styles.entry} key={project.name}>
              <h3>
                {project.name} · {project.status.en}
              </h3>
              <ul className={styles.operations}>
                {project.bullets.en.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section>
          <h2>Skills</h2>
          {skills.en.map((group) => (
            <p key={group.group}>
              <strong>{group.group}:</strong> {group.items.join(', ')}
            </p>
          ))}
        </section>
        <section>
          <h2>Education</h2>
          {education.en.map((item) => (
            <div className={styles.entry} key={item.title}>
              <h3>{item.title}</h3>
              {item.detail && <p>{item.detail}</p>}
            </div>
          ))}
        </section>
        <section>
          <h2>Other experience</h2>
          {other.en.map((item) => (
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
