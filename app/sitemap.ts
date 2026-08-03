import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mytextrepeater.com'
  
  const routes = [
    '',
    '/word-counter',
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
    lastModified: new Date('2026-8-4'),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.includes('repeater') || route.includes('text') ? 0.9 : 0.7,
  }))
}
