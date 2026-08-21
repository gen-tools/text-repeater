import { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ShieldCheck, Lock, EyeOff, Cookie, Server, AlertCircle, Mail, Globe, Database, HelpCircle, FileText, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - MyTextRepeater",
  description: "Read the MyTextRepeater privacy policy to understand how your data is handled, our client-side text processing, analytics, cookies, and advertising disclosures.",
  alternates: {
    canonical: "https://mytextrepeater.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy - MyTextRepeater",
    description: "Read the MyTextRepeater privacy policy to understand how your data is handled, our client-side text processing, analytics, cookies, and advertising disclosures.",
    url: "https://mytextrepeater.com/privacy",
    type: "website",
    locale: "en_US",
    siteName: "My Text Repeater",
    images: [
      {
        url: "https://mytextrepeater.com/apple-icon.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - MyTextRepeater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - MyTextRepeater",
    description: "Read the MyTextRepeater privacy policy to understand how your data is handled, our client-side text processing, analytics, cookies, and advertising disclosures.",
    images: ["https://mytextrepeater.com/apple-icon.png"],
  },
}

export default function PrivacyPage() {
  return (
    <>
      {/* Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="privacy-header">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="privacy-title">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty" id="privacy-subtitle">
              Last updated: August 2026 • We believe in transparent data practices and client-side privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" id="privacy-content">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Quick Privacy Highlights */}
          <div className="mb-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-600 dark:text-green-400">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 font-bold text-foreground">Client-Side Processing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Text transformations happen in your browser memory. We do not store or transmit your entered text.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <EyeOff className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 font-bold text-foreground">No User Accounts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You do not need to register, log in, or provide personal identity or payment credentials to use our tools.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Cookie className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 font-bold text-foreground">Transparent Analytics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use standard web analytics and disclose all advertising practices clearly to maintain user trust.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            
            {/* Main Policy Clauses */}
            <div className="lg:col-span-2 space-y-10 text-foreground/90 leading-relaxed">
              
              {/* 1. Introduction */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">1.</span> Introduction
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Welcome to <strong>MyTextRepeater</strong> (<Link href="/" className="text-primary font-medium hover:underline">mytextrepeater.com</Link>). We respect your privacy and are committed to protecting it through transparent information practices.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  This Privacy Policy describes the types of information we may collect or that you may provide when you visit our website, how that information is used, and the choices available to you.
                </p>
              </div>

              {/* 2. Information We Do NOT Collect */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">2.</span> Information We Do NOT Collect
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our text manipulation utilities are engineered using client-side JavaScript architecture. This provides important privacy boundaries:
                </p>
                
                <div className="rounded-xl border border-border bg-card p-5 space-y-3">
                  <ul className="space-y-2.5 text-sm text-foreground/90 pl-1">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                      <span><strong>Your Input Text:</strong> Any words, emojis, sentences, or files you input into our tools (e.g. Text Repeater, Nanana Translator, Case Converter, Word Counter) are processed locally inside your web browser. They are not sent to our servers for processing, indexing, or storage.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                      <span><strong>Generated Output:</strong> The text generated or transformed by the tools stays in your browser memory until you copy, download, or navigate away.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                      <span><strong>Account or Financial Credentials:</strong> We do not offer user accounts, logins, passwords, subscriptions, or credit card payment processing.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Automatically Collected Technical Information */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">3.</span> Automatically Collected Information
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Like virtually all web applications, when you visit MyTextRepeater, standard technical information is automatically generated via web server logs and hosting infrastructure (such as Cloud Run / CDN routing). This may include:
                </p>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground pl-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Browser type and version
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Operating system
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Pages visited and timestamps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Referring website address
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  This server-level information is utilized solely to ensure website availability, diagnose server errors, and prevent malicious automated abuse.
                </p>
              </div>

              {/* 4. Analytics (Google Analytics Disclosure) */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">4.</span> Analytics (Google Analytics)
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We use <strong>Google Analytics</strong> (Google tag <code>gtag.js</code>) on production builds to understand aggregate audience trends, such as total visitor count, popular tool pages, average duration, device categories (mobile vs. desktop), and country-level geography.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Google Analytics collects data using cookies (such as <code>_ga</code> and <code>_ga_*</code>). This data is aggregated and does not identify individual visitors personally. To learn how Google uses data when you use partner sites, visit{" "}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    How Google uses information from sites or apps that use our services
                  </a>.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You can opt out of Google Analytics measurement across all websites by installing the official{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>
              </div>

              {/* 5. Cookies vs. Local Storage (Distinguished Accurately) */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">5.</span> Cookies and Local Storage
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We distinguish between <strong>HTTP Cookies</strong> and <strong>HTML5 Local Storage</strong> (localStorage):
                </p>

                <div className="space-y-3">
                  <div className="rounded-xl border border-border bg-card p-4 space-y-1.5">
                    <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                      <Cookie className="h-4 w-4 text-primary" />
                      HTTP Cookies
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      Cookies are small text files stored by your browser. We use cookies for analytics performance and, where applicable, for third-party advertising delivery. You can disable cookies at any time through your browser settings.
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-4 space-y-1.5">
                    <h3 className="font-semibold text-foreground text-sm flex items-center gap-2">
                      <Database className="h-4 w-4 text-primary" />
                      HTML5 Local Storage (localStorage)
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <code>localStorage</code> is client-side key-value storage stored only on your physical device. It is not transmitted over network headers with web requests. We strictly use localStorage for:
                    </p>
                    <ul className="list-disc pl-5 text-xs text-muted-foreground space-y-1">
                      <li><code>theme</code>: Remembering your Dark, Light, or System visual theme preference.</li>
                      <li><code>cookie-consent</code>: Storing your cookie banner choices so you are not prompted repeatedly.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 6. Advertising and Google AdSense Disclosures */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">6.</span> Advertising & Google AdSense
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  To keep all tools on MyTextRepeater free, we may display third-party advertisements served by advertising networks, including <strong>Google AdSense</strong>.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites on the internet. Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Users may opt out of personalized advertising by visiting:
                </p>
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1.5">
                  <li>
                    <a
                      href="https://adssettings.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      Google Ads Settings
                    </a> (to manage Google personalized ad preferences).
                  </li>
                  <li>
                    <a
                      href="https://www.aboutads.info/choices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      aboutads.info
                    </a> (to opt out of a third-party vendor&apos;s use of cookies for personalized advertising).
                  </li>
                </ul>
              </div>

              {/* 7. EEA / UK / Switzerland User Consent */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">7.</span> European & UK User Consent
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  For visitors located in the European Economic Area (EEA), United Kingdom (UK), and Switzerland, we comply with applicable requirements under the General Data Protection Regulation (GDPR) and Google&apos;s EU User Consent Policy.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Where required by law, we obtain user consent before setting non-essential cookies or serving personalized advertisements. You can modify or withdraw your preferences at any time via our on-site cookie settings interface or browser privacy controls.
                </p>
              </div>

              {/* 8. Third-Party Links & External Services */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">8.</span> Third-Party Links & External Services
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our website may contain links to external sites (such as social networks or reference documentation). We have no control over the content, privacy policies, or practices of third-party websites. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
              </div>

              {/* 9. Your Data Protection Rights */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">9.</span> Your Data Protection Rights
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Depending on your geographic location and applicable local data protection legislation (e.g. GDPR, UK GDPR, California Consumer Privacy Act / CCPA), you may have rights including:
                </p>
                <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
                  <li>The right to request access to the personal data we hold about you (if any).</li>
                  <li>The right to request correction or deletion of your personal data.</li>
                  <li>The right to object to or restrict processing of your personal data.</li>
                  <li>The right to withdraw previously given consent.</li>
                  <li>The right to opt out of the sale or sharing of personal data for cross-context behavioral advertising.</li>
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  Because we do not maintain user accounts or store user-generated text, we typically hold no identifiable user content. For inquiries regarding any data, please contact us.
                </p>
              </div>

              {/* 10. Children's Privacy */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">10.</span> Children&apos;s Privacy
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  MyTextRepeater is a general-audience web tool and is not directed at children under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can take appropriate measures.
                </p>
              </div>

              {/* 11. Policy Updates */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span className="text-primary font-mono text-xl">11.</span> Changes to This Privacy Policy
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our operational, legal, or regulatory practices. Any updates will be posted on this page with an updated &quot;Last updated&quot; date at the top of the policy.
                </p>
              </div>

            </div>

            {/* Sidebar Contact / Info Panel */}
            <div className="space-y-6">
              
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
                <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
                  <ShieldCheck className="h-5 w-5 text-primary" /> Privacy Summary
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  MyTextRepeater prioritizes client-side execution to ensure your text transformations remain on your device.
                </p>
                <div className="border-t border-border pt-3 text-xs text-muted-foreground space-y-2">
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span>Input Text Storage</span>
                    <strong className="text-green-600 dark:text-green-400">None (Browser Only)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/50">
                    <span>User Accounts</span>
                    <strong className="text-foreground">None</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Analytics</span>
                    <strong className="text-foreground">Google Analytics</strong>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center space-y-3">
                <Mail className="mx-auto h-8 w-8 text-primary" />
                <h3 className="font-bold text-foreground text-lg">Privacy Inquiries</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If you have questions about our data practices or wish to exercise your privacy rights:
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
                <p className="font-semibold text-foreground">Related Legal Pages:</p>
                <ul className="space-y-1">
                  <li>
                    <Link href="/terms" className="text-primary hover:underline inline-flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5" /> Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-primary hover:underline inline-flex items-center gap-1">
                      <Globe className="h-3.5 w-3.5" /> About MyTextRepeater
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


