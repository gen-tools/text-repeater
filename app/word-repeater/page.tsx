import { Metadata } from "next"
import { WordRepeaterTool } from "@/components/tools/word-repeater-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Word Repeater - Repeat Individual Words",
  description: "Free word repeater tool. Repeat each word in your text multiple times. Create unique text effects and patterns with repeated words.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/word-repeater",
  },
  openGraph: {
    title: "Word Repeater - Repeat Individual Words",
    description: "Free word repeater tool. Repeat each word in your text multiple times.",
    url: "https://text-repeater0.vercel.app/word-repeater",
  },
}

const faqs = [
  {
    question: "What is a word repeater?",
    answer: "A word repeater is a tool that takes your text and repeats each individual word a specified number of times. For example, 'hello world' with 3 repetitions becomes 'hello hello hello world world world'.",
  },
  {
    question: "How is this different from text repeating?",
    answer: "While text repeating duplicates your entire input, word repeating processes each word individually. This creates a unique stuttering or echoing effect that can be used for creative or practical purposes.",
  },
  {
    question: "Can I customize the separator between repeated words?",
    answer: "Yes! You can set a custom separator that appears between each repetition of a word. Use spaces, hyphens, underscores, or any character you prefer.",
  },
  {
    question: "What are some creative uses for word repeating?",
    answer: "Word repeating can be used for creating emphasis in writing, generating unique text effects for social media, building repeated patterns for design, or creating interesting visual text layouts.",
  },
]

export default function WordRepeaterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Word Repeater",
    description: "Free online word repeater tool to repeat individual words.",
    url: "https://textrepeater.com/word-repeater",
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
              Word Repeater
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Repeat each word in your text individually. Create unique stuttering effects, 
              emphasis patterns, or creative text layouts with word-by-word repetition.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <WordRepeaterTool />
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">How Word Repeating Works</h2>
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-muted-foreground">
              The word repeater processes your text word by word, repeating each one the specified number of times before moving to the next word. This creates a unique pattern that differs from simple text repetition.
            </p>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-semibold">Example:</h3>
              <p className="mb-2"><strong>Input:</strong> &quot;Hello World&quot;</p>
              <p className="mb-2"><strong>Repeat:</strong> 3 times</p>
              <p><strong>Output:</strong> &quot;Hello Hello Hello World World World&quot;</p>
            </div>
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
          <RelatedTools currentPath="/word-repeater" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </>
  )
}
