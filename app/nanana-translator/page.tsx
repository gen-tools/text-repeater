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
  Share2,
  Info,
  Smartphone,
  Flame,
} from "lucide-react"

const PAGE_TITLE = "Nanana Translator – Viral Instagram Nanana Text Generator"
const PAGE_DESCRIPTION = "Generate repeating NA and NANA patterns and test them with Instagram's See translation. Pick a ready-made pattern from Quick Pick, or build your own with the Text Repeater engine behind this tool."
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
    answer: "A free generator that builds repeating NA and NANA text so you can see how Instagram handles it. It doesn't translate anything itself.",
  },
  {
    question: "Is Nanana a real language?",
    answer: "No. There's no grammar or dictionary behind it, only repeated syllables used in a social trend.",
  },
  {
    question: "What does NANNANANANAANA mean?",
    answer: "Nothing fixed. Whatever English appears is Instagram's output for that exact string, and it can change.",
  },
  {
    question: "Will Instagram translate my Nanana text?",
    answer: "It might, but that's Instagram's call. The See translation option shows only when the app decides it applies.",
  },
  {
    question: "Can I translate any English sentence into Nanana?",
    answer: "Not reliably. The tool builds NA patterns, so treat the outcome as an experiment, not a guaranteed match for your sentence.",
  },
  {
    question: "Why does Nanana sometimes translate differently?",
    answer: "Capitalization, spacing, language settings, and app updates can all shift what the platform returns.",
  },
  {
    question: "How do I use the Nanana trend on Instagram?",
    answer: "Generate a pattern, copy it, paste it into a post, comment, or Note, then tap See translation if it shows up.",
  },
  {
    question: "Can I create my own Nanana pattern?",
    answer: "Yes. The custom option repeats any word or token you enter.",
  },
  {
    question: "Is the Nanana Translator free?",
    answer: "Yes, with no account or install needed.",
  },
]

export default function NananaTranslatorPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Nanana Translator",
    description: PAGE_DESCRIPTION,
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
      "Five pattern styles: classic uppercase, mixed case, spaced groups, random rhythm, and custom",
      "Quick Pick list: community-reported patterns, kept separate from the ones you generate",
      "One-tap copy with the Copy Nanana button",
      "Free to use, with no account or install",
      "Runs in your browser",
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
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-10 lg:py-16" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="main-heading">
              Nanana Translator
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed" id="intro-subtitle">
              Generate repeating NA and NANA patterns and test them with Instagram&apos;s See translation. Pick a ready-made pattern from Quick Pick, or build your own with the{" "}
              <Link href="/" className="text-primary font-medium hover:underline inline-flex items-center">
                Text Repeater
              </Link>{" "}
              engine behind this tool.
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
            Quick Pick patterns are community-reported. Results depend on Instagram and can change.
          </p>
        </div>
      </section>

      {/* Quick Answer Section */}
      <section className="border-t border-border bg-card py-12" id="quick-answer-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 space-y-3 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Quick Answer
            </h2>
            <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
              The Nanana Translator builds repeating NA and NANA text you can paste into Instagram to see what its translation returns. Nanana isn&apos;t a real language, so the results come from Instagram and can vary.
            </p>
          </div>
        </div>
      </section>

      {/* Nanana Translator Features Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="features-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Nanana Translator Features
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Five pattern styles</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Classic uppercase, mixed case, spaced groups, random rhythm, and custom.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Quick Pick list</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Community-reported patterns, kept separate from the ones you generate.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Copy className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">One-tap copy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Copy with the Copy Nanana button.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Free to use</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With no account or install.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40 sm:col-span-2 lg:col-span-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Runs in your browser</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instant client-side execution right inside your web browser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use the Nanana Translator on Instagram Section */}
      <section className="border-t border-border bg-muted/20 py-14 cv-auto" id="how-to-use-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How to Use the Nanana Translator on Instagram
            </h2>
          </div>

          <ol className="space-y-3.5 list-none">
            {[
              "Type a short phrase, or start from a Quick Pick pattern.",
              "Choose a style: classic, mixed case, spaced, random, or custom.",
              "Generate the text.",
              "Tap Copy Nanana.",
              "Paste it into a post, comment, Note, or another text field where Instagram offers translation.",
              "If See translation appears, tap it and read what Instagram returns.",
            ].map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-3.5 rounded-xl border border-border bg-card p-4 text-base text-foreground/90 shadow-xs"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-xs text-primary-foreground">
                  {index + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          {/* Disclaimer Callout */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm sm:text-base text-foreground/90 flex items-start gap-3 shadow-xs">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed text-foreground">
              The tool doesn&apos;t control Instagram&apos;s translation engine. What you see depends on Instagram&apos;s systems, your language settings, and app updates.
            </p>
          </div>
        </div>
      </section>

      {/* What Is the Nanana Translator? Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="what-is-nanana-translator-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is the Nanana Translator?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            The Nanana Translator is a text generator for the NA and NANA trend. It builds structured repetitions, such as NANANANA, NAnaNaNA, or NA NANA NANANA, so you don&apos;t have to type them by hand.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            It doesn&apos;t translate in the usual sense. It creates the unusual text, and the platform decides what to show.
          </p>
        </div>
      </section>

      {/* Why Nanana Patterns Get a "Translation" Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="why-nanana-patterns-get-translation-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why Nanana Patterns Get a &quot;Translation&quot;
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            Instagram doesn&apos;t publish how it handles nonsense text, so nobody outside the company can say for sure. A reasonable guess is that language detection tries to match the string to some language, and the translation model then produces something that reads like a sentence. That is an assumption, not a confirmed fact.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            It would also explain why two people can see different results from the same pattern.
          </p>
        </div>
      </section>

      {/* Nanana Translator vs. Typing by Hand vs. a Regular Translator Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="comparison-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Nanana Translator vs. Typing by Hand vs. a Regular Translator
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-xs">
            <table className="w-full text-left text-sm text-foreground">
              <thead className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Feature</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Nanana Translator</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Typing by hand</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Regular translator app</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">What it does</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Generates NA and NANA patterns</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Same text, typed manually</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Converts real words between languages</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Pattern control</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Five styles plus custom</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Full, but slow</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Not applicable</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Meaning guaranteed?</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">No</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">No</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Aims for accurate meaning in real languages</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Cost</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90 font-semibold text-primary">Free</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Free</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Varies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where You Can Use Nanana Text Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="where-to-use-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Where You Can Use Nanana Text
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-background shadow-xs">
            <table className="w-full text-left text-sm text-foreground">
              <thead className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Platform</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Where to paste</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6 flex items-center gap-2">
                    <span className="font-semibold text-foreground">Instagram</span>
                  </td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Posts, comments, Notes, other text fields</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Main use case. See translation appears only if Instagram offers it</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Other apps with built-in translation</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Plain text field</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Not tested here. Results may differ</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Any other text field</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Plain text field</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Pastes fine, but there&apos;s no translation without platform support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ways People Use the Nanana Translator Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="ways-people-use-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ways People Use the Nanana Translator
          </h2>
          <ul className="space-y-3.5">
            {[
              "Trying the trend yourself without typing long strings.",
              "Comparing results with friends on different phones.",
              "Playful captions or comments for a quirky post.",
              "Reaction content built around what Instagram returns.",
              "Repeated text in general, paired with the Word Repeater or Emoji Repeater.",
            ].map((useCase, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-base text-foreground/90 shadow-xs"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {index === 4 ? (
                    <>
                      Repeated text in general, paired with the{" "}
                      <Link href="/word-repeater" className="text-primary font-medium hover:underline">
                        Word Repeater
                      </Link>{" "}
                      or{" "}
                      <Link href="/emoji-repeater" className="text-primary font-medium hover:underline">
                        Emoji Repeater
                      </Link>
                      .
                    </>
                  ) : (
                    useCase
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="troubleshooting-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            Troubleshooting
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-background p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">No See translation button:</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                check your language settings and try a longer string. Instagram doesn&apos;t show the button everywhere.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">A different result from a friend:</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                app versions, settings, and model updates can differ between phones.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Same pattern, new result later:</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                platforms change their translation systems. Screenshot results you want to keep.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-background p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Nothing interesting happens:</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                change capitalization or grouping and try again.
              </p>
            </div>
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
