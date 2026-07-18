import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { WordRepeaterTool } from "@/components/tools/word-repeater-tool"
import heroImage from "@/src/assets/images/word_repeater_hero_1784377297978.jpg"
const FAQAccordion = dynamic(() => import("@/components/faq-accordion").then(mod => mod.FAQAccordion), { ssr: true })
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Word Repeater Online | Repeat Each Word Instantly for Free",
  description: "Repeat each word in your text instantly with our free online word repeater. Customize repeat count and separators, then copy or download the output.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/word-repeater",
  },
  openGraph: {
    title: "Word Repeater Online - Repeat Words of Text",
    description: "Free online word repeater tool. Repeat every word in a sentence individually a set number of times.",
    url: "https://text-repeater0.vercel.app/word-repeater",
  },
}

const faqs = [
  {
    question: "What is a word repeater?",
    answer: "A word repeater is a tool that takes your text and repeats each individual word a set number of times — \"hello world\" at 3 repetitions becomes \"hello hello hello world world world\" — rather than repeating the entire sentence as one block.",
  },
  {
    question: "How is this different from a regular text repeater?",
    answer: "A text repeater duplicates your entire input as-is. A word repeater processes each word on its own, which creates a stutter or echo effect instead of a simple repeated block.",
  },
  {
    question: "Can I customize the separator between repeated words?",
    answer: "Yes. Set any separator you want between each repetition — a space, hyphen, underscore, new line, or custom character.",
  },
  {
    question: "What are some practical uses for word repeating?",
    answer: "Stutter or stammer effects in writing, emphasis in captions and comments, song lyric or spoken-word style repetition, design pattern text, and structured test data generation.",
  },
  {
    question: "Do I need an account to use it?",
    answer: "No. There's no signup, no download, and no limit on how many times you can generate output.",
  },
]

export default function WordRepeaterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Word Repeater Online",
    description: "Free online word repeater tool to multiply individual words instantly.",
    url: "https://textrepeater.com/word-repeater",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <article className="w-full" id="word-repeater-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl" id="main-heading">
              Word Repeater Online
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty" id="intro-text">
              Repeat individual words of your text multiple times. Pick the count, separator, and duplicate words word-by-word instantly. Perfect for stutter effects and dialogue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" id="tool-section">
        <div className="container mx-auto px-4">
          <WordRepeaterTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Word Repeater Online - Minimalist 3D rendering with geometric wooden blocks spelling out words with repeating shadow effects"
              fill
              sizes="(max-w-768px) 100vw, 672px"
              className="object-contain rounded-2xl"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </div>
      </section>

      {/* Word Repeater — Repeat Each Word in Your Text Multiple Times */}
      <section className="border-t border-border bg-muted/30 py-16" id="word-repeater-info-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            Word Repeater — Repeat Each Word in Your Text Multiple Times
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              A word repeater repeats every individual word in your text a set number of times, in order, before moving to the next word — turning &quot;hello world&quot; into &quot;hello hello hello world world world&quot; at 3 repetitions, rather than repeating the whole sentence as one block.
            </p>
            <p>
              Most repeater tools only know how to do one thing: take your whole sentence and copy it as a block. This one works differently — it goes word by word, so each word gets its own repeat count before the next one starts.
            </p>
            <p className="font-semibold text-foreground">
              That difference sounds small until you actually need it. It&apos;s the difference between a stutter effect and a simple echo.
            </p>
          </div>
        </div>
      </section>

      {/* How to Repeat Each Word in a Sentence */}
      <section className="border-t border-border bg-background py-16" id="how-it-works-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            How to Repeat Each Word in a Sentence
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              The tool reads your text, breaks it into individual words, and repeats each word the number of times you set — in order, one at a time — before moving to the next word. You control the separator between each repetition, so the output can be tight and back-to-back or spaced out with line breaks, dashes, or anything else you choose.
            </p>
            
            <div className="rounded-xl border border-border bg-card p-6 my-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-foreground">Example:</h3>
              <div className="space-y-2 font-mono text-sm text-foreground/90 bg-muted/50 p-4 rounded-lg">
                <p><strong>Input:</strong> &quot;Hello World&quot;</p>
                <p><strong>Repeat:</strong> 3 times</p>
                <p><strong>Output:</strong> &quot;Hello Hello Hello World World World&quot;</p>
              </div>
            </div>

            <p>
              Change the separator to a new line and the same input produces each repetition stacked vertically instead — useful when you want a stuttering effect that reads top to bottom rather than left to right.
            </p>
          </div>
        </div>
      </section>

      {/* What People Actually Use This For */}
      <section className="py-16 border-t border-border bg-muted/30" id="use-cases-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            What People Actually Use This For
          </h2>
          
          <div className="space-y-6">
            <div className="bg-background p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">The stutter effect</h3>
              <p className="text-foreground/90 leading-relaxed">
                Writers and social media users use word-by-word repetition to mimic a stammer, a nervous laugh, or a dramatic pause in dialogue — a line like &quot;I I I can&apos;t believe this&quot; reads completely differently than a plain repeated sentence would.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Emphasis in captions and comments</h3>
              <p className="text-foreground/90 leading-relaxed">
                Repeating a single key word inside a longer sentence — &quot;This is SO SO SO good&quot; — draws attention to exactly the word that matters, instead of repeating the whole line and burying the emphasis.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Song lyric and poetry effects</h3>
              <p className="text-foreground/90 leading-relaxed">
                Word-level repetition patterns show up constantly in song structure and spoken word. Building a phrase with a repeated action word by hand is slow; this does it instantly with the exact word you want stressed.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Design and pattern text</h3>
              <p className="text-foreground/90 leading-relaxed">
                Designers use repeated single words as a text-based pattern or background filler, where the same word tiled across a line creates a visual rhythm rather than being read as a sentence.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Testing and data generation</h3>
              <p className="text-foreground/90 leading-relaxed">
                Developers use word-level repetition to generate structured test strings where each token needs to repeat a set number of times — a different shape of test data than a full-text repeater produces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Word Repeating (Not Just Text Repeating) */}
      <section className="py-16 border-t border-border bg-background" id="why-word-repeating-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            Why Word Repeating (Not Just Text Repeating)
          </h2>
          <p className="mb-6 text-foreground/90 leading-relaxed">
            If you only need your whole message copied several times, the <Link href="/" className="text-primary hover:underline font-semibold">Text Repeater</Link> does that. This tool exists for the cases where repeating the whole thing isn&apos;t what you actually want — you want one word or a few words inside a sentence to repeat while the rest of the sentence stays intact and readable.
          </p>

          <ul className="space-y-3 text-foreground/90 leading-relaxed">
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Custom separator control — space, hyphen, underscore, new line, or any character between each repetition of a word.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Live word count — see exactly how many words your output contains before you copy it.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>No signup, no limits — type, generate, copy or download. Nothing gated behind an account.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 border-t border-border bg-muted/30" id="faq-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/word-repeater" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </article>
  )
}
