"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div
      className={cn("space-y-2", className)}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-border bg-card"
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-accent/50 transition-colors rounded-lg"
            aria-expanded={openIndex === index}
          >
            <span itemProp="name">{item.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-muted-foreground transition-transform",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p
              itemProp="text"
              className="px-4 pb-4 text-muted-foreground leading-relaxed"
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
