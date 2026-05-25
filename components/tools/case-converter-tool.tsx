"use client"

import * as React from "react"
import { Copy, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"

type CaseType = "upper" | "lower" | "title" | "sentence" | "toggle" | "camel" | "pascal" | "snake" | "kebab" | "constant"

const caseOptions: { value: CaseType; label: string; description: string }[] = [
  { value: "upper", label: "UPPERCASE", description: "ALL CAPS" },
  { value: "lower", label: "lowercase", description: "all lower" },
  { value: "title", label: "Title Case", description: "Capitalize Each Word" },
  { value: "sentence", label: "Sentence case", description: "First letter capitalized" },
  { value: "toggle", label: "tOGGLE cASE", description: "Invert case" },
  { value: "camel", label: "camelCase", description: "For programming" },
  { value: "pascal", label: "PascalCase", description: "For classes" },
  { value: "snake", label: "snake_case", description: "Underscores" },
  { value: "kebab", label: "kebab-case", description: "Hyphens" },
  { value: "constant", label: "CONSTANT_CASE", description: "For constants" },
]

const convertCase = (text: string, caseType: CaseType): string => {
  switch (caseType) {
    case "upper":
      return text.toUpperCase()
    case "lower":
      return text.toLowerCase()
    case "title":
      return text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
    case "sentence":
      return text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase())
    case "toggle":
      return text.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join("")
    case "camel":
      return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    case "pascal":
      return text.toLowerCase().replace(/(?:^|[^a-zA-Z0-9]+)(.)/g, (_, c) => c.toUpperCase())
    case "snake":
      return text.toLowerCase().replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_]/g, "")
    case "kebab":
      return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "")
    case "constant":
      return text.toUpperCase().replace(/\s+/g, "_").replace(/[^A-Z0-9_]/g, "")
    default:
      return text
  }
}

export function CaseConverterTool() {
  const [inputText, setInputText] = React.useState("")
  const [selectedCase, setSelectedCase] = React.useState<CaseType>("upper")
  const [output, setOutput] = React.useState("")
  const { showToast, copyToClipboard } = useCopyToast()

  React.useEffect(() => {
    if (!inputText) {
      setOutput("")
      return
    }
    setOutput(convertCase(inputText, selectedCase))
  }, [inputText, selectedCase])

  const handleClear = () => {
    setInputText("")
    setOutput("")
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <label htmlFor="input-text" className="block text-sm font-medium">
            Enter your text
          </label>
          <textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste text to convert..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="output-text" className="block text-sm font-medium">
            Converted output
          </label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Your converted text will appear here..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-muted/50 p-4 text-base focus:outline-none"
          />
        </div>
      </div>

      {/* Case Options Grid */}
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="mb-4 text-sm font-medium">Select case type:</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {caseOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedCase(option.value)}
              className={`rounded-lg border p-3 text-left transition-all ${
                selectedCase === option.value
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="font-medium text-sm">{option.label}</div>
              <div className="text-xs text-muted-foreground">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => copyToClipboard(output)}
          disabled={!output}
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy to Clipboard
        </Button>
        <Button
          onClick={handleClear}
          variant="outline"
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background p-4 sm:hidden">
        <Button
          onClick={() => copyToClipboard(output)}
          disabled={!output}
          className="w-full rounded-xl"
          size="lg"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy to Clipboard
        </Button>
      </div>

      <CopyToast show={showToast} />
    </div>
  )
}
