import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FileText, Scale, Terminal, AlertTriangle, Copyright, Cpu, ShieldAlert, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - TextRepeater",
  description: "TextRepeater terms of service. Read the terms and conditions for using our free text manipulation tools.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/terms",
  },
}

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileText className="h-6 w-6" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              Terms of Service
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Last updated: July 2026 • Please read these terms carefully before using our tools.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Quick Terms Summary Cards */}
          <div className="mb-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-semibold text-card-foreground">Free for Everyone</h3>
              <p className="text-sm text-muted-foreground">
                All tools on TextRepeater are 100% free to use for both personal and commercial purposes.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                <Copyright className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-semibold text-card-foreground">Your Input is Yours</h3>
              <p className="text-sm text-muted-foreground">
                You retain complete and absolute ownership of any text or input you generate or process using our platform.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-semibold text-card-foreground">No Heavy Scraping</h3>
              <p className="text-sm text-muted-foreground">
                We prohibit scraping, automated denial of service attacks, or attempting to overload our servers.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content Deep Dive */}
            <div className="lg:col-span-2 space-y-10 prose prose-neutral dark:prose-invert max-w-none">
              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">1.</span> Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or utilizing the TextRepeater website, you explicitly agree to comply with and be bound by these Terms of Service. If you disagree with or decline any clause of these terms, you are not authorized to use or access our online tools.
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">2.</span> Description of Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  TextRepeater provides free online web utilities for text formatting, repeating, manipulation, and aesthetic conversion. Key utilities include, but are not limited to:
                </p>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground mt-2 list-none pl-0">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Text multiplication & repeaters
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Emoji multiplication
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Multi-case converters
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Zalgo & Glitch Generators
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Unicode Fancy Text Generators
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Blank text and spacing generators
                  </li>
                </ul>
                <p className="text-muted-foreground text-sm mt-3">
                  All services run client-side. We retain the right to update, modify, or retire any tool at any time without notification.
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">3.</span> Acceptable Use Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to use TextRepeater responsibly. Specifically, you agree that you will not:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-2">
                  <li>Generate materials designed for spamming, harassment, or flooding other platforms.</li>
                  <li>Engage in malicious automated scraping or botting that degrades performance for other users.</li>
                  <li>Attempt to inject viruses, malware, or destructive payloads to disrupt our web infrastructure.</li>
                  <li>Utilize our tools to violate any applicable municipal, state, or federal laws.</li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">4.</span> Intellectual Property & Brand Assets
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The TextRepeater codebase, brand icons, structural layouts, designs, CSS styling, and proprietary features are owned by us and protected under international copyright and trademark protections. You are granted permission to use the text outputs generated by our tools freely, but you may not duplicate, package, resell, or frame our platform assets.
                </p>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">5.</span> Disclaimer of Warranties
                </h2>
                <div className="my-4 rounded-lg bg-amber-500/5 p-4 border border-amber-500/20 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground m-0">
                    <strong>&quot;As Is&quot; Disclaimer:</strong> The services provided by TextRepeater are offered &quot;as is&quot; and &quot;as available&quot; without any warranties of accuracy, performance, or reliability. We do not guarantee uninterrupted tool execution or 100% error-free outputs.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                  <span className="text-primary">6.</span> Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Under no circumstances will TextRepeater, its developers, or affiliates be liable for any special, incidental, punitive, or consequential damages resulting from the use, inability to use, or reliance on the utilities hosted on our platform.
                </p>
              </div>
            </div>

            {/* Sidebar Guidelines Panel */}
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="mb-4 text-lg font-bold flex items-center gap-2 text-foreground">
                  <ShieldAlert className="h-5 w-5 text-primary" /> Key Agreement
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  By accessing this website, you represent and warrant that you possess the full legal capability to enter into and abide by these conditions.
                </p>
                <div className="border-t border-border pt-4 text-xs text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>License</span>
                    <span className="font-semibold">Free & Open</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hosting Tier</span>
                    <span className="font-semibold">Secured (SSL)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                <Mail className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-bold text-foreground">Have Questions?</h3>
                <p className="mb-4 text-xs text-muted-foreground">
                  If you have any feedback or queries about our Terms of Service, please reach out to us at our admin email.
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
