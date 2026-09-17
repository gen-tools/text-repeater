import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Highly optimized native string repeater.
 * Avoids creating intermediate arrays in the JavaScript engine heap,
 * saving memory and eliminating GC pauses on mobile devices.
 */
export function repeatText(text: string, count: number, sep: string = ""): string {
  if (count <= 0 || !text) return ""
  if (count === 1) return text
  if (sep === "") return text.repeat(count)
  return (text + sep).repeat(count - 1) + text
}

/**
 * Fast newline counter using character codes without creating array slices in memory.
 */
export function countLines(text: string): number {
  if (!text) return 0
  let lines = 1
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) === 10) lines++
  }
  return lines
}
