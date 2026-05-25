import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
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
  metadataBase: new URL('https://textrepeater.com'),
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
    url: 'https://textrepeater.com',
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
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
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
        <link rel="canonical" href="https://textrepeater.com" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
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
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
