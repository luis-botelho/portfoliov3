import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('home apresenta o posicionamento e navega para projetos', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('heading', {
      name: 'Desenvolvedor Full-stack Júnior.',
      exact: true,
    }),
  ).toBeVisible()
  await expect(
    page.getByText('Construo produtos digitais para problemas reais.'),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Formulário Dinâmico.' }),
  ).toBeVisible()
  await expect(page.locator('img[src*="formulario-cover"]')).toBeVisible()
  await page.getByRole('link', { name: 'Ver projetos ↗' }).click()
  await expect(page).toHaveURL(/#projetos/)
})

test('home em inglês mantém a frase e o destaque do laboratório', async ({ page }) => {
  await page.goto('/en')
  await expect(
    page.getByRole('heading', {
      name: 'Junior Full-stack Developer.',
      exact: true,
    }),
  ).toBeVisible()
  await expect(
    page.getByText('I build digital products for real problems.'),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Formulário Dinâmico.' }),
  ).toBeVisible()
})

test('home não tem violações axe', async ({ page }) => {
  await page.goto('/')
  const results = await new AxeBuilder({ page }).analyze()
  expect(results.violations).toEqual([])
})
