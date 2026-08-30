import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getReadme, getReadmeGithubUrl, resolveReadmeUrl, type ReadmeSource } from '@/lib/readme'
import styles from './ReadmeViewer.module.scss'

export async function ReadmeViewer({ source }: { source: ReadmeSource }) {
  const readme = await getReadme(source)
  const githubUrl = getReadmeGithubUrl(source)

  if (!readme) {
    return <a className={styles.fallback} href={githubUrl} target="_blank" rel="noreferrer">Ler README no GitHub</a>
  }

  return (
    <section className={styles.viewer} aria-label="Documentação do repositório">
      <details>
        <summary>Ler documentação completa</summary>
        <div className={styles.file}>
          <header className={styles.fileBar}>
            <strong>README.md</strong>
            <span>{source.branch}</span>
          </header>
          <div className={styles.markdown}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              skipHtml
              urlTransform={(url, key) => resolveReadmeUrl(url, key, source)}
              components={{
                a: ({ href = '', children, ...props }) => {
                  const external = href.startsWith('http://') || href.startsWith('https://')
                  return <a href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...props}>{children}</a>
                },
                table: ({ children, ...props }) => <div className={styles.tableScroll}><table {...props}>{children}</table></div>,
              }}
            >
              {readme}
            </ReactMarkdown>
          </div>
        </div>
      </details>
    </section>
  )
}
