# Revisão de apresentação e SEO — 08/09/2026

- Navegação e rodapé no layout raiz, inclusive no currículo e em páginas não encontradas; ocultos na impressão.
- Canonical próprio em cada case. Antes, os cases herdavam o canonical da home.
- Título, descrição e Open Graph dos cases obtidos dos dados de cada projeto.
- Identidade pública em JSON-LD (Person e WebSite), sem dados do documento trabalhista.
- Sitemap com data editorial estável e fallback para o endereço público; previews marcados como noindex.
- Liahona priorizado como case de planejamento e arquitetura, com escopo verificado no repositório. Não há produto implementado declarado.
- FrostyCamp confirmada no navegador em https://frosty-camp-home.vercel.app; captura local e link publicados. O formulário não foi enviado nem certificado como funcional.
- Credenciais originais preservadas; descrições editoriais separadas do catálogo importado. Destaques técnicos vêm antes de introduções, com alternativa de ordenação por data.

## Domínio próprio

Domínio: https://luis-botelho.tech. A origem canônica é compartilhada por metadados, sitemap e perfil em src/lib/site.ts, com override por NEXT_PUBLIC_SITE_URL.

O domínio principal e www estão vinculados ao projeto portfoliov3 na Vercel; www redireciona com HTTP 308 para o domínio principal. A delegação no registrador deve usar ns1.vercel-dns.com e ns2.vercel-dns.com.

Após propagação e emissão de HTTPS, verificar canonical, sitemap e redirecionamentos. Cadastrar a propriedade no Google Search Console, verificar por TXT e enviar /sitemap.xml; a verificação exige acesso à conta Google do proprietário. Nenhum envio ao Search Console é presumido.

Luis Fellype Botelho e Luiz Maia aparecem na apresentação visível, no título da home e na identidade estruturada (alternateName), conforme pedido do proprietário.

Não há garantia de indexação ou primeira posição. Referência: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

## Português e inglês

Português permanece no endereço raiz, sem redirecionamento automático pelo idioma do navegador. A versão inglesa usa /en e cobre home, histórico, catálogo, 11 cases, certificados e currículo. Cada página tem canonical próprio, hreflang recíproco e idioma HTML correspondente. O sitemap inclui as duas versões.

Os layouts compartilham navegação, rodapé e identidade visual. As traduções dos projetos e das credenciais ficam nos arquivos src/data/*.en.ts. Títulos oficiais e documentos dos emissores são preservados no idioma de origem; a página inglesa identifica os títulos originais. Documentação externa dos repositórios permanece na língua original.

Os PDFs são gerados por scripts/generate-resume.mjs a partir de /curriculo e /en/curriculo. O CI testa o build de produção. Atualizações editoriais devem manter as versões portuguesa e inglesa coerentes quanto a escopo, datas e status.
