export type NananaStyle = "classic" | "mixed" | "spaced" | "random" | "custom"

export interface NananaOptions {
  text: string
  style: NananaStyle
  length: number
  customPattern?: string
}

/**
 * Future schema representation for crowdsourced / verified translation observations.
 */
export interface NananaObservation {
  pattern: string
  inputLength: number
  style: NananaStyle
  platform: "Instagram" | "TikTok" | "Twitter" | "Other"
  observedTranslation?: string
  verified: boolean
}

/**
 * Deterministic hash function (DJB2 variant) to convert string to a 32-bit positive integer seed.
 */
function hashString(str: string): number {
  let hash = 5381
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i)
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

/**
 * Simple deterministic pseudo-random number generator (Mulberry32).
 */
function createPRNG(seed: number) {
  let s = seed
  return function () {
    s |= 0
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Generate deterministic Nanana-style text based on input phrase, chosen style, and length.
 */
export function generateNananaText(options: NananaOptions): string {
  const { text, style, length, customPattern = "NA" } = options
  const cleanInput = text.trim()

  // If no input, return empty string
  if (!cleanInput) {
    return ""
  }

  const seed = hashString(cleanInput)
  const rng = createPRNG(seed)
  const inputChars = Array.from(cleanInput)
  const targetRepeats = Math.max(1, Math.min(5000, length))

  switch (style) {
    case "classic": {
      // All uppercase standard NANANA
      // E.g. "NANANANANANANANANA..."
      return "NA".repeat(targetRepeats)
    }

    case "mixed": {
      // Deterministically varied casing driven by input character codes
      const variations = ["NA", "na", "Na", "nA", "NANA", "nana", "NaNa", "nAnA"]
      let result = ""
      for (let i = 0; i < targetRepeats; i++) {
        const charCode = inputChars[i % inputChars.length]?.charCodeAt(0) || 65
        const variationIndex = (charCode + i * 7 + (seed % 11)) % variations.length
        result += variations[variationIndex]
      }
      return result
    }

    case "spaced": {
      // Rhythmic spaced blocks, structured like phrases
      // E.g. "NA NANA NANANA NA NANA"
      const chunks: string[] = []
      let currentRepeat = 0
      while (currentRepeat < targetRepeats) {
        // Group size 1 to 4 "NA"s per word block
        const blockSize = Math.min(targetRepeats - currentRepeat, 1 + Math.floor(rng() * 3))
        const isUpper = rng() > 0.3
        const blockText = isUpper ? "NA".repeat(blockSize) : "Na".repeat(blockSize)
        chunks.push(blockText)
        currentRepeat += blockSize
      }
      return chunks.join(" ")
    }

    case "random": {
      // Playful varied casing & syllable chunking
      const cases = [
        "NA", "Na", "na", "nA", 
        "NANA", "NaNa", "nana", "nAnA",
        "NANANA", "NaNana", "nanana"
      ]
      let result = ""
      let count = 0
      while (count < targetRepeats) {
        const pick = cases[Math.floor(rng() * cases.length)]
        const syllableUnits = Math.max(1, Math.round(pick.length / 2))
        
        if (count + syllableUnits > targetRepeats) {
          result += "NA".repeat(targetRepeats - count)
          break
        }
        
        result += pick
        count += syllableUnits
        
        // Add occasional space or rhythm break
        if (rng() > 0.75 && count < targetRepeats) {
          result += " "
        }
      }
      return result.trim()
    }

    case "custom": {
      // Custom pattern token
      const baseToken = customPattern.trim() || "NA"
      const chunks: string[] = []
      for (let i = 0; i < targetRepeats; i++) {
        chunks.push(baseToken)
      }
      return chunks.join("")
    }

    default:
      return "NA".repeat(targetRepeats)
  }
}
