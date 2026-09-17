"use client"

import * as React from "react"
import { Copy, Trash2, RotateCcw, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"
import { getStoredItem, setStoredItem } from "@/lib/indexed-db"

const DEFAULT_DEMO_TEXT = "Transform text into cool fancy fonts!"

const fontStyles: { name: string; transform: (text: string) => string }[] = [
  {
    name: "Bold",
    transform: (text) => text.split("").map(c => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D400 + c.charCodeAt(0) - 65)
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D41A + c.charCodeAt(0) - 97)
      return c
    }).join("")
  },
  {
    name: "Italic",
    transform: (text) => text.split("").map(c => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D434 + c.charCodeAt(0) - 65)
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D44E + c.charCodeAt(0) - 97)
      return c
    }).join("")
  },
  {
    name: "Bold Italic",
    transform: (text) => text.split("").map(c => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D468 + c.charCodeAt(0) - 65)
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D482 + c.charCodeAt(0) - 97)
      return c
    }).join("")
  },
  {
    name: "Script",
    transform: (text) => text.split("").map(c => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D49C + c.charCodeAt(0) - 65)
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D4B6 + c.charCodeAt(0) - 97)
      return c
    }).join("")
  },
  {
    name: "Fraktur",
    transform: (text) => text.split("").map(c => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D504 + c.charCodeAt(0) - 65)
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D51E + c.charCodeAt(0) - 97)
      return c
    }).join("")
  },
  {
    name: "Double-Struck",
    transform: (text) => text.split("").map(c => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D538 + c.charCodeAt(0) - 65)
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D552 + c.charCodeAt(0) - 97)
      return c
    }).join("")
  },
  {
    name: "Monospace",
    transform: (text) => text.split("").map(c => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1D670 + c.charCodeAt(0) - 65)
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x1D68A + c.charCodeAt(0) - 97)
      return c
    }).join("")
  },
  {
    name: "Circled",
    transform: (text) => text.split("").map(c => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x24B6 + c.charCodeAt(0) - 65)
      if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x24D0 + c.charCodeAt(0) - 97)
      return c
    }).join("")
  },
  {
    name: "Squared",
    transform: (text) => text.split("").map(c => {
      if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x1F130 + c.charCodeAt(0) - 65)
      return c
    }).join("")
  },
  {
    name: "Fullwidth",
    transform: (text) => text.split("").map(c => {
      if (c >= '!' && c <= '~') return String.fromCodePoint(0xFF01 + c.charCodeAt(0) - 33)
      return c
    }).join("")
  },
  {
    name: "Small Caps",
    transform: (text) => {
      const smallCaps: Record<string, string> = {
        a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ',
        i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ',
        q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x',
        y: 'ʏ', z: 'ᴢ'
      }
      return text.toLowerCase().split("").map(c => smallCaps[c] || c).join("")
    }
  },
  {
    name: "Upside Down",
    transform: (text) => {
      const upsideDown: Record<string, string> = {
        a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ',
        i: 'ᴉ', j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd',
        q: 'b', r: 'ɹ', s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x',
        y: 'ʎ', z: 'z', A: '∀', B: 'q', C: 'Ɔ', D: 'p', E: 'Ǝ', F: 'Ⅎ',
        G: 'פ', H: 'H', I: 'I', J: 'ſ', K: 'ʞ', L: '˥', M: 'W', N: 'N',
        O: 'O', P: 'Ԁ', Q: 'Q', R: 'ɹ', S: 'S', T: '┴', U: '∩', V: 'Λ',
        W: 'M', X: 'X', Y: '⅄', Z: 'Z', '?': '¿', '!': '¡', '.': '˙'
      }
      return text.split("").reverse().map(c => upsideDown[c] || c).join("")
    }
  },
]

export function FancyTextTool() {
  const [inputText, setInputText] = React.useState(DEFAULT_DEMO_TEXT)
  const [isLoadedFromDB, setIsLoadedFromDB] = React.useState(false)
  const [isSaved, setIsSaved] = React.useState(false)
  const deferredInputText = React.useDeferredValue(inputText)
  const { showToast, copyToClipboard } = useCopyToast()

  // Load from IndexedDB on mount
  React.useEffect(() => {
    let isMounted = true

    async function loadSavedData() {
      try {
        const saved = await getStoredItem<string>("fancy_text_input")
        if (!isMounted) return

        if (typeof saved === "string") {
          setInputText(saved)
        } else {
          setInputText(DEFAULT_DEMO_TEXT)
        }
      } catch (err) {
        console.error("Error reading fancy text from IndexedDB:", err)
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
        await setStoredItem("fancy_text_input", inputText)
        setIsSaved(true)
        const hideTimer = setTimeout(() => setIsSaved(false), 1500)
        return () => clearTimeout(hideTimer)
      } catch (err) {
        console.error("Failed to save fancy text to IndexedDB:", err)
      }
    }, 250)

    return () => clearTimeout(timer)
  }, [inputText, isLoadedFromDB])

  // Save on tab exit
  React.useEffect(() => {
    const handleSaveImmediately = () => {
      setStoredItem("fancy_text_input", inputText)
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
  }, [inputText])

  const handleClear = React.useCallback(() => {
    setInputText("")
    setStoredItem("fancy_text_input", "")
  }, [])

  const handleResetDemo = React.useCallback(() => {
    setInputText(DEFAULT_DEMO_TEXT)
    setStoredItem("fancy_text_input", DEFAULT_DEMO_TEXT)
  }, [])

  const transformedStyles = React.useMemo(() => {
    if (!deferredInputText) {
      return fontStyles.map((style) => ({ name: style.name, text: "" }))
    }
    return fontStyles.map((style) => ({
      name: style.name,
      text: style.transform(deferredInputText),
    }))
  }, [deferredInputText])

  return (
    <div className="space-y-6">
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
          placeholder="Type text to transform into fancy styles..."
          className="h-32 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              onClick={handleClear}
              variant="outline"
              size="sm"
              className="rounded-lg text-destructive hover:bg-destructive/10 hover:text-destructive"
            >
              <Trash2 className="mr-1.5 h-3.5 w-3.5" />
              Clear
            </Button>
            <Button
              onClick={handleResetDemo}
              variant="ghost"
              size="sm"
              className="rounded-lg text-xs text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="mr-1.5 h-3.5 w-3.5" />
              Reset to Example
            </Button>
          </div>
          <span className="text-xs text-muted-foreground">
            {inputText.length} characters &bull; Saved in IndexedDB
          </span>
        </div>
      </div>

      {/* Font Styles Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-foreground sm:text-sm">Choose a Style and Copy:</h2>
          <span className="text-xs text-muted-foreground">Click copy to use anywhere</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {transformedStyles.map((item) => {
            return (
              <div
                key={item.name}
                className="rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.name}
                  </div>
                  <div className="mb-4 min-h-[2.5rem] break-all text-lg font-medium leading-relaxed">
                    {item.text || <span className="text-muted-foreground/40 italic text-sm">Preview will appear here...</span>}
                  </div>
                </div>
                <Button
                  onClick={() => copyToClipboard(item.text)}
                  disabled={!item.text}
                  variant="outline"
                  size="sm"
                  className="w-full rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Copy className="mr-2 h-3.5 w-3.5" />
                  Copy {item.name}
                </Button>
              </div>
            )
          })}
        </div>
      </div>

      <CopyToast show={showToast} />
    </div>
  )
}
