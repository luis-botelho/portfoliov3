import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { englishProjects as projects } from '@/data/projects.en'
import { englishStatus, pageMetadata } from '@/lib/i18n'
import { getProjectCertificates } from '@/data/certificates'
import { englishCertificates, englishRelations } from '@/data/certificates.en'
import Link from 'next/link'
import styles from '@/app/(pt)/projetos/[slug]/page.module.scss'

const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug)

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const project = getProject((await params).slug)
  return pageMetadata(
    'en',
    `/projetos/${project?.slug ?? ''}`,
    `${project?.name ?? 'Project'} | Luis Fellype Botelho`,
    project?.summary ?? 'Project not found.',
  )
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const project = getProject((await params).slug)
  if (!project) notFound()
  const certificates = getProjectCertificates(project.slug)

  return (
    <main id="conteudo" className={styles.main}>
      <header className={styles.hero}>
        <p className="eyebrow">Case study / {englishStatus[project.status]}</p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <div className={styles.links}>
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noreferrer">
              Repository ↗
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Published demo ↗
            </a>
          )}
        </div>
      </header>
      {project.cover && (
        <figure className={styles.cover}>
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={1600}
            height={900}
            sizes="(max-width: 650px) 100vw, 1180px"
          />
          <figcaption>{project.cover.caption}</figcaption>
        </figure>
      )}
      <div className={styles.content}>
        {project.problem && (
          <CaseSection title="Problem">
            <p>{project.problem}</p>
          </CaseSection>
        )}
        {project.role && (
          <CaseSection title="My role">
            <p>{project.role}</p>
          </CaseSection>
        )}
        {project.scope.length > 0 && (
          <CaseSection title="Scope">
            <List items={project.scope} />
          </CaseSection>
        )}
        {project.constraints.length > 0 && (
          <CaseSection title="Constraints">
            <List items={project.constraints} />
          </CaseSection>
        )}
        {project.architecture && (
          <CaseSection title="Architecture">
            <p>{project.architecture}</p>
          </CaseSection>
        )}
        {project.decisions && (
          <CaseSection title="Decisions">
            <p>{project.decisions}</p>
          </CaseSection>
        )}
        {project.validation && (
          <CaseSection title="Validation">
            <p>{project.validation}</p>
          </CaseSection>
        )}
        {project.currentState && (
          <CaseSection title="Current state">
            <p>{project.currentState}</p>
          </CaseSection>
        )}
        {project.limitations.length > 0 && (
          <CaseSection title="Known limitations">
            <List items={project.limitations} />
          </CaseSection>
        )}
        <CaseSection title="Related training">
          {certificates.length > 0 ? (
            <ul>
              {certificates.map(({ certificate }) => (
                <li key={certificate.id}>
                  <Link href={`/en/certificados#${certificate.id}`}>
                    {englishCertificates[certificate.id].title} ↗
                  </Link>
                  <p>
                    {englishRelations[`${certificate.id}:${project.slug}`]}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No directly related credential in the catalog.</p>
          )}
        </CaseSection>
        {project.stack.length > 0 && (
          <CaseSection title="Stack">
            <List items={project.stack} />
          </CaseSection>
        )}
      </div>
      {project.readme && (
        <section className={styles.section}>
          <h2>Repository documentation</h2>
          <a
            href={`https://github.com/${project.readme.repository}/blob/${project.readme.branch}/${project.readme.path}`}
            target="_blank"
            rel="noreferrer"
          >
            Read the original README ↗
          </a>
        </section>
      )}
    </main>
  )
}

function CaseSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
