import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import { BlankTextTool } from "@/components/tools/blank-text-tool"
import heroImage from "@/src/assets/images/blank_text_hero_1784377330502.jpg"
const FAQAccordion = dynamic(() => import("@/components/faq-accordion").then(mod => mod.FAQAccordion), { ssr: true })
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Blank Text Generator — Copy and Paste Invisible Text",
  description: "A blank text generator produces invisible Unicode characters — such as a zero-width space, invisible symbol, or Hangul filler character — that you can copy and paste into apps like WhatsApp, Instagram, Discord, and TikTok to create an empty message, blank username, or invisible bio.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/blank-text",
  },
  openGraph: {
    title: "Blank Text Generator — Copy and Paste Invisible Text",
    description: "A blank text generator produces invisible Unicode characters — such as a zero-width space, invisible symbol, or Hangul filler character — that you can copy and paste into apps like WhatsApp, Instagram, Discord, and TikTok to create an empty message, blank username, or invisible bio.",
    url: "https://text-repeater0.vercel.app/blank-text",
  },
}

const faqs = [
  {
    question: "Is this the same as just hitting the space bar?",
    answer: "Not quite — apps usually trim regular spaces, especially at the start or end of a message. This gets around that.",
  },
  {
    question: "Why did my blank text show up as a weird box or symbol?",
    answer: "Older devices or certain apps don't always render every Unicode character properly. Swap in a different variant and it usually clears up.",
  },
  {
    question: "Can I use this for an Instagram bio or username?",
    answer: "Mostly, yes. Instagram occasionally removes a blank character when the profile saves, so it might take a second attempt with a different one.",
  },
  {
    question: "Does it work for gaming usernames too?",
    answer: "Yes, especially anywhere that accepts Unicode input the way Discord does.",
  },
  {
    question: "Do I need to download anything?",
    answer: "Nope — copy and paste straight from the page.",
  },
  {
    question: "Is there a limit on how many times I can generate one?",
    answer: "Yes — up to 10,000 repetitions if you're building long blank text. Plenty for pretty much anything short of trying to break a chat app.",
  },
]

export default function BlankTextPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Blank Text Generator — Copy and Paste Invisible Text",
    description: "A blank text generator produces invisible Unicode characters — such as a zero-width space, invisible symbol, or Hangul filler character — that you can copy and paste into apps like WhatsApp, Instagram, Discord, and TikTok to create an empty message, blank username, or invisible bio.",
    url: "https://textrepeater.com/blank-text",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <article className="w-full" id="blank-text-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="hero-section">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl" id="main-heading">
              Blank Text Generator
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty" id="intro-text">
              Generate invisible Unicode characters to copy and paste. Use them for empty messages, blank usernames, or invisible bios in your favorite apps.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" id="tool-section">
        <div className="container mx-auto px-4">
          <BlankTextTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Blank Text Generator - Elegant minimalist abstract concept representing space with a floating white empty frame"
              fill
              sizes="(max-w-768px) 100vw, 672px"
              className="object-contain rounded-2xl"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </div>
      </section>

      {/* Blank Text Generator — Copy and Paste Invisible Text */}
      <section className="border-t border-border bg-muted/30 py-16" id="blank-text-info-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            Blank Text Generator — Copy and Paste Invisible Text
          </h2>
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
      <section className="border-t border-border bg-background py-12" id="quick-answer-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-xl font-bold text-foreground">Quick Answer</h2>
          <p className="text-foreground/90 leading-relaxed bg-muted/10 p-6 rounded-xl border border-border shadow-sm">
            Generates an invisible Unicode character — copy and paste it anywhere. Regular spaces get trimmed by most apps; this doesn&apos;t. Works for WhatsApp messages, Instagram bios, Discord nicknames, TikTok comments, and usernames across most gaming platforms. Free, browser-based, no signup, repeat up to 10,000 times for long blank text.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-background py-16" id="features-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Features</h2>
          <ul className="space-y-3 text-foreground/90 leading-relaxed">
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Multiple invisible character variants (not just one, in case a platform rejects one type)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>One-click copy to clipboard</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Adjustable repeat count — up to 10,000 for long blank text</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Runs entirely in the browser — nothing sent to a server</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Works on desktop and mobile</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>No login, no account, no signup</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Unlimited sessions, completely free — the 10,000 cap is per generation, not per use</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to Use This Tool */}
      <section className="border-t border-border bg-muted/30 py-16" id="how-to-use-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">How to Use This Tool</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Open the generator above. A blank character is already loaded and ready — no typing required.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Pick a variant if the first one doesn&apos;t behave the way you need on a specific platform.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Set a repeat count if you want long blank text instead of a single character.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>Copy it and paste directly into the message, bio, or username field you&apos;re working with.</span>
              </li>
            </ul>
            <p className="pt-2 font-medium">
              That&apos;s the entire process — there&apos;s no account step, no download, and no waiting.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Blank Text? */}
      <section className="border-t border-border bg-background py-16" id="what-is-blank-text-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">What Is Blank Text?</h2>
          <p className="text-foreground/90 leading-relaxed">
            Blank text — also called invisible text, empty text, or a blank character — is text made of Unicode characters that carry no visible shape. A zero-width space (U+200B) is the most common one in use, though tools like this one usually include a few different invisible characters and symbols, since not every platform treats them the same way.
          </p>
        </div>
      </section>

      {/* Why It Works */}
      <section className="border-t border-border bg-muted/30 py-16" id="why-it-works-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">Why It Works</h2>
          <p className="text-foreground/90 leading-relaxed">
            A regular space bar press is visible whitespace, and most apps automatically trim it from the start or end of a message — that&apos;s why typing a few spaces and hitting send usually doesn&apos;t do anything. A zero-width space or similar invisible Unicode character is different: it&apos;s a fully valid character as far as any keyboard or app is concerned, it just doesn&apos;t have a visible glyph attached to it. That&apos;s the entire mechanism behind blank text.
          </p>
        </div>
      </section>

      {/* Blank Text vs. Regular Spaces */}
      <section className="border-t border-border bg-background py-16" id="comparison-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Blank Text vs. Regular Spaces</h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="p-4 font-semibold text-foreground"></th>
                  <th className="p-4 font-semibold text-foreground">Regular Space</th>
                  <th className="p-4 font-semibold text-foreground">Blank Character</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-medium text-foreground bg-muted/10">Gets trimmed by apps</td>
                  <td className="p-4 text-foreground/80">Usually, yes</td>
                  <td className="p-4 text-foreground/80">Usually not</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground bg-muted/10">Visible</td>
                  <td className="p-4 text-foreground/80">Yes</td>
                  <td className="p-4 text-foreground/80">No</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground bg-muted/10">Can send as an entire message</td>
                  <td className="p-4 text-foreground/80">Often blocked</td>
                  <td className="p-4 text-foreground/80">Often works</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground bg-muted/10">Character type</td>
                  <td className="p-4 text-foreground/80">ASCII</td>
                  <td className="p-4 text-foreground/80">Unicode</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Supported Apps and Platforms */}
      <section className="border-t border-border bg-muted/30 py-16" id="supported-platforms-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Supported Apps and Platforms</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              <strong>WhatsApp</strong> — blocks messages with nothing typed, so pasting an invisible character as the whole message gets around that check and shows up as an empty bubble.
            </p>
            <p>
              <strong>Instagram</strong> — used for a blank bio or blank Instagram username; Instagram occasionally strips a variant out on save, so a backup character is worth having.
            </p>
            <p>
              <strong>Discord</strong> — commonly used for an empty Discord nickname or blank channel name; generally accepted without issue.
            </p>
            <p>
              <strong>TikTok</strong> — works for blank comments and captions in most cases, similar to Instagram.
            </p>
            <p>
              <strong>Twitter/X</strong> — used for a blank bio field the same way as Instagram.
            </p>
            <p>
              <strong>Facebook and YouTube comments</strong> — invisible characters are commonly pasted into comment fields the same way.
            </p>
          </div>
        </div>
      </section>

      {/* Common Uses for Blank Text */}
      <section className="border-t border-border bg-background py-16" id="common-uses-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Common Uses for Blank Text</h2>
          <ul className="space-y-3 text-foreground/90 leading-relaxed">
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Blank or invisible Discord nickname</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Empty PUBG, Free Fire, or Fortnite username or clan tag</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Blank Roblox display name</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Empty Steam profile name</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Testing how an app or form handles empty-looking input</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Developer and QA testing for whitespace-handling bugs</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>Pranks — sending an empty-looking message that isn&apos;t actually empty</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Long Blank Text (Copy and Paste) */}
      <section className="border-t border-border bg-muted/30 py-16" id="long-blank-text-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">Long Blank Text (Copy and Paste)</h2>
          <p className="text-foreground/90 leading-relaxed">
            Repeating the same invisible character multiple times in a row creates &quot;long blank text&quot; — used to push a message further down a screen or create a bigger gap than a single character would. Set the repeat count (up to 10,000) and copy the full block at once.
          </p>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="border-t border-border bg-background py-16" id="troubleshooting-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">Troubleshooting</h2>
          <div className="space-y-6">
            <div className="bg-muted/30 p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Instagram removed my blank text after I saved it.</h3>
              <p className="text-foreground/90 leading-relaxed">
                Instagram sometimes strips specific invisible characters on save. Try a different variant from the generator.
              </p>
            </div>

            <div className="bg-muted/30 p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">Discord rejected my blank nickname.</h3>
              <p className="text-foreground/90 leading-relaxed">
                This is less common than on Instagram, but if it happens, try an alternate character.
              </p>
            </div>

            <div className="bg-muted/30 p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">WhatsApp won&apos;t send my blank message.</h3>
              <p className="text-foreground/90 leading-relaxed">
                Some WhatsApp versions catch certain characters. Try a different variant, or check that nothing else was accidentally typed alongside it.
              </p>
            </div>

            <div className="bg-muted/30 p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">The copy button didn&apos;t do anything.</h3>
              <p className="text-foreground/90 leading-relaxed">
                This is usually a browser permissions issue — some browsers block clipboard access until you interact with the page first. Try clicking elsewhere on the page, then copying again.
              </p>
            </div>

            <div className="bg-muted/30 p-5 rounded-xl border border-border">
              <h3 className="mb-2 text-lg font-semibold text-foreground">It shows as a box or odd symbol instead of being invisible.</h3>
              <p className="text-foreground/90 leading-relaxed">
                Older devices or certain apps don&apos;t render every Unicode character properly. A different variant usually resolves this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Tool */}
      <section className="border-t border-border bg-muted/30 py-16" id="why-choose-this-tool-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">Why Choose This Tool</h2>
          <p className="text-foreground/90 leading-relaxed">
            No signup, no account, and nothing is sent to a server — the character is generated and copied entirely in your browser. It&apos;s free, fast, and works the same way on both desktop and mobile.
          </p>
        </div>
      </section>

      {/* A Note on Accuracy */}
      <section className="border-t border-border bg-background py-16" id="accuracy-note-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground">A Note on Accuracy</h2>
          <p className="text-foreground/90 leading-relaxed">
            Platform behavior around invisible characters changes as apps update their input validation, so the platform notes above reflect generally observed behavior rather than a guarantee for every account, region, or app version. The zero-width space referenced throughout is a real, standardized character documented by the Unicode Consortium, not something invented by this or any other tool.
          </p>
        </div>
      </section>

      {/* Key Terms */}
      <section className="border-t border-border bg-muted/30 py-16" id="key-terms-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">Key Terms</h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p>
              <strong>Blank character</strong> — any Unicode character with no visible shape.
            </p>
            <p>
              <strong>Zero-width space (ZWSP)</strong> — U+200B, the most commonly used blank character, standardized by the Unicode Consortium.
            </p>
            <p>
              <strong>Invisible text / empty text / blank message</strong> — different names for the same thing: text built from blank characters.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 border-t border-border bg-background" id="faq-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground text-center">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30" id="related-tools-section">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/blank-text" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </article>
  )
}
