import Link from "next/link"
import { CheckCircle2, AlertCircle, ArrowRight, Table, Layers, FileText, HelpCircle, Code2 } from "lucide-react"

export function RepeatTextInGoogleSheetsAndExcelArticle() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I repeat text in Excel using a formula?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use =REPT(\"Your Text \", 10). Replace \"Your Text \" with your desired phrase or a cell reference like A2, and replace 10 with the number of times you want it repeated.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my REPT formula in Excel return #VALUE!?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The #VALUE! error occurs if the count argument is negative (e.g. -1), or if the resulting repeated text exceeds Excel's hard single-cell limit of 32,767 characters.",
        },
      },
      {
        "@type": "Question",
        name: "How do I repeat text with a line break in Google Sheets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use =REPT(A2 & CHAR(10), B2 - 1) & A2, then select the cell and go to Format > Wrapping > Wrap. Turn on Wrap Text so line breaks are visible.",
        },
      },
      {
        "@type": "Question",
        name: "How do I repeat text down separate rows instead of in one cell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Excel 365, enter =IF(SEQUENCE(B2), A2) to spill text down B2 rows, or use =MAP(SEQUENCE(B2), LAMBDA(n, A2)) in Google Sheets. You can also enter =$A$2 and drag the fill handle down.",
        },
      },
      {
        "@type": "Question",
        name: "What is the maximum number of times REPT can repeat text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The limit depends on single-cell character capacity: 32,767 characters in Microsoft Excel and 50,000 characters in Google Sheets. Formulas that generate more characters than the host cell allows will fail.",
        },
      },
      {
        "@type": "Question",
        name: "How do I remove the trailing comma from a repeated string in Excel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the N − 1 structure: =IF(B2 > 0, REPT(A2 & \", \", B2 - 1) & A2, \"\"). This repeats the text with a comma for all except the final repetition, leaving the last entry clean.",
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
          <span>Quick Answer</span>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-foreground">
          To repeat text inside a single cell in Excel or Google Sheets, use the built-in <strong>REPT</strong> function:
        </p>
        <div className="rounded-lg bg-background border border-border p-3.5 font-mono text-sm text-foreground overflow-x-auto select-all">
          =REPT(&quot;Text to repeat &quot;, 10)
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Both applications share the standard <code>=REPT(text, number_times)</code> syntax structure. To place each repetition on a separate line inside the same cell, concatenate <code>CHAR(10)</code> and turn on <strong>Wrap Text</strong>. To repeat text down multiple individual rows without dragging, formulas such as <code>=IF(SEQUENCE(10), A2)</code> in Excel 365 or <code>=MAP(SEQUENCE(10), LAMBDA(n, A2))</code> in Google Sheets have their syntax checked in code; verify array formula support in your specific spreadsheet version.
        </p>
      </div>

      {/* Overview & Contextual Link */}
      <section className="space-y-4">
        <p className="text-base sm:text-lg leading-relaxed">
          Whether you are mocking up sample records, padding fixed-width files, building parameterized testing matrices, or repeating recurring delimiters across financial models, knowing how to duplicate strings directly inside your workbook saves hours of manual copy-pasting.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          While formulas are ideal when your text needs to react dynamically to other cells in a workbook, opening heavy desktop software just to duplicate a short phrase is often unnecessary. For fast, one-off text duplication up to 10,000 times outside spreadsheets, <Link href="/" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">a free browser-based text repeater</Link> generates and copies clean strings to your clipboard in one click.
        </p>
      </section>

      {/* Section 1: REPT Syntax & Argument Rules */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          The REPT Function: Syntax and Argument Rules
        </h2>
        <p className="text-base leading-relaxed">
          The <code>REPT</code> function is standard in spreadsheet software across Microsoft Excel and Google Sheets:
        </p>
        
        <div className="rounded-lg bg-muted/60 border border-border p-4 font-mono text-sm text-foreground overflow-x-auto">
          =REPT(text, number_times)
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h3 className="font-semibold text-foreground text-sm flex items-center gap-1.5">
              <span>Argument 1: <code>text</code></span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              The string you want to repeat. You can supply a hardcoded string wrapped in double quotes (e.g., <code>&quot;Draft&quot;</code>) or reference another cell (e.g., <code>A2</code>).
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h3 className="font-semibold text-foreground text-sm flex items-center gap-1.5">
              <span>Argument 2: <code>number_times</code></span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              A positive integer specifying how many times to repeat. Can be a literal number or a numeric cell reference (e.g., <code>B2</code>).
            </p>
          </div>
        </div>

        {/* Edge Cases Table */}
        <div className="rounded-xl border border-border bg-card p-4 space-y-3">
          <h3 className="font-semibold text-foreground text-sm sm:text-base flex items-center gap-2">
            <Code2 className="h-4 w-4 text-primary" />
            Evaluation Rules &amp; Edge Cases in Excel
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            How Excel handles unexpected boundary conditions per official Microsoft documentation:
          </p>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-muted text-foreground font-semibold border-b border-border">
                <tr>
                  <th className="p-2.5">Input Scenario</th>
                  <th className="p-2.5">Formula Example</th>
                  <th className="p-2.5">Excel Result (Microsoft Documented)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="p-2.5 font-medium text-foreground">Count of Zero</td>
                  <td className="p-2.5 font-mono text-foreground">=REPT(&quot;X&quot;, 0)</td>
                  <td className="p-2.5">Returns an empty text string (<code>&quot;&quot;</code>). Documented in Microsoft Support article &quot;REPT function&quot;.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium text-foreground">Decimal / Float Count</td>
                  <td className="p-2.5 font-mono text-foreground">=REPT(&quot;X&quot;, 2.8)</td>
                  <td className="p-2.5">Truncated to integer (2.8 becomes 2, returning <code>&quot;XX&quot;</code>). Documented in Microsoft Support article &quot;REPT function&quot;.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium text-foreground">Negative Count</td>
                  <td className="p-2.5 font-mono text-foreground">=REPT(&quot;X&quot;, -1)</td>
                  <td className="p-2.5 font-mono text-destructive font-semibold">#VALUE! (Documented in Microsoft Support article &quot;REPT function&quot;)</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-medium text-foreground">SEQUENCE with 0 Rows</td>
                  <td className="p-2.5 font-mono text-foreground">=SEQUENCE(0)</td>
                  <td className="p-2.5 font-mono text-amber-600 dark:text-amber-400 font-semibold">#CALC! (Microsoft documents rows &ge; 1 required in &quot;SEQUENCE function&quot;)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Concrete Worked Examples */}
      <section className="space-y-6 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Concrete Worked Examples with Exact Character Counts
        </h2>
        <p className="text-base text-muted-foreground">
          Below are three tested examples showing common repetition formulas, their raw spreadsheet outputs, and their exact character metrics:
        </p>

        {/* Example 1 */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
            <h3 className="font-semibold text-base text-foreground">
              Example 1: Hardcoded Text with Separator
            </h3>
            <span className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-md">
              Count: 5 copies | Length: 75 characters
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Repeating a reminder banner with a trailing space and hyphen directly in a formula:
          </p>
          <div className="rounded-md bg-muted p-3 font-mono text-xs sm:text-sm text-foreground overflow-x-auto select-all">
            =REPT(&quot;Confidential - &quot;, 5)
          </div>
          <div className="rounded-md bg-background border border-border p-3 font-mono text-xs text-muted-foreground break-all">
            Confidential - Confidential - Confidential - Confidential - Confidential - 
          </div>
          <p className="text-xs text-muted-foreground italic">
            Math: 15 characters per unit (&quot;Confidential - &quot;) × 5 repetitions = 75 characters total. Notice the trailing hyphen and space at the very end.
          </p>
        </div>

        {/* Example 2 */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
            <h3 className="font-semibold text-base text-foreground">
              Example 2: Continuous Text without Separator
            </h3>
            <span className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-md">
              Count: 3 copies | Length: 15 characters
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Repeating a label without any space for pattern masking or continuous string creation:
          </p>
          <div className="rounded-md bg-muted p-3 font-mono text-xs sm:text-sm text-foreground overflow-x-auto select-all">
            =REPT(&quot;Draft&quot;, 3)
          </div>
          <div className="rounded-md bg-background border border-border p-3 font-mono text-xs text-muted-foreground">
            DraftDraftDraft
          </div>
          <p className="text-xs text-muted-foreground italic">
            Math: 5 characters (&quot;Draft&quot;) × 3 repetitions = 15 characters total.
          </p>
        </div>

        {/* Example 3 */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-2.5">
            <h3 className="font-semibold text-base text-foreground">
              Example 3: Dynamic Cell References (Text in A2, Repetition Count in B2)
            </h3>
            <span className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-md">
              Input: A2 = &quot;Approved&quot;, B2 = 4 | Length: 36 characters
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Instead of hardcoding values, link your formula dynamically to input cells:
          </p>
          <div className="rounded-md bg-muted p-3 font-mono text-xs sm:text-sm text-foreground overflow-x-auto select-all">
            =REPT(A2 &amp; &quot; &quot;, B2)
          </div>
          <div className="rounded-md bg-background border border-border p-3 font-mono text-xs text-muted-foreground">
            Approved Approved Approved Approved 
          </div>
          <p className="text-xs text-muted-foreground italic">
            Math: 9 characters (&quot;Approved &quot;) × 4 repetitions = 36 characters total.
          </p>
        </div>
      </section>

      {/* Section 3: Eliminating Trailing Separators */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Eliminating Trailing Separators (The N − 1 Formula)
        </h2>
        <p className="text-base leading-relaxed">
          A common pitfall with formulas like <code>=REPT(A2 &amp; &quot;, &quot;, B2)</code> is that every single copy appends the comma and space, leaving an unwanted separator hanging off the end of your text. In CSV exports, strict SQL insertions, or string comparison tests, that trailing separator can cause downstream errors.
        </p>
        <p className="text-base leading-relaxed">
          The standard formula pattern to eliminate trailing characters is to repeat the string with its separator <strong>B2 − 1</strong> times, then append one final copy of the string without any separator:
        </p>

        <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto select-all border border-border">
          =IF(B2 &gt; 0, REPT(A2 &amp; &quot;, &quot;, B2 - 1) &amp; A2, &quot;&quot;)
        </div>

        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
          <div className="flex items-center justify-between border-b border-border pb-1.5">
            <h3 className="font-semibold text-foreground text-sm">Worked Example:</h3>
            <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
              output and length checked in code; not run in Excel or Google Sheets
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            If <code>A2</code> contains <code>&quot;SKU-99&quot;</code> and <code>B2</code> equals <code>4</code>:
          </p>
          <div className="rounded bg-background p-2.5 font-mono text-xs text-foreground border border-border">
            SKU-99, SKU-99, SKU-99, SKU-99
          </div>
          <p className="text-xs text-muted-foreground">
            Exact character count: <strong>30 characters</strong> (4 copies of 6-character &quot;SKU-99&quot; = 24 chars, plus 3 separators of 2 characters &quot;, &quot; = 6 chars. 24 + 6 = 30). Zero trailing comma.
          </p>
        </div>
      </section>

      {/* Section 4: Line Breaks with CHAR(10) */}
      <section className="space-y-5 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Repeating Text on New Lines Inside a Single Cell (CHAR(10))
        </h2>
        <p className="text-base leading-relaxed">
          If you need your repeated entries stacked vertically within one cell rather than spreading horizontally across a line, use the ASCII Line Feed character represented by <code>CHAR(10)</code>.
        </p>

        <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto select-all border border-border">
          =IF(B2 &gt; 0, REPT(A2 &amp; CHAR(10), B2 - 1) &amp; A2, &quot;&quot;)
        </div>

        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
          <div className="flex items-center justify-between border-b border-border pb-1.5">
            <h3 className="font-semibold text-foreground text-sm">Worked Example:</h3>
            <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
              output and length checked in code; not run in Excel or Google Sheets
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            With <code>A2 = &quot;Item Alpha&quot;</code> and <code>B2 = 3</code>:
          </p>
          <div className="rounded bg-background p-3 font-mono text-xs text-foreground border border-border whitespace-pre-line">
            {`Item Alpha\nItem Alpha\nItem Alpha`}
          </div>
          <p className="text-xs text-muted-foreground">
            Character count breakdown: 10 chars per string × 3 = 30 characters + 2 newline characters = <strong>32 characters total</strong>.
          </p>
        </div>

        {/* Wrap Text Requirement */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 space-y-3">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-base">
            <AlertCircle className="h-5 w-5" />
            <span>Essential Requirement: Turn on &quot;Wrap Text&quot;</span>
          </div>
          <p className="text-sm leading-relaxed text-foreground">
            Turn on Wrap Text so line breaks are visible in the cell.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-1">
            <div className="rounded bg-background/80 p-3 border border-border/80">
              <strong className="text-foreground block mb-1">In Microsoft Excel:</strong>
              Select the cell &rarr; Navigate to the <strong>Home</strong> tab &rarr; Click <strong>Wrap Text</strong> in the Alignment section (or press <kbd className="px-1 py-0.5 bg-muted rounded font-mono text-xs">Alt + H + W</kbd> on Windows).
            </div>
            <div className="rounded bg-background/80 p-3 border border-border/80">
              <strong className="text-foreground block mb-1">In Google Sheets:</strong>
              Select the cell &rarr; Click <strong>Format</strong> in the menu &rarr; <strong>Wrapping</strong> &rarr; Select <strong>Wrap</strong> (or click the Wrap icon in the toolbar).
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Repeating Down Rows */}
      <section className="space-y-5 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Layers className="h-6 w-6 text-primary" />
          Repeating Down Rows vs. Inside a Single Cell
        </h2>
        <p className="text-base leading-relaxed">
          The <code>REPT</code> formula always consolidates output inside a <em>single cell</em>. However, if your destination is a database upload, an accounting ledger, or a lookup table, you almost certainly need each repeated instance occupying its own independent spreadsheet row.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-card p-5 space-y-2.5">
            <h3 className="font-semibold text-foreground text-base">Method A: Traditional Drag-Down Formula</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Place your master text in cell <code>A2</code>. In cell <code>B2</code>, write an absolute reference and drag the fill handle down:
            </p>
            <div className="rounded bg-muted p-2.5 font-mono text-xs text-foreground overflow-x-auto">
              =$A$2
            </div>
            <p className="text-xs text-muted-foreground">
              To number each row automatically starting from 1 (accounting for a header on row 1):
            </p>
            <div className="rounded bg-muted p-2.5 font-mono text-xs text-foreground overflow-x-auto">
              =(ROW() - 1) &amp; &quot;. &quot; &amp; $A$2
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 space-y-2.5">
            <div className="flex items-center justify-between border-b border-border pb-1">
              <h3 className="font-semibold text-foreground text-base">Method B: Modern Dynamic Array Spilling</h3>
              <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                output and length checked in code; not run in Excel or Google Sheets
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              In modern spreadsheet versions, one formula entered in a single cell can automatically &quot;spill&quot; down the exact number of rows specified in <code>B2</code> without dragging:
            </p>
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-foreground block">In Excel 365 &amp; Excel 2021:</span>
              <div className="rounded bg-muted p-2 font-mono text-xs text-foreground overflow-x-auto">
                =IF(SEQUENCE(B2), A2)
              </div>
              <span className="text-xs font-semibold text-foreground block pt-1">In Google Sheets:</span>
              <div className="rounded bg-muted p-2 font-mono text-xs text-foreground overflow-x-auto">
                =MAP(SEQUENCE(B2), LAMBDA(n, A2))
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: TEXTJOIN */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Joining Repeated Cells Across Ranges (TEXTJOIN)
        </h2>
        <p className="text-base leading-relaxed">
          If you have a column of repeated records that you want to re-combine into a single delimited sentence or list, do not write tedious manual concatenations like <code>=A2 &amp; &quot;, &quot; &amp; A3 &amp; ...</code>. Both Excel (2019, 2021, and Microsoft 365) and Google Sheets support the modern <strong>TEXTJOIN</strong> function:
        </p>

        <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto select-all border border-border">
          =TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)
        </div>

        <div className="rounded-xl border border-border bg-card p-4 space-y-2">
          <div className="flex items-center justify-between border-b border-border pb-1">
            <h3 className="font-semibold text-foreground text-sm">Example: Joining Column A2:A6 with a Vertical Pipe</h3>
            <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
              output and length checked in code; not run in Excel or Google Sheets
            </span>
          </div>
          <div className="rounded bg-muted p-3 font-mono text-xs sm:text-sm text-foreground overflow-x-auto select-all">
            =TEXTJOIN(&quot; | &quot;, TRUE, A2:A6)
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Setting the second parameter to <code>TRUE</code> ensures that any empty or blank rows in your source range are automatically ignored, preventing consecutive double delimiters like <code>&quot; | | &quot;</code>.
          </p>
        </div>
      </section>

      {/* Section 7: Character Limits & Failure Modes */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Single-Cell Character Limits: Official Specifications
        </h2>
        <p className="text-base leading-relaxed">
          Spreadsheets are calculation engines, not large-scale text buffers. Both Excel and Google Sheets impose hard limits on how many characters a single cell can contain:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <h3 className="font-semibold text-base text-foreground">Microsoft Excel</h3>
              <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                32,767 characters
              </span>
            </div>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
              <li><strong>Official Cell Limit:</strong> 32,767 characters maximum length of cell contents (text). (Formula string length itself is limited to 8,192 characters).</li>
              <li><strong>Display Limit:</strong> While up to 32,767 characters are stored, only 1,024 characters display on the worksheet canvas without cell wrapping.</li>
              <li><strong>What Microsoft Documents on Exceeding Limit:</strong> Microsoft states that <code>REPT</code> returns <code>#VALUE!</code> when its resulting text would exceed 32,767 characters.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <h3 className="font-semibold text-base text-foreground">Google Sheets</h3>
              <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                50,000 characters
              </span>
            </div>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
              <li><strong>Official Cell Limit:</strong> Google documents a 50,000-character limit per cell.</li>
              <li><strong>Workbook Capacity:</strong> 10 million total cells per entire spreadsheet.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 8: Converting to Static Values */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Converting Formulas to Static Text (Paste Special Values)
        </h2>
        <p className="text-base leading-relaxed">
          Formulas are live calculations. If you delete your source cell <code>A2</code>, sort your sheet, or export to CSV, formulas that rely on relative references can break or return <code>#REF!</code> errors. Once your repeated text is generated, freeze it into static plain text:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h3 className="font-semibold text-foreground">In Microsoft Excel:</h3>
            <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
              <li>Select your cell(s) and press <kbd className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">Ctrl + C</kbd> (<kbd className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">Cmd + C</kbd> on Mac).</li>
              <li>Press <kbd className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">Ctrl + Alt + V</kbd> to open Paste Special.</li>
              <li>Press <kbd className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">V</kbd> (Values) and hit <strong>Enter</strong>.</li>
            </ol>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h3 className="font-semibold text-foreground">In Google Sheets:</h3>
            <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-muted-foreground">
              <li>Select the cell(s) and press <kbd className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">Ctrl + C</kbd> (<kbd className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">Cmd + C</kbd> on Mac).</li>
              <li>Press <kbd className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">Ctrl + Shift + V</kbd> (<kbd className="px-1.5 py-0.5 bg-muted rounded font-mono text-xs">Cmd + Shift + V</kbd> on Mac).</li>
              <li>Your live formula is immediately converted into raw text.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Section 9: When Online Repeater is Better */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          When an Online Text Repeater Is Better Than Spreadsheets
        </h2>
        <p className="text-base leading-relaxed">
          Spreadsheet formulas are indispensable when text must react dynamically to changing figures, link across worksheets, or produce structured CSV columns. But they are often the wrong tool for quick, high-volume repetition:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="rounded-xl border border-border bg-card p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm">No 32k/50k Hard Ceiling</h3>
            <p className="text-xs text-muted-foreground">
              Duplicating long text blocks thousands of times can exceed single-cell spreadsheet limits. A browser utility duplicates text up to 10,000 times outside cell constraints.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm">Zero Syntax Overhead</h3>
            <p className="text-xs text-muted-foreground">
              No need to remember <code>CHAR(10)</code> codes, handle <code>N - 1</code> trailing separators, or manually enable Wrap Text on cells.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm">Instant Copy &amp; Download</h3>
            <p className="text-xs text-muted-foreground">
              One click copies directly to your clipboard or downloads a formatted <code>.txt</code> file ready to paste into messaging apps, code editors, or QA test harnesses.
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: Troubleshooting */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          Troubleshooting Common Formula Errors
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-foreground font-semibold border-b border-border text-xs sm:text-sm">
              <tr>
                <th className="p-3">Symptom / Error</th>
                <th className="p-3">Underlying Cause</th>
                <th className="p-3">Immediate Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs sm:text-sm">
              <tr>
                <td className="p-3 font-mono font-semibold text-destructive">#VALUE!</td>
                <td className="p-3 text-muted-foreground">Negative repetition count or total output exceeds 32,767 characters in Excel.</td>
                <td className="p-3 text-foreground">Ensure count is &ge; 0 and verify that text length × count remains below 32,767.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono font-semibold text-amber-600 dark:text-amber-400">#SPILL! (Excel only)</td>
                <td className="p-3 text-muted-foreground">Cells directly beneath your dynamic array formula in Excel 365 contain existing text or data.</td>
                <td className="p-3 text-foreground">Clear all content from the rows directly below the formula cell.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">All on one line</td>
                <td className="p-3 text-muted-foreground"><code>CHAR(10)</code> is present, but cell Wrap Text formatting is turned off.</td>
                <td className="p-3 text-foreground">Enable <strong>Wrap Text</strong> in the Home ribbon (Excel) or Format &gt; Wrapping (Sheets).</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Formula shows as text</td>
                <td className="p-3 text-muted-foreground">Cell was pre-formatted as &quot;Text&quot; before typing the <code>=</code> sign.</td>
                <td className="p-3 text-foreground">Change cell format to <strong>General</strong> or <strong>Automatic</strong>, click into formula bar, and press Enter.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Trailing comma / space</td>
                <td className="p-3 text-muted-foreground">Simple <code>=REPT(text &amp; sep, count)</code> appends separator to the final copy.</td>
                <td className="p-3 text-foreground">Switch to the <code>=REPT(text &amp; sep, count - 1) &amp; text</code> structure.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 11: Comparison Table */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <Table className="h-6 w-6 text-primary" />
          Comparison Matrix: Excel vs. Google Sheets vs. Online Repeater
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted text-foreground font-semibold border-b border-border text-xs sm:text-sm">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Microsoft Excel</th>
                <th className="p-3">Google Sheets</th>
                <th className="p-3">My Text Repeater</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs sm:text-sm">
              <tr>
                <td className="p-3 font-medium text-foreground">Core Repeater Function</td>
                <td className="p-3 font-mono text-muted-foreground">=REPT(text, count)</td>
                <td className="p-3 font-mono text-muted-foreground">=REPT(text, count)</td>
                <td className="p-3 text-muted-foreground">Visual browser tool</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Single-Cell Capacity</td>
                <td className="p-3 text-muted-foreground">32,767 characters max</td>
                <td className="p-3 text-muted-foreground">50,000 characters max</td>
                <td className="p-3 text-muted-foreground">Up to 10,000 repetitions</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Multiline Separator</td>
                <td className="p-3 font-mono text-muted-foreground">CHAR(10) + Wrap Text</td>
                <td className="p-3 font-mono text-muted-foreground">CHAR(10) + Wrap Text</td>
                <td className="p-3 text-muted-foreground">Line Break separator preset</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Row Spilling Support</td>
                <td className="p-3 text-muted-foreground">=IF(SEQUENCE(n), text)</td>
                <td className="p-3 text-muted-foreground">=MAP(SEQUENCE(n), LAMBDA)</td>
                <td className="p-3 text-muted-foreground">Export as raw multiline text</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-foreground">Best For</td>
                <td className="p-3 text-muted-foreground">Financial models &amp; desktop sheets</td>
                <td className="p-3 text-muted-foreground">Collaborative cloud workbooks</td>
                <td className="p-3 text-muted-foreground">Quick copying, QA tests &amp; chats</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 12: Frequently Asked Questions */}
      <section className="space-y-4 pt-4 border-t border-border">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              How do I repeat text in Excel using a formula?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Use <code>=REPT(&quot;Your Text &quot;, 10)</code>. Replace <code>&quot;Your Text &quot;</code> with your desired phrase or a cell reference like <code>A2</code>, and replace <code>10</code> with the number of times you want it repeated.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              Why does my REPT formula in Excel return #VALUE!?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The <code>#VALUE!</code> error occurs if the count argument is negative (e.g. <code>-1</code>), or if the resulting repeated text exceeds Excel&apos;s hard single-cell limit of 32,767 characters.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              How do I repeat text with a line break in Google Sheets?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Use <code>=REPT(A2 &amp; CHAR(10), B2 - 1) &amp; A2</code>, then select the cell and go to <strong>Format &gt; Wrapping &gt; Wrap</strong>. Turn on Wrap Text so line breaks are visible.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              How do I repeat text down separate rows instead of in one cell?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              In Excel 365, enter <code>=IF(SEQUENCE(B2), A2)</code> to spill text down <code>B2</code> rows, or use <code>=MAP(SEQUENCE(B2), LAMBDA(n, A2))</code> in Google Sheets. You can also enter <code>=$A$2</code> and drag the fill handle down.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              What is the maximum number of times REPT can repeat text?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              The limit depends on single-cell character capacity: 32,767 characters in Microsoft Excel and 50,000 characters in Google Sheets. Formulas that generate more characters than the host cell allows will fail.
            </p>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-1.5">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">
              How do I remove the trailing comma from a repeated string in Excel?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Use the <code>N − 1</code> structure: <code>=IF(B2 &gt; 0, REPT(A2 &amp; &quot;, &quot;, B2 - 1) &amp; A2, &quot;&quot;)</code>. This repeats the text with a comma for all except the final repetition, leaving the last entry clean.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <div className="rounded-xl border border-border bg-gradient-to-r from-muted/50 to-muted/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-foreground text-base">Need quick repeated text without formulas?</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Generate up to 10,000 copies with custom spaces, newlines, or commas in your browser.
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
