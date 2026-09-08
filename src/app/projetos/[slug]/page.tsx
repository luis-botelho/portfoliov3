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
  return {
    title: project?.name ?? 'Projeto',
    description: project?.summary,
    alternates: { canonical: `/projetos/${project?.slug}` },
    openGraph: {
      title: project?.name,
      description: project?.summary,
      url: `/projetos/${project?.slug}`,
      type: 'article',
    },
  }
}
export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const project = getProject((await params).slug)
  if (!project) notFound()
  return (
    <>
      <main id="conteudo" className={styles.main}>
        <header className={styles.hero}>
          <p className="eyebrow">Case study / {project.status}</p>
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
          <div className={styles.links}>
            <a href={project.repository} target="_blank" rel="noreferrer">
              Repositório ↗
            </a>
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
          <CaseSection title="Problema e usuário">
            <p>{project.problem}</p>
          </CaseSection>
          <CaseSection title="Meu papel">
            <p>{project.role}</p>
          </CaseSection>
          <CaseSection title="Escopo entregue">
            <List items={project.scope} />
          </CaseSection>
          <CaseSection title="Restrições">
            <List items={project.constraints} />
          </CaseSection>
          <CaseSection title="Arquitetura e fluxo de dados">
            <p>{project.architecture}</p>
          </CaseSection>
          <CaseSection title="Decisões e trade-offs">
            <p>{project.decisions}</p>
          </CaseSection>
          <CaseSection title="Testes e validações">
            <p>{project.validation}</p>
          </CaseSection>
          <CaseSection title="O que existe hoje">
            <p>{project.currentState}</p>
          </CaseSection>
          <CaseSection title="Limitações conhecidas">
            <List items={project.limitations} />
          </CaseSection>
          <CaseSection title="Próximas etapas">
            <List items={project.nextSteps} />
          </CaseSection>
          <CaseSection title="Formação relacionada">
            {getProjectCertificates(project.slug).length ? (
              <ul>
                {getProjectCertificates(project.slug).map(
                  ({ certificate, reason }) => (
                    <li key={certificate.id}>
                      <Link href={`/certificados#${certificate.id}`}>
                        {certificate.title} ↗
                      </Link>
                      <p>{reason}</p>
                    </li>
                  ),
                )}
              </ul>
            ) : (
              <p>
                Este case ainda não possui uma credencial diretamente
                relacionada no acervo.
              </p>
            )}
          </CaseSection>
          <CaseSection title="Stack">
            <List items={project.stack} />
          </CaseSection>
        </div>
        {project.readme && (
          <Suspense fallback={<p>Carregando documentação do repositório…</p>}>
            <ReadmeViewer source={project.readme} />
          </Suspense>
        )}
      </main>
    </>
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
