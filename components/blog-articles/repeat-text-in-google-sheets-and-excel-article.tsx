import Link from "next/link"

export function RepeatTextInGoogleSheetsAndExcelArticle() {
  return (
    <div className="space-y-6">
      <p>
        Both Google Sheets and Excel use the same REPT function to repeat text inside a cell: =REPT(&quot;Hello &quot;, 100). From there, the details that actually matter are spreadsheet-specific — cell references, fill-down behavior, row numbering, text wrapping for line breaks, and the difference between one giant cell and one repeated value per row.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Google Sheets REPT Formula
      </h2>
      <p>The core formula:</p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(&quot;Hello &quot;, 100)
      </div>
      <p>
        This repeats &quot;Hello &quot; (note the trailing space inside the quotes) 100 times inside a single cell, producing one long combined string — not 100 separate cells.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Excel REPT Formula
      </h2>
      <p>
        Excel uses the identical function, since REPT is a standard spreadsheet function shared across both platforms:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(&quot;Hello &quot;, 100)
      </div>
      <p>
        Same syntax, same behavior — one cell, one combined string, repeated the number of times specified.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat Text Using a Cell Reference
      </h2>
      <p>
        Hardcoding the text directly into the formula works, but referencing a cell instead makes the formula reusable:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(A1&amp;&quot; &quot;, 100)
      </div>
      <p>
        Here, A1 holds the actual text you want repeated. Change the value in A1, and the formula updates automatically — no need to rewrite the formula itself every time.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Use a Separate Cell for the Repetition Count
      </h2>
      <p>
        Instead of hardcoding the number 100 into the formula, you can store it in its own cell and reference that instead:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(A1&amp;&quot; &quot;, B1)
      </div>
      <p>
        With this setup, A1 holds the text and B1 holds the repetition count. Changing either value updates the output without touching the formula at all — useful if you&apos;re testing different counts and don&apos;t want to edit the formula each time.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat Text With Spaces
      </h2>
      <p>
        Adding a space inside the repeated unit is what keeps the output from running together into one unbroken block:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(A1&amp;&quot; &quot;, 100)
      </div>
      <p>
        The &amp;&quot; &quot; appends a space after every copy of A1&apos;s content, so the result reads as separate words rather than one long string with no breaks.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat Text With Commas or Custom Separators
      </h2>
      <p>
        Swap the space for whatever separator you actually want:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(A1&amp;&quot;,&quot;, 100)
      </div>
      <p>
        This produces a comma after every repetition instead of a space. Any character can go inside the quotes — a semicolon, a pipe, a dash — depending on what format you need.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat Text With Line Breaks and Text Wrapping
      </h2>
      <p>
        To put each repetition on its own line inside a single cell, use CHAR(10) as the line-break character:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(A1&amp;CHAR(10), 99)&amp;A1
      </div>
      <p>
        This formula repeats A1 followed by a line break 99 times, then appends one final copy of A1 without a trailing break — giving you exactly 100 total repetitions, each on its own line, with no empty line left dangling at the end.
      </p>
      <p>
        Line breaks inside a cell won&apos;t display correctly unless text wrapping is turned on for that cell. In both Google Sheets and Excel, this is done through the cell formatting options — without it, the line breaks are technically present in the data but the cell will just show one squashed-together line.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Create One Repeated Value Per Row
      </h2>
      <p>
        If you want each repetition in its own row instead of packed into a single cell, REPT alone won&apos;t do it — that function always produces one combined cell. Instead, put the value once in the first cell, then fill the formula (or the value itself) down through the number of rows you need:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =A1
      </div>
      <p>
        Placed in A2 and filled down, this simply repeats the value from A1 in every row below it. This is the better approach when the destination — a database import, a bulk test upload, another spreadsheet — expects one entry per row rather than one long string.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Create Numbered Repeated Rows
      </h2>
      <p>
        To number each repeated row alongside the value, combine the row number with the repeated text:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =ROW()&amp;&quot;. &quot;&amp;$A$1
      </div>
      <p>
        ROW() returns the current row number, and $A$1 is an absolute reference — the dollar signs lock it in place so it doesn&apos;t shift when you fill the formula down through other rows.
      </p>
      <p>
        One detail worth catching: if your data starts on row 2 instead of row 1 (common when row 1 holds a header), the numbering will start at &quot;2.&quot; instead of &quot;1.&quot; unless you adjust for it — for example, =(ROW()-1)&amp;&quot;. &quot;&amp;$A$1 if your first data row is row 2 and you want numbering to start at 1.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat a Phrase as One Complete Unit
      </h2>
      <p>
        If the text you&apos;re repeating is a multi-word phrase — &quot;yes no,&quot; for example — referencing the whole cell keeps the phrase intact as a single unit rather than splitting it apart:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(A1&amp;&quot; &quot;, 10)
      </div>
      <p>
        As long as A1 contains &quot;yes no&quot; as one entry, the formula repeats that full phrase 10 times, keeping both words together on every repetition rather than treating them as separate items.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Generate Controlled Spreadsheet Test Data
      </h2>
      <p>
        Spreadsheets are a common place to build small test datasets — repeated placeholder values used to check how an import, formula, or downstream process handles a specific pattern of data.
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(&quot;test-value &quot;, 50)
      </div>
      <p>
        Combined with the one-repetition-per-row approach above, this is a fast way to generate a controlled block of identical test rows without typing each one manually.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        One Giant Cell vs. One Repetition Per Row
      </h2>
      <p>
        These two approaches solve different problems, and it&apos;s worth being clear about which one you actually need:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          One giant cell (via REPT) makes sense when you need a single combined string — for pasting somewhere else as one block, or for a character-count test where the whole thing needs to exist as one piece of text.
        </li>
        <li>
          One repetition per row makes sense when the destination expects structured, row-by-row data — a database import, a list of test entries, or anything that needs to be treated as separate records rather than one long string.
        </li>
      </ul>
      <p>
        Picking the wrong one usually isn&apos;t obvious until you try to use the output somewhere and it doesn&apos;t fit the shape that destination expects.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Handle Empty Source Cells
      </h2>
      <p>
        If the referenced cell is empty, REPT doesn&apos;t throw an error — it just returns an empty result, since it&apos;s repeating nothing. This can be easy to miss, especially in a filled-down formula where one row&apos;s source cell was accidentally left blank. Worth a quick scan down the column before trusting the output.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Avoid Trailing Separators and Unwanted Spaces
      </h2>
      <p>
        A formula like =REPT(A1&amp;&quot; &quot;, 100) adds a space after every repetition — including the very last one, leaving a trailing space at the end of the output that&apos;s easy to miss. Depending on where the result is headed, that trailing character can cause exact-match comparisons to fail, since &quot;Hello &quot; (with a trailing space) isn&apos;t the same string as &quot;Hello&quot; without one.
      </p>
      <p>
        The line-break formula shown earlier handles this by appending one final copy without a trailing separator:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(A1&amp;CHAR(10), 99)&amp;A1
      </div>
      <p>
        For a space or comma separator, the same technique applies — repeat the pattern one fewer time than your target count, then append one final unseparated copy at the end.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Check Whether the Output Contains Exactly the Intended Number of Copies
      </h2>
      <p>
        It&apos;s worth confirming a formula actually produced the count you meant, especially with off-by-one issues around trailing separators. LEN() combined with SUBSTITUTE() can help here — for example, comparing the total character length before and after removing the repeated text gives a rough way to verify the count. For most everyday use, though, a quick visual scan of the cell content (with wrapping enabled) is usually enough to catch an obvious miscount.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Spreadsheet Output and Display Limitations
      </h2>
      <p>
        A few spreadsheet-specific limits are worth knowing before relying on REPT for a large output:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          Excel cells cap out at 32,767 characters. A large repetition count combined with a long source string can hit that ceiling.
        </li>
        <li>
          Very long cell content is hard to review visually, even with wrapping enabled, since scrolling through thousands of characters inside one cell isn&apos;t practical.
        </li>
        <li>
          Formulas recalculate. If the source cell changes, the output changes with it — which is useful for reusability, but means the formula-based result isn&apos;t a fixed, static piece of text unless you convert it.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Common Google Sheets and Excel Formula Mistakes
      </h2>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          Forgetting the separator character inside the REPT formula, resulting in one unbroken block instead of the intended spacing.
        </li>
        <li>
          Using a relative reference instead of an absolute one (A1 instead of $A$1) when filling a formula down, causing the reference to shift row by row instead of staying fixed.
        </li>
        <li>
          Filling a formula down too far, creating extra unwanted rows beyond the intended count.
        </li>
        <li>
          Not enabling text wrapping, so line breaks exist in the data but aren&apos;t visible in the cell.
        </li>
        <li>
          Leaving a trailing separator at the end of the output without accounting for it.
        </li>
        <li>
          Pasting a formula-driven result somewhere that needs static text, without converting the formula to a value first (copy, then Paste Special &gt; Values Only) — otherwise the pasted content can break if it&apos;s referencing cells that don&apos;t exist in the new location.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        When an Online Text Repeater Is Faster Than a Spreadsheet
      </h2>
      <p>
        Formulas are the right call when the repeated text needs to live inside a spreadsheet, react to changing cell values, or become part of a larger sheet of calculations. For a quick, one-off piece of repeated text that doesn&apos;t need to exist inside a spreadsheet at all, opening a spreadsheet just to write a formula is often more setup than the task needs. An <Link href="/" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">online text repeater</Link> skips the formula entirely — type the text, set the count and separator, and copy or download the result directly.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Comparison: Spreadsheet Formulas vs. Other Methods
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-foreground font-semibold border-b border-border">
            <tr>
              <th className="p-3">Method</th>
              <th className="p-3">Best for</th>
              <th className="p-3">Output</th>
              <th className="p-3">Advantage</th>
              <th className="p-3">Limitation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-3 font-medium text-foreground">Google Sheets REPT</td>
              <td className="p-3">Repeated text inside a sheet</td>
              <td className="p-3">One combined cell</td>
              <td className="p-3">Reactive to cell changes, integrates with other formulas</td>
              <td className="p-3">Character limits, no native row-splitting</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-foreground">Excel REPT</td>
              <td className="p-3">Same, in Excel</td>
              <td className="p-3">One combined cell</td>
              <td className="p-3">Same formula syntax as Sheets</td>
              <td className="p-3">32,767-character cell limit</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-foreground">One-copy-per-row formula</td>
              <td className="p-3">Structured, row-based test data</td>
              <td className="p-3">Separate rows</td>
              <td className="p-3">Matches import/database formats</td>
              <td className="p-3">Requires filling down carefully to avoid extra rows</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-foreground">Online Text Repeater</td>
              <td className="p-3">Quick, standalone repeated text</td>
              <td className="p-3">Copyable or downloadable text</td>
              <td className="p-3">No spreadsheet needed, instant setup</td>
              <td className="p-3">Not connected to live cell data</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground text-base">
            How do I repeat text in Google Sheets?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Use the REPT function: =REPT(&quot;Hello &quot;, 100) repeats &quot;Hello &quot; 100 times inside a single cell. Reference a cell instead of typing the text directly if you want the formula to update automatically when the source value changes.
          </p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground text-base">
            How do I repeat text in Excel?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Excel uses the same REPT formula as Google Sheets: =REPT(&quot;Hello &quot;, 100). The syntax and behavior are identical across both platforms.
          </p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground text-base">
            How do I repeat text based on a number stored in another cell?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Reference the count cell directly in the formula: =REPT(A1&amp;&quot; &quot;, B1), where A1 holds the text and B1 holds the repetition count.
          </p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground text-base">
            How do I put each repeated value on its own row instead of one cell?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            REPT always produces a single combined cell. For one value per row, place the text in the first cell and fill it (or a formula referencing it) down through the number of rows you need.
          </p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground text-base">
            How do I number each repeated row?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Combine ROW() with an absolute cell reference: =ROW()&amp;&quot;. &quot;&amp;$A$1. Adjust the formula if your data doesn&apos;t start on row 1, since ROW() returns the actual spreadsheet row number.
          </p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground text-base">
            Why does my repeated text show up as one long line instead of separate lines?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Line breaks created with CHAR(10) inside a cell only display correctly once text wrapping is turned on for that cell — otherwise the breaks exist in the data but aren&apos;t visible.
          </p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground text-base">
            Why does my repeated output have an extra space or line at the end?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            A formula like =REPT(A1&amp;&quot; &quot;, 100) adds a separator after every copy, including the last one, leaving a trailing space. Structuring the formula to repeat one fewer time and append a final unseparated copy avoids this.
          </p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="font-semibold text-foreground text-base">
            When should I use a spreadsheet formula instead of an online text repeater?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Use a formula when the repeated text needs to live inside a spreadsheet and stay connected to changing cell values. For a one-off piece of repeated text that doesn&apos;t need to exist in a sheet at all, an online text repeater is usually faster.
          </p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        When to Use Which
      </h2>
      <p>
        A spreadsheet formula earns its place when the repeated text is part of a larger sheet — reacting to other cells, feeding into further calculations, or needing to live alongside real spreadsheet data. For everything else — a quick block of repeated text you just need to copy somewhere — opening a formula-based tool is more setup than the task calls for, and a standalone <Link href="/" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">text repeater</Link> gets you the same result faster.
      </p>
      <p>
        If the reason you&apos;re generating repeated text in the first place is controlled test strings for QA work, it&apos;s worth deciding upfront whether the test actually needs the data inside a spreadsheet or just needs the raw string — that answer usually points you to the right method immediately.
      </p>
    </div>
  )
}
