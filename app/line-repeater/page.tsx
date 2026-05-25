import { Metadata } from "next"
import { LineRepeaterTool } from "@/components/tools/line-repeater-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Line Repeater - Duplicate Lines of Text",
  description: "Free line repeater tool. Duplicate each line of text multiple times. Perfect for creating repeated content, test data, and formatting tasks.",
  alternates: {
    canonical: "https://textrepeater.com/line-repeater",
  },
  openGraph: {
    title: "Line Repeater - Duplicate Lines of Text",
    description: "Free line repeater tool. Duplicate each line of text multiple times instantly.",
    url: "https://textrepeater.com/line-repeater",
  },
}

const faqs = [
  {
    question: "What is a line repeater?",
    answer: "A line repeater is a tool that duplicates each line of your text a specified number of times. Unlike repeating entire text blocks, this tool processes each line individually, making it useful for creating structured repeated content.",
  },
  {
    question: "How do I repeat multiple lines?",
    answer: "Enter your text with multiple lines (press Enter to create new lines), set the repeat count, and each line will be duplicated the specified number of times while maintaining the line structure.",
  },
  {
    question: "Can I add line numbers?",
    answer: "Yes! Our line repeater includes an option to add line numbers to each repeated line. This is useful for creating numbered lists or tracking iterations.",
  },
  {
    question: "What are common uses for line repeating?",
    answer: "Line repeating is useful for generating test data, creating templates, building repeated content structures, preparing data for import/export, and many programming and data processing tasks.",
  },
]

export default function LineRepeaterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Line Repeater",
    description: "Free online line repeater tool to duplicate lines of text.",
    url: "https://textrepeater.com/line-repeater",
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
              Line Repeater
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Duplicate each line of your text multiple times. Enter multiple lines and watch each one 
              get repeated individually. Great for creating structured content.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <LineRepeaterTool />
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Use Cases for Line Repeating</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Test Data Generation", desc: "Create multiple instances of test records or sample data for development and testing purposes." },
              { title: "Template Creation", desc: "Build repeated template structures for documents, code, or configuration files." },
              { title: "Content Formatting", desc: "Format text content by duplicating specific lines to create visual patterns or emphasis." },
              { title: "Data Processing", desc: "Prepare data for batch processing by creating multiple copies of input lines." },
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
          <RelatedTools currentPath="/line-repeater" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </>
  )
}
