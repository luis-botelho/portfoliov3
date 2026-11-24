import { pageMetadata } from '@/lib/i18n'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ReadmeViewer } from '@/components/projects/ReadmeViewer'
import { getProject, projects } from '@/data/projects'
import { getProjectCertificates } from '@/data/certificates'
import Link from 'next/link'
import styles from './page.module.scss'

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
    'pt',
    `/projetos/${project?.slug ?? ''}`,
    project?.name ?? 'Projeto',
    project?.summary ?? 'Projeto não encontrado.',
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
        <p className="eyebrow">Case study / {project.status}</p>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <div className={styles.links}>
          {project.repository && (
            <a href={project.repository} target="_blank" rel="noreferrer">
              Repositório ↗
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo publicada ↗
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
          <CaseSection title="Problema">
            <p>{project.problem}</p>
          </CaseSection>
        )}
        {project.role && (
          <CaseSection title="Meu papel">
            <p>{project.role}</p>
          </CaseSection>
        )}
        {project.scope.length > 0 && (
          <CaseSection title="Escopo">
            <List items={project.scope} />
          </CaseSection>
        )}
        {project.constraints.length > 0 && (
          <CaseSection title="Restrições">
            <List items={project.constraints} />
          </CaseSection>
        )}
        {project.architecture && (
          <CaseSection title="Arquitetura">
            <p>{project.architecture}</p>
          </CaseSection>
        )}
        {project.decisions && (
          <CaseSection title="Decisões">
            <p>{project.decisions}</p>
          </CaseSection>
        )}
        {project.validation && (
          <CaseSection title="Validação">
            <p>{project.validation}</p>
          </CaseSection>
        )}
        {project.currentState && (
          <CaseSection title="Estado atual">
            <p>{project.currentState}</p>
          </CaseSection>
        )}
        {project.limitations.length > 0 && (
          <CaseSection title="Limitações conhecidas">
            <List items={project.limitations} />
          </CaseSection>
        )}
        <CaseSection title="Formação relacionada">
          {certificates.length > 0 ? (
            <ul>
              {certificates.map(({ certificate, reason }) => (
                <li key={certificate.id}>
                  <Link href={`/certificados#${certificate.id}`}>
                    {certificate.title} ↗
                  </Link>
                  <p>{reason}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Sem credencial diretamente relacionada no acervo.</p>
          )}
        </CaseSection>
        {project.stack.length > 0 && (
          <CaseSection title="Stack">
            <List items={project.stack} />
          </CaseSection>
        )}
      </div>
      {project.readme && (
        <Suspense fallback={<p>Carregando documentação do repositório…</p>}>
          <ReadmeViewer source={project.readme} />
        </Suspense>
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
