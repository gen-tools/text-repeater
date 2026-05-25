import { Metadata } from "next"
import { FancyTextTool } from "@/components/tools/fancy-text-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Fancy Text Generator - Stylish Fonts & Unicode Text",
  description: "Free fancy text generator. Transform plain text into stylish fonts like bold, italic, script, and more. Perfect for social media bios, usernames, and posts.",
  alternates: {
    canonical: "https://textrepeater.com/fancy-text-generator",
  },
  openGraph: {
    title: "Fancy Text Generator - Stylish Fonts & Unicode Text",
    description: "Transform plain text into stylish fonts with our free fancy text generator.",
    url: "https://textrepeater.com/fancy-text-generator",
  },
}

const faqs = [
  {
    question: "What is a fancy text generator?",
    answer: "A fancy text generator transforms regular text into stylish Unicode characters that look like different fonts. These special characters can be used anywhere that supports Unicode, including social media profiles, messages, and posts.",
  },
  {
    question: "How do fancy fonts work?",
    answer: "Fancy fonts use special Unicode characters that resemble styled text. Instead of actually changing the font, we replace regular letters with Unicode symbols that look like bold, italic, script, and other font styles.",
  },
  {
    question: "Will fancy text work on social media?",
    answer: "Yes! Since fancy text uses Unicode characters rather than actual fonts, it works on most social media platforms including Instagram, Twitter, Facebook, TikTok, and Discord where custom fonts are not normally supported.",
  },
  {
    question: "What font styles are available?",
    answer: "We offer multiple styles including Bold, Italic, Bold Italic, Script, Fraktur, Double-Struck, Monospace, Circled, Squared, Fullwidth, Small Caps, and Upside Down text.",
  },
  {
    question: "Are there any limitations?",
    answer: "Some Unicode characters may not display correctly on all devices or fonts. Also, some platforms may not support all Unicode characters, so certain styles might not appear as expected everywhere.",
  },
]

export default function FancyTextPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Fancy Text Generator",
    description: "Free online fancy text generator to create stylish Unicode fonts.",
    url: "https://textrepeater.com/fancy-text-generator",
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
              Fancy Text Generator
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Transform your plain text into stylish fonts instantly. Choose from bold, italic, script, 
              and many more styles. Perfect for social media bios, usernames, and standing out online.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <FancyTextTool />
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">Popular Uses</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Instagram Bio", desc: "Make your Instagram profile stand out with stylish text in your bio." },
              { title: "Twitter/X Posts", desc: "Create eye-catching tweets with unique font styles." },
              { title: "Discord Usernames", desc: "Stand out in Discord servers with fancy styled names." },
              { title: "Gaming Profiles", desc: "Create unique gamertags and profile names." },
              { title: "Facebook Posts", desc: "Add visual interest to your Facebook content." },
              { title: "Email Signatures", desc: "Make your email signature memorable with styled text." },
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
          <RelatedTools currentPath="/fancy-text-generator" />
        </div>
      </section>
    </>
  )
}
