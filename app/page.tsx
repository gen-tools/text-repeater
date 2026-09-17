import { Metadata } from "next"
import Image from "next/image"
import { TextRepeaterTool } from "@/components/tools/text-repeater-tool"
import { RelatedTools } from "@/components/related-tools"
import { FAQAccordion } from "@/components/faq-accordion"
import heroImage from "@/src/assets/images/text_repeater_hero_1784377279044.webp"
import { Check, Laptop, HelpCircle, AlertCircle, Sparkles, MessageSquare, Wrench, CheckCircle2 } from "lucide-react"

const PAGE_TITLE = "Text Repeater Online | Copy & Paste Up to 10,000 Times"
const PAGE_DESCRIPTION = "Repeat text online up to 10,000 times with our free Text Repeater. Repeat words, sentences, lines or paragraphs instantly."
const PAGE_URL = "https://mytextrepeater.com/"

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
    answer: "No. Everything is processed locally on your device. Nothing is sent to our server.",
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
    "@type": "SoftwareApplication",
    name: "Text Repeater",
    description: "Text Repeater is a free online tool that repeats any word, sentence, emoji, or paragraph as many times as you need up to 10,000 repetitions in seconds. Type your text once, set a repeat count, and copy or download the result. No signup, no app install, and nothing leaves your browser.",
    url: "https://mytextrepeater.com/",
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
              This tool supports four flexible modes. Type Happy Birthday!, set the count to 5, and choose Each Line to get five separate lines ready to copy. Switch to Each Word mode and each word in your sentence is duplicated individually. The customizable separator controls exactly how the final output is formatted.
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
              Repeating text by hand is easy to get wrong — you lose count, break formatting, or miss separators in a long paste. This tool handles counting and formatting so the output is consistent every time, whether you are duplicating a single emoji or a full paragraph.
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


