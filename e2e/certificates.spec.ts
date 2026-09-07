import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('certificados: filtros, estado vazio, documento e conexão com case', async ({ page, request }) => {
  await page.goto('/certificados')
  await expect(page.getByRole('status')).toContainText('25 de 25')
  await page.getByRole('combobox', { name: 'Instituição' }).selectOption('DIO')
  await expect(page.getByRole('status')).toContainText('6 de 25')
  await page.getByLabel('Buscar formação ou tecnologia').fill('inexistente')
  await expect(page.getByRole('heading', { name: 'Nenhum certificado encontrado.' })).toBeVisible()
  await page.getByRole('button', { name: 'Limpar filtros' }).click()
  await page.getByLabel('Buscar formação ou tecnologia').fill('logica')
  await expect(page.getByRole('status')).toContainText('1 de 25')
  const pdfLink = page.getByRole('link', { name: 'Ver PDF: Módulo 1 - Lógica de programação', exact: true })
  const pdf = await request.get((await pdfLink.getAttribute('href'))!)
  expect(pdf.status()).toBe(200)
  expect(pdf.headers()['content-type']).toContain('application/pdf')
  await page.getByRole('link', { name: 'Itera ↗', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Itera', exact: true })).toBeVisible()
  await page.getByRole('link', { name: 'Módulo 1 - Lógica de programação ↗', exact: true }).click()
  await expect(page).toHaveURL(/certificados#blue-2021-logica$/)
  await expect(page.locator('#blue-2021-logica')).toBeInViewport()
})

test('certificados acessíveis e responsivos', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/certificados')
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  await page.getByLabel('Com projetos relacionados').check()
  await expect(page.getByRole('status')).toContainText('11 de 25')
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
})
