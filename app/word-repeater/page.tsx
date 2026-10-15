import { Metadata } from "next"
import Link from "next/link"
import { WordRepeaterTool } from "@/components/tools/word-repeater-tool"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import {
  Sparkles,
  Zap,
  Copy,
  Laptop,
  CheckCircle2,
  Calculator,
  MessageSquare,
  Sliders,
  FileText,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
  Database,
  Layers,
  Info,
} from "lucide-react"

const PAGE_TITLE = "Word Repeater – Repeat Every Word Individually Online"
const PAGE_DESCRIPTION = "Repeat each word in your text individually with custom separators. Pick presets up to 100x, copy instantly, or download a text file in your browser."
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
    question: "What does Word Repeater do differently from a normal text repeater?",
    answer: "Word Repeater multiplies each individual word in your sentence before advancing to the next, creating word-by-word repetition rather than echoing the entire sentence.",
  },
  {
    question: "Can Word Repeater repeat a single word multiple times?",
    answer: "Yes, entering a single word duplicates that token up to 100 times with your selected separator.",
  },
  {
    question: "What is the maximum number of times Word Repeater can duplicate each word?",
    answer: "The tool supports any whole number from 1 to 100 repeats per word, with quick presets for 2x, 3x, 5x, and 10x.",
  },
  {
    question: "How do custom separators work in Word Repeater?",
    answer: "You can choose preset spaces, dashes, commas, or empty strings, or type custom characters including newlines and tabs between repeated words.",
  },
  {
    question: "Does Word Repeater work with emojis and non-English text?",
    answer: "Yes, standard Unicode characters, symbols, and emojis are treated as distinct words and repeated cleanly.",
  },
  {
    question: "Can I export the repeated text as a file?",
    answer: "Yes, you can copy the text to your clipboard with one click or download it directly as a plain text file.",
  },
  {
    question: "Is my entered text stored or visible to anyone else?",
    answer: "All processing runs privately in your browser, and settings are saved locally to your device's IndexedDB storage until you clear them.",
  },
  {
    question: "Why did punctuation repeat along with my words?",
    answer: "Word Repeater splits input on whitespace, so punctuation touching a word without a space is treated as part of that token.",
  },
  {
    question: "Is Word Repeater free to use on mobile and desktop?",
    answer: "Yes, the tool is entirely free to use on any modern desktop, tablet, or smartphone browser without registration.",
  },
]

export default function WordRepeaterPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Word Repeater",
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Word-level repetition multiplying each token individually rather than the full sentence block",
      "Repeat count controls from 1 to 100 with quick preset buttons (2x, 3x, 5x, 10x)",
      "Flexible word separators including space, dash, comma, empty string, newlines, and custom symbols",
      "Real-time input and output word count alongside exact character count metrics",
      "One-click clipboard copying, keyboard shortcut (Ctrl + Enter), and .txt file downloading",
      "Client-side processing with automatic local persistence in browser IndexedDB",
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

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mytextrepeater.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Word Repeater",
        item: PAGE_URL,
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-10 lg:py-16" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="main-heading">
              Word Repeater
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed" id="intro-subtitle">
              Repeat each word in your text individually, one token at a time, instead of echoing the entire sentence as a single block. Powered by the high-speed text engine behind{" "}
              <Link href="/" className="text-primary font-medium hover:underline inline-flex items-center">
                My Text Repeater
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-10" id="tool-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <WordRepeaterTool />
          <p className="mt-4 text-center text-xs sm:text-sm text-muted-foreground" id="tool-caption">
            Word Repeater splits input by whitespace and multiplies each word individually. Settings auto-save locally to your browser.
          </p>
        </div>
      </section>

      {/* Quick Answer Section (40-60 words) */}
      <section className="border-t border-border bg-card py-12" id="quick-answer-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 space-y-3 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Quick Answer
            </h2>
            <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
              Word Repeater duplicates each individual word inside a sentence before advancing to the next word. Enter your text, set a repetition count from 1 to 100, and choose a separator like a space, comma, or dash. The generator processes words in your browser and outputs a formatted string ready to copy.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="features-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Word Repeater Features
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Precision word-level manipulation designed for drills, speech rhythms, testing, and formatting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Individual Word Multiplication</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Repeats every word independently in sequence instead of copying the whole line as one bulk block.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sliders className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Presets: 2x, 3x, 5x, 10x (Max 100)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Click 2x, 3x, 5x, or 10x presets, or type any custom count up to the tool&apos;s maximum of 100 repeats per word.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Custom Separator Controls</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Choose spaces, dashes, commas, empty strings, newlines (\n), or custom divider symbols between word copies.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calculator className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Live Word &amp; Character Counts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Track input words, output words, and exact character counts live as settings update.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Copy className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Fast Copy &amp; TXT Export</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Copy instantly with one click, use Ctrl + Enter shortcut, or download a clean .txt file to your device.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Local State Persistence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Settings and input save automatically to your browser&apos;s IndexedDB, preventing accidental data loss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="border-t border-border bg-muted/20 py-14 cv-auto" id="how-to-use-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How to Repeat Each Word in 4 Steps
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Follow this step-by-step process to generate word-by-word repetitions with precise formatting.
            </p>
          </div>

          <ol className="space-y-3.5 list-none">
            {[
              {
                step: "Type or paste your text",
                desc: "Enter a single word, phrase, or sentence into the input box. The tool counts your words automatically.",
              },
              {
                step: "Select your repeat count (1 to 100)",
                desc: "Click a preset button (2x, 3x, 5x, or 10x) or type a specific integer up to 100 in the repetition box.",
              },
              {
                step: "Choose or type a word separator",
                desc: "Select Space, Dash (-), Comma (,), None, or type custom characters such as newlines (\\n) or vertical pipes (|).",
              },
              {
                step: "Copy or download the output",
                desc: "Check the live character count, then click Copy to Clipboard, press Ctrl + Enter, or download the output as a .txt file.",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-4 text-base text-foreground/90 shadow-xs"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-xs text-primary-foreground">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-base">{item.step}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm sm:text-base text-foreground/90 flex items-start gap-3 shadow-xs">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Formatting Tip on Line Breaks:</strong> The separator applies strictly between copies of the same word, while distinct words remain joined by a single space. For example, entering <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">\n</code> on a single word creates a vertical list of that word, but on multi-word text like &quot;Hello World&quot;, each word stack is separated by a space on the boundary line (&quot;Hello\nHello World\nWorld&quot;).
            </p>
          </div>
        </div>
      </section>

      {/* What Is Word Repeater & Why It Works */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="what-is-word-repeater-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is Word Repeater and How Does It Work?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            Most text repetition tools copy an entire phrase or paragraph as a single block. Word Repeater works at the token level: it parses your input into individual words by detecting whitespace boundaries, duplicates each individual word to your specified count, joins them using your chosen separator, and then stitches the resulting word groups back into a sentence.
          </p>

          <div className="rounded-xl border border-border bg-card p-5 font-mono text-sm space-y-3 shadow-xs">
            <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Example Transformation:</div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-muted-foreground">Input:</span>
              <span className="font-semibold text-foreground">Hello World</span>
              <ArrowRight className="hidden sm:inline h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Output (3x, Space):</span>
              <span className="text-primary font-semibold">Hello Hello Hello World World World</span>
            </div>
          </div>

          <p className="text-foreground/90 leading-relaxed text-base">
            This distinction is fundamental. Repeating a complete sentence generates an echo (<code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Hello World Hello World</code>). Repeating each word individually creates a rhythmic stutter or localized emphasis (<code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">Hello Hello World World</code>). Changing the separator alters the tone: a hyphen turns <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">No way</code> into <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">No-No way-way</code>, while a comma formats keywords for code arrays or tags.
          </p>
        </div>
      </section>

      {/* Worked Examples Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="worked-examples-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Worked Examples with Exact Character Counts
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Review exact inputs, settings, outputs, and character lengths generated by Word Repeater.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-background p-5 space-y-3 shadow-xs">
              <div className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                Example 1: Space Separator
              </div>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p><strong className="text-foreground">Input:</strong> &quot;Focus on goals&quot;</p>
                <p><strong className="text-foreground">Repeat Count:</strong> 3x</p>
                <p><strong className="text-foreground">Separator:</strong> Space (&quot; &quot;)</p>
                <p><strong className="text-foreground">Total Characters:</strong> 44</p>
              </div>
              <div className="rounded-lg bg-muted/60 p-3 font-mono text-xs text-foreground/90 break-all select-all">
                Focus Focus Focus on on on goals goals goals
              </div>
              <p className="text-xs text-muted-foreground">
                Ideal for speech emphasis and vocal repetition patterns.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-3 shadow-xs">
              <div className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                Example 2: Dash Separator
              </div>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p><strong className="text-foreground">Input:</strong> &quot;Ready Set Go&quot;</p>
                <p><strong className="text-foreground">Repeat Count:</strong> 2x</p>
                <p><strong className="text-foreground">Separator:</strong> Dash (&quot;-&quot;)</p>
                <p><strong className="text-foreground">Total Characters:</strong> 25</p>
              </div>
              <div className="rounded-lg bg-muted/60 p-3 font-mono text-xs text-foreground/90 break-all select-all">
                Ready-Ready Set-Set Go-Go
              </div>
              <p className="text-xs text-muted-foreground">
                Creates hyphenated cadence phrases and urgent soundbites.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-3 shadow-xs">
              <div className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                Example 3: Comma Separator
              </div>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p><strong className="text-foreground">Input:</strong> &quot;apple banana cherry&quot;</p>
                <p><strong className="text-foreground">Repeat Count:</strong> 2x</p>
                <p><strong className="text-foreground">Separator:</strong> Comma (&quot;, &quot;)</p>
                <p><strong className="text-foreground">Total Characters:</strong> 42</p>
              </div>
              <div className="rounded-lg bg-muted/60 p-3 font-mono text-xs text-foreground/90 break-all select-all">
                apple, apple banana, banana cherry, cherry
              </div>
              <p className="text-xs text-muted-foreground">
                Useful for generating paired keyword tags and database sample tokens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Formula Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="length-formula-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Formula to Calculate Output Character Length
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed text-base">
            When preparing text for character-limited platforms, you can accurately predict the exact length of your repeated output before generating it.
          </p>

          <div className="rounded-xl border border-border bg-card p-5 space-y-4 shadow-xs">
            <div>
              <h3 className="font-semibold text-foreground text-base">Single-Word Plain Text Formula</h3>
              <div className="mt-1.5 rounded-lg bg-muted/60 p-3 font-mono text-sm text-foreground font-semibold leading-relaxed">
                single word = (word length × N) + (separator length × (N − 1))
              </div>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Where N is your repeat count. For example, repeating the 5-letter word &quot;Focus&quot; 4 times with a single space separator: (5 × 4) + (1 × 3) = 23 characters (&quot;Focus Focus Focus Focus&quot;).
              </p>
            </div>

            <div className="border-t border-border pt-3">
              <h3 className="font-semibold text-foreground text-base">Multi-Word Plain Text Formula</h3>
              <div className="mt-1.5 rounded-lg bg-muted/60 p-3 font-mono text-sm text-foreground font-semibold leading-relaxed">
                multi-word = sum of each word&apos;s result + one space between word blocks
              </div>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Calculate the single-word length for each token in your input using the formula above, sum them together, and add (W − 1) characters for the single spaces inserted between word blocks (where W is the total number of words). For &quot;Ready Set Go&quot; 2x with dash: Ready-Ready (11) + Set-Set (7) + Go-Go (5) + 2 spaces = 25 characters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="comparison-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Word Repeater vs. Full Text Repeater
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Both tools offer word-level repeating, but each is tailored to different workflow needs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-background shadow-xs">
            <table className="w-full text-left text-sm text-foreground">
              <thead className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Feature</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Word Repeater</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Full Text Repeater (Homepage)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Primary Focus</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground font-medium">Dedicated word-by-word multiplication interface</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Multi-mode tool (Characters, Words, Lines, Paragraphs)</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Word-by-Word Mode</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground font-medium">Always enabled by default</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Available as &quot;Words&quot; mode option</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Repetition Count</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground font-medium">1 to 100 repeats per word (Presets: 2x, 3x, 5x, 10x)</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">1 to 10,000 repeats (Presets: 10, 50, 100, 500, 1000)</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Live Word Metrics</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground font-medium">Shows both input word count and output word count live</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Shows input word count, output character count, and line count</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Pre-loaded Quick Separators</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground font-medium">Space, Dash (-), Comma (,), None, plus custom text</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">New Line, Space, Comma, Period, None, plus custom text</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Best For</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground font-medium">Focused dialogue stutter, spelling drills, token cadence</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">High-count bulk repetitions and whole-document echoing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="supported-platforms-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Laptop className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Supported Browsers &amp; Platform Guidance
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed text-base">
            Word Repeater runs client-side in any modern HTML5 web browser, including Chrome, Safari, Firefox, and Edge on iOS, Android, macOS, Windows, and Linux. No app downloads or browser extensions are required.
          </p>

          <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-xs">
            <h3 className="font-semibold text-foreground text-base">Pasting into Target Apps</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Messaging Apps:</strong> Words repeated with space separators paste cleanly as plain text into direct messages, chat threads, and social media captions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Single-Word Vertical Lists:</strong> When repeating a single word with <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">\n</code>, the output creates a vertical column that pastes down consecutive rows in spreadsheet software like Google Sheets or Microsoft Excel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Code &amp; Markup:</strong> Use comma separators (<code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">, </code>) to prepare array arguments, mock tags, or CSV seed data.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="use-cases-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Practical Real-World Use Cases
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-background p-4 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Creative Writing &amp; Dialogue
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Writers create authentic character hesitation, stuttering dialogue (&quot;I I I don&apos;t know&quot;), or intense chanting without tedious manual keying.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-4 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Vocabulary &amp; Spelling Drills
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Educators and students quickly generate structured spelling lists, flashcard repetition sets, and memorization exercises.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-4 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Social Media Emphasis
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Content creators add energetic emphasis to captions (&quot;This is SO SO SO good&quot;) or convert casing with our{" "}
                <Link href="/case-converter" className="text-primary font-medium hover:underline">
                  Case Converter
                </Link>{" "}
                for uppercase impact.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-4 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                Software QA &amp; Token Stress Tests
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Developers verify how text inputs, form validation scripts, and responsive layouts handle long runs of repeated identical tokens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="troubleshooting-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Troubleshooting &amp; Edge Cases
            </h2>
          </div>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">The output looks identical to a standard text repeater</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If your input consists of only a single word (such as &quot;Hello&quot;), repeating that word produces the same visual output as a sentence repeater. Enter two or more words separated by a space to observe the word-by-word multiplication pattern.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Punctuation marks repeated unexpectedly</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Word Repeater splits text on whitespace boundaries. If you type &quot;Wait, stop!&quot;, the tokens are interpreted as <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">&quot;Wait,&quot;</code> and <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">&quot;stop!&quot;</code>. With 2x repetition, it outputs <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">&quot;Wait, Wait, stop! stop!&quot;</code>. To avoid repeating punctuation, remove commas and periods before generating.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Hyphenated compound words were treated as one word</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Words connected by hyphens without spaces (like &quot;state-of-the-art&quot;) are treated as a single token. Add spaces between the parts if you wish to repeat the individual sub-words independently.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Newlines did not create separate lines in your destination app</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Typing <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">\n</code> inserts real line breaks into the output. However, some social media comment boxes strip multi-line whitespace automatically. Test your output in a plain text editor first to verify the line feeds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Limits of the Tool */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="limits-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Honest Limits of Word Repeater
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            While Word Repeater handles everyday word duplication tasks with high speed, keep these technical boundaries in mind:
          </p>
          <ul className="space-y-2.5 text-sm sm:text-base text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>100x Repetition Cap:</strong> The repeat count input allows integers up to 100 per word. If you require thousands of bulk repeats across an entire paragraph, use the main <Link href="/" className="text-primary underline">Text Repeater</Link> on our homepage instead.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Whitespace Splitting:</strong> The generator tokenizes strictly based on standard whitespace characters (<code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">/\s+/</code>). It does not perform dictionary parsing or grammatical tokenization.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Maximum Output Ceiling:</strong> With a 100x cap, repeating a moderate sentence of 20 to 50 words produces outputs of several thousand to tens of thousands of characters. For massive test payloads (e.g., millions of characters or 10,000 whole-block iterations), use the homepage tool.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Privacy & Storage Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="privacy-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-foreground font-bold text-lg">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Accurate Privacy &amp; Data Storage
            </div>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Word Repeater runs entirely inside your web browser using client-side JavaScript. Your text is never transmitted over a network, uploaded to a remote server, or stored in an external database. For convenience, the tool saves your current input text, repeat count, and chosen separator to your browser&apos;s local IndexedDB so you can resume work after refreshing. You can permanently erase this local data at any time by clicking the Clear button.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="faq-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-2 justify-center mb-10">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground text-center">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="border-t border-border bg-background py-12 cv-auto" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/word-repeater" />
        </div>
      </section>
    </article>
  )
}
