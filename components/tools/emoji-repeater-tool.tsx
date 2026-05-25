"use client"

import * as React from "react"
import { Copy, Download, Trash2, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"

const popularEmojis = ["❤️", "😂", "🔥", "👍", "✨", "🎉", "💯", "🙏", "😍", "🥺", "😭", "💀", "👀", "🤣", "💕"]

export function EmojiRepeaterTool() {
  const [inputEmoji, setInputEmoji] = React.useState("")
  const [repeatCount, setRepeatCount] = React.useState(10)
  const [separator, setSeparator] = React.useState("")
  const [output, setOutput] = React.useState("")
  const { showToast, copyToClipboard } = useCopyToast()

  React.useEffect(() => {
    if (!inputEmoji) {
      setOutput("")
      return
    }
    const result = Array(repeatCount).fill(inputEmoji).join(separator)
    setOutput(result)
  }, [inputEmoji, repeatCount, separator])

  const handleClear = () => {
    setInputEmoji("")
    setOutput("")
  }

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "repeated-emojis.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ text: output })
      } catch {
        copyToClipboard(output)
      }
    } else {
      copyToClipboard(output)
    }
  }

  return (
    <div className="space-y-6">
      {/* Quick Emoji Picker */}
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="mb-3 text-sm font-medium">Quick pick popular emojis:</p>
        <div className="flex flex-wrap gap-2">
          {popularEmojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => setInputEmoji(emoji)}
              className="rounded-lg border border-border p-2 text-2xl transition-all hover:scale-110 hover:border-primary"
              aria-label={`Select ${emoji}`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-4">
          <label htmlFor="input-emoji" className="block text-sm font-medium">
            Enter emoji or text
          </label>
          <input
            id="input-emoji"
            type="text"
            value={inputEmoji}
            onChange={(e) => setInputEmoji(e.target.value)}
            placeholder="Enter emoji or text to repeat..."
            className="w-full rounded-xl border border-input bg-background p-4 text-2xl focus:outline-none focus:ring-2 focus:ring-ring"
          />
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
            placeholder="Your repeated emojis will appear here..."
            className="h-24 w-full resize-none rounded-xl border border-input bg-muted/50 p-4 text-xl focus:outline-none"
            aria-live="polite"
          />
          <div className="text-sm text-muted-foreground">
            {output.length} characters
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="grid gap-6 sm:grid-cols-3">
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
            <label htmlFor="separator" className="block text-sm font-medium">
              Separator
            </label>
            <input
              id="separator"
              type="text"
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              placeholder="e.g., space"
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
