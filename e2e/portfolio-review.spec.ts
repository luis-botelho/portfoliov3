import { test, expect } from '@playwright/test'

test('navegação e rodapé globais também aparecem em cases, currículo e 404', async ({ page }) => {
  for (const route of ['/', '/sobre', '/certificados', '/projetos', '/projetos/goomer-menu-api', '/curriculo', '/pagina-inexistente']) {
    await page.goto(route)
    const nav = page.getByRole('navigation', { name: 'Navegação principal' })
    await expect(nav).toHaveCount(1)
    await expect(nav.getByRole('link')).toHaveText(['Projetos', 'Sobre', 'Artigos', 'Certificados', 'Contato', 'Currículo PDF ↓'])
    await expect(page.getByRole('contentinfo').getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com/in/luis-botelho')
  }
})

test('identidade, projetos sólidos, formação e canonical refletem a revisão', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Luis Fellype Botelho | Desenvolvedor Full-stack Júnior')
  const identity = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText())
  expect(identity['@graph'][0].name).toBe('Luis Fellype Botelho')
  expect(identity['@graph'][0].jobTitle).toBe('Desenvolvedor Full-stack Júnior')
  expect(identity['@graph'][0].alternateName).toBeUndefined()
  await expect(page.locator('#contato a')).toHaveText(['Conversar por e-mail ↗', 'LinkedIn ↗', 'WhatsApp ↗'])
  await expect(page.locator('#contato a').nth(0)).toHaveAttribute('href', 'mailto:luisfellypebotelho@gmail.com')
  const headings = await page.locator('#projetos h3').allTextContents()
  for (const name of ['Goomer Menu API', 'Mini Kanban Veritas', 'SafeAnchor', 'Itera']) {
    expect(headings).toContain(name)
  }
  expect(headings).not.toContain('Liahona (LIA)')
  for (const slug of ['lia', 'goomer-menu-api']) {
    await page.goto(`/projetos/${slug}`)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://luis-botelho.tech/projetos/${slug}`)
  }
  await expect(page.getByText('Case study / MVP concluído')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Backend - Projeto Final' })).toBeVisible()
  await expect(page.getByRole('link', { name: /Aceleração Santander - Boas Práticas/ })).toBeVisible()
  await page.goto('/certificados')
  await expect(page.locator('article h3').first()).toHaveText('Frontend - Projeto Final')
  await page.getByLabel('Ordenar por').selectOption('recent')
  await expect(page.locator('article h3').first()).toHaveText('Aceleração Santander - Boas Práticas de Segurança em Vibe Coding')
})
