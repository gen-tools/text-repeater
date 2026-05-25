import { Metadata } from "next"
import { EmojiRepeaterTool } from "@/components/tools/emoji-repeater-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Emoji Repeater - Multiply Emojis Instantly",
  description: "Free emoji repeater tool. Multiply any emoji multiple times for social media, messaging, and creative projects. Copy and paste emojis instantly.",
  alternates: {
    canonical: "https://textrepeater.com/emoji-repeater",
  },
  openGraph: {
    title: "Emoji Repeater - Multiply Emojis Instantly",
    description: "Free emoji repeater tool. Multiply any emoji multiple times for social media and messaging.",
    url: "https://textrepeater.com/emoji-repeater",
  },
}

const faqs = [
  {
    question: "What is an emoji repeater?",
    answer: "An emoji repeater is a tool that duplicates emojis multiple times with a single click. Instead of manually copying and pasting emojis, you can instantly generate repeated emojis for social media posts, comments, messages, or any other purpose.",
  },
  {
    question: "How do I repeat emojis?",
    answer: "Simply enter or select an emoji from our quick picker, set how many times you want it repeated, and the tool will instantly generate the output. You can then copy it to your clipboard with one click.",
  },
  {
    question: "Can I add separators between emojis?",
    answer: "Yes! You can add any separator you want between repeated emojis - spaces, commas, or any other characters. Just enter your desired separator in the separator field.",
  },
  {
    question: "Does this work with all emojis?",
    answer: "Yes, our emoji repeater works with all standard Unicode emojis, including complex emojis with skin tone modifiers and flag emojis. It also works with regular text if needed.",
  },
  {
    question: "Can I use this for social media?",
    answer: "Absolutely! The emoji repeater is perfect for creating eye-catching social media posts, comments, and bios. The repeated emojis can be pasted directly into any platform that supports emojis.",
  },
]

export default function EmojiRepeaterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Emoji Repeater",
    description: "Free online emoji repeater tool to multiply emojis instantly.",
    url: "https://textrepeater.com/emoji-repeater",
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
              Emoji Repeater
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Multiply any emoji instantly. Perfect for social media posts, comments, and messages. 
              Select from popular emojis or enter your own.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <EmojiRepeaterTool />
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Why Use an Emoji Repeater?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Social Media Impact", desc: "Create eye-catching posts with repeated emojis that stand out in feeds." },
              { title: "Save Time", desc: "No more tedious copying and pasting. Generate hundreds of emojis instantly." },
              { title: "Express Yourself", desc: "Emphasize emotions and reactions with multiplied emoji expressions." },
              { title: "Universal Support", desc: "Works with all standard emojis across all devices and platforms." },
              { title: "Custom Separators", desc: "Add spaces, commas, or any character between your repeated emojis." },
              { title: "One-Click Copy", desc: "Copy your repeated emojis to clipboard instantly with a single click." },
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
          <RelatedTools currentPath="/emoji-repeater" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </>
  )
}
