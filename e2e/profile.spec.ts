import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('apresentação profissional leva ao histórico, ao contato e ao currículo', async ({ page, request }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Caminhos de Mambucaba.', exact: true })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Entrar em contato' })).toHaveAttribute('href', 'mailto:luisfellypebotelho@gmail.com')
  await page.getByRole('link', { name: 'Conheça minha trajetória' }).click()
  await expect(page).toHaveURL(/\/sobre$/, { timeout: 15000 })
  await expect(page.getByRole('heading', { name: 'Front-end Dev. Júnior', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Garçom', exact: true })).toBeVisible()
  await page.getByRole('link', { name: 'Ver currículo online' }).click()
  await expect(page).toHaveURL(/\/curriculo$/, { timeout: 15000 })
  await expect(page.getByRole('heading', { name: 'Luis Fellype Botelho', exact: true })).toBeVisible()
  const pdf = await request.get('/cv/luis-botelho-curriculo.pdf')
  expect(pdf.status()).toBe(200)
  expect(pdf.headers()['content-type']).toContain('application/pdf')
  expect((await pdf.body()).subarray(0, 5).toString()).toBe('%PDF-')
})

test('sobre e currículo permanecem acessíveis em tela pequena', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  for (const route of ['/', '/sobre', '/curriculo']) {
    await page.goto(route)
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
  }
})
