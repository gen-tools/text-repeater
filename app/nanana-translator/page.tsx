import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { NananaTranslatorTool } from "@/components/tools/nanana-translator-tool"
import heroImage from "@/src/assets/images/nanana_hero_1787300502231.webp"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import { Sparkles, MessageCircle, AlertCircle, Copy, Share2, Instagram, CheckCircle2, Flame, ShieldAlert, ArrowRight } from "lucide-react"

const PAGE_TITLE = "Nanana Translator – Viral Instagram Nanana Text Generator"
const PAGE_DESCRIPTION = "Turn any message into viral Nanana-style text and try the popular translation trend on Instagram. Pick a ready-made pattern or build your own."
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
    answer: "It's a free browser tool that turns your text into Nanana-style patterns — the repeating NA/NANA sequences behind the current social-media translation trend.",
  },
  {
    question: "Is Nanana a real language?",
    answer: "No. It's a viral trend built on repeated NA and NANA patterns, not a recognized or natural language.",
  },
  {
    question: "What does NANNANANANAANA mean?",
    answer: "Some users have shared this pattern as translating to \"I LOVE YOU\" on Instagram. That hasn't been independently verified, and since Instagram controls its own translation system, the result isn't guaranteed to repeat.",
  },
  {
    question: "Will Instagram translate my Nanana text?",
    answer: "Instagram may offer a See translation option on some Nanana patterns, but whether it appears — and what it returns — is entirely up to Instagram's system.",
  },
  {
    question: "Can I translate any English sentence into Nanana?",
    answer: "You can generate a Nanana-style pattern from any message, but there's no universal English-to-Nanana translation system. Only community-reported patterns carry a specific claimed meaning.",
  },
  {
    question: "Why does Nanana sometimes translate differently?",
    answer: "Automatic translation systems can read unusual or repetitive text inconsistently. Platform updates, language settings, and small differences in the pattern itself can all change the result.",
  },
  {
    question: "How do I use the Nanana trend on Instagram?",
    answer: "Pick or generate a pattern, copy it, paste it into an Instagram text field, then tap See translation if Instagram offers it.",
  },
  {
    question: "Can I create my own Nanana pattern?",
    answer: "Yes — choose Classic, Mixed Case, Spaced, Random, or Custom Pattern to build a version that's entirely your own.",
  },
  {
    question: "Is the Nanana Translator free?",
    answer: "Yes. Generate and copy Nanana text right in your browser, with no app install and no account required.",
  },
]

export default function NananaTranslatorPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nanana Translator",
    description: "Free online viral Instagram Nanana text generator to turn messages into repeating NA, NANA, and mixed-case Nanana patterns.",
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
      "Quick Pick Popular Nanana Messages with community-reported patterns",
      "Classic, Mixed Case, Spaced, and Random Nanana pattern styles",
      "Custom repetition length presets (20, 50, 100, 250, 500, Custom)",
      "Instant deterministic client-side generation powered by the Text Repeater engine",
      "One-click Copy Nanana with clipboard confirmation",
      "Mobile-optimized responsive interface for Instagram users",
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

      {/* Hero Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="main-heading">
              Nanana Translator
            </h1>
            <p className="mx-auto max-w-3xl text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed" id="intro-subtitle">
              Turn any message into viral Nanana-style text and try the popular translation trend on Instagram. Pick a ready-made pattern from Quick Pick, or build your own Nanana text instantly with the{" "}
              <Link href="/" className="text-primary font-medium hover:underline inline-flex items-center">
                Text Repeater
              </Link>{" "}
              generator engine powering this tool.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tool Section */}
      <section className="py-12" id="tool-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <NananaTranslatorTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto" id="hero-image-section">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Nanana Translator viral text generator tool"
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

      {/* What Is the Nanana Translator? Section */}
      <section className="border-t border-border bg-card py-16 cv-auto" id="what-is-nanana-translator-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is the Nanana Translator?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            The Nanana Translator is a free online tool that turns ordinary messages into repeating NA, NANA, and mixed-case Nanana patterns.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            It&apos;s built for anyone trying the viral social-media translation trend. Instead of manually typing out long strings of &quot;NA&quot; and &quot;NANA,&quot; you pick a pattern, enter your own text, choose a style, and get the result instantly.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base font-medium text-primary">
            Everything runs directly in your browser — no app to install, no account to create.
          </p>
        </div>
      </section>

      {/* How to Use the Nanana Translator on Instagram Section */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="how-to-use-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-2">
              How to Use the Nanana Translator on Instagram
            </h2>
            <p className="text-muted-foreground text-base">Using the tool takes only a few seconds.</p>
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed text-base">
            {/* Step 1 */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                Enter your message
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Type a phrase such as:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/90 pl-2">
                {["I love you", "I miss you", "Hello", "Remember me", "You're amazing"].map((phrase) => (
                  <li key={phrase} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{phrase}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                Choose a Nanana pattern
              </h3>
              <p className="text-sm sm:text-base text-foreground/90">
                Pick the style you want: classic uppercase, mixed capitalization, spaced groups, a random rhythm, or a fully custom pattern. Community-reported patterns with a claimed meaning live in the Quick Pick list below the generator, so you can start from one of those instead of building from scratch.
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                Generate your Nanana text
              </h3>
              <p className="text-sm sm:text-base text-foreground/90">
                The generator builds a repeating Nanana-style sequence based on your selected settings.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-2">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  4
                </span>
                Copy the result
              </h3>
              <p className="text-sm sm:text-base text-foreground/90">
                Tap <strong>Copy Nanana</strong> to place the generated text on your clipboard.
              </p>
            </div>

            {/* Step 5 */}
            <div className="rounded-xl border border-border bg-card p-5 space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  5
                </span>
                Try it on Instagram
              </h3>
              <p className="text-sm sm:text-base text-foreground/90">
                Paste the text into a suitable Instagram post, comment, Note, or other text field where translation is available.
              </p>
              <p className="text-sm sm:text-base text-foreground/90">
                If Instagram shows <strong>See translation</strong>, tap it to see what its system returns.
              </p>
            </div>

            {/* Important Callout */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-sm sm:text-base text-foreground/90 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-amber-900 dark:text-amber-200">
                  Important:
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The Nanana Translator doesn&apos;t control Instagram&apos;s translation engine. The result depends on Instagram&apos;s own systems and can change based on the exact text, language settings, and platform updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Does the Nanana Translator Work? Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="how-it-works-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How Does the Nanana Translator Work?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            The tool generates structured variations of repeated &quot;NA&quot; and &quot;NANA&quot; text. Different styles change the capitalization, grouping, spacing, and rhythm of the output.
          </p>

          <div className="space-y-3 pt-2">
            <div className="rounded-lg border border-border bg-background p-3.5 space-y-1">
              <p className="text-sm font-semibold text-foreground">
                <strong>Classic NANANA</strong> — a straightforward uppercase pattern:
              </p>
              <code className="font-mono text-xs text-primary bg-primary/5 px-2.5 py-1 rounded block">
                NANANANANANANA
              </code>
            </div>

            <div className="rounded-lg border border-border bg-background p-3.5 space-y-1">
              <p className="text-sm font-semibold text-foreground">
                <strong>Mixed Case</strong> — uppercase and lowercase combined:
              </p>
              <code className="font-mono text-xs text-primary bg-primary/5 px-2.5 py-1 rounded block">
                NANAnanaNaNaNaNANAnana
              </code>
            </div>

            <div className="rounded-lg border border-border bg-background p-3.5 space-y-1">
              <p className="text-sm font-semibold text-foreground">
                <strong>Spaced NANANA</strong> — separated groups:
              </p>
              <code className="font-mono text-xs text-primary bg-primary/5 px-2.5 py-1 rounded block">
                NA NANA NANANA NA
              </code>
            </div>

            <div className="rounded-lg border border-border bg-background p-3.5 space-y-1">
              <p className="text-sm font-semibold text-foreground">
                <strong>Random NANANA</strong> — varied capitalization and grouping:
              </p>
              <code className="font-mono text-xs text-primary bg-primary/5 px-2.5 py-1 rounded block">
                Na NaNA nANa NANANA
              </code>
            </div>

            <div className="rounded-lg border border-border bg-background p-3.5 space-y-1">
              <p className="text-sm font-semibold text-foreground">
                <strong>Custom Pattern</strong> — choose your own word or token and repeat it through the generator.
              </p>
            </div>
          </div>

          <p className="text-foreground/90 leading-relaxed text-base pt-3">
            The base generation happens locally in your browser, so creating a Nanana pattern doesn&apos;t require an external translation service. If you want to turn any phrase into a repeating block of text more generally, the{" "}
            <Link href="/word-repeater" className="text-primary font-medium hover:underline">
              Word Repeater
            </Link>{" "}
            tool runs on the same underlying engine.
          </p>
        </div>
      </section>

      {/* Is Nanana a Real Language? Section */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="is-nanana-real-language-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Is Nanana a Real Language?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            No — Nanana isn&apos;t a recognized language.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            In this trend, &quot;Nanana&quot; refers to repeated or structured text like &quot;NA,&quot; &quot;NANA,&quot; and similar patterns used in viral social posts. The interesting part is what happens when a platform&apos;s automatic translation tries to interpret unusual text like that; the result can be unexpected, which is part of why the trend caught on.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            There&apos;s no official Nanana dictionary or grammar that guarantees a specific English sentence.
          </p>
        </div>
      </section>

      {/* Does Nanana Actually Translate Into English? Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="does-nanana-translate-into-english-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Does Nanana Actually Translate Into English?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            Not in the way Spanish, French, or Arabic translate into English.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            A Nanana pattern isn&apos;t a conventional encoded sentence. When a social platform offers a translation for unusual text, that result comes from the platform&apos;s own language-detection and translation systems — not from any fixed Nanana-to-English key. That also means the same pattern won&apos;t necessarily produce the same result every time, since platform translation models change over time.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            Because of that, the Nanana Translator separates two things: patterns the community has reported producing a specific translation, and patterns you generate yourself. A reported pattern can be selected directly from the Quick Pick section below; anything you generate fresh should be treated as an experiment, not a guaranteed translation.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-border bg-background py-16" id="faq-section">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/nanana-translator" />
        </div>
      </section>
    </article>
  )
}

