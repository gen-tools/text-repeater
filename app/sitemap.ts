import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://text-repeater0.vercel.app/'
  
  const routes = [
    '',
    '/emoji-repeater',
    '/word-repeater',
    '/blank-text',
    '/zalgo-text',
    '/fancy-text-generator',
    '/case-converter',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-7-18'),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('repeater') || route.includes('text') ? 0.9 : 0.7,
  }))
}
