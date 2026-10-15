import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { EmojiRepeaterTool } from "@/components/tools/emoji-repeater-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import heroImage from "@/src/assets/images/emoji_repeater_hero_1784377315127.webp"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Zap, ShieldCheck, Sparkles, Sliders, Hash, AlertTriangle, CheckCircle2, Copy, FileText, ArrowRight } from "lucide-react"

const PAGE_TITLE = "Emoji Repeater Online | Repeat Emojis Up to 10,000 Times"
const PAGE_DESCRIPTION = "Repeat any emoji up to 10,000 times in your browser. Quick-pick popular emojis, customize spaces or line breaks, copy instantly, or download as a text file."
const PAGE_URL = "https://mytextrepeater.com/emoji-repeater"

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
    question: "What is an emoji repeater?",
    answer:
      "An emoji repeater is a free browser tool that duplicates single emojis or emoji strings up to 10,000 times in one click. It formats them with your chosen separator (spaces, newlines, commas, or none) and provides instant one-click copying and TXT file downloads.",
  },
  {
    question: "How does Emoji Repeater differ from the homepage Text Repeater?",
    answer:
      "The homepage Text Repeater is a multi-mode tool with full repetition granularity (entire text, each word, each line, each paragraph). The Emoji Repeater is dedicated to quick emoji repetition: it provides a 15-emoji quick-pick bar, single-field emoji input, auto-saving to local IndexedDB, and rapid presets (10, 50, 100, 500, 1000). Both share the same underlying browser repetition engine.",
  },
  {
    question: "Why does the tool show more characters than the number of emojis I see?",
    answer:
      "The counter shows JavaScript string length (.length), which measures 16-bit UTF-16 code units. Most modern emojis live outside the Basic Multilingual Plane and require two code units (a surrogate pair), while skin-tone modifiers and ZWJ family sequences require 4 to 11 code units per visible emoji symbol.",
  },
  {
    question: "Will complex skin tones, national flags, and family emojis break apart?",
    answer:
      "No. The tool repeats the exact byte sequence of your string. Because the zero-width joiners (U+200D) and regional indicator pairs remain intact within each repeated unit, modern operating systems render them as unified emoji glyphs.",
  },
  {
    question: "Can I repeat multiple different emojis together, like fire and heart?",
    answer:
      "Yes. You can paste any string into the input field (e.g., '🔥❤️' or '🎉✨'). The tool will duplicate that entire cluster for the chosen repeat count.",
  },
  {
    question: "Why does an emoji look different on my friend's iPhone than on my Android phone?",
    answer:
      "Emoji shapes are rendered by local system fonts (Apple Color Emoji on iOS/macOS, Noto Color Emoji on Android/Google, Segoe UI Emoji on Windows). The tool outputs standard Unicode text characters; visual appearance is determined entirely by the recipient's operating system.",
  },
  {
    question: "Why does an emoji turn into a blank box or question mark (tofu)?",
    answer:
      "A missing glyph box (known as tofu or .notdef) appears when the receiving device's operating system is running an older OS version that predates the Unicode release of that specific emoji.",
  },
  {
    question: "Does this tool send my text or emojis to an external server?",
    answer:
      "No. All string duplication, separator joining, and character counting happen entirely inside your web browser via client-side JavaScript. Your text never leaves your device.",
  },
]

export default function EmojiRepeaterPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Emoji Repeater Online",
    description: "Free online emoji repeater tool to repeat emojis up to 10,000 times with custom separators, one-click copy, and download options.",
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
      "Repeat single or combined emojis up to 10,000 times",
      "Quick-pick toolbar with 15 popular emojis (hearts, fire, sparkles, skull)",
      "Repeat count presets (10, 50, 100, 500, 1,000) and manual numeric entry",
      "Separator presets for space, none, newline, and comma",
      "Local persistence in browser IndexedDB with auto-restore",
      "Full support for Unicode surrogate pairs, skin tone modifiers, and ZWJ sequences",
      "One-click copy to clipboard with Ctrl+Enter shortcut",
      "Direct TXT file download for large emoji payloads",
      "100% private in-browser generation with zero server tracking",
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
    <article className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              Emoji Repeater
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
              Duplicate single emojis or emoji combinations up to 10,000 times instantly. Pick from popular emoji presets, choose your spacing or line breaks, and copy the full output to your clipboard or download it as a text file.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <EmojiRepeaterTool />
        </div>
      </section>

      {/* Featured Visual Illustration */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Emoji Repeater Online interface showing emoji duplication controls"
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

      {/* Quick Answer */}
      <section className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Quick Answer: How the Emoji Repeater Works</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The <strong>Emoji Repeater</strong> duplicates any emoji, emoji sequence, or mixed text up to <strong>10,000 times</strong> entirely in your browser. Choose an emoji from the 15-emoji quick picker or paste your own, set a count (with presets for 10, 50, 100, 500, or 1000), select a separator (space, newline, comma, or none), and click <strong>Copy to Clipboard</strong> or <strong>Download TXT</strong>. Everything runs locally in client-side JavaScript with zero server transmission.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-center sm:text-3xl">
            Key Tool Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">15 Quick-Pick Emojis</h3>
              <p className="text-sm text-muted-foreground">
                One-tap buttons for trending symbols: ❤️, 😂, 🔥, 👍, ✨, 🎉, 💯, 🙏, 😍, 🥺, 😭, 💀, 👀, 🤣, and 💕 without needing an OS picker.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Hash className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Count Presets &amp; Custom Cap</h3>
              <p className="text-sm text-muted-foreground">
                Instant shortcuts for 10, 50, 100, 500, and 1,000 repetitions, or enter any exact number up to 10,000 in the numeric input.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sliders className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Flexible Separator Options</h3>
              <p className="text-sm text-muted-foreground">
                Apply one-tap separators for single Space, None (continuous block), Newline (\n), Comma (, ), or type custom dividers.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Local IndexedDB Auto-Save</h3>
              <p className="text-sm text-muted-foreground">
                Your input emoji, repeat count, and separator persist in your browser’s IndexedDB storage and restore automatically across visits.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Complex Unicode Fidelity</h3>
              <p className="text-sm text-muted-foreground">
                Safe byte repetition preserving surrogate pairs, Fitzpatrick skin tones, regional flag pairs, and Zero-Width Joiner (ZWJ) sequences.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Copy &amp; TXT File Export</h3>
              <p className="text-sm text-muted-foreground">
                One-click clipboard copy (plus Ctrl+Enter shortcut), Web Share API support, and direct .txt file download for massive outputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">How to Use the Emoji Repeater</h2>
          <ol className="space-y-4 text-muted-foreground list-decimal list-inside">
            <li className="pl-1">
              <strong className="text-foreground">Choose or enter your emoji:</strong> Click one of the 15 icons in the Quick Pick bar (like ❤️ or 🔥) or paste your own emoji string directly into the input box.
            </li>
            <li className="pl-1">
              <strong className="text-foreground">Set your repetition count:</strong> Click a quick preset button (10, 50, 100, 500, 1000) or type an exact quantity between 1 and 10,000.
            </li>
            <li className="pl-1">
              <strong className="text-foreground">Select a separator:</strong> Tap <em>Space</em> for spaced emojis, <em>None</em> for a solid block, <em>Newline</em> to place each emoji on its own line, or type a custom string.
            </li>
            <li className="pl-1">
              <strong className="text-foreground">Review the live output:</strong> Inspect the preview box and the live character counter, which updates instantly via deferred React rendering.
            </li>
            <li className="pl-1">
              <strong className="text-foreground">Copy or export:</strong> Click <strong>Copy to Clipboard</strong> (or press <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">Ctrl+Enter</kbd>), click <strong>Download TXT</strong> to save a text file, or use <strong>Share</strong> on supported mobile browsers.
            </li>
          </ol>
        </div>
      </section>

      {/* Unicode Technical Guide */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            How Unicode Represents Emojis: UTF-16, Code Points, and Grapheme Clusters
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When you look at an emoji on your screen, your eyes perceive a single picture (known in typography and linguistics as a <strong>user-perceived character</strong> or <strong>grapheme cluster</strong>). However, computers, programming languages, and social networks measure text through internal memory units. This difference is why character counters often display numbers that seem counterintuitive.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1">1. UTF-16 Code Units (JavaScript String Length)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                JavaScript strings are encoded in 16-bit units (<a href="https://en.wikipedia.org/wiki/UTF-16" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UTF-16</a>). Characters in the Basic Multilingual Plane (like English letters and simple symbols like ✨ Sparkles) fit into a single 16-bit code unit (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">&quot;✨&quot;.length === 1</code>). Most emojis, however, are assigned code points above U+FFFF and must be split into two 16-bit halves called a <em>surrogate pair</em>. As a result, standard emojis like Fire (🔥) report a JavaScript length of 2 (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">&quot;🔥&quot;.length === 2</code>).
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1">2. Unicode Code Points (Array Spread / Iterators)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A Unicode code point represents a single 21-bit integer address defined by the <a href="https://unicode.org/reports/tr51/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Unicode Consortium</a>. In modern JavaScript, iterating over a string using an array spread (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">[...text]</code>) or <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">Array.from(text)</code> recognizes surrogate pairs as single code points. For Fire (🔥), <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">[...&quot;🔥&quot;].length === 1</code>.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1">3. Compound Sequences: Modifiers, Flags, and ZWJ</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Many modern emojis are built by chaining multiple code points together:
              </p>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Skin-Tone Modifiers:</strong> A base emoji plus a Fitzpatrick modifier (U+1F3FB through U+1F3FF). For example, 👍🏾 (Thumbs Up: Medium-Dark Skin Tone) combines U+1F44D and U+1F3FE. It has 2 code points and a JavaScript string length of 4.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Flag Sequences:</strong> National flags combine two Regional Indicator Symbols. The French flag (🇫🇷) joins Regional Indicator F (U+1F1EB) and R (U+1F1F7). It consists of 2 code points and 4 UTF-16 code units.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Zero-Width Joiner (ZWJ) Sequences:</strong> Complex characters like 👩🏿‍💻 (Woman Technologist: Dark Skin Tone) join a woman emoji (U+1F469), a dark skin tone modifier (U+1F3FF), an invisible Zero-Width Joiner (<code className="font-mono text-xs text-foreground">U+200D</code>), and a laptop (U+1F4BB). This single visible glyph contains 4 code points and 7 UTF-16 code units. Family emojis like 👨‍👩‍👧‍👦 contain 7 code points and 11 UTF-16 code units.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unicode Metric Comparison Table */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-center sm:text-3xl">
            Real Emoji Data: Character Counts, Code Points, and Repeat Payloads
          </h2>
          <p className="mb-8 text-center text-muted-foreground text-sm max-w-2xl mx-auto">
            The table below demonstrates the exact byte and character math for single emojis compared against 10 repetitions with no separator and 10 repetitions with a single space separator.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/60 font-semibold text-foreground">
                <tr>
                  <th className="p-3 sm:p-4">Emoji</th>
                  <th className="p-3 sm:p-4">Name &amp; Type</th>
                  <th className="p-3 sm:p-4">Single Glyph UTF-16</th>
                  <th className="p-3 sm:p-4">Single Glyph Code Points</th>
                  <th className="p-3 sm:p-4">10x (No Sep) UTF-16</th>
                  <th className="p-3 sm:p-4">10x (Space Sep) UTF-16</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr className="hover:bg-muted/20">
                  <td className="p-3 sm:p-4 text-2xl">❤️</td>
                  <td className="p-3 sm:p-4 font-medium text-foreground">
                    Red Heart <span className="block text-xs font-normal text-muted-foreground">Base + Variation Selector-16 (U+2764 U+FE0F)</span>
                  </td>
                  <td className="p-3 sm:p-4">2 units</td>
                  <td className="p-3 sm:p-4">2 code points</td>
                  <td className="p-3 sm:p-4 font-mono">20 chars</td>
                  <td className="p-3 sm:p-4 font-mono">29 chars</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="p-3 sm:p-4 text-2xl">🔥</td>
                  <td className="p-3 sm:p-4 font-medium text-foreground">
                    Fire <span className="block text-xs font-normal text-muted-foreground">Standard Surrogate Pair (U+1F525)</span>
                  </td>
                  <td className="p-3 sm:p-4">2 units</td>
                  <td className="p-3 sm:p-4">1 code point</td>
                  <td className="p-3 sm:p-4 font-mono">20 chars</td>
                  <td className="p-3 sm:p-4 font-mono">29 chars</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="p-3 sm:p-4 text-2xl">✨</td>
                  <td className="p-3 sm:p-4 font-medium text-foreground">
                    Sparkles <span className="block text-xs font-normal text-muted-foreground">Basic Multilingual Plane (U+2728)</span>
                  </td>
                  <td className="p-3 sm:p-4">1 unit</td>
                  <td className="p-3 sm:p-4">1 code point</td>
                  <td className="p-3 sm:p-4 font-mono">10 chars</td>
                  <td className="p-3 sm:p-4 font-mono">19 chars</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="p-3 sm:p-4 text-2xl">👍</td>
                  <td className="p-3 sm:p-4 font-medium text-foreground">
                    Thumbs Up <span className="block text-xs font-normal text-muted-foreground">Default Base (U+1F44D)</span>
                  </td>
                  <td className="p-3 sm:p-4">2 units</td>
                  <td className="p-3 sm:p-4">1 code point</td>
                  <td className="p-3 sm:p-4 font-mono">20 chars</td>
                  <td className="p-3 sm:p-4 font-mono">29 chars</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="p-3 sm:p-4 text-2xl">👍🏾</td>
                  <td className="p-3 sm:p-4 font-medium text-foreground">
                    Thumbs Up (Medium-Dark) <span className="block text-xs font-normal text-muted-foreground">Base + Fitzpatrick Skin Tone (U+1F44D U+1F3FE)</span>
                  </td>
                  <td className="p-3 sm:p-4">4 units</td>
                  <td className="p-3 sm:p-4">2 code points</td>
                  <td className="p-3 sm:p-4 font-mono">40 chars</td>
                  <td className="p-3 sm:p-4 font-mono">49 chars</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="p-3 sm:p-4 text-2xl">🇫🇷</td>
                  <td className="p-3 sm:p-4 font-medium text-foreground">
                    Flag: France <span className="block text-xs font-normal text-muted-foreground">Regional Indicator Pair (U+1F1EB U+1F1F7)</span>
                  </td>
                  <td className="p-3 sm:p-4">4 units</td>
                  <td className="p-3 sm:p-4">2 code points</td>
                  <td className="p-3 sm:p-4 font-mono">40 chars</td>
                  <td className="p-3 sm:p-4 font-mono">49 chars</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="p-3 sm:p-4 text-2xl">👩🏿‍💻</td>
                  <td className="p-3 sm:p-4 font-medium text-foreground">
                    Woman Tech (Dark) <span className="block text-xs font-normal text-muted-foreground">ZWJ Sequence (U+1F469 U+1F3FF U+200D U+1F4BB)</span>
                  </td>
                  <td className="p-3 sm:p-4">7 units</td>
                  <td className="p-3 sm:p-4">4 code points</td>
                  <td className="p-3 sm:p-4 font-mono">70 chars</td>
                  <td className="p-3 sm:p-4 font-mono">79 chars</td>
                </tr>
                <tr className="hover:bg-muted/20">
                  <td className="p-3 sm:p-4 text-2xl">👨‍👩‍👧‍👦</td>
                  <td className="p-3 sm:p-4 font-medium text-foreground">
                    Family: 4-Person <span className="block text-xs font-normal text-muted-foreground">ZWJ Sequence (Man+ZWJ+Woman+ZWJ+Girl+ZWJ+Boy)</span>
                  </td>
                  <td className="p-3 sm:p-4">11 units</td>
                  <td className="p-3 sm:p-4">7 code points</td>
                  <td className="p-3 sm:p-4 font-mono">110 chars</td>
                  <td className="p-3 sm:p-4 font-mono">119 chars</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Output Length Formulas */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            Formulas: Predicting Character Counts and Payload Sizes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Before pasting repeated emoji strings into characters-limited inputs (like bio fields, SMS messages, or API payloads), you can calculate the exact result in advance.
          </p>

          <div className="rounded-xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-semibold text-foreground">General Output Length Formula</h3>
            <p className="font-mono text-sm sm:text-base bg-muted/60 p-3 rounded-lg text-foreground border border-border">
              Total Length = (input string length × N) + (separator string length × (N − 1))
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where <code className="font-mono text-xs text-foreground">N</code> is your repeat count, <code className="font-mono text-xs text-foreground">input string length</code> is the JavaScript string length of your emoji unit, and <code className="font-mono text-xs text-foreground">separator string length</code> is 0 for no separator, 1 for a space or newline (<code className="font-mono text-xs text-foreground">\n</code>), and 2 for a comma space (<code className="font-mono text-xs text-foreground">, </code>).
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 space-y-3">
            <h3 className="font-semibold text-foreground">Quick Reference Checks</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>100 Fire Emojis (🔥) with Space:</strong> Input length is 2. Separator length is 1. Calculation: (2 × 100) + (1 × 99) = 200 + 99 = <strong>299 characters</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>50 Fire Emojis (🔥) with Newline:</strong> Input length is 2. Separator length is 1 (\n). Calculation: (2 × 50) + (1 × 49) = 100 + 49 = <strong>149 characters</strong> (spanning 50 distinct lines).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>25 Party Pairs (🎉✨) with No Separator:</strong> Input &quot;🎉✨&quot; has length 3 (🎉 is 2, ✨ is 1). Calculation: 3 × 25 = <strong>75 characters</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>5 Family Emojis (👨‍👩‍👧‍👦) with Space:</strong> Input length is 11. Separator length is 1. Calculation: (11 × 5) + (1 × 4) = 55 + 4 = <strong>59 characters</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Concrete Worked Examples */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Concrete Worked Examples</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every example below was computed directly through our live execution engine to provide exact character metrics:
          </p>

          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Example 1: 10 Spaced Red Hearts</span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">29 Characters</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><strong>Input:</strong> <code className="font-mono text-foreground">&quot;❤️&quot;</code> (Red Heart)</li>
                <li><strong>Repeat Count:</strong> 10</li>
                <li><strong>Separator:</strong> Single Space (<code className="font-mono text-foreground">&quot; &quot;</code>)</li>
                <li><strong>Result:</strong> <code className="font-mono text-foreground text-xs break-all">❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️</code></li>
                <li><strong>Math:</strong> (2 UTF-16 units × 10) + (1 space × 9) = 29 characters total.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Example 2: 50 Fire Emojis on Newlines</span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">149 Characters</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><strong>Input:</strong> <code className="font-mono text-foreground">&quot;🔥&quot;</code> (Fire)</li>
                <li><strong>Repeat Count:</strong> 50</li>
                <li><strong>Separator:</strong> Newline (<code className="font-mono text-foreground">&quot;\n&quot;</code>)</li>
                <li><strong>Result:</strong> 50 lines of single fire symbols separated by line breaks.</li>
                <li><strong>Math:</strong> (2 UTF-16 units × 50) + (1 newline × 49) = 149 characters total across 50 lines.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Example 3: 25 Continuous Party &amp; Sparkle Pairs</span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">75 Characters</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><strong>Input:</strong> <code className="font-mono text-foreground">&quot;🎉✨&quot;</code> (Party Popper + Sparkles)</li>
                <li><strong>Repeat Count:</strong> 25</li>
                <li><strong>Separator:</strong> None (<code className="font-mono text-foreground">&quot;&quot;</code>)</li>
                <li><strong>Result:</strong> Continuous repeating ribbon of 50 visible emojis.</li>
                <li><strong>Math:</strong> (3 UTF-16 units × 25) + (0 separator) = 75 characters total.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Example 4: 5 Spaced Complex Family Sequences</span>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">59 Characters</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li><strong>Input:</strong> <code className="font-mono text-foreground">&quot;👨‍👩‍👧‍👦&quot;</code> (Man + ZWJ + Woman + ZWJ + Girl + ZWJ + Boy)</li>
                <li><strong>Repeat Count:</strong> 5</li>
                <li><strong>Separator:</strong> Single Space (<code className="font-mono text-foreground">&quot; &quot;</code>)</li>
                <li><strong>Result:</strong> 5 family glyphs separated by spaces.</li>
                <li><strong>Math:</strong> (11 UTF-16 units × 5) + (1 space × 4) = 59 characters total.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Emoji Repeater vs Homepage Text Repeater */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-center sm:text-3xl">
            Emoji Repeater vs. Homepage Text Repeater
          </h2>
          <p className="mb-8 text-center text-muted-foreground text-sm max-w-2xl mx-auto">
            An honest comparison based on the actual codebase. Both tools use the same core client-side repetition engine, but each is tailored for distinct workflows.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/60 font-semibold text-foreground">
                <tr>
                  <th className="p-4">Feature / Capability</th>
                  <th className="p-4">Emoji Repeater (/emoji-repeater)</th>
                  <th className="p-4">Homepage Text Repeater (/)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="p-4 font-medium text-foreground">Primary Focus</td>
                  <td className="p-4">Quick emoji repetition &amp; visual symbol strings</td>
                  <td className="p-4">General text manipulation, long-form content &amp; bulk duplication</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Emoji Quick-Pick Bar</td>
                  <td className="p-4 text-primary font-medium">Yes — 15 popular emojis ready with one click</td>
                  <td className="p-4">No — relies on user typing or OS emoji picker</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Repetition Granularity</td>
                  <td className="p-4">Single input string repeated as one block</td>
                  <td className="p-4 text-primary font-medium">4 Modes: Entire Text, Each Word, Each Line, Each Paragraph</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Count Shortcuts</td>
                  <td className="p-4 text-primary font-medium">Dedicated presets: 10, 50, 100, 500, 1000</td>
                  <td className="p-4">Quick count buttons: 10, 50, 100, 500, 1000</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Maximum Count</td>
                  <td className="p-4">10,000 repetitions</td>
                  <td className="p-4">10,000 repetitions</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">State Persistence</td>
                  <td className="p-4">IndexedDB (<code className="font-mono text-xs">emoji_repeater_*</code>)</td>
                  <td className="p-4">IndexedDB (<code className="font-mono text-xs">text_repeater_*</code>)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Input Layout</td>
                  <td className="p-4">Single-line input formatted with large 24px emoji text</td>
                  <td className="p-4">Multi-line textarea suited for paragraphs and essays</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Platform Guidance */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Platform-by-Platform Guidance</h2>
          <p className="text-muted-foreground leading-relaxed">
            Different social networks and messaging apps enforce specific character caps, rendering engines, and paste behaviors:
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                WhatsApp supports long single-message payloads (capable of handling several thousand emojis without issue). Repeated birthday cakes (🎂), confetti (🎉), or heart (❤️) floods are popular for celebrations. However, sending extremely long continuous strings to massive group chats may cause older mobile devices to lag when opening the thread.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instagram bios have a strict 150-character limit, while captions allow up to 2,200 characters. Because complex emojis consume multiple UTF-16 code units, repeating compound emojis (like flags or skin tones) will reach Instagram&apos;s bio limit in just 30 to 35 emojis. Using spaced sparkle or line dividers (<code className="font-mono text-xs text-foreground">✨</code>) creates clean visual breaks in captions.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1">TikTok</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                TikTok comment threads enforce concise character limits (typically a few hundred characters). A repeat count of 20 to 50 fire (🔥) or laughing (😂) emojis creates maximum visual impact without triggering spam-filter throttling.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1">Discord</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Standard Discord messages are capped at 2,000 characters (or 4,000 for Discord Nitro subscribers). When repeating standard surrogate-pair emojis with spaces (299 characters for 100x), you can comfortably send up to 600 repeated emojis per standard Discord message.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground mb-1">X (formerly Twitter)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                X calculates character limits according to its open-source <a href="https://github.com/twitter/twitter-text" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">twitter-text</a> specification. On X, all standard emojis weigh 2 characters toward the 280-character limit regardless of internal code point count. A string of 100 spaced emojis will exhaust the standard 280-character post limit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Troubleshooting: Common Rendering &amp; Display Issues</h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <span>Issue: The emoji turns into an empty box, question mark, or &quot;tofu&quot;</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Why it happens:</strong> This occurs when the receiving device or web browser lacks font glyphs for newly released Unicode specifications. If you send an emoji introduced in Unicode 15 or 16 to an older iPhone or Android phone that has not received recent OS updates, the system renders a missing glyph symbol (<code className="font-mono text-xs text-foreground">.notdef</code>).
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Fix:</strong> Use universally supported core emojis (like ❤️, 😂, 🔥, or 👍) which are installed across virtually all modern operating systems.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <span>Issue: A flag or skin tone splits into two separate symbols</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Why it happens:</strong> Certain older apps or custom desktop terminals do not support Zero-Width Joiners or Regional Indicator pairs. On unsupported software, the French flag (🇫🇷) renders as separate letters &quot;F&quot; and &quot;R&quot;, and a modified thumbs up (👍🏾) renders as a yellow hand followed by a brown color swatch square.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Fix:</strong> The output string generated by this tool is byte-exact. If the recipient app fails to join them, paste into a modern web browser or updated native app to verify.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <span>Issue: Copy-paste feels sluggish or freezes my browser</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>Why it happens:</strong> Requesting 10,000 repetitions of an 11-character ZWJ emoji produces a 110,000-character string. While JavaScript generates this in milliseconds, rendering 10,000 high-resolution color font glyphs inside an operating system clipboard or rich text editor can strain system memory.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Fix:</strong> For very large payloads (5,000+), click <strong>Download TXT</strong> instead of copying directly to the system clipboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Limitations & When Another Tool is Better */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Honest Limitations &amp; Alternative Approaches</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              While the Emoji Repeater is optimized for instant visual duplication, it is engineered for specific use cases. Understanding its boundaries helps you choose the right tool:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>No Visual Pixel Resizing:</strong> This tool outputs pure Unicode text, not graphic images or SVG icons. The rendered size of an emoji is controlled entirely by the font size of the application where you paste it.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Need to Repeat Words or Mixed Sentences?</strong> If you want to repeat full sentences with word-level control (such as repeating each word in a phrase 3 times), use our dedicated <Link href="/word-repeater" className="text-primary font-medium hover:underline">Word Repeater</Link> or the full-featured <Link href="/" className="text-primary font-medium hover:underline">Text Repeater</Link>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Need Clean Blank Spaces?</strong> If you are looking to format captions with invisible whitespace without emojis, visit our <Link href="/blank-text-generator" className="text-primary font-medium hover:underline">Blank Text Generator</Link>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Font Rendering Differences:</strong> Apple, Google, Microsoft, and Samsung maintain proprietary emoji fonts. A heart or laughing face will render with distinct artistic nuances on an iPhone compared to a Samsung Galaxy.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Responsible Use Note */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-2">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Responsible Use Note
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Repeated emoji strings are intended for fun celebration messages, expressive social media comments, creative dividers, and UI testing. Please respect community guidelines: do not send massive unrequested emoji blocks to group chats or community forums where high-volume text floods disrupt conversation or cause lag on members&apos; devices.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/emoji-repeater" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </article>
  )
}
