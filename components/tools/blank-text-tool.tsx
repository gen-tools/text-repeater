"use client"

import * as React from "react"
import { Copy, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"

type BlankType = "zeroWidth" | "braille" | "space" | "tab" | "newline"

const blankTypes: { value: BlankType; label: string; char: string; description: string }[] = [
  { value: "zeroWidth", label: "Zero-Width Space", char: "\u200B", description: "Invisible character (U+200B)" },
  { value: "braille", label: "Braille Blank", char: "⠀", description: "Braille pattern blank (U+2800)" },
  { value: "space", label: "Regular Space", char: " ", description: "Standard space character" },
  { value: "tab", label: "Tab", char: "\t", description: "Tab character" },
  { value: "newline", label: "Newline", char: "\n", description: "Line break character" },
]

export function BlankTextTool() {
  const [blankType, setBlankType] = React.useState<BlankType>("zeroWidth")
  const [repeatCount, setRepeatCount] = React.useState(10)
  const [output, setOutput] = React.useState("")
  const { showToast, copyToClipboard } = useCopyToast()

  React.useEffect(() => {
    const selectedType = blankTypes.find(t => t.value === blankType)
    if (selectedType) {
      setOutput(Array(repeatCount).fill(selectedType.char).join(""))
    }
  }, [blankType, repeatCount])

  const handleClear = () => {
    setOutput("")
    setRepeatCount(10)
  }

  return (
    <div className="space-y-6">
      {/* Blank Type Selection */}
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="mb-4 text-sm font-medium">Select blank text type:</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {blankTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setBlankType(type.value)}
              className={`rounded-lg border p-4 text-left transition-all ${
                blankType === type.value
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="font-medium">{type.label}</div>
              <div className="text-sm text-muted-foreground">{type.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Controls */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="repeat-count" className="block text-sm font-medium">
              Number of characters
            </label>
            <input
              id="repeat-count"
              type="number"
              min="1"
              max="10000"
              value={repeatCount}
              onChange={(e) => setRepeatCount(Math.max(1, Math.min(10000, parseInt(e.target.value) || 1)))}
              className="w-full rounded-lg border border-input bg-background px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          
          <div className="rounded-lg bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">
              Generated {output.length} invisible characters. They will appear empty but can be copied and pasted.
            </p>
          </div>
        </div>

        {/* Output */}
        <div className="space-y-4">
          <label htmlFor="output-text" className="block text-sm font-medium">
            Output preview (invisible text below)
          </label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            className="h-32 w-full resize-none rounded-xl border border-input bg-muted/50 p-4 text-base focus:outline-none"
            aria-label="Blank text output"
          />
          <div className="text-sm text-muted-foreground">
            {output.length} characters (invisible)
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => copyToClipboard(output)}
          disabled={!output}
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy Blank Text
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

      {/* Mobile Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background p-4 sm:hidden">
        <Button
          onClick={() => copyToClipboard(output)}
          disabled={!output}
          className="w-full rounded-xl"
          size="lg"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy Blank Text
        </Button>
      </div>

      <CopyToast show={showToast} />
    </div>
  )
}
