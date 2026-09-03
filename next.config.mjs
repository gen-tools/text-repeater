const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://*.pagead2.googlesyndication.com https://*.googlesyndication.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://adservice.google.com https://*.adservice.google.com https://tpc.googlesyndication.com https://googleads.g.doubleclick.net https://*.googleads.g.doubleclick.net https://partner.googleadservices.com https://www.google.com https://tagmanager.google.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https: https://pagead2.googlesyndication.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com https://googleads.g.doubleclick.net https://*.googleads.g.doubleclick.net https://tpc.googlesyndication.com;
  font-src 'self' data: https://fonts.gstatic.com;
  connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com https://pagead2.googlesyndication.com https://*.pagead2.googlesyndication.com https://*.googlesyndication.com https://googleads.g.doubleclick.net https://*.googleads.g.doubleclick.net https://stats.g.doubleclick.net https://tpc.googlesyndication.com https://adservice.google.com https://*.adservice.google.com https://*.adtrafficquality.google https://partner.googleadservices.com https://fundingchoicesmessages.google.com;
  frame-src 'self' https://googleads.g.doubleclick.net https://*.googleads.g.doubleclick.net https://tpc.googlesyndication.com https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.doubleclick.net https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://*.adtrafficquality.google https://fundingchoicesmessages.google.com https://bidder.criteo.com;
  frame-ancestors 'self' https://*.google.com https://*.google.dev https://ai.studio https://*.aistudio.google.com https://*.run.app;
  media-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim()

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXT_OUTPUT === 'standalone' ? { output: 'standalone' } : {}),
  compress: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'date-fns',
      'recharts',
      'clsx',
      'tailwind-merge',
      'next-themes',
      'tw-animate-css',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-slot',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-tabs',
      '@radix-ui/react-select',
      '@radix-ui/react-scroll-area',
    ],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 420, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/((?!_next/static|_next/image|favicon.ico).*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy,
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
        ],
      },
      {
        // Cache static images, icons, and fonts
        source: '/:path*\\.(jpg|jpeg|gif|png|svg|ico|webp|avif|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache manifest and static documents
        source: '/:path*\\.(json|xml|txt|webmanifest)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blank-text',
        destination: '/blank-text-generator',
        permanent: true,
      },
      {
        source: '/zalgo-text',
        destination: '/zalgo-text-generator',
        permanent: true,
      },
      {
        source: '/fancy-text',
        destination: '/fancy-text-generator',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
