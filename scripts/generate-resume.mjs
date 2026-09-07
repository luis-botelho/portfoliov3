import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

// Usa a mesma página e os mesmos dados exibidos no currículo online.
const base = process.env.RESUME_BASE_URL ?? 'http://localhost:3000'
const browser = await chromium.launch({ headless: true })
try {
  const page = await browser.newPage()
  const response = await page.goto(`${base}/curriculo`, { waitUntil: 'networkidle' })
  if (!response?.ok()) throw new Error('Não foi possível carregar o currículo')
  await page.emulateMedia({ media: 'print' })
  await page.evaluate(() => document.fonts.ready)
  mkdirSync('public/cv', { recursive: true })
  await page.pdf({ path: 'public/cv/luis-botelho-curriculo.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true, outline: true })
  console.log('Currículo gerado em public/cv/luis-botelho-curriculo.pdf')
} finally {
  await browser.close()
}
