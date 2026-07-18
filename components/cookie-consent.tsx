"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface CookieConsentProps {
  onAcceptAll?: () => void
  onReject?: () => void
  onSaveSettings?: (settings: CookieSettings) => void
}

interface CookieSettings {
  analytics: boolean
  advertising: boolean
  functional: boolean
}

export function CookieConsent({ onAcceptAll, onReject, onSaveSettings }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState<CookieSettings>({
    analytics: false,
    advertising: false,
    functional: true,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
    onAcceptAll?.()
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
    onReject?.()
  }

  const handleSaveSettings = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(settings))
    setIsVisible(false)
    onSaveSettings?.(settings)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-background border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto p-4 sm:p-6">
          {!showSettings ? (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground mb-1">Privacy choices</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We use analytics and advertising partners such as Google and Infolinks. 
                  You can allow them, reject them, or opt out of sale/sharing for advertising.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  onClick={handleAcceptAll}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4"
                >
                  Accept all
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="border-border hover:bg-muted font-medium px-4"
                >
                  Reject
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  className="bg-neutral-700 hover:bg-neutral-800 text-white font-medium px-4"
                >
                  Settings
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-foreground">Cookie Settings</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-sm text-primary hover:underline"
                >
                  Back
                </button>
              </div>
              
              <div className="grid gap-3 sm:grid-cols-3">
                {/* Functional Cookies */}
                <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30">
                  <div>
                    <h3 className="text-sm font-medium text-foreground">Functional</h3>
                    <p className="text-xs text-muted-foreground">Required</p>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">
                    Always On
                  </div>
                </div>

                {/* Analytics Cookies */}
                <label className="flex items-center justify-between p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/30 transition-colors">
                  <div>
                    <h3 className="text-sm font-medium text-foreground">Analytics</h3>
                    <p className="text-xs text-muted-foreground">Site usage data</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                </label>

                {/* Advertising Cookies */}
                <label className="flex items-center justify-between p-3 rounded-lg border border-border cursor-pointer hover:bg-muted/30 transition-colors">
                  <div>
                    <h3 className="text-sm font-medium text-foreground">Advertising</h3>
                    <p className="text-xs text-muted-foreground">Personalized ads</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.advertising}
                    onChange={(e) => setSettings({ ...settings, advertising: e.target.checked })}
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                </label>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleSaveSettings}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
