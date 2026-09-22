import { Metadata } from "next"
import Image from "next/image"
import { TextRepeaterTool } from "@/components/tools/text-repeater-tool"
import { RelatedTools } from "@/components/related-tools"
import { FAQAccordion } from "@/components/faq-accordion"
import heroImage from "@/src/assets/images/text_repeater_hero_1784377279044.webp"
import { Check, Laptop, HelpCircle, AlertCircle, Sparkles, MessageSquare, Wrench, CheckCircle2 } from "lucide-react"

const PAGE_TITLE = "Text Repeater Online | Copy & Paste Up to 10,000 Times"
const PAGE_DESCRIPTION = "Repeat text online up to 10,000 times with our free Text Repeater. Repeat words, sentences, lines or paragraphs instantly."
const PAGE_URL = "https://mytextrepeater.com"

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  authors: [{ name: "My Text Repeater Editorial Team", url: "https://mytextrepeater.com" }],
  creator: "My Text Repeater Editorial Team",
  publisher: "My Text Repeater",
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
    question: "Can I repeat text 10,000 times?",
    answer: "Yes. Enter your text, set the count to 10,000 and generate. For messaging apps, 500-1000 lines usually works more smoothly.",
  },
  {
    question: "Can I repeat individual words instead of the whole message?",
    answer: "Yes, choose Each Word mode. It will duplicate every word separately.",
  },
  {
    question: "Do I need to install an app?",
    answer: "No. This is a browser-based online tool that works without any download.",
  },
  {
    question: "Can I use it for WhatsApp messages?",
    answer: "Yes. Generate your repeated text and paste it directly into WhatsApp or any other messenger.",
  },
  {
    question: "Does it work for emojis and symbols?",
    answer: "Yes. It fully supports emojis, special symbols, and Unicode including Hindi text.",
  },
  {
    question: "Will my text be saved or uploaded?",
    answer: "Your text is never uploaded to any server and stays strictly inside your browser. It is saved locally so you don't lose your work, and you can remove it anytime with the Clear saved text button.",
  },
  {
    question: "Is this free to use?",
    answer: "Yes, completely free with no signup.",
  },
  {
    question: "Can I download the result?",
    answer: "Yes, you can save the output as a .txt file.",
  },
]

export default function HomePage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "@id": "https://mytextrepeater.com/#software",
    name: "Text Repeater",
    description: "Text Repeater is a free online tool that repeats any word, sentence, emoji, or paragraph as many times as you need up to 10,000 repetitions in seconds. Type your text once, set a repeat count, and copy or download the result. No signup, no app install, and nothing leaves your browser.",
    url: "https://mytextrepeater.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0",
    datePublished: "2025-01-01",
    dateModified: "2026-09-21",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: "My Text Repeater Editorial Team",
      url: "https://mytextrepeater.com",
    },
    creator: {
      "@type": "Organization",
      name: "My Text Repeater Editorial Team",
      url: "https://mytextrepeater.com",
    },
    publisher: {
      "@type": "Organization",
      name: "My Text Repeater",
      url: "https://mytextrepeater.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mytextrepeater.com/icon.svg",
      },
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Repeat any message up to 10,000 times in one click",
      "Quick presets like 10, 50, 100, 500, 1,000 or your own custom number",
      "Four repeat modes: Entire Text, Each Word, Each Line, and Paragraphs",
      "Custom separators — use a space, comma, line break, or add your own symbol",
      "Live character and word counter as you type",
      "One-click copy to clipboard",
      "Download the result as a .txt file for later use",
      "Works with emojis, symbols, and all Unicode characters including Hindi",
      "No account or installation required",
      "Runs entirely in your browser for privacy — client-side verified with zero server uploads",
    ],
  }

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://mytextrepeater.com/#webpage",
    url: "https://mytextrepeater.com",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    datePublished: "2025-01-01",
    dateModified: "2026-09-21",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://mytextrepeater.com/#website",
      url: "https://mytextrepeater.com",
      name: "My Text Repeater",
    },
    author: {
      "@type": "Organization",
      name: "My Text Repeater Editorial Team",
      url: "https://mytextrepeater.com",
    },
    publisher: {
      "@type": "Organization",
      name: "My Text Repeater",
      url: "https://mytextrepeater.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mytextrepeater.com/icon.svg",
      },
    },
    about: {
      "@id": "https://mytextrepeater.com/#software",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Text Repeater
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            Text Repeater is a free online tool that repeats any word, sentence, emoji, or paragraph as many times as you need up to 10,000 repetitions in seconds. Type your text once, set a repeat count, and copy or download the result. No signup, no app install, and nothing leaves your browser.
          </p>
        </div>
      </section>

      {/* Main Tool */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <TextRepeaterTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Text Repeater"
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
              "Repeat any message up to 10,000 times in one click",
              "Quick presets like 10, 50, 100, 500, 1,000 or your own custom number",
              "Four repeat modes: Entire Text, Each Word, Each Line, and Paragraphs",
              "Custom separators — use a space, comma, line break, or add your own symbol",
              "Live character and word counter as you type",
              "One-click copy to clipboard",
              "Download the result as a .txt file for later use",
              "Works with emojis, symbols, and all Unicode characters including Hindi",
              "No account or installation required",
              "Runs entirely in your browser for privacy",
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

      {/* How to Use the Text Repeater */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            How to Use the Text Repeater
          </h2>
          <ol className="space-y-4">
            {[
              {
                stepNum: 1,
                title: "1. Enter your text",
                desc: "Type or paste the word, sentence, message, emoji, or paragraph you want repeated.",
              },
              {
                stepNum: 2,
                title: "2. Choose the repeat count",
                desc: "Pick a preset like 10, 100, or 1,000, or enter any number up to 10,000.",
              },
              {
                stepNum: 3,
                title: "3. Select a repeat mode",
                desc: "Repeat the whole block, each word separately, each line, or each paragraph — whichever fits what you're building.",
              },
              {
                stepNum: 4,
                title: "4. Copy or download",
                desc: "Your result is ready instantly. Copy it with one click or save it as a file.",
              },
            ].map((step) => (
              <li key={step.stepNum} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm items-start transition-all hover:border-primary/40">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
                  {step.stepNum}
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

      {/* Worked Examples for Each Repeat Mode */}
      <section className="py-16 border-t border-border bg-muted/20 cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-3">
              Worked Examples for Each Repeat Mode
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              See exact inputs, settings, and resulting outputs for all four repetition modes supported by the tool.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Mode 1: Entire Text */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">1. Entire Text Mode</h3>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Default</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Duplicates the complete input string as a single unit as many times as specified.
                </p>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Input Text</span>
                    <pre className="rounded-lg border border-border bg-muted/50 p-2.5 font-mono text-xs text-foreground whitespace-pre-wrap">Great job!</pre>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Settings</span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="rounded bg-muted px-2 py-1 font-mono text-foreground">Count: 3</span>
                      <span className="rounded bg-muted px-2 py-1 font-mono text-foreground">Separator: Line Break</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Resulting Output</span>
                    <pre className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 font-mono text-xs text-foreground whitespace-pre-wrap">{`Great job!\nGreat job!\nGreat job!`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Mode 2: Each Word Mode */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">2. Each Word Mode</h3>
                  <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">Word-by-Word</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Separates the text by spaces and repeats each individual word consecutively.
                </p>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Input Text</span>
                    <pre className="rounded-lg border border-border bg-muted/50 p-2.5 font-mono text-xs text-foreground whitespace-pre-wrap">Good morning friend</pre>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Settings</span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="rounded bg-muted px-2 py-1 font-mono text-foreground">Count: 2</span>
                      <span className="rounded bg-muted px-2 py-1 font-mono text-foreground">Separator: Space</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Resulting Output</span>
                    <pre className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 font-mono text-xs text-foreground whitespace-pre-wrap">Good Good morning morning friend friend</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Mode 3: Each Line Mode */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">3. Each Line Mode</h3>
                  <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">Line-by-Line</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Breaks text at existing line breaks and repeats each line in place before moving to the next.
                </p>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Input Text</span>
                    <pre className="rounded-lg border border-border bg-muted/50 p-2.5 font-mono text-xs text-foreground whitespace-pre-wrap">{`Item A\nItem B`}</pre>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Settings</span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="rounded bg-muted px-2 py-1 font-mono text-foreground">Count: 2</span>
                      <span className="rounded bg-muted px-2 py-1 font-mono text-foreground">Separator: Line Break</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Resulting Output</span>
                    <pre className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 font-mono text-xs text-foreground whitespace-pre-wrap">{`Item A\nItem A\nItem B\nItem B`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Mode 4: Paragraphs Mode */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground">4. Paragraphs Mode</h3>
                  <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-semibold text-muted-foreground">Paragraph-by-Paragraph</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Identifies blocks separated by double line breaks and multiplies each whole paragraph.
                </p>
                
                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Input Text</span>
                    <pre className="rounded-lg border border-border bg-muted/50 p-2.5 font-mono text-xs text-foreground whitespace-pre-wrap">{`First announcement.\n\nSecond announcement.`}</pre>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Settings</span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="rounded bg-muted px-2 py-1 font-mono text-foreground">Count: 2</span>
                      <span className="rounded bg-muted px-2 py-1 font-mono text-foreground">Separator: Blank Line</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground block mb-1 text-xs uppercase tracking-wider text-muted-foreground">Resulting Output</span>
                    <pre className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 font-mono text-xs text-foreground whitespace-pre-wrap">{`First announcement.\n\nFirst announcement.\n\nSecond announcement.\n\nSecond announcement.`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Text Repeater? */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is a Text Repeater?
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              A text repeater is a simple online utility that takes one piece of text and duplicates it automatically, so you don&apos;t have to copy and paste the same line over and over.
            </p>
            <p>
              It&apos;s useful for a lot of everyday tasks — from creating repeated replies for messaging apps, to generating long test strings for developers checking input limits.
            </p>
            <p>
              My Text Repeater supports four flexible modes. Type “Happy Birthday!”, set the count to 5, and choose Each Line to get five separate lines ready to copy. Switch to Each Word mode to repeat each word in your sentence individually. The customizable separator lets you control exactly how the final output is formatted.
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
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              Repeating text by hand is easy to get wrong — you lose count, break formatting, or miss separators in a long paste. You don&apos;t have to count or format anything: the output comes out the same every time, from a single emoji to a full paragraph.
            </p>
            <p>
              Because everything runs client-side in your browser, there is no upload delay and no wall between you and your result.
            </p>
          </div>
        </div>
      </section>

      {/* Text Repeater vs. Other Methods */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            Text Repeater vs. Other Methods
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full border-collapse text-left text-sm min-w-[540px]">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-semibold text-foreground">Feature</th>
                  <th className="p-4 font-semibold text-muted-foreground">Manual Copy-Paste</th>
                  <th className="p-4 font-semibold text-muted-foreground">Most Online Tools</th>
                  <th className="p-4 font-semibold text-primary bg-primary/5 border-l border-primary/20">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Our Text Repeater</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/90">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Repeat limit</td>
                  <td className="p-4 text-muted-foreground">Manual and error-prone</td>
                  <td className="p-4 text-muted-foreground">Often capped low</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Up to 10,000 with custom input
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Repeat modes</td>
                  <td className="p-4 text-muted-foreground">One style at a time</td>
                  <td className="p-4 text-muted-foreground">Usually just whole text</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Entire Text, Word, Line, Paragraph
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Custom separators</td>
                  <td className="p-4 text-muted-foreground">You format manually</td>
                  <td className="p-4 text-muted-foreground">Rarely supported</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Built-in option
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Emoji &amp; Unicode</td>
                  <td className="p-4 text-muted-foreground">Depends on app</td>
                  <td className="p-4 text-muted-foreground">Inconsistent</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Full support
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Account needed</td>
                  <td className="p-4 text-muted-foreground">No</td>
                  <td className="p-4 text-muted-foreground">Sometimes</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    No
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Output</td>
                  <td className="p-4 text-muted-foreground">Copy only</td>
                  <td className="p-4 text-muted-foreground">Copy only</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Copy or download
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
            Works in all modern browsers — Chrome, Firefox, Edge, and Safari — on desktop and mobile. No installation needed.
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
                title: "Messaging apps:",
                desc: "Prepare repeated wishes or reminders for WhatsApp, Telegram and Instagram without retyping.",
              },
              {
                title: "Testing and QA:",
                desc: "Generate long repeated strings to check character limits, input fields, and chat interfaces.",
              },
              {
                title: "Social captions:",
                desc: "Create repeated emoji patterns or phrases for emphasis.",
              },
              {
                title: "Fun replies:",
                desc: "Make that classic 100-times apology or repeating meme text in seconds.",
              },
              {
                title: "Bulk placeholders:",
                desc: "Quickly fill documents or sheets with repeated lines for formatting tests.",
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
                  <strong className="font-semibold text-foreground">{item.title}</strong> {item.desc}
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
                title: "Nothing happens when I click generate:",
                desc: "Make sure the text field isn't empty and the count is between 1 and 10,000.",
              },
              {
                title: "The page feels slow at high counts:",
                desc: "Very large outputs can take a moment to render, especially on mobile. Give it a second.",
              },
              {
                title: "Copy button isn't working:",
                desc: "Some browsers block clipboard access until you tap the page first. Click anywhere, then try again.",
              },
              {
                title: "Separators not showing as expected:",
                desc: "Check which repeat mode you are using. Separators work differently between Each Word, Each Line, and Paragraph modes.",
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
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <HelpCircle className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related Tools */}
      <section className="border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/" />
        </div>
      </section>
    </article>
  )
}


