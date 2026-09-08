import { test, expect } from '@playwright/test'

test('navegação e rodapé globais também aparecem em cases, currículo e 404', async ({ page }) => {
  for (const route of ['/', '/sobre', '/certificados', '/projetos', '/projetos/goomer-menu-api', '/curriculo', '/pagina-inexistente']) {
    await page.goto(route)
    const nav = page.getByRole('navigation', { name: 'Navegação principal' })
    await expect(nav).toHaveCount(1)
    await expect(nav.getByRole('link')).toHaveText(['Projetos', 'Sobre', 'Certificados', 'Contato', 'Currículo PDF ↓'])
    await expect(page.getByRole('contentinfo').getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com/in/luis-botelho')
  }
})

test('contato, destaques, formação e canonical refletem a revisão', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Luis Fellype Botelho \(Luiz Maia\)/)
  const identity = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText())
  expect(identity['@graph'][0].alternateName).toContain('Luiz Maia')
  await expect(page.locator('#contato a')).toHaveText(['Conversar por e-mail ↗', 'LinkedIn ↗', 'WhatsApp ↗'])
  await expect(page.locator('#contato a').nth(2)).toHaveAttribute('href', 'https://wa.me/5524992772357')
  const headings = await page.locator('#projetos h3').allTextContents()
  expect(headings.indexOf('Liahona — LIA')).toBeGreaterThanOrEqual(0)
  expect(headings.indexOf('Liahona — LIA')).toBeLessThan(headings.findIndex(text => text.includes('SafeAnchor')))
  expect(headings.some(text => /Itera/i.test(text))).toBe(false)
  for (const slug of ['lia', 'goomer-menu-api']) {
    await page.goto(`/projetos/${slug}`)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://luis-botelho.tech/projetos/${slug}`)
  }
  await expect(page.getByText('Case study / Em construção')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Backend - Projeto Final' })).toBeVisible()
  await expect(page.getByRole('link', { name: /Aceleração Santander - Boas Práticas/ })).toBeVisible()
  await page.goto('/certificados')
  await expect(page.locator('article h3').first()).toHaveText('Frontend - Projeto Final')
  await page.getByLabel('Ordenar por').selectOption('recent')
  await expect(page.locator('article h3').first()).toHaveText('Aceleração Santander - Boas Práticas de Segurança em Vibe Coding')
})
