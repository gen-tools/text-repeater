import { Metadata } from "next"
import Image from "next/image"
import { TextRepeaterTool } from "@/components/tools/text-repeater-tool"
import { RelatedTools } from "@/components/related-tools"
import { FAQAccordion } from "@/components/faq-accordion"
import heroImage from "@/src/assets/images/text_repeater_hero_1784377279044.webp"
import { Check, Laptop, HelpCircle, AlertCircle, Sparkles, MessageSquare, Wrench, CheckCircle2 } from "lucide-react"

const PAGE_TITLE = "Text Repeater | Repeat Text Online Up to 10,000 Times"
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
    answer: "Yes — enter any custom number up to 10,000, or use one of the presets for common counts.",
  },
  {
    question: "Can I repeat individual words instead of the whole message?",
    answer: "Switch to Each Word mode, and every word in your input repeats separately using your chosen separator.",
  },
  {
    question: "Is there a text repeater app I need to install?",
    answer: "No — it runs directly in your browser, so there's nothing to download on desktop or mobile.",
  },
  {
    question: "Can I use this for a WhatsApp message?",
    answer: "Yes, generate the repeated text here, then copy and paste it straight into WhatsApp or any messaging app.",
  },
  {
    question: "Does it work for emojis and symbols, not just words?",
    answer: "Yes, emojis, symbols, and Unicode characters all repeat correctly alongside regular text.",
  },
  {
    question: "Will my text be saved or uploaded anywhere?",
    answer: "No — everything is processed locally in your browser and isn't sent to a server.",
  },
  {
    question: "Is this free to use?",
    answer: "Yes, there's no cost, no account, and no usage limit beyond the 10,000-repeat cap.",
  },
  {
    question: "Can I download the result instead of just copying it?",
    answer: "Yes, use the download option to save your repeated text as a .txt file.",
  },
]

export default function HomePage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Text Repeater",
    description: "Free online text repeater tool that repeats any word, sentence, emoji, or paragraph up to 10,000 times with custom separators.",
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
      "Repeat text up to 10,000 times in one click",
      "Preset counts (10, 50, 100, 500, 1,000) or a custom number",
      "Four repeat modes: Entire Text, Each Word, Each Line, Paragraphs",
      "Custom separators — space, comma, line break, or your own",
      "Live character and word counter as you type",
      "One-click copy to clipboard",
      "Download the result as a .txt file",
      "Full support for emojis, symbols, and Unicode characters",
      "No account, signup, or installation required",
      "Works entirely in-browser — nothing is uploaded to a server",
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
        text: typeof faq.answer === "string" ? faq.answer : faq.question,
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
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            Text Repeater is a free online tool that repeats any word, sentence, emoji, or paragraph as many times as you need — up to 10,000 repetitions — in seconds. Type your text once, set a repeat count, and copy or download the result. No signup, no app install, and nothing leaves your browser.
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
              "Repeat text up to 10,000 times in one click",
              "Preset counts (10, 50, 100, 500, 1,000) or a custom number",
              "Four repeat modes: Entire Text, Each Word, Each Line, Paragraphs",
              "Custom separators — space, comma, line break, or your own",
              "Live character and word counter as you type",
              "One-click copy to clipboard",
              "Download the result as a .txt file",
              "Full support for emojis, symbols, and Unicode characters",
              "No account, signup, or installation required",
              "Works entirely in-browser — nothing is uploaded to a server",
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
                title: "Enter your text.",
                desc: "Type or paste the word, sentence, message, emoji, or paragraph you want repeated.",
              },
              {
                title: "Choose the repeat count.",
                desc: "Pick a preset like 10, 100, or 1,000, or type your own number up to 10,000.",
              },
              {
                title: "Select a repeat mode.",
                desc: "Repeat the whole block, each word, each line, or each paragraph — whichever fits what you're building.",
              },
              {
                title: "Copy or download.",
                desc: "Grab the result instantly with one click, or save it as a .txt file for later.",
              },
            ].map((step, idx) => (
              <li key={idx} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm items-start transition-all hover:border-primary/40">
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

      {/* What Is a Text Repeater? */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is a Text Repeater?
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              A text repeater takes one piece of text and multiplies it, so you don&apos;t have to copy and paste the same line over and over by hand. It&apos;s a small utility with a surprisingly wide range of uses — from generating repeat text 100 times for a joke reply, to building a text repeater: repeat text 10k list for load-testing a chat app.
            </p>
            <p>
              This tool specifically supports four repeat modes — Entire Text, Each Word, Each Line, and Paragraphs — plus a customizable separator, so the output is formatted exactly the way you need it. Type &quot;Happy Birthday!&quot;, set the count to 5, choose Each Line, and you get five ready-to-copy lines. Set it to Each Word instead, and every individual word repeats on its own.
            </p>
            <p>
              It works just as well as a plain text repeater online or a repeat text generator — pick the mode that matches your use case and the formatting takes care of itself.
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
              Most repeat-text needs aren&apos;t complicated, but they&apos;re fiddly to do by hand — miscounting reps, breaking line formatting, or losing separators halfway through a long paste. This tool handles the counting and formatting so the output is consistent every time, whether you&apos;re repeating a single emoji or a full paragraph 1,000 times. Everything runs client-side, so there&apos;s no upload delay and no account wall between you and the result.
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
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-semibold text-foreground">Feature</th>
                  <th className="p-4 font-semibold text-muted-foreground">Manual Copy-Paste</th>
                  <th className="p-4 font-semibold text-muted-foreground">Generic Online Repeaters</th>
                  <th className="p-4 font-semibold text-primary bg-primary/5 border-l border-primary/20">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Text Repeater</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/90">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Repeat count</td>
                  <td className="p-4 text-muted-foreground">Manual, error-prone</td>
                  <td className="p-4 text-muted-foreground">Often capped low</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Up to 10,000, preset or custom
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Repeat modes</td>
                  <td className="p-4 text-muted-foreground">One at a time</td>
                  <td className="p-4 text-muted-foreground">Usually just &quot;whole text&quot;</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Entire Text, Word, Line, Paragraph
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Custom separators</td>
                  <td className="p-4 text-muted-foreground">Manual formatting</td>
                  <td className="p-4 text-muted-foreground">Rarely supported</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Built-in
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Emoji/Unicode support</td>
                  <td className="p-4 text-muted-foreground">Depends on app</td>
                  <td className="p-4 text-muted-foreground">Inconsistent</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Full support
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Account required</td>
                  <td className="p-4 text-muted-foreground">No</td>
                  <td className="p-4 text-muted-foreground">Sometimes</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    No
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Output options</td>
                  <td className="p-4 text-muted-foreground">Copy only</td>
                  <td className="p-4 text-muted-foreground">Copy only</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Copy or download as .txt
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
            Text Repeater runs in any modern browser — Chrome, Firefox, Edge, and Safari — on both desktop and mobile. Nothing to install, no separate app needed.
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
                title: "WhatsApp and messaging",
                desc: "build a text repeater whatsapp message, or repeat a phrase for a whatsapp message 100 times as a joke or reminder chain.",
              },
              {
                title: "Testing and QA",
                desc: "generate long repeated strings to stress-test input fields, character limits, or chat UIs.",
              },
              {
                title: "Social captions and comments",
                desc: "repeat an emoji or short phrase for emphasis without manually pasting it a dozen times.",
              },
              {
                title: "Fun and jokes",
                desc: "the classic \"please 100 times copy and paste\" apology message, or a repeating word for a meme format.",
              },
              {
                title: "Bulk placeholder text",
                desc: "quickly fill a document or spreadsheet with repeated text messages for formatting tests.",
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
                  <strong className="font-semibold text-foreground">{item.title}</strong> — {item.desc}
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
                title: "Nothing happens when I click generate.",
                desc: "Make sure the text field isn't empty and the repeat count is a valid number between 1 and 10,000.",
              },
              {
                title: "The page feels slow at high repeat counts.",
                desc: "Very large outputs (tens of thousands of characters) can take a moment to render in-browser — give it a second, especially on mobile.",
              },
              {
                title: "Copy button isn't working.",
                desc: "Some browsers block clipboard access until you interact with the page first; click anywhere on the page, then try again.",
              },
              {
                title: "Separators aren't showing up as expected.",
                desc: "Double-check which repeat mode you're using — separators apply differently between Each Word, Each Line, and Paragraph modes.",
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


