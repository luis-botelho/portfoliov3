import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
test('home apresenta o posicionamento e navega para projetos', async ({ page }) => { await page.goto('/'); await expect(page.getByRole('heading', { name: 'Construo produtos digitais para problemas reais.' })).toBeVisible(); await page.getByRole('link', { name: 'Ver projetos' }).click(); await expect(page).toHaveURL(/#projetos/) })
test('home não tem violações axe', async ({ page }) => { await page.goto('/'); const results = await new AxeBuilder({ page }).analyze(); expect(results.violations).toEqual([]) })
