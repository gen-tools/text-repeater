import { Metadata } from "next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link";
import { EmojiRepeaterTool } from "@/components/tools/emoji-repeater-tool"
import heroImage from "@/src/assets/images/emoji_repeater_hero_1784377315127.jpg"
const FAQAccordion = dynamic(() => import("@/components/faq-accordion").then(mod => mod.FAQAccordion), { ssr: true })
const RelatedTools = dynamic(() => import("@/components/related-tools").then(mod => mod.RelatedTools), { ssr: true })
import { Breadcrumbs } from "@/components/breadcrumbs"

const PAGE_TITLE = "Emoji Repeater Online | Repeat Emojis Up to 10,000 Times"
const PAGE_DESCRIPTION = "Repeat any emojis up to 10,000 times with our emoji repeater online. Choose custom separators, copy, download, or share your repeated emojis instantly."
const PAGE_URL = "https://mytextrepeater.com/emoji-repeater"

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
    question: "What exactly does an emoji repeater do?",
    answer: "It takes the emoji you enter and repeats it a set number of times, with whatever separator you choose in between.",
  },
  {
    question: "What's the maximum number of times I can repeat an emoji?",
    answer: "10,000 repetitions in one output.",
  },
  {
    question: "Can I set it to repeat an emoji exactly 100 times?",
    answer: "Yes — enter 100 in the count field; any number up to the max works, not just round ones.",
  },
  {
    question: "Will flag or skin-tone emojis repeat correctly, or will they break apart?",
    answer: "They stay intact, since the tool treats them as single combined units rather than splitting the underlying characters.",
  },
  {
    question: "Do I need to download anything to use it?",
    answer: "No, it's browser-based and works on desktop or mobile without installing an app.",
  },
  {
    question: "Is anything I type sent to a server?",
    answer: "No. The repeat process runs locally in your browser, not on a remote server.",
  },
  {
    question: "Is this good for a long WhatsApp message for someone's birthday?",
    answer: "Yes, that's a common use — repeating a cake or confetti emoji next to a birthday quote is an easy way to make a short message feel bigger.",
  },
  {
    question: "Why does my emoji look different once my friend receives it?",
    answer: "That comes down to their phone's operating system and emoji font, which is separate from how the tool generates the repeated text.",
  },
]

export default function EmojiRepeaterPage() {
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Emoji Repeater Online",
    description: "Free online emoji repeater tool to repeat emojis up to 10,000 times with custom separators, one-click copy, and download options.",
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
      "Repeat single or combined emojis up to 10,000 times",
      "Full support for complex Unicode emojis, skin tones, and flag sequences",
      "Custom separators including space, line break, and custom symbols",
      "One-click copy to clipboard",
      "Download output as TXT file",
      "100% private in-browser generation",
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
    <article className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              Emoji Repeater
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
              {"There's something satisfying about sending 200 heart emojis and nothing else — just scroll. That's what this emoji repeater is for: hearts, stars, fire, reactions, or any combo you like. Copy it, download it, and drop it into WhatsApp, captions, comments, or your status."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <EmojiRepeaterTool />
        </div>
      </section>

      {/* Featured Illustration Section */}
      <section className="py-8 bg-muted/10 border-t border-border cv-auto">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="relative mx-auto w-full max-w-2xl aspect-[1376/768] overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={heroImage}
              alt="Emoji Repeater Online"
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
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">Features</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Repeats a single emoji or a short emoji combination up to 10,000 times in one output</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Separator control — space, line break, no separator, or any custom character you type in</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Copy to Clipboard button for instant pasting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Download TXT option, useful when the output is too long to comfortably paste by hand</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Share button to send the result without switching apps</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>A running character count on the output box</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>A quick-pick row of common emojis (❤️, 😂, 🔥, 👍, ✨, and a handful more) so you don't need your device's emoji keyboard open</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Processes everything on your device — no server ever sees what you type</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span>Recognizes the full current Unicode emoji range, including skin-tone variants and joined sequences like flags</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">How it compares to copying and pasting by hand:</h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-muted/50 font-semibold text-foreground">
                <tr>
                  <th className="p-4">Task</th>
                  <th className="p-4">This Tool</th>
                  <th className="p-4">Manual Copy-Paste</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="p-4 font-medium text-foreground">Repeating an emoji 100 times</td>
                  <td className="p-4">A few seconds</td>
                  <td className="p-4">A few minutes, minimum</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Getting the exact count right</td>
                  <td className="p-4">Guaranteed</td>
                  <td className="p-4">Easy to lose track past 15-20</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Multi-part emoji (skin tones, flags, joined sequences)</td>
                  <td className="p-4">Stay intact</td>
                  <td className="p-4">Often break apart when repeated manually</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Adding consistent spacing</td>
                  <td className="p-4">One field, applied automatically</td>
                  <td className="p-4">Manual insertion between every single copy</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-foreground">Very high repeat counts (500+)</td>
                  <td className="p-4">Practical</td>
                  <td className="p-4">Not realistic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">How to Use</h2>
          <ol className="space-y-4 text-muted-foreground list-decimal list-inside">
            <li className="pl-1">Paste or type your emoji into the input field, or tap one from the quick-pick options above it.</li>
            <li className="pl-1">Pick a separator — leave the field empty for none, or add a space, line break, dash, or anything else.</li>
            <li className="pl-1">Enter how many times you want it repeated. Anything up to 10,000 is fine.</li>
            <li className="pl-1">Watch the output preview and character counter update as you adjust the settings.</li>
            <li className="pl-1">Copy, download, or share the finished text using whichever button fits what you're doing next.</li>
            <li className="pl-1">Press Clear if you want to start again from scratch.</li>
          </ol>
        </div>
      </section>

      {/* What Is an Emoji Repeater? */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">What Is an Emoji Repeater?</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            {"An emoji repeater is a small web tool built to duplicate an emoji, or a short string of them, a specific number of times without you copying and pasting by hand. It's the difference between tapping paste forty times and typing \"40\" into a box once."}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {"Some emoji look like a single character but are actually built from several Unicode code points fused together — a base emoji plus a skin tone modifier, or several emoji linked with a zero-width joiner to form a flag or family sequence. A well-built emoji repeater treats each of these as one unit, called a grapheme cluster, rather than splitting the raw characters apart."}
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">How It Works</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            {"If a repeat tool loops over raw characters instead of full clusters, it can cut a joined emoji in half and produce broken output — half an emoji followed by a stray modifier symbol. This tool works with clusters as complete units, so a joined or modified emoji comes out the same every time it repeats."}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {"The whole process — reading your input, applying the separator, building the output — happens in JavaScript running locally in your browser. That's why there's no upload step and no lag waiting on a server response."}
          </p>
        </div>
      </section>

      {/* Supported Apps and Platforms */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">Supported Apps and Platforms</h2>
          <p className="mb-4 text-muted-foreground">
            {"Since the output is just standard Unicode text, it works anywhere text can be pasted:"}
          </p>
          <ul className="mb-6 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">WhatsApp</strong> — for long birthday floods, status updates, and group chat spam</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Instagram</strong> — bios, captions, comment threads</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">TikTok</strong> — comment sections and caption dividers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Discord</strong> — chat messages and text-based reactions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Telegram</strong> — group chats and channels</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">X (Twitter)</strong> — posts and replies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Facebook</strong> — comments, posts, Messenger</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">Snapchat</strong> — captions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><strong className="text-foreground">iMessage / SMS</strong> — regular text messaging on any phone</span>
            </li>
          </ul>
          <p className="text-muted-foreground text-sm italic">
            {"How the emoji actually looks once pasted depends on the recipient's device and installed font set — that's outside this tool's control, and it's covered further down."}
          </p>
        </div>
      </section>

      {/* Common Uses */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">Common Uses</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
             Long WhatsApp birthday messages. Pairing a repeated 🎂 or 🎉 string with a
             birthday quote is one of the more common reasons people reach for this. It
             turns a short "happy birthday" text into something that fills the whole chat
             screen. If the message itself needs repeating too, not just the emoji, a{" "}
           <Link href="/" className="text-primary hover:underline">
        text repeater
       </Link>{" "}
        handles that half of the job.
     </p>
            <p className="leading-relaxed">
              {"Reacting in Discord or livestream chat. One 🔥 is polite. Twenty in a row makes it obvious you actually meant it. Same logic drives repeated laughing emoji on TikTok comments or hearts in a Telegram group."}
            </p>
            <p className="leading-relaxed">
              {"Instagram and TikTok caption formatting. A row of sparkles or stars used as a line divider in a caption or bio gives it a designed look without touching an image editor."}
            </p>
            <p className="leading-relaxed">
              {"Testing input fields and character limits. Developers sometimes use bulk emoji strings to check how a chat box, database field, or character counter handles emoji-heavy text, since emoji sequences can take up more storage space than they appear to on screen."}
            </p>
            <p className="leading-relaxed">
              {"Mocking up chat interfaces. Designers use repeated emoji to fill placeholder message bubbles with realistic-looking content while building a UI."}
            </p>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="border-t border-border py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">Troubleshooting</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              {"The emoji turns into a box or question mark when I paste it. That's almost always the receiving device or app not supporting that particular emoji yet — a font/OS limitation, not something generated by this tool."}
            </p>
            <p className="leading-relaxed">
              {"I can't tell if my separator is actually being applied. Try a visible character like a dash first to confirm the field is working, then swap it for the space or line break you actually wanted."}
            </p>
            <p className="leading-relaxed">
              {"Pasting a huge repeat count feels sluggish. Several thousand repeats produce a genuinely long string, and some apps handle very long pastes slower than others — dropping to a smaller count usually solves it."}
            </p>
            <p className="leading-relaxed">
              {"A joined emoji (like a flag or family emoji) looks split apart after I paste it. This is generally a rendering issue on the app you pasted into, not something that happens during the repeat step itself."}
            </p>
          </div>
        </div>
      </section>

      {/* Accuracy and Limitations */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold">Accuracy and Limitations</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            {"This tool controls how the emoji is repeated and separated; it has no control over how that emoji renders once it lands on someone else's screen. Emoji design differs across operating systems, apps, and font versions — Emojipedia is a reasonable reference for how a given emoji looks across platforms, and the Unicode Consortium documents the technical standard behind emoji code points and sequences."}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {"The 10,000-repeat maximum and separator behavior described here reflect the tool as it currently runs. No performance benchmarks or load-testing figures are being claimed."}
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-border py-16">
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
    </article>
  )
}

