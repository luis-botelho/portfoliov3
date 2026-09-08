import { languageAlternates } from '@/lib/i18n'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ExperienceTimeline } from '@/components/profile/ExperienceTimeline'
import { profile, institutionalExperience } from '@/data/profile'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Sobre e experiência',
  description:
    'A trajetória de Luis Botelho: desenvolvimento front-end na OSF Digital, suporte de TI, operações e projetos de software.',
  alternates: { canonical: '/sobre', languages: languageAlternates('/sobre') },
  openGraph: { title: 'Sobre Luis Botelho', description: 'Experiência profissional, formação e trajetória de Luis Botelho no desenvolvimento de produtos digitais.', url: '/sobre', type: 'website' },
}
export default function AboutPage() {
  return (
    <>
      <main id="conteudo" className={styles.main}>
        <header className={styles.hero}>
          <p className="eyebrow">Sobre / Experiência e direção</p>
          <h1>Software com contexto de quem já esteve do outro lado.</h1>
          <p>{profile.summary}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href={profile.resume} download>
              Baixar currículo PDF ↓
            </a>
            <Link href="/curriculo">Ver currículo online ↗</Link>
            <a href={`mailto:${profile.email}`}>Conversar por e-mail ↗</a>
          </div>
        </header>
        <section className={styles.story} aria-labelledby="trajetoria-titulo">
          <div>
            <p className="eyebrow">
              Uma trajetória com diferentes perspectivas
            </p>
            <h2 id="trajetoria-titulo">Tecnologia, atendimento e operação.</h2>
          </div>
          <div>
            <p>
              Minha experiência em tecnologia inclui suporte ao usuário na
              Virtua Max, em 2021, e atuação como desenvolvedor front-end júnior
              na OSF Digital, entre janeiro e junho de 2022.
            </p>
            <p>
              Entre junho de 2022 e fevereiro de 2023, tentei estruturar uma
              agência de turismo. A iniciativa encerrou na fase de concepção,
              mas o aprendizado sobre o território e o setor contribuiu para o
              Caminhos de Mambucaba. Nos anos seguintes, também trabalhei em
              operação de loja e atendimento — incluindo atuação como garçom
              entre agosto de 2025 e maio de 2026.
            </p>
            <p>
              Hoje, meu foco está no desenvolvimento de software. No portfólio,
              apresento uma plataforma territorial publicada, aplicações
              full-stack e estudos de engenharia, com escopo e decisões
              documentados.
            </p>
          </div>
        </section>
        <section className={styles.story} aria-labelledby="experiencia-titulo">
          <div>
            <p className="eyebrow">Histórico profissional</p>
            <h2 id="experiencia-titulo">
              Experiências que compõem meu repertório.
            </h2>
            <p>
              Do registro mais recente ao início da trajetória. As duas
              passagens pela KAL aparecem com seus próprios períodos.
            </p>
          </div>
          <ExperienceTimeline />
        </section>
        <section className={styles.story} aria-labelledby="icpt-titulo">
          <div>
            <p className="eyebrow">Atuação institucional atual</p>
            <h2 id="icpt-titulo">
              {institutionalExperience.role} no{' '}
              {institutionalExperience.company}.
            </h2>
          </div>
          <div>
            <p>{institutionalExperience.description}</p>
            <p>
              Uma perspectiva de organização e contexto institucional que se
              soma à minha trajetória em tecnologia e atendimento.
            </p>
          </div>
        </section>
        <section className={styles.story} aria-labelledby="formacao-titulo">
          <div>
            <p className="eyebrow">Formação e prática</p>
            <h2 id="formacao-titulo">Aprendizado aplicado a projetos.</h2>
          </div>
          <div>
            <h3>Engenharia de Software</h3>
            <p>Graduação em andamento.</p>
            <h3>Formação complementar</h3>
            <p>
              Blue EdTech: fundamentos, desenvolvimento web e full-stack. DIO:
              estudos de segurança e boas práticas. O acervo mantém a
              instituição, a data e o escopo de cada credencial.
            </p>
            <Link href="/certificados">Consultar certificados ↗</Link>
          </div>
        </section>
        <section className={styles.contact}>
          <p className="eyebrow">Próxima conversa</p>
          <h2>Vamos falar sobre a sua equipe?</h2>
          <p>
            Interesse em oportunidades de desenvolvimento front-end e
            full-stack.
          </p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </section>
      </main>
    </>
  )
}
