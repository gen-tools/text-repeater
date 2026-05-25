import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Privacy Policy - TextRepeater",
  description: "TextRepeater privacy policy. Learn how we handle your data and protect your privacy when using our text manipulation tools.",
  alternates: {
    canonical: "https://textrepeater.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
            <h2>Introduction</h2>
            <p>
              At TextRepeater, we take your privacy seriously. This Privacy Policy explains how we 
              collect, use, and protect your information when you use our website and services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>
              Our text manipulation tools process text entirely in your browser. We do not collect, 
              store, or transmit any text you enter into our tools. Your text never leaves your device.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              We may automatically collect certain information when you visit our website, including:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>IP address (anonymized)</li>
            </ul>

            <h2>How We Use Information</h2>
            <p>
              We use the automatically collected information to:
            </p>
            <ul>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve our tools and user experience</li>
              <li>Detect and prevent technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Cookies and Local Storage</h2>
            <p>
              We use essential cookies for basic website functionality. We also use local storage 
              to save your preferences (such as dark mode settings) and copy history. This data 
              is stored only on your device and is not transmitted to our servers.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for analytics (such as Vercel Analytics) to understand 
              how our website is used. These services may collect anonymous usage data in accordance 
              with their own privacy policies.
            </p>

            <h2>Data Security</h2>
            <p>
              Since we do not collect or store your text data, there is no risk of your content 
              being compromised on our servers. All text processing happens locally in your browser.
            </p>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect 
              personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@textrepeater.com" className="text-primary">
                privacy@textrepeater.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
