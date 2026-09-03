import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mytextrepeater.com'),
  title: 'My Text Repeater',
  description: 'Free Text Repeater to repeat text 100 times or up to 10,000. Repeat words, sentences, emojis, and messages with custom separators. Copy or download.',
  authors: [{ name: 'My Text Repeater' }],
  creator: 'My Text Repeater',
  publisher: 'My Text Repeater',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mytextrepeater.com',
    siteName: 'My Text Repeater',
    title: 'My Text Repeater',
    description: 'Free Text Repeater to repeat text 100 times or up to 10,000. Repeat words, sentences, emojis, and messages with custom separators. Copy or download.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Text Repeater',
    description: 'Free Text Repeater to repeat text 100 times or up to 10,000. Repeat words, sentences, emojis, and messages with custom separators. Copy or download.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/icon.svg',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'PkqE5HgNkFa9bmuBTg8HVbRCeRh6OZ894aXzCPniykM',
  },
  other: {
    'google-adsense-account': 'ca-pub-4975102983560437',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <head>
        {/* Preconnect & DNS-prefetch hints for third-party scripts to minimize TTFB & connection latency */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://adservice.google.com" />
        <script
          id="fetch-polyfill"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var f=window.fetch;var cur=f;Object.defineProperty(window,'fetch',{get:function(){return cur;},set:function(v){cur=v;},configurable:true,enumerable:true});if(typeof Window!=='undefined'&&Window.prototype){try{Object.defineProperty(Window.prototype,'fetch',{get:function(){return cur;},set:function(v){cur=v;},configurable:true,enumerable:true});}catch(e){}}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <script
          key="ld-json-org"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "My Text Repeater",
              "url": "https://mytextrepeater.com",
              "logo": "https://mytextrepeater.com/icon.svg",
              "description": "Free online text repeater tool. Repeat text, words, lines, emojis instantly. Generate zalgo text, fancy fonts, and convert text cases. Fast, free, and easy to use.",
              "email": "contact@mytextrepeater.com",
              "sameAs": [
                "https://x.com/MyTextRepeate",
                "https://www.instagram.com/mytextrepeater/",
                "https://www.pinterest.com/mytextrepeater/"
              ]
            })
          }}
        />

        {/* Google Analytics - gtag.js (lazyOnload for mobile speed) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-F7V35W7MQV"
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-F7V35W7MQV', { page_path: window.location.pathname });`}
            </Script>
            {/* Google AdSense (lazyOnload to protect FCP and LCP) */}
            <Script
              id="google-adsense"
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4975102983560437"
              crossOrigin="anonymous"
              strategy="lazyOnload"
            />
          </>
        )}

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
