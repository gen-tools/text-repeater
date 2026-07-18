import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedTools } from "@/components/related-tools"

export const metadata: Metadata = {
  title: "About TextRepeater - Free Online Text Tools",
  description: "Learn about TextRepeater, your free online destination for text manipulation tools. Repeat text, convert cases, generate fancy fonts, and more.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              About TextRepeater
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Your free destination for powerful text manipulation tools
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                TextRepeater was created with a simple mission: to provide free, fast, and easy-to-use 
                text manipulation tools for everyone. Whether you need to repeat text, convert cases, 
                generate fancy fonts, or create unique text effects, we have got you covered.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Why Choose Us?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-foreground">100% Free:</strong> All our tools are completely free with no hidden costs or premium tiers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-foreground">No Registration:</strong> Use all features without creating an account or signing up.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-foreground">Privacy First:</strong> All processing happens in your browser. Your text never leaves your device.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-foreground">Fast & Lightweight:</strong> Optimized for speed with instant results and minimal loading times.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span><strong className="text-foreground">Mobile Friendly:</strong> Works perfectly on all devices - desktop, tablet, and mobile.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Our Tools</h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                We offer a comprehensive suite of text manipulation tools:
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "Text Repeater",
                  "Emoji Repeater",
                  "Line Repeater",
                  "Word Repeater",
                  "Blank Text Generator",
                  "Zalgo Text Generator",
                  "Fancy Text Generator",
                  "Case Converter",
                ].map((tool) => (
                  <li key={tool} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Technology</h2>
              <p className="text-muted-foreground leading-relaxed">
                TextRepeater is built with modern web technologies including Next.js, React, and 
                Tailwind CSS. We prioritize performance, accessibility, and user experience in 
                everything we build. Our tools are designed to work offline once loaded and 
                provide instant feedback without server round-trips.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                Have questions, suggestions, or feedback? We would love to hear from you. Visit our 
                contact page to get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/about" />
        </div>
      </section>
    </>
  )
}
