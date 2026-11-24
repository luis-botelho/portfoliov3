import { pageMetadata } from '@/lib/i18n'
import Link from 'next/link'
import { ExperienceTimeline } from '@/components/profile/ExperienceTimeline'
import { profile } from '@/data/profile'
import { curriculo } from '@/content/curriculo'
import styles from './page.module.scss'

export const metadata = pageMetadata(
  'pt',
  '/sobre',
  'Sobre e experiência | Luis Fellype Botelho',
  'Trajetória de Luis Fellype Botelho: Engenharia de Software na Estácio, OSF Digital, suporte de TI, atendimento, vendas B2B e licitações.',
)

export default function AboutPage() {
  const [icpt, osf, virtua] = curriculo.experience

  return (
    <main id="conteudo" className={styles.main}>
      <header className={styles.hero}>
        <p className="eyebrow">Sobre / Trajetória</p>
        <h1>Tecnologia com contexto de operação e atendimento.</h1>
        <p>{curriculo.summary.pt}</p>
        <div className={styles.actions}>
          <a className={styles.primary} href={profile.resume} download>
            Baixar currículo PDF ↓
          </a>
          <Link href="/curriculo">Ver currículo online ↗</Link>
          <a href={`mailto:${profile.email}`}>Conversar por e-mail ↗</a>
        </div>
      </header>
      <section className={styles.story} aria-labelledby="tecnologia-titulo">
        <div>
          <p className="eyebrow">Experiência em tecnologia</p>
          <h2 id="tecnologia-titulo">O que já fiz com software.</h2>
        </div>
        <div className={styles.entries}>
          {[icpt, osf, virtua].map((item) => (
            <article key={item.company} className={styles.entry}>
              <p className={styles.meta}>
                {item.period.pt} · {item.location.pt}
              </p>
              <h3>
                {item.role.pt} — {item.company}
              </h3>
              <ul>
                {item.bullets.pt.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.story} aria-labelledby="licitacoes-titulo">
        <div>
          <p className="eyebrow">Licitações</p>
          <h2 id="licitacoes-titulo">Rede Fortaco Angraluz.</h2>
        </div>
        <div>
          <p className={styles.meta}>desde out/2026 · Angra dos Reis</p>
          <p>
            Ciclo completo: procuro editais, leio e analiso as exigências, monto
            pasta padronizada com edital, planilha de cotação, provas de preço
            para exequibilidade, documentos e anexos assinados, participo do
            pregão e acompanho a entrega da mercadoria. Vendemos materiais de
            construção a prefeituras.
          </p>
        </div>
      </section>
      <section className={styles.story} aria-labelledby="experiencia-titulo">
        <div>
          <p className="eyebrow">Histórico profissional</p>
          <h2 id="experiencia-titulo">
            Atendimento, operação e empreendedorismo.
          </h2>
          <p>
            Do registro mais recente ao início da trajetória. As duas passagens
            pela KAL aparecem com seus próprios períodos, e a tentativa de
            agência de turismo aparece como concepção, não como operação.
          </p>
        </div>
        <ExperienceTimeline />
      </section>
      <section className={styles.story} aria-labelledby="formacao-titulo">
        <div>
          <p className="eyebrow">Formação</p>
          <h2 id="formacao-titulo">Estudo e prática.</h2>
        </div>
        <div className={styles.entries}>
          {curriculo.education.pt.map((item) => (
            <article key={item.title} className={styles.entry}>
              <h3>{item.title}</h3>
              {item.detail && <p>{item.detail}</p>}
            </article>
          ))}
          <Link href="/certificados">Consultar certificados ↗</Link>
        </div>
      </section>
      <section className={styles.contact}>
        <p className="eyebrow">Contato</p>
        <h2>Contato profissional.</h2>
        <p>Currículo, projetos e trajetória disponíveis neste site.</p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </section>
    </main>
  )
}
