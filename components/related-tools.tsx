import Link from "next/link"
import { ArrowRight, Type, Smile, AlignLeft, FileText, Sparkles, Hash, CaseSensitive } from "lucide-react"
import { cn } from "@/lib/utils"

const allTools = [
  {
    name: "Text Repeater",
    href: "/",
    description: "Repeat any text multiple times instantly",
    icon: Type,
  },
  {
    name: "Emoji Repeater",
    href: "/emoji-repeater",
    description: "Multiply emojis for social media and messaging",
    icon: Smile,
  },
  {
    name: "Line Repeater",
    href: "/line-repeater",
    description: "Duplicate lines of text with ease",
    icon: AlignLeft,
  },
  {
    name: "Word Repeater",
    href: "/word-repeater",
    description: "Repeat individual words as needed",
    icon: FileText,
  },
  {
    name: "Blank Text Generator",
    href: "/blank-text",
    description: "Generate invisible characters and empty text",
    icon: Hash,
  },
  {
    name: "Zalgo Text Generator",
    href: "/zalgo-text",
    description: "Create creepy glitch text effects",
    icon: Sparkles,
  },
  {
    name: "Fancy Text Generator",
    href: "/fancy-text-generator",
    description: "Transform text into stylish fonts",
    icon: Sparkles,
  },
  {
    name: "Case Converter",
    href: "/case-converter",
    description: "Convert text between different cases",
    icon: CaseSensitive,
  },
]

interface RelatedToolsProps {
  currentPath: string
  className?: string
}

export function RelatedTools({ currentPath, className }: RelatedToolsProps) {
  const relatedTools = allTools.filter((tool) => tool.href !== currentPath).slice(0, 4)

  return (
    <section className={cn("py-12", className)}>
      <h2 className="mb-8 text-2xl font-bold text-center">Related Tools</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {relatedTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
          >
            <tool.icon className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold group-hover:text-primary transition-colors">
              {tool.name}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">{tool.description}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              Try it <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
