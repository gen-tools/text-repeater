import { Metadata } from "next"
import Link from "next/link"
import { TextRepeaterTool } from "@/components/tools/text-repeater-tool"
import { RelatedTools } from "@/components/related-tools"
import { FAQAccordion } from "@/components/faq-accordion"
import {
  HelpCircle,
  AlertCircle,
  Layers,
  Settings2,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  Terminal,
  Palette,
  GraduationCap,
  Sparkles,
  Smile,
  CopyCheck,
} from "lucide-react"

const PAGE_TITLE = "Text Repeater Online | Copy & Paste Up to 10,000 Times"
const PAGE_DESCRIPTION = "My Text Repeater duplicates a word, sentence, emoji, line or paragraph up to 10,000 times. Paste text, pick a mode and separator, then copy or download instantly."
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
    question: "What is the maximum number of repeats?",
    answer: "10,000 in a single run.",
  },
  {
    question: "How do I repeat each word separately?",
    answer: "Choose Each Word mode.",
  },
  {
    question: "How do I put each repeat on its own line?",
    answer: "Set the separator to Line Break.",
  },
  {
    question: "How do I create a string of an exact length?",
    answer: "Repeat one character with the separator set to None, and set the count to the length you need.",
  },
  {
    question: "Does it work with emojis and Hindi?",
    answer: "Yes, both are repeated exactly as typed.",
  },
  {
    question: "Can I keep the result?",
    answer: "Yes, Download TXT saves it as a plain text file.",
  },
  {
    question: "Is my text remembered?",
    answer: "Only in your own browser, and Clear saved text removes it.",
  },
  {
    question: "Is it free?",
    answer: "Yes, with no signup.",
  },
]

export default function HomePage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    "@id": "https://mytextrepeater.com/#software",
    name: "Text Repeater",
    description: "My Text Repeater duplicates a word, sentence, emoji, line or paragraph up to 10,000 times. Paste your text, set a count, choose what gets repeated and what goes between the copies, then copy the result or download it as a .txt file. It’s free, needs no signup, and the repeating happens in your browser.",
    url: "https://mytextrepeater.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0",
    datePublished: "2025-01-01",
    dateModified: "2026-10-10",
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
      "Duplicate any word, sentence, emoji, line or paragraph up to 10,000 times",
      "Four repeat modes: Entire Text, Each Word, Each Line, and Paragraphs",
      "Flexible separators including Line Break, Space, Comma, and None",
      "Real-time live character and word counter",
      "One-click copy to clipboard",
      "Download output as .txt file",
      "Full support for emojis, Hindi, and Unicode scripts",
      "100% free with no signup or install required",
      "Private and browser-based client-side execution",
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
    dateModified: "2026-10-10",
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

      {/* Hero Header */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-10 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl text-foreground">
            Text Repeater
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed">
            My Text Repeater duplicates a word, sentence, emoji, line or paragraph up to 10,000 times. Paste your text, set a count, choose what gets repeated and what goes between the copies, then copy the result or download it as a .txt file. It’s free, needs no signup, and the repeating happens in your browser.
          </p>
        </div>
      </section>

      {/* Tool Component (Above all the copy below) */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <TextRepeaterTool />
        </div>
      </section>

      {/* What is a text repeater? */}
      <section className="py-12 sm:py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What is a text repeater?
          </h2>
          <div className="space-y-5 text-foreground/90 leading-relaxed text-base">
            <p>
              A text repeater is an online tool that takes a piece of text and duplicates it a set number of times, so you don’t have to select, copy and paste it by hand. You enter a word, sentence, emoji or paragraph, choose a count, and the tool returns the repeated result in one block, ready to copy.
            </p>
            <p>
              What separates a good text repeater from a basic one is control. Beyond the count, you should be able to choose what is repeated (the whole message, each word, each line or each paragraph) and what sits between the copies, such as a line break, a space or a comma. My Text Repeater gives you all of that, up to 10,000 repetitions, and shows a live character count so you know the exact size of the result before you paste it anywhere.
            </p>
            <p>
              People use a text repeater for a mix of practical and playful jobs: generating exact-length strings to test input fields, filling spreadsheet rows, checking how a layout handles long text, preparing repeated messages and{" "}
              <Link
                href="/emoji-repeater"
                className="text-primary font-medium underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                emoji patterns
              </Link>
              , and making practice sheets. It does one simple job, and it does it the same way every time, without lost count or stray formatting.
            </p>
          </div>
        </div>
      </section>

      {/* How to repeat text in four steps */}
      <section className="py-12 sm:py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            How to repeat text in four steps
          </h2>
          <ol className="space-y-4">
            {[
              {
                stepNum: 1,
                title: "Enter your text.",
                desc: "Type or paste anything, from a single emoji to several paragraphs.",
              },
              {
                stepNum: 2,
                title: "Set the repeat count.",
                desc: "Tap a preset (10, 50, 100, 500 or 1,000) or type any number up to 10,000.",
              },
              {
                stepNum: 3,
                title: "Choose a mode and a separator.",
                desc: "The mode decides what is repeated. The separator decides what sits between the copies.",
              },
              {
                stepNum: 4,
                title: "Copy or download.",
                desc: "The output updates as you change settings, so adjust until it looks right, then copy it or save it as a file.",
              },
            ].map((step) => (
              <li
                key={step.stepNum}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm items-start transition-all hover:border-primary/40"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
                  {step.stepNum}
                </span>
                <div className="text-base text-foreground/90 leading-relaxed">
                  <strong className="font-semibold text-foreground">{step.title}</strong> {step.desc}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground text-center italic">
            Most bad results come from step 3, so the next two sections cover it in detail.
          </p>
        </div>
      </section>

      {/* The four repeat modes, and when each one fits */}
      <section className="py-12 sm:py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-6 justify-center text-center">
            <Layers className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              The four repeat modes, and when each one fits
            </h2>
          </div>
          <p className="text-base text-foreground/90 leading-relaxed text-center mb-8 max-w-2xl mx-auto">
            The same input gives very different output depending on the mode. Here is “Good morning” at a count of 2:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm mb-8">
            <table className="w-full border-collapse text-left text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-border bg-muted/60">
                  <th className="p-4 font-semibold text-foreground">Mode</th>
                  <th className="p-4 font-semibold text-foreground">What it repeats</th>
                  <th className="p-4 font-semibold text-foreground">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/90">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Entire Text</td>
                  <td className="p-4 text-muted-foreground">The whole input as one block</td>
                  <td className="p-4 font-mono text-xs sm:text-sm text-foreground">Good morning, Good morning</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Each Word</td>
                  <td className="p-4 text-muted-foreground">Every word, one at a time</td>
                  <td className="p-4 font-mono text-xs sm:text-sm text-foreground">Good Good morning morning</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Each Line</td>
                  <td className="p-4 text-muted-foreground">Every line, in place</td>
                  <td className="p-4 text-muted-foreground">Each line twice, then the next line</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-semibold text-foreground">Paragraphs</td>
                  <td className="p-4 text-muted-foreground">Every blank-line-separated block</td>
                  <td className="p-4 text-muted-foreground">Each paragraph twice, then the next</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4 text-foreground/90 leading-relaxed text-base max-w-3xl mx-auto">
            <p>
              Entire Text is the default and the one most people want. Use it for a message, a phrase or an emoji pattern.
            </p>
            <p>
              <Link
                href="/word-repeater"
                className="text-primary font-medium underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                Each Word
              </Link>{" "}
              repeats words individually, which suits emphasis (“very very very”), keyword lists and rhythm exercises.
            </p>
            <p>
              Each Line is for lists. If you enter two lines, A and B, at a count of 2, you get A, A, B, B. You do not get A, B, A, B. If you want the alternating pattern, use Entire Text instead.
            </p>
            <p>
              Paragraphs works the same way for blocks of text separated by a blank line, so it fits announcements, templates and multi-part copy.
            </p>
            <p className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm sm:text-base font-medium text-foreground">
              If your result looks grouped when you wanted it alternating, or the reverse, check the mode before touching anything else.
            </p>
          </div>
        </div>
      </section>

      {/* Separators: the small setting that changes everything */}
      <section className="py-12 sm:py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Settings2 className="h-6 w-6 text-primary shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Separators: the small setting that changes everything
            </h2>
          </div>
          <p className="text-base text-foreground/90 leading-relaxed mb-6">
            The separator is the text placed between each repeat, and it decides how the result looks when pasted.
          </p>

          <ul className="space-y-3 mb-6">
            {[
              {
                name: "Line Break",
                desc: "one repeat per line. Best for lists, spreadsheet rows and chat messages.",
              },
              {
                name: "Space",
                desc: "everything stays on one line, which suits sentences and emphasis.",
              },
              {
                name: "Comma",
                desc: "a comma-separated list you can paste into code, a CSV or a form.",
              },
              {
                name: "None",
                desc: "copies are joined with no gap at all. Use it for filler strings and exact-length tests.",
              },
            ].map((sep, idx) => (
              <li
                key={idx}
                className="rounded-xl border border-border bg-card p-4 shadow-sm text-base text-foreground/90 leading-relaxed"
              >
                <strong className="font-semibold text-foreground">{sep.name}:</strong> {sep.desc}
              </li>
            ))}
          </ul>

          <p className="text-base text-foreground/90 leading-relaxed bg-card p-4 rounded-xl border border-border">
            If you get one enormous line when you wanted a list, the separator is almost certainly Space, Comma or None. Switch it to Line Break.
          </p>
        </div>
      </section>

      {/* Work out the output length before you paste */}
      <section className="py-12 sm:py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="h-6 w-6 text-primary shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Work out the output length before you paste
            </h2>
          </div>
          <div className="space-y-5 text-foreground/90 leading-relaxed text-base">
            <p>
              Many apps, forms and spreadsheet cells cap what you can paste, so it helps to know the size before you copy.
            </p>

            <div className="rounded-xl border border-border bg-card p-5 font-mono text-sm sm:text-base text-center shadow-sm text-primary font-semibold">
              Total length = (text length × count) + (separator length × (count − 1))
            </div>

            <p>
              “Great job!” is 10 characters. Repeated 100 times with a line break between copies, that is (10 × 100) + (1 × 99) = 1,099 characters. At 10,000 repeats with no separator, the same phrase produces 100,000 characters.
            </p>

            <p>
              The{" "}
              <Link
                href="/word-counter"
                className="text-primary font-medium underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                live character counter
              </Link>{" "}
              under the output shows the real figure, so you can confirm it against the limit of wherever you’re pasting.
            </p>
          </div>
        </div>
      </section>

      {/* What people actually use a text repeater for */}
      <section className="py-12 sm:py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            What people actually use a text repeater for
          </h2>

          <div className="space-y-8">
            {/* Testing input fields and character limits */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Terminal className="h-5 w-5 text-primary shrink-0" />
                <h3 className="text-lg font-bold text-foreground">
                  Testing input fields and character limits
                </h3>
              </div>
              <p className="text-base text-foreground/90 leading-relaxed mb-4">
                This is the most valuable use for developers and QA testers. Limits fail at their edges, so the useful test lengths are one under, exactly at, and one over the limit. If a field accepts 255 characters:
              </p>
              <ol className="list-decimal list-inside space-y-1.5 text-sm sm:text-base text-foreground/90 mb-4 pl-1">
                <li>Enter a single character, such as a.</li>
                <li>Set the separator to None.</li>
                <li>Set the count to 254, then 255, then 256.</li>
              </ol>
              <p className="text-base text-foreground/90 leading-relaxed">
                You now have three exact-length strings in under a minute, one for each side of the boundary. For stress tests, repeat a longer phrase thousands of times to see how a form, a database field or a chat window handles very long input. A repeated word with spaces behaves differently from one unbroken string, since many interfaces wrap or truncate them differently, so test both.
              </p>
            </div>

            {/* Filling spreadsheets */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <FileSpreadsheet className="h-5 w-5 text-primary shrink-0" />
                <h3 className="text-lg font-bold text-foreground">
                  Filling spreadsheets
                </h3>
              </div>
              <p className="text-base text-foreground/90 leading-relaxed">
                Use Each Line mode with a Line Break separator and paste the result into a column. Each line lands in its own row. Excel allows 32,767 characters in a single cell and{" "}
                <Link
                  href="/blog/repeat-text-in-google-sheets-and-excel"
                  className="text-primary font-medium underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  Google Sheets
                </Link>{" "}
                allows 50,000, so one giant block pasted into a single cell will be cut off. Keeping the output as separate lines avoids that.
              </p>
            </div>

            {/* Messages, captions and reminders */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Smile className="h-5 w-5 text-primary shrink-0" />
                <h3 className="text-lg font-bold text-foreground">
                  Messages, captions and reminders
                </h3>
              </div>
              <p className="text-base text-foreground/90 leading-relaxed">
                Repeated emojis, birthday wishes, playful replies and reminders are the everyday use. Build the block once, copy it, paste it. Two honest cautions: messaging apps have their own length limits, and sending large repeated blocks to people who didn’t ask for them is a reliable way to get muted or reported. Keep it for fun and for groups that enjoy it.
              </p>
            </div>

            {/* Design and layout checks */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Palette className="h-5 w-5 text-primary shrink-0" />
                <h3 className="text-lg font-bold text-foreground">
                  Design and layout checks
                </h3>
              </div>
              <p className="text-base text-foreground/90 leading-relaxed">
                Designers and front-end developers repeat a sentence or paragraph to see how a card wraps, how a button label overflows, or whether a layout survives three times the expected copy. Paragraphs mode produces realistic multi-block text in one step, which is more convincing than a single stretched line.
              </p>
            </div>

            {/* Practice sheets and classroom exercises */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                <h3 className="text-lg font-bold text-foreground">
                  Practice sheets and classroom exercises
                </h3>
              </div>
              <p className="text-base text-foreground/90 leading-relaxed">
                Teachers and parents generate repeated lines for handwriting practice, spelling drills and vocabulary repetition. Learners use the same approach for repeating a phrase or word list in a new language.
              </p>
            </div>

            {/* Placeholder and sample data */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <CopyCheck className="h-5 w-5 text-primary shrink-0" />
                <h3 className="text-lg font-bold text-foreground">
                  Placeholder and sample data
                </h3>
              </div>
              <p className="text-base text-foreground/90 leading-relaxed">
                When you need a hundred rows of dummy content for a prototype, a formatting test or a demo, Each Line mode with a short entry gets you there faster than copying by hand, and Download TXT gives you a file to import.
              </p>
            </div>

            {/* Emojis, Hindi and other scripts */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <Sparkles className="h-5 w-5 text-primary shrink-0" />
                <h3 className="text-lg font-bold text-foreground">
                  Emojis, Hindi and other scripts
                </h3>
              </div>
              <p className="text-base text-foreground/90 leading-relaxed">
                The tool repeats whatever you give it, including emojis, symbols and Unicode scripts such as Hindi. One detail surprises people: a single emoji can count as more than one “character,” depending on who is counting. In JavaScript, for example, 👍 has a string length of 2, and combined emoji such as flags and family sequences are built from several joined code points. So if two counters disagree on an emoji-heavy block, neither is necessarily wrong. They simply count differently. When a limit is tight, leave yourself some margin.
              </p>
            </div>

            {/* Privacy */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-3">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <h3 className="text-lg font-bold text-foreground">
                  Privacy
                </h3>
              </div>
              <p className="text-base text-foreground/90 leading-relaxed">
                The repeating happens in your browser. Your last input is saved on your own device so that a refresh doesn’t erase your work, and the Clear saved text button deletes it whenever you like. If you’re on a shared computer, clear it before you leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When something doesn’t work */}
      <section className="py-12 sm:py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="h-6 w-6 text-primary shrink-0" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              When something doesn’t work
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Nothing is generated.",
                desc: "The input is empty, or the count is outside 1 to 10,000.",
              },
              {
                title: "The page slows down at high counts.",
                desc: "Very large results take longer to render, especially on phones. Try 1,000 first, or use a desktop browser.",
              },
              {
                title: "Copy doesn’t work.",
                desc: "Some browsers need a tap on the page before they allow clipboard access. Tap once, then try again.",
              },
              {
                title: "Pasted text is cut off.",
                desc: "The destination has a length limit. Compare it with the live character count and lower the repeat count.",
              },
              {
                title: "The separator looks wrong.",
                desc: "Separators behave differently in each mode, so confirm the mode first.",
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

      {/* Frequently asked questions */}
      <section className="py-12 sm:py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-8 justify-center text-center">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related tools */}
      <section className="py-12 sm:py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
              Related tools
            </h2>
          </div>
          <RelatedTools currentPath="/" />
        </div>
      </section>
    </article>
  )
}
