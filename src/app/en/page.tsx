import { ArticleSection } from '@/components/articles/ArticleSection'
import { pageMetadata } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { englishFeaturedProjects as featuredProjects } from '@/data/projects.en'
import { CertificateSection } from '@/components/certificates/CertificateSection'
import { englishProfile as profile } from '@/data/profile.en'
import styles from '@/app/(pt)/page.module.scss'

export const metadata = pageMetadata(
  'en',
  '/',
  'Luis Fellype Botelho | Junior Full-stack Developer',
  'Junior full-stack developer and Software Engineering student. Projects, certificates, background and resume.'
)
export const revalidate = 21600

export default function HomePage() {
  return (
    <>
      <main id="conteudo">
        <section className={styles.hero}>
          <div>
            <p className="eyebrow">
              Luis Fellype Botelho · Junior Full-stack Developer
            </p>
            <h1>Junior Full-stack Developer.</h1>
            <p className={styles.lede}>
              Software Engineering student at Estácio. Worked as a junior
              front-end developer at OSF Digital, in IT support, and in customer
              service, B2B sales and public tender routines.
            </p>
            <p className={styles.note}>
              React · TypeScript · Next.js · Node.js · Go · PostgreSQL
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
            <p className="eyebrow">Introduction</p>
            <p className={styles.monogram} aria-hidden="true">
              LB<span>.</span>
            </p>
            <h2>{profile.shortName}</h2>
            <p>{profile.location}</p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>
                  Junior Full-stack Developer
                  <br />
                  <span>OSF Digital (2022) · IT support (2021)</span>
                </dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  Software Engineering
                  <br />
                  <span>Estácio · in progress</span>
                </dd>
              </div>
              <div>
                <dt>Language</dt>
                <dd>Advanced English</dd>
              </div>
            </dl>
            <Link href="/en/sobre">Explore my background ↗</Link>
          </aside>
        </section>
        <section className={styles.spotlight} aria-labelledby="destaque-titulo">
          <div className={styles.spotlightCopy}>
            <p className="eyebrow">01 / Published platform</p>
            <h2 id="destaque-titulo">Caminhos de Mambucaba.</h2>
            <p className={styles.spotlightLead}>
              Territorial platform in production, with a published MVP.
            </p>
            <p>
              Concept, interface, content modeling and full-stack implementation.
              Experiences, a map, registration of initiatives and requests with
              protocol and export to text, JSON and PDF, an observatory and
              redirects from the previous WordPress site.
            </p>
            <ul className={styles.tags}>
              <li>Next.js 16 + React 19</li>
              <li>TypeScript</li>
              <li>Supabase/PostgreSQL</li>
              <li>Leaflet</li>
              <li>Vercel</li>
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
              alt="Published homepage of Caminhos de Mambucaba, a territorial platform with a map and local experiences"
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
              <p className="eyebrow">02 / Projects</p>
              <h2 id="projetos-titulo">Scope, decisions and honest status.</h2>
            </div>
            <Link href="/en/projetos">View all case studies ↗</Link>
          </div>
          <p className={styles.intro}>
            Completed MVPs, one platform in production and architecture studies,
            each with what exists and what does not.
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
            <p className="eyebrow">03 / Background</p>
            <h2 id="jornada">Technology, operations and customer service.</h2>
            <p>
              Full dates and roles are on the About page. Here are the facts that
              support each project.
            </p>
            <Link href="/en/sobre">View full experience ↗</Link>
          </div>
          <ol>
            <li>
              <span>2021–2022 / Technology</span>
              <h3>From support to front-end.</h3>
              <p>
                First-level support at Virtua Max and junior front-end work at
                OSF Digital in a Salesforce environment.
              </p>
            </li>
            <li>
              <span>Territory and institution</span>
              <h3>Caminhos de Mambucaba and ICPT.</h3>
              <p>
                Published platform, financial management and accountability at
                ICPT, with institutional coordination with TurisAngra.
              </p>
            </li>
            <li>
              <span>2018–2026 / Operations and service</span>
              <h3>Stores, table service, B2B sales and tenders.</h3>
              <p>
                Poupe Mais, Poupe Areal, KAL Atacado 2, Bar do Nelson and public
                tenders at Rede Fortaco Angraluz since October 2026.
              </p>
            </li>
          </ol>
        </section>
        <section className={styles.stack} aria-labelledby="stack">
          <p className="eyebrow">04 / Skills</p>
          <h2 id="stack">What I can state.</h2>
          <ul className={styles.tags}>
            {profile.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <ArticleSection locale="en" />
        <CertificateSection locale="en" />
        <section
          className={styles.contact}
          id="contato"
          aria-labelledby="contato-titulo"
        >
          <div>
            <p className="eyebrow">07 / Contact</p>
            <h2 id="contato-titulo">Professional contact.</h2>
            <p>
              Resume, projects, certificates and background are available on this
              site.
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
