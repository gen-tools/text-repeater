"use client"

import * as React from "react"
import { Copy, Trash2, RotateCcw, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"
import { getStoredItem, setStoredItem } from "@/lib/indexed-db"

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

const DEFAULT_DEMO_TEXT = "convert this sentence to any case style easily"
const DEFAULT_CASE_TYPE: CaseType = "upper"

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
  const [inputText, setInputText] = React.useState(DEFAULT_DEMO_TEXT)
  const [selectedCase, setSelectedCase] = React.useState<CaseType>(DEFAULT_CASE_TYPE)
  const [isLoadedFromDB, setIsLoadedFromDB] = React.useState(false)
  const [isSaved, setIsSaved] = React.useState(false)
  const { showToast, copyToClipboard } = useCopyToast()

  // Load from IndexedDB on mount
  React.useEffect(() => {
    let isMounted = true

    async function loadSavedData() {
      try {
        const savedText = await getStoredItem<string>("case_converter_input")
        if (!isMounted) return

        if (typeof savedText === "string") {
          setInputText(savedText)
        } else {
          setInputText(DEFAULT_DEMO_TEXT)
        }

        const savedCase = await getStoredItem<CaseType>("case_converter_type")
        if (isMounted && savedCase && caseOptions.some(c => c.value === savedCase)) {
          setSelectedCase(savedCase)
        }
      } catch (err) {
        console.error("Error reading case converter from IndexedDB:", err)
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
        await setStoredItem("case_converter_input", inputText)
        setIsSaved(true)
        const hideTimer = setTimeout(() => setIsSaved(false), 1500)
        return () => clearTimeout(hideTimer)
      } catch (err) {
        console.error("Failed to save case converter input to IndexedDB:", err)
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [inputText, isLoadedFromDB])

  // Auto-save case type to IndexedDB
  React.useEffect(() => {
    if (!isLoadedFromDB) return

    const timer = setTimeout(async () => {
      try {
        await setStoredItem("case_converter_type", selectedCase)
      } catch (err) {
        console.error("Failed to save case type to IndexedDB:", err)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [selectedCase, isLoadedFromDB])

  // Save on tab exit
  React.useEffect(() => {
    const handleSaveImmediately = () => {
      setStoredItem("case_converter_input", inputText)
      setStoredItem("case_converter_type", selectedCase)
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
  }, [inputText, selectedCase])

  const deferredInputText = React.useDeferredValue(inputText)

  const output = React.useMemo(() => {
    if (!deferredInputText) {
      return ""
    }
    return convertCase(deferredInputText, selectedCase)
  }, [deferredInputText, selectedCase])

  const handleClear = React.useCallback(() => {
    setInputText("")
    setStoredItem("case_converter_input", "")
  }, [])

  const handleResetDemo = React.useCallback(() => {
    setInputText(DEFAULT_DEMO_TEXT)
    setSelectedCase(DEFAULT_CASE_TYPE)
    setStoredItem("case_converter_input", DEFAULT_DEMO_TEXT)
    setStoredItem("case_converter_type", DEFAULT_CASE_TYPE)
  }, [])

  return (
    <div className="space-y-6">
      {/* Case Options Grid */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">Select Target Case Style:</p>
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
                title="Reset to example"
              >
                <Sparkles className="h-3 w-3" />
                Example
              </button>
            )}
          </div>
        </div>
        <div className="grid gap-2.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {caseOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedCase(option.value)}
              className={`rounded-xl border p-3 text-left transition-all ${
                selectedCase === option.value
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background hover:border-primary/50 text-foreground"
              }`}
            >
              <div className="font-semibold text-xs sm:text-sm truncate">{option.label}</div>
              <div className={`text-xs mt-0.5 truncate ${selectedCase === option.value ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {option.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="input-text" className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
              Input Text
            </label>
            <span className="text-xs text-muted-foreground">
              {inputText.length} chars &bull; {inputText.trim() ? inputText.trim().split(/\s+/).length : 0} words
            </span>
          </div>
          <textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste text to convert..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
          />
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <span>Ready to convert</span>
            <span className="text-xs opacity-75 hidden sm:inline">Saved in IndexedDB</span>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="output-text" className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
              Converted Output
            </label>
            <span className="text-xs text-muted-foreground">
              {caseOptions.find(c => c.value === selectedCase)?.label}
            </span>
          </div>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Your converted text will appear here..."
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

      <div className="flex flex-wrap items-center gap-3">
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
