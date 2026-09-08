// Origem canônica compartilhada por metadados, sitemap e identidade pública.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://luis-botelho.tech'
).replace(/\/$/, '')
