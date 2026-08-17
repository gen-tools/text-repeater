import Link from "next/link"
import { Twitter, PinIcon } from "lucide-react"
import { BrandIcon } from "@/components/brand-icon"

const tools = [
  { name: "Text Repeater", href: "/" },
  { name: "Word Counter", href: "/word-counter" },
  { name: "Emoji Repeater", href: "/emoji-repeater" },
  { name: "Word Repeater", href: "/word-repeater" },
  { name: "Blank Text", href: "/blank-text" },
  { name: "Zalgo Text", href: "/zalgo-text" },
  { name: "Fancy Text Generator", href: "/fancy-text-generator" },
  { name: "Case Converter", href: "/case-converter" },
]

const pages = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
]

const socialLinks = [
  {
    name: "X (Twitter)",
    href: "https://x.com/MyTextRepeate",
    icon: Twitter,
    ariaLabel: "Follow us on X (Twitter)",
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/mytextrepeater/",
    icon: PinIcon,
    ariaLabel: "Follow us on Pinterest",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-foreground">
              <BrandIcon className="h-6 w-6" />
              <span className="text-lg font-bold text-foreground">My Text Repeater</span>
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

        <div className="mt-8 border-t border-border pt-8">
          <h3 className="mb-4 font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} My Text Repeater. All rights reserved. Developed by Sheztech.
          </p>
        </div>
      </div>
    </footer>
  )
}
