import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { TextRepeaterTool } from "@/components/tools/text-repeater-tool"
import heroImage from "@/src/assets/images/text_repeater_hero_1784377279044.jpg"
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })

export const metadata: Metadata = {
  title: "Text Repeater Online - Repeat Text 10K, 100K & More Free",
  description: "Repeat text instantly with our free Text Repeater. Duplicate words, sentences, emojis or lines up to 100K times with custom separators and copy.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/",
  },
  openGraph: {
    title: "Text Repeater Online - Free Text Multiplication Tool",
    description: "Free online text repeater tool. Repeat any text, words, lines, or paragraphs multiple times instantly.",
    url: "https://text-repeater0.vercel.app/",
  },
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Text Repeater Online",
    description: "Free online text repeater tool to multiply text, words, lines instantly.",
    url: "https://text-repeater0.vercel.app/",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Repeat text multiple times",
      "Custom separators",
      "Word and line repetition",
      "One-click copy",
      "Download as TXT",
      "Mobile friendly",
    ],
  }

  return (
    <article className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
            Text Repeater Online
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Repeat any text, word, or line multiple times instantly. Free, fast, and easy to use. 
            Perfect for social media, testing, or creative projects.
          </p>
        </div>
      </section>

      {/* Main Tool */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <TextRepeaterTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Text Repeater Online - Futuristic holographic neon-blue typography repeating text lines fading into a cosmic dark background"
              fill
              sizes="(max-w-768px) 100vw, 672px"
              className="object-contain rounded-2xl"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </div>
      </section>

      {/* Free Text Repeater Online Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
            Free Text Repeater Online — Repeat Text, Words, Lines & Paragraphs Instantly
          </h2>
          <p className="mb-6 text-foreground/90 leading-relaxed text-base">
            This text repeater lets you duplicate any text — a word, a sentence, an emoji, or a full paragraph — as many times as you need, with full control over how the output is built. Type your text once, pick a repeat mode, set a separator, and get a ready-to-copy result in real time. No signup, no download, completely free.
          </p>
        </div>
      </section>

      {/* What Makes This Text Repeater Different Section */}
      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            What Makes This Text Repeater Different
          </h2>
          <p className="mb-6 text-foreground/90 leading-relaxed">
            Most repeater tools only do one thing: repeat a block of text back-to-back. This one gives you four separate repeat modes, a custom separator field, and a live character/word counter so you can see exactly what you're generating before you copy it.
          </p>
          
          <ul className="mb-6 space-y-4 text-foreground/90 leading-relaxed">
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Entire Text mode — repeats your whole input as one block, exactly as typed.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Each Word mode — repeats every individual word, useful for building word-drill lists or stylized captions.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Each Line mode — repeats line-by-line, ideal when you're working with multi-line messages or list-style content.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Paragraphs mode — repeats full paragraphs intact, useful for placeholder or test content that needs to stay in paragraph form.</span>
            </li>
          </ul>

          <p className="text-foreground/90 leading-relaxed">
            You choose the mode that fits the job, rather than being stuck with one rigid output format.
          </p>
        </div>
      </section>

      {/* How This Tool Actually Works Section */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            How This Tool Actually Works
          </h2>
          <p className="mb-4 text-foreground/90 leading-relaxed">
            Drop your text into the box first — a word, a full paragraph, emojis, whatever you're working with. From there you're deciding two things: how many times it repeats, and which of the four modes shapes that repetition (whole block, word-by-word, line-by-line, or paragraph-by-paragraph). If you want something between each repeated piece — a comma, a dash, a blank line — that goes in the separator field, though leaving it empty works fine too.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Once you hit generate, the output shows up instantly with a running character and word count next to it, so you're not guessing how big the result is before you commit to copying or saving it. From there it's whichever exit works for you: clipboard for a quick paste somewhere, a downloaded .txt if you'll need it later, or the share option if you're sending it straight from the page.
          </p>
        </div>
      </section>

      {/* Full Feature List Section */}
      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            Full Feature List
          </h2>
          <ul className="space-y-3 text-foreground/90 leading-relaxed">
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Four distinct repeat modes: Entire Text, Each Word, Each Line, Paragraphs</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Custom separator support — space, comma, newline, or any custom character</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Live character and word count for both input and output</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>One-click Copy to Clipboard</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Download result as a .TXT file</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Share button to send output directly</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Works with plain text, emojis, symbols, and multi-language input</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>No signup, no account, no payment required</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Runs directly in the browser on desktop and mobile</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Who Uses This Tool Section */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            Who Uses This Tool
          </h2>
          <ul className="space-y-4 text-foreground/90 leading-relaxed">
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Messaging & social media — build repeated phrases or emoji strings for WhatsApp, Instagram captions, Discord, or Twitch chat.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Testing & development — generate bulk repeated text to stress-test input fields, forms, or character limits.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Content & formatting — create placeholder text, repeated dividers, or structured line-by-line content.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Memorization & practice — repeat a word or phrase for vocabulary drills or language practice.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* More Free Text Tools Section */}
      <section className="py-16 border-t border-border bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            More Free Text Tools
          </h2>
          <p className="mb-6 text-foreground/90 leading-relaxed">
            This text repeater is part of a full set of text tools, all free and built the same way — fast, no signup required:
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 text-foreground/90 leading-relaxed">
            <li className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg border border-border">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <Link href="/emoji-repeater" className="text-primary hover:underline font-semibold">Emoji Repeater</Link> — multiply emojis for social media and messaging
              </span>
            </li>
            <li className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg border border-border">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <Link href="/word-repeater" className="text-primary hover:underline font-semibold">Word Repeater</Link> — repeat individual words on their own
              </span>
            </li>
            <li className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg border border-border">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <Link href="/blank-text" className="text-primary hover:underline font-semibold">Blank Text Generator</Link> — generate invisible characters and empty text
              </span>
            </li>
            <li className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg border border-border">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <Link href="/zalgo-text" className="text-primary hover:underline font-semibold">Zalgo Text Generator</Link> — create glitch-style text effects
              </span>
            </li>
            <li className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg border border-border">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <Link href="/fancy-text-generator" className="text-primary hover:underline font-semibold">Fancy Text Generator</Link> — stylized text for bios and captions
              </span>
            </li>
            <li className="flex items-start gap-3 bg-muted/50 p-3 rounded-lg border border-border">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <Link href="/case-converter" className="text-primary hover:underline font-semibold">Case Converter</Link> — convert text between upper, lower, and title case
              </span>
            </li>
          </ul>
        </div>
      </section>
      
      {/* Frequently Asked Questions Section */}
      <section className="py-16 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                What repeat modes does this text repeater support?
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Four: whole text, word by word, line by line, or full paragraphs — pick whatever fits what you're building.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Can I put something between each repetition?
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Yep, any separator you want — space, comma, a line break, even a custom symbol if that's what the job calls for.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Can I save the output as a file instead of just copying it?
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                There's a Download TXT option sitting right next to Copy for that.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Will it handle emojis or text in other languages?
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Yes, it treats those the same as regular text, so nothing breaks or gets stripped out.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Do I have to sign up to use it?
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                No account, no email, nothing — it's open and ready the moment you land on the page.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                How do I know how big my output is getting?
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                There's a running character and word count right beside the box, updating as you go.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Related Tools */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/" />
        </div>
      </section>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-20 sm:hidden" />
    </article>
  )
}
