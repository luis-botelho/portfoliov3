import { ArticleSection } from '@/components/articles/ArticleSection'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { featuredProjects } from '@/data/projects'
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
              Luis Fellype Botelho · Desenvolvedor Full-stack Júnior
            </p>
            <h1>Desenvolvedor Full-stack Júnior.</h1>
            <p className={styles.lede}>
              Estudante de Engenharia de Software na Estácio. Atuei como
              front-end júnior na OSF Digital, em suporte de TI e em atendimento,
              vendas B2B e rotina de licitações.
            </p>
            <p className={styles.note}>
              React · TypeScript · Next.js · Node.js · Go · PostgreSQL
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
            <p className="eyebrow">Apresentação</p>
            <p className={styles.monogram} aria-hidden="true">
              LB<span>.</span>
            </p>
            <h2>{profile.shortName}</h2>
            <p>{profile.location}</p>
            <dl>
              <div>
                <dt>Atuação</dt>
                <dd>
                  Desenvolvedor Full-stack Júnior
                  <br />
                  <span>OSF Digital (2022) · suporte de TI (2021)</span>
                </dd>
              </div>
              <div>
                <dt>Formação</dt>
                <dd>
                  Engenharia de Software
                  <br />
                  <span>Estácio · cursando</span>
                </dd>
              </div>
              <div>
                <dt>Idioma</dt>
                <dd>Inglês avançado</dd>
              </div>
            </dl>
            <Link href="/sobre">Ver trajetória ↗</Link>
          </aside>
        </section>
        <section className={styles.spotlight} aria-labelledby="destaque-titulo">
          <div className={styles.spotlightCopy}>
            <p className="eyebrow">01 / Plataforma publicada</p>
            <h2 id="destaque-titulo">Caminhos de Mambucaba.</h2>
            <p className={styles.spotlightLead}>
              Plataforma territorial em produção, com MVP publicado.
            </p>
            <p>
              Concepção, interface, modelagem de conteúdo e implementação
              full-stack. Experiências, mapa, cadastro de iniciativas e demandas
              com protocolo e exportação em texto, JSON e PDF, observatório e
              redirecionamentos do WordPress antigo.
            </p>
            <ul className={styles.tags}>
              <li>Next.js 16 + React 19</li>
              <li>TypeScript</li>
              <li>Supabase/PostgreSQL</li>
              <li>Leaflet</li>
              <li>Vercel</li>
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
              alt="Página inicial publicada do Caminhos de Mambucaba, plataforma territorial com mapa e experiências"
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
              <p className="eyebrow">02 / Projetos</p>
              <h2 id="projetos-titulo">
                Escopo, decisões e status de cada entrega.
              </h2>
            </div>
            <Link href="/projetos">Ver todos os cases ↗</Link>
          </div>
          <p className={styles.intro}>
            MVPs concluídos, uma plataforma em produção e estudos de arquitetura,
            cada um com o que existe e o que não existe.
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
            <p className="eyebrow">03 / Trajetória</p>
            <h2 id="jornada">Tecnologia, operação e atendimento.</h2>
            <p>
              Datas e funções completas estão na página Sobre. Aqui ficam os
              fatos que sustentam cada projeto.
            </p>
            <Link href="/sobre">Ver experiência completa ↗</Link>
          </div>
          <ol>
            <li>
              <span>2021–2022 / Tecnologia</span>
              <h3>Do suporte ao front-end.</h3>
              <p>
                Suporte de 1º nível na Virtua Max e atuação como desenvolvedor
                front-end júnior na OSF Digital, em ambiente Salesforce.
              </p>
            </li>
            <li>
              <span>Território e instituição</span>
              <h3>Caminhos de Mambucaba e ICPT.</h3>
              <p>
                Plataforma publicada, gestão financeira e prestação de contas no
                ICPT, com articulação institucional junto à TurisAngra.
              </p>
            </li>
            <li>
              <span>2018–2026 / Operação e atendimento</span>
              <h3>Loja, salão, vendas B2B e licitações.</h3>
              <p>
                Poupe Mais, Poupe Areal, KAL Atacado 2, Bar do Nelson e licitações
                na Rede Fortaco Angraluz, desde outubro de 2026.
              </p>
            </li>
          </ol>
        </section>
        <section className={styles.stack} aria-labelledby="stack">
          <p className="eyebrow">04 / Competências</p>
          <h2 id="stack">O que posso afirmar.</h2>
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
            <p className="eyebrow">07 / Contato</p>
            <h2 id="contato-titulo">Contato profissional.</h2>
            <p>
              Currículo, projetos, certificados e trajetória disponíveis neste
              site.
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
