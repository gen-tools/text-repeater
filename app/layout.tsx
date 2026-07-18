import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://text-repeater0.vercel.app'),
  title: {
    default: 'Text Repeater Online - Free Text Multiplication Tool',
    template: '%s | TextRepeater',
  },
  description: 'Free online text repeater tool. Repeat text, words, lines, emojis instantly. Generate zalgo text, fancy fonts, and convert text cases. Fast, free, and easy to use.',
  keywords: ['text repeater', 'repeat text', 'text multiplier', 'copy paste text', 'emoji repeater', 'zalgo text', 'fancy text generator'],
  authors: [{ name: 'TextRepeater' }],
  creator: 'TextRepeater',
  publisher: 'TextRepeater',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://text-repeater0.vercel.app',
    siteName: 'TextRepeater',
    title: 'Text Repeater Online - Free Text Multiplication Tool',
    description: 'Free online text repeater tool. Repeat text, words, lines, emojis instantly. Generate zalgo text, fancy fonts, and convert text cases.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text Repeater Online - Free Text Multiplication Tool',
    description: 'Free online text repeater tool. Repeat text, words, lines, emojis instantly.',
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
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'iYhD3GQqnatWWaAejnJSUeiLbpnq0YaYmKEM0v3DbxI',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
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
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <script
          key="ld-json-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Text Repeater Online",
              "url": "https://text-repeater0.vercel.app",
              "logo": "https://text-repeater0.vercel.app/icon.svg",
              "description": "Free online text repeater tool. Repeat text, words, lines, emojis instantly. Generate zalgo text, fancy fonts, and convert text cases. Fast, free, and easy to use.",
              "email": "contact@textrepeater.com",
              "sameAs": [
                "https://twitter.com/textrepeater",
                "https://github.com/textrepeater"
              ]
            })
          }}
        />
        <script
          key="fetch-override-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var originalFetch = window.fetch;
                  if (originalFetch) {
                    Object.defineProperty(window, 'fetch', {
                      value: originalFetch,
                      writable: true,
                      configurable: true,
                      enumerable: true
                    });
                  }
                } catch (e) {
                  try {
                    var originalFetch = Window.prototype.fetch || window.fetch;
                    if (originalFetch) {
                      Object.defineProperty(Window.prototype, 'fetch', {
                        value: originalFetch,
                        writable: true,
                        configurable: true,
                        enumerable: true
                      });
                    }
                  } catch (err) {
                    // Fail silently
                  }
                }
              })();
            `
          }}
        />
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
