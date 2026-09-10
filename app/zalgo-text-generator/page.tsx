import { Metadata } from "next"
import Image from "next/image"
import { ZalgoTextTool } from "@/components/tools/zalgo-text-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import heroImage from "@/src/assets/images/zalgo_text_hero_1784377351127.webp"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, Laptop, HelpCircle, AlertCircle, Sparkles, CheckCircle2 } from "lucide-react"

const PAGE_TITLE = "Zalgo Text Generator — Glitch & Cursed Text"
const PAGE_DESCRIPTION = "Zalgo Text Generator turns normal text into corrupted, glitch-style \"cursed\" text by stacking combining diacritical marks above, through, and below each character."
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
    question: "What is Zalgo text?",
    answer: "It's text layered with combining Unicode marks that stack above, through, and below each character to create a distorted, glitch-style look.",
  },
  {
    question: "How does Zalgo text work?",
    answer: "The generator adds combining diacritical marks to each character in your input based on the intensity level you choose, rather than changing the underlying letters themselves.",
  },
  {
    question: "What are the intensity levels?",
    answer: "They control how many combining marks are applied per character — Mini (subtle glitch), Normal (moderate distortion), and Crazy (heavy corruption). Lower levels stay more readable, while higher levels produce a heavier, more distorted effect.",
  },
  {
    question: "Will Zalgo text work everywhere?",
    answer: "Mostly, but not universally — some apps and platforms limit or strip combining marks, so heavily corrupted text may display differently or get trimmed depending on where you paste it.",
  },
  {
    question: "Is Zalgo text safe?",
    answer: "Yes, it's standard Unicode text with added diacritical marks — it doesn't contain any code or scripts, just characters that render as a glitch effect.",
  },
]

export default function ZalgoTextPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Zalgo Text Generator",
    description: "Free online zalgo text generator to turn normal text into corrupted, glitch-style cursed text using combining diacritical marks.",
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
      "Converts any text into Zalgo-style corrupted text instantly",
      "Multiple intensity levels (Mini, Normal, Crazy)",
      "One-click copy to clipboard",
      "Works with letters, numbers, and most symbols",
      "No account or signup required",
      "Runs entirely in your browser — nothing uploaded to a server",
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
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="main-heading">
              Zalgo Text Generator
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed" id="intro-subtitle">
              Zalgo Text Generator turns normal text into corrupted, glitch-style &quot;cursed&quot; text by stacking combining diacritical marks above, through, and below each character. Type your text, choose an intensity level, and copy the result — no signup, works instantly in your browser.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12" id="tool-section">
        <div className="container mx-auto px-4">
          <ZalgoTextTool />
        </div>
      </section>

      {/* Hero Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Zalgo Text Generator online interface"
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
              "Converts any text into Zalgo-style corrupted text instantly",
              "Multiple intensity levels, from a light glitch effect to heavily distorted output",
              "One-click copy to clipboard",
              "Works with letters, numbers, and most symbols",
              "No account or signup required",
              "Runs entirely in your browser — nothing uploaded to a server",
              "Works on desktop and mobile",
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

      {/* How to Use the Zalgo Text Generator */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            How to Use the Zalgo Text Generator
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "Enter your text.",
                desc: "Type or paste the word, name, or phrase you want to corrupt.",
              },
              {
                title: "Choose an intensity level.",
                desc: "Pick how heavy the glitch effect should look (Mini, Normal, or Crazy) — lighter levels stay readable, higher levels stack more marks per character.",
              },
              {
                title: "Generate the output.",
                desc: "The corrupted version appears immediately.",
              },
              {
                title: "Copy the result.",
                desc: "Paste it wherever you need — a username, a caption, a message.",
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
        </div>
      </section>

      {/* What Is Zalgo Text? */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is Zalgo Text?
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              Zalgo text is text that&apos;s been layered with combining diacritical marks — the same category of Unicode character used for things like accents (é, ñ) — stacked repeatedly above, through, and below a letter until it looks distorted, glitchy, or &quot;cursed.&quot; The name comes from an internet creepypasta character associated with reality-breaking corruption, and the aesthetic caught on well beyond its origin as a stand-in for glitch, horror, or chaos effects in text.
            </p>
            <p>
              Unlike a font change or styling effect, Zalgo text isn&apos;t a different typeface — it&apos;s the same base characters with extra Unicode marks attached, which is why it renders differently (and sometimes unpredictably) depending on the app or platform displaying it.
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
              Building Zalgo text by hand means manually inserting combining marks one at a time, which is slow and easy to get wrong — too few marks and the effect barely reads, too many and the text becomes visually unreadable or breaks certain platforms&apos; rendering. This tool applies marks programmatically based on the intensity level you pick, so the output is consistent and repeatable instead of a manual trial-and-error process.
            </p>
          </div>
        </div>
      </section>

      {/* Zalgo Text Generator vs. Manual Methods */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            Zalgo Text Generator vs. Manual Methods
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-semibold text-foreground">Feature</th>
                  <th className="p-4 font-semibold text-muted-foreground">Manual Unicode Insertion</th>
                  <th className="p-4 font-semibold text-muted-foreground">Font/Styling Apps</th>
                  <th className="p-4 font-semibold text-primary bg-primary/5 border-l border-primary/20">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Zalgo Text Generator</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/90">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Speed</td>
                  <td className="p-4 text-muted-foreground">Slow, character by character</td>
                  <td className="p-4 text-muted-foreground">Fast, but not true Zalgo</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Instant
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Consistency</td>
                  <td className="p-4 text-muted-foreground">Inconsistent, easy to overdo</td>
                  <td className="p-4 text-muted-foreground">N/A</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Controlled by intensity level
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Adjustable intensity</td>
                  <td className="p-4 text-muted-foreground">Manual guesswork</td>
                  <td className="p-4 text-muted-foreground">Not applicable</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Preset levels (Mini, Normal, Crazy)
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Works with any text</td>
                  <td className="p-4 text-muted-foreground">Yes, but tedious</td>
                  <td className="p-4 text-muted-foreground">Limited</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Yes
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
            Works in any modern browser — Chrome, Firefox, Edge, Safari — on both desktop and mobile.
          </p>
        </div>
      </section>

      {/* Perfect For */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            Perfect For
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Horror content",
                desc: "spooky text for Halloween posts and horror-themed content.",
              },
              {
                title: "Memes",
                desc: "dramatic effect for memes and viral content.",
              },
              {
                title: "Gaming",
                desc: "unique usernames and clan tags with a glitchy aesthetic.",
              },
              {
                title: "Art projects",
                desc: "corrupted text for digital art and creative designs.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 flex items-start gap-4"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="text-base text-foreground/90 leading-relaxed">
                  <strong className="font-semibold text-foreground">{item.title}</strong> — {item.desc}
                </div>
              </div>
            ))}
          </div>
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
                title: "Text looks broken or unreadable elsewhere.",
                desc: "Some platforms strip or limit combining marks, especially at higher intensity — try a lower level if the destination app doesn't render it well.",
              },
              {
                title: "Copy button not working.",
                desc: "Some browsers block clipboard access until you've clicked elsewhere on the page first; try again after interacting with the page.",
              },
              {
                title: "Output looks different on mobile vs desktop.",
                desc: "Rendering of stacked Unicode marks can vary by device and font, so the same text may look slightly different across platforms — this is a platform rendering difference, not a generation issue.",
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
          <RelatedTools currentPath="/zalgo-text-generator" />
        </div>
      </section>
    </article>
  )
}

