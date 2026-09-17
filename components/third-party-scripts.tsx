"use client"

import * as React from "react"

/**
 * Intelligent Third-Party Scripts Loader
 * 
 * Defers loading heavy third-party marketing & advertising tags (Google Analytics, Google AdSense)
 * until the first user interaction (touchstart, pointerdown, scroll, keydown, mousemove) or
 * until the browser has completed its critical initial rendering (fallback idle timer).
 * 
 * This protects Core Web Vitals (FCP, LCP, TBT, Speed Index) on mobile devices from
 * multi-second JavaScript evaluation stalls and network contention while ensuring 100%
 * compatibility with Google AdSense and Google Analytics for active visitors.
 */
export function ThirdPartyScripts() {
  React.useEffect(() => {
    let scriptsLoaded = false

    const loadScripts = () => {
      if (scriptsLoaded) return
      scriptsLoaded = true

      // Clean up event listeners immediately
      cleanupListeners()

      // Load Google Analytics 4
      if (!document.getElementById("google-analytics-script")) {
        const gaScript = document.createElement("script")
        gaScript.id = "google-analytics-script"
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-F7V35W7MQV"
        gaScript.async = true
        document.head.appendChild(gaScript)
      }

      // Load Google AdSense
      if (!document.getElementById("google-adsense-script")) {
        const adsScript = document.createElement("script")
        adsScript.id = "google-adsense-script"
        adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4975102983560437"
        adsScript.async = true
        adsScript.crossOrigin = "anonymous"
        document.head.appendChild(adsScript)
      }
    }

    // Trigger on intentional user interactions (touch, click, typing, wheel scroll)
    const events = ["touchstart", "pointerdown", "keydown", "wheel", "scroll"]

    const cleanupListeners = () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, loadScripts, { capture: true } as EventListenerOptions)
      })
    }

    events.forEach((evt) => {
      window.addEventListener(evt, loadScripts, { capture: true, once: true, passive: true })
    })

    // Fallback: If no interaction occurs within 4.5 seconds, load scripts during idle time
    let idleHandle: number | undefined
    let fallbackTimeout: NodeJS.Timeout | undefined

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleHandle = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        () => {
          fallbackTimeout = setTimeout(loadScripts, 1000)
        },
        { timeout: 4500 }
      )
    } else {
      fallbackTimeout = setTimeout(loadScripts, 4500)
    }

    return () => {
      cleanupListeners()
      if (idleHandle && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleHandle)
      }
      if (fallbackTimeout) {
        clearTimeout(fallbackTimeout)
      }
    }
  }, [])

  return null
}

