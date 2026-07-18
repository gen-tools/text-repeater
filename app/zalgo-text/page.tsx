import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import { ZalgoTextTool } from "@/components/tools/zalgo-text-tool"
import heroImage from "@/src/assets/images/zalgo_text_hero_1784377351127.jpg"
const FAQAccordion = dynamic(() => import("@/components/faq-accordion").then(mod => mod.FAQAccordion), { ssr: true })
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Zalgo Text Generator - Create Glitchy Cursed Text",
  description: "Free zalgo text generator. Create creepy, glitchy, cursed text effects with combining Unicode characters. Perfect for Halloween, horror themes, and memes.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/zalgo-text",
  },
  openGraph: {
    title: "Zalgo Text Generator - Create Glitchy Cursed Text",
    description: "Create creepy, glitchy zalgo text effects with our free generator.",
    url: "https://text-repeater0.vercel.app/zalgo-text",
  },
}

const faqs = [
  {
    question: "What is Zalgo text?",
    answer: "Zalgo text is a type of text that appears corrupted or glitchy by using combining Unicode characters. These characters stack above, below, and through regular text to create a creepy, distorted appearance often called 'cursed text'.",
  },
  {
    question: "How does Zalgo text work?",
    answer: "Zalgo text uses Unicode combining characters (diacritical marks) that are designed to combine with other characters. By stacking many of these marks on regular letters, the text appears to overflow and glitch in unusual ways.",
  },
  {
    question: "What are the intensity levels?",
    answer: "We offer three levels: Mini (subtle distortion), Normal (moderate glitch effect), and Crazy (extreme corruption). Higher intensity adds more combining characters for a more dramatic effect.",
  },
  {
    question: "Will Zalgo text work everywhere?",
    answer: "Zalgo text works on most platforms that support Unicode, including social media, messaging apps, and websites. However, some platforms may limit or filter excessive combining characters.",
  },
  {
    question: "Is Zalgo text safe?",
    answer: "Yes, Zalgo text is just regular Unicode characters combined in unusual ways. It cannot harm your device, though excessive Zalgo text may slow down rendering in some applications.",
  },
]

export default function ZalgoTextPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Zalgo Text Generator",
    description: "Free online zalgo text generator to create glitchy cursed text.",
    url: "https://textrepeater.com/zalgo-text",
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
              Zalgo Text Generator
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Create creepy, glitchy, cursed text with our Zalgo generator. Transform normal text 
              into disturbing corrupted characters perfect for horror themes, memes, and creative projects.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <ZalgoTextTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Zalgo Text Generator"
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
          <h2 className="mb-8 text-2xl font-bold">Perfect For:</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Horror Content", desc: "Create spooky text for Halloween posts and horror-themed content." },
              { title: "Memes", desc: "Add dramatic effect to memes and viral content." },
              { title: "Gaming", desc: "Create unique usernames and clan tags with a glitchy aesthetic." },
              { title: "Art Projects", desc: "Use corrupted text for digital art and creative designs." },
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
          <RelatedTools currentPath="/zalgo-text" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </article>
  )
}
