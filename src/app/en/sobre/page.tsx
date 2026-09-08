import { pageMetadata } from '@/lib/i18n'
import Link from 'next/link'
import { ExperienceTimeline } from '@/components/profile/ExperienceTimeline'
import {
  englishProfile as profile,
  englishInstitutionalExperience as institutionalExperience,
} from '@/data/profile.en'
import styles from '@/app/(pt)/sobre/page.module.scss'

export const metadata = pageMetadata(
  'en',
  '/sobre',
  'About and experience | Luis Botelho',
  'Luis Botelho’s background: front-end development at OSF Digital, IT support, operations and software projects.',
)
export default function AboutPage() {
  return (
    <>
      <main id="conteudo" className={styles.main}>
        <header className={styles.hero}>
          <p className="eyebrow">About / Experience and direction</p>
          <h1>Software informed by experience on the other side.</h1>
          <p>{profile.summary}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={profile.resume} download>
              Download resume PDF ↓
            </a>
            <Link href="/en/curriculo">View resume online ↗</Link>
            <a href={`mailto:${profile.email}`}>Talk by email ↗</a>
          </div>
        </header>
        <section className={styles.story} aria-labelledby="trajetoria-titulo">
          <div>
            <p className="eyebrow">A background with different perspectives</p>
            <h2 id="trajetoria-titulo">
              Technology, customer service and operations.
            </h2>
          </div>
          <div>
            <p>
              My technology experience includes user support at Virtua Max in
              2021 and work as a Junior Front-end Developer at OSF Digital
              between January and June 2022.
            </p>
            <p>
              Between June 2022 and February 2023, I tried to establish a travel
              agency. The initiative ended at the concept stage, but what I
              learned about the area and the sector contributed to Caminhos de
              Mambucaba. In the following years, I also worked in store
              operations and customer service, including as a waiter between
              August 2025 and May 2026.
            </p>
            <p>
              Today, my focus is software development. This portfolio presents a
              published local platform, full-stack applications and engineering
              studies, with documented scope and decisions.
            </p>
          </div>
        </section>
        <section className={styles.story} aria-labelledby="experiencia-titulo">
          <div>
            <p className="eyebrow">Professional history</p>
            <h2 id="experiencia-titulo">
              Experiences that shape my perspective.
            </h2>
            <p>
              From the most recent role to the start of my career. Both periods
              at KAL are listed separately.
            </p>
          </div>
          <ExperienceTimeline english />
        </section>
        <section className={styles.story} aria-labelledby="icpt-titulo">
          <div>
            <p className="eyebrow">Current institutional role</p>
            <h2 id="icpt-titulo">
              {institutionalExperience.role} at{' '}
              {institutionalExperience.company}.
            </h2>
          </div>
          <div>
            <p>{institutionalExperience.description}</p>
            <p>
              An organizational and institutional perspective that complements
              my background in technology and customer service.
            </p>
          </div>
        </section>
        <section className={styles.story} aria-labelledby="formacao-titulo">
          <div>
            <p className="eyebrow">Education and practice</p>
            <h2 id="formacao-titulo">Learning applied to projects.</h2>
          </div>
          <div>
            <h3>Software Engineering</h3>
            <p>Degree in progress.</p>
            <h3>Complementary training</h3>
            <p>
              Blue EdTech: fundamentals, web and full-stack development. DIO:
              security and best practices. The catalog preserves each
              credential’s issuer, date and scope.
            </p>
            <Link href="/en/certificados">Browse certificates ↗</Link>
          </div>
        </section>
        <section className={styles.contact}>
          <p className="eyebrow">Next conversation</p>
          <h2>Let’s talk about your team.</h2>
          <p>
            Interested in front-end and full-stack development opportunities.
          </p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </section>
      </main>
    </>
  )
}
