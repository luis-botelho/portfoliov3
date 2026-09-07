# Luis Botelho / Portfólio

Portfólio de Luis Fellype Botelho: produtos digitais, estudos de caso e formação conectada à prática.

**Online:** https://portfoliov3-zeta-eight.vercel.app

## Conteúdo

- 11 projetos revisados no GitHub, com escopo, decisões, limitações e fontes.
- 25 certificados de Blue EdTech, DIO e Growdev em `/certificados`.
- Busca por título/tecnologia, filtro por instituição e por conexão com projetos.
- 18 PDFs originais com integridade SHA-256 verificada; sete credenciais externas.
- Relações entre projetos e formação descrevem competências, sem atribuir certificação aos produtos.

Critérios e fontes da curadoria: [revisão editorial](docs/content-review.md).

## Desenvolvimento

Node.js 24 e npm. Stack: Next.js App Router, React, TypeScript, Sass Modules, Vercel Analytics e Speed Insights.

```sh
npm ci
npm run dev
```

## Qualidade

```sh
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Vitest verifica o catálogo, os vínculos e a integridade dos PDFs. Playwright verifica navegação, filtros, PDF servido, retorno ao certificado, responsividade e acessibilidade com axe. O workflow do GitHub usa o lockfile npm.

## Conteúdo e manutenção

- Projetos: `src/data/projects.ts`.
- Certificados: `src/data/certificates.json`.
- Relações editoriais: `src/data/certificates.ts`.
- PDFs públicos: `public/certificates/blue-edtech`.
- Importação: `node scripts/import-certificates.mjs`, com o pacote original presente localmente.

O pacote original é preservado localmente e ignorado pelo Git. Contém variantes e metadados que não integram o acervo público. Para atualizar a formação, revise o inventário e execute o importador. Não é necessário ter o pacote original para instalar, testar ou publicar o site.

## Branches e deploy

- `main`: produção, acompanhada pela integração GitHub–Vercel.
- `develop`: evolução e previews.
- `production`: branch histórica preservada; não é mais a branch de publicação.

Fluxo: desenvolver em `develop`, executar as verificações, revisar e integrar em `main`. O push em `main` publica pela Vercel. Commits são organizados por mudança, com datas reais.

Defina `NEXT_PUBLIC_SITE_URL=https://portfoliov3-zeta-eight.vercel.app` na Vercel para canonical, sitemap e robots. O projeto existente `portfoliov3` está vinculado pelo diretório local `.vercel`, que não é versionado.
