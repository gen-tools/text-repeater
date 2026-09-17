"use client"

import * as React from "react"
import { Copy, Trash2, RotateCcw, Check, Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"
import { getStoredItem, setStoredItem } from "@/lib/indexed-db"

const zalgoChars = {
  up: [
    '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310',
    '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343',
    '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350',
    '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d',
    '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369',
    '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b',
  ],
  mid: [
    '\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327',
    '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e',
    '\u035f', '\u0360', '\u0362', '\u0338', '\u0337', '\u0361', '\u0489',
  ],
  down: [
    '\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f',
    '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c',
    '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339',
    '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d',
    '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323',
  ],
}

type Intensity = "mini" | "normal" | "crazy"

const DEFAULT_DEMO_TEXT = "Zalgo cursed glitch text generator"

export function ZalgoTextTool() {
  const [inputText, setInputText] = React.useState(DEFAULT_DEMO_TEXT)
  const [intensity, setIntensity] = React.useState<Intensity>("normal")
  const [isLoadedFromDB, setIsLoadedFromDB] = React.useState(false)
  const [isSaved, setIsSaved] = React.useState(false)
  const [seed, setSeed] = React.useState(0)
  const { showToast, copyToClipboard } = useCopyToast()

  // Load from IndexedDB on mount
  React.useEffect(() => {
    let isMounted = true

    async function loadSavedData() {
      try {
        const savedText = await getStoredItem<string>("zalgo_text_input")
        if (!isMounted) return

        if (typeof savedText === "string") {
          setInputText(savedText)
        } else {
          setInputText(DEFAULT_DEMO_TEXT)
        }

        const savedIntensity = await getStoredItem<Intensity>("zalgo_text_intensity")
        if (isMounted && savedIntensity && ["mini", "normal", "crazy"].includes(savedIntensity)) {
          setIntensity(savedIntensity)
        }
      } catch (err) {
        console.error("Error reading zalgo text from IndexedDB:", err)
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
        await setStoredItem("zalgo_text_input", inputText)
        setIsSaved(true)
        const hideTimer = setTimeout(() => setIsSaved(false), 1500)
        return () => clearTimeout(hideTimer)
      } catch (err) {
        console.error("Failed to save zalgo text to IndexedDB:", err)
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [inputText, isLoadedFromDB])

  // Auto-save intensity to IndexedDB
  React.useEffect(() => {
    if (!isLoadedFromDB) return

    const timer = setTimeout(async () => {
      try {
        await setStoredItem("zalgo_text_intensity", intensity)
      } catch (err) {
        console.error("Failed to save zalgo intensity to IndexedDB:", err)
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [intensity, isLoadedFromDB])

  // Save on tab exit
  React.useEffect(() => {
    const handleSaveImmediately = () => {
      setStoredItem("zalgo_text_input", inputText)
      setStoredItem("zalgo_text_intensity", intensity)
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
  }, [inputText, intensity])

  const deferredInputText = React.useDeferredValue(inputText)

  const getRandomChar = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]

  const generateZalgo = React.useCallback((text: string, level: Intensity) => {
    const counts = {
      mini: { up: 2, mid: 1, down: 2 },
      normal: { up: 5, mid: 2, down: 5 },
      crazy: { up: 12, mid: 5, down: 12 },
    }

    const { up, mid, down } = counts[level]
    
    return text.split("").map(char => {
      if (char === " " || char === "\n") return char
      
      let result = char
      for (let i = 0; i < up; i++) result += getRandomChar(zalgoChars.up)
      for (let i = 0; i < mid; i++) result += getRandomChar(zalgoChars.mid)
      for (let i = 0; i < down; i++) result += getRandomChar(zalgoChars.down)
      
      return result
    }).join("")
  }, [])

  const output = React.useMemo(() => {
    if (!deferredInputText) {
      return ""
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    seed
    return generateZalgo(deferredInputText, intensity)
  }, [deferredInputText, intensity, generateZalgo, seed])

  const handleClear = React.useCallback(() => {
    setInputText("")
    setStoredItem("zalgo_text_input", "")
  }, [])

  const handleResetDemo = React.useCallback(() => {
    setInputText(DEFAULT_DEMO_TEXT)
    setIntensity("normal")
    setStoredItem("zalgo_text_input", DEFAULT_DEMO_TEXT)
    setStoredItem("zalgo_text_intensity", "normal")
  }, [])

  const handleRegenerate = React.useCallback(() => {
    setSeed(s => s + 1)
  }, [])

  return (
    <div className="space-y-6">
      {/* Intensity Selection */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">Select Zalgo Glitch Intensity:</p>
          <span className="text-xs text-muted-foreground hidden sm:inline">Controls cursed character density</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {(["mini", "normal", "crazy"] as Intensity[]).map((level) => (
            <button
              key={level}
              onClick={() => setIntensity(level)}
              className={`rounded-xl border px-5 py-2.5 font-medium capitalize text-sm sm:text-base transition-all ${
                intensity === level
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background hover:border-primary/50 text-foreground"
              }`}
            >
              {level === "mini" && "Subtle (Mini)"}
              {level === "normal" && "Classic (Normal)"}
              {level === "crazy" && "Extreme (Crazy)"}
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
            placeholder="Type text to zalgo-ify..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
          />
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <span>{inputText.length} characters</span>
            <span className="text-xs opacity-75 hidden sm:inline">Saved in IndexedDB</span>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label htmlFor="output-text" className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">
              Zalgo Output
            </label>
            {output && (
              <button
                type="button"
                onClick={handleRegenerate}
                className="text-xs text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                title="Randomize glitch patterns"
              >
                <RefreshCw className="h-3 w-3" />
                Randomize
              </button>
            )}
          </div>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Your zalgo text will appear here..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-muted/40 p-4 font-mono text-sm sm:text-base leading-relaxed focus:outline-none shadow-sm"
          />
          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
            <div>{output.length} characters with accents</div>
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
          Copy Zalgo Text
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
          Copy Zalgo Text
        </Button>
      </div>

      <CopyToast show={showToast} />
    </div>
  )
}
