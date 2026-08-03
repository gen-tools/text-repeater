"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyToastProps {
  show: boolean
  message?: string
}

export function CopyToast({ show, message = "Copied to clipboard!" }: CopyToastProps) {
  return (
    <div
      className={cn(
        "fixed bottom-20 left-1/2 z-50 -translate-x-1/2 transform rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition-all duration-300",
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
      role="status"
      aria-live="polite"
    >
      <span className="flex items-center gap-2">
        <Check className="h-4 w-4" />
        {message}
      </span>
    </div>
  )
}

export function useCopyToast() {
  const [showToast, setShowToast] = React.useState(false)

  const copyToClipboard = React.useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2000)
      
      // Save to history in localStorage
      const history = JSON.parse(localStorage.getItem("copy-history") || "[]")
      const newHistory = [
        { text: text.slice(0, 100), timestamp: Date.now() },
        ...history.slice(0, 9),
      ]
      localStorage.setItem("copy-history", JSON.stringify(newHistory))
      
      return true
    } catch {
      return false
    }
  }, [])

  return { showToast, copyToClipboard }
}
