"use client"

import * as React from "react"

/**
 * Intelligent Third-Party Scripts Loader
 * Loads heavy third-party marketing & advertising tags (Google Analytics, Google AdSense)
 * strictly upon user interaction (pointerdown, scroll, touchstart, keydown) or after an idle timeout.
 * 
 * This protects Total Blocking Time (TBT), First Input Delay / INP, and Speed Index from
 * multi-second JavaScript evaluation stalls and forced synchronous layout reflows on both
 * mobile devices and desktop computers.
 */
export function ThirdPartyScripts() {
  // Google Analytics & Google AdSense scripts are declared declaratively in app/layout.tsx
  // to eliminate duplicate script initialization, prevent React DOM removeChild/appendChild race conditions,
  // and ensure immediate page_view dispatch.
  return null
}
