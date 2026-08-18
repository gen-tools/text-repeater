import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import { BlankTextTool } from "@/components/tools/blank-text-tool"
import heroImage from "@/src/assets/images/blank_text_hero_1784377330502.jpg"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Check, HelpCircle } from "lucide-react"

const FAQAccordion = dynamic(() => import("@/components/faq-accordion").then(mod => mod.FAQAccordion), { ssr: true })
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })

const PAGE_TITLE = "Blank Text Generator — Copy and Paste Invisible Text"
const PAGE_DESCRIPTION = "Generate blank text with our blank text generator. Copy and paste invisible Unicode characters for empty messages, blank usernames, bios, and more."
const PAGE_URL = "https://mytextrepeater.com/blank-text"

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
    siteName: "My Text Repeater",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
}

const faqs = [
  {
    question: "Is this the same as just hitting the space bar?",
    answer: "No. A regular space is visible whitespace that most apps trim automatically. A blank character is a distinct Unicode character with no visible glyph, so it isn't trimmed the same way.",
  },
  {
    question: "Why did my blank text show up as a weird box or symbol?",
    answer: "Some devices or apps can't render every Unicode character correctly and show a placeholder box instead. Switching to a different variant usually fixes it.",
  },
  {
    question: "Can I use this for an Instagram bio or username?",
    answer: "Yes, though Instagram occasionally strips out specific variants when you save changes. Keeping a backup character on hand helps if that happens.",
  },
  {
    question: "Does it work for gaming usernames too?",
    answer: "Yes — it's commonly used for blank or invisible names on platforms like Roblox, Steam, PUBG, Free Fire, and Fortnite, though acceptance can vary by game.",
  },
  {
    question: "Do I need to download anything?",
    answer: "No. Everything runs in your browser, and there's nothing to install.",
  },
  {
    question: "Is there a limit on how many times I can generate one?",
    answer: "No limit on sessions — you can generate as many times as you like. The 10,000 repeat cap applies per single generation, not to how often you use the tool.",
  },
]

export default function BlankTextPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Blank Text Generator",
    description: "Free online blank text and invisible character generator. Copy and paste invisible Unicode spaces for WhatsApp, Instagram bios, Discord, and gaming usernames.",
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
      "Copy multiple invisible Unicode characters (Zero-Width Space, Hangul Filler, Braille Blank)",
      "Custom repetition of blank spaces up to 10,000 times",
      "One-click copy to clipboard",
      "Test invisible characters in browser",
      "Compatible with WhatsApp, Discord, Instagram, and games",
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
    <article className="w-full" id="blank-text-page">
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
              Blank Text Generator
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty" id="intro-subtitle">
              A blank text generator produces invisible Unicode characters — such as a zero-width space, invisible symbol, or Hangul filler character — that you can copy and paste into apps like WhatsApp, Instagram, Discord, and TikTok to create an empty message, blank username, or invisible bio.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-12" id="tool-section">
        <div className="container mx-auto px-4">
          <BlankTextTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Blank Text Generator online tool interface"
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

      {/* Introduction Section */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="blank-text-info-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4 text-foreground/90 leading-relaxed text-base">
            <p>
              A blank text generator produces invisible Unicode characters — such as a zero-width space, invisible symbol, or Hangul filler character — that you can copy and paste into apps like WhatsApp, Instagram, Discord, and TikTok to create an empty message, blank username, or invisible bio.
            </p>
            <p>
              The characters aren&apos;t a trick invented by any tool — they&apos;re standard Unicode characters, the same character set every major operating system and app already supports. This page covers what they are, how to use this specific generator, where it works, and where it commonly runs into trouble.
            </p>
            <p className="font-semibold text-foreground">
              This generator supports up to 10,000 repetitions for building long blank text.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="border-t border-border bg-background py-12 cv-auto" id="quick-answer-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Quick Answer</h2>
          <p className="text-foreground/90 leading-relaxed bg-card p-6 rounded-xl border border-border shadow-sm">
            Generates an invisible Unicode character — copy and paste it anywhere. Regular spaces get trimmed by most apps; this doesn&apos;t. Works for WhatsApp messages, Instagram bios, Discord nicknames, TikTok comments, and usernames across most gaming platforms. Free, browser-based, no signup, repeat up to 10,000 times for long blank text.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="features-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Features</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Multiple invisible character variants (not just one, in case a platform rejects one type)",
              "One-click copy to clipboard",
              "Adjustable repeat count — up to 10,000 for long blank text",
              "Runs entirely in the browser — nothing sent to a server",
              "Works on desktop and mobile",
              "No login, no account, no signup",
              "Unlimited sessions, completely free — the 10,000 cap is per generation, not per use",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5 text-sm text-foreground/90 shadow-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Use This Tool */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="how-to-use-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">How to Use This Tool</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              Open the generator above. A blank character is already loaded and ready — no typing required. Pick a variant if the first one doesn&apos;t behave the way you need on a specific platform. Set a repeat count if you want long blank text instead of a single character. Copy it and paste directly into the message, bio, or username field you&apos;re working with. That&apos;s the entire process — there&apos;s no account step, no download, and no waiting.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Blank Text? */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="what-is-blank-text-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">What Is Blank Text?</h2>
          <p className="text-foreground/90 leading-relaxed">
            Blank text — also called invisible text, empty text, or a blank character — is text made of Unicode characters that carry no visible shape. A zero-width space (U+200B) is the most common one in use, though tools like this one usually include a few different invisible characters and symbols, since not every platform treats them the same way.
          </p>
        </div>
      </section>

      {/* Why It Works */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="why-it-works-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Why It Works</h2>
          <p className="text-foreground/90 leading-relaxed">
            A regular space bar press is visible whitespace, and most apps automatically trim it from the start or end of a message — that&apos;s why typing a few spaces and hitting send usually doesn&apos;t do anything. A zero-width space or similar invisible Unicode character is different: it&apos;s a fully valid character as far as any keyboard or app is concerned, it just doesn&apos;t have a visible glyph attached to it. That&apos;s the entire mechanism behind blank text.
          </p>
        </div>
      </section>

      {/* The Unicode Behind Blank Text */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="unicode-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">The Unicode Behind Blank Text</h2>
          <p className="mb-6 text-foreground/90 leading-relaxed">
            Every blank character used here comes from the standard Unicode character set — nothing proprietary, nothing platform-specific. Unicode assigns a unique code point to every character, and not every code point needs a visible glyph attached to it. That&apos;s the entire trick: these characters render, count, and get accepted by input fields like any other character, they just have nothing to draw.
          </p>

          <p className="mb-3 font-semibold text-foreground">A few of the most commonly used ones:</p>

          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm mb-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-3.5 font-semibold text-foreground">Character</th>
                  <th className="p-3.5 font-semibold text-foreground">Code Point</th>
                  <th className="p-3.5 font-semibold text-foreground">Name</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-mono text-xs">
                <tr>
                  <td className="p-3.5 text-foreground bg-muted/10 font-sans">​</td>
                  <td className="p-3.5 text-foreground/80">U+200B</td>
                  <td className="p-3.5 text-foreground/80 font-sans">Zero-Width Space</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground bg-muted/10 font-sans">‌</td>
                  <td className="p-3.5 text-foreground/80">U+200C</td>
                  <td className="p-3.5 text-foreground/80 font-sans">Zero-Width Non-Joiner</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground bg-muted/10 font-sans">‍</td>
                  <td className="p-3.5 text-foreground/80">U+200D</td>
                  <td className="p-3.5 text-foreground/80 font-sans">Zero-Width Joiner</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground bg-muted/10 font-sans">ㅤ</td>
                  <td className="p-3.5 text-foreground/80">U+3164</td>
                  <td className="p-3.5 text-foreground/80 font-sans">Hangul Filler</td>
                </tr>
                <tr>
                  <td className="p-3.5 text-foreground bg-muted/10 font-sans">⁠</td>
                  <td className="p-3.5 text-foreground/80">U+2060</td>
                  <td className="p-3.5 text-foreground/80 font-sans">Word Joiner</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-foreground/90 leading-relaxed">
            Different apps validate input differently, which is why a character that works fine in a Discord nickname might get stripped from an Instagram bio — it&apos;s not that one is &quot;more invisible&quot; than another, it&apos;s that each platform&apos;s input filter treats specific code points differently. That&apos;s also why this generator offers more than one variant instead of relying on a single character.
          </p>
        </div>
      </section>

      {/* Blank Text vs. Regular Spaces */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="comparison-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Blank Text vs. Regular Spaces</h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-3.5 font-semibold text-foreground"></th>
                  <th className="p-3.5 font-semibold text-foreground">Regular Space</th>
                  <th className="p-3.5 font-semibold text-foreground">Blank Character</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3.5 font-medium text-foreground bg-muted/10">Gets trimmed by apps</td>
                  <td className="p-3.5 text-foreground/80">Usually, yes</td>
                  <td className="p-3.5 text-foreground/80">Usually not</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-foreground bg-muted/10">Visible</td>
                  <td className="p-3.5 text-foreground/80">Yes</td>
                  <td className="p-3.5 text-foreground/80">No</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-foreground bg-muted/10">Can send as an entire message</td>
                  <td className="p-3.5 text-foreground/80">Often blocked</td>
                  <td className="p-3.5 text-foreground/80">Often works</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-foreground bg-muted/10">Character type</td>
                  <td className="p-3.5 text-foreground/80">ASCII</td>
                  <td className="p-3.5 text-foreground/80">Unicode</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Supported Apps and Platforms */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="supported-platforms-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Supported Apps and Platforms</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p>
                <strong>WhatsApp</strong> — blocks messages with nothing typed, so pasting an invisible character as the whole message gets around that check and shows up as an empty bubble.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p>
                <strong>Instagram</strong> — used for a blank bio or blank Instagram username; Instagram occasionally strips a variant out on save, so a backup character is worth having.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p>
                <strong>Discord</strong> — commonly used for an empty Discord nickname or blank channel name; generally accepted without issue.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p>
                <strong>TikTok</strong> — works for blank comments and captions in most cases, similar to Instagram.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p>
                <strong>Twitter/X</strong> — used for a blank bio field the same way as Instagram.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p>
                <strong>Facebook and YouTube comments</strong> — invisible characters are commonly pasted into comment fields the same way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Uses for Blank Text */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="common-uses-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Common Uses for Blank Text</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Blank or invisible Discord nickname",
              "Empty PUBG, Free Fire, or Fortnite username or clan tag",
              "Blank Roblox display name",
              "Empty Steam profile name",
              "Testing how an app or form handles empty-looking input",
              "Developer and QA testing for whitespace-handling bugs",
              "Pranks — sending an empty-looking message that isn't actually empty",
            ].map((use, idx) => (
              <li key={idx} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5 text-sm text-foreground/90 shadow-sm">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Long Blank Text (Copy and Paste) */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="long-blank-text-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Long Blank Text (Copy and Paste)</h2>
          <p className="text-foreground/90 leading-relaxed">
            Repeating the same invisible character multiple times in a row creates &quot;long blank text&quot; — used to push a message further down a screen or create a bigger gap than a single character would. Set the repeat count (up to 10,000) and copy the full block at once.
          </p>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="troubleshooting-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Troubleshooting</h2>
          <div className="space-y-4">
            <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-foreground">Instagram removed my blank text after I saved it.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instagram sometimes strips specific invisible characters on save. Try a different variant from the generator.
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-foreground">Discord rejected my blank nickname.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is less common than on Instagram, but if it happens, try an alternate character.
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-foreground">WhatsApp won&apos;t send my blank message.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Some WhatsApp versions catch certain characters. Try a different variant, or check that nothing else was accidentally typed alongside it.
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-foreground">The copy button didn&apos;t do anything.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is usually a browser permissions issue — some browsers block clipboard access until you interact with the page first. Try clicking elsewhere on the page, then copying again.
              </p>
            </div>

            <div className="bg-card p-5 rounded-xl border border-border shadow-sm">
              <h3 className="mb-2 text-base font-semibold text-foreground">It shows as a box or odd symbol instead of being invisible.</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Older devices or certain apps don&apos;t render every Unicode character properly. A different variant usually resolves this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Tool */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="why-choose-this-tool-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Why Choose This Tool</h2>
          <p className="text-foreground/90 leading-relaxed">
            No signup, no account, and nothing is sent to a server — the character is generated and copied entirely in your browser. It&apos;s free, fast, and works the same way on both desktop and mobile.
          </p>
        </div>
      </section>

      {/* A Note on Accuracy */}
      <section className="border-t border-border bg-background py-16 cv-auto" id="accuracy-note-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">A Note on Accuracy</h2>
          <p className="text-foreground/90 leading-relaxed">
            Platform behavior around invisible characters changes as apps update their input validation, so the platform notes above reflect generally observed behavior rather than a guarantee for every account, region, or app version. The zero-width space referenced throughout is a real, standardized character documented by the Unicode Consortium, not something invented by this or any other tool.
          </p>
        </div>
      </section>

      {/* Key Terms */}
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="key-terms-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Key Terms</h2>
          <div className="space-y-3 text-foreground/90 leading-relaxed">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <strong className="text-foreground">Blank character</strong> — any Unicode character with no visible shape.
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <strong className="text-foreground">Zero-width space (ZWSP)</strong> — U+200B, the most commonly used blank character, standardized by the Unicode Consortium.
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <strong className="text-foreground">Zero-width non-joiner (ZWNJ)</strong> — U+200C, a related invisible character sometimes used as an alternate variant.
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <strong className="text-foreground">Zero-width joiner (ZWJ)</strong> — U+200D, another zero-width variant occasionally offered as a fallback.
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <strong className="text-foreground">Hangul filler</strong> — U+3164, a blank Korean-script character that behaves differently from zero-width characters on some platforms.
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <strong className="text-foreground">Word joiner</strong> — U+2060, an invisible character originally meant to prevent line breaks, also usable as blank text.
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <strong className="text-foreground">Invisible text / empty text / blank message</strong> — different names for the same thing: text built from blank characters.
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 border-t border-border bg-background cv-auto" id="faq-section">
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
      <section className="border-t border-border bg-muted/30 py-16 cv-auto" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/blank-text" />
        </div>
      </section>
    </article>
  )
}
