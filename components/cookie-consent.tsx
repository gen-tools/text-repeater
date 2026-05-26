"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie, Shield } from "lucide-react"

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
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-in fade-in duration-300" />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background border border-border rounded-2xl shadow-2xl max-w-lg w-full animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Privacy Choices</h2>
            </div>
            <button
              onClick={handleReject}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {!showSettings ? (
              <>
                <p className="text-muted-foreground leading-relaxed">
                  We use analytics and advertising partners such as Google and Infolinks. 
                  You can allow them, reject them, or opt out of sale/sharing for advertising.
                </p>
                <div className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-muted/50">
                  <Shield className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Your privacy choices are stored locally and respected across all pages.
                  </span>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Customize your cookie preferences below:
                </p>
                
                {/* Functional Cookies */}
                <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div>
                    <h3 className="font-medium text-foreground">Functional Cookies</h3>
                    <p className="text-sm text-muted-foreground">Required for the site to work properly</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Always On
                  </div>
                </div>

                {/* Analytics Cookies */}
                <label className="flex items-center justify-between p-4 rounded-lg border border-border cursor-pointer hover:bg-muted/30 transition-colors">
                  <div>
                    <h3 className="font-medium text-foreground">Analytics Cookies</h3>
                    <p className="text-sm text-muted-foreground">Help us understand how visitors use our site</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                    className="h-5 w-5 rounded border-border text-primary focus:ring-primary"
                  />
                </label>

                {/* Advertising Cookies */}
                <label className="flex items-center justify-between p-4 rounded-lg border border-border cursor-pointer hover:bg-muted/30 transition-colors">
                  <div>
                    <h3 className="font-medium text-foreground">Advertising Cookies</h3>
                    <p className="text-sm text-muted-foreground">Used for personalized ads and tracking</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.advertising}
                    onChange={(e) => setSettings({ ...settings, advertising: e.target.checked })}
                    className="h-5 w-5 rounded border-border text-primary focus:ring-primary"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 pt-0">
            {!showSettings ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="flex-1 border-border hover:bg-muted"
                >
                  Reject All
                </Button>
                <Button
                  onClick={() => setShowSettings(true)}
                  variant="secondary"
                  className="flex-1 bg-violet-600 hover:bg-violet-700 text-white"
                >
                  Settings
                </Button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => setShowSettings(false)}
                  variant="outline"
                  className="flex-1 border-border hover:bg-muted"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSaveSettings}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Save Preferences
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
