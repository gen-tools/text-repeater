"use client"

import * as React from "react"
import { Copy, Download, Trash2, Share2, RotateCcw, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"
import { getStoredItem, setStoredItem } from "@/lib/indexed-db"
import { repeatText } from "@/lib/utils"

const popularEmojis = ["❤️", "😂", "🔥", "👍", "✨", "🎉", "💯", "🙏", "😍", "🥺", "😭", "💀", "👀", "🤣", "💕"]

const DEFAULT_DEMO_EMOJI = "❤️"
const DEFAULT_REPEAT_COUNT = 10
const DEFAULT_SEPARATOR = " "

export function EmojiRepeaterTool() {
  const [inputEmoji, setInputEmoji] = React.useState(DEFAULT_DEMO_EMOJI)
  const [repeatCount, setRepeatCount] = React.useState(DEFAULT_REPEAT_COUNT)
  const [separator, setSeparator] = React.useState(DEFAULT_SEPARATOR)
  const [isLoadedFromDB, setIsLoadedFromDB] = React.useState(false)
  const [isSaved, setIsSaved] = React.useState(false)
  const { showToast, copyToClipboard } = useCopyToast()

  // Load from IndexedDB on mount
  React.useEffect(() => {
    let isMounted = true

    async function loadSavedData() {
      try {
        const savedInput = await getStoredItem<string>("emoji_repeater_input")
        if (!isMounted) return

        if (typeof savedInput === "string") {
          setInputEmoji(savedInput)
        } else {
          setInputEmoji(DEFAULT_DEMO_EMOJI)
        }

        const savedCount = await getStoredItem<number>("emoji_repeater_count")
        if (isMounted && typeof savedCount === "number" && savedCount >= 1 && savedCount <= 10000) {
          setRepeatCount(savedCount)
        }

        const savedSep = await getStoredItem<string>("emoji_repeater_separator")
        if (isMounted && typeof savedSep === "string") {
          setSeparator(savedSep)
        }
      } catch (err) {
        console.error("Error reading emoji repeater from IndexedDB:", err)
      } finally {
        if (isMounted) {
          setIsLoadedFromDB(true)
        }
      }
    }

    loadSavedData()

    return () => {
      isMounted = false
    }
  }, [])

  // Auto-save input to IndexedDB
  React.useEffect(() => {
    if (!isLoadedFromDB) return

    const timer = setTimeout(async () => {
      try {
        await setStoredItem("emoji_repeater_input", inputEmoji)
        setIsSaved(true)
        const hideTimer = setTimeout(() => setIsSaved(false), 1500)
        return () => clearTimeout(hideTimer)
      } catch (err) {
        console.error("Failed to save emoji to IndexedDB:", err)
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [inputEmoji, isLoadedFromDB])

  // Auto-save settings to IndexedDB
  React.useEffect(() => {
    if (!isLoadedFromDB) return

    const timer = setTimeout(async () => {
      try {
        await Promise.all([
          setStoredItem("emoji_repeater_count", repeatCount),
          setStoredItem("emoji_repeater_separator", separator),
        ])
      } catch (err) {
        console.error("Failed to save emoji settings to IndexedDB:", err)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [repeatCount, separator, isLoadedFromDB])

  // Save immediately on beforeunload or visibility change
  React.useEffect(() => {
    const handleSaveImmediately = () => {
      setStoredItem("emoji_repeater_input", inputEmoji)
      setStoredItem("emoji_repeater_count", repeatCount)
      setStoredItem("emoji_repeater_separator", separator)
    }

    window.addEventListener("beforeunload", handleSaveImmediately)
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        handleSaveImmediately()
      }
    }
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      window.removeEventListener("beforeunload", handleSaveImmediately)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [inputEmoji, repeatCount, separator])

  const deferredInputEmoji = React.useDeferredValue(inputEmoji)
  const deferredRepeatCount = React.useDeferredValue(repeatCount)
  const deferredSeparator = React.useDeferredValue(separator)

  const output = React.useMemo(() => {
    if (!deferredInputEmoji) {
      return ""
    }
    const sep = deferredSeparator.replace(/\\n/g, "\n").replace(/\\t/g, "\t")
    return repeatText(deferredInputEmoji, deferredRepeatCount, sep)
  }, [deferredInputEmoji, deferredRepeatCount, deferredSeparator])

  const handleClear = React.useCallback(() => {
    setInputEmoji("")
    setSeparator("")
    setStoredItem("emoji_repeater_input", "")
  }, [])

  const handleResetDemo = React.useCallback(() => {
    setInputEmoji(DEFAULT_DEMO_EMOJI)
    setRepeatCount(DEFAULT_REPEAT_COUNT)
    setSeparator(DEFAULT_SEPARATOR)
    setStoredItem("emoji_repeater_input", DEFAULT_DEMO_EMOJI)
    setStoredItem("emoji_repeater_count", DEFAULT_REPEAT_COUNT)
    setStoredItem("emoji_repeater_separator", DEFAULT_SEPARATOR)
  }, [])

  const handleDownload = React.useCallback(() => {
    if (!output) return
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "repeated-emojis.txt"
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
      {/* Quick Emoji Picker */}
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">Quick Pick Popular Emojis</p>
          <span className="text-xs text-muted-foreground hidden sm:inline">Click any to insert</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularEmojis.map((emoji) => (
            <button
              key={emoji}
              onClick={() => setInputEmoji(emoji)}
              className="rounded-xl border border-border bg-background p-2.5 text-2xl transition-all hover:scale-115 hover:border-primary hover:shadow-sm"
              aria-label={`Select ${emoji}`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="input-emoji" className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
              Input Emoji or Text
            </label>
            <div className="flex items-center gap-2">
              {isSaved && (
                <span className="inline-flex items-center gap-1 text-xs text-primary transition-opacity animate-in fade-in">
                  <Check className="h-3 w-3" />
                  Saved
                </span>
              )}
              {inputEmoji !== DEFAULT_DEMO_EMOJI && (
                <button
                  type="button"
                  onClick={handleResetDemo}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  title="Load example emoji"
                >
                  <Sparkles className="h-3 w-3" />
                  Example
                </button>
              )}
            </div>
          </div>
          <input
            id="input-emoji"
            type="text"
            value={inputEmoji}
            onChange={(e) => setInputEmoji(e.target.value)}
            placeholder="Enter emoji or text to repeat..."
            className="w-full rounded-xl border border-input bg-background p-4 text-2xl focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
          />
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <span>{inputEmoji ? `${inputEmoji.length} characters` : "No emoji entered"}</span>
            <span className="text-xs opacity-75 hidden sm:inline">Saved in IndexedDB</span>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="output-text" className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
              Output
            </label>
            {output && (
              <span className="text-xs text-muted-foreground">
                {repeatCount} repetitions
              </span>
            )}
          </div>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Your repeated emojis will appear here..."
            className="h-28 w-full resize-none rounded-xl border border-input bg-muted/40 p-4 text-xl sm:text-2xl leading-relaxed focus:outline-none shadow-sm"
            aria-live="polite"
          />
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <div>{output.length} characters total</div>
            <span className="text-xs text-muted-foreground/80 hidden sm:inline">
              Ctrl + Enter to quick copy
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Repeat Count */}
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
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[10, 50, 100, 500, 1000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setRepeatCount(preset)}
                  className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                    repeatCount === preset
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground/80"
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="space-y-2">
            <label htmlFor="separator" className="block text-sm font-medium">
              Separator
            </label>
            <input
              id="separator"
              type="text"
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              placeholder="e.g., space or newline"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setSeparator(" ")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  separator === " "
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
              >
                Space
              </button>
              <button
                type="button"
                onClick={() => setSeparator("")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  separator === ""
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
              >
                None
              </button>
              <button
                type="button"
                onClick={() => setSeparator("\n")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  separator === "\n"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
              >
                Newline
              </button>
              <button
                type="button"
                onClick={() => setSeparator(", ")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  separator === ", "
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
              >
                Comma
              </button>
            </div>
          </div>

          {/* Clear & Reset */}
          <div className="flex flex-col justify-end gap-2">
            <Button
              onClick={handleClear}
              variant="outline"
              className="w-full rounded-lg text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear
            </Button>
            <Button
              onClick={handleResetDemo}
              variant="ghost"
              size="sm"
              className="w-full text-xs text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
              Reset to Example
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
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur p-4 sm:hidden">
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
