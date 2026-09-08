import { getArticles } from '@/lib/articles'
import type { Locale } from '@/lib/i18n'
import styles from './Articles.module.scss'

export async function ArticleSection({ locale = 'pt' }: { locale?: Locale }) {
  const articles = await getArticles()
  const english = locale === 'en'
  const dateFormat = new Intl.DateTimeFormat(english ? 'en-US' : 'pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
  return (
    <section
      id="artigos"
      className={styles.section}
      aria-labelledby="artigos-titulo"
    >
      <p className="eyebrow">
        06 / {english ? 'Writing & learning' : 'Escrita e aprendizado'}
      </p>
      <h2 id="artigos-titulo">{english ? 'Articles' : 'Artigos'}</h2>
      <p className={styles.intro}>
        {english
          ? 'Ideas, decisions and lessons from building software. My latest writing on Dev.to and Medium.'
          : 'Ideias, decisões e aprendizados de quem constrói software. Minhas publicações mais recentes no Dev.to e no Medium.'}
      </p>
      {articles.length ? (
        <div className={styles.grid}>
          {articles.map((article) => (
            <article key={article.url} className={styles.card}>
              <div className={styles.meta}>
                <span className={styles.badge}>{article.platform}</span>
                <time dateTime={article.publishedAt}>
                  {dateFormat.format(new Date(article.publishedAt))}
                </time>
              </div>
              <h3>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </h3>
              <p>
                {article.summary ||
                  (english
                    ? 'Read the article on the original platform.'
                    : 'Leia o artigo na plataforma original.')}
              </p>
              {article.tags.length > 0 && (
                <ul className={styles.tags}>
                  {article.tags.map((tag) => (
                    <li key={tag}>#{tag}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p>
          {english
            ? 'No articles available right now. You can explore my publications directly below.'
            : 'Nenhum artigo disponível no momento. Você pode conferir minhas publicações diretamente abaixo.'}
        </p>
      )}
      <div className={styles.profiles}>
        <a
          href="https://dev.to/luisbotelho"
          target="_blank"
          rel="noopener noreferrer"
        >
          {english ? 'All on Dev.to' : 'Todos no Dev.to'} ↗
        </a>
        <a
          href="https://medium.com/@luisfellypebotelho"
          target="_blank"
          rel="noopener noreferrer"
        >
          {english ? 'All on Medium' : 'Todos no Medium'} ↗
        </a>
      </div>
    </section>
  )
}
