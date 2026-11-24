# Auditoria — conteúdo público x CONTEXTO

Data: 24/11/2026. Branch: `chore/atualizar-portfolio-curriculo`.

Fonte única de fatos: o bloco CONTEXTO enviado pelo titular. Antes desta auditoria não houve edição de conteúdo no site.

## 1. Afirmações do site contraditas ou não sustentadas pelo CONTEXTO

| Local no site | Afirmação atual | Situação frente ao CONTEXTO |
| --- | --- | --- |
| Home, título/`<title>`, OG, Twitter, JSON-LD e cartão de perfil | "Luis Fellype Botelho (Luiz Maia)" e `alternateName: ["Luis Botelho", "Luiz Maia"]` | CONTEXTO pede explicitamente o uso apenas de "Luis Fellype Botelho" no site e no currículo. Remover "Luiz Maia" de todas as superfícies. |
| Home, `<title>`, JSON-LD `jobTitle`, seleção de modelo profissional | "Desenvolvedor Full-stack" sem "Júnior" | Regra do titular: nunca escrever "Full-stack" sem "Júnior" no título. Ajustar título, metadados e textos de apresentação. |
| Home / `/sobre` | "Construo produtos digitais para problemas reais", "Hoje, transformo esse repertório em interfaces, APIs e produtos com propósito", "Interesse profissional: Full-stack" | Texto genérico e prospectivo; não é o resumo aprovado e não cita Estácio, OSF Digital, suporte de TI, inglês avançado nem a stack concreta. Substituir pelo resumo aprovado. |
| `/sobre` — trajetória | Blocos "2021–2022 / Tecnologia", "2022–2026 / Repertório de negócio", "Hoje / Direção" com "atuação como diretor financeiro do ICPT" | Omite Fortaco (desde 02/10/2026), Call Center, KAL, Santa Rita, Poupe Areal, Poupe Mais e a tentativa de agência. "Direção" pode sugerir gestão executiva formal, que o CONTEXTO diz não existir. ICPT precisa citar ata/estatuto, gestão financeira, prestação de contas, plataformas do Caminhos e articulação com TurisAngra, sem data de início. |
| `/sobre` e dados de perfil | "Engenharia de Software — Graduação em andamento" sem instituição | CONTEXTO confirma Estácio de Sá e estado "cursando". Nunca escrever "formado". |
| Cases — Caminhos de Mambucaba | Destaque descreve "Next.js + React, TypeScript, PostgreSQL" | CONTEXTO acrescenta Next.js 16, React 19, Tailwind, Leaflet, Supabase/PostgreSQL com RLS, Vercel, protocolo/exportação e observatório. A versão atual omite fatos concretos e não diz que é plataforma em produção com MVP publicado. |
| Cases — Goomer Menu API | "MVP concluído" | CONTEXTO acrescenta execução local, sem deploy, sem autenticação e sem paginação; essas frases honestas precisam aparecer. |
| Cases — SafeAnchor | "MVP concluído" e tags React 19/Vite/Node/Express 5 | CONTEXTO confirma MVP e demo publicada, além da modelagem de domínio e do agente experimental com LangGraph + Ollama + Supabase. |
| Vitrine | "Explorar os 11 projetos", grid com 4 cards na home e Liahona no grid principal | CONTEXTO define 5 projetos sólidos (Caminhos, Goomer, Mini Kanban, SafeAnchor, Itera) e 7 itens de "Estudos e legado". Itera não aparece como sólido; Liahona está no lugar errado; a contagem 11 não decorre do CONTEXTO. |
| Cases — Liahona | Apresentada entre os projetos selecionados como "Fundação" | CONTEXTO a classifica como "em fundação" e pede uma seção discreta "Estudos e legado". |
| Certificados — home | "18 certificados com carga horária", "2 formações em segurança", "5 conteúdos introdutórios" | `docs/content-review.md` registra 25 credenciais (18 PDFs, 6 links DIO, 1 Growdev). O CONTEXTO não fornece contagens; os números atuais não podem ser apresentados como fato sem conferência com o catálogo e devem ser reformulados ou recomputados a partir dos dados. |
| Competências — home | "Docker, PostgreSQL, Prisma, Git, CSS/Sass..." | Faltam Supabase, MySQL, SQL, n8n, Vercel, APIs REST, Excel e inglês avançado, todos afirmáveis pelo CONTEXTO. |
| Contato | `luisfellypebotelho@gmail.com` no site; currículo usa `botelho.techie@outlook.com` | Divergência real. CONTEXTO manda manter o e-mail atual no site e registrar a dúvida em PENDENCIAS.md. |
| Textos editoriais `docs/seo-review.md` e `docs/professional-history.md` | Registram "Luiz Maia" como parte da identidade e ICPT sem data | Contradizem a nova instrução. Devem ser alinhados na mesma mudança ou explicitamente marcados como históricos. |
| Status de projetos em `docs/content-review.md` | "SafeAnchor ... mantido em construção"; "SecureAuth-Web3" com backend Express/JWT | CONTEXTO atualiza SafeAnchor para MVP concluído e pede SecureAuth apenas em "Estudos e legado" (laboratório), sem case detalhado. |

## 2. Informações que faltam no site

- Resumo aprovado (Estácio, OSF Digital, suporte de TI, atendimento, vendas B2B, licitações, inglês avançado, stack).
- Licitações na Rede Fortaco Angraluz desde 02/10/2026, com o ciclo edital → pregão → entrega, sem afirmar vínculo.
- ICPT com ata de posse/estatuto, gestão financeira, prestação de contas, plataformas digitais e TurisAngra; sem data de início.
- KAL Atacado 2 com o cargo da CTPS **e** a função real (carteira B2B, pré e pós-venda), sem números.
- Poupe Mais (Repositor → Auxiliar de Escritório no CPD) e Poupe Areal ("Encarregado de Loja (atuação como subgerente)").
- Agência de turismo como tentativa que não saiu da concepção, nunca como empresa que operou.
- Datas concretas de OSF Digital e Virtua Max (hoje apenas "jan–jun/2022").
- Caminhos de Mambucaba como plataforma em produção, com RLS, protocolo/exportação, observatório e redirecionamentos do WordPress antigo.
- Itera como quinto projeto sólido; LIA Operating System como estudo arquitetural pausado com n8n/Docker/PostgreSQL e GitHub Issues.
- Formação complementar em segurança da DIO (set/2026) e Blue EdTech (2021) com destaque, separando conteúdos introdutórios.
- Inglês avançado e as competências adicionais do CONTEXTO.

## 3. Links para repositórios que ficarão privados

Remover links do GitHub dos cases/itens:

- FrostyCamp Home (`frosty-camp-home`)
- BlueSoul (`BlueSoul`)
- Jogo do Humor (`humor`)
- Formulário Dinâmico (`frontend-challenge-solution`)

Os demais links de projeto citados no CONTEXTO permanecem: `instituto-platform`, `goomer-backend`, `desafio-fullstack-veritas`, `safeanchor-monorepo`, `itera`, `liahona`.

## 4. Fora do escopo — não publicar

XQVIEW (aplicação de gestão de licitações), New Horizon e organizador de conversas de WhatsApp: planejamento, não produto.

Web3 Shield: existe no GitHub e é tema de artigos, mas o CONTEXTO não descreve o que existe. Não criar case; registrar em PENDENCIAS.md.

Nunca afirmar: graduação concluída, hotelaria formal, Linux/rede avançados, monitoramento, ITIL/CompTIA/Cisco, Java/Angular, coordenação de parcerias ou gestão executiva formal, métricas de vendas/acesso, certificação cloud, CI/CD, cobertura de testes medida, Lighthouse ou deploy da Goomer API.

## 5. Lacunas a registrar em PENDENCIAS.md

1. Vínculo e situação atual na Fortaco (CONTEXTO diz "desde 02/10/2026"; não diz se ainda está lá nem o tipo de vínculo).
2. Data de início no ICPT.
3. Data exata da promoção a Auxiliar de Escritório no Poupe Mais.
4. Datas exatas do garçom (CONTEXTO dá "aprox. ago/2025 a mai/2026" e informa que não está na CTPS).
5. E-mail a usar no site (Gmail atual x Outlook dos currículos).
6. O que existe de concreto no Web3 Shield.

Nenhuma lacuna será preenchida com suposição; onde o dado falta, o texto será reescrito sem depender dele.
