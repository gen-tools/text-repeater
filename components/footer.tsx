import Link from "next/link"
import { Type } from "lucide-react"

const tools = [
  { name: "Text Repeater", href: "/" },
  { name: "Emoji Repeater", href: "/emoji-repeater" },
  { name: "Word Repeater", href: "/word-repeater" },
  { name: "Blank Text", href: "/blank-text" },
  { name: "Zalgo Text", href: "/zalgo-text" },
  { name: "Fancy Text Generator", href: "/fancy-text-generator" },
  { name: "Case Converter", href: "/case-converter" },
]

const pages = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Type className="h-6 w-6" />
              <span>TextRepeater</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Free online text manipulation tools. Repeat, transform, and generate text instantly.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Text Tools</h3>
            <ul className="space-y-2">
              {tools.slice(0, 4).map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">More Tools</h3>
            <ul className="space-y-2">
              {tools.slice(4).map((tool) => (
                <li key={tool.href}>
                  <Link
                    href={tool.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TextRepeater. All rights reserved. Developed by Sheztech.
          </p>
        </div>
      </div>
    </footer>
  )
}
