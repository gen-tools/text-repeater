"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ReadingProgressBarProps {
  className?: string
}

export function ReadingProgressBar({ className }: ReadingProgressBarProps) {
  const barRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let ticking = false

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0
      const clientHeight = document.documentElement.clientHeight || window.innerHeight || 0
      const totalScrollable = scrollHeight - clientHeight

      if (barRef.current) {
        const ratio = totalScrollable > 0 ? Math.min(1, Math.max(0, scrollTop / totalScrollable)) : 0
        barRef.current.style.transform = `scaleX(${ratio})`
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div
      id="reading-progress-bar-container"
      role="progressbar"
      aria-label="Reading progress"
      className={cn(
        "fixed top-16 left-0 right-0 z-50 h-1 w-full bg-border/40 backdrop-blur-sm pointer-events-none",
        className
      )}
    >
      <div
        ref={barRef}
        id="reading-progress-bar-fill"
        className="h-full w-full bg-[#1BA3F4] origin-left will-change-transform shadow-[0_0_10px_rgba(27,163,244,0.7)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  )
}
