import Link from 'next/link'
import styles from './Header.module.scss'
export function Header() { return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><header className={styles.header}><Link href="/" className={styles.brand}>LUIS BOTELHO<span>.</span></Link><nav aria-label="Navegação principal"><Link href="/#projetos">Projetos</Link><Link href="/#contato">Contato</Link><Link href="https://github.com/luis-botelho" target="_blank" rel="noreferrer">GitHub ↗</Link></nav></header></> }
