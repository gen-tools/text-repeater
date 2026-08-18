import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link";
import { TextRepeaterTool } from "@/components/tools/text-repeater-tool"
import heroImage from "@/src/assets/images/text_repeater_hero_1784377279044.jpg"
import { Check, Shield, Laptop, HelpCircle } from "lucide-react"

const FAQAccordion = dynamic(() => import("@/components/faq-accordion").then(mod => mod.FAQAccordion), { ssr: true })
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })

export const metadata: Metadata = {
  title: "Text Repeater - Repeat Text Online Up to 10,000 Times",
  description: "Free Text Repeater to repeat text 100 times or up to 10,000. Repeat words, sentences, emojis, and messages with custom separators. Copy or download.",
  alternates: {
    canonical: "https://mytextrepeater.com/",
  },
  openGraph: {
    title: "Text Repeater - Repeat Text Online Up to 10,000 Times",
    description: "Free Text Repeater to repeat text 100 times or up to 10,000. Repeat words, sentences, emojis, and messages with custom separators. Copy or download.",
    url: "https://mytextrepeater.com/",
    type: "website",
    siteName: "My Text Repeater",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Repeater - Repeat Text Online Up to 10,000 Times",
    description: "Free Text Repeater to repeat text 100 times or up to 10,000. Repeat words, sentences, emojis, and messages with custom separators. Copy or download.",
  },
}

const faqs = [
  {
    question: "What is a text repeater?",
    answer: "A tool that duplicates text — words, lines, or paragraphs — as many times as you set, without manual copy-pasting.",
  },
  {
    question: "How do I repeat text online?",
    answer: "Paste your text, set a count and mode, then generate — the result appears instantly and you can copy it from the page.",
  },
  {
    question: "Can I repeat text 10,000 times?",
    answer: "Yes, the counter supports anywhere from a couple of repeats up to 10,000 in one go.",
  },
  {
    question: "Can I repeat words or lines separately?",
    answer: "Yes — switch modes to repeat each word on its own, keep each line intact, or repeat full paragraphs.",
  },
  {
    question: "Can I repeat text on new lines instead of one block?",
    answer: "Yes, Each Line mode keeps every repetition on its own line rather than joining them into a single block.",
  },
  {
    question: "Can I use quick presets instead of typing a number?",
    answer: "Yes, presets like 100, 500, and 1,000 are there for common repeat counts, though you can always type a custom number instead.",
  },
  {
      question: "Can I repeat emojis?",
    answer: (
      <>
        Yes, you can{" "}
        <Link href="/emoji-repeater">repeat emojis</Link>{" "}
        cleanly like any other text.
      </>
    ),
  },
  {
    question: "Can I use this as a WhatsApp text repeater?",
    answer: "Yes — it works the same for WhatsApp, SMS, or any chat message as it does for plain text.",
  },
  {
    question: "Is there a limit to how much text I can enter?",
    answer: "There's no fixed word limit, but very large inputs combined with a high repeat count can take a moment longer to generate.",
  },
  {
    question: "Can I copy or download the result?",
    answer: "Both — copy it straight to your clipboard, or download it as a .txt file.",
  },
  {
    question: "Is this text repeater free?",
    answer: "Yes, with no usage limits or signup required.",
  },
  {
    question: "Does my text stay private?",
    answer: "Yes. All processing happens locally in your browser — your text is never sent to or stored on a server.",
  },
  {
    question: "Does it work offline?",
    answer: "Yes, once the page has loaded, repeating text doesn't need an internet connection since nothing is sent to a server.",
  },
  {
    question: "Does it work on mobile?",
    answer: "Yes, it works the same in a mobile browser as it does on desktop.",
  },
]

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Text Repeater Online",
    description: "Free online text repeater tool to multiply text, words, lines instantly.",
    url: "https://mytextrepeater.com/",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Repeat text multiple times",
      "Four repeat modes",
      "Custom separators",
      "Live character and word counter",
      "One-click copy",
      "Download as TXT",
      "Mobile friendly",
    ],
  }

  return (
    <article className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Text Repeater
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Text Repeater lets you repeat words, sentences, paragraphs, emojis, or any text up to 10,000 times online.
            Enter your text, choose the repetition count and separator, then generate your repeated text instantly.
            It's free, browser-based, and requires no signup. Copy or download your repeated text when you're done.
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
            Type your text once, set a repeat count, and get the result instantly. Repeat a single word 100 times, a full message 1,000 times, or push it all the way to 10,000 — pick a quick preset or type your own number, and it builds the output in one click instead of pasting the same line over and over by hand. It runs entirely in your browser, so there&apos;s nothing to install and nothing to send anywhere.
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
              { title: "Enter your text", desc: "Type or paste the word, sentence, emoji, or paragraph you want to repeat." },
              { title: "Set your repeat count", desc: "Use a quick preset (10, 50, 100, 500, 1,000) or type any number up to 10,000." },
              { title: "Choose a repeat mode", desc: "Entire Text, Each Word, Each Line, or Paragraphs, depending on how you want the output structured." },
              { title: "Copy or download", desc: "One click copies the result to your clipboard, or save it straight to a .txt file." },
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

      {/* Who Uses This Text Repeater? */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Who Uses This Text Repeater?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "💬",
                title: "WhatsApp & Messaging",
                desc: "Repeat a message or emoji string for WhatsApp, iMessage, or any chat app — handy when you need to send the same line more than once."
              },
              {
                icon: "📱",
                title: "Social Media",
                desc: "Repeat emojis or short phrases for Instagram captions, TikTok bios, or X posts."
              },
              {
                icon: "✍️",
                title: "Content & Placeholder Text",
                desc: "Generate repeated dividers, sample copy, or line-by-line placeholder text for drafts and mockups."
              },
              {
                icon: "💻",
                title: "Testing & Development",
                desc: "Build a predictable, repeated string to stress-test input fields, forms, or character limits."
              },
              {
                icon: "📚",
                title: "Learning & Practice",
                desc: "Repeat a word or phrase for vocabulary drills and memorization — useful for students and teachers building worksheets."
              },
              {
                icon: "😄",
                title: "Pranks & Fun",
                desc: "Repeat a funny line a few hundred times and send it to a friend — a harmless way to get a laugh out of a group chat."
              }
            ].map((useCase, idx) => (
              <div key={idx} className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-1.5">
                <div className="flex items-center gap-2 font-semibold text-foreground text-base">
                  <span className="text-xl">{useCase.icon}</span>
                  <span>{useCase.title}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
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
              A text repeater duplicates any text a set number of times, instantly, without copying and pasting by hand. Type something once, choose how many times it should repeat, and the result is ready to copy or download in seconds — no software, no account. It&apos;s sometimes searched for as a &quot;text generator&quot; or &quot;message repeater,&quot; but the job is the same: turn one line into as many copies as you need.
            </p>
            <p>
              This one gives you four modes: repeat the whole entry as a block, repeat each word on its own line, repeat line by line, or repeat full paragraphs. Add a separator — a space, comma, or line break — if you want the repetitions split apart. For example, repeating &quot;Happy Birthday!&quot; 5 times in Each Line mode gives you five separate lines, ready to paste straight into a message or a document.
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
           <>Repeat text up to 10,000 times instantly</>,
           <>Quick presets (10, 50, 100, 500, 1,000) or a custom count</>,
           <>Four repeat modes: Entire Text, Each Word, Each Line, Paragraphs</>,
           <>Custom separators: space, comma, newline, or any character</>,
           <>
           Live character and{" "}
           <Link
           href="/word-counter"
           className="text-primary hover:underline"
            >
           word count
         </Link>{" "}
          as you type
        </>,
           <>One-click copy to clipboard</>,
           <>Download the result as a .txt file</>,
           <>Works with emojis, symbols, and full Unicode text</>,
           <>Doubles as a WhatsApp message repeater for chats that need the same line sent twice</>,
           <>No signup, no download, completely free</>,
           <>Runs smoothly on desktop, mobile, and tablet</>,
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
          <ul className="space-y-3 text-foreground/90 leading-relaxed">
            {[
              "Text repetition happens locally in your browser",
              "Nothing you type is uploaded to a server",
              "Nothing is stored once you close the page",
              "No account or signup required",
              "Works without an internet connection once the page has loaded",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
          <p className="text-foreground/90 leading-relaxed bg-card p-5 rounded-xl border border-border shadow-sm">
            Works on desktop, laptop, Android, iPhone, and iPad, in Chrome, Firefox, Edge, and Safari. There&apos;s nothing to install — it runs the same way in the browser tab, regardless of device.
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

