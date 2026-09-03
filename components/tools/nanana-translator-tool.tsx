"use client"

import * as React from "react"
import { Copy, Download, Trash2, Share2, Sparkles, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"
import { generateNananaText, type NananaStyle } from "@/lib/nanana-generator"

const styleOptions: { id: NananaStyle; label: string; description: string; sample: string }[] = [
  {
    id: "classic",
    label: "Classic NANANA",
    description: "Standard all-caps repetition",
    sample: "NANANANANANANA",
  },
  {
    id: "mixed",
    label: "Mixed Case",
    description: "Alternating melodic capitalization",
    sample: "NANAnanaNaNaNaNANAnana",
  },
  {
    id: "spaced",
    label: "Spaced NANANA",
    description: "Rhythmic spaced phrase blocks",
    sample: "NA NANA NANANA NA",
  },
  {
    id: "random",
    label: "Random NANANA",
    description: "Dynamic casing and varied cadence",
    sample: "Na NaNA nANa NANANA",
  },
  {
    id: "custom",
    label: "Custom Pattern",
    description: "Repeat custom word or token",
    sample: "Custom repetition",
  },
]

const lengthPresets = [
  { label: "20", value: 20 },
  { label: "50", value: 50 },
  { label: "100", value: 100 },
  { label: "250", value: 250 },
  { label: "500", value: 500 },
  { label: "Custom", value: -1 },
]

interface PopularNananaMessage {
  emoji: string
  label: string
  phrase: string
  pattern: string
}

const popularNananaMessages: PopularNananaMessage[] = [
  {
    emoji: "❤️",
    label: "I LOVE YOU",
    phrase: "I LOVE YOU",
    pattern: "NANNANANANAANA",
  },
  {
    emoji: "🥺",
    label: "I NEED YOU",
    phrase: "I NEED YOU",
    pattern: "NANAnanaNANAnanaNANAnana",
  },
  {
    emoji: "🧠",
    label: "REMEMBER HIM",
    phrase: "REMEMBER HIM",
    pattern: "NANANANANANANANA",
  },
]

export function NananaTranslatorTool() {
  const [inputText, setInputText] = React.useState("")
  const [selectedStyle, setSelectedStyle] = React.useState<NananaStyle>("mixed")
  const [selectedLengthPreset, setSelectedLengthPreset] = React.useState<number>(50)
  const [customLength, setCustomLength] = React.useState<number>(120)
  const [customPattern, setCustomPattern] = React.useState("NA")
  const [selectedQuickPick, setSelectedQuickPick] = React.useState<string | null>(null)
  const [salt, setSalt] = React.useState(0) // Allows quick remix/regenerate if user wants a variation
  const { showToast, copyToClipboard } = useCopyToast()

  const deferredInput = React.useDeferredValue(inputText)
  const activeLength = selectedLengthPreset === -1 ? customLength : selectedLengthPreset

  const charCount = inputText.length
  const wordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0

  const output = React.useMemo(() => {
    if (selectedQuickPick) {
      const matched = popularNananaMessages.find((m) => m.label === selectedQuickPick)
      if (matched && inputText === matched.phrase) {
        return matched.pattern
      }
    }

    if (!deferredInput.trim()) {
      return ""
    }

    const modifiedInput = salt > 0 ? `${deferredInput}__salt${salt}` : deferredInput
    return generateNananaText({
      text: modifiedInput,
      style: selectedStyle,
      length: activeLength,
      customPattern,
    })
  }, [selectedQuickPick, inputText, deferredInput, salt, selectedStyle, activeLength, customPattern])

  const handleQuickPick = React.useCallback((item: PopularNananaMessage) => {
    setSelectedQuickPick(item.label)
    setInputText(item.phrase)
  }, [])

  const handleClear = React.useCallback(() => {
    setSelectedQuickPick(null)
    setInputText("")
  }, [])

  const handleDownload = React.useCallback(() => {
    if (!output) return
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "nanana-text.txt"
    a.click()
    URL.revokeObjectURL(url)
  }, [output])

  const handleShare = React.useCallback(async () => {
    if (!output) return
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Nanana Text",
          text: output,
        })
      } catch {
        copyToClipboard(output)
      }
    } else {
      copyToClipboard(output)
    }
  }, [output, copyToClipboard])

  const handleRemix = React.useCallback(() => {
    setSelectedQuickPick(null)
    setSalt((prev) => prev + 1)
  }, [])

  const outputRef = React.useRef(output)
  React.useEffect(() => {
    outputRef.current = output
  }, [output])

  // Keyboard shortcut: Ctrl/Cmd + Enter to copy
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
      <CopyToast show={showToast} message="Copied!" />

      {/* Quick Pick Popular Nanana Messages */}
      <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
          <p className="text-sm font-semibold flex items-center gap-1.5 text-foreground">
            <span>🔥</span> Quick Pick Popular Nanana Messages
          </p>
          <span className="text-xs text-muted-foreground">
            Tap to load viral trend pattern
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {popularNananaMessages.map((item) => {
            const isSelected = selectedQuickPick === item.label
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleQuickPick(item)}
                className={`group flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary/10 text-primary ring-1 ring-primary shadow-sm"
                    : "border-border bg-background hover:border-primary/40 hover:bg-accent/40 text-foreground"
                }`}
                aria-label={`Load ${item.label} Nanana pattern`}
              >
                <span className="text-base">{item.emoji}</span>
                <span className="font-semibold">{item.label}</span>
                <span className="font-mono text-xs text-muted-foreground bg-muted group-hover:bg-background/80 px-2 py-0.5 rounded transition-colors">
                  {item.pattern}
                </span>
              </button>
            )
          })}
        </div>

        <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
          «These patterns are based on community-reported viral trend results. Instagram controls the translation, so results may vary.»
        </p>
      </div>

      {/* Main IO Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="input-text" className="block text-sm font-medium">
              Enter your text
            </label>
            {inputText && (
              <button
                type="button"
                onClick={handleClear}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                aria-label="Clear input text"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear
              </button>
            )}
          </div>
          <textarea
            id="input-text"
            value={inputText}
            onChange={(e) => {
              setSelectedQuickPick(null)
              setInputText(e.target.value)
            }}
            placeholder='Type something like “I love you”...'
            className="h-52 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            aria-describedby="char-word-count"
          />
          <div id="char-word-count" className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex gap-4">
              <span>{charCount} characters</span>
              <span>{wordCount} words</span>
            </div>
            {inputText && (
              <button
                type="button"
                onClick={handleRemix}
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                title="Regenerate variation pattern"
              >
                <RefreshCw className="h-3 w-3" />
                Remix Pattern
              </button>
            )}
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="output-text" className="block text-sm font-medium">
              Your Nanana Text
            </label>
            {output && (
              <span className="text-xs text-muted-foreground">
                {output.length} characters
              </span>
            )}
          </div>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="NANANANANANANAnanaNANANANANA"
            className="h-52 w-full resize-none rounded-xl border border-input bg-muted/50 p-4 text-base focus:outline-none font-mono text-sm leading-relaxed"
            aria-live="polite"
          />
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <Button
              onClick={() => output && copyToClipboard(output)}
              disabled={!output}
              size="lg"
              className="flex-1 sm:flex-initial gap-2 font-semibold shadow-sm"
              id="copy-nanana-btn"
            >
              <Copy className="h-4 w-4" />
              Copy Nanana
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDownload}
                disabled={!output}
                title="Download as .txt"
                aria-label="Download as text file"
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleShare}
                disabled={!output}
                title="Share text"
                aria-label="Share text"
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleClear}
                disabled={!inputText && !output}
                title="Clear all"
                aria-label="Clear all content"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pattern Style Selector & Options Card */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-6">
        <div>
          <h2 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            Choose Pattern Style
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Select how your repeating Nanana rhythm and capitalization is structured.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {styleOptions.map((opt) => {
              const isSelected = selectedStyle === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedQuickPick(null)
                    setSelectedStyle(opt.id)
                  }}
                  className={`flex flex-col items-start justify-between rounded-xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/10 shadow-sm ring-1 ring-primary"
                      : "border-border bg-background/50 hover:border-primary/40 hover:bg-accent/40"
                  }`}
                >
                  <div className="w-full">
                    <span className="font-semibold text-sm block mb-1 text-foreground">
                      {opt.label}
                    </span>
                    <span className="text-xs text-muted-foreground block line-clamp-2">
                      {opt.description}
                    </span>
                  </div>
                  <span className="mt-3 font-mono text-[11px] text-primary/80 bg-primary/5 px-2 py-0.5 rounded truncate max-w-full">
                    {opt.sample}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Custom Pattern input if custom style is selected */}
        {selectedStyle === "custom" && (
          <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 space-y-2">
            <label htmlFor="custom-pattern" className="block text-sm font-medium">
              Custom Token / Word
            </label>
            <div className="flex gap-2">
              <input
                id="custom-pattern"
                type="text"
                value={customPattern}
                onChange={(e) => {
                  setSelectedQuickPick(null)
                  setCustomPattern(e.target.value)
                }}
                placeholder="e.g. NA, NANA, BATMAN, LA"
                className="max-w-xs rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <span className="text-xs text-muted-foreground flex items-center">
                This word will be repeated according to your selected length.
              </span>
            </div>
          </div>
        )}

        {/* Nanana Length Controls */}
        <div className="pt-4 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <label htmlFor="length-controls" className="block text-sm font-medium">
                Nanana Length
              </label>
              <p className="text-xs text-muted-foreground">
                Set how many repeats/syllables to generate in your output text.
              </p>
            </div>

            <div id="length-controls" className="flex flex-wrap items-center gap-2">
              {lengthPresets.map((preset) => {
                const isSelected = selectedLengthPreset === preset.value
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      setSelectedQuickPick(null)
                      setSelectedLengthPreset(preset.value)
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                      isSelected
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/40 text-foreground"
                    }`}
                  >
                    {preset.label}
                  </button>
                )
              })}

              {selectedLengthPreset === -1 && (
                <div className="flex items-center gap-2 ml-1">
                  <input
                    type="number"
                    min="1"
                    max="5000"
                    value={customLength}
                    onChange={(e) => {
                      setSelectedQuickPick(null)
                      setCustomLength(Math.max(1, Math.min(5000, parseInt(e.target.value) || 1)))
                    }}
                    className="w-24 rounded-lg border border-input bg-background px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    aria-label="Custom repeat length"
                  />
                  <span className="text-xs text-muted-foreground">repeats</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
