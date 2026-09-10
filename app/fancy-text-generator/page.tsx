import { Metadata } from "next"
import Image from "next/image"
import { FancyTextTool } from "@/components/tools/fancy-text-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import heroImage from "@/src/assets/images/fancy_text_hero_1784377747000.webp"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, Laptop, HelpCircle, AlertCircle, Sparkles, MessageSquare, CheckCircle2 } from "lucide-react"

const PAGE_TITLE = "Fancy Text Generator — Stylish Fonts & Unicode Text"
const PAGE_DESCRIPTION = "Fancy Text Generator turns plain text into stylized Unicode fonts — Bold, Bubble, Cursive, and more — that you can copy and paste anywhere."
const PAGE_URL = "https://mytextrepeater.com/fancy-text-generator"

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    locale: "en_US",
    siteName: "My Text Repeater",
    images: [
      {
        url: "https://mytextrepeater.com/apple-icon.png",
        width: 1200,
        height: 630,
        alt: PAGE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["https://mytextrepeater.com/apple-icon.png"],
  },
}

const faqs = [
  {
    question: "What is a fancy text generator?",
    answer: "It's a tool that converts your regular text into stylized versions using Unicode characters that visually resemble bold, bubble, cursive, and other font styles.",
  },
  {
    question: "Will the fancy text work on Instagram?",
    answer: "Yes, since the output is still standard Unicode text, it pastes correctly into Instagram bios, captions, and comments.",
  },
  {
    question: "Is there a limit to how much text I can style?",
    answer: "No, there's no character limit on what you can enter.",
  },
  {
    question: "Can I use this for a username or gamer tag?",
    answer: "Yes, styled text works in most username fields that accept standard Unicode characters.",
  },
  {
    question: "Do I need to install a font to see the styles?",
    answer: "No, nothing needs to be installed — the styling comes from the characters themselves, not a font file.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, there's no cost, account, or signup required.",
  },
  {
    question: "Will my text be saved or uploaded anywhere?",
    answer: "No, everything is processed locally in your browser and isn't sent to a server.",
  },
]

export default function FancyTextPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fancy Text Generator",
    description: "Free online fancy text generator to turn plain text into stylized Unicode fonts that you can copy and paste anywhere.",
    url: PAGE_URL,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Multiple font style categories to choose from, including Bold, Bubble, and Cursive",
      "No character limit on input",
      "One-click copy to clipboard for each style",
      "Works with letters, numbers, and most symbols",
      "No account or signup required",
      "Runs entirely in your browser — nothing uploaded to a server",
      "Works on desktop and mobile",
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <article className="w-full" id="fancy-text-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="main-heading">
              Fancy Text Generator
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed" id="intro-subtitle">
              Fancy Text Generator turns plain text into stylized Unicode fonts — Bold, Bubble, Cursive, and more — that you can copy and paste anywhere, including Instagram bios, captions, and usernames. No character limit, no signup, and it works instantly in your browser.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12" id="tool-section">
        <div className="container mx-auto px-4">
          <FancyTextTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Fancy Text Generator - Elegant artistic calligraphy and stylish typography on a clean minimal background"
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

      {/* Features */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Multiple font style categories to choose from, including Bold, Bubble, and Cursive",
              "No character limit on input",
              "One-click copy to clipboard for each style",
              "Works with letters, numbers, and most symbols",
              "No account or signup required",
              "Runs entirely in your browser — nothing uploaded to a server",
              "Works on desktop and mobile",
            ].map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90 shadow-sm transition-all hover:border-primary/40"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Use the Fancy Text Generator */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            How to Use the Fancy Text Generator
          </h2>
          <ol className="space-y-4">
            {[
              {
                title: "Enter your text.",
                desc: "Type or paste the word, name, or phrase you want to style.",
              },
              {
                title: "Browse the style categories.",
                desc: "Scroll through the available fonts — Bold, Bubble, Cursive, and others — to see your text rendered in each.",
              },
              {
                title: "Pick the one you like.",
                desc: "Every style updates live as you type, so you can compare options side by side.",
              },
              {
                title: "Copy the result.",
                desc: "Click to copy the styled version, then paste it wherever you need it.",
              },
            ].map((step, idx) => (
              <li
                key={idx}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm items-start transition-all hover:border-primary/40"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground text-sm">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground text-base">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What Is a Fancy Text Generator? */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Is a Fancy Text Generator?
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              A fancy text generator doesn&apos;t apply a font in the traditional sense — there&apos;s no font file being loaded. Instead, it swaps your regular letters for visually similar Unicode characters that happen to render in a bold, bubbled, cursive, or otherwise stylized form. Because these are still standard Unicode characters, the styled text pastes correctly into places that don&apos;t let you change fonts directly, like an Instagram bio, a username field, or a chat app.
            </p>
            <p>
              That&apos;s the real reason a cool fancy text generator gets used for social profiles specifically — platforms like Instagram don&apos;t offer built-in font choices in bios or captions, so styled Unicode text is one of the few ways to make a name or caption visually stand out without an image or graphic.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why It Works
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <p className="text-foreground/90 leading-relaxed text-base">
              Manually finding and typing Unicode lookalike characters for an entire name or sentence is impractical — most people don&apos;t know the actual character codes, and copying them one at a time from a reference chart is slow. This tool maps your input to each style&apos;s character set automatically, so you get a fully styled version instantly, in as many categories as you want to compare, without needing to know anything about Unicode yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Fancy Text Generator vs. Manual Styling */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-center">
            Fancy Text Generator vs. Manual Styling
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-semibold text-foreground">Feature</th>
                  <th className="p-4 font-semibold text-muted-foreground">Manual Unicode Lookup</th>
                  <th className="p-4 font-semibold text-muted-foreground">Image/Graphic Text</th>
                  <th className="p-4 font-semibold text-primary bg-primary/5 border-l border-primary/20">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Fancy Text Generator</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground/90">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Speed</td>
                  <td className="p-4 text-muted-foreground">Slow, character by character</td>
                  <td className="p-4 text-muted-foreground">Requires design tools</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Instant
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Pastes as real text</td>
                  <td className="p-4 text-muted-foreground">Yes, but tedious to build</td>
                  <td className="p-4 text-muted-foreground">No — it&apos;s an image</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Yes
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Works in bios/usernames</td>
                  <td className="p-4 text-muted-foreground">Yes, if built correctly</td>
                  <td className="p-4 text-muted-foreground">No</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Yes
                  </td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-foreground">Multiple styles to compare</td>
                  <td className="p-4 text-muted-foreground">No</td>
                  <td className="p-4 text-muted-foreground">N/A</td>
                  <td className="p-4 font-medium text-foreground bg-primary/5 border-l border-primary/20">
                    Yes, side by side
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Laptop className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Supported Platforms
            </h2>
          </div>
          <p className="text-foreground/90 leading-relaxed bg-card p-6 rounded-2xl border border-border shadow-sm text-base">
            Works in any modern browser — Chrome, Firefox, Edge, Safari — on both desktop and mobile.
          </p>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Common Use Cases
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Instagram bios and captions",
                desc: "a fancy text generator for Instagram is one of the few ways to add visual style to a bio or caption without an image.",
              },
              {
                title: "Usernames and gamer tags",
                desc: "stylized names that stand out in game lobbies, Discord, or social profiles.",
              },
              {
                title: "Social media posts",
                desc: "pulling attention to a caption or comment with a distinct look.",
              },
              {
                title: "Digital art and design drafts",
                desc: "quick stylized text for mockups without opening a design tool.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 flex items-start gap-4"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="text-base text-foreground/90 leading-relaxed">
                  <strong className="font-semibold text-foreground">{item.title}</strong> — {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 border-t border-border bg-background cv-auto">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="h-7 w-7 text-primary" />
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Troubleshooting
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Styled text shows as boxes or question marks.",
                desc: "This usually means the app or device displaying it doesn't support that particular Unicode range — try a different style category, since not all platforms render every style consistently.",
              },
              {
                title: "Copy button isn't working.",
                desc: "Some browsers block clipboard access until you've clicked elsewhere on the page first; click anywhere on the page, then try again.",
              },
              {
                title: "Text looks different after pasting.",
                desc: "Some platforms (especially older apps) may strip or substitute unsupported Unicode characters — this is a platform limitation, not a generation issue.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <h3 className="font-semibold text-foreground text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 border-t border-border bg-muted/30 cv-auto" id="faq-section">
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
      <section className="border-t border-border bg-background py-16 cv-auto" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/fancy-text-generator" />
        </div>
      </section>
    </article>
  )
}

