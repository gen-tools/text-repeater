"use client"

import * as React from "react"
import { Copy, Download, Trash2, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"

type RepeatMode = "characters" | "words" | "lines" | "paragraphs"

export function TextRepeaterTool() {
  const [inputText, setInputText] = React.useState("")
  const [repeatCount, setRepeatCount] = React.useState(5)
  const [repeatMode, setRepeatMode] = React.useState<RepeatMode>("characters")
  const [separator, setSeparator] = React.useState("")
  const [output, setOutput] = React.useState("")
  const { showToast, copyToClipboard } = useCopyToast()

  const deferredInputText = React.useDeferredValue(inputText)
  const deferredRepeatCount = React.useDeferredValue(repeatCount)
  const deferredSeparator = React.useDeferredValue(separator)

  const charCount = inputText.length
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0

  React.useEffect(() => {
    if (!deferredInputText) {
      setOutput("")
      return
    }

    const sep = deferredSeparator || (repeatMode === "paragraphs" ? "\n\n" : repeatMode === "lines" ? "\n" : "")
    let result = ""

    switch (repeatMode) {
      case "characters":
        result = Array(deferredRepeatCount).fill(deferredInputText).join(sep)
        break
      case "words":
        const words = deferredInputText.trim().split(/\s+/)
        result = words.map(word => Array(deferredRepeatCount).fill(word).join(sep)).join(" ")
        break
      case "lines":
        const lines = deferredInputText.split("\n")
        result = lines.map(line => Array(deferredRepeatCount).fill(line).join(sep)).join("\n")
        break
      case "paragraphs":
        result = Array(deferredRepeatCount).fill(deferredInputText).join(sep)
        break
    }

    setOutput(result)
  }, [deferredInputText, deferredRepeatCount, repeatMode, deferredSeparator])

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
    a.download = "repeated-text.txt"
    a.click()
    URL.revokeObjectURL(url)
  }, [output])

  const handleShare = React.useCallback(async () => {
    if (!output) return
    if (navigator.share) {
      try {
        await navigator.share({ text: output })
      } catch {
        copyToClipboard(output)
      }
    } else {
      copyToClipboard(output)
    }
  }, [output, copyToClipboard])

  const outputRef = React.useRef(output)
  React.useEffect(() => {
    outputRef.current = output
  }, [output])

  // Keyboard shortcuts - stabilized event listener to prevent main thread layout thrashing on every keystroke
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

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-4">
          <label htmlFor="input-text" className="block text-sm font-medium">
            Enter your text
          </label>
          <textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            aria-describedby="char-word-count"
          />
          <div id="char-word-count" className="flex gap-4 text-sm text-muted-foreground">
            <span>{charCount} characters</span>
            <span>{wordCount} words</span>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <label htmlFor="output-text" className="block text-sm font-medium">
            Output preview
          </label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Your repeated text will appear here..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-muted/50 p-4 text-base focus:outline-none"
            aria-live="polite"
          />
          <div className="text-sm text-muted-foreground">
            {output.length} characters
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <label htmlFor="repeat-count" className="block text-sm font-medium">
              Repeat count
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

          <div className="space-y-2">
            <label htmlFor="repeat-mode" className="block text-sm font-medium">
              Repeat by
            </label>
            <select
              id="repeat-mode"
              value={repeatMode}
              onChange={(e) => setRepeatMode(e.target.value as RepeatMode)}
              className="w-full rounded-lg border border-input bg-background px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="characters">Entire text</option>
              <option value="words">Each word</option>
              <option value="lines">Each line</option>
              <option value="paragraphs">Paragraphs</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="separator" className="block text-sm font-medium">
              Custom separator
            </label>
            <input
              id="separator"
              type="text"
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              placeholder="e.g., space, comma"
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

      {/* Action Buttons */}
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
        <Button
          onClick={handleShare}
          disabled={!output}
          variant="outline"
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share
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
          Copy to Clipboard
        </Button>
      </div>

      <CopyToast show={showToast} />
    </div>
  )
}
