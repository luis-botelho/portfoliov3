import { pageMetadata } from '@/lib/i18n'
import Link from 'next/link'
import {
  englishProfile as profile,
  englishExperience as experience,
  englishInstitutionalExperience as institutionalExperience,
} from '@/data/profile.en'
import styles from '@/app/(pt)/curriculo/page.module.scss'

export const metadata = pageMetadata(
  'en',
  '/curriculo',
  'Resume | Luis Botelho',
  'Professional resume of Luis Botelho, full-stack developer. Online and downloadable PDF.',
)
export default function ResumePage() {
  return (
    <main id="conteudo" className={styles.main}>
      <nav className={styles.tools} aria-label="Resume actions">
        <Link href="/en/sobre">← Back to portfolio</Link>
        <a href={profile.resume} download>
          Download PDF ↓
        </a>
      </nav>
      <article className={styles.sheet}>
        <header>
          <h1>{profile.name}</h1>
          <p className={styles.title}>{profile.title}</p>
          <p>{profile.location}</p>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{' '}
            <a href={profile.linkedin}>linkedin.com/in/luis-botelho</a>
          </p>
          <p>
            <a href={profile.github}>github.com/luis-botelho</a> ·{' '}
            <a href={profile.site}>{new URL(profile.site).hostname}</a>
          </p>
        </header>
        <section>
          <h2>Professional profile</h2>
          <p>{profile.summary}</p>
        </section>
        <section>
          <h2>Experience in technology</h2>
          {experience
            .filter((item) =>
              ['Desenvolvimento', 'Suporte de TI'].includes(item.category),
            )
            .map((item) => (
              <div className={styles.entry} key={item.company}>
                <h3>
                  {item.role} · {item.company}
                </h3>
                <p>{item.period}</p>
                {item.description && <p>{item.description}</p>}
              </div>
            ))}
        </section>
        <section>
          <h2>Selected projects</h2>
          <div className={styles.entry}>
            <h3>Caminhos de Mambucaba · published platform</h3>
            <p>
              Full-stack development of experiences, maps and community
              participation forms. Next.js, React, TypeScript and
              PostgreSQL/Supabase.
            </p>
            <a href="https://caminhosdemambucaba.live">
              caminhosdemambucaba.live
            </a>{' '}
            ·{' '}
            <a href="https://github.com/luis-botelho/instituto-platform">
              Code on GitHub
            </a>
          </div>
          <div className={styles.entry}>
            <h3>Mini Kanban Veritas · full-stack MVP</h3>
            <p>
              Task CRUD, a Go/Chi REST API, React/TypeScript interface and
              Docker. In-memory data, backend tests and a keyboard alternative
              to drag-and-drop.
            </p>
            <a href="https://github.com/luis-botelho/desafio-fullstack-veritas">
              github.com/luis-botelho/desafio-fullstack-veritas
            </a>
          </div>
        </section>
        <section>
          <h2>Business and customer service experience</h2>
          <ul className={styles.operations}>
            {experience
              .filter(
                (item) =>
                  !['Desenvolvimento', 'Suporte de TI'].includes(item.category),
              )
              .sort((a, b) => b.start.localeCompare(a.start))
              .map((item) => (
                <li key={`${item.company}-${item.start}`}>
                  <strong>{item.company}</strong> · {item.role} · {item.period}
                </li>
              ))}
          </ul>
        </section>
        <section>
          <h2>Institutional role</h2>
          <p>
            <strong>
              {institutionalExperience.role} · {institutionalExperience.company}
            </strong>{' '}
            · Current role, formalized through appointment minutes.
          </p>
        </section>
        <section>
          <h2>Education</h2>
          <p>
            <strong>Software Engineering</strong> · Degree in progress.
          </p>
          <p>
            <strong>Blue EdTech</strong> · Complementary training in
            programming, web and full-stack development (2021).{' '}
            <strong>DIO</strong> · Security and best practices (2026).
          </p>
          <a href={`${profile.site}/en/certificados`}>
            Certificates and documents:
            {new URL(profile.site).hostname}/en/certificados
          </a>
        </section>
        <section>
          <h2>Skills used in the projects</h2>
          <p>{profile.skills.join(' · ')}</p>
        </section>
      </article>
    </main>
  )
}
