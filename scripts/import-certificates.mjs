import { readFileSync, mkdirSync, copyFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import path from 'node:path'

const source = 'luis-botelho-certificados-portfolio-v1'
const original = JSON.parse(readFileSync(`${source}/portfolio-data.json`, 'utf8'))
const extra = JSON.parse(readFileSync(`${source}/certificados-part2/manifest.json`, 'utf8')).credentials
const entries = [...original, ...extra.map(item => ({ ...item, id: 'blue-2021-ficcao-interativa', type: 'highlight', technologies: [], file: `certificados-part2/${item.file}` }))]
const certificates = entries.filter(item => item.recommendedForPortfolio).map(item => {
  let url = item.publicUrl
  if (item.file) {
    const file = readFileSync(path.join(source, item.file))
    if (createHash('sha256').update(file).digest('hex') !== item.sha256) throw new Error(`Hash inválido: ${item.id}`)
    const destination = `public/certificates/${item.issuer === 'Blue EdTech' ? 'blue-edtech' : 'other'}/${path.basename(item.file)}`
    mkdirSync(path.dirname(destination), { recursive: true })
    copyFileSync(path.join(source, item.file), destination)
    url = destination.replace('public', '')
  }
  return { id: item.id, issuer: item.issuer, title: item.title.replace('Projeto 06 | Jogo de Ficção Interativa | Turma 03/2021', 'Jogo de Ficção Interativa — Aluno Destaque'), date: item.date, hours: item.hours ?? null, technologies: item.technologies, highlight: item.type === 'highlight', introductory: /Introdução|Boas.?Vindas/i.test(item.title), url, format: item.file ? 'PDF' : 'Credencial', sha256: item.sha256 ?? null }
}).sort((a,b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, 'pt-BR'))
writeFileSync('src/data/certificates.json', JSON.stringify(certificates, null, 2) + '\n')
console.log(`${certificates.length} certificados importados e PDFs verificados por SHA-256.`)
