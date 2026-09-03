import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieConsent } from '@/components/cookie-consent'
import { ThirdPartyScripts } from '@/components/third-party-scripts'
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
  preload: false,
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
        {/* Global Fetch Guard: Ensures window.fetch provides both a getter and setter to prevent "Cannot set property fetch of #<Window> which has only a getter" when third-party scripts, extensions, or iframe sandboxes reassign or wrap fetch */}
        <script
          key="global-fetch-guard"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof window==='undefined')return;try{var _raw=window.fetch;var _active=typeof _raw==='function'?_raw.bind(window):_raw;try{Object.defineProperty(window,'fetch',{get:function(){return _active;},set:function(v){_active=typeof v==='function'?v:_raw;},configurable:true,enumerable:true});}catch(_){try{if(window.Window&&window.Window.prototype){Object.defineProperty(window.Window.prototype,'fetch',{get:function(){return _active;},set:function(v){_active=typeof v==='function'?v:_raw;},configurable:true,enumerable:true});}}catch(__){}}}catch(_e){}try{window.addEventListener('error',function(e){var m=e&&(e.message||(e.error&&e.error.message));if(typeof m==='string'&&m.indexOf('fetch')!==-1&&(m.indexOf('getter')!==-1||m.indexOf('only a getter')!==-1)){if(e.preventDefault)e.preventDefault();if(e.stopImmediatePropagation)e.stopImmediatePropagation();return true;}},true);window.addEventListener('unhandledrejection',function(e){var r=e&&e.reason;var m=r&&(r.message||String(r));if(typeof m==='string'&&m.indexOf('fetch')!==-1&&(m.indexOf('getter')!==-1||m.indexOf('only a getter')!==-1)){if(e.preventDefault)e.preventDefault();if(e.stopImmediatePropagation)e.stopImmediatePropagation();return true;}},true);}catch(_err){}})();`,
          }}
        />
        {/* DNS prefetch hints so third-party domains are resolved without competing for initial TCP/SSL handshakes */}
        <link key="dns-prefetch-pagead" rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link key="dns-prefetch-gtm" rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link key="dns-prefetch-doubleclick" rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
        <link key="dns-prefetch-ga" rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link key="dns-prefetch-adservice" rel="dns-prefetch" href="https://adservice.google.com" />
        {/* Google AdSense official script - native HTML script tag without data-nscript attribute to avoid AdSense warnings */}
        <script
          key="google-adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4975102983560437"
          crossOrigin="anonymous"
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

        {/* Lightweight inline dataLayer queue - 0ms blocking, preserves all analytics events */}
        <script
          id="google-analytics-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-F7V35W7MQV',{page_path:window.location.pathname});`,
          }}
        />

        {/* Intelligent Third-Party Scripts loader: loads Google Ads & GA on first interaction or idle */}
        <ThirdPartyScripts />

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
