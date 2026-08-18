import { Metadata } from "next"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { WordCounterTool } from "@/components/tools/word-counter-tool"
import { Breadcrumbs } from "@/components/breadcrumbs"
import heroImage from "@/src/assets/images/word_counter_hero_1785799741311.jpg"

const FAQAccordion = dynamic(() => import("@/components/faq-accordion").then(mod => mod.FAQAccordion), { ssr: true })
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })

export const metadata: Metadata = {
  title: "Word Counter & Text Analyzer | Count Words & Characters",
  description: "Free online word counter and text analyzer to count words, characters, sentences, paragraphs, readability, reading time, and keyword density instantly.",
  alternates: {
    canonical: "https://mytextrepeater.com/word-counter",
  },
  openGraph: {
    title: "Word Counter & Text Analyzer | Count Words & Characters",
    description: "Free online word counter and text analyzer to count words, characters, sentences, paragraphs, readability, reading time, and keyword density instantly.",
    url: "https://mytextrepeater.com/word-counter",
    type: "website",
    siteName: "My Text Repeater",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Counter & Text Analyzer | Count Words & Characters",
    description: "Free online word counter and text analyzer to count words, characters, sentences, paragraphs, readability, reading time, and keyword density instantly.",
  },
}

const faqs = [
  {
    question: "What is an online word counter?",
    answer: "A tool that counts words, characters, sentences, and paragraphs in your text instantly, without needing to open a separate document or app.",
  },
  {
    question: "What is a text analyzer?",
    answer: "A tool that goes beyond counting to assess how your text reads — readability level, sentence pacing, and word repetition — alongside the basic counts.",
  },
  {
    question: "How does character count with and without spaces work?",
    answer: '"With spaces" counts every character, including blank spaces between words. "Without spaces" counts only visible characters — useful when a platform\'s limit is based on one or the other.',
  },
  {
    question: "How is reading time calculated?",
    answer: "It's based on your total word count divided by an average adult reading speed, typically 200–250 words per minute.",
  },
  {
    question: "How is speaking time calculated?",
    answer: "It uses your word count against an average speaking pace of about 130–150 words per minute. That's closer to how people actually talk when presenting or reading a script aloud.",
  },
  {
    question: "Can it count sentences and paragraphs too?",
    answer: "Yes — sentence and paragraph counts update live alongside your word and character counts.",
  },
  {
    question: "What is the Flesch Reading Ease score?",
    answer: "A readability score from 0–100, based on sentence length and syllable count. Higher scores mean easier reading; lower scores mean more complex, academic-level text.",
  },
  {
    question: "How does keyword density analysis work?",
    answer: "It scans your text for the most frequently repeated words and shows what percentage of your total word count each one makes up.",
  },
  {
    question: "Is my text saved or sent to a server?",
    answer: "No. Everything is processed locally in your browser — your text is never uploaded or stored anywhere.",
  },
  {
    question: "Does it work on mobile devices?",
    answer: "Yes, it works the same in a mobile browser as it does on desktop.",
  },
]

export default function WordCounterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Word Counter & Text Analyzer",
    description: "Free online word counter tool to measure words, characters, sentences, paragraphs, reading time, keyword density, and readability.",
    url: "https://mytextrepeater.com/word-counter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Real-time word and character count",
      "Characters with and without spaces",
      "Sentence and paragraph tally",
      "Reading and speaking time estimates",
      "Flesch Readability scoring",
      "Top keyword frequency & density analysis",
      "Quick text cleanup & formatting actions",
      "Export analysis report as CSV or TXT",
    ],
  }

  return (
    <article className="w-full" id="word-counter-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="main-heading">
              Word Counter & Text Analyzer
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty" id="intro-subtitle">
              This free online word counter counts words, characters, sentences, paragraphs, reading time, speaking speed, keyword density, and Flesch readability scores in real-time. It's fast and 100% private.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12" id="tool-section">
        <div className="container mx-auto px-4">
          <WordCounterTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto" id="illustration-section">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Word Counter tool interface"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 672px"
              className="object-contain rounded-2xl"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="info-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Introduction
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              Whether you're an essay writer managing strict word limits, a social media manager crafting character-capped posts, a journalist editing articles, or an SEO specialist optimizing keyword density — this word counter gives you accurate, instant statistics as you type. Some people call it a word checker, others a word calculator. Either way, it's the same job: turning raw text into numbers you can actually use.
            </p>
            <p>
              Beyond basic word and character counts, it delivers deeper content analysis. That includes reading and speaking time estimates, sentence and paragraph counts, Flesch Reading Ease scores, keyword repetition patterns, and quick extraction of emails and URLs buried in longer text.
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="how-to-use-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How to Use
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-foreground/90 leading-relaxed text-base">
            <li>Paste or type your text.</li>
            <li>Watch word, character, sentence, and paragraph counts update instantly.</li>
            <li>Review readability, reading time, and keyword density.</li>
            <li>Copy the results, export them, or keep editing — the stats stay live either way.</li>
          </ol>
        </div>
      </section>

      {/* Who Uses This Tool? Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="who-uses-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Who Uses This Tool?
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">📚 Students & Researchers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Check essays, research papers, and abstracts against a professor's or journal's word limit before submitting.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">✍️ Writers & Bloggers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track post length and pacing, and check readability before hitting publish.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">📈 SEO Specialists</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor article length, keyword density, and readability scores while optimizing copy.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">📊 Marketers & Copywriters</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep ad copy, landing pages, and campaign variations inside a strict character limit.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">📰 Journalists</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fit articles to a word count or column length under deadline.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">💬 Social Media Creators</h3>
              <p className="text-muted-foreground leading-relaxed">
                Stay inside character limits for X, Instagram captions, TikTok bios, and LinkedIn posts.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">💼 Professionals & Job Seekers</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep a resume summary or LinkedIn "About" section inside the length recruiters actually read.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Word Counter? Section */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="what-is-word-counter-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is a Word Counter?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            A word counter tallies how much text you've written the moment you type or paste it in — words, characters, sentences, and paragraphs, all at once. It's the tool behind meeting an essay's minimum length, staying under a caption's character cap, or checking that an article hits its target word count before it goes live.
          </p>
        </div>
      </section>

      {/* What Is a Text Analyzer? Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="what-is-text-analyzer-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is a Text Analyzer?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            A text analyzer looks past the raw word count to tell you how your writing actually reads. It covers sentence length, readability grade level, word repetition, and pacing. Put simply, a word counter answers "how long is this," while a text analyzer answers "how easy is this to read, and where does it repeat itself." This tool does both at once, so you get the count and the context in the same pass.
          </p>
        </div>
      </section>

      {/* Advanced Features & Capabilities Section */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="features-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Advanced Features & Capabilities
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Live Word & Character Count</h3>
              <p className="text-muted-foreground leading-relaxed">
                Instant updates as you type or paste. It tracks total words, character count with spaces, and character count without spaces — useful the moment a form field or caption has a hard limit.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Sentence & Paragraph Counting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Counts sentences and paragraphs alongside words and characters, so you can see structure at a glance. Handy for spotting run-on paragraphs, or checking an essay meets a "minimum 5 paragraphs" requirement.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Reading & Speaking Time</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estimates how long your writing takes to read or read aloud. It's based on an average reading speed of roughly 200–250 words per minute, and an average speaking pace of roughly 130–150 words per minute — useful for blog posts, scripts, and presentation timing.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Flesch Readability Scoring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Analyzes sentence length and syllable count to estimate a reading grade level, from 5th grade to graduate level. Scores of 60–70 read as easily understood by most adults. Higher scores mean simpler writing; lower scores mean denser, more academic text.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Keyword Density Analysis</h3>
              <p className="text-muted-foreground leading-relaxed">
                Identifies your most repeated words and their frequency, so you can spot natural emphasis versus accidental over-repetition without guessing.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Text Formatting Utilities</h3>
              <p className="text-muted-foreground leading-relaxed">
               Strips extra spaces and removes stray HTML tags left over from pasting out of
               a CMS or Word document. It also cleans stray line breaks and pulls out email
               addresses or links in one click. Pair it with a{" "}
             <Link href="/" className="text-primary hover:underline">
            text repeater
          </Link>{" "}
              when you need to build repeated or padded text first, then verify the final
              count here.
         </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg mb-1">Instant Exporting</h3>
              <p className="text-muted-foreground leading-relaxed">
                Copy a formatted analysis report or download your text and stats as a file, so you're not re-running the same check twice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="faq-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Tools */}
      <section className="border-t border-border bg-background" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/word-counter" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </article>
  )
}

