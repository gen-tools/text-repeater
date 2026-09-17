"use client"

import * as React from "react"
import { Copy, Download, Trash2, RotateCcw, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"
import { getStoredItem, setStoredItem } from "@/lib/indexed-db"
import { repeatText } from "@/lib/utils"

const DEFAULT_DEMO_TEXT = "Repeat every single word!"
const DEFAULT_REPEAT_COUNT = 3
const DEFAULT_SEPARATOR = " "

export function WordRepeaterTool() {
  const [inputText, setInputText] = React.useState(DEFAULT_DEMO_TEXT)
  const [repeatCount, setRepeatCount] = React.useState(DEFAULT_REPEAT_COUNT)
  const [wordSeparator, setWordSeparator] = React.useState(DEFAULT_SEPARATOR)
  const [isLoadedFromDB, setIsLoadedFromDB] = React.useState(false)
  const [isSaved, setIsSaved] = React.useState(false)
  const { showToast, copyToClipboard } = useCopyToast()

  // Load from IndexedDB on initial mount
  React.useEffect(() => {
    let isMounted = true

    async function loadSavedData() {
      try {
        const savedInput = await getStoredItem<string>("word_repeater_input")
        if (!isMounted) return

        if (typeof savedInput === "string") {
          setInputText(savedInput)
        } else {
          setInputText(DEFAULT_DEMO_TEXT)
        }

        const savedCount = await getStoredItem<number>("word_repeater_count")
        if (isMounted && typeof savedCount === "number" && savedCount >= 1 && savedCount <= 100) {
          setRepeatCount(savedCount)
        }

        const savedSep = await getStoredItem<string>("word_repeater_separator")
        if (isMounted && typeof savedSep === "string") {
          setWordSeparator(savedSep)
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

  // Auto-save input to IndexedDB
  React.useEffect(() => {
    if (!isLoadedFromDB) return

    const timer = setTimeout(async () => {
      try {
        await setStoredItem("word_repeater_input", inputText)
        setIsSaved(true)
        const hideTimer = setTimeout(() => setIsSaved(false), 1500)
        return () => clearTimeout(hideTimer)
      } catch (err) {
        console.error("Failed to save input to IndexedDB:", err)
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [inputText, isLoadedFromDB])

  // Auto-save controls to IndexedDB
  React.useEffect(() => {
    if (!isLoadedFromDB) return

    const timer = setTimeout(async () => {
      try {
        await Promise.all([
          setStoredItem("word_repeater_count", repeatCount),
          setStoredItem("word_repeater_separator", wordSeparator),
        ])
      } catch (err) {
        console.error("Failed to save settings to IndexedDB:", err)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [repeatCount, wordSeparator, isLoadedFromDB])

  // Save immediately on beforeunload or visibility change
  React.useEffect(() => {
    const handleSaveImmediately = () => {
      setStoredItem("word_repeater_input", inputText)
      setStoredItem("word_repeater_count", repeatCount)
      setStoredItem("word_repeater_separator", wordSeparator)
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
  }, [inputText, repeatCount, wordSeparator])

  const deferredInputText = React.useDeferredValue(inputText)
  const deferredRepeatCount = React.useDeferredValue(repeatCount)
  const deferredWordSeparator = React.useDeferredValue(wordSeparator)

  const output = React.useMemo(() => {
    if (!deferredInputText.trim()) {
      return ""
    }
    
    const sep = deferredWordSeparator.replace(/\\n/g, "\n").replace(/\\t/g, "\t")
    const words = deferredInputText.trim().split(/\s+/)
    const repeatedWords = words.map(word => 
      repeatText(word, deferredRepeatCount, sep)
    )
    
    return repeatedWords.join(" ")
  }, [deferredInputText, deferredRepeatCount, deferredWordSeparator])

  const handleClear = React.useCallback(() => {
    setInputText("")
    setStoredItem("word_repeater_input", "")
  }, [])

  const handleResetDemo = React.useCallback(() => {
    setInputText(DEFAULT_DEMO_TEXT)
    setRepeatCount(DEFAULT_REPEAT_COUNT)
    setWordSeparator(DEFAULT_SEPARATOR)
    setStoredItem("word_repeater_input", DEFAULT_DEMO_TEXT)
    setStoredItem("word_repeater_count", DEFAULT_REPEAT_COUNT)
    setStoredItem("word_repeater_separator", DEFAULT_SEPARATOR)
  }, [])

  const handleDownload = React.useCallback(() => {
    if (!output) return
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" })
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
        {/* Input Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="input-text" className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
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
            placeholder="Enter text with words to repeat..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
          />
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <span>{wordCount} words</span>
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
                {output.trim() ? output.trim().split(/\s+/).length : 0} words total
              </span>
            )}
          </div>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Your repeated words will appear here..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-muted/40 p-4 font-mono text-sm sm:text-base leading-relaxed focus:outline-none shadow-sm"
          />
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <div>{output.length} characters</div>
            <span className="text-xs text-muted-foreground/80 hidden sm:inline">
              Ctrl + Enter to quick copy
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Repeat Count */}
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
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[2, 3, 5, 10].map((preset) => (
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
                  {preset}x
                </button>
              ))}
            </div>
          </div>

          {/* Word Separator */}
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
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setWordSeparator(" ")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  wordSeparator === " "
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
              >
                Space
              </button>
              <button
                type="button"
                onClick={() => setWordSeparator("-")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  wordSeparator === "-"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
              >
                Dash (-)
              </button>
              <button
                type="button"
                onClick={() => setWordSeparator(", ")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  wordSeparator === ", "
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
              >
                Comma (,)
              </button>
              <button
                type="button"
                onClick={() => setWordSeparator("")}
                className={`rounded-md px-2 py-0.5 text-xs font-medium transition-colors ${
                  wordSeparator === ""
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80 text-foreground/80"
                }`}
              >
                None
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
