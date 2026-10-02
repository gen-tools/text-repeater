import { Metadata } from "next"
import { ZalgoTextTool } from "@/components/tools/zalgo-text-tool"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import {
  Sparkles,
  Zap,
  Sliders,
  Copy,
  UserX,
  Type,
  Laptop,
  Smartphone,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  ShieldCheck,
  Lightbulb,
  Wrench,
  Layers,
} from "lucide-react"

const PAGE_TITLE = "Zalgo Text Generator — Glitch & Cursed Text"
const PAGE_DESCRIPTION = "Turn any word into glitchy, cursed Zalgo text. Type your text, pick an intensity level, and copy the result."
const PAGE_URL = "https://mytextrepeater.com/zalgo-text-generator"

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
    question: "What does a Zalgo text generator actually do?",
    answer: "It adds stacked combining marks to your letters, which creates the glitchy look.",
  },
  {
    question: "Is Zalgo text the same as glitch text?",
    answer: "Mostly. \"Glitch text\" and \"cursed text\" are common nicknames for the same effect.",
  },
  {
    question: "Can I make Zalgo text by hand?",
    answer: "You could, but you'd insert every mark one at a time, which is why most people use a Zalgo text generator.",
  },
  {
    question: "Why does my Zalgo text look different in another app?",
    answer: "Apps and fonts draw stacked marks differently, and some trim or remove them.",
  },
  {
    question: "Will screen readers read it properly?",
    answer: "Often not well, so avoid it for anything people need to understand.",
  },
  {
    question: "Is this Zalgo Text Generator free?",
    answer: "Yes, and it needs no signup.",
  },
  {
    question: "Which intensity should I pick?",
    answer: "Begin with Mini or Normal. Crazy often turns letters unreadable.",
  },
]

export default function ZalgoTextPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Zalgo Text Generator",
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
      "Three intensity levels: Mini, Normal, and Crazy",
      "One-click copy to your clipboard",
      "No account or signup needed",
      "Works with letters, numbers, and most symbols",
      "Runs in your browser, with nothing uploaded",
      "Works on desktop and mobile",
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
    <article className="w-full" id="zalgo-text-page">
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
              Zalgo Text Generator
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed" id="intro-subtitle">
              Turn any word into glitchy, cursed Zalgo text. Type your text, pick an intensity level, and copy the result.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer Section */}
      <section className="py-8 bg-card border-b border-border" id="quick-answer-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 space-y-3 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Quick Answer
            </h2>
            <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
              A Zalgo text generator takes normal text and stacks extra Unicode combining marks above, through, and below each letter, so the result looks glitchy or &quot;cursed.&quot; You copy the output and paste it into any field that accepts text. Some apps will trim or strip the extra marks, so test first.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-10" id="tool-section">
        <div className="container mx-auto px-4 max-w-5xl">
          <ZalgoTextTool />
          {/* Caption under the tool */}
          <p className="mt-4 text-center text-xs sm:text-sm text-muted-foreground" id="tool-caption">
            Mini keeps text readable, and Crazy stacks the most marks. Paste a short test into your destination app before using the full text.
          </p>
        </div>
      </section>

      {/* Zalgo Text Generator Features Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="features-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Zalgo Text Generator Features
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sliders className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Three intensity levels</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mini, Normal, and Crazy
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Copy className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">One-click copy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                One-click copy to your clipboard
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <UserX className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">No account or signup needed</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Free and ready to use without an account
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Type className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Broad character support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works with letters, numbers, and most symbols
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Private & Client-Side</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Runs in your browser, with nothing uploaded
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-xs transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground text-base">Cross-device support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Works on desktop and mobile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use the Zalgo Text Generator Section */}
      <section className="border-t border-border bg-muted/20 py-14 cv-auto" id="how-to-use-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How to Use the Zalgo Text Generator
            </h2>
          </div>

          <ol className="space-y-3.5 list-none">
            {[
              "Type or paste a word or short phrase into the box above.",
              "Pick a level, such as Mini, Normal, or Crazy.",
              "Generate the output.",
              "Copy the result.",
              "Paste it where you need it.",
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

          {/* Test First Callout */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 text-sm sm:text-base text-foreground/90 flex items-start gap-3 shadow-xs">
            <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed text-foreground">
              Paste a short test first. What looks great in the generator can look different inside the app you&apos;re posting to.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Zalgo Text? Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="what-is-zalgo-text-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is Zalgo Text?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            Zalgo text is ordinary text with a pile of combining marks attached to each character. Those marks were built for accents, like the tilde in ñ, but nothing stops you from stacking dozens on one letter.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            The name comes from an internet creepypasta meme about a chaotic, supernatural figure. The look stuck around as shorthand for horror, glitches, and chaos.
          </p>
        </div>
      </section>

      {/* How Does a Zalgo Text Generator Work? Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="how-it-works-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How Does a Zalgo Text Generator Work?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            A Zalgo text generator reads each character, then adds a set of combining marks above it, through it, or below it. More marks means a messier look.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            Your base letters never change. This isn&apos;t a font. It&apos;s the same text with extra Unicode attached, which is why it behaves differently from fancy font styles.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            The intensity setting controls how many marks get added. Lower levels stay readable. Higher levels can swallow the letters entirely.
          </p>
        </div>
      </section>

      {/* What It Looks Like Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="what-it-looks-like-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What It Looks Like
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            A one-word example shows the idea. Plain text: Hello. A light glitch: H̸e̷l̵l̶o̴. Heavier levels add more marks per letter, and the exact output depends on the tool and the level you choose. Any Zalgo text generator can produce this kind of result.
          </p>
          <div className="rounded-xl border border-border bg-muted/30 p-4 font-mono text-center text-lg sm:text-xl text-foreground">
            Hello &rarr; H̸e̷l̵l̶o̴ &rarr; H̶̛̖e̷̘͌l̶͈̚l̷̃ͅo̴̭̽
          </div>
        </div>
      </section>

      {/* Zalgo Text Generator vs. Fancy Font Tools Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="comparison-section">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Zalgo Text Generator vs. Fancy Font Tools
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            Fancy font tools swap your letters for look-alike Unicode symbols. A Zalgo text generator keeps your letters and piles marks on top. The two can look similar at a glance, but they break in different ways.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border bg-background shadow-xs">
            <table className="w-full text-left text-sm text-foreground">
              <thead className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Feature</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Zalgo text generator</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Fancy font text</th>
                  <th scope="col" className="px-4 py-3.5 sm:px-6">Text as an image</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">What changes</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Marks added to your letters</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Letters swapped for look-alike symbols</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Text becomes a picture</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Copy and paste</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90 font-medium">Yes</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Yes</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">No, not selectable text</td>
                </tr>
                <tr className="transition-colors hover:bg-muted/30">
                  <td className="px-4 py-3.5 font-medium sm:px-6">Common problem</td>
                  <td className="px-4 py-3.5 sm:px-6 text-foreground/90">Marks trimmed or stripped</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Some symbols may not display</td>
                  <td className="px-4 py-3.5 sm:px-6 text-muted-foreground">Can&apos;t be edited as text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Does Zalgo Text Work Everywhere? Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="does-it-work-everywhere-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Does Zalgo Text Work Everywhere?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            No. Apps handle stacked marks in different ways. Some show the full pile, some cut it short, and some remove it. Marks can also spill into the lines above and below and make a layout look messy. Even a well-built Zalgo text generator can&apos;t control how other apps display its output.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            The generator itself should open in any modern browser on desktop or mobile. Where you paste the result is a separate question, because rules and rendering change. Test a short sample in the exact place you plan to use it.
          </p>
        </div>
      </section>

      {/* Where People Use a Zalgo Text Generator Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="where-people-use-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Where People Use a Zalgo Text Generator
          </h2>
          <ul className="space-y-3.5">
            {[
              "Horror and Halloween posts for a creepy caption",
              "Memes and edits that need a \"broken\" look",
              "Gaming names and tags, after you check the game's name rules",
              "Art and poster text with a corrupted style",
            ].map((useCase, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-base text-foreground/90 shadow-xs"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{useCase}</span>
              </li>
            ))}
          </ul>
          <p className="text-foreground/90 leading-relaxed text-base pt-2">
            Whatever the use, keep readability in mind. If people can&apos;t read it, the effect has failed.
          </p>
        </div>
      </section>

      {/* Is a Zalgo Text Generator Safe? Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="is-it-safe-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Is a Zalgo Text Generator Safe?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            The text is plain Unicode, not code or a virus. The risks are practical.
          </p>
          <p className="text-foreground/90 leading-relaxed text-base">
            Heavy stacking can be hard for screen readers and for people with reading difficulties. It can also break a username you need later, since you can&apos;t retype the marks by hand. Keep it out of logins, forms, and anything important.
          </p>
        </div>
      </section>

      {/* Tips for Using a Zalgo Text Generator Section */}
      <section className="border-t border-border bg-card py-14 cv-auto" id="tips-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            Tips for Using a Zalgo Text Generator
          </h2>
          <ul className="space-y-3.5">
            {[
              "Start at the lowest level and move up only if you need more.",
              "Use it on a word or two, not whole paragraphs.",
              "Keep a plain-text copy of anything you plan to reuse.",
              "Check both mobile and desktop, because the same text can render differently.",
              "Never use it for contact details, links, or passwords.",
            ].map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-base text-foreground/90 shadow-xs"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold mt-0.5">
                  {index + 1}
                </div>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Zalgo Text Generator Not Working? Quick Fixes Section */}
      <section className="border-t border-border bg-background py-14 cv-auto" id="quick-fixes-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            Zalgo Text Generator Not Working? Quick Fixes
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Output looks plain:</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                the app may be stripping the marks. Try a different app or a higher level.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Output is unreadable:</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                drop to a lower level.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Copy button fails:</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                tap it directly on a secure (HTTPS) page, or select the text and copy it manually.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 space-y-1.5 shadow-xs">
              <h3 className="font-semibold text-foreground text-base">Looks different on a friend&apos;s phone:</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                fonts and rendering vary between devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="border-t border-border bg-card py-16 cv-auto" id="faq-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Final Tip Section */}
      <section className="border-t border-border bg-background py-12 cv-auto" id="final-tip-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center space-y-2">
            <h2 className="text-lg font-bold text-foreground flex items-center justify-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Final Tip
            </h2>
            <p className="text-foreground/90 text-base leading-relaxed">
              Use the Zalgo text generator above, start with a low level, and keep a plain copy of your text.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tools Section */}
      <section className="border-t border-border bg-muted/30 py-12 cv-auto" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/zalgo-text-generator" />
        </div>
      </section>
    </article>
  )
}
