import { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Mail, MessageSquare, Bug, Sparkles, AlertCircle, ShieldCheck, FileText, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - MyTextRepeater",
  description: "Get in touch with the MyTextRepeater team for technical support, bug reports, feature suggestions, feedback, or business inquiries.",
  alternates: {
    canonical: "https://mytextrepeater.com/contact",
  },
  openGraph: {
    title: "Contact Us - MyTextRepeater",
    description: "Get in touch with the MyTextRepeater team for technical support, bug reports, feature suggestions, feedback, or business inquiries.",
    url: "https://mytextrepeater.com/contact",
    type: "website",
    locale: "en_US",
    siteName: "My Text Repeater",
    images: [
      {
        url: "https://mytextrepeater.com/apple-icon.png",
        width: 1200,
        height: 630,
        alt: "Contact Us - MyTextRepeater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - MyTextRepeater",
    description: "Get in touch with the MyTextRepeater team for technical support, bug reports, feature suggestions, feedback, or business inquiries.",
    images: ["https://mytextrepeater.com/apple-icon.png"],
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Header Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20" id="contact-header">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl" id="contact-title">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty" id="contact-subtitle">
              Have a question, discovered a bug, or want to suggest a new text tool? We welcome your feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" id="contact-content">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          
          {/* Contact Methods Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            
            {/* General & Support Inquiries */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">General Support</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  For general user questions, tool assistance, or standard inquiries:
                </p>
              </div>
              <div className="pt-2 border-t border-border/60">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Email Address</span>
                <a
                  href="mailto:contact@mytextrepeater.com"
                  className="font-semibold text-primary hover:underline break-all text-sm sm:text-base block"
                >
                  contact@mytextrepeater.com
                </a>
              </div>
            </div>

            {/* Direct Admin Email */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-3">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Administrator Email</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  For direct administrator contact, urgent website issues, and privacy notices:
                </p>
              </div>
              <div className="pt-2 border-t border-primary/20">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Direct Admin Email</span>
                <a
                  href="mailto:sa0663787@gmail.com"
                  className="font-semibold text-primary hover:underline break-all text-sm sm:text-base block"
                >
                  sa0663787@gmail.com
                </a>
              </div>
            </div>

            {/* Feature Suggestions & Ideas */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Feature Suggestions</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  Have an idea for a new text transformation or an enhancement?
                </p>
              </div>
              <div className="pt-2 border-t border-border/60">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Suggestions & Ideas</span>
                <a
                  href="mailto:contact@mytextrepeater.com?subject=Feature%20Suggestion%20-%20MyTextRepeater"
                  className="font-semibold text-primary hover:underline break-all text-sm sm:text-base block"
                >
                  contact@mytextrepeater.com
                </a>
              </div>
            </div>

          </div>

          {/* Reporting Guidelines & What to Include */}
          <div className="rounded-xl border border-border bg-muted/20 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-2 flex items-center gap-2">
                <Bug className="h-6 w-6 text-primary" />
                How to Report a Bug or Technical Issue
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Because all text transformations execute in your browser environment, bugs can sometimes be related to specific browser versions or device configurations. To help us diagnose and fix issues quickly, please include:
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-foreground/90">
              <li className="flex items-start gap-2.5 p-3 rounded-lg border border-border bg-background">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground font-semibold">The Tool URL:</strong>
                  <span className="text-muted-foreground block text-xs mt-0.5">Which specific tool was being used (e.g. /nanana-translator or /case-converter).</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg border border-border bg-background">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground font-semibold">Device & Browser:</strong>
                  <span className="text-muted-foreground block text-xs mt-0.5">Operating system (iOS, Android, Windows, macOS) and browser (Chrome, Safari, Firefox).</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg border border-border bg-background">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground font-semibold">Steps to Reproduce:</strong>
                  <span className="text-muted-foreground block text-xs mt-0.5">What settings or inputs triggered the unexpected result.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-lg border border-border bg-background">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground font-semibold">Screenshots (Optional):</strong>
                  <span className="text-muted-foreground block text-xs mt-0.5">Visual context or error messages if available.</span>
                </div>
              </li>
            </ul>

            {/* Privacy Caution on Support Messages */}
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-xs sm:text-sm text-foreground/90 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-amber-900 dark:text-amber-200">
                  Privacy Reminder:
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Please do not send passwords, personal identification numbers, payment credentials, or confidential personal text when submitting support queries or bug reports.
                </p>
              </div>
            </div>
          </div>

          {/* Response Expectations */}
          <div className="text-center space-y-2 py-4">
            <p className="text-sm text-muted-foreground">
              We review messages regularly and typically respond within <strong className="text-foreground">24 to 48 business hours</strong>.
            </p>
            <div className="flex justify-center items-center gap-4 text-xs text-muted-foreground pt-2">
              <Link href="/about" className="hover:text-primary transition-colors underline underline-offset-4">About Us</Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-primary transition-colors underline underline-offset-4">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-primary transition-colors underline underline-offset-4">Terms of Service</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

