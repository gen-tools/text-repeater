import { Metadata } from "next"
import Image from "next/image"
import { WordRepeaterTool } from "@/components/tools/word-repeater-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import heroImage from "@/src/assets/images/word_repeater_hero_1784377297978.jpg"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, Shield, Laptop, HelpCircle } from "lucide-react"

const PAGE_TITLE = "Word Repeater — Repeat Each Word in Text Instantly"
const PAGE_DESCRIPTION = "Repeat each word in your text on its own up to 10,000 times with custom separators, live word count, and instant copy or download."
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
    answer: "It's a tool that repeats each word in your text individually, a set number of times, rather than copying the entire sentence as one block.",
  },
  {
    question: "How is this different from a regular text repeater?",
    answer: "A text repeater duplicates your whole input as-is. This tool breaks your input into words first, then repeats each word on its own before moving to the next — so \"hello world\" becomes \"hello hello hello world world world\" instead of \"hello world hello world hello world.\"",
  },
  {
    question: "Can I repeat just one word?",
    answer: "Yes. Type a single word instead of a full sentence, and only that word gets repeated.",
  },
  {
    question: "Can I repeat emojis?",
    answer: "Yes, emojis are treated the same as any other word and repeat cleanly without breaking.",
  },
  {
    question: "Can I customize the separator between repeated words?",
    answer: "Yes — space, comma, hyphen, underscore, line break, or any custom character you type in.",
  },
  {
    question: "Can I copy the output?",
    answer: "Yes, a one-click copy button sends the result straight to your clipboard.",
  },
  {
    question: "Can I download the output?",
    answer: "Yes, there's a download option that saves the result as a .txt file.",
  },
  {
    question: "Is it free?",
    answer: "Yes, there's no cost and no paywalled features.",
  },
  {
    question: "Does it work on mobile?",
    answer: "Yes, it works the same way on Android and iPhone browsers as it does on desktop.",
  },
  {
    question: "Is my text stored anywhere?",
    answer: "No. Processing happens locally in your browser, and nothing is uploaded or saved on our end.",
  },
  {
    question: "How many repetitions are supported?",
    answer: "Up to 10,000 repetitions per word.",
  },
  {
    question: "Can I repeat words on separate lines instead of side by side?",
    answer: "Yes — set the separator to a line break and each repetition stacks vertically instead of running across the line.",
  },
  {
    question: "Do I need an account?",
    answer: "No signup or login is required at any point.",
  },
]

export default function WordRepeaterPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Word Repeater",
    description: "Free online word repeater tool to repeat individual words in your text with custom delimiters up to 10,000 times.",
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
      "Repeat each word individually up to 10,000 times",
      "Custom word separators (space, comma, dash, newline, custom)",
      "Live word and character statistics",
      "Instant copy and download as text file",
      "Completely free with zero server storage",
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
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty" id="intro-subtitle">
              Repeat each word in your text on its own, one at a time, instead of copying the whole sentence as a single block.
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

      {/* Introduction Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Introduction
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            A word repeater repeats each word in your text on its own, one at a time, instead of copying the whole sentence as a single block. Type &quot;hello world&quot; and set the count to 3, and you get &quot;hello hello hello world world world&quot; — every word gets its own repeat cycle before the next word starts. Writers use it for stutter and stammer effects in dialogue, social media users use it to add emphasis inside a caption, and developers use it to build word-level test strings. It&apos;s free, works instantly in your browser, and doesn&apos;t require an account.
          </p>
        </div>
      </section>

      {/* What "Repeating Each Word" Actually Means */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What &quot;Repeating Each Word&quot; Actually Means
          </h2>
          <p className="mb-6 text-foreground/90 leading-relaxed">
            Most repeater tools only know how to do one thing: take your whole sentence and copy it as a block. This one works differently — it goes word by word, repeating each one before moving to the next.
          </p>

          <div className="rounded-xl border border-border bg-card p-6 my-6 shadow-sm font-mono text-sm space-y-2 text-foreground/90">
            <p><strong>Input:</strong> Hello World</p>
            <p><strong>Output:</strong> Hello Hello Hello World World World</p>
          </div>

          <p className="text-foreground/90 leading-relaxed">
            That difference sounds small until you need it. Repeating a full sentence gives you an echo. Repeating each word individually gives you a stutter — and those two effects read completely differently on the page.
          </p>
        </div>
      </section>

      {/* How to Repeat Each Word */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How to Repeat Each Word
          </h2>
          <ol className="space-y-4 mb-6">
            {[
              { title: "Enter your text", desc: "Paste or type the word, phrase, or sentence you want to work with." },
              { title: "Choose the repeat count", desc: "Decide how many times each word should repeat before moving to the next one." },
              { title: "Select a separator", desc: "Pick a space, hyphen, underscore, comma, or line break to place between each repetition." },
              { title: "Generate the output", desc: "The repeated version appears immediately, with a live word count next to it." },
              { title: "Copy or download", desc: "Send the result to your clipboard or save it as a .txt file." },
            ].map((step, idx) => (
              <li key={idx} className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-foreground/90 leading-relaxed">
            Switching the separator to a line break turns the same input into a vertical stack instead of a horizontal run — useful when you want the repetition to read top to bottom rather than left to right.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Repeats every word individually — each word gets its own repeat cycle instead of the whole line copying as one piece.",
              "Supports up to 10,000 repetitions per word — enough for dense test strings or long stylistic effects without hitting a wall.",
              "Custom separators — space, comma, hyphen, underscore, new line, or any character you choose between repetitions.",
              "Live word count — see how many words are in your output before you copy anything.",
              "Live character count — useful when you're working against a platform's character limit.",
              "One-click copy — the finished text goes straight to your clipboard.",
              "Download as .TXT — save the output as a file instead of copying it.",
              "Full emoji support — repeat emojis the same way you'd repeat any word, without them breaking or dropping out.",
              "Unicode support — text in other languages and scripts repeats correctly, not just plain English characters.",
              "Works on mobile and desktop — the same tool, no separate app or version.",
              "Runs in your browser — nothing to install, nothing to configure.",
              "No signup — open the page and start typing.",
              "Fast generation — output appears as soon as you click generate, even at high repeat counts.",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-card/60 p-3 text-sm text-foreground/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What People Actually Use This For */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What People Actually Use This For
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">The stutter effect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Writers use word-by-word repetition to mimic a stammer, a nervous pause, or hesitant speech in dialogue. &quot;I I I can&apos;t believe this&quot; reads nothing like a repeated full sentence would — the repetition sits inside the line instead of duplicating it.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Emphasis in captions and comments</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Repeating one key word inside a longer sentence — &quot;this is SO SO SO good&quot; — pulls attention to that word specifically. Repeating the entire caption instead would bury the emphasis rather than sharpen it.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Song lyrics and spoken word</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Word-level repetition shows up constantly in lyrics, chants, and spoken-word pieces. Building that pattern by hand, word by word, is slow; generating it takes seconds.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Text-based patterns</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Designers sometimes tile a single repeated word across a line as a visual filler or background pattern rather than something meant to be read as a sentence.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">QA and developer testing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Developers use word-level repetition to build structured test strings where each token needs to repeat a set number of times — a different shape of test data than a whole-block repeater produces, useful for checking how a field or parser handles repeated tokens.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Social platforms</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                WhatsApp, Discord, Instagram, and TikTok all show up as places where a single repeated word inside a message or caption gets used for comic timing or emphasis, rather than repeating the whole post.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Language learning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Students repeating individual vocabulary words — rather than full sentences — often find it closer to how flashcard drills actually work, since the focus stays on one word at a time.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Teachers building practice material</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A worksheet that repeats target words individually, without full sentences padding out the page, is quicker to build here than by typing each repetition by hand.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Placeholder and draft content</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Writers occasionally need a single repeated word as filler text while blocking out a layout, without generating full paragraphs of lorem-ipsum-style content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Examples */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            More Examples
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-semibold text-foreground mb-3">Multiple words</h3>
              <div className="bg-muted/50 p-3 rounded-lg font-mono text-xs space-y-1 text-foreground/90">
                <p><strong>Input:</strong> SEO Tools</p>
                <p><strong>Repeat:</strong> 3</p>
                <p><strong>Output:</strong> SEO SEO SEO</p>
                <p className="pl-[52px]">Tools Tools Tools</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-semibold text-foreground mb-3">Emoji repetition</h3>
              <div className="bg-muted/50 p-3 rounded-lg font-mono text-xs space-y-1 text-foreground/90">
                <p><strong>Input:</strong> 🔥</p>
                <p><strong>Repeat:</strong> 5</p>
                <p><strong>Output:</strong> 🔥🔥🔥🔥🔥</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-semibold text-foreground mb-3">Short sentence, separator changed to a hyphen</h3>
              <div className="bg-muted/50 p-3 rounded-lg font-mono text-xs space-y-1 text-foreground/90">
                <p><strong>Input:</strong> Not today</p>
                <p><strong>Repeat:</strong> 2</p>
                <p><strong>Output:</strong> Not-Not today-today</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-semibold text-foreground mb-3">Line-break separator</h3>
              <div className="bg-muted/50 p-3 rounded-lg font-mono text-xs space-y-1 text-foreground/90">
                <p><strong>Input:</strong> Wait</p>
                <p><strong>Repeat:</strong> 3</p>
                <p><strong>Output:</strong> Wait</p>
                <p className="pl-[52px]">Wait</p>
                <p className="pl-[52px]">Wait</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Privacy
            </h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <p className="text-foreground/90 leading-relaxed text-sm">
              Everything happens locally in your browser. Your text isn&apos;t uploaded to a server, isn&apos;t stored anywhere after you close the page, and doesn&apos;t require an account to generate or download. There&apos;s nothing to log in for and nothing saved on our end once you leave.
            </p>
          </div>
        </div>
      </section>

      {/* Works On */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Laptop className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Works On
            </h2>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <p className="text-foreground/90 leading-relaxed text-sm">
              Desktop, laptop, Android, iPhone, and tablet — in Chrome, Firefox, Safari, or Edge. No separate mobile app and no installation step; the browser version is the only version.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 border-t border-border bg-background cv-auto" id="faq-section">
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
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/word-repeater" />
        </div>
      </section>
    </article>
  )
}
