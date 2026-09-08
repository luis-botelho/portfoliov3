'use client'

import { useState, type ReactNode } from 'react'
import { certificates, certificateRelations } from '@/data/certificates'
import styles from './Certificates.module.scss'
import { englishCertificates } from '@/data/certificates.en'
import { englishUI } from '@/lib/ui-translations'
import { type Locale } from '@/lib/i18n'

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
export function CertificateExplorer({
  cards,
  locale = 'pt',
}: {
  locale?: Locale
  cards: Record<string, ReactNode>
}) {
  const english = locale === 'en'
  const t = (text: string) => (english ? (englishUI[text] ?? text) : text)
  const [order, setOrder] = useState('relevance')
  const [query, setQuery] = useState('')
  const [issuer, setIssuer] = useState('Todos')
  const [relatedOnly, setRelatedOnly] = useState(false)
  const filtered = certificates.filter(
    (item) =>
      (issuer === 'Todos' || item.issuer === issuer) &&
      normalize(
        [
          item.title,
          english ? englishCertificates[item.id].title : '',
          item.issuer,
          ...item.technologies,
        ].join(' '),
      ).includes(normalize(query.trim())) &&
      (!relatedOnly ||
        certificateRelations.some(
          (relation) => relation.certificateId === item.id,
        )),
  )
  const priorities = [
    'blue-2021-frontend-final',
    'blue-2021-backend-final',
    'blue-2021-frontend-tasks',
    'dio-TOA8DRBH',
    'dio-I5UOYPLM',
  ]
  filtered.sort((a, b) => {
    if (order === 'recent') return b.date.localeCompare(a.date)
    const rank = (id: string) =>
      priorities.includes(id) ? priorities.indexOf(id) : priorities.length
    return (
      rank(a.id) - rank(b.id) ||
      Number(b.highlight) - Number(a.highlight) ||
      b.date.localeCompare(a.date)
    )
  })
  return (
    <>
      <div className={styles.filters}>
        <label>
          {t('Buscar formação ou tecnologia')}
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              english ? 'React, security, logic…' : 'React, segurança, lógica…'
            }
          />
        </label>
        <label htmlFor="certificate-issuer">
          {t('Instituição')}
          <select
            id="certificate-issuer"
            value={issuer}
            onChange={(event) => setIssuer(event.target.value)}
          >
            {['Todos', 'Blue EdTech', 'DIO', 'Growdev'].map((value) => (
              <option key={value} value={value}>
                {t(value)}
              </option>
            ))}
          </select>
        </label>
        <label>
          {t('Ordenar por')}
          <select
            value={order}
            onChange={(event) => setOrder(event.target.value)}
          >
            <option value="relevance">{t('Destaques da formação')}</option>
            <option value="recent">{t('Mais recentes')}</option>
          </select>
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={relatedOnly}
            onChange={(event) => setRelatedOnly(event.target.checked)}
          />
          {t('Com projetos relacionados')}
        </label>
      </div>
      <p className={styles.count} role="status">
        {filtered.length} {english ? 'of' : 'de'} {certificates.length}{' '}
        {english ? 'certificates' : 'certificados'} ·{' '}
        {order === 'recent'
          ? english
            ? 'most recent first'
            : 'mais recentes primeiro'
          : english
            ? 'training highlights first'
            : 'destaques da formação primeiro'}{' '}
        {english ? 'in each group' : 'em cada grupo'}
      </p>
      {[false, true].map((introductory) => {
        const group = filtered.filter(
          (certificate) => certificate.introductory === introductory,
        )
        return (
          group.length > 0 && (
            <section
              key={String(introductory)}
              aria-label={
                introductory
                  ? t('Conteúdos introdutórios')
                  : t('Formação técnica e projetos')
              }
            >
              <h2 className={styles.catalogTitle}>
                {introductory
                  ? t('Conteúdos introdutórios')
                  : t('Formação técnica e projetos')}{' '}
                <span>({group.length})</span>
              </h2>
              {introductory && (
                <p className={styles.count}>
                  {t(
                    'Introduções e boas-vindas. Estas credenciais não representam a conclusão integral dos bootcamps.',
                  )}
                </p>
              )}
              <div className={styles.grid}>
                {group.map((certificate) => (
                  <div key={certificate.id} className={styles.result}>
                    {cards[certificate.id]}
                  </div>
                ))}
              </div>
            </section>
          )
        )
      })}
      {filtered.length === 0 && (
        <div className={styles.empty}>
          <h2>{t('Nenhum certificado encontrado.')}</h2>
          <p>{t('Tente outra tecnologia ou remova os filtros.')}</p>
          <button
            onClick={() => {
              setQuery('')
              setIssuer('Todos')
              setRelatedOnly(false)
            }}
          >
            {t('Limpar filtros')}
          </button>
        </div>
      )}
    </>
  )
}
