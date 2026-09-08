# Revisão de apresentação e SEO — 08/09/2026

- Navegação e rodapé no layout raiz, inclusive no currículo e em páginas não encontradas; ocultos na impressão.
- Canonical próprio em cada case. Antes, os cases herdavam o canonical da home.
- Título, descrição e Open Graph dos cases obtidos dos dados de cada projeto.
- Identidade pública em JSON-LD (Person e WebSite), sem dados do documento trabalhista.
- Sitemap com data editorial estável e fallback para o endereço público; previews marcados como noindex.
- Liahona priorizado como case de planejamento e arquitetura, com escopo verificado no repositório. Não há produto implementado declarado.
- FrostyCamp confirmada no navegador em https://frosty-camp-home.vercel.app; captura local e link publicados. O formulário não foi enviado nem certificado como funcional.
- Credenciais originais preservadas; descrições editoriais separadas do catálogo importado. Destaques técnicos vêm antes de introduções, com alternativa de ordenação por data.

## Quando o domínio estiver disponível

1. Adicionar o domínio ao projeto Vercel e configurar os registros DNS indicados por ela.
2. Definir o domínio principal e o redirecionamento permanente das variantes.
3. Atualizar NEXT_PUBLIC_SITE_URL com a URL HTTPS definitiva e publicar novamente. Atualizar também o endereço do perfil e os fallbacks de layout, sitemap e robots.
4. Verificar canonical, sitemap, HTTPS e redirecionamentos no domínio definitivo.
5. Verificar a propriedade no Google Search Console e enviar /sitemap.xml. Acompanhar indexação e consultas reais antes de novas alterações editoriais.

Não há garantia de primeira posição. A revisão melhora identificação, rastreamento e clareza do conteúdo; resultados dependem também da consulta, concorrência e indexação.
Referência: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
