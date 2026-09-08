'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { localizedPath } from '@/lib/i18n'
import styles from './Header.module.scss'
export function Header() {
  const pathname = usePathname()
  const english = pathname === '/en' || pathname.startsWith('/en/')
  const locale = english ? 'en' : 'pt'
  const path = english ? pathname.slice(3) || '/' : pathname
  return (
    <>
      <a className="skip-link" href="#conteudo">
        {english ? 'Skip to content' : 'Pular para o conteúdo'}
      </a>
      <header className={styles.header}>
        <Link href={localizedPath(locale, '/')} className={styles.brand}>
          LUIS BOTELHO<span>.</span>
        </Link>
        <nav aria-label={english ? 'Main navigation' : 'Navegação principal'}>
          <Link href={localizedPath(locale, '/#projetos')}>
            {english ? 'Projects' : 'Projetos'}
          </Link>
          <Link href={localizedPath(locale, '/sobre')}>
            {english ? 'About' : 'Sobre'}
          </Link>
          <Link href={localizedPath(locale, '/certificados')}>
            {english ? 'Certificates' : 'Certificados'}
          </Link>
          <Link href={localizedPath(locale, '/#artigos')}>
            {english ? 'Articles' : 'Artigos'}
          </Link>
          <Link href={localizedPath(locale, '/#contato')}>
            {english ? 'Contact' : 'Contato'}
          </Link>
          <a
            href={`/cv/luis-botelho-${english ? 'resume-en' : 'curriculo'}.pdf`}
            download
          >
            {english ? 'Resume PDF ↓' : 'Currículo PDF ↓'}
          </a>
        </nav>
        <nav
          aria-label={english ? 'Language' : 'Idioma'}
          className={styles.languages}
        >
          <Link
            href={path}
            hrefLang="pt-BR"
            lang="pt-BR"
            aria-current={!english ? 'page' : undefined}
          >
            Português
          </Link>
          <Link
            href={localizedPath('en', path)}
            hrefLang="en"
            lang="en"
            aria-current={english ? 'page' : undefined}
          >
            English
          </Link>
        </nav>
      </header>
    </>
  )
}
