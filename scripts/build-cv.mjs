import { existsSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import {
  AlignmentType,
  Document,
  LevelFormat,
  Packer,
  Paragraph,
  TextRun,
  convertMillimetersToTwip,
} from 'docx'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const data = JSON.parse(
  readFileSync(join(root, 'src/content/curriculo.json'), 'utf8'),
)
const outDir = join(root, 'public/cv')
mkdirSync(outDir, { recursive: true })

const BLACK = '000000'
const BODY = 24 // 12pt, em meio-pontos
const TITLE = 28 // 14pt
const NAME = 36 // 18pt

const bulletId = 'cv-bullets'

function findSoffice() {
  const candidates = [
    'soffice',
    'C:\\Program Files\\LibreOffice\\program\\soffice.exe',
    'C:\\Program Files (x86)\\LibreOffice\\program\\soffice.exe',
    '/usr/bin/soffice',
    '/Applications/LibreOffice.app/Contents/MacOS/soffice',
  ]
  return candidates.find((candidate) => {
    if (candidate === 'soffice') {
      const probe = spawnSync('where', ['soffice'], { encoding: 'utf8' })
      return probe.status === 0
    }
    return existsSync(candidate)
  })
}

function run(text, options = {}) {
  return new Paragraph({
    spacing: { after: 80, line: 260 },
    alignment: options.alignment,
    children: [
      new TextRun({
        text,
        bold: options.bold ?? false,
        size: options.size ?? BODY,
        color: BLACK,
        font: 'Calibri',
        break: options.break ?? 0,
      }),
    ],
  })
}

function heading(text) {
  return new Paragraph({
    spacing: { before: 200, after: 80 },
    border: { bottom: { color: BLACK, size: 4, space: 2, style: 'single' } },
    children: [
      new TextRun({ text, bold: true, size: TITLE, color: BLACK, font: 'Calibri' }),
    ],
  })
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: bulletId, level: 0 },
    spacing: { after: 40, line: 260 },
    children: [new TextRun({ text, size: BODY, color: BLACK, font: 'Calibri' })],
  })
}

function entry({ title, subtitle, period, location, bullets: items = [] }) {
  return [
    run(`${title}${subtitle ? ` — ${subtitle}` : ''}`, { bold: true, break: 0 }),
    run([period, location].filter(Boolean).join(' · '), { size: BODY }),
    ...items.map(bullet),
  ]
}

function buildDocument(locale) {
  const id = data.identity
  const contacts = [
    id.contacts.phone,
    id.contacts.email,
    id.contacts.city[locale],
    id.contacts.linkedin,
    id.contacts.github,
    id.contacts.site,
  ].join(' | ')

  const blocks = [
    run(id.name, { bold: true, size: NAME, alignment: AlignmentType.CENTER }),
    run(id.tagline[locale], { bold: true, alignment: AlignmentType.CENTER }),
    run(contacts, { alignment: AlignmentType.CENTER }),
    heading(locale === 'pt' ? 'Resumo' : 'Summary'),
    run(data.summary[locale]),

    heading(locale === 'pt' ? 'Experiência em tecnologia' : 'Technology experience'),
    ...data.experience.flatMap((item) =>
      entry({
        title: item.company,
        subtitle: item.role[locale],
        period: item.period[locale],
        location: item.location[locale],
        bullets: item.bullets[locale],
      }),
    ),

    heading(locale === 'pt' ? 'Projetos' : 'Projects'),
    ...data.projects.flatMap((project) =>
      entry({
        title: project.name,
        subtitle: project.status[locale],
        bullets: project.bullets[locale],
      }),
    ),

    heading(locale === 'pt' ? 'Competências' : 'Skills'),
    ...data.skills[locale].flatMap((group) => [
      run(`${group.group}: ${group.items.join(', ')}`, { bold: false }),
    ]),

    heading(locale === 'pt' ? 'Formação' : 'Education'),
    ...data.education[locale].flatMap((item) =>
      entry({ title: item.title, bullets: item.detail ? [item.detail] : [] }),
    ),

    heading(locale === 'pt' ? 'Outras experiências' : 'Other experience'),
    ...data.other[locale].flatMap((item) =>
      entry({ title: item.title, bullets: item.bullets }),
    ),
  ]

  return new Document({
    creator: id.name,
    title: id.tagline[locale],
    description: data.summary[locale],
    styles: {
      default: {
        document: {
          run: { font: 'Calibri', size: BODY, color: BLACK },
          paragraph: { spacing: { after: 80, line: 260 } },
        },
      },
    },
    numbering: {
      config: [
        {
          reference: bulletId,
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: '•',
              alignment: AlignmentType.LEFT,
              style: {
                run: { font: 'Calibri', size: BODY, color: BLACK },
                paragraph: { indent: { left: 360, hanging: 180 } },
              },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: {
              width: convertMillimetersToTwip(210),
              height: convertMillimetersToTwip(297),
            },
            margin: {
              top: convertMillimetersToTwip(16),
              right: convertMillimetersToTwip(16),
              bottom: convertMillimetersToTwip(16),
              left: convertMillimetersToTwip(16),
            },
          },
        },
        children: blocks,
      },
    ],
  })
}

const files = [
  { locale: 'pt', docx: 'luis-botelho-curriculo.docx' },
  { locale: 'en', docx: 'luis-botelho-resume.docx' },
]

for (const file of files) {
  const buffer = await Packer.toBuffer(buildDocument(file.locale))
  const target = join(outDir, file.docx)
  const { writeFileSync } = await import('node:fs')
  writeFileSync(target, buffer)
  console.log(`DOCX: ${target}`)
}

const soffice = findSoffice()
if (!soffice) {
  throw new Error(
    'soffice não encontrado. Instale o LibreOffice para converter os DOCX em PDF.',
  )
}

for (const file of files) {
  const result = spawnSync(
    soffice,
    [
      '--headless',
      '--convert-to',
      'pdf',
      '--outdir',
      outDir,
      join(outDir, file.docx),
    ],
    { encoding: 'utf8' },
  )
  if (result.status !== 0) {
    throw new Error(
      `Falha ao converter ${file.docx}: ${result.stdout || result.stderr || result.error}`,
    )
  }
  const pdf = join(outDir, file.docx.replace(/\.docx$/, '.pdf'))
  if (!existsSync(pdf)) {
    throw new Error(`PDF não gerado: ${pdf}`)
  }
  console.log(`PDF:  ${pdf}`)
}
