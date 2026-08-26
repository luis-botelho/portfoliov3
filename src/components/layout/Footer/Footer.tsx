import styles from './Footer.module.scss'
export function Footer() { return <footer className={styles.footer}><span>© {new Date().getFullYear()} Luis Fellype Botelho</span><span>Angra dos Reis, RJ / Brasil</span></footer> }
