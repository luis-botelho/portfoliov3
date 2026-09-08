import { pageMetadata } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectCard } from '@/components/projects/ProjectCard'
import {
  englishFeaturedProjects as featuredProjects,
  englishProjects as projects,
} from '@/data/projects.en'
import { CertificateSection } from '@/components/certificates/CertificateSection'
import { englishProfile as profile } from '@/data/profile.en'
import styles from '@/app/(pt)/page.module.scss'

export const metadata = pageMetadata(
  'en',
  '/',
  'Luis Fellype Botelho (Luiz Maia) | Developer',
  'Front-end and full-stack developer with experience at OSF Digital. Explore projects, certificates, professional background and resume.',
)
export default function HomePage() {
  return (
    <>
      <main id="conteudo">
        <section className={styles.hero}>
          <div>
            <p className="eyebrow">
              Luis Fellype Botelho (Luiz Maia) · Front-end / Full-stack
              Developer
            </p>
            <h1>I build digital products for real problems.</h1>
            <p className={styles.lede}>
              Development experience at OSF Digital, a background in customer
              service and a close understanding of business. Today, I bring that
              perspective to interfaces, APIs and purposeful products.
            </p>
            <p className={styles.note}>
              React · TypeScript · Next.js · Node.js · Go
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={profile.resume} download>
                Download resume PDF ↓
              </a>
              <a href="#projetos">View projects ↗</a>
              <a href={`mailto:${profile.email}`}>Get in touch ↗</a>
            </div>
          </div>
          <aside
            className={styles.profileCard}
            aria-label="Professional summary"
          >
            <p className="eyebrow">Experience + direction</p>
            <p className={styles.monogram} aria-hidden="true">
              LB<span>.</span>
            </p>
            <h2>{profile.shortName}</h2>
            <p>{profile.location}</p>
            <dl>
              <div>
                <dt>Experience in technology</dt>
                <dd>
                  Front-end Jr · OSF Digital
                  <br />
                  <span>Jan–Jun 2022 · Salesforce environment</span>
                </dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  Software Engineering
                  <br />
                  <span>Degree in progress</span>
                </dd>
              </div>
              <div>
                <dt>Professional interests</dt>
                <dd>Front-end and Full-stack</dd>
              </div>
            </dl>
            <Link href="/en/sobre">Explore my background ↗</Link>
          </aside>
        </section>
        <section className={styles.spotlight} aria-labelledby="destaque-titulo">
          <div className={styles.spotlightCopy}>
            <p className="eyebrow">01 / Published product</p>
            <h2 id="destaque-titulo">Caminhos de Mambucaba.</h2>
            <p className={styles.spotlightLead}>
              Technology to discover a place and bring its community together.
            </p>
            <p>
              A platform bringing together experiences, maps and community
              participation. Full-stack development, from content organization
              to form persistence and deployment.
            </p>
            <ul className={styles.tags}>
              <li>Next.js + React</li>
              <li>TypeScript</li>
              <li>PostgreSQL</li>
            </ul>
            <div className={styles.actions}>
              <Link href="/en/projetos/caminhos-de-mambucaba">
                Explore the case study ↗
              </Link>
              <a
                href="https://caminhosdemambucaba.live"
                target="_blank"
                rel="noreferrer"
              >
                Visit the website ↗
              </a>
            </div>
          </div>
          <figure>
            <Image
              src="/images/projects/mambucaba-live.jpg"
              alt="Published homepage of Caminhos de Mambucaba, a local discovery platform"
              width={1440}
              height={1000}
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <figcaption>
              Published product interface · caminhosdemambucaba.live
            </figcaption>
          </figure>
        </section>
        <section
          id="projetos"
          className={styles.projects}
          aria-labelledby="projetos-titulo"
        >
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">02 / Selected projects</p>
              <h2 id="projetos-titulo">From interfaces to business rules.</h2>
            </div>
            <Link href="/en/projetos">
              Explore all {projects.length} projects ↗
            </Link>
          </div>
          <p className={styles.intro}>
            Scope, decisions and outcomes at each stage. Projects under
            construction and learning exercises are presented with their
            context.
          </p>
          <div className={styles.projectGrid}>
            {featuredProjects
              .filter((project) => project.slug !== 'caminhos-de-mambucaba')
              .map((project) => (
                <ProjectCard locale="en" key={project.slug} project={project} />
              ))}
          </div>
        </section>
        <section className={styles.journey} aria-labelledby="jornada">
          <div>
            <p className="eyebrow">03 / Professional background</p>
            <h2 id="jornada">Experience that goes beyond code.</h2>
            <p>
              My background connects development, IT support, tourism and
              customer service. These perspectives help me ask better questions
              before building a solution.
            </p>
            <Link href="/en/sobre">View full experience ↗</Link>
          </div>
          <ol>
            <li>
              <span>2021–2022 / Technology</span>
              <h3>From support to development.</h3>
              <p>
                User support at Virtua Max and junior front-end work at OSF
                Digital, updating interfaces and catalogs in Salesforce.
              </p>
            </li>
            <li>
              <span>2022–2026 / Business experience</span>
              <h3>Tourism, operations and customer service.</h3>
              <p>
                Travel agency conception, store supervision and customer-facing
                work, including table service.
              </p>
            </li>
            <li>
              <span>Today / Direction</span>
              <h3>Digital products and institutional work.</h3>
              <p>
                Software projects, Software Engineering studies and my role as
                Finance Director at ICPT.
              </p>
            </li>
          </ol>
        </section>
        <section className={styles.stack} aria-labelledby="stack">
          <p className="eyebrow">04 / Skills in practice</p>
          <h2 id="stack">A technical foundation connected to delivery.</h2>
          <ul className={styles.tags}>
            {profile.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <CertificateSection locale="en" />
        <section
          className={styles.contact}
          id="contato"
          aria-labelledby="contato-titulo"
        >
          <div>
            <p className="eyebrow">06 / Let’s talk</p>
            <h2 id="contato-titulo">
              Your next hire could start with a conversation.
            </h2>
            <p>
              Interested in front-end and full-stack development opportunities.
              Explore my projects and get in touch directly.
            </p>
          </div>
          <div className={styles.contactLinks}>
            <a className={styles.email} href={`mailto:${profile.email}`}>
              Talk by email ↗
            </a>
            <a
              href="https://linkedin.com/in/luis-botelho"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://wa.me/5524992772357"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ↗
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
