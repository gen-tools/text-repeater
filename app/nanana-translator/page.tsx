import { Metadata } from "next"
import Link from "next/link"
import { NananaTranslatorTool } from "@/components/tools/nanana-translator-tool"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import {
  Sparkles,
  Layers,
  Zap,
  Copy,
  ShieldCheck,
  Laptop,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Calculator,
  MessageSquare,
  Globe,
  Sliders,
  FileText,
  Info,
  ShieldAlert,
} from "lucide-react"

const PAGE_TITLE = "Nanana Translator – Viral Instagram Text Generator"
const PAGE_DESCRIPTION = "Generate repeating NA and NANA text patterns for Instagram and social media. Pick custom styles, adjust length up to 5,000, and copy in one click."
const PAGE_URL = "https://mytextrepeater.com/nanana-translator"

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
    question: "What is a Nanana Translator?",
    answer: "It is a browser utility that formats repeating NA and NANA syllables into stylized patterns for social media experiments, comments, and captions.",
  },
  {
    question: "Does this tool translate real words into Nanana language?",
    answer: "No. Nanana is not a real human language, so the generator produces rhythmic phonetic patterns rather than translating vocabulary.",
  },
  {
    question: "Why does Instagram show a See translation button on Nanana text?",
    answer: "Instagram's automated translation engine mistakes specific repetitive strings for foreign languages and attempts to generate English phrasing.",
  },
  {
    question: "Will every Nanana string trigger a translation?",
    answer: "No, platform translation engines evaluate character sequences dynamically, so only certain pattern lengths, casings, and groupings trigger translation prompts.",
  },
  {
    question: "Can I choose how many times the pattern repeats?",
    answer: "Yes, you can click presets from 20 to 500 repeats or enter any custom repetition length up to 5,000 in the tool settings.",
  },
  {
    question: "What is the difference between Mixed Case and Classic styles?",
    answer: "Classic creates uniform uppercase sequences like NANANANA, while Mixed Case alternates melodic capitalization based on your input phrase.",
  },
  {
    question: "Why did my friend get a different translation from the same text?",
    answer: "Social media translation models vary by app version, operating system, device locale, and server-side machine learning updates.",
  },
  {
    question: "Does this tool save or upload my text to external servers?",
    answer: "No, all pattern generation and storage run entirely inside your browser, with optional auto-saving stored locally on your device.",
  },
  {
    question: "Is the Nanana Translator free to use?",
    answer: "Yes, the tool is completely free with no user account, software download, or usage limits required.",
  },
]

export default function NananaTranslatorPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Nanana Translator",
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
      "Five distinct pattern styles: Classic NANANA, Mixed Case, Spaced Groups, Random Cadence, and Custom Token",
      "Three community Quick Pick presets (I LOVE YOU, I NEED YOU, REMEMBER HIM)",
      "Repeat length presets from 20 to 500, plus custom slider scaling up to 5,000 repetitions",
      "Live output metrics including real-time character count and syllable repetitions",
      "Instant one-click clipboard copy and .txt file download",
      "100% client-side execution with local IndexedDB state persistence",
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
        name: "Nanana Translator",
        item: PAGE_URL,
      },
    ],
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
              Nanana Translator
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed" id="intro-subtitle">
              Turn any phrase into rhythmic, viral NA and NANA text patterns for Instagram, TikTok, and messaging apps. Pick a community preset or customize your repeat length with the engine powered by{" "}
              <Link href="/" className="text-primary font-medium hover:underline inline-flex items-center">
                My Text Repeater
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Main Tool Section */}
      <section className="py-10" id="tool-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <NananaTranslatorTool />
          {/* Caption under the tool */}
          <p className="mt-4 text-center text-xs sm:text-sm text-muted-foreground" id="tool-caption">
            Quick Pick patterns are community-reported. Translation triggers depend entirely on third-party platform algorithms and can change across app updates.
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
              A Nanana translator generates repeating NA and NANA text strings used in viral social media translation trends. You select a casing style and length, copy the generated pattern, and paste it into Instagram or chat apps. The tool does not translate words itself; platform translation algorithms interpret the pattern.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="features-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Nanana Translator Features
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Engineered for speed, privacy, and full formatting control over your repetitive text strings.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Five Pattern Styles</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Choose Classic all-caps, Mixed Case cadence, Spaced groups, Random rhythms, or custom repeat tokens.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Quick Pick Presets</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Test community-shared phrases like &quot;I LOVE YOU&quot; and &quot;REMEMBER HIM&quot; with pre-configured patterns.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Copy className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">One-Tap Clipboard Copy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Copy your generated block instantly to your clipboard or download it directly as a clean .txt file.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calculator className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Live Length Metrics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Monitor real-time character count and syllable totals to ensure text fits platform input limits.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Private & Client-Side</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Runs 100% inside your web browser. No text is uploaded, tracked, or stored on external servers.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Auto-Save State</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Settings persist across tab refreshes using local browser storage, keeping your work intact.
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
              How to Generate and Test Nanana Text in 4 Steps
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Follow these practical steps to generate custom text strings and test how social platforms interpret them.
            </p>
          </div>

          <ol className="space-y-3.5 list-none">
            {[
              {
                step: "Enter your phrase or select a Quick Pick",
                desc: "Type a word or message into the input field. The text seeds the rhythm and casing algorithm. Alternatively, click a Quick Pick preset to start with a popular combination.",
              },
              {
                step: "Choose a pattern style and repeat count",
                desc: "Pick Classic (NANANANA), Mixed Case (melodic variation), Spaced (spaced blocks), Random, or Custom. Select a repetition preset (20 to 500) or drag the slider up to 5,000 repeats.",
              },
              {
                step: "Copy your formatted result",
                desc: "Check the live character counter at the bottom of the tool box, then click Copy Nanana to copy the entire block to your clipboard.",
              },
              {
                step: "Paste and inspect the destination app",
                desc: "Paste into an Instagram Note, caption, comment, or chat window. If the platform detects a pattern, tap See translation to view the translated interpretation.",
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

          {/* Disclaimer Callout */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm sm:text-base text-foreground/90 flex items-start gap-3 shadow-xs">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed text-foreground">
              Always paste a short test into your target app first. Social media translation triggers vary across app builds, device languages, and server-side model updates.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Nanana Translator & Why People Use It */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="what-is-nanana-translator-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is Nanana Text and Why Do People Use It?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            Nanana text refers to structured, repeating sequences composed of the syllables &quot;NA&quot; and &quot;NANA&quot; (such as <em>NANANANA</em>, <em>NANAnana</em>, or <em>NA NANA NANANA</em>). Originating as a playful internet meme on platforms like Instagram and TikTok, users discovered that posting long, repetitive syllable strings could cause automated social media translation features to display unexpected, poetic, or amusing English phrases.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            People use Nanana text generators for several distinct reasons:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            <div className="rounded-xl border border-border bg-card p-4 space-y-1.5">
              <h3 className="font-semibold text-foreground text-base">Social Media Curiosity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Experimenting with machine translation quirks and sharing unexpected translation screenshots with friends.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 space-y-1.5">
              <h3 className="font-semibold text-foreground text-base">Aesthetic Captions & Notes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Using rhythmic, repeating typography to create distinctive, minimalist bio lines or Instagram Notes.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 space-y-1.5">
              <h3 className="font-semibold text-foreground text-base">Reaction & Entertainment Posts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Creating viral video hooks and interactive comment chains where viewers tap &quot;See translation&quot; to reveal a surprise punchline.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 space-y-1.5">
              <h3 className="font-semibold text-foreground text-base">Input Stress Testing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Generating repeating patterns with exact character limits to test layout overflow and text wrap in web apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works: Machine Translation Mechanics */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="why-it-works-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why Does Social Media Translate Nanana Strings?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            Modern social networks rely on automated neural machine translation systems (such as Meta&apos;s NLLB models on Instagram) to translate user posts across dozens of languages. These systems operate in two sequential phases:
          </p>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-background p-5 space-y-2 shadow-xs">
              <h3 className="font-semibold text-foreground text-base flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                Phase 1: Automated Language Identification (LID)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When text is published, an automated language detector attempts to identify the source tongue. Because &quot;na&quot; is an active grammatical particle or root word in several languages (such as Japanese, Tagalog, Hindi, or certain Austronesian languages), long sequences of &quot;na&quot; can register as high-confidence non-English text.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-2 shadow-xs">
              <h3 className="font-semibold text-foreground text-base flex items-center gap-2">
                <Sliders className="h-4 w-4 text-primary" />
                Phase 2: Sequence-to-Sequence Translation Hallucination
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Once flagged as a foreign language, the neural translation model processes the token string. Neural networks trained on real-world bilingual corpora try to find the most probable grammatically fluent sentence rather than returning gibberish. This known machine learning phenomenon—termed a <em>model hallucination</em>—is what creates surprising translations.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Because AI translation engines receive periodic model fine-tuning and weight updates, specific phrase translations are subject to change over time.
          </p>
        </div>
      </section>

      {/* Worked Examples Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="worked-examples-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Worked Output Examples with Character Counts
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Review exact inputs, settings, generated strings, and calculated character lengths produced by our generator engine.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-xs">
              <div className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                Example 1: Classic
              </div>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p><strong className="text-foreground">Input:</strong> &quot;I LOVE YOU&quot;</p>
                <p><strong className="text-foreground">Style:</strong> Classic NANANA</p>
                <p><strong className="text-foreground">Repeat Count:</strong> 20</p>
                <p><strong className="text-foreground">Character Count:</strong> 40 characters</p>
              </div>
              <div className="rounded-lg bg-muted/60 p-3 font-mono text-xs text-foreground/90 break-all select-all">
                NANANANANANANANANANANANANANANANANANANANA
              </div>
              <p className="text-xs text-muted-foreground">
                Uniform 40-character sequence ideal for short bio headers or Instagram Notes.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-xs">
              <div className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                Example 2: Spaced Rhythm
              </div>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p><strong className="text-foreground">Input:</strong> &quot;I NEED YOU&quot;</p>
                <p><strong className="text-foreground">Style:</strong> Spaced NANANA</p>
                <p><strong className="text-foreground">Repeat Count:</strong> 15</p>
                <p><strong className="text-foreground">Character Count:</strong> 35 characters</p>
              </div>
              <div className="rounded-lg bg-muted/60 p-3 font-mono text-xs text-foreground/90 break-all select-all">
                NA NANA NANANA NA NANA NA NANA
              </div>
              <p className="text-xs text-muted-foreground">
                Structured phrase blocks separated by whitespace tokens to simulate natural word breaks.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-3 shadow-xs">
              <div className="inline-block rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                Example 3: Custom Token
              </div>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p><strong className="text-foreground">Input:</strong> &quot;HEY&quot;</p>
                <p><strong className="text-foreground">Custom Token:</strong> &quot;NAN&quot;</p>
                <p><strong className="text-foreground">Repeat Count:</strong> 12</p>
                <p><strong className="text-foreground">Character Count:</strong> 36 characters</p>
              </div>
              <div className="rounded-lg bg-muted/60 p-3 font-mono text-xs text-foreground/90 break-all select-all">
                NANNANNANNANNANNANNANNANNANNANNANNAN
              </div>
              <p className="text-xs text-muted-foreground">
                3-character token repeating 12 times with strict character boundary math.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formula to Estimate Output Length Before Pasting */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="output-formula-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Formula to Estimate Output Length Before Pasting
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed text-base">
            Before copying large blocks of text into platforms with strict character limits (like Instagram Notes or Discord messages), use these simple formulas to calculate your exact payload size:
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-background p-5 space-y-2">
              <h3 className="font-semibold text-foreground text-base">Formula 1: Classic &amp; Mixed Case Styles</h3>
              <div className="rounded-lg bg-muted/60 p-3 font-mono text-sm text-primary font-semibold">
                Total Characters = Repetition Count × 2
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Because each &quot;NA&quot; unit contains exactly two UTF-8 characters and no spaces, a repeat count of 50 produces exactly 100 characters (50 × 2 = 100).
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-2">
              <h3 className="font-semibold text-foreground text-base">Formula 2: Custom Token Repetition</h3>
              <div className="rounded-lg bg-muted/60 p-3 font-mono text-sm text-primary font-semibold">
                Total Characters = Repetition Count × Token Length
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If your custom token is &quot;NANA&quot; (4 characters) and you choose 25 repeats, the resulting output length is 100 characters (25 × 4 = 100).
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-2">
              <h3 className="font-semibold text-foreground text-base">Formula 3: Spaced &amp; Random Cadence Styles</h3>
              <div className="rounded-lg bg-muted/60 p-3 font-mono text-sm text-primary font-semibold">
                Estimated Characters ≈ (Repetition Count × 2) + ⌊Repetition Count / 3⌋
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Spaced styles insert one space separator roughly every 2 to 4 syllables. For 60 repetitions, expect approximately 120 letters plus 20 spaces, totaling ~140 characters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="comparison-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Nanana Translator vs. Typing by Hand vs. Traditional Translators
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Compare how dedicated browser generation compares against manual input and standard translation software.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
            <table className="w-full text-left text-sm text-foreground">
              <thead className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Feature</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Nanana Translator</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Typing by Hand</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Standard Translator (Google / DeepL)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Primary Function</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90 font-medium">Generates rhythmic repetitive patterns</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Manual keypress duplication</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Converts recognized real languages</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Casing &amp; Rhythm Control</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90 font-medium">5 styles (Classic, Mixed, Spaced, Random, Custom)</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Manual shift-keying (slow &amp; prone to typos)</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">None (not designed for repetitive strings)</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Exact Length Presets</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90 font-medium">Presets 20–500, custom up to 5,000</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Manual counting required</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">N/A</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Meaning Guarantee</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">No (triggers platform AI interpretation)</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">No</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Yes (accurate linguistic conversion)</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Generation Speed</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90 font-semibold text-primary">Instant (under 10ms)</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Minutes of repetitive typing</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Fast (API round-trip)</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Cost &amp; Access</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90 font-semibold text-primary">100% Free, no account</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Free</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Free or tiered subscription</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Supported Platforms & Guidance Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="supported-platforms-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Platform-by-Platform Guidance &amp; Tips
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">
              Where to paste your Nanana text across top social networks, with safe character limits and practical tips.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-background shadow-xs">
            <table className="w-full text-left text-sm text-foreground">
              <thead className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Platform</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Target Location</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Input Limit [VERIFY]</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Practical Usage Advice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Instagram</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Notes, Captions, Comments, DMs</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Notes: 60 chars [VERIFY]; Captions: 2,200 chars [VERIFY]</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Notes work best with 20–25 repeats. In captions, &quot;See translation&quot; appears underneath if detected.</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">TikTok</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Bio, Descriptions, Comments</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Bio: 80 chars [VERIFY]; Descriptions: 2,200–4,000 chars [VERIFY]</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Use Spaced or Mixed Case in comments to encourage viewers to click TikTok&apos;s inline translate tool.</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">WhatsApp</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Individual &amp; Group Chats, Status</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">~65,536 bytes per message [VERIFY]</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Keep repeats under 500 to prevent mobile viewport lag or unintentional chat flooding.</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Discord</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Channels, Direct Messages, Threads</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Standard: 2,000 chars [VERIFY]; Nitro: 4,000 chars [VERIFY]</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Use with translation bots or test formatting blocks inside Markdown backticks.</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Messaging Apps (Telegram, SMS)</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Chat messages</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Varies by carrier / app client</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Pastes as normal text. Does not translate unless the receiver app has an integrated translation module.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Creative & Practical Use Cases */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="use-cases-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Creative &amp; Practical Use Cases
          </h2>
          <div className="grid gap-3.5 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-4 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground text-base">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Social Media Easter Eggs
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Add an intriguing Nanana string at the end of an Instagram carousel or Reel description so followers discover a hidden translation.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground text-base">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Cross-Device Comparison Tests
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Compare translations across iOS, Android, and desktop browser versions to observe how language models differ across devices.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground text-base">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Stylized Music Lyrics &amp; Chants
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Quickly build rhythmic chorus chants (like &quot;Na na na, hey hey hey, goodbye&quot;) without manual copy-pasting.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-foreground text-base">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Layout &amp; Line-Break QA Testing
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Check whether responsive web designs break cleanly on long single-word text strings without spaces, or test with our{" "}
                <Link href="/word-repeater" className="text-primary font-medium hover:underline">
                  Word Repeater
                </Link>{" "}
                and{" "}
                <Link href="/emoji-repeater" className="text-primary font-medium hover:underline">
                  Emoji Repeater
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="troubleshooting-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Troubleshooting Common Issues
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            Encountering unexpected behavior? Here is how to resolve the most common issues reported by users:
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-background p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">No &quot;See translation&quot; option appears</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Instagram only renders the translation button if its language detection model flags the text as a foreign language different from your app interface language. If the button is missing, verify your app translation settings, try the Mixed Case or Spaced style, or increase the string length above 30 repetitions.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">The translation reads differently on your friend&apos;s phone</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                This is normal behavior. Machine translation inference depends on client app build numbers, device OS locales, and server-side model routing. Two users testing the exact same string on different phones can receive distinct translations.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">The translation changed compared to last week</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Platforms constantly update and re-train their neural translation models. If you get a humorous or meaningful result you wish to keep, take a screenshot immediately, as future platform updates may change or remove the output.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Text gets truncated or cannot be pasted</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                You may have exceeded the target field&apos;s character allowance (such as the 60-character ceiling on Instagram Notes [VERIFY]). Check the live character counter in the tool box before copying to verify your length fits the destination limit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest Limits of the Tool */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="limits-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Honest Limits of This Tool
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            We believe in complete transparency about what this utility does and does not do:
          </p>
          <ul className="space-y-2.5 text-sm sm:text-base text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>No dictionary translation:</strong> This tool does not convert English vocabulary into foreign languages or create authentic language syntax.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>No guarantee of platform translation:</strong> We generate the text patterns, but Meta, ByteDance, and other platforms control whether their apps choose to display a &quot;See translation&quot; prompt.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong>Browser memory constraints:</strong> While our generator can produce up to 5,000 repetitions smoothly in milliseconds, extremely large blocks pasted into mobile keyboards can cause temporary UI lag on older devices.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Responsible-Use Note */}
      <section className="border-t border-border bg-muted/20 py-12 cv-auto" id="responsible-use-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 text-foreground font-bold text-lg">
              <ShieldAlert className="h-5 w-5 text-amber-500" />
              Responsible Use Note
            </div>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Text repeating tools are created for creative content, testing, and fun online interactions. Please use them responsibly. Never send large repeated message blocks to group chats or individuals who have not requested them. Unsolicited text flooding can disrupt communication, cause mobile devices to lag, and violate platform community guidelines against spamming.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="faq-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="border-t border-border bg-muted/30 py-12 cv-auto">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/nanana-translator" />
        </div>
      </section>
    </article>
  )
}
