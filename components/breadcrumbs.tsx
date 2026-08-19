"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

const pageNames: Record<string, string> = {
  "": "Home",
  "word-counter": "Word Counter",
  "emoji-repeater": "Emoji Repeater",
  "line-repeater": "Line Repeater",
  "word-repeater": "Word Repeater",
  "blank-text": "Blank Text Generator",
  "zalgo-text": "Zalgo Text Generator",
  "fancy-text-generator": "Fancy Text Generator",
  "case-converter": "Case Converter",
  "about": "About",
  "blog": "Blog",
  "contact": "Contact",
  "privacy": "Privacy Policy",
  "terms": "Terms of Service",
  "repeat-text-on-whatsapp": "Repeat Text on WhatsApp",
  "repeat-text-1000-times": "Repeat Text 1,000 Times",
  "how-to-repeat-a-word-or-sentence-multiple-times-online": "How to Repeat a Word or Sentence Multiple Times Online",
  "repeat-text-on-new-lines": "How to Repeat Text on New Lines Online",
  "repeat-text-for-testing-and-qa": "How to Repeat Text for Testing and QA",
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  if (pathname === "/") return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemScope
          itemProp="itemListElement"
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="flex items-center gap-1 transition-colors hover:text-primary"
          >
            <Home className="h-4 w-4" />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {segments.map((segment, index) => (
          <li
            key={segment}
            className="flex items-center gap-1"
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <ChevronRight className="h-4 w-4" />
            {index === segments.length - 1 ? (
              <span itemProp="name" className="font-medium text-foreground">
                {pageNames[segment] || segment}
              </span>
            ) : (
              <Link
                href={`/${segments.slice(0, index + 1).join("/")}`}
                itemProp="item"
                className="transition-colors hover:text-primary"
              >
                <span itemProp="name">{pageNames[segment] || segment}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
