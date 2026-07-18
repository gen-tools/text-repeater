"use client"

import * as React from "react"
import { Copy, Download, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"

export function WordRepeaterTool() {
  const [inputText, setInputText] = React.useState("")
  const [repeatCount, setRepeatCount] = React.useState(3)
  const [wordSeparator, setWordSeparator] = React.useState(" ")
  const [output, setOutput] = React.useState("")
  const { showToast, copyToClipboard } = useCopyToast()

  const deferredInputText = React.useDeferredValue(inputText)
  const deferredRepeatCount = React.useDeferredValue(repeatCount)
  const deferredWordSeparator = React.useDeferredValue(wordSeparator)

  React.useEffect(() => {
    if (!deferredInputText.trim()) {
      setOutput("")
      return
    }
    
    const words = deferredInputText.trim().split(/\s+/)
    const repeatedWords = words.map(word => 
      Array(deferredRepeatCount).fill(word).join(deferredWordSeparator)
    )
    
    setOutput(repeatedWords.join(" "))
  }, [deferredInputText, deferredRepeatCount, deferredWordSeparator])

  const handleClear = React.useCallback(() => {
    setInputText("")
    setOutput("")
  }, [])

  const handleDownload = React.useCallback(() => {
    if (!output) return
    const blob = new Blob([output], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "repeated-words.txt"
    a.click()
    URL.revokeObjectURL(url)
  }, [output])

  const outputRef = React.useRef(output)
  React.useEffect(() => {
    outputRef.current = output
  }, [output])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        const currentOutput = outputRef.current
        if (currentOutput) {
          copyToClipboard(currentOutput)
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [copyToClipboard])

  const wordCount = React.useMemo(() => {
    return inputText.trim() ? inputText.trim().split(/\s+/).length : 0
  }, [inputText])

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
            placeholder="Enter text with words to repeat..."
            autoFocus
            className="h-48 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <div className="text-sm text-muted-foreground">
            {wordCount} words
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
            placeholder="Your repeated words will appear here..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-muted/50 p-4 text-base focus:outline-none"
          />
          <div className="text-sm text-muted-foreground">
            {output.trim() ? output.trim().split(/\s+/).length : 0} words total
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <label htmlFor="repeat-count" className="block text-sm font-medium">
              Repeat each word
            </label>
            <input
              id="repeat-count"
              type="number"
              min="1"
              max="100"
              value={repeatCount}
              onChange={(e) => setRepeatCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
              className="w-full rounded-lg border border-input bg-background px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="word-separator" className="block text-sm font-medium">
              Word separator
            </label>
            <input
              id="word-separator"
              type="text"
              value={wordSeparator}
              onChange={(e) => setWordSeparator(e.target.value)}
              placeholder="Space, dash, etc."
              className="w-full rounded-lg border border-input bg-background px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
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
