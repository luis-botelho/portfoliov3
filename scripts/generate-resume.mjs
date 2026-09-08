import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

// Usa a mesma página e os mesmos dados exibidos no currículo online.
const base = process.env.RESUME_BASE_URL ?? 'http://localhost:3000'
const browser = await chromium.launch({ headless: true })
try {
  for (const [route, filename] of [
    ['/curriculo', 'luis-botelho-curriculo.pdf'],
    ['/en/curriculo', 'luis-botelho-resume-en.pdf'],
  ]) {
    const page = await browser.newPage()
    const response = await page.goto(`${base}${route}`, {
      waitUntil: 'networkidle',
    })
    if (!response?.ok()) throw new Error(`Could not load ${route}`)
    await page.emulateMedia({ media: 'print' })
    await page.evaluate(() => document.fonts.ready)
    mkdirSync('public/cv', { recursive: true })
    await page.pdf({
      path: `public/cv/${filename}`,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
      outline: true,
    })
    console.log(`Resume generated: public/cv/${filename}`)
    await page.close()
  }
} finally {
  await browser.close()
}
