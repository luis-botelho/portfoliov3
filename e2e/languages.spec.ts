import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('language switch keeps the case and exposes reciprocal SEO metadata', async ({
  page,
}) => {
  await page.goto('/projetos/goomer-menu-api')
  await page
    .getByRole('navigation', { name: 'Idioma' })
    .getByRole('link', { name: 'English' })
    .click()
  await expect(page).toHaveURL(/\/en\/projetos\/goomer-menu-api$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.getByText('Case study / Under construction')).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Related training' }),
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: /Santander Acceleration/ }),
  ).toHaveAttribute('href', '/en/certificados#dio-TOA8DRBH')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://luis-botelho.tech/en/projetos/goomer-menu-api',
  )
  await expect(page.locator('link[hreflang="pt-BR"]')).toHaveAttribute(
    'href',
    'https://luis-botelho.tech/projetos/goomer-menu-api',
  )
  await page
    .getByRole('navigation', { name: 'Language' })
    .getByRole('link', { name: 'Português' })
    .click()
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR')
  await expect(page.getByText('Case study / Em construção')).toBeVisible()
})

test('English pages, certificate search and resume work on mobile', async ({
  page,
  request,
}) => {
  test.setTimeout(90000)
  await page.setViewportSize({ width: 390, height: 844 })
  for (const route of [
    '/en',
    '/en/sobre',
    '/en/projetos/lia',
    '/en/certificados',
    '/en/curriculo',
  ]) {
    await page.goto(route)
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(
      page
        .getByRole('navigation', { name: 'Main navigation' })
        .getByRole('link', { name: 'Resume PDF' }),
    ).toHaveAttribute('href', '/cv/luis-botelho-resume-en.pdf')
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true)
    expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([])
  }
  await page.goto('/en/certificados')
  await page.getByRole('searchbox').fill('Programming Logic')
  await expect(page.getByRole('status')).toContainText('1 of 25 certificates')
  await page.getByRole('link', { name: 'Itera ↗', exact: true }).click()
  await expect(page).toHaveURL(/\/en\/projetos\/itera$/)
  const pdf = await request.get('/cv/luis-botelho-resume-en.pdf')
  expect(pdf.status()).toBe(200)
  expect((await pdf.body()).subarray(0, 5).toString()).toBe('%PDF-')
})
