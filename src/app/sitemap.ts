import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfoliov3-zeta-eight.vercel.app'
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: siteUrl, lastModified: new Date('2026-09-08') }, { url: `${siteUrl}/projetos`, lastModified: new Date('2026-09-08') }, { url: `${siteUrl}/certificados`, lastModified: new Date('2026-09-08') }, { url: `${siteUrl}/sobre`, lastModified: new Date('2026-09-08') }, { url: `${siteUrl}/curriculo`, lastModified: new Date('2026-09-08') }, ...projects.map(({ slug }) => ({ url: `${siteUrl}/projetos/${slug}`, lastModified: new Date('2026-09-08') }))] }
