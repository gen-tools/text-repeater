import Link from "next/link"

export function RepeatTextOnNewLinesArticle() {
  return (
    <div className="space-y-6">
      <p>
        The result you're after is one clean line per repetition, stacked vertically instead of run together in a single block. That's a formatting choice, not a different tool — you get it by picking a new-line separator when you generate your repeated text, which places each copy directly below the one before it.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Repeat Text on New Lines Online
      </h2>
      <p>
        The process is straightforward:
      </p>
      <ol className="list-decimal list-inside space-y-2 pl-2">
        <li>Enter the word, sentence, or block of text you want repeated.</li>
        <li>Set the number of repetitions.</li>
        <li>Select a new-line separator instead of a space or custom character.</li>
        <li>Generate the output.</li>
        <li>Copy it, or download it as a file if you need it saved for later.</li>
      </ol>
      <p>
        The result is a clean, vertical list — one repetition per line, all the way down.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat &quot;Hello&quot; Five Times on Separate Lines
      </h2>
      <p>
        The simplest case: a single word, each copy on its own row.
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto space-y-1">
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
      <p>
        Set the count to 5, pick a new-line separator, and that&apos;s the full output — five lines, nothing else added.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat a Sentence 100 Times on Separate Lines
      </h2>
      <p>
        Sentences follow the same pattern, just at a larger scale.
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto space-y-1">
        <div>I will complete my work.</div>
        <div>I will complete my work.</div>
        <div>I will complete my work.</div>
      </div>
      <p>
        (Shortened here — the actual output continues for all 100 lines.) Each line holds one full, untouched copy of the sentence, with nothing merged or run together.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat a Test Value 1,000 Times on Separate Lines
      </h2>
      <p>
        This is a common one for testing and data work — a specific value, repeated many times, each on its own line so it can be pasted into a column, a list, or a test input.
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto space-y-1">
        <div>test-value-001</div>
        <div>test-value-001</div>
        <div>test-value-001</div>
      </div>
      <p>
        At 1,000 lines, the output gets long, so it&apos;s worth checking the character count and scanning the start and end before copying it anywhere.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat a Two-Line Input as One Complete Block
      </h2>
      <p>
        Sometimes the thing you want repeated isn&apos;t a single line — it&apos;s two lines that belong together, like a name and a title, or a question and its answer.
      </p>
      <p className="font-semibold text-foreground">Input:</p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto space-y-1">
        <div>Line one of the block</div>
        <div>Line two of the block</div>
      </div>
      <p className="font-semibold text-foreground">Repeated as a complete two-line unit, three times:</p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto space-y-3">
        <div>
          <div>Line one of the block</div>
          <div>Line two of the block</div>
        </div>
        <div>
          <div>Line one of the block</div>
          <div>Line two of the block</div>
        </div>
        <div>
          <div>Line one of the block</div>
          <div>Line two of the block</div>
        </div>
      </div>
      <p>
        The key here is that both lines travel together as a single block on each repetition, rather than getting separated and repeated independently of each other.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat a Paragraph With Blank Lines Between Copies
      </h2>
      <p>
        For longer text, a blank line between each repeated paragraph makes the output far easier to read than paragraphs jammed directly against one another.
      </p>
      <p className="font-semibold text-foreground">Example (shortened):</p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto space-y-4">
        <div>This is a short paragraph used for testing repeated content blocks.</div>
        <div>This is a short paragraph used for testing repeated content blocks.</div>
        <div>This is a short paragraph used for testing repeated content blocks.</div>
      </div>
      <p>
        That empty line between copies is what visually separates one paragraph from the next, which matters more as the paragraph gets longer.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Create a List of Repeated Lines
      </h2>
      <p>
        If you&apos;re building something that needs to look like a list — a placeholder dataset, a set of test entries, or repeated form values — a new-line separator with no numbering is usually the starting point. From there, you can add your own list formatting (numbers, bullets, dashes) afterward if the destination needs it.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        New Lines vs. Spaces, Commas, and Custom Separators
      </h2>
      <p>
        The separator you choose changes the shape of the output entirely, not just its appearance:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          <strong className="text-foreground">New line</strong> — each repetition on its own row, best for lists, spreadsheets, or anything where one entry per line matters.
        </li>
        <li>
          <strong className="text-foreground">Space</strong> — a compact, single-line block, better suited to short words or <Link href="/emoji-repeater" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">emoji</Link>.
        </li>
        <li>
          <strong className="text-foreground">Comma</strong> — gives the output a list-like structure without line breaks, useful for testing comma-separated values.
        </li>
        <li>
          <strong className="text-foreground">Custom separator</strong> — a dash, pipe, or other character, for specific formatting needs.
        </li>
      </ul>
      <p>
        New lines are the right choice any time the destination — a form, a spreadsheet column, a testing tool — expects one item per row rather than one long string.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Line Break vs. Paragraph Break vs. Blank Line vs. Trailing Line Break
      </h2>
      <p>
        These terms get used loosely, so it&apos;s worth being precise:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>A line break moves whatever comes next onto a new line, directly below the previous one.</li>
        <li>A paragraph break separates one paragraph from the next, typically with more visual space than a plain line break.</li>
        <li>A blank line is an empty line placed between two blocks of text, used to add visual separation.</li>
        <li>A trailing line break is a line break left after the very last repetition — sometimes wanted, sometimes not, depending on where the output is headed.</li>
      </ul>

      <div className="overflow-x-auto rounded-lg border border-border my-4">
        <table className="w-full text-left text-sm text-foreground">
          <thead className="bg-muted text-xs uppercase text-muted-foreground border-b border-border">
            <tr>
              <th className="px-4 py-3 font-semibold">Format</th>
              <th className="px-4 py-3 font-semibold">Example use</th>
              <th className="px-4 py-3 font-semibold">Advantage</th>
              <th className="px-4 py-3 font-semibold">Possible problem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            <tr>
              <td className="px-4 py-3 font-medium">Line break</td>
              <td className="px-4 py-3">Word or short line repeated in a list</td>
              <td className="px-4 py-3">Clean, one entry per row</td>
              <td className="px-4 py-3">Long outputs take more vertical space</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Paragraph break</td>
              <td className="px-4 py-3">Repeated paragraphs</td>
              <td className="px-4 py-3">Clear visual separation</td>
              <td className="px-4 py-3">Adds extra characters to the total output</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Blank line</td>
              <td className="px-4 py-3">Spacing between repeated blocks</td>
              <td className="px-4 py-3">Easier to read and scan</td>
              <td className="px-4 py-3">Increases character count slightly</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Trailing line break</td>
              <td className="px-4 py-3">End of the full output</td>
              <td className="px-4 py-3">Matches some form or field expectations</td>
              <td className="px-4 py-3">Can cause an unexpected extra empty entry if the destination doesn&apos;t expect it</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Google Sheets
      </h2>
      <p>
        The REPT function can insert a new-line character using CHAR(10):
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(&quot;Hello&quot;&amp;CHAR(10), 5)
      </div>
      <p>
        You&apos;ll need to enable text wrapping on the cell for the line breaks to actually display instead of running together visually.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Excel
      </h2>
      <p>
        Excel works the same way:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(&quot;Hello&quot;&amp;CHAR(10), 5)
      </div>
      <p>
        As with Sheets, turn on &quot;Wrap Text&quot; for the cell, or the line breaks will be stored correctly but won&apos;t be visible until wrapping is enabled.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Microsoft Word
      </h2>
      <p>
        Word doesn&apos;t have a repeat formula, but a short macro adds a new line after each repetition automatically:
      </p>
      <pre className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        <code>{`Sub RepeatOnNewLines()
    Dim i As Integer
    For i = 1 To 5
        Selection.TypeText "Hello"
        Selection.TypeParagraph
    Next i
End Sub`}</code>
      </pre>
      <p>
        TypeParagraph is what moves each repetition to its own line in the document.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Python
      </h2>
      <pre className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        <code>{`result = "\\n".join(["Hello"] * 5)
print(result)`}</code>
      </pre>
      <p>
        &quot;\n&quot; is the line-break character, so joining with it puts each repetition on its own line.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        JavaScript
      </h2>
      <pre className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        <code>{`const result = Array(5).fill("Hello").join("\\n");
console.log(result);`}</code>
      </pre>
      <p>
        Same idea — &quot;\n&quot; as the separator produces one entry per line.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Preserving Line Breaks When Copying Into Another App
      </h2>
      <p>
        Line breaks don&apos;t always survive the trip once text is pasted somewhere new. A few reasons this happens:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Some apps strip formatting on paste, collapsing multiple lines into one continuous string.</li>
        <li>Spreadsheet cells need text wrapping enabled, or multiline content will display as a single line even though the line breaks are technically still there.</li>
        <li>Plain-text fields sometimes convert line breaks into spaces, depending on how the field is built.</li>
      </ul>
      <p>
        If your output looks correct before pasting but wrong afterward, it&apos;s usually the destination app changing how it displays or interprets the line breaks — not something wrong with how the text was generated.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Common Line-Break Problems
      </h2>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Line breaks collapsing into spaces after pasting into certain apps or fields.</li>
        <li>Spreadsheet cells showing one long line instead of separate rows, because text wrapping wasn&apos;t turned on.</li>
        <li>Large multiline output being awkward to copy on mobile, since scrolling through hundreds or thousands of lines to select everything can be slow and error-prone.</li>
        <li>An unexpected trailing line break creating an extra blank entry in a form or list that wasn&apos;t expecting one.</li>
        <li>Line breaks adding to the total character count more than people expect, especially across a large number of repetitions.</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Practical Uses: Lists, QA Testing, Forms, Placeholders, Documents
      </h2>
      <p>
        Repeating text on separate lines comes up in a range of everyday and technical situations:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          <strong className="text-foreground">Lists</strong> — repeated values or placeholder entries formatted one per row.
        </li>
        <li>
          <strong className="text-foreground">QA and input testing</strong> — checking how a form or field handles multiline input, or a specific number of line-separated entries.
        </li>
        <li>
          <strong className="text-foreground">Forms</strong> — generating sample data where each line represents a separate submission or record.
        </li>
        <li>
          <strong className="text-foreground">Placeholder content</strong> — filling a layout with repeated lines to see how it looks with real volume.
        </li>
        <li>
          <strong className="text-foreground">Documents</strong> — building repeated line items for templates, drafts, or structured content.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Before You Copy: QA Checklist
      </h2>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Confirm the repetition count matches what you intended.</li>
        <li>Check that the new-line separator is actually applied, not a space or comma.</li>
        <li>Scan the first and last few lines of the output for accuracy.</li>
        <li>Check the total character count, especially for large repetition counts.</li>
        <li>Confirm whether a trailing line break exists and whether the destination expects one.</li>
        <li>Test-paste into the destination app to confirm line breaks display correctly.</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            How do I repeat text on new lines?
          </h3>
          <p className="text-muted-foreground text-base">
            Enter your text, set the repetition count, and choose a new-line separator instead of a space or comma. Each repetition will appear on its own line in the output.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            How do I repeat a word on separate lines?
          </h3>
          <p className="text-muted-foreground text-base">
            The same process applies to a single word — type it once, set your count, and select a new-line separator so each copy lands on its own row.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            How do I repeat a sentence 100 times on separate lines?
          </h3>
          <p className="text-muted-foreground text-base">
            Enter the full sentence, set the count to 100, and choose a new-line separator. Each of the 100 repetitions will appear as its own line.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            How do I repeat text with line breaks?
          </h3>
          <p className="text-muted-foreground text-base">
            A line break is created by selecting the new-line separator option, which places each repetition directly below the previous one.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            What&apos;s the difference between a line break and a paragraph break?
          </h3>
          <p className="text-muted-foreground text-base">
            A line break simply moves the next text to a new line, while a paragraph break separates two paragraphs, typically with more visual spacing between them, like a blank line.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Why do line breaks disappear when I paste text?
          </h3>
          <p className="text-muted-foreground text-base">
            Some apps or text fields strip formatting on paste, or convert line breaks into spaces. Spreadsheet cells specifically need text wrapping enabled to display multiline content the way it was generated.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Can I repeat text 1,000 times on separate lines?
          </h3>
          <p className="text-muted-foreground text-base">
            Yes, custom repetition counts go up to 10,000, so 1,000 lines is well within range.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Can I copy or download multiline repeated text?
          </h3>
          <p className="text-muted-foreground text-base">
            Yes, once the output is generated you can copy it directly or download it as a file.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Can I repeat text on mobile?
          </h3>
          <p className="text-muted-foreground text-base">
            Yes, since the tool works in a browser, the same process applies whether you&apos;re using a phone or a desktop.
          </p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Try It Yourself
      </h2>
      <p>
        To repeat text on new lines, enter your text, choose your repetition count, select a new-line separator, and copy or download the result. You can <Link href="/" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">repeat text with line breaks</Link> in a few seconds, without manually pressing Enter between every copy.
      </p>
    </div>
  )
}
