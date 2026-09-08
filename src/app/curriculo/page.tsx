import type { Metadata } from 'next'
import Link from 'next/link'
import { profile, experience, institutionalExperience } from '@/data/profile'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Currículo',
  description:
    'Currículo profissional de Luis Botelho, desenvolvedor front-end e full-stack.',
  alternates: { canonical: '/curriculo' },
  openGraph: { title: 'Currículo de Luis Botelho', description: 'Currículo de Luis Botelho: experiência front-end, formação e projetos. Versão online e PDF para download.', url: '/curriculo', type: 'website' },
}
export default function ResumePage() {
  return (
    <main id="conteudo" className={styles.main}>
      <nav className={styles.tools} aria-label="Ações do currículo">
        <Link href="/sobre">← Voltar ao portfólio</Link>
        <a href={profile.resume} download>
          Baixar PDF ↓
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
            <a href={profile.site}>portfoliov3-zeta-eight.vercel.app</a>
          </p>
        </header>
        <section>
          <h2>Perfil profissional</h2>
          <p>{profile.summary}</p>
        </section>
        <section>
          <h2>Experiência em tecnologia</h2>
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
          <h2>Projetos selecionados</h2>
          <div className={styles.entry}>
            <h3>Caminhos de Mambucaba · plataforma publicada</h3>
            <p>
              Desenvolvimento full-stack de experiências, mapas e formulários de
              participação comunitária. Next.js, React, TypeScript e
              PostgreSQL/Supabase.
            </p>
            <a href="https://caminhosdemambucaba.live">
              caminhosdemambucaba.live
            </a>{' '}
            ·{' '}
            <a href="https://github.com/luis-botelho/instituto-platform">
              Código no GitHub
            </a>
          </div>
          <div className={styles.entry}>
            <h3>Mini Kanban Veritas · MVP full-stack</h3>
            <p>
              CRUD de tarefas, API REST em Go/Chi, interface React/TypeScript e
              Docker. Dados em memória, testes de backend e alternativa de
              teclado ao drag-and-drop.
            </p>
            <a href="https://github.com/luis-botelho/desafio-fullstack-veritas">
              github.com/luis-botelho/desafio-fullstack-veritas
            </a>
          </div>
        </section>
        <section>
          <h2>Experiências em negócio e atendimento</h2>
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
          <h2>Atuação institucional</h2>
          <p>
            <strong>
              {institutionalExperience.role} · {institutionalExperience.company}
            </strong>{' '}
            · Atuação atual, formalizada por ata de posse.
          </p>
        </section>
        <section>
          <h2>Formação</h2>
          <p>
            <strong>Engenharia de Software</strong> · Graduação em andamento.
          </p>
          <p>
            <strong>Blue EdTech</strong> · Formação complementar em programação,
            web e full-stack (2021). <strong>DIO</strong> · Segurança e boas
            práticas (2026).
          </p>
          <a href={`${profile.site}/certificados`}>
            Certificados e documentos:
            portfoliov3-zeta-eight.vercel.app/certificados
          </a>
        </section>
        <section>
          <h2>Competências presentes nos projetos</h2>
          <p>{profile.skills.join(' · ')}</p>
        </section>
      </article>
    </main>
  )
}
