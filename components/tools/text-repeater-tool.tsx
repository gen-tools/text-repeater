"use client"

import * as React from "react"
import { Copy, Download, Trash2, Share2, RotateCcw, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"
import { getStoredItem, setStoredItem } from "@/lib/indexed-db"
import { repeatText, countLines } from "@/lib/utils"

type RepeatMode = "characters" | "words" | "lines" | "paragraphs"

const DEFAULT_DEMO_TEXT = "I love my text repeater!"
const DEFAULT_REPEAT_COUNT = 10

export function TextRepeaterTool() {
  const [inputText, setInputText] = React.useState(DEFAULT_DEMO_TEXT)
  const [repeatCount, setRepeatCount] = React.useState(DEFAULT_REPEAT_COUNT)
  const [repeatMode, setRepeatMode] = React.useState<RepeatMode>("characters")
  const [separator, setSeparator] = React.useState("")
  const [isLoadedFromDB, setIsLoadedFromDB] = React.useState(false)
  const [isSaved, setIsSaved] = React.useState(false)
  const { showToast, copyToClipboard } = useCopyToast()

  // Load user data from IndexedDB on initial mount
  React.useEffect(() => {
    let isMounted = true

    async function loadSavedData() {
      try {
        const savedInput = await getStoredItem<string>("input_text")
        if (!isMounted) return

        if (typeof savedInput === "string") {
          // If it was the previous demo text, migrate to the updated demo text
          if (savedInput === "I love text repeaters!") {
            setInputText(DEFAULT_DEMO_TEXT)
            setStoredItem("input_text", DEFAULT_DEMO_TEXT)
          } else {
            setInputText(savedInput)
          }
        } else {
          // First-time visit: provide example text so users immediately understand the tool
          setInputText(DEFAULT_DEMO_TEXT)
        }

        const savedCount = await getStoredItem<number>("repeat_count")
        if (isMounted && typeof savedCount === "number" && savedCount >= 1 && savedCount <= 10000) {
          setRepeatCount(savedCount)
        }

        const savedMode = await getStoredItem<RepeatMode>("repeat_mode")
        if (
          isMounted &&
          savedMode &&
          ["characters", "words", "lines", "paragraphs"].includes(savedMode)
        ) {
          setRepeatMode(savedMode)
        }

        const savedSep = await getStoredItem<string>("separator")
        if (isMounted && typeof savedSep === "string") {
          setSeparator(savedSep)
        }
      } catch (err) {
        console.error("Error reading from IndexedDB:", err)
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

  // Persist user input to IndexedDB whenever it changes
  React.useEffect(() => {
    if (!isLoadedFromDB) return

    const timer = setTimeout(async () => {
      try {
        await setStoredItem("input_text", inputText)
        setIsSaved(true)
        const hideTimer = setTimeout(() => setIsSaved(false), 1500)
        return () => clearTimeout(hideTimer)
      } catch (err) {
        console.error("Failed to save input to IndexedDB:", err)
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [inputText, isLoadedFromDB])

  // Persist controls to IndexedDB
  React.useEffect(() => {
    if (!isLoadedFromDB) return

    const timer = setTimeout(async () => {
      try {
        await Promise.all([
          setStoredItem("repeat_count", repeatCount),
          setStoredItem("repeat_mode", repeatMode),
          setStoredItem("separator", separator),
        ])
      } catch (err) {
        console.error("Failed to save settings to IndexedDB:", err)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [repeatCount, repeatMode, separator, isLoadedFromDB])

  // Ensure synchronous backup before tab unload or navigation
  React.useEffect(() => {
    const handleBeforeUnload = () => {
      setStoredItem("input_text", inputText)
      setStoredItem("repeat_count", repeatCount)
      setStoredItem("repeat_mode", repeatMode)
      setStoredItem("separator", separator)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        handleBeforeUnload()
      }
    }
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [inputText, repeatCount, repeatMode, separator])

  const deferredInputText = React.useDeferredValue(inputText)
  const deferredRepeatCount = React.useDeferredValue(repeatCount)
  const deferredSeparator = React.useDeferredValue(separator)

  const charCount = inputText.length
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0

  const output = React.useMemo(() => {
    if (!deferredInputText) {
      return ""
    }

    // Resolve separator:
    // If separator is specified: use it (support \n and \t escape sequences; "none" means no separator)
    // If empty: default to line break (\n) so each repetition appears on a new line (as shown in standard repeaters),
    // or \n\n for paragraphs
    let sep: string
    if (deferredSeparator === "none" || deferredSeparator === "[none]") {
      sep = ""
    } else if (deferredSeparator !== "") {
      sep = deferredSeparator.replace(/\\n/g, "\n").replace(/\\t/g, "\t")
    } else {
      sep = repeatMode === "paragraphs" ? "\n\n" : "\n"
    }

    switch (repeatMode) {
      case "characters":
        return repeatText(deferredInputText, deferredRepeatCount, sep)
      case "words": {
        const words = deferredInputText.trim().split(/\s+/)
        return words.map(word => repeatText(word, deferredRepeatCount, sep)).join(" ")
      }
      case "lines": {
        const lines = deferredInputText.split("\n")
        return lines.map(line => repeatText(line, deferredRepeatCount, sep)).join("\n")
      }
      case "paragraphs":
        return repeatText(deferredInputText, deferredRepeatCount, sep)
      default:
        return ""
    }
  }, [deferredInputText, deferredRepeatCount, repeatMode, deferredSeparator])

  const outputLines = React.useMemo(() => {
    return countLines(output)
  }, [output])

  const handleClear = React.useCallback(() => {
    setInputText("")
    setSeparator("")
    setStoredItem("input_text", "")
    setStoredItem("separator", "")
  }, [])

  const handleResetDemo = React.useCallback(() => {
    setInputText(DEFAULT_DEMO_TEXT)
    setRepeatCount(DEFAULT_REPEAT_COUNT)
    setRepeatMode("characters")
    setSeparator("")
    setStoredItem("input_text", DEFAULT_DEMO_TEXT)
    setStoredItem("repeat_count", DEFAULT_REPEAT_COUNT)
    setStoredItem("repeat_mode", "characters")
    setStoredItem("separator", "")
  }, [])

  const handleDownload = React.useCallback(() => {
    if (!output) return
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" })
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

  // Keyboard shortcuts (Ctrl/Cmd + Enter to copy)
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
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label
              htmlFor="input-text"
              className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm"
            >
              Input Text
            </label>
            <div className="flex items-center gap-2">
              {isSaved && (
                <span className="inline-flex items-center gap-1 text-xs text-primary transition-opacity animate-in fade-in">
                  <Check className="h-3 w-3" />
                  Saved
                </span>
              )}
              {inputText !== DEFAULT_DEMO_TEXT && (
                <button
                  type="button"
                  onClick={handleResetDemo}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  title="Load example text"
                >
                  <Sparkles className="h-3 w-3" />
                  Example
                </button>
              )}
            </div>
          </div>
          <textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="h-56 w-full resize-none rounded-xl border border-input bg-background p-4 text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
            aria-describedby="char-word-count"
          />
          <div id="char-word-count" className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <div className="flex gap-3">
              <span>{charCount} characters</span>
              <span>•</span>
              <span>{wordCount} words</span>
            </div>
            <span className="text-xs opacity-75 hidden sm:inline">
              Saved automatically in IndexedDB
            </span>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label
              htmlFor="output-text"
              className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm"
            >
              Output
            </label>
            {output && (
              <span className="text-xs text-muted-foreground">
                {outputLines} {outputLines === 1 ? "line" : "lines"}
              </span>
            )}
          </div>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Your repeated text will appear here..."
            className="h-56 w-full resize-none rounded-xl border border-input bg-muted/40 p-4 font-mono text-sm sm:text-base leading-relaxed focus:outline-none shadow-sm"
            aria-live="polite"
          />
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <div>{output.length} characters</div>
            <span className="text-xs text-muted-foreground/80 hidden sm:inline">
              Press Ctrl + Enter to quick copy
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Repeat Count */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="repeat-count" className="block text-sm font-medium">
                Repeat count
              </label>
            </div>
            <input
              id="repeat-count"
              type="number"
              min="1"
              max="10000"
              value={repeatCount}
              onChange={(e) => setRepeatCount(Math.max(1, Math.min(10000, parseInt(e.target.value) || 1)))}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {/* Quick preset buttons */}
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
                  {preset >= 1000 ? `${preset / 1000}k` : preset}
                </button>
              ))}
            </div>
          </div>

          {/* Repeat Mode */}
          <div className="space-y-2">
            <label htmlFor="repeat-mode" className="block text-sm font-medium">
              Repeat by
            </label>
            <select
              id="repeat-mode"
              value={repeatMode}
              onChange={(e) => setRepeatMode(e.target.value as RepeatMode)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="characters">Entire text</option>
              <option value="words">Each word</option>
              <option value="lines">Each line</option>
              <option value="paragraphs">Paragraphs</option>
            </select>
            <p className="text-xs text-muted-foreground pt-1">
              {repeatMode === "characters" && "Duplicates the entire message"}
              {repeatMode === "words" && "Duplicates each word separately"}
              {repeatMode === "lines" && "Duplicates line by line"}
              {repeatMode === "paragraphs" && "Duplicates paragraphs"}
            </p>
          </div>

          {/* Custom Separator */}
          <div className="space-y-2">
            <label htmlFor="separator" className="block text-sm font-medium">
              Separator
            </label>
            <input
              id="separator"
              type="text"
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              placeholder="Default: New line"
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {/* Separator Quick Presets */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setSeparator("")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  separator === ""
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
                title="Line break separator"
              >
                Line Break
              </button>
              <button
                type="button"
                onClick={() => setSeparator(" ")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  separator === " "
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
                title="Space separator"
              >
                Space
              </button>
              <button
                type="button"
                onClick={() => setSeparator(", ")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  separator === ", "
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
                title="Comma separator"
              >
                Comma
              </button>
              <button
                type="button"
                onClick={() => setSeparator("none")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  separator === "none"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
                title="No separator between repetitions"
              >
                None
              </button>
            </div>
          </div>

          {/* Actions: Clear & Reset */}
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

