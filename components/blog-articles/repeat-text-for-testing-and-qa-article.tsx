import Link from "next/link"
import { CheckCircle2, ArrowRight, Table, Layers, FileText, HelpCircle, Code2, ShieldAlert, Cpu } from "lucide-react"

export function RepeatTextForTestingAndQaArticle() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can repeated text replace randomized mock data in QA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Repeated text is deterministic and designed for boundary-value and overflow testing, whereas randomized libraries test diverse input variations.",
        },
      },
      {
        "@type": "Question",
        name: "How do I test a 500-character boundary in a form field?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generate three test strings: 499 characters (limit − 1), 500 characters (exact limit), and 501 characters (limit + 1) to test acceptance, ceiling, and rejection.",
        },
      },
      {
        "@type": "Question",
        name: "Does an online text repeater send HTTP requests or run load tests?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The tool generates raw test strings in your browser for you to copy; dedicated test runners like Postman or k6 must dispatch requests.",
        },
      },
      {
        "@type": "Question",
        name: "Why does a database reject a string that fits the character counter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Databases frequently enforce byte limits rather than character lengths. Multi-byte UTF-8 characters like emojis take up to 4 bytes each.",
        },
      },
      {
        "@type": "Question",
        name: "How do I generate multiline test strings for textarea inputs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Select the Line Break separator in the tool. Each repetition is placed on its own line using an ASCII line feed character.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate the exact output length before generating?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the formula: (text length × count) + (separator length × (count − 1)). With None as the separator, multiply text length by count directly.",
        },
      },
    ],
  }

  return (
    <div className="space-y-8 text-foreground/90">
      {/* FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Quick Answer Callout */}
      <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-3">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <CheckCircle2 className="h-5 w-5" />
          <span>Quick Answer: Deterministic Text for Boundary Testing</span>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-foreground">
          To repeat text for QA testing, use a deterministic repeater to generate exact-length payloads for boundary value analysis (BVA). Enter your seed string, set the exact repetition count, and choose your separator (None, Space, or Line Break). Testing three specific points—<strong>limit minus 1</strong>, <strong>exact limit</strong>, and <strong>limit plus 1</strong>—validates field validation, database column ceilings, and UI layout containment.
        </p>
      </div>

      {/* Overview & Contextual Link */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed">
          Quality assurance engineers require repeatable test cases. When verifying whether an input field truncates user data, whether a database rejects an oversized payload, or whether an unbroken string breaks a CSS grid container, randomized lorem ipsum text introduces unnecessary variables.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          With <Link href="/" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">a free browser-based text repeater</Link>, testers can create exact-length strings up to 10,000 repetitions directly in the browser, inspecting live character metrics and copying payloads directly to the clipboard or exporting them as plain text files.
        </p>
      </section>

      {/* Section 1: Why Deterministic Test Data Matters */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Cpu className="h-6 w-6 text-primary" />
          Why Deterministic Text Matters for Quality Assurance
        </h2>
        <p className="text-base leading-relaxed">
          Deterministic test data produces the identical output for every execution: the same string, repeated the same number of times with the same delimiter, yields an exact, mathematical character count and byte footprint every time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h3 className="font-semibold text-foreground text-sm">Reproducible Bug Reports</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              When a defect ticket states &quot;field crashed on 501 characters,&quot; developers can recreate the exact payload instantly without guessing what random characters were used.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h3 className="font-semibold text-foreground text-sm">Automated Assertions</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              End-to-end assertions in Playwright or Cypress can assert exact string lengths returned by API endpoints and UI elements without regex approximations.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h3 className="font-semibold text-foreground text-sm">Zero Test Flakiness</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Random test data can intermittently introduce unsupported punctuation or unexpected encoding, causing intermittent test failures unrelated to application code.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Boundary Value Analysis (BVA) */}
      <section className="space-y-5 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Layers className="h-6 w-6 text-primary" />
          Boundary Value Analysis: Testing Limit − 1, Limit, and Limit + 1
        </h2>
        <p className="text-base leading-relaxed">
          Boundary value analysis is a core black-box test design technique based on the empirical reality that software faults cluster at input boundaries rather than in the center of acceptable ranges.
        </p>
        <p className="text-base leading-relaxed">
          Consider a standard <strong>500-character description or user review field</strong>. Rather than testing an arbitrary string of 200 characters, thorough test coverage requires testing three distinct boundary conditions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                Limit − 1 (499 Chars)
              </span>
              <span className="text-xs text-muted-foreground">Valid Input</span>
            </div>
            <h3 className="font-semibold text-base text-foreground">One Below Maximum</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Verify that the form accepts the string without error, saves the complete payload without silent truncation, and increments character counters accurately.
            </p>
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-700 dark:text-blue-300">
                Exact Limit (500 Chars)
              </span>
              <span className="text-xs text-muted-foreground">Boundary Edge</span>
            </div>
            <h3 className="font-semibold text-base text-foreground">Exact Maximum Limit</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Confirm that the exact maximum permissible character limit succeeds. Verify that submit buttons remain enabled and no off-by-one errors trigger false validation warnings.
            </p>
          </div>

          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-destructive/20 text-destructive">
                Limit + 1 (501 Chars)
              </span>
              <span className="text-xs text-muted-foreground">Invalid Input</span>
            </div>
            <h3 className="font-semibold text-base text-foreground">One Above Maximum</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Verify that client-side validation blocks submission, displays a clear human-readable error message, and prevents backend database truncation or unhandled server exceptions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Length Calculation Formula */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          Formula for Calculating Test String Length
        </h2>
        <p className="text-base leading-relaxed">
          Before generating test data, calculate your expected output size using this plain-text formula:
        </p>
        <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto select-all border border-border">
          total characters = (text length × count) + (separator length × (count − 1))
        </div>
        <div className="rounded-lg border border-border bg-card p-4 space-y-2 text-xs sm:text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Why count − 1 for separators?</strong> Delimiters sit strictly between repeated items. A sequence of 10 items contains exactly 9 separators.
          </p>
          <p>
            <strong className="text-foreground">None separator formula:</strong> When separator is set to None, separator length is 0, simplifying the equation to: <code>text length × count</code>.
          </p>
        </div>
      </section>

      {/* Section 4: Worked Examples with Exact Character Counts */}
      <section className="space-y-6 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Worked Test Data Examples (Calculated in Code)
        </h2>
        <p className="text-base text-muted-foreground">
          The following four examples demonstrate realistic QA testing configurations. All character and byte lengths were calculated and verified in Node.js:
        </p>

        {/* Example 1 */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
            <h3 className="font-semibold text-base text-foreground">
              Example 1: 500-Character Description Field Boundary Test
            </h3>
            <span className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-md">
              Seed: &quot;A&quot; | Separator: None | Target: 499, 500, 501
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Using a single-character seed with no separator produces exact integer lengths for boundary testing:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="rounded bg-muted p-3 border border-border">
              <span className="text-muted-foreground block text-[11px] mb-1">Limit − 1 (Count: 499):</span>
              <span className="text-foreground font-semibold">499 characters</span>
              <span className="text-muted-foreground block text-[11px] mt-1">499 UTF-8 bytes</span>
            </div>
            <div className="rounded bg-muted p-3 border border-border">
              <span className="text-muted-foreground block text-[11px] mb-1">Exact Limit (Count: 500):</span>
              <span className="text-foreground font-semibold">500 characters</span>
              <span className="text-muted-foreground block text-[11px] mt-1">500 UTF-8 bytes</span>
            </div>
            <div className="rounded bg-muted p-3 border border-border">
              <span className="text-muted-foreground block text-[11px] mb-1">Limit + 1 (Count: 501):</span>
              <span className="text-foreground font-semibold">501 characters</span>
              <span className="text-muted-foreground block text-[11px] mt-1">501 UTF-8 bytes</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground italic">
            Calculation: 1 character × 500 repetitions = 500 characters total. Testing 499, 500, and 501 confirms both positive validation and negative rejection.
          </p>
        </div>

        {/* Example 2 */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
            <h3 className="font-semibold text-base text-foreground">
              Example 2: Delimited Token List for Tag and Search Inputs
            </h3>
            <span className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-md">
              Seed: &quot;TEST_TOKEN&quot; (10) | Count: 15 | Sep: &quot;, &quot; (2) | Length: 178 chars
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Verifying CSV tag inputs and tokenized query parameter boundaries:
          </p>
          <div className="rounded-md bg-muted p-3 font-mono text-xs text-foreground break-all">
            TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN, TEST_TOKEN
          </div>
          <p className="text-xs text-muted-foreground italic">
            Calculation: (10 characters × 15 copies) + (2 characters × 14 separators) = 150 + 28 = 178 characters total.
          </p>
        </div>

        {/* Example 3 */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
            <h3 className="font-semibold text-base text-foreground">
              Example 3: Multiline Textarea Payload (20 Lines)
            </h3>
            <span className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-md">
              Seed: &quot;LOG_ENTRY_ROW&quot; (13) | Count: 20 | Sep: Line Break (1) | Length: 279 chars
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Testing textarea scroll behaviour, vertical overflow, and multiline newline parsing:
          </p>
          <div className="rounded-md bg-muted p-3 font-mono text-xs text-foreground whitespace-pre-line max-h-32 overflow-y-auto">
            {`LOG_ENTRY_ROW\nLOG_ENTRY_ROW\nLOG_ENTRY_ROW\nLOG_ENTRY_ROW\nLOG_ENTRY_ROW`}
          </div>
          <p className="text-xs text-muted-foreground italic">
            Calculation: (13 characters × 20 copies) + (1 newline byte × 19 breaks) = 260 + 19 = 279 characters total.
          </p>
        </div>

        {/* Example 4 */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
            <h3 className="font-semibold text-base text-foreground">
              Example 4: Unicode Multi-Byte Boundary (Rocket Emoji 🚀)
            </h3>
            <span className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-md">
              Seed: 🚀 | Count: 100 | JS Length: 200 | UTF-8 Bytes: 400
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Demonstrating why character counters and database byte ceilings diverge:
          </p>
          <div className="rounded-md bg-muted p-3 font-mono text-xs text-foreground break-all">
            🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
          </div>
          <p className="text-xs text-muted-foreground italic">
            Calculation: 100 rocket emojis represent 100 user graphemes, 200 JavaScript UTF-16 code units (string length), and 400 UTF-8 storage bytes.
          </p>
        </div>
      </section>

      {/* Section 5: Multiline Textarea Testing & Newline Encoding */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Multiline Textarea Testing: LF (`\n`) vs. CRLF (`\r\n`)
        </h2>
        <p className="text-base leading-relaxed">
          When testing multiline textarea fields, line breaks introduce subtle size differences between client-side input buffers and HTTP request bodies:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-card p-5 space-y-2">
            <h3 className="font-semibold text-foreground text-sm">Unix Line Feed (LF / `\n`)</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Browser JavaScript strings and Unix clipboards represent newlines with a single byte (ASCII 10, <code>\n</code>). A 100-line repeated string contains 99 newline characters (99 bytes).
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 space-y-2">
            <h3 className="font-semibold text-foreground text-sm">Windows &amp; Form Submission (CRLF / `\r\n`)</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Standard HTML form submissions (multipart or url-encoded) often normalize line breaks to carriage return plus line feed (<code>\r\n</code>, 2 bytes). That same 100-line string expands to 198 newline bytes over the network.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Unicode & Database Storage Differences */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Unicode, Emojis, and Database Storage Discrepancies
        </h2>
        <p className="text-base leading-relaxed">
          A frequent source of unexplained QA bugs occurs when an input field accepts a test string, but the database throws an unhandled error upon saving:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
          <div className="rounded-lg border border-border bg-card p-4 space-y-1.5">
            <strong className="text-foreground block text-sm">JavaScript `length`</strong>
            <p className="text-muted-foreground">
              Measures 16-bit code units. Standard ASCII characters count as 1; surrogate pair emojis (like 🚀) count as 2.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-1.5">
            <strong className="text-foreground block text-sm">Visual Graphemes</strong>
            <p className="text-muted-foreground">
              What the user perceives as one character. A family emoji or flag counts as 1 user character, but 4 to 11 code units in code.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-1.5">
            <strong className="text-foreground block text-sm">UTF-8 Byte Storage</strong>
            <p className="text-muted-foreground">
              MySQL or PostgreSQL columns set to byte limits store ASCII in 1 byte, European accents in 2 bytes, and emojis in 4 bytes.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Honest Capabilities and Limits */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          Tool Capabilities and Honest Limits
        </h2>
        <p className="text-base leading-relaxed">
          To maintain testing rigor, understanding what a browser text repeater does and does not do is essential:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 space-y-2">
            <h3 className="font-semibold text-foreground text-sm text-emerald-700 dark:text-emerald-300">
              What This Tool Does
            </h3>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
              <li>Generates deterministic strings up to 10,000 repetitions.</li>
              <li>Calculates live character counts, word counts, and output metrics.</li>
              <li>Runs entirely in the browser without sending input text to a server.</li>
              <li>Offers instant one-click clipboard copying and `.txt` file downloading.</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h3 className="font-semibold text-foreground text-sm text-muted-foreground">
              What This Tool Does Not Do
            </h3>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
              <li>It is not an API test runner; it does not dispatch HTTP requests.</li>
              <li>It is not a load testing tool; it does not benchmark server concurrency.</li>
              <li>It is not a security fuzzer; it does not generate randomized malformed packets.</li>
              <li>It is not a relational seeder; it does not produce foreign-keyed database mock tables.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8: Troubleshooting Table */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          Troubleshooting Common QA Testing Issues
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-foreground font-semibold border-b border-border text-xs sm:text-sm">
              <tr>
                <th className="p-3">Observed Issue</th>
                <th className="p-3">Root Cause</th>
                <th className="p-3">Recommended Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs sm:text-sm">
              <tr>
                <td className="p-3 font-medium text-foreground">Character count off by a few characters</td>
                <td className="p-3 text-muted-foreground">Separator length was omitted from manual calculation or trailing separator was expected.</td>
                <td className="p-3 text-foreground">Apply the <code>(len × count) + (sep × (count - 1))</code> formula.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Database rejects string within character limit</td>
                <td className="p-3 text-muted-foreground">Column length is enforced in bytes and multi-byte UTF-8 characters were supplied.</td>
                <td className="p-3 text-foreground">Check whether database schema specifies byte capacity or character collation limits.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Pasting into form alters total character length</td>
                <td className="p-3 text-muted-foreground">Operating system or browser normalized single <code>\n</code> line feeds to two-byte <code>\r\n</code> sequences.</td>
                <td className="p-3 text-foreground">Inspect network payload headers to verify newline byte encoding.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Unbroken text breaks UI container layout</td>
                <td className="p-3 text-muted-foreground">Continuous strings lack whitespace, preventing default browser word wrapping.</td>
                <td className="p-3 text-foreground">Add CSS rule <code>overflow-wrap: break-word</code> to container styles.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 9: Comparison Table */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Table className="h-6 w-6 text-primary" />
          Comparison Matrix: Test Data Generation Methods
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-foreground font-semibold border-b border-border text-xs sm:text-sm">
              <tr>
                <th className="p-3">Method</th>
                <th className="p-3">Generation Speed</th>
                <th className="p-3">Length Precision</th>
                <th className="p-3">Determinism</th>
                <th className="p-3">Primary Testing Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs sm:text-sm">
              <tr>
                <td className="p-3 font-medium text-foreground">My Text Repeater</td>
                <td className="p-3 text-muted-foreground">Instant in browser</td>
                <td className="p-3 text-muted-foreground">Exact character match</td>
                <td className="p-3 text-muted-foreground">100% deterministic</td>
                <td className="p-3 text-foreground">Manual QA, boundary testing, UI overflow checks</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Manual Keyboard Typing</td>
                <td className="p-3 text-muted-foreground">Slow and tedious</td>
                <td className="p-3 text-muted-foreground">Unpredictable</td>
                <td className="p-3 text-muted-foreground">Low</td>
                <td className="p-3 text-foreground">Quick exploratory sanity checks only</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">CLI Script (Python / Node)</td>
                <td className="p-3 text-muted-foreground">Fast in terminal</td>
                <td className="p-3 text-muted-foreground">Exact character match</td>
                <td className="p-3 text-muted-foreground">100% deterministic</td>
                <td className="p-3 text-foreground">CI/CD pipelines, automated regression suites</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Mock Data Libraries (Faker)</td>
                <td className="p-3 text-muted-foreground">Fast via code</td>
                <td className="p-3 text-muted-foreground">Variable lengths</td>
                <td className="p-3 text-muted-foreground">Pseudorandom</td>
                <td className="p-3 text-foreground">Realistic relational databases, UI prototyping</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 10: Responsible Testing Guidelines */}
      <section className="space-y-4 pt-4 border-t border-border">
        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5 space-y-2.5">
          <div className="flex items-center gap-2 text-destructive font-semibold text-base">
            <ShieldAlert className="h-5 w-5" />
            <span>Responsible Testing and Safe Environment Guidelines</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Always restrict large test payloads to local environments, staging instances, or applications you own or are explicitly authorized to test. Never inject large repeated strings into third-party production environments without permission, as high-volume payloads can trigger rate limits or abuse filters.
          </p>
        </div>
      </section>

      {/* Section 11: Frequently Asked Questions */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              Can repeated text replace randomized mock data in QA?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              No. Repeated text is deterministic and designed for boundary-value and overflow testing, whereas randomized libraries test diverse input variations.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              How do I test a 500-character boundary in a form field?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Generate three test strings: 499 characters (limit − 1), 500 characters (exact limit), and 501 characters (limit + 1) to test acceptance, ceiling, and rejection.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              Does an online text repeater send HTTP requests or run load tests?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              No. The tool generates raw test strings in your browser for you to copy; dedicated test runners like Postman or k6 must dispatch requests.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              Why does a database reject a string that fits the character counter?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Databases frequently enforce byte limits rather than character lengths. Multi-byte UTF-8 characters like emojis take up to 4 bytes each.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              How do I generate multiline test strings for textarea inputs?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Select the Line Break separator in the tool. Each repetition is placed on its own line using an ASCII line feed character.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              How do I calculate the exact output length before generating?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Use the formula: (text length × count) + (separator length × (count − 1)). With None as the separator, multiply text length by count directly.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <div className="rounded-xl border border-border bg-gradient-to-r from-muted/50 to-muted/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-foreground text-base">Generate deterministic QA test strings now</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Create exact-length boundary strings up to 10,000 repetitions with custom separators in your browser.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 shrink-0"
        >
          <span>Open Text Repeater</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
