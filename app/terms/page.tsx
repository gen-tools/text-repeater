import { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FileText, ShieldAlert, CheckCircle, XCircle, Mail, Globe, ShieldCheck, Scale, Terminal, Copyright } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - MyTextRepeater",
  description: "Read the Terms of Service for MyTextRepeater to understand the guidelines, user rights, acceptable use, and terms governing our free text utilities.",
  alternates: {
    canonical: "https://mytextrepeater.com/terms",
  },
  openGraph: {
    title: "Terms of Service - MyTextRepeater",
    description: "Read the Terms of Service for MyTextRepeater to understand the guidelines, user rights, acceptable use, and terms governing our free text utilities.",
    url: "https://mytextrepeater.com/terms",
    type: "website",
    locale: "en_US",
    siteName: "My Text Repeater",
    images: [
      {
        url: "https://mytextrepeater.com/apple-icon.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service - MyTextRepeater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - MyTextRepeater",
    description: "Read the Terms of Service for MyTextRepeater to understand the guidelines, user rights, acceptable use, and terms governing our free text utilities.",
    images: ["https://mytextrepeater.com/apple-icon.png"],
  },
}

export default function TermsPage() {
  return (
    <>
      {/* Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="terms-header">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileText className="h-6 w-6" />
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="terms-title">
              Terms of Service
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty" id="terms-subtitle">
              Last updated: August 2026 • Please read these terms carefully before using our website.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" id="terms-content">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Quick Summary Cards */}
          <div className="mb-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-bold text-foreground">Free for Personal & Work</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All tools on MyTextRepeater are free to use without mandatory sign-ups or subscription fees.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Copyright className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-bold text-foreground">You Own Your Text</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You retain all rights in the text you enter. We claim no ownership over user input or generated output.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-bold text-foreground">Fair Usage Policy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We prohibit abusive bot scraping, intentional denial of service attacks, and unlawful spam distribution.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            
            {/* Main Terms Clauses */}
            <div className="lg:col-span-2 space-y-10 text-foreground/90 leading-relaxed">
              
              {/* 1. Acceptance of Terms */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">1.</span> Acceptance of Terms
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  By accessing or using <strong>MyTextRepeater</strong> (accessible at <Link href="/" className="text-primary font-medium hover:underline">mytextrepeater.com</Link>), you agree to be bound by these Terms of Service and our <Link href="/privacy" className="text-primary font-medium hover:underline">Privacy Policy</Link>. If you do not agree with any part of these terms, please discontinue use of the website immediately.
                </p>
              </div>

              {/* 2. Description of Service */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">2.</span> Description of Service
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  MyTextRepeater provides free, browser-based text utilities, including string repeaters, case converters, word and character counters, Unicode text style generators, and social trend translation tools. These tools are made available for personal, educational, and commercial text generation purposes without mandatory user registration.
                </p>
              </div>

              {/* 3. User Content & Intellectual Property Balance */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">3.</span> User Content & Intellectual Property
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We maintain a clear separation between your content and our website assets:
                </p>

                <div className="rounded-xl border border-border bg-card p-5 space-y-3 text-sm">
                  <div className="space-y-1.5">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0" />
                      Your Input & Generated Text
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You retain all preexisting ownership and rights in the text you enter into our tools. MyTextRepeater claims <strong>no ownership, license, or copyright</strong> over the text you generate or transform. You are free to copy, publish, or use the generated output for any lawful personal or commercial purpose.
                    </p>
                  </div>

                  <div className="border-t border-border pt-3 space-y-1.5">
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                      Website Intellectual Property
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The MyTextRepeater brand, website name, custom visual designs, logos, software source code, styling, and editorial articles are the intellectual property of MyTextRepeater / Sheztech and are protected by applicable intellectual property and copyright laws.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Acceptable Use & Prohibited Activities */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">4.</span> Acceptable Use & Prohibited Activities
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  You agree to use our tools responsibly and in compliance with all applicable local, national, and international laws. Specifically, you agree NOT to:
                </p>

                <ul className="space-y-2 text-sm text-muted-foreground pl-1">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Use the tools to generate unlawful, defamatory, harassing, or fraudulent spam messages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Attempt to disrupt, compromise, or perform denial-of-service (DoS) attacks against our hosting infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>Use automated scrapers, bots, or scripts that impair website availability or bypass security safeguards.</span>
                  </li>
                </ul>
              </div>

              {/* 5. Third-Party Links & Advertising */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">5.</span> Third-Party Links & Advertising
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our website may display advertisements served by third-party ad networks (such as Google AdSense) or contain links to external web resources. We do not endorse, oversee, or assume responsibility for the content, privacy policies, or business practices of third-party advertisers or websites. Interacting with third-party links is at your own risk.
                </p>
              </div>

              {/* 6. Service Availability & Modifications */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">6.</span> Service Availability & Modifications
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We strive to maintain continuous uptime and high performance. However, we reserve the right to modify, suspend, or discontinue any feature or tool at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or interruption of the service.
                </p>
              </div>

              {/* 7. Disclaimer of Warranties */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">7.</span> Disclaimer of Warranties
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  The website and tools are provided on an <strong>&quot;AS IS&quot;</strong> and <strong>&quot;AS AVAILABLE&quot;</strong> basis without warranties of any kind, whether express, statutory, or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  While our algorithms are designed to provide accurate text manipulations, we do not warrant that results will be entirely error-free or that the website will meet all specific user expectations.
                </p>
              </div>

              {/* 8. Limitation of Liability */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">8.</span> Limitation of Liability
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by applicable law, MyTextRepeater, its operators, developers, and affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, the website or generated outputs.
                </p>
              </div>

              {/* 9. Changes to Terms */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">9.</span> Changes to Terms
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We may revise these Terms of Service periodically. Any modifications will be posted on this page with the updated revision date. Continued use of the website following changes constitutes your agreement to the modified terms.
                </p>
              </div>

            </div>

            {/* Sidebar Overview */}
            <div className="space-y-6">
              
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
                  <FileText className="h-5 w-5 text-primary" /> Key Takeaways
                </h3>
                <div className="text-xs sm:text-sm text-muted-foreground space-y-2.5 pt-1">
                  <p className="leading-relaxed">
                    • <strong>Your Text:</strong> You own the text you input and generate.
                  </p>
                  <p className="leading-relaxed">
                    • <strong>Free to Use:</strong> No account, subscription, or payment needed.
                  </p>
                  <p className="leading-relaxed">
                    • <strong>Fair Use:</strong> Please do not use our tools for spamming or malicious attacks.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center space-y-3">
                <Mail className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-bold text-foreground text-lg">Questions on Terms?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If you need clarification regarding our Terms of Service or permitted uses:
                </p>
                <a
                  href="mailto:contact@mytextrepeater.com"
                  className="block text-sm font-semibold text-primary hover:underline break-all"
                >
                  contact@mytextrepeater.com
                </a>
                <div className="text-xs text-muted-foreground space-y-0.5 pt-1">
                  <div>Admin: <a href="mailto:shahazaibseo038@gmail.com" className="hover:underline text-foreground">shahazaibseo038@gmail.com</a></div>
                  <div>Alternate: <a href="mailto:sa0663787@gmail.com" className="hover:underline text-foreground">sa0663787@gmail.com</a></div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted/20 p-5 text-xs text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground">Related Information:</p>
                <ul className="space-y-1">
                  <li>
                    <Link href="/privacy" className="text-primary hover:underline inline-flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5" /> Privacy & Data Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-primary hover:underline inline-flex items-center gap-1">
                      <Globe className="h-3.5 w-3.5" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-primary hover:underline inline-flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5" /> Contact Support
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

