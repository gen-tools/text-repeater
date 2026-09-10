import { Metadata } from "next"
import Image from "next/image"
import { WordRepeaterTool } from "@/components/tools/word-repeater-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import heroImage from "@/src/assets/images/word_repeater_hero_1784377297978.webp"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, Laptop, HelpCircle, AlertCircle, Sparkles, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react"

const PAGE_TITLE = "Word Repeater — Repeat Each Word in Text Instantly"
const PAGE_DESCRIPTION = "Word Repeater repeats each word in your text individually, one at a time, instead of copying the whole sentence as a single block up to 10,000 times."
const PAGE_URL = "https://mytextrepeater.com/word-repeater"

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: "My Text Repeater",
    images: [
      {
        url: "https://mytextrepeater.com/apple-icon.png",
        width: 1200,
        height: 630,
        alt: PAGE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["https://mytextrepeater.com/apple-icon.png"],
  },
}

const faqs = [
  {
    question: "What is a word repeater?",
    answer: "It's a tool that repeats each word in your text on its own, one at a time, rather than copying the entire sentence as a single block.",
  },
  {
    question: "How is this different from a regular text repeater?",
    answer: "A text repeater duplicates the whole line as one unit; this repeats each individual word before moving to the next, which produces a stutter effect instead of an echo.",
  },
  {
    question: "Can I repeat just one word?",
    answer: "Yes, enter a single word and it repeats exactly as many times as you set, with your chosen separator between each copy.",
  },
  {
    question: "Can I repeat emojis with this?",
    answer: "Yes, emojis repeat the same way as any word, with full support for standard Unicode emoji.",
  },
  {
    question: "Can I customize the separator between repeated words?",
    answer: "Yes, choose from space, comma, hyphen, underscore, line break, or enter your own character.",
  },
  {
    question: "Can I download the output instead of just copying it?",
    answer: "Yes, save the result as a .txt file directly from the tool.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, there's no cost, account, or signup required.",
  },
  {
    question: "Does it work on mobile?",
    answer: "Yes, it works the same way on Android, iPhone, and tablet browsers as it does on desktop.",
  },
  {
    question: "Is my text stored anywhere?",
    answer: "No, everything runs locally in your browser and isn't uploaded or saved after you close the page.",
  },
  {
    question: "How many repetitions are supported per word?",
    answer: "Up to 10,000 repetitions per word.",
  },
]

export default function WordRepeaterPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Word Repeater",
    description: "Free online word repeater tool that repeats each word in your text individually up to 10,000 times with custom separators.",
    url: PAGE_URL,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Repeats every word individually, not the whole line as one block",
      "Up to 10,000 repetitions per word",
      "Custom separators — space, comma, hyphen, underscore, line break, or your own character",
      "Live word count and live character count",
      "One-click copy to clipboard",
      "Download the result as a .txt file",
      "Full emoji and Unicode support",
      "Works on mobile and desktop, no separate app",
      "No signup, runs entirely in your browser",
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <article className="w-full" id="word-repeater-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="main-heading">
              Word Repeater
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed" id="intro-subtitle">
              Word Repeater repeats each word in your text individually, one at a time, instead of copying the whole sentence as a single block. Type &quot;hello world&quot; with a count of 3, and you get &quot;hello hello hello world world world&quot; — each word cycles through its repeats before the next word starts.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12" id="tool-section">
        <div className="container mx-auto px-4">
          <WordRepeaterTool />
        </div>
      </section>

      {/* Hero Illustration */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Word Repeater online tool interface"
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

      {/* Features */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Repeats every word individually, not the whole line as one block",
              "Up to 10,000 repetitions per word",
              "Custom separators — space, comma, hyphen, underscore, line break, or your own character",
              "Live word count and live character count",
              "One-click copy to clipboard",
              "Download the result as a .txt file",
              "Full emoji and Unicode support",
              "Works on mobile and desktop, no separate app",
              "No signup, runs entirely in your browser",
            ].map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90 shadow-sm transition-all hover:border-primary/40"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Repeat Each Word */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            How to Repeat Each Word
          </h2>
          <ol className="space-y-4 mb-6">
            {[
              {
                title: "Enter your text.",
                desc: "Paste or type the word, phrase, or sentence you want to work with.",
              },
              {
                title: "Choose the repeat count.",
                desc: "Set how many times each word should repeat before the next one starts.",
              },
              {
                title: "Select a separator.",
                desc: "Space, hyphen, underscore, comma, or line break — whatever fits the effect you're going for.",
              },
              {
                title: "Generate the output.",
                desc: "The result appears immediately, with a live word count alongside it.",
              },
              {
                title: "Copy or download.",
                desc: "Send it to your clipboard, or save it as a .txt file.",
              },
            ].map((step, idx) => (
              <li
                key={idx}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm items-start transition-all hover:border-primary/40"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground text-base">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-foreground/90 text-sm leading-relaxed">
            Switching the separator to a line break turns a horizontal run into a vertical stack — useful when the repetition needs to read top to bottom instead of left to right.
          </div>
        </div>
      </section>

      {/* What Is a Word Repeater? */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is a Word Repeater?
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              Most repeater tools do one thing: copy your whole sentence as a block. A word repeater works differently — it goes word by word, repeating each one individually before moving to the next.
            </p>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm font-mono text-sm space-y-2 text-foreground/90">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-muted-foreground font-semibold">Input:</span>
                <span>Hello World</span>
                <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                <span className="text-muted-foreground font-semibold">Output:</span>
                <span className="text-primary font-medium">Hello Hello Hello World World World</span>
              </div>
            </div>

            <p>
              That distinction matters more than it looks. Repeating a full sentence produces an echo. Repeating each word individually produces a stutter — and the two read completely differently once they&apos;re on the page. A short sentence with a hyphen separator, for example, turns <em>Not today</em> into <em>Not-Not today-today</em> — a different rhythm than a line-break version of the same input, which stacks each repeated word on its own line instead.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why It Works
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <p className="text-foreground/90 leading-relaxed text-base">
              The word-level approach exists because sentence-level repeaters can&apos;t produce it — there&apos;s no way to get a stutter effect or word-specific emphasis out of a tool that only duplicates the whole block. This tool keeps the repeat logic isolated to each word, so separators, counts, and line breaks all apply per-word rather than per-sentence, and the output stays predictable even at high repeat counts or with emoji and multi-language text mixed in.
            </p>
          </div>
        </div>
      </section>

      {/* Word Repeater vs. a Standard Text Repeater */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            Word Repeater vs. a Standard Text Repeater
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-semibold text-foreground">Feature</th>
                  <th className="p-4 font-semibold text-muted-foreground">Standard Text Repeater</th>
                  <th className="p-4 font-semibold text-primary bg-primary/5 border-l border-primary/20">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Word Repeater</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/90">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Repeats</td>
                  <td className="p-4 text-muted-foreground">Whole sentence as one block</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Each word individually
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Effect</td>
                  <td className="p-4 text-muted-foreground">Echo (same line repeated)</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Stutter or per-word emphasis
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Separator applies to</td>
                  <td className="p-4 text-muted-foreground">Between full repeats</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Between each word&apos;s repeats
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Best for</td>
                  <td className="p-4 text-muted-foreground">Bulk duplication, testing, spam</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Dialogue, emphasis, stylistic effects
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Laptop className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Supported Platforms
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed bg-card p-6 rounded-2xl border border-border shadow-sm text-base">
            Works on desktop, laptop, Android, iPhone, and tablet, in Chrome, Firefox, Safari, or Edge. No separate mobile app — the browser version is the only version.
          </p>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Common Use Cases
            </h2>
          </div>
          <ul className="space-y-4">
            {[
              {
                title: "Stutter effect in writing",
                desc: "\"I I I can't believe this\" reads as hesitant speech; a full-sentence repeat can't produce this at all.",
              },
              {
                title: "Emphasis in captions and comments",
                desc: "\"this is SO SO SO good\" pulls focus onto one word without duplicating the whole caption.",
              },
              {
                title: "Song lyrics and spoken word",
                desc: "word-level repetition patterns that would take a while to type by hand generate instantly.",
              },
              {
                title: "QA and developer testing",
                desc: "structured test strings where each token needs a set number of repeats, a different shape of test data than a whole-block repeater produces.",
              },
              {
                title: "Language learning drills",
                desc: "repeating individual vocabulary words mirrors flashcard-style practice more closely than repeating full sentences.",
              },
              {
                title: "Placeholder text for layouts",
                desc: "a single repeated word as filler, without generating full lorem-ipsum-style paragraphs.",
              },
            ].map((item, idx) => (
              <li
                key={idx}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 flex items-start gap-4"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="text-base text-foreground/90 leading-relaxed">
                  <strong className="font-semibold text-foreground">{item.title}</strong> — {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Troubleshooting
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Output looks the same as a regular text repeater.",
                desc: "Double-check your input has more than one word — with a single word, per-word and whole-sentence repetition produce identical results.",
              },
              {
                title: "Separator isn't appearing between words.",
                desc: "Confirm you've selected a separator rather than leaving the default; some separator characters (like a plain space) can be easy to miss visually.",
              },
              {
                title: "High repeat counts feel slow to generate.",
                desc: "Very large word counts multiplied by high repeat counts can take a moment to render, especially on mobile.",
              },
              {
                title: "Emoji repeating oddly.",
                desc: "Some multi-character emoji (flags, skin-tone modifiers) can behave differently than single-character emoji — try a simpler emoji to confirm the separator and count are working as expected.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="font-semibold text-foreground text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto" id="faq-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Tools */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/word-repeater" />
        </div>
      </section>
    </article>
  )
}

