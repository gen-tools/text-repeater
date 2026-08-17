import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import { CaseConverterTool } from "@/components/tools/case-converter-tool"
import heroImage from "@/src/assets/images/case_converter_hero_1784377369275.jpg"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, HelpCircle } from "lucide-react"

const FAQAccordion = dynamic(() => import("@/components/faq-accordion").then(mod => mod.FAQAccordion), { ssr: true })
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })

export const metadata: Metadata = {
  title: "Case Converter | Small to Capital & Lowercase Tool",
  description: "Convert small to capital letters, uppercase to lowercase, Title Case, Sentence Case, and more with our free online case converter. Copy instantly.",
  alternates: {
    canonical: "https://mytextrepeater.com/case-converter",
  },
  openGraph: {
    title: "Case Converter — Convert Text Between Upper, Lower, Title & More",
    description: "Paste your text, pick a case, and get the converted result instantly. Letter casing changes — upper, lower, title, sentence, or toggled — without touching spelling, spacing, or word order.",
    url: "https://mytextrepeater.com/case-converter",
  },
}

const faqs = [
  {
    question: "What is a case converter?",
    answer: "It changes the capitalization of your text — upper, lower, title, sentence, or toggled — without altering the words, spelling, or order.",
  },
  {
    question: "How do I convert lowercase to uppercase?",
    answer: "Paste your text, select the UPPERCASE option, and every letter converts to a capital immediately.",
  },
  {
    question: "What is Title Case?",
    answer: "A style where the first letter of each major word is capitalized, commonly used for titles and headings.",
  },
  {
    question: "What is Sentence Case?",
    answer: "A style where only the first letter of each sentence is capitalized, with the rest of the sentence in lowercase — similar to how normal prose is written.",
  },
  {
    question: "Can I convert uppercase to lowercase?",
    answer: "Yes, the lowercase option converts every capital letter back to lowercase, regardless of the original casing.",
  },
  {
    question: "Does formatting change?",
    answer: "No, only letter casing changes. Line breaks, spacing, and punctuation stay exactly as you typed them.",
  },
  {
    question: "Does punctuation stay the same?",
    answer: "Yes, punctuation marks aren't letters, so case conversion doesn't affect them at all.",
  },
  {
    question: "Does it work with Unicode text?",
    answer: "Yes, for most Latin-based alphabets and accented characters. Some non-Latin scripts don't have separate upper and lower case forms, so results can vary there.",
  },
  {
    question: "Is it free?",
    answer: "Yes, there's no cost to use it and no premium tier required for basic conversion.",
  },
  {
    question: "Is my text private?",
    answer: "Yes, conversion happens in your browser, and nothing is uploaded or stored.",
  },
  {
    question: "Can I use it on mobile?",
    answer: "Yes, it works the same way on Android and iPhone browsers as it does on desktop.",
  },
  {
    question: "Is there a text limit?",
    answer: "There's no fixed limit for typical use.",
  },
  {
    question: "Does it work offline after loading?",
    answer: "Once the page has fully loaded, the conversion itself runs locally without needing a server call.",
  },
  {
    question: "Can I copy the converted text?",
    answer: "Yes, a one-click copy button sends the result straight to your clipboard.",
  },
  {
    question: "Can I download the result?",
    answer: "Yes, you can save the converted text as a .txt file instead of copying it.",
  },
]

export default function CaseConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Case Converter",
    description: "Paste your text, pick a case, and get the converted result instantly. Letter casing changes — upper, lower, title, sentence, or toggled — without touching spelling, spacing, or word order.",
    url: "https://mytextrepeater.com/case-converter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <article className="w-full" id="case-converter-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="main-heading">
              Case Converter
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty" id="intro-subtitle">
              Paste your text, pick a case, and get the converted result instantly. Letter casing changes — upper, lower, title, sentence, or toggled — without touching spelling, spacing, or word order. It&apos;s free, runs entirely in your browser, and doesn&apos;t ask you to sign up for anything.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12" id="tool-section">
        <div className="container mx-auto px-4">
          <CaseConverterTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto" id="hero-image-section">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Case Converter online tool interface"
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

      {/* What Is a Case Converter? */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="what-is-case-converter-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">What Is a Case Converter?</h2>
          <p className="text-foreground/90 leading-relaxed text-base">
            A case converter changes how letters are capitalized without changing the words themselves. Type &quot;hello WORLD&quot; and convert it to Title Case, and you get &quot;Hello World&quot; — same words, same order, just different capitalization. It&apos;s a small distinction, but it matters: a case converter isn&apos;t rewriting your sentence or fixing grammar, it&apos;s only adjusting which letters are capital and which aren&apos;t. That makes it useful anywhere consistent capitalization matters more than manually retyping — headlines, form fields, code identifiers, or cleaning up text that was typed in the wrong case to begin with.
          </p>
        </div>
      </section>

      {/* Supported Case Types */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="supported-case-types-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Supported Case Types</h2>
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-2">
              <h3 className="text-lg font-semibold text-foreground">UPPERCASE</h3>
              <p className="text-sm text-foreground/90 leading-relaxed">Converts every letter to a capital letter.</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Input:</strong> hello world</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Output:</strong> HELLO WORLD</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Best for:</strong> headlines that need emphasis, warning labels, or acronyms typed in the wrong case.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-2">
              <h3 className="text-lg font-semibold text-foreground">lowercase</h3>
              <p className="text-sm text-foreground/90 leading-relaxed">Converts every letter to lowercase, regardless of how it was originally typed.</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Input:</strong> HELLO WORLD</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Output:</strong> hello world</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Best for:</strong> cleaning up text that was accidentally typed with caps lock on, or standardizing data before processing it.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Title Case</h3>
              <p className="text-sm text-foreground/90 leading-relaxed">Capitalizes the first letter of each major word.</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Input:</strong> the great gatsby</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Output:</strong> The Great Gatsby</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Best for:</strong> article titles, book names, headings, and product names.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Sentence case</h3>
              <p className="text-sm text-foreground/90 leading-relaxed">Capitalizes only the first letter of each sentence, leaving the rest lowercase.</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Input:</strong> THIS IS MY MESSAGE. IT NEEDS FIXING.</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Output:</strong> This is my message. It needs fixing.</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Best for:</strong> turning text typed entirely in caps back into normal, readable sentences.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Capitalize Each Word</h3>
              <p className="text-sm text-foreground/90 leading-relaxed">Capitalizes the first letter of every word, including smaller words that Title Case rules would normally leave lowercase.</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Input:</strong> a tale of two cities</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Output:</strong> A Tale Of Two Cities</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Best for:</strong> situations where you want every word capitalized without exception, such as certain naming conventions or stylized headings.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Toggle Case</h3>
              <p className="text-sm text-foreground/90 leading-relaxed">Flips the case of every letter — capitals become lowercase and lowercase becomes capital.</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Input:</strong> Hello World</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Output:</strong> hELLO wORLD</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Best for:</strong> quickly reversing a capitalization mistake, or for stylized, attention-grabbing text.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5 shadow-sm space-y-2">
              <h3 className="text-lg font-semibold text-foreground">Alternating Case</h3>
              <p className="text-sm text-foreground/90 leading-relaxed">Alternates between lowercase and uppercase letter by letter.</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Input:</strong> hello world</p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Output:</strong> hE lLo WoRlD <em>(pattern may vary slightly depending on spacing)</em></p>
              <p className="text-sm text-muted-foreground"><strong className="text-foreground">Best for:</strong> the &quot;mocking&quot; text style often used in memes and casual social posts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Title Case vs. Capitalize Each Word: What's the Difference? */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="title-case-vs-capitalize-each-word-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Title Case vs. Capitalize Each Word: What&apos;s the Difference?</h2>
          <p className="text-foreground/90 leading-relaxed">
            They look almost identical, which is why people mix them up constantly. Title Case follows conventional style rules — small connecting words like &quot;a,&quot; &quot;of,&quot; &quot;the,&quot; and &quot;and&quot; stay lowercase unless they open the sentence, so &quot;A Tale of Two Cities&quot; is correct Title Case with that &quot;of&quot; staying small on purpose. Capitalize Each Word skips that rule entirely: &quot;A Tale Of Two Cities,&quot; no exceptions. If you&apos;re formatting a book title, article headline, or anything meant to follow standard publishing convention, Title Case is what editors actually use. Capitalize Each Word suits places where a strict, no-exceptions pattern matters more than convention does — certain naming schemes, some technical documentation, or a deliberately blocky visual style.
          </p>
        </div>
      </section>

      {/* Uppercase vs. Lowercase: When Each One Actually Works */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="uppercase-vs-lowercase-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Uppercase vs. Lowercase: When Each One Actually Works</h2>
          <p className="text-foreground/90 leading-relaxed">
            These aren&apos;t really opposites in terms of use case — they solve different problems. Uppercase reads as louder and more forceful, which is why it works for short warning labels, acronyms, or a headline that needs to grab attention in a single glance. Lowercase reads as calmer, which is why it&apos;s the default for body text and, increasingly, a deliberate branding choice — plenty of product names now stylize themselves entirely in lowercase on purpose. Neither is &quot;correct&quot; by itself; it comes down to whether you want the text to shout or sit quietly in the background.
          </p>
        </div>
      </section>

      {/* When Not to Use ALL CAPS */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="when-not-to-use-all-caps-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">When Not to Use ALL CAPS</h2>
          <p className="text-foreground/90 leading-relaxed">
            ALL CAPS has a reputation problem, and it&apos;s earned. In email and messaging, it reads as shouting, which is exactly why most professional style guides steer away from it. It&apos;s also harder to read in long stretches — the uniform letter height flattens the visual shape that normally helps your eye recognize words at a glance, which is part of why publishers save it for short bursts like headlines and acronyms rather than full paragraphs. If you&apos;re drafting an email, a longer caption, or anything meant to be read comfortably rather than glanced at, Sentence case or Title Case will almost always serve the reader better than a wall of capitals.
          </p>
        </div>
      </section>

      {/* How to Use */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="how-to-use-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">How to Use</h2>
          <ol className="list-decimal list-inside space-y-3 text-foreground/90 leading-relaxed bg-card p-6 rounded-xl border border-border shadow-sm">
            <li className="pl-2">Paste or type your text into the box.</li>
            <li className="pl-2">Choose the case you want — UPPERCASE, lowercase, Title Case, Sentence case, Capitalize Each Word, Toggle Case, or Alternating Case.</li>
            <li className="pl-2">Copy the result or download it as a file.</li>
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="features-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Features</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Conversion happens the moment you pick a case — there&apos;s no lag, no spinner, even on a long paste. Length isn&apos;t really a constraint either: drop in a sentence or an entire document and it processes the same way.
            </p>
            <p>
              Getting the result back out is just as quick. A one-click copy button sends the converted text straight to your clipboard, or you can download it as a .txt file if you&apos;d rather hold onto it than paste it somewhere right away.
            </p>
            <p>
              Everything runs in your browser instead of on a remote server, so it behaves the same on a phone as it does on a laptop, and there&apos;s no signup or account step in between. Unicode is supported too, so accented characters and many non-English scripts convert correctly rather than breaking or getting stripped out. And it&apos;s free, with no premium tier gating basic conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Common Uses */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="common-uses-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Common Uses</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Students — fixing capitalization on essays or notes typed quickly without attention to case.",
              "Writers — converting draft titles and headings into proper Title Case before publishing.",
              "Bloggers — standardizing post titles so a site doesn't end up with half its headings in Title Case and the rest in Sentence case, which happens more often than most style guides would like.",
              "Developers — converting variable names or labels between naming conventions, such as switching a string to all lowercase before using it as a slug.",
              "SEO professionals — cleaning up title tags and meta descriptions pulled from inconsistent source data, like a spreadsheet export that came through in all caps.",
              "Social media managers — creating stylized Toggle Case or Alternating Case text for captions and posts.",
              "Content editors — fixing accidental caps-lock text before publishing.",
              "Office work — reformatting text pasted from PDFs, spreadsheets, or emails that came through in the wrong case.",
              "Data cleanup — normalizing casing across large sets of pasted or imported text before further processing.",
            ].map((use, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5 text-sm text-foreground/90 shadow-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Examples */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="examples-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Examples</h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-3.5 font-semibold text-foreground">Original</th>
                  <th className="p-3.5 font-semibold text-foreground">Converted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3.5 text-foreground/80 font-mono text-xs">hello world</td>
                  <td className="p-3.5 text-foreground"><strong className="text-foreground">UPPERCASE:</strong> HELLO WORLD</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground/80 font-mono text-xs">hello world</td>
                  <td className="p-3.5 text-foreground"><strong className="text-foreground">lowercase:</strong> hello world</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground/80 font-mono text-xs">hello world</td>
                  <td className="p-3.5 text-foreground"><strong className="text-foreground">Title Case:</strong> Hello World</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground/80 font-mono text-xs">HELLO WORLD</td>
                  <td className="p-3.5 text-foreground"><strong className="text-foreground">Sentence case:</strong> Hello world</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground/80 font-mono text-xs">hello world</td>
                  <td className="p-3.5 text-foreground"><strong className="text-foreground">Capitalize Each Word:</strong> Hello World</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground/80 font-mono text-xs">Hello World</td>
                  <td className="p-3.5 text-foreground"><strong className="text-foreground">Toggle Case:</strong> hELLO wORLD</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground/80 font-mono text-xs">hello world</td>
                  <td className="p-3.5 text-foreground"><strong className="text-foreground">Alternating Case:</strong> hElLo WoRlD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Use a Case Converter Instead of Editing Manually? */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="why-use-case-converter-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Why Use a Case Converter Instead of Editing Manually?</h2>
          <p className="text-foreground/90 leading-relaxed">
            Retyping capitalization by hand is fine for a single word or a short phrase. It stops being fine the moment you&apos;re staring at a full paragraph that got pasted in from somewhere in the wrong case — and that happens more often than you&apos;d think, usually from a PDF export, an old email thread, or someone&apos;s caps lock sticking for half a message. A case converter handles the whole block in one pass instead of you clicking into each word individually, and it skips the small mistakes that creep into manual editing — a missed capital at the start of a sentence, or one word left behind after a quick scroll-through. Past a sentence or two, converting everything at once is simply faster and more consistent than fixing it by hand.
          </p>
        </div>
      </section>

      {/* A Few Notes from Real Editing Work */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="notes-from-real-editing-work-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">A Few Notes from Real Editing Work</h2>
          <ul className="space-y-3">
            {[
              "Print-style headlines traditionally use Title Case, but a lot of digital publications have shifted toward Sentence case for headlines and titles — it reads a little more casual and matches how people actually type online.",
              "If a client sends text in ALL CAPS (it happens more than you'd expect), converting to Sentence case first and then manually fixing proper nouns afterward is usually faster than retyping from scratch.",
              "Toggle Case rarely ends up in anything published — it's mostly a fast way to undo a mistake, like when caps lock was on for half a sentence.",
              "For anything code-adjacent — slugs, filenames, variable names — lowercase is the safer default, since mixed casing can cause inconsistencies in case-sensitive systems.",
            ].map((note, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-sm text-foreground/90 shadow-sm">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Unicode Support */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="unicode-support-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Unicode Support</h2>
          <p className="text-foreground/90 leading-relaxed">
            Casing changes work beyond plain English letters, including accented characters and many non-English scripts. That said, capitalization rules aren&apos;t identical across every language — some scripts don&apos;t have a distinct uppercase and lowercase form at all, and others follow conventions that differ from English. Results are most reliable for languages that use a Latin-based alphabet with clear upper and lower case letters.
          </p>
        </div>
      </section>

      {/* Privacy */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="privacy-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Privacy</h2>
          <p className="text-foreground/90 leading-relaxed">
            Conversion happens locally in your browser. Nothing you paste is uploaded to a server, and nothing is stored after you leave the page. There&apos;s no account required, so there&apos;s no personal data tied to what you convert.
          </p>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="device-compatibility-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Device Compatibility</h2>
          <p className="text-foreground/90 leading-relaxed">
            Works on Windows, macOS, and Linux, as well as Android and iPhone. Compatible with Chrome, Firefox, Edge, and Safari — no separate app or installation needed on any of them.
          </p>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 border-t border-border bg-background cv-auto" id="faq-section">
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
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/case-converter" />
        </div>
      </section>
    </article>
  )
}
