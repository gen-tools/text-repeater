"use client"

import * as React from "react"
import { Copy, Trash2, RotateCcw, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"
import { getStoredItem, setStoredItem } from "@/lib/indexed-db"
import { repeatText } from "@/lib/utils"

type BlankType = "zeroWidth" | "braille" | "space" | "tab" | "newline"

const blankTypes: { value: BlankType; label: string; char: string; description: string }[] = [
  { value: "zeroWidth", label: "Zero-Width Space", char: "\u200B", description: "Invisible character (U+200B)" },
  { value: "braille", label: "Braille Blank", char: "⠀", description: "Braille pattern blank (U+2800)" },
  { value: "space", label: "Regular Space", char: " ", description: "Standard space character" },
  { value: "tab", label: "Tab", char: "\t", description: "Tab character" },
  { value: "newline", label: "Newline", char: "\n", description: "Line break character" },
]

const DEFAULT_BLANK_TYPE: BlankType = "zeroWidth"
const DEFAULT_REPEAT_COUNT = 10

export function BlankTextTool() {
  const [blankType, setBlankType] = React.useState<BlankType>(DEFAULT_BLANK_TYPE)
  const [repeatCount, setRepeatCount] = React.useState(DEFAULT_REPEAT_COUNT)
  const [isLoadedFromDB, setIsLoadedFromDB] = React.useState(false)
  const [isSaved, setIsSaved] = React.useState(false)
  const { showToast, copyToClipboard } = useCopyToast()

  // Load from IndexedDB on mount
  React.useEffect(() => {
    let isMounted = true

    async function loadSavedData() {
      try {
        const savedType = await getStoredItem<BlankType>("blank_text_type")
        if (isMounted && savedType && blankTypes.some(t => t.value === savedType)) {
          setBlankType(savedType)
        }

        const savedCount = await getStoredItem<number>("blank_text_count")
        if (isMounted && typeof savedCount === "number" && savedCount >= 1 && savedCount <= 10000) {
          setRepeatCount(savedCount)
        }
      } catch (err) {
        console.error("Error reading blank text from IndexedDB:", err)
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

  // Auto-save settings to IndexedDB
  React.useEffect(() => {
    if (!isLoadedFromDB) return

    const timer = setTimeout(async () => {
      try {
        await Promise.all([
          setStoredItem("blank_text_type", blankType),
          setStoredItem("blank_text_count", repeatCount),
        ])
        setIsSaved(true)
        const hideTimer = setTimeout(() => setIsSaved(false), 1500)
        return () => clearTimeout(hideTimer)
      } catch (err) {
        console.error("Failed to save blank settings to IndexedDB:", err)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [blankType, repeatCount, isLoadedFromDB])

  // Save on tab exit
  React.useEffect(() => {
    const handleSaveImmediately = () => {
      setStoredItem("blank_text_type", blankType)
      setStoredItem("blank_text_count", repeatCount)
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
  }, [blankType, repeatCount])

  const output = React.useMemo(() => {
    const selectedType = blankTypes.find(t => t.value === blankType)
    if (!selectedType) return ""
    return repeatText(selectedType.char, repeatCount)
  }, [blankType, repeatCount])

  const handleClear = React.useCallback(() => {
    setRepeatCount(1)
    setStoredItem("blank_text_count", 1)
  }, [])

  const handleResetDemo = React.useCallback(() => {
    setBlankType(DEFAULT_BLANK_TYPE)
    setRepeatCount(DEFAULT_REPEAT_COUNT)
    setStoredItem("blank_text_type", DEFAULT_BLANK_TYPE)
    setStoredItem("blank_text_count", DEFAULT_REPEAT_COUNT)
  }, [])

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
      {/* Blank Type Selection */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">Select Blank Text Type:</p>
          <div className="flex items-center gap-2">
            {isSaved && (
              <span className="inline-flex items-center gap-1 text-xs text-primary transition-opacity animate-in fade-in">
                <Check className="h-3 w-3" />
                Saved
              </span>
            )}
            {(blankType !== DEFAULT_BLANK_TYPE || repeatCount !== DEFAULT_REPEAT_COUNT) && (
              <button
                type="button"
                onClick={handleResetDemo}
                className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                title="Reset to default"
              >
                <Sparkles className="h-3 w-3" />
                Reset
              </button>
            )}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {blankTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setBlankType(type.value)}
              className={`rounded-xl border p-4 text-left transition-all ${
                blankType === type.value
                  ? "border-primary bg-primary/10 ring-1 ring-primary shadow-sm"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            >
              <div className="font-semibold text-sm sm:text-base">{type.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{type.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Controls */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="repeat-count" className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm block">
              Number of Invisible Characters
            </label>
            <input
              id="repeat-count"
              type="number"
              min="1"
              max="10000"
              value={repeatCount}
              onChange={(e) => setRepeatCount(Math.max(1, Math.min(10000, parseInt(e.target.value) || 1)))}
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
            />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[1, 5, 10, 50, 100, 500].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setRepeatCount(preset)}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    repeatCount === preset
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-foreground/80"
                  }`}
                >
                  {preset} chars
                </button>
              ))}
            </div>
          </div>
          
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Generated <span className="font-semibold text-foreground">{output.length}</span> invisible characters. They will appear completely empty on screen, but can be copied and pasted to send blank WhatsApp messages, empty Discord names, or test invisible text inputs.
            </p>
          </div>
        </div>

        {/* Output */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="output-text" className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
              Output Preview (Invisible Text)
            </label>
            <span className="text-xs text-muted-foreground">
              {output.length} invisible chars
            </span>
          </div>
          <textarea
            id="output-text"
            value={output}
            readOnly
            className="h-36 w-full resize-none rounded-xl border border-input bg-muted/40 p-4 text-base focus:outline-none shadow-sm"
            placeholder="(Empty / invisible text is generated here)"
            aria-label="Blank text output"
          />
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <div>Character code: {blankTypes.find(t => t.value === blankType)?.char.charCodeAt(0) || "none"}</div>
            <span className="text-xs opacity-75 hidden sm:inline">Saved in IndexedDB</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3">
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
          className="rounded-xl text-destructive hover:bg-destructive/10 hover:text-destructive"
          size="lg"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear
        </Button>
        <Button
          onClick={handleResetDemo}
          variant="ghost"
          className="rounded-xl text-muted-foreground hover:text-foreground"
          size="lg"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset to Example
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
          Copy Blank Text
        </Button>
      </div>

      <CopyToast show={showToast} />
    </div>
  )
}
