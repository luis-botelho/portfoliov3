import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: siteUrl, lastModified: new Date() }, { url: `${siteUrl}/projetos`, lastModified: new Date() }, ...projects.map(({ slug }) => ({ url: `${siteUrl}/projetos/${slug}`, lastModified: new Date() }))] }
