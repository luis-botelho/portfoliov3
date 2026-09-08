import { expect, test } from 'vitest'
import { projects } from './projects'
import { englishProjects } from './projects.en'
import { certificates, certificateRelations } from './certificates'
import { englishCertificates, englishRelations } from './certificates.en'

test('English covers every project and credential without changing evidence or delivery status', () => {
  expect(englishProjects.map(item => item.slug)).toEqual(projects.map(item => item.slug))
  for (const [index, item] of englishProjects.entries()) {
    expect(item.status).toBe(projects[index].status)
    expect(item.repository).toBe(projects[index].repository)
    expect(item.summary).not.toBe(projects[index].summary)
  }
  for (const certificate of certificates) {
    expect(englishCertificates[certificate.id]?.title).toBeTruthy()
    expect(englishCertificates[certificate.id]?.description).toBeTruthy()
  }
  for (const relation of certificateRelations) {
    expect(englishRelations[`${relation.certificateId}:${relation.projectSlug}`]).toBeTruthy()
  }
})
