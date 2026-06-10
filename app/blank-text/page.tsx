import { Metadata } from "next"
import { BlankTextTool } from "@/components/tools/blank-text-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Blank Text Generator - Invisible Characters & Empty Text",
  description: "Generate invisible characters and blank text. Create zero-width spaces, braille blanks, and other invisible Unicode characters for social media and messaging.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/blank-text",
  },
  openGraph: {
    title: "Blank Text Generator - Invisible Characters & Empty Text",
    description: "Generate invisible characters and blank text for social media and messaging.",
    url: "https://text-repeater0.vercel.app/blank-text",
  },
}

const faqs = [
  {
    question: "What is blank text?",
    answer: "Blank text refers to invisible Unicode characters that take up space but display as empty. These include zero-width spaces, braille pattern blanks, and other special characters that can be copied and pasted.",
  },
  {
    question: "Why would I need invisible characters?",
    answer: "Invisible characters have many uses: creating blank social media usernames, sending empty messages, adding invisible spacing in text, bypassing character requirements, or creating unique visual effects.",
  },
  {
    question: "What types of blank characters are available?",
    answer: "We offer several types: Zero-Width Space (completely invisible), Braille Pattern Blank (appears as empty but is a valid character), regular spaces, tabs, and newlines. Each has different properties and use cases.",
  },
  {
    question: "Will these work on all platforms?",
    answer: "Most platforms support these Unicode characters, but some may filter or remove certain invisible characters. Zero-width spaces and braille blanks typically work across most social media platforms and messaging apps.",
  },
  {
    question: "Is this safe to use?",
    answer: "Yes, these are standard Unicode characters that are completely safe. However, some platforms may have policies against using invisible characters to bypass their rules, so use responsibly.",
  },
]

export default function BlankTextPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Blank Text Generator",
    description: "Free online tool to generate invisible characters and blank text.",
    url: "https://textrepeater.com/blank-text",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              Blank Text Generator
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Generate invisible characters and empty text. Create zero-width spaces, braille blanks, 
              and other Unicode characters that appear invisible but can be copied and pasted.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <BlankTextTool />
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Common Uses for Blank Text</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Social Media", desc: "Create unique profiles, blank usernames, or add invisible spacing to your bio." },
              { title: "Messaging Apps", desc: "Send messages that appear empty or add invisible formatting to your chats." },
              { title: "Gaming", desc: "Create blank clan tags, invisible names, or unique in-game identifiers." },
              { title: "Text Formatting", desc: "Add invisible spacing between elements without visible characters." },
              { title: "Testing", desc: "Test how applications handle invisible or zero-width characters." },
              { title: "Creative Effects", desc: "Create unique visual effects by combining invisible characters with text." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/blank-text" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </>
  )
}
