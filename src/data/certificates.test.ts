import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { certificates, certificateRelations } from './certificates'
import { getProject } from './projects'

describe('public credential catalog', () => {
  it('publishes unique credentials and original PDFs with matching hashes', () => {
    expect(new Set(certificates.map(item => item.id)).size).toBe(certificates.length)
    for (const certificate of certificates) {
      if (certificate.format === 'PDF') {
        const pdf = readFileSync(`public${certificate.url}`)
        expect(pdf.subarray(0, 5).toString()).toBe('%PDF-')
        expect(createHash('sha256').update(pdf).digest('hex')).toBe(certificate.sha256)
      } else {
        expect(new URL(certificate.url).protocol).toBe('https:')
      }
    }
    expect(certificates.some(item => item.url.includes('nome-luiz-gama'))).toBe(false)
  })
  it('has no dangling project or certificate relations', () => {
    for (const relation of certificateRelations) {
      expect(getProject(relation.projectSlug)).toBeDefined()
      expect(certificates.find(item => item.id === relation.certificateId)).toBeDefined()
      expect(relation.reason.length).toBeGreaterThan(20)
    }
  })
})
