"use client"

import * as React from "react"
import { Copy, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"

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
  const [inputText, setInputText] = React.useState("")
  const deferredInputText = React.useDeferredValue(inputText)
  const { showToast, copyToClipboard } = useCopyToast()

  const handleClear = React.useCallback(() => {
    setInputText("")
  }, [])

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <label htmlFor="input-text" className="block text-sm font-medium">
          Enter your text
        </label>
        <textarea
          id="input-text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type text to transform..."
          className="h-32 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <Button
          onClick={handleClear}
          variant="outline"
          className="rounded-lg"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>

      {/* Font Styles Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Choose a style and copy:</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fontStyles.map((style) => {
            const transformed = deferredInputText ? style.transform(deferredInputText) : ""
            return (
              <div
                key={style.name}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="mb-2 text-sm font-medium text-muted-foreground">
                  {style.name}
                </div>
                <div className="mb-3 min-h-[2rem] break-all text-lg">
                  {transformed || <span className="text-muted-foreground/50">Preview...</span>}
                </div>
                <Button
                  onClick={() => copyToClipboard(transformed)}
                  disabled={!transformed}
                  variant="outline"
                  size="sm"
                  className="w-full rounded-lg"
                >
                  <Copy className="mr-2 h-3 w-3" />
                  Copy
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
