import { ArticleSection } from '@/components/articles/ArticleSection'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { featuredProjects, projects } from '@/data/projects'
import { CertificateSection } from '@/components/certificates/CertificateSection'
import { profile } from '@/data/profile'
import styles from './page.module.scss'

export const revalidate = 21600

export default function HomePage() {
  return (
    <>
      <main id="conteudo">
        <section className={styles.hero}>
          <div>
            <p className="eyebrow">
              Luis Fellype Botelho (Luiz Maia) · Desenvolvedor Full-stack
            </p>
            <h1>Construo produtos digitais para problemas reais.</h1>
            <p className={styles.lede}>
              Experiência em desenvolvimento, vivência em
              atendimento e um olhar próximo do negócio. Hoje, transformo esse
              repertório em interfaces, APIs e produtos com propósito.
            </p>
            <p className={styles.note}>
              React · TypeScript · Next.js · Node.js · Go
            </p>
            <div className={styles.actions}>
              <a className={styles.primary} href={profile.resume} download>
                Baixar currículo PDF ↓
              </a>
              <a href="#projetos">Ver projetos ↗</a>
              <a href={`mailto:${profile.email}`}>Entrar em contato ↗</a>
            </div>
          </div>
          <aside
            className={styles.profileCard}
            aria-label="Resumo profissional"
          >
            <p className="eyebrow">Experiência + direção</p>
            <p className={styles.monogram} aria-hidden="true">
              LB<span>.</span>
            </p>
            <h2>{profile.shortName}</h2>
            <p>{profile.location}</p>
            <dl>
              <div>
                <dt>Experiência em tecnologia</dt>
                <dd>
                  Front-end Jr · OSF Digital
                  <br />
                  <span>jan–jun/2022 · ambiente Salesforce</span>
                </dd>
              </div>
              <div>
                <dt>Formação</dt>
                <dd>
                  Engenharia de Software
                  <br />
                  <span>Graduação em andamento</span>
                </dd>
              </div>
              <div>
                <dt>Interesse profissional</dt>
                <dd>Full-stack</dd>
              </div>
            </dl>
            <Link href="/sobre">Conheça minha trajetória ↗</Link>
          </aside>
        </section>
        <section className={styles.spotlight} aria-labelledby="destaque-titulo">
          <div className={styles.spotlightCopy}>
            <p className="eyebrow">01 / Produto publicado</p>
            <h2 id="destaque-titulo">Caminhos de Mambucaba.</h2>
            <p className={styles.spotlightLead}>
              Tecnologia para descobrir um território e aproximar sua
              comunidade.
            </p>
            <p>
              Uma plataforma que reúne experiências, mapas e participação
              comunitária. Desenvolvimento full-stack, da organização do
              conteúdo à persistência dos formulários e publicação.
            </p>
            <ul className={styles.tags}>
              <li>Next.js + React</li>
              <li>TypeScript</li>
              <li>PostgreSQL</li>
            </ul>
            <div className={styles.actions}>
              <Link href="/projetos/caminhos-de-mambucaba">
                Conhecer o case ↗
              </Link>
              <a
                href="https://caminhosdemambucaba.live"
                target="_blank"
                rel="noreferrer"
              >
                Visitar o site ↗
              </a>
            </div>
          </div>
          <figure>
            <Image
              src="/images/projects/mambucaba-live.jpg"
              alt="Página inicial publicada do Caminhos de Mambucaba, plataforma de descoberta territorial"
              width={1440}
              height={1000}
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <figcaption>
              Interface do produto publicado · caminhosdemambucaba.live
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
              <p className="eyebrow">02 / Projetos selecionados</p>
              <h2 id="projetos-titulo">Da interface às regras de negócio.</h2>
            </div>
            <Link href="/projetos">
              Explorar os {projects.length} projetos ↗
            </Link>
          </div>
          <p className={styles.intro}>
            Escopo, decisões e resultados de cada etapa. Produtos em construção
            e estudos aparecem com seu contexto.
          </p>
          <div className={styles.projectGrid}>
            {featuredProjects
              .filter((project) => project.slug !== 'caminhos-de-mambucaba')
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </section>
        <section className={styles.journey} aria-labelledby="jornada">
          <div>
            <p className="eyebrow">03 / Trajetória profissional</p>
            <h2 id="jornada">Experiência que vai além do código.</h2>
            <p>
              Minha trajetória conecta desenvolvimento, suporte de TI, turismo e
              atendimento. São perspectivas que ajudam a fazer perguntas
              melhores antes de construir uma solução.
            </p>
            <Link href="/sobre">Ver experiência completa ↗</Link>
          </div>
          <ol>
            <li>
              <span>2021–2022 / Tecnologia</span>
              <h3>Do suporte ao desenvolvimento.</h3>
              <p>
                Suporte ao usuário na Virtua Max e atuação como front-end júnior
                na OSF Digital, com ajustes de interface e catálogo em
                Salesforce.
              </p>
            </li>
            <li>
              <span>2022–2026 / Repertório de negócio</span>
              <h3>Turismo, operação e atendimento.</h3>
              <p>
                Concepção de uma agência de turismo, experiência como
                encarregado de loja e atendimento ao público, incluindo serviço
                de salão.
              </p>
            </li>
            <li>
              <span>Hoje / Direção</span>
              <h3>Produtos digitais e atuação institucional.</h3>
              <p>
                Projetos de software, estudo de Engenharia de Software e atuação
                como diretor financeiro do ICPT.
              </p>
            </li>
          </ol>
        </section>
        <section className={styles.stack} aria-labelledby="stack">
          <p className="eyebrow">04 / Competências em prática</p>
          <h2 id="stack">Uma base técnica conectada às entregas.</h2>
          <ul className={styles.tags}>
            {profile.skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <ArticleSection />
        <CertificateSection />
        <section
          className={styles.contact}
          id="contato"
          aria-labelledby="contato-titulo"
        >
          <div>
            <p className="eyebrow">07 / Vamos conversar</p>
            <h2 id="contato-titulo">
              Sua próxima contratação pode começar por uma conversa.
            </h2>
            <p>
              Interesse em oportunidades de desenvolvimento full-stack. Conheça meus projetos e entre em contato diretamente.
            </p>
          </div>
          <div className={styles.contactLinks}>
            <a className={styles.email} href={`mailto:${profile.email}`}>
              Conversar por e-mail ↗
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
