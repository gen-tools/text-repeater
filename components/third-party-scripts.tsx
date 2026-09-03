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
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return
    }

    let loaded = false

    const loadScripts = () => {
      if (loaded) return
      loaded = true

      // Remove listeners
      INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, onUserInteraction)
      })

      // Load Google Analytics gtag.js
      const gaScript = document.createElement("script")
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-F7V35W7MQV"
      gaScript.async = true
      document.head.appendChild(gaScript)
    }

    const onUserInteraction = () => {
      loadScripts()
    }

    const INTERACTION_EVENTS: (keyof WindowEventMap)[] = [
      "scroll",
      "pointerdown",
      "touchstart",
      "keydown",
    ]

    // Listen for first interaction
    INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, onUserInteraction, {
        passive: true,
        once: true,
      })
    })

    // Fallback: If user stays on the page without interacting, load after 4.5s idle window
    const idleTimer = setTimeout(() => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => loadScripts(), { timeout: 2000 })
      } else {
        loadScripts()
      }
    }, 4500)

    return () => {
      clearTimeout(idleTimer)
      INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, onUserInteraction)
      })
    }
  }, [])

  return null
}
