import styles from './Footer.module.scss'
export function Footer({ english = false }: { english?: boolean }) {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Luis Fellype Botelho</span>
      <span>
        {english
          ? 'Angra dos Reis, RJ / Brazil'
          : 'Angra dos Reis, RJ / Brasil'}
      </span>
      <a
        href="https://github.com/luis-botelho"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>
      <a
        href="https://linkedin.com/in/luis-botelho"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>
    </footer>
  )
}
