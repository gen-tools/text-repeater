import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mytextrepeater.com'
  
  const routes = [
    '',
    '/nanana-translator',
    '/word-counter',
    '/emoji-repeater',
    '/word-repeater',
    '/blank-text-generator',
    '/zalgo-text-generator',
    '/fancy-text-generator',
    '/case-converter',
    '/about',
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-08-19'),
    changeFrequency: route === '' ? 'daily' : route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route === '/blog' ? 0.8 : route.includes('repeater') || route.includes('text') ? 0.9 : 0.7,
  }))

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticEntries, ...blogEntries]
}
