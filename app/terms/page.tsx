import { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Terms of Service - TextRepeater",
  description: "TextRepeater terms of service. Read the terms and conditions for using our free text manipulation tools.",
  alternates: {
    canonical: "https://textrepeater.com/terms",
  },
}

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance lg:text-5xl">
              Terms of Service
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
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using TextRepeater, you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, you may not access our services.
            </p>

            <h2>Description of Services</h2>
            <p>
              TextRepeater provides free online text manipulation tools, including but not limited to:
            </p>
            <ul>
              <li>Text repetition and multiplication</li>
              <li>Emoji repetition</li>
              <li>Case conversion</li>
              <li>Fancy text generation</li>
              <li>Zalgo text generation</li>
              <li>Blank text generation</li>
            </ul>
            <p>
              All tools are provided free of charge and process data locally in your browser.
            </p>

            <h2>Acceptable Use</h2>
            <p>You agree not to use our services to:</p>
            <ul>
              <li>Generate content that is illegal, harmful, or violates others&apos; rights</li>
              <li>Spam or flood any platforms with generated content</li>
              <li>Attempt to disrupt or overload our services</li>
              <li>Reverse engineer or copy our tools for commercial purposes</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              The content, features, and functionality of TextRepeater are owned by us and are 
              protected by copyright, trademark, and other intellectual property laws. You may use 
              the generated output from our tools for personal or commercial purposes, but you may 
              not copy, modify, or distribute our website or tools.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, 
              either express or implied. We do not guarantee that:
            </p>
            <ul>
              <li>The services will be uninterrupted or error-free</li>
              <li>The results from using the tools will be accurate</li>
              <li>The services will meet your specific requirements</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall TextRepeater be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising from your use of our services.
            </p>

            <h2>User Content</h2>
            <p>
              You retain all rights to any text you input into our tools. We do not claim any 
              ownership over your content. All text processing occurs in your browser, and we 
              do not have access to or store your text.
            </p>

            <h2>Service Modifications</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of our services 
              at any time without prior notice. We are not liable to you or any third party for 
              any modification, suspension, or discontinuation of services.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may revise these Terms at any time by updating this page. By continuing to use 
              our services after revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@textrepeater.com" className="text-primary">
                legal@textrepeater.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
