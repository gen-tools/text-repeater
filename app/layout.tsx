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
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mytextrepeater.com'),
  title: 'My Text Repeater - Free Online Text Manipulation Tools',
  description: 'Free online text repeater and manipulation tools. Repeat text, words, emojis, convert cases, count words, and generate fancy fonts instantly.',
  keywords: ['my text repeater', 'text repeater', 'repeat text', 'text multiplier', 'copy paste text', 'emoji repeater', 'zalgo text', 'fancy text generator', 'case converter', 'word counter', 'blank text'],
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
    title: 'My Text Repeater - Free Online Text Manipulation Tools',
    description: 'Free online text repeater and manipulation tools. Repeat text, words, emojis, convert cases, count words, and generate fancy fonts instantly.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Text Repeater - Free Online Text Manipulation Tools',
    description: 'Free online text repeater and manipulation tools. Repeat text, words, emojis, convert cases, count words, and generate fancy fonts instantly.',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var f=window.fetch;function g(){return f;}function s(v){f=v;}try{Object.defineProperty(window,'fetch',{get:g,set:s,configurable:true,enumerable:true});}catch(e){}if(typeof Window!=='undefined'&&Window.prototype){try{Object.defineProperty(Window.prototype,'fetch',{get:g,set:s,configurable:true,enumerable:true});}catch(e){}}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          key="ld-json-org"
          type="application/ld+json"
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
                "https://twitter.com/textrepeater",
                "https://github.com/textrepeater"
              ]
            })
          }}
        />

        {/* Google Analytics - gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F7V35W7MQV"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-F7V35W7MQV');`}
        </Script>

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
