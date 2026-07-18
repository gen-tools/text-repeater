import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Mail, MessageSquare, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - TextRepeater",
  description: "Get in touch with the TextRepeater team. We welcome your questions, suggestions, and feedback about our text manipulation tools.",
  alternates: {
    canonical: "https://text-repeater0.vercel.app/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Have questions or feedback? We would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8">
                <Mail className="mb-4 h-10 w-10 text-primary" />
                <h2 className="mb-2 text-xl font-semibold">Email Us</h2>
                <p className="mb-4 text-muted-foreground">
                  For general inquiries, support, or feedback
                </p>
                <a
                  href="mailto:sa0663787@gmail.com"
                  className="block font-medium text-primary hover:underline break-all"
                >
                  sa0663787@gmail.com
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <h2 className="mb-2 text-xl font-semibold">Admin Support</h2>
                <p className="mb-4 text-muted-foreground">
                  Direct administrator support for urgent queries
                </p>
                <a
                  href="mailto:sa0663787@gmail.com"
                  className="block font-medium text-primary hover:underline break-all"
                >
                  sa0663787@gmail.com
                </a>
              </div>

              <div className="rounded-xl border border-border bg-card p-8">
                <MessageSquare className="mb-4 h-10 w-10 text-primary" />
                <h2 className="mb-2 text-xl font-semibold">Feature Requests</h2>
                <p className="mb-4 text-muted-foreground">
                  Have an idea for a new tool or feature?
                </p>
                <a
                  href="mailto:sa0663787@gmail.com"
                  className="block font-medium text-primary hover:underline break-all"
                >
                  sa0663787@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-12 rounded-xl border border-border bg-muted/30 p-8 max-w-3xl mx-auto">
              <h2 className="mb-6 text-2xl font-bold">Frequently Asked Topics</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Bug Reports</h3>
                  <p className="text-muted-foreground">
                    Found a bug? Please email us with details about the issue, including what browser 
                    and device you were using. Screenshots are always helpful.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Feature Suggestions</h3>
                  <p className="text-muted-foreground">
                    We are always looking to improve. If you have an idea for a new tool or enhancement 
                    to an existing one, we want to hear about it.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Business Inquiries</h3>
                  <p className="text-muted-foreground">
                    For partnership opportunities, advertising, or business-related questions, 
                    please reach out via email with details about your proposal.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                We typically respond to inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
