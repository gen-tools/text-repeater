"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

const pageNames: Record<string, string> = {
  "": "Home",
  "emoji-repeater": "Emoji Repeater",
  "line-repeater": "Line Repeater",
  "word-repeater": "Word Repeater",
  "blank-text": "Blank Text Generator",
  "zalgo-text": "Zalgo Text Generator",
  "fancy-text-generator": "Fancy Text Generator",
  "case-converter": "Case Converter",
  "about": "About",
  "contact": "Contact",
  "privacy": "Privacy Policy",
  "terms": "Terms of Service",
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
            className="flex items-center gap-1 hover:text-foreground"
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
                className="hover:text-foreground"
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
