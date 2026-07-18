import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ShieldCheck, Lock, EyeOff, Cookie, Server, AlertCircle, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - TextRepeater",
  description: "TextRepeater privacy policy. Learn how we handle your data and protect your privacy when using our text manipulation tools.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Last updated: July 2026 • Your privacy and data security are our absolute priorities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Quick Privacy Highlights */}
          <div className="mb-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-semibold text-card-foreground">100% Client-Side</h3>
              <p className="text-sm text-muted-foreground">
                All text repeats, case conversions, and modifications happen purely inside your web browser.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <EyeOff className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-semibold text-card-foreground">No Server Storage</h3>
              <p className="text-sm text-muted-foreground">
                We never collect, upload, store, or transmit any input data. Your texts never leave your device.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                <Cookie className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-semibold text-card-foreground">Anonymized Insights</h3>
              <p className="text-sm text-muted-foreground">
                We use minimal, privacy-friendly analytics and basic cookies only to analyze traffic and maintain performance.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content Deep Dive */}
            <div className="lg:col-span-2 space-y-10 prose prose-neutral dark:prose-invert max-w-none">
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">1.</span> Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At TextRepeater, we take your privacy seriously. This Privacy Policy explains how we 
                  collect, use, disclose, and safeguard your information when you use our web platform.
                  By visiting and using TextRepeater, you consent to the data practices described in this policy.
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">2.</span> How We Process Your Input
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in privacy by design. Our text manipulation tools (such as Text Repeater, Zalgo Generator, Case Converter, Emoji Repeater) are constructed using pure client-side technologies. 
                </p>
                <div className="my-4 rounded-lg bg-muted/40 p-4 border border-border flex items-start gap-3">
                  <Server className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground m-0">
                    <strong>Zero Transfer Architecture:</strong> None of the text strings or scripts you enter are transferred or sent to our servers. Processing is done instantly via local JavaScript executing in your web browser environment.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">3.</span> Automatically Collected Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To keep TextRepeater fast, robust, and accessible, we automatically collect specific aggregate, non-personal browser data when you visit. This includes:
                </p>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground mt-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Browser Type and Version
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Device Operating System
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Visited Pages and Timestamps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Anonymized IP addresses
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">4.</span> Cookies and Local Storage
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We utilize lightweight cookie files and standard Local Storage to elevate your user experience. Local storage is strictly used on your machine to save configurations such as:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1">
                  <li>Your preferred UI theme (Light vs. Dark Mode)</li>
                  <li>Locally generated tool configurations and settings</li>
                  <li>Local application history for easy retrieval</li>
                </ul>
                <p className="text-muted-foreground text-sm mt-3">
                  You retain the absolute authority to block or wipe cookies and local storage configurations using your browser settings.
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">5.</span> Third-Party Service Providers
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use verified web analytics partners (such as Vercel Analytics) to track high-level visitor metrics. These analytical services record strictly non-identifiable usage stats and session flow characteristics in accordance with their respective privacy parameters.
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">6.</span> Children&apos;s Privacy protection
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are general-audience tools and are not intentionally designed for or directed at children under the age of 13. We do not deliberately acquire, seek, or hold any personal data from minor children.
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">7.</span> Policy Modifications
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to revise this Privacy Policy at our discretion. Any structural modifications will be accompanied by an update to the &quot;Last updated&quot; tag at the top of this documentation page.
                </p>
              </div>
            </div>

            {/* Sidebar Contact / Info Panel */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="mb-4 text-lg font-bold flex items-center gap-2 text-foreground">
                  <AlertCircle className="h-5 w-5 text-primary" /> Safe & Private
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  TextRepeater is engineered to prioritize client anonymity. We believe that your data belongs entirely to you.
                </p>
                <div className="border-t border-border pt-4 text-xs text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>Host Status</span>
                    <span className="font-semibold text-green-500">Protected</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing</span>
                    <span className="font-semibold">Local (Browser)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                <Mail className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-bold text-foreground">Privacy Queries?</h3>
                <p className="mb-4 text-xs text-muted-foreground">
                  If you have any questions or data concerns regarding our privacy guidelines, get in touch with our team directly.
                </p>
                <a
                  href="mailto:sa0663787@gmail.com"
                  className="block text-sm font-semibold text-primary hover:underline break-all"
                >
                  sa0663787@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

