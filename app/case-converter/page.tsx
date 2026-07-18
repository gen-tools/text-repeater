import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import { CaseConverterTool } from "@/components/tools/case-converter-tool"
import heroImage from "@/src/assets/images/case_converter_hero_1784377369275.jpg"
const FAQAccordion = dynamic(() => import("@/components/faq-accordion").then(mod => mod.FAQAccordion), { ssr: true })
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Case Converter - Convert Text Between Cases",
  description: "Free text case converter. Transform text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, and more. Perfect for developers and writers.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/case-converter",
  },
  openGraph: {
    title: "Case Converter - Convert Text Between Cases",
    description: "Transform text to uppercase, lowercase, title case, and programming cases.",
    url: "https://text-repeater0.vercel.app/case-converter",
  },
}

const faqs = [
  {
    question: "What is a case converter?",
    answer: "A case converter is a tool that transforms text between different letter cases. It can convert text to uppercase, lowercase, title case, sentence case, and various programming naming conventions like camelCase and snake_case.",
  },
  {
    question: "What case types are supported?",
    answer: "We support: UPPERCASE, lowercase, Title Case, Sentence case, tOGGLE cASE, camelCase, PascalCase, snake_case, kebab-case, and CONSTANT_CASE. Each has specific uses in writing and programming.",
  },
  {
    question: "What is camelCase used for?",
    answer: "camelCase is commonly used in programming for variable names in JavaScript, Java, and other languages. Words are joined without spaces, and each word after the first starts with a capital letter.",
  },
  {
    question: "What is the difference between camelCase and PascalCase?",
    answer: "camelCase starts with a lowercase letter (myVariableName), while PascalCase starts with an uppercase letter (MyClassName). PascalCase is often used for class names, while camelCase is used for variables and functions.",
  },
  {
    question: "When should I use snake_case?",
    answer: "snake_case is popular in Python and Ruby programming, and is also commonly used for file names, database column names, and configuration keys. Words are separated by underscores.",
  },
]

export default function CaseConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Case Converter",
    description: "Free online case converter to transform text between different cases.",
    url: "https://textrepeater.com/case-converter",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <article className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              Case Converter
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Convert text between different cases instantly. Transform to uppercase, lowercase, title case, 
              or programming conventions like camelCase and snake_case. Essential for developers and writers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <CaseConverterTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Case Converter - Sleek flat design with lowercase and uppercase alphabet blocks organized neatly on a balanced dual-tone pastel canvas"
              fill
              sizes="(max-w-768px) 100vw, 672px"
              className="object-contain rounded-2xl"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Case Types Explained</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "UPPERCASE", desc: "All letters capitalized. Used for emphasis, acronyms, and constants." },
              { title: "lowercase", desc: "All letters in small form. Default for most text." },
              { title: "Title Case", desc: "First Letter Of Each Word Capitalized. Used for titles and headings." },
              { title: "Sentence case", desc: "First letter of sentence capitalized. Standard for paragraphs." },
              { title: "camelCase", desc: "firstWordLower, thenCapitalized. Used for JavaScript variables." },
              { title: "PascalCase", desc: "EachWordCapitalized. Used for class names in many languages." },
              { title: "snake_case", desc: "words_separated_by_underscores. Popular in Python and databases." },
              { title: "kebab-case", desc: "words-separated-by-hyphens. Used for URLs and CSS classes." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-mono font-semibold">{item.title}</h3>
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
          <RelatedTools currentPath="/case-converter" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </article>
  )
}
