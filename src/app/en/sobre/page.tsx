import { pageMetadata } from '@/lib/i18n'
import Link from 'next/link'
import { ExperienceTimeline } from '@/components/profile/ExperienceTimeline'
import { englishProfile as profile } from '@/data/profile.en'
import { curriculo } from '@/content/curriculo'
import styles from '@/app/(pt)/sobre/page.module.scss'

export const metadata = pageMetadata(
  'en',
  '/sobre',
  'About and experience | Luis Fellype Botelho',
  'Luis Fellype Botelho’s background: Software Engineering at Estácio, OSF Digital, IT support, customer service, B2B sales and public tenders.',
)

export default function AboutPage() {
  const [icpt, osf, virtua] = curriculo.experience
  const [tenders] = curriculo.other.en

  return (
    <main id="conteudo" className={styles.main}>
      <header className={styles.hero}>
        <p className="eyebrow">About / Background</p>
        <h1>Technology informed by operations and customer service.</h1>
        <p>{curriculo.summary.en}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={profile.resume} download>
            Download resume PDF ↓
          </a>
          <Link href="/en/curriculo">View resume online ↗</Link>
          <a href={`mailto:${profile.email}`}>Get in touch by email ↗</a>
        </div>
      </header>
      <section className={styles.story} aria-labelledby="tecnologia-titulo">
        <div>
          <p className="eyebrow">Technology experience</p>
          <h2 id="tecnologia-titulo">What I have done with software.</h2>
        </div>
        <div className={styles.entries}>
          {[icpt, osf, virtua].map((item) => (
            <article key={item.company} className={styles.entry}>
              <p className={styles.meta}>
                {item.period.en} · {item.location.en}
              </p>
              <h3>
                {item.role.en} — {item.company}
              </h3>
              <ul>
                {item.bullets.en.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.story} aria-labelledby="licitacoes-titulo">
        <div>
          <p className="eyebrow">Public tenders</p>
          <h2 id="licitacoes-titulo">Rede Fortaco Angraluz.</h2>
        </div>
        <div>
          <p className={styles.meta}>since Oct 2026 · Angra dos Reis</p>
          {tenders.bullets.map((bullet) => (
            <p key={bullet}>{bullet}</p>
          ))}
        </div>
      </section>
      <section className={styles.story} aria-labelledby="experiencia-titulo">
        <div>
          <p className="eyebrow">Professional history</p>
          <h2 id="experiencia-titulo">
            Customer service, operations and entrepreneurship.
          </h2>
          <p>
            From the most recent record to the start of my career. Both spells at
            KAL appear with their own periods, and the travel agency attempt is
            described as a concept, not an operating business.
          </p>
        </div>
        <ExperienceTimeline english />
      </section>
      <section className={styles.story} aria-labelledby="formacao-titulo">
        <div>
          <p className="eyebrow">Education</p>
          <h2 id="formacao-titulo">Study and practice.</h2>
        </div>
        <div className={styles.entries}>
          {curriculo.education.en.map((item) => (
            <article key={item.title} className={styles.entry}>
              <h3>{item.title}</h3>
              {item.detail && <p>{item.detail}</p>}
            </article>
          ))}
          <Link href="/en/certificados">View certificates ↗</Link>
        </div>
      </section>
      <section className={styles.contact}>
        <p className="eyebrow">Contact</p>
        <h2>Professional contact.</h2>
        <p>Resume, projects and background are available on this site.</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </section>
    </main>
  )
}
