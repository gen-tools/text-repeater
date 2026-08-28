import { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedTools } from "@/components/related-tools"
import { ShieldCheck, Cpu, Sparkles, CheckCircle2, ArrowRight, Mail, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - MyTextRepeater | Free Online Text Tools",
  description: "Learn about MyTextRepeater, an independent collection of free, browser-based text manipulation tools designed for fast, client-side text generation and formatting.",
  alternates: {
    canonical: "https://mytextrepeater.com/about",
  },
  openGraph: {
    title: "About Us - MyTextRepeater | Free Online Text Tools",
    description: "Learn about MyTextRepeater, an independent collection of free, browser-based text manipulation tools designed for fast, client-side text generation and formatting.",
    url: "https://mytextrepeater.com/about",
    type: "website",
    locale: "en_US",
    siteName: "My Text Repeater",
    images: [
      {
        url: "https://mytextrepeater.com/apple-icon.png",
        width: 1200,
        height: 630,
        alt: "About MyTextRepeater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - MyTextRepeater | Free Online Text Tools",
    description: "Learn about MyTextRepeater, an independent collection of free, browser-based text manipulation tools designed for fast, client-side text generation and formatting.",
    images: ["https://mytextrepeater.com/apple-icon.png"],
  },
}

const availableTools = [
  { name: "Text Repeater", href: "/", desc: "Repeat words, phrases, or paragraphs up to 10,000 times with custom separators." },
  { name: "Nanana Translator", href: "/nanana-translator", desc: "Turn messages into repeating Nanana patterns for the viral Instagram translation trend." },
  { name: "Word Repeater", href: "/word-repeater", desc: "Multiply single words or short tokens with flexible inline and line-break spacing." },
  { name: "Emoji Repeater", href: "/emoji-repeater", desc: "Duplicate emoji strings, patterns, and combinations for messages and posts." },
  { name: "Case Converter", href: "/case-converter", desc: "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case, and more." },
  { name: "Word Counter", href: "/word-counter", desc: "Analyze word count, character count, reading time, and sentence statistics in real time." },
  { name: "Fancy Text Generator", href: "/fancy-text-generator", desc: "Transform standard text into stylish Unicode fonts for bios, usernames, and captions." },
  { name: "Zalgo Text Generator", href: "/zalgo-text-generator", desc: "Create glitchy, cursed, and chaotic text effects using Unicode combining marks." },
  { name: "Blank Text Generator", href: "/blank-text-generator", desc: "Generate invisible spaces and empty Unicode characters for messages and statuses." },
]

export default function AboutPage() {
  return (
    <>
      {/* Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="about-header">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="about-title">
              About MyTextRepeater
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty" id="about-subtitle">
              An independent suite of fast, browser-based utilities built to make daily text formatting and repetition effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" id="about-content">
        <div className="container mx-auto px-4 max-w-3xl space-y-12">
          
          {/* Why We Built MyTextRepeater / Purpose */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Why We Built MyTextRepeater
            </h2>
            <p className="text-foreground/90 leading-relaxed text-base">
              Manually duplicating a word hundreds of times, fixing accidental Caps Lock typing, or styling social media captions by hand is tedious and error-prone. We built <Link href="/" className="text-primary font-semibold hover:underline">MyTextRepeater</Link> to give creators, developers, students, and everyday internet users a fast, reliable, and clean way to perform repetitive text tasks in seconds.
            </p>
            <p className="text-foreground/90 leading-relaxed text-base">
              Rather than forcing users to download bulky apps, sign up for accounts, or wait on sluggish server responses, our tools run directly inside your web browser. You get your formatted output instantly, ready to copy and use wherever you need it.
            </p>
          </div>

          {/* Operator Transparency */}
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Cpu className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                Independent Operator & Development
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              MyTextRepeater is an independently operated web project developed and maintained by <strong className="text-foreground">Sheztech</strong>. Our focus is on creating lightweight, purposeful utilities with clean user interfaces, zero paywalls, and transparent operations.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We continually refine our tools based on community feedback, browser compatibility updates, and emerging text formatting needs.
            </p>
          </div>

          {/* How Our Tools Work (Verified Client-Side Architecture) */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How the Tools Work
            </h2>
            <p className="text-foreground/90 leading-relaxed text-base">
              The core text-processing features on MyTextRepeater run directly in your browser using client-side JavaScript. When you type or paste text into our generators, the transformations—such as string multiplication, Unicode formatting, or case conversions—occur in your local device&apos;s memory.
            </p>
            <div className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                What this means for your privacy:
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground pl-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>The text you input is processed in your browser and is not uploaded or stored on our servers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>No account creation, login credentials, or personal profiles are required to use any tool.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Instant processing with no server latency or waiting queues.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Available Tools Grid */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-2">
                Available Tools
              </h2>
              <p className="text-muted-foreground text-base">
                Explore our growing suite of text generators, converters, and counters:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {availableTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                      {tool.name}
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Technology & Standards */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Technology & Compatibility
            </h2>
            <p className="text-foreground/90 leading-relaxed text-base">
              MyTextRepeater is built with modern web technologies including Next.js, React, and Tailwind CSS. The website is engineered with a mobile-first responsive layout, dark and light theme support, and strict accessibility standards to ensure smooth performance across smartphones, tablets, laptops, and desktop computers.
            </p>
          </div>

          {/* Connect & Trust Links */}
          <div className="rounded-xl border border-border bg-muted/20 p-6 space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              Questions or Feedback?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We welcome suggestions for new text utilities, reports of unexpected behavior, or general inquiries. Learn more about our policies or reach out to our team:
            </p>
            <div className="flex flex-wrap gap-4 pt-1 text-sm font-medium">
              <Link href="/contact" className="text-primary hover:underline inline-flex items-center gap-1.5">
                <Mail className="h-4 w-4" /> Contact Us
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/privacy" className="text-primary hover:underline inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4" /> Privacy Policy
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/terms" className="text-primary hover:underline inline-flex items-center gap-1.5">
                <FileText className="h-4 w-4" /> Terms of Service
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Related Tools Bottom Bar */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/about" />
        </div>
      </section>
    </>
  )
}

