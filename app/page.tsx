import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link";
import { TextRepeaterTool } from "@/components/tools/text-repeater-tool"
import { RelatedTools } from "@/components/related-tools"
import { FAQAccordion } from "@/components/faq-accordion"
import heroImage from "@/src/assets/images/text_repeater_hero_1784377279044.jpg"
import { Check, Shield, Laptop, HelpCircle } from "lucide-react"

const PAGE_TITLE = "Text Repeater - Repeat Text Online Up to 10,000 Times"
const PAGE_DESCRIPTION = "Free Text Repeater to repeat text 100 times or up to 10,000. Repeat words, sentences, emojis, and messages with custom separators. Copy or download."
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
    answer: "Yes. You can repeat text up to 10,000 times using the custom repeat count.",
  },
  {
    question: "Can I repeat individual words?",
    answer: "Yes. Select the Each Word mode to repeat words individually instead of repeating the entire text as one block.",
  },
  {
    question: "Can I repeat text on separate lines?",
    answer: "Yes. Use Each Line mode or choose a line break as the separator to place repetitions on separate lines.",
  },
  {
    question: "Can I repeat emojis?",
    answer: "Yes. The Text Repeater works with emojis, symbols, and other Unicode characters.",
  },
  {
    question: "Can I use the Text Repeater for messages?",
    answer: "Yes. You can repeat a word, sentence, or message and then copy the generated result to use wherever you need it.",
  },
  {
    question: "Is there a limit on the amount of text I can repeat?",
    answer: "The maximum repeat count is 10,000. The amount of output you can generate also depends on the size of your original text and the capabilities of your device and browser.",
  },
  {
    question: "Is the Text Repeater free?",
    answer: "Yes. The Text Repeater is free to use and does not require an account.",
  },
  {
    question: "Does my text stay private?",
    answer: "The text repetition process runs in your browser. Your input does not need to be uploaded to a server to generate the repeated result.",
  },
]

export default function HomePage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Text Repeater",
    description: "Free online text repeater tool to duplicate words, sentences, lines, and emojis up to 10,000 times with custom separators.",
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
      "Repeat text up to 10,000 times",
      "Preset repeat counts for quick use",
      "Custom repeat counts",
      "Four repeat modes: Entire Text, Each Word, Each Line, and Paragraphs",
      "Custom separators including spaces, commas, and line breaks",
      "Live character and word counts",
      "One-click copy to clipboard",
      "Download repeated text as a .txt file",
      "Support for emojis, symbols, and Unicode text",
      "No account or signup required",
      "Free to use in your browser",
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
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Text Repeater lets you repeat words, sentences, paragraphs, emojis, or any text up to 10,000 times online. Enter your text, choose how many times to repeat it, select a separator, and generate the result instantly. It&apos;s free to use, works directly in your browser, and does not require an account.
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

      {/* Introduction Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Introduction
          </h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            Repeat text quickly without copying and pasting it by hand. Choose how many times to repeat a word, sentence, message, emoji, line, or paragraph, with options for up to 10,000 repetitions. Generate the result instantly, then copy it to your clipboard or download it as a text file.
          </p>
        </div>
      </section>

      {/* How to Use the Text Repeater */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How to Use the Text Repeater
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "1. Enter your text",
                desc: "Type or paste the word, sentence, message, emoji, or paragraph you want to repeat.",
              },
              {
                title: "2. Choose the repeat count",
                desc: "Select a preset such as 10, 50, 100, 500, or 1,000, or enter your own number up to 10,000.",
              },
              {
                title: "3. Select a repeat mode",
                desc: "Choose how the text should be repeated. You can repeat the entire text, each word, each line, or each paragraph.",
              },
              {
                title: "4. Copy or download the result",
                desc: "Generate your repeated text instantly, then copy the result to your clipboard or download it as a .txt file.",
              },
            ].map((step, idx) => (
              <li key={idx} className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What Is a Text Repeater? */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is a Text Repeater?
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              A text repeater is a simple tool that creates multiple copies of the same text automatically. Instead of copying and pasting the same word, sentence, message, or paragraph again and again, enter it once and choose how many times you want it repeated.
            </p>
            <p>
              This Text Repeater supports four repeat modes: Entire Text, Each Word, Each Line, and Paragraphs. You can also choose a custom separator such as a space, comma, or line break to control how the repeated output is formatted.
            </p>
            <p>
              For example, enter <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground">Happy Birthday!</code>, choose a repeat count of 5, and select Each Line to generate five separate lines that are ready to copy.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Repeat text up to 10,000 times",
              "Preset repeat counts for quick use",
              "Custom repeat counts",
              "Four repeat modes: Entire Text, Each Word, Each Line, and Paragraphs",
              "Custom separators including spaces, commas, and line breaks",
              "Live character and word counts",
              "One-click copy to clipboard",
              "Download repeated text as a .txt file",
              "Support for emojis, symbols, and Unicode text",
              "No account or signup required",
              "Free to use in your browser",
            ].map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-3 text-sm text-foreground/90"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Privacy & Security
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed bg-card p-5 rounded-xl border border-border shadow-sm text-base">
            Your text is processed locally in your browser while you use the Text Repeater. The tool does not require an account, and your input is not uploaded to a server for text generation.
          </p>
        </div>
      </section>

      {/* Device & Browser Compatibility */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Laptop className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Device & Browser Compatibility
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed bg-card p-5 rounded-xl border border-border shadow-sm text-base">
            Text Repeater works on modern desktop and mobile browsers, including Chrome, Firefox, Edge, and Safari. Nothing needs to be installed.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 border-t border-border bg-background cv-auto">
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
      <section className="border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/" />
        </div>
      </section>
    </article>
  )
}

