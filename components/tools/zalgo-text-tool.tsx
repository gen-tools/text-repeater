"use client"

import * as React from "react"
import { Copy, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"

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

export function ZalgoTextTool() {
  const [inputText, setInputText] = React.useState("")
  const [intensity, setIntensity] = React.useState<Intensity>("normal")
  const [output, setOutput] = React.useState("")
  const { showToast, copyToClipboard } = useCopyToast()

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

  React.useEffect(() => {
    if (!inputText) {
      setOutput("")
      return
    }
    setOutput(generateZalgo(inputText, intensity))
  }, [inputText, intensity, generateZalgo])

  const handleClear = () => {
    setInputText("")
    setOutput("")
  }

  return (
    <div className="space-y-6">
      {/* Intensity Selection */}
      <div className="rounded-xl border border-border bg-card p-6">
        <p className="mb-4 text-sm font-medium">Select zalgo intensity:</p>
        <div className="flex flex-wrap gap-3">
          {(["mini", "normal", "crazy"] as Intensity[]).map((level) => (
            <button
              key={level}
              onClick={() => setIntensity(level)}
              className={`rounded-lg border px-6 py-3 font-medium capitalize transition-all ${
                intensity === level
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <label htmlFor="input-text" className="block text-sm font-medium">
            Enter your text
          </label>
          <textarea
            id="input-text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type text to zalgo-ify..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-background p-4 text-base focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="output-text" className="block text-sm font-medium">
            Zalgo output
          </label>
          <textarea
            id="output-text"
            value={output}
            readOnly
            placeholder="Your zalgo text will appear here..."
            className="h-48 w-full resize-none rounded-xl border border-input bg-muted/50 p-4 text-base focus:outline-none"
          />
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
          Copy Zalgo Text
        </Button>
        <Button
          onClick={handleClear}
          variant="outline"
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background p-4 sm:hidden">
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
