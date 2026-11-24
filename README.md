# Luis Botelho / Portfólio

Portfólio de Luis Fellype Botelho: produtos digitais, estudos de caso e formação conectada à prática.

**Online:** https://luis-botelho.tech

## Conteúdo

- Projetos sólidos com escopo, decisões, validação e limitações explícitas: Caminhos de Mambucaba, Goomer Menu API, Mini Kanban Veritas, SafeAnchor e Itera.
- Seção separada de estudos e legado, com status próprio e sem atribuir entrega concluída onde o projeto está em fundação, laboratório ou legado.
- Formulário Dinâmico em destaque na home e no início dos estudos, com capa editorial e o mesmo status de laboratório.
- Catálogo de certificados com busca, filtro por instituição, destaque para conteúdos introdutórios e relações editoriais com os projetos.
- Currículo online e arquivos PDF/DOCX em português e inglês, gerados a partir de uma única fonte de dados.

Critérios, fonte única de fatos e lacunas: [auditoria](AUDITORIA.md), [revisão editorial](docs/content-review.md) e [pendências](PENDENCIAS.md).

## Desenvolvimento

Node.js 24 e npm. Stack: Next.js App Router, React, TypeScript, Sass Modules, Vercel Analytics e Speed Insights. Tailwind é usado apenas no produto Caminhos de Mambucaba; este site não usa Tailwind.

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
npm run build:cv
npx playwright install chromium
npm run test:e2e
```

Vitest verifica catálogo, vínculos e integridade dos PDFs de certificados. Playwright verifica navegação, filtros, PDF servido, retorno ao certificado, responsividade e acessibilidade com axe. `npm run build:cv` gera os DOCX e os converte em PDF com LibreOffice; a validação editorial usa Poppler (`pdfinfo`, `pdffonts` e `pdftotext`).

## Conteúdo e manutenção

- Currículo (única fonte de fatos profissionais): `src/content/curriculo.json`.
- Projetos e traduções: `src/data/projects.ts` e `src/data/projects.en.ts`.
- Perfil e histórico: `src/data/profile.ts` e `src/data/profile.en.ts`.
- Certificados: `src/data/certificates.json`, `src/data/certificate-editorial.ts` e traduções em `src/data/certificates.en.ts`.
- Arquivos do currículo: `public/cv/`.
- Geração dos arquivos: `scripts/build-cv.mjs`, executado por `npm run build:cv`.
- Importação original dos certificados: `node scripts/import-certificates.mjs`, com o pacote original presente localmente.

O pacote original dos certificados é preservado localmente e ignorado pelo Git. Não é necessário tê-lo para instalar, testar ou publicar o site. Nenhuma mudança de conteúdo deve introduzir cargo, empresa, data, ferramenta ou resultado que não esteja no CONTEXTO; lacunas ficam registradas em `PENDENCIAS.md`.

## Branches e deploy

- `main`: produção, acompanhada pela integração GitHub–Vercel.
- `develop`: evolução e previews.
- `production`: branch histórica preservada; não é mais a branch de publicação.
- `chore/atualizar-portfolio-curriculo`: branch de preview desta atualização de conteúdo; nada foi enviado para `main`.

Fluxo: desenvolver em branch de trabalho, executar as verificações, revisar e integrar em `main`. Commits são organizados por mudança, com datas reais.

Defina `NEXT_PUBLIC_SITE_URL=https://luis-botelho.tech` na Vercel para canonical, sitemap e robots. O projeto existente `portfoliov3` está vinculado pelo diretório local `.vercel`, que não é versionado.

## Apresentação profissional e currículo

`/sobre` apresenta a trajetória profissional e `/curriculo` oferece a versão legível no navegador. Os arquivos ficam em `public/cv/`: versão em português (`luis-botelho-curriculo.pdf` e `.docx`) e em inglês (`luis-botelho-resume.pdf` e `.docx`). Os PDFs têm A4, corpo Calibri 12 pt, títulos maiores, todo o texto em preto e 2–3 páginas, com texto selecionável e sem tabelas ou colunas.

Após editar `src/content/curriculo.json`, regenere os quatro arquivos:

```sh
npm run build:cv
```

O script usa `docx` para escrever os DOCX e `soffice --headless` para convertê-los em PDF, mantendo as versões idiomáticas idênticas. Confira paginação, fonte e texto extraível antes de publicar. O site mantém `luisfellypebotelho@gmail.com` e o currículo usa `botelho.techie@outlook.com`; a divergência está registrada em `PENDENCIAS.md`.

## Idiomas

Português é o idioma principal (`/`). Inglês está disponível em `/en`, incluindo cases, certificados e currículo. O seletor de idioma mantém a página correspondente. O conteúdo português está em `src/app/(pt)`, e o inglês em `src/app/en`; componentes, estilos e dados de evidências são compartilhados. As traduções dos cases ficam em `src/data/projects.en.ts`, e as do currículo no próprio `curriculo.json`. O domínio canônico é definido por `NEXT_PUBLIC_SITE_URL` e centralizado em `src/lib/site.ts`.
