"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { BrandIcon } from "@/components/brand-icon"
import { cn } from "@/lib/utils"

const tools = [
  { name: "Text Repeater", href: "/" },
  { name: "Nanana Translator", href: "/nanana-translator" },
  { name: "Word Counter", href: "/word-counter" },
  { name: "Emoji Repeater", href: "/emoji-repeater" },
  { name: "Word Repeater", href: "/word-repeater" },
  { name: "Blank Text", href: "/blank-text" },
  { name: "Zalgo Text", href: "/zalgo-text" },
  { name: "Fancy Text", href: "/fancy-text-generator" },
  { name: "Case Converter", href: "/case-converter" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const pathname = usePathname()
  const { theme, resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const current = resolvedTheme || theme
    setTheme(current === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-foreground hover:opacity-90 transition-opacity shrink-0">
            <BrandIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            <span className="text-base sm:text-lg tracking-tight font-extrabold text-foreground">My Text Repeater</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {tools.slice(0, 4).map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === tool.href
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {tool.name}
              </Link>
            ))}
            <div className="group relative">
              <button className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50">
                More Tools
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-border bg-background p-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {tools.slice(4).map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm transition-colors",
                      pathname === tool.href
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/blog"
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/blog")
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {mounted ? (
                (resolvedTheme || theme) === "dark" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    pathname === tool.href
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {tool.name}
                </Link>
              ))}
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname.startsWith("/blog")
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
