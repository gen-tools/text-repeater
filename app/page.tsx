import { Metadata } from "next"
import { TextRepeaterTool } from "@/components/tools/text-repeater-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import { Repeat, Zap, Globe, Shield, Sparkles, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Text Repeater Online - Free Text Multiplication Tool",
  description: "Free online text repeater tool. Repeat any text, words, lines, or paragraphs multiple times instantly. Copy and paste with one click. No sign-up required.",
  alternates: {
    canonical: "https://textrepeater.com",
  },
  openGraph: {
    title: "Text Repeater Online - Free Text Multiplication Tool",
    description: "Free online text repeater tool. Repeat any text, words, lines, or paragraphs multiple times instantly.",
    url: "https://textrepeater.com",
  },
}

const faqs = [
  {
    question: "What is a text repeater?",
    answer: "A text repeater is an online tool that duplicates or multiplies any text you input. Simply enter your text, specify how many times you want it repeated, and the tool generates the output instantly. It's perfect for creating repeated patterns, filling content, or generating test data.",
  },
  {
    question: "How do I use the text repeater tool?",
    answer: "Using our text repeater is simple: 1) Enter or paste your text in the input field, 2) Set the number of times you want it repeated, 3) Choose whether to repeat by entire text, words, or lines, 4) Optionally add a custom separator, 5) Copy the result or download as a TXT file.",
  },
  {
    question: "Is there a limit to how many times I can repeat text?",
    answer: "You can repeat text up to 10,000 times using our tool. This generous limit accommodates most use cases while ensuring the tool remains fast and responsive. For extremely large outputs, we recommend downloading the result as a TXT file.",
  },
  {
    question: "Can I use custom separators between repeated text?",
    answer: "Yes! Our text repeater allows you to specify custom separators. You can use spaces, commas, newlines, or any character sequence to separate your repeated text. Leave it blank to repeat text without any separator.",
  },
  {
    question: "Is this text repeater free to use?",
    answer: "Absolutely! Our text repeater is 100% free with no hidden costs, no sign-up required, and no limitations on usage. We believe useful tools should be accessible to everyone.",
  },
  {
    question: "Does the text repeater work on mobile devices?",
    answer: "Yes, our text repeater is fully mobile-responsive and works perfectly on smartphones and tablets. The interface adapts to your screen size, and we've included a sticky copy button for easy mobile use.",
  },
]

const features = [
  {
    icon: Repeat,
    title: "Multiple Repeat Modes",
    description: "Repeat entire text, individual words, lines, or paragraphs with precision control.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "See your repeated text in real-time as you type. No waiting, no page reloads.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Fully responsive design works on desktop, tablet, and mobile devices.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens in your browser. Your text never leaves your device.",
  },
  {
    icon: Sparkles,
    title: "Custom Separators",
    description: "Add any character or text between repetitions for complete formatting control.",
  },
  {
    icon: Clock,
    title: "Copy History",
    description: "Access your recent copies from local storage for quick reuse.",
  },
]

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Text Repeater Online",
    description: "Free online text repeater tool to multiply text, words, lines instantly.",
    url: "https://textrepeater.com",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Repeat text multiple times",
      "Custom separators",
      "Word and line repetition",
      "One-click copy",
      "Download as TXT",
      "Mobile friendly",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
            Text Repeater Online
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Repeat any text, word, or line multiple times instantly. Free, fast, and easy to use. 
            Perfect for social media, testing, or creative projects.
          </p>
        </div>
      </section>

      {/* Main Tool */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <TextRepeaterTool />
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Powerful Features for Text Manipulation
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <feature.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            How to Use the Text Repeater
          </h2>
          <div className="mx-auto max-w-3xl">
            <ol className="space-y-6">
              {[
                { step: "Enter Your Text", desc: "Type or paste the text you want to repeat into the input field." },
                { step: "Set Repeat Count", desc: "Choose how many times you want your text duplicated (1-10,000)." },
                { step: "Choose Repeat Mode", desc: "Select whether to repeat entire text, each word, or each line." },
                { step: "Add Separator (Optional)", desc: "Specify a custom separator like comma, space, or newline." },
                { step: "Copy or Download", desc: "Click copy to clipboard or download as a TXT file." },
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.step}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Our Text Repeater?
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              "100% free with no hidden costs",
              "No registration or sign-up required",
              "Works instantly in your browser",
              "Your data stays private and secure",
              "Mobile-friendly responsive design",
              "Supports all languages and emojis",
              "Download results as TXT files",
              "Keyboard shortcuts for power users",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Related Tools */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/" />
        </div>
      </section>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-20 sm:hidden" />
    </>
  )
}
