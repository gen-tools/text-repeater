"use client"

import * as React from "react"
import { Copy, Download, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"

export function LineRepeaterTool() {
  const [inputText, setInputText] = React.useState("")
  const [repeatCount, setRepeatCount] = React.useState(5)
  const [addLineNumbers, setAddLineNumbers] = React.useState(false)
  const [output, setOutput] = React.useState("")
  const { showToast, copyToClipboard } = useCopyToast()

  React.useEffect(() => {
    if (!inputText) {
      setOutput("")
      return
    }
    
    const lines = inputText.split("\n")
    const repeatedLines = lines.flatMap(line => {
      const repeated = Array(repeatCount).fill(line)
      if (addLineNumbers) {
        return repeated.map((l, i) => `${i + 1}. ${l}`)
      }
      return repeated
    })
    
    setOutput(repeatedLines.join("\n"))
  }, [inputText, repeatCount, addLineNumbers])

  const handleClear = () => {
    setInputText("")
    setOutput("")
  }

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "repeated-lines.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <label htmlFor="input-text" className="block text-sm font-medium">
            Enter your lines (one per line)
          </label>
          <textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter each line of text...&#10;Each line will be repeated."
            className="h-48 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="text-sm text-muted-foreground">
            {inputText.split("\n").filter(l => l.trim()).length} lines
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="output-text" className="block text-sm font-medium">
            Output preview
          </label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Your repeated lines will appear here..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-muted/50 p-4 text-base focus:outline-none"
          />
          <div className="text-sm text-muted-foreground">
            {output.split("\n").length} lines total
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <label htmlFor="repeat-count" className="block text-sm font-medium">
              Repeat each line
            </label>
            <input
              id="repeat-count"
              type="number"
              min="1"
              max="1000"
              value={repeatCount}
              onChange={(e) => setRepeatCount(Math.max(1, Math.min(1000, parseInt(e.target.value) || 1)))}
              className="w-full rounded-lg border border-input bg-background px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex items-end">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={addLineNumbers}
                onChange={(e) => setAddLineNumbers(e.target.checked)}
                className="h-4 w-4 rounded border-input"
              />
              <span className="text-sm font-medium">Add line numbers</span>
            </label>
          </div>

          <div className="flex items-end">
            <Button
              onClick={handleClear}
              variant="outline"
              className="w-full rounded-lg"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
          </div>
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
          onClick={handleDownload}
          disabled={!output}
          variant="outline"
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <Download className="mr-2 h-4 w-4" />
          Download TXT
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
