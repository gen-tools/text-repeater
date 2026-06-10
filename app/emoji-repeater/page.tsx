import { Metadata } from "next"
import { EmojiRepeaterTool } from "@/components/tools/emoji-repeater-tool"
import { FAQAccordion } from "@/components/faq-accordion"
import { RelatedTools } from "@/components/related-tools"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Emoji Repeater Online - Free, Instant, No App Needed",
  description: "Free emoji repeater tool. Repeat any emoji as many times as you want. Pick the count, separator, and copy to clipboard instantly. No signup required.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/emoji-repeater",
  },
  openGraph: {
    title: "Emoji Repeater Online - Free, Instant, No App Needed",
    description: "Repeat any emoji as many times as you want. Pick the count, separator, and copy to clipboard instantly.",
    url: "https://text-repeater0.vercel.app/emoji-repeater",
  },
}

const faqs = [
  {
    question: "What is an emoji repeater?",
    answer: "An emoji repeater is a tool that duplicates emojis multiple times with a single click. Instead of manually copying and pasting emojis, you can instantly generate repeated emojis for social media posts, comments, messages, or any other purpose.",
  },
  {
    question: "How do I repeat emojis?",
    answer: "Type or paste your emoji into the input box. Choose your separator (space, new line, nothing, or custom). Set your count (10, 50, 100, 1000 — whatever you need). Hit generate, copy, and paste it wherever you're sending it.",
  },
  {
    question: "Can I add separators between emojis?",
    answer: "Yes! You can add any separator between repeated emojis — a space, a new line, nothing at all, or something custom like a dash or a dot. Just enter your desired separator in the separator field.",
  },
  {
    question: "Does this work with all emojis?",
    answer: "Yes, our emoji repeater works with every emoji in the current Unicode set. Combinations, skin tone variants, flag emojis, the weird niche ones nobody uses but everyone occasionally needs — if it renders on your keyboard, this tool can repeat it.",
  },
  {
    question: "Is my data private?",
    answer: "Everything runs in your browser, which means your input never touches a server. Nobody's reading what you type. Nobody's storing it. It just lives in your tab, does its job, and disappears when you close the window.",
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
              Emoji Repeater Online
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground text-pretty">
              {"There's a specific kind of satisfaction in sending someone a message that's just 200 heart emojis. No words. No explanation. Just stretching down their screen until they have to scroll. That's what this tool is for."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <EmojiRepeaterTool />
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold">How It Works</h2>
            <p className="mb-6 text-muted-foreground">
              {"You don't need a tutorial for this, but here's the short version."}
            </p>
            <p className="mb-6 text-muted-foreground">
              {"Type or paste your emoji into the input box. It can be one emoji, two, a whole combination — whatever you want repeated. Then choose your separator. That's the bit that goes between each repetition: a space, a new line, nothing at all, or something custom like a dash or a dot. Then set your count. Ten, fifty, a hundred, a thousand — type in the number and the tool handles the rest. Hit generate, copy, and paste it wherever you're sending it."}
            </p>
            <p className="text-muted-foreground">
              {"That's it. No account to create. No app to download. No permissions to grant. Open the page, do the thing, close the tab."}
            </p>
          </div>
        </div>
      </section>

      {/* What People Actually Send With It */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold">What People Actually Send With It</h2>
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold">The birthday flood</h3>
                <p className="text-muted-foreground">
                  {"Someone turns 25 and their WhatsApp chat gets buried under a flood of cake emojis from the group. It's chaotic, it's warm, and it's the kind of thing people screenshot. This tool makes building that flood take about eight seconds instead of eight minutes of tapping."}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold">The reaction that says more than words</h3>
                <p className="text-muted-foreground">
                  {"You're in a Discord server and someone posts something genuinely incredible. One fire emoji feels dismissive. Fifty in a row makes the point. Same logic applies to laughing emojis on TikTok comment sections, hearts in Telegram groups, or 100s anywhere someone needs to hear they nailed it."}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold">Instagram and TikTok decoration</h3>
                <p className="text-muted-foreground">
                  {"The sparkle-flower divider between two lines of a caption. The row of stars in a bio that breaks up the text. The aesthetic emoji border that takes a plain post and makes it feel finished. These patterns look like they took thought and effort. With this tool, they take about thirty seconds."}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold">The affectionate overload</h3>
                <p className="text-muted-foreground">
                  {"Some people express love with words. Some people express it by sending hearts repeated 300 times on a Tuesday afternoon for no particular reason. If you're in that second category, this tool was made for you."}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 font-semibold">Testing and design work</h3>
                <p className="text-muted-foreground">
                  {"Developers use it to fill message input fields and test character limits. Designers use it to mock up chat UI with realistic-looking emoji content. It's a small use case but a genuinely useful one."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This One */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold">Why This One Instead of the Others</h2>
            <p className="mb-6 text-muted-foreground">
              {"There are a handful of emoji repeater tools floating around. Most of them are either buried in ads, weirdly complicated for something so simple, or they cap your usage and ask you to sign up for more. This one doesn't do any of that."}
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">1</span>
                <span><strong className="text-foreground">Clean interface</strong> — {"The interface is clean because that's what the job requires. You're not here to read a wall of text about features — you're here to repeat an emoji and go."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">2</span>
                <span><strong className="text-foreground">Privacy first</strong> — {"Everything runs in your browser, which means your input never touches a server. Nobody's reading what you type. Nobody's storing it."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">3</span>
                <span><strong className="text-foreground">Works everywhere</strong> — {"It works on every device because it's just a webpage. iPhone, Android, tablet, laptop — the same tool, the same experience, no app store required."}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">4</span>
                <span><strong className="text-foreground">Full emoji support</strong> — {"Every emoji in the current Unicode set. Combinations, skin tone variants, flag emojis, the weird niche ones — if it renders on your keyboard, this tool can repeat it."}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Combinations Worth Trying */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold">A Few Combinations Worth Trying</h2>
            <p className="mb-6 text-muted-foreground">
              {"If you're not sure where to start, here are some that tend to land well:"}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="mb-2 text-2xl">{"😂 × 50"}</div>
                <p className="text-sm text-muted-foreground">{"With spaces — the classic \"I cannot stop laughing\" reaction"}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="mb-2 text-2xl">{"❤️ × 100"}</div>
                <p className="text-sm text-muted-foreground">{"With new lines — fills the screen and feels like effort"}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="mb-2 text-2xl">{"🔥 × 20"}</div>
                <p className="text-sm text-muted-foreground">{"No separator — compact, intense, works as a caption opener"}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4">
                <div className="mb-2 text-2xl">{"✨🌸 × 15"}</div>
                <p className="text-sm text-muted-foreground">{"Aesthetic combo for Instagram bios and TikTok captions"}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-4 sm:col-span-2">
                <div className="mb-2 text-2xl">{"🎉🥳🎊"}</div>
                <p className="text-sm text-muted-foreground">{"Repeated in sequence — a celebration chain that actually looks festive"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/emoji-repeater" />
        </div>
      </section>

      <div className="h-20 sm:hidden" />
    </>
  )
}
