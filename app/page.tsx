import { Metadata } from "next"
import { TextRepeaterTool } from "@/components/tools/text-repeater-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import { Repeat, Zap, Globe, Shield, Sparkles, Clock, Check } from "lucide-react"

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
    description: "Most repeaters do one thing: copy your whole text over and over. Ours goes further. Repeat an entire block, word by word, line by line, or paragraph by paragraph — whatever the job actually calls for.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Your repeated text appears as you type. No Generate button to hunt for, no page refresh, no waiting. Just watch it build in real time.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "At your desk or on your phone during lunch — the tool fits the screen you're on. Desktop, tablet, mobile: same clean experience, no pinching or zooming required.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Everything runs inside your browser. Your text never touches a server, never gets stored on our end, and never goes anywhere you didn't send it yourself.",
  },
  {
    icon: Sparkles,
    title: "Custom Separators",
    description: "A comma between each repeat. A line break. Three dashes. Your own emoji. Whatever you want between repetitions, you can put there — the tool gets out of your way.",
  },
  {
    icon: Clock,
    title: "Copy History",
    description: "Changed your mind about what you copied two minutes ago? Your recent outputs are saved locally so you can pull them back without starting over.",
  },
]

const steps = [
  {
    title: "Enter Your Text",
    description: "Type directly into the input field or paste something you already have. Works with plain text, emojis, symbols, and most languages.",
  },
  {
    title: "Set Your Repeat Count",
    description: "Pick a number between 1 and 10,000. There's a quick-pick row for common counts if you'd rather not type it out.",
  },
  {
    title: "Choose a Repeat Mode",
    description: "Decide whether the whole text repeats as one block, each word repeats individually, or each line gets its own treatment. Different jobs need different modes.",
  },
  {
    title: "Add a Separator (Optional)",
    description: "Leave it blank for back-to-back repetitions, or drop in a comma, a line break, a space, or any character you want to appear between each one.",
  },
  {
    title: "Copy or Download",
    description: "Hit Copy to send it straight to your clipboard, or grab a .TXT file if you need it saved. Either way, you're done in under a minute.",
  },
]

const reasons = [
  "It's free — not \"free for the first 10 uses\" or \"free with a watermark.\" Actually free.",
  "No account required. No email address, no password, no confirmation link sitting in your inbox. Open the page and use it.",
  "Everything happens in your browser, which means your text stays on your device. We never see what you type.",
  "It works on any device you're already using. Phone, tablet, laptop — no separate app to download.",
  "It handles whatever you throw at it: English, Arabic, Hindi, Japanese, emojis, punctuation, long paragraphs, single characters. If you can type it, the tool can repeat it.",
  "And when you're done, you can copy straight to your clipboard or download a clean .TXT file — whichever fits your next step.",
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
            <ol className="space-y-8">
              {steps.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="mb-1 text-lg font-semibold">Step {index + 1} — {item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why People Keep Coming Back Section */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why People Keep Coming Back
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-foreground leading-relaxed">{reason}</p>
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
