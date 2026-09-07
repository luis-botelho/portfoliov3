'use client'

import { useState, type ReactNode } from 'react'
import { certificates, certificateRelations } from '@/data/certificates'
import styles from './Certificates.module.scss'

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
export function CertificateExplorer({ cards }: { cards: Record<string, ReactNode> }) {
  const [query, setQuery] = useState('')
  const [issuer, setIssuer] = useState('Todos')
  const [relatedOnly, setRelatedOnly] = useState(false)
  const filtered = certificates.filter(
    (item) =>
      (issuer === 'Todos' || item.issuer === issuer) &&
      normalize(
        [item.title, item.issuer, ...item.technologies].join(' '),
      ).includes(normalize(query.trim())) &&
      (!relatedOnly ||
        certificateRelations.some(
          (relation) => relation.certificateId === item.id,
        )),
  )
  return (
    <>
      <div className={styles.filters}>
        <label>
          Buscar formação ou tecnologia
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="React, segurança, lógica…"
          />
        </label>
        <label>
          Instituição
          <select
            value={issuer}
            onChange={(event) => setIssuer(event.target.value)}
          >
            {['Todos', 'Blue EdTech', 'DIO', 'Growdev'].map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={relatedOnly}
            onChange={(event) => setRelatedOnly(event.target.checked)}
          />
          Com projetos relacionados
        </label>
      </div>
      <p className={styles.count} role="status">
        {filtered.length} de {certificates.length} certificados · mais recentes
        primeiro
      </p>
      <div className={styles.grid}>
        {filtered.map((certificate) => (
          <div key={certificate.id} className={styles.result}>{cards[certificate.id]}</div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className={styles.empty}>
          <h2>Nenhum certificado encontrado.</h2>
          <p>Tente outra tecnologia ou remova os filtros.</p>
          <button
            onClick={() => {
              setQuery('')
              setIssuer('Todos')
              setRelatedOnly(false)
            }}
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  )
}
