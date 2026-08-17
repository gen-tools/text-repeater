import Link from "next/link"

export function HowToRepeatAWordOrSentenceArticle() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Quick Answer
      </h2>
      <p>
        Type your word, phrase, or sentence once, set how many times you want it repeated, and choose a separator. A browser-based repeater generates the full result instantly — no manual copying, no losing count halfway through.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        What Is a Word Repeater?
      </h2>
      <p>
        A word repeater does exactly what it sounds like: you give it one word, tell it how many times you want that word repeated, and it builds the output for you. Type &quot;Hello,&quot; ask for 50 repetitions, and you get 50 copies of &quot;Hello&quot; back, formatted however you specify.
      </p>
      <p>
        It&apos;s a narrower job than it might first seem — a word repeater is really just one specific use case within a broader tool that handles repetition in general.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Word Repeater vs. Text Repeater
      </h2>
      <p>
        Here&apos;s the distinction worth understanding: a &quot;word repeater&quot; describes what someone&apos;s trying to do — repeat a single word — while a &quot;text repeater&quot; is the broader tool that handles that job along with everything else, including phrases, full sentences, whole paragraphs, individual lines, and emojis.
      </p>
      <p>
        They&apos;re not two separate tools in the sense of doing unrelated jobs — repeating a word is simply one of the things a text repeater does. If your input happens to be a single word, you&apos;re using it as a word repeater. If it&apos;s a full paragraph, you&apos;re using the exact same underlying process as a paragraph repeater. The input changes; the mechanism behind it doesn&apos;t.
      </p>
      <p>
        That said, if all you ever need is quick single-word or short-phrase repetition, the <Link href="/word-repeater" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">Word Repeater</Link> is built specifically for that — a simpler, more focused version of the same idea. The main Text Repeater does everything the Word Repeater does, plus sentences, full paragraphs, individual lines, and emojis, with additional controls like Entire Text, Each Word, Each Line, and Paragraphs modes. In short: reach for the Word Repeater when the job is just a word or short phrase, and use the full Text Repeater when you&apos;re working with longer or mixed content.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat a Word 100 Times: &quot;Hello&quot;
      </h2>
      <p>
        A single word is the simplest starting point.
      </p>
      <p>
        <strong className="text-foreground font-semibold">Example: &quot;Hello&quot; × 100</strong>
      </p>
      <p>
        Set the count to 100, then decide on formatting:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Space-separated: Hello Hello Hello Hello ... Hello</li>
        <li>One per line, for 100 individual entries</li>
        <li>A custom separator, like a comma, if you want it to read as a list</li>
      </ul>
      <p>
        The word itself never changes — only how the 100 copies are arranged.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat a Sentence: &quot;I will complete my work.&quot;
      </h2>
      <p>
        A full sentence needs to travel as one complete unit — not get broken into individual words.
      </p>
      <p>
        <strong className="text-foreground font-semibold">Example: 3 repetitions</strong>
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto space-y-1">
        <div>I will complete my work.</div>
        <div>I will complete my work.</div>
        <div>I will complete my work.</div>
      </div>
      <p>
        Every copy keeps its punctuation, its capitalization, and its word order exactly as written. That&apos;s the difference between repeating a sentence and repeating the words inside it separately.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat a Phrase: &quot;yes no&quot; vs. Repeating Each Word
      </h2>
      <p>
        This is a common point of confusion, so it&apos;s worth being precise about it.
      </p>
      <p>
        Repeating the phrase &quot;yes no&quot; as one unit gives you:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        yes no yes no yes no
      </div>
      <p>
        Repeating &quot;yes&quot; and &quot;no&quot; as two separate words instead produces a completely different structure — a block of repeated &quot;yes,&quot; followed by a separate block of repeated &quot;no,&quot; rather than the two words alternating together as a pair.
      </p>
      <p>
        If the meaning of what you&apos;re repeating depends on the words staying together — a name, an instruction, a short phrase — treat it as a phrase, not as individual words.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat a Paragraph While Keeping Sentences Together
      </h2>
      <p>
        Paragraphs follow the same logic as sentences, just at a larger scale. The whole paragraph — every sentence inside it, in order — repeats as one block rather than getting split apart sentence by sentence.
      </p>
      <p>
        This matters if you&apos;re generating placeholder content or a block of repeated text for testing layout, since a paragraph that&apos;s been quietly rearranged or split mid-repetition won&apos;t read the way the original did.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        When to Use Entire Text, Each Word, Each Line, and Paragraphs
      </h2>
      <p>
        These four modes decide what counts as &quot;one unit&quot; to repeat:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          <strong className="text-foreground">Entire Text</strong> — treats everything you typed, however long, as a single block and repeats that block as a whole. Use this for a word, phrase, sentence, or short paragraph you want kept intact.
        </li>
        <li>
          <strong className="text-foreground">Each Word</strong> — breaks your input into individual words and repeats each one separately. Use this when you actually want each word repeated on its own, not the phrase as a combined unit.
        </li>
        <li>
          <strong className="text-foreground">Each Line</strong> — treats every line you&apos;ve entered as its own item and repeats each independently. Useful if you&apos;ve typed several different phrases and want each one repeated the same number of times.
        </li>
        <li>
          <strong className="text-foreground">Paragraphs</strong> — applies the same logic at the paragraph level, repeating each paragraph block on its own.
        </li>
      </ul>
      <p>
        Picking the right mode upfront is what determines whether &quot;yes no&quot; comes out as a paired phrase or as two disconnected blocks of repeated words.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Spaces, Commas, Periods, New Lines, and Custom Separators
      </h2>
      <p>
        Whatever separator you choose sits between each repetition and shapes how the final output reads — a space for a compact single-line block, a new line when each copy needs its own row, a comma for something closer to a list, or a custom character if you need something more specific like a dash or pipe.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeat 10, 50, 100, 1,000, or 10,000 Times
      </h2>
      <p>
        The process is identical no matter the count — you&apos;re just changing one number.
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          <strong className="text-foreground">10</strong> — quick and easy to check by eye if you wanted to.
        </li>
        <li>
          <strong className="text-foreground">50</strong> — still skimmable, but manual counting starts getting shaky here.
        </li>
        <li>
          <strong className="text-foreground">100</strong> — past the point where manual copying reliably lands on an exact count.
        </li>
        <li>
          <strong className="text-foreground">1,000</strong> — impractical to build by hand at all.
        </li>
        <li>
          <strong className="text-foreground">10,000</strong> — the tool&apos;s upper limit, well outside anything you&apos;d attempt manually.
        </li>
      </ul>
      <p>
        Same input, same formatting logic, just a different number typed into the count field.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Mobile and Browser Use
      </h2>
      <p>
        The tool is free, works directly in a browser, and doesn&apos;t require creating an account — which means it works the same way whether you&apos;re on a phone browser or a desktop one. Type your text, set your count, generate the output, and copy or download it from wherever you&apos;re working.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Google Sheets and Excel, Briefly
      </h2>
      <p>
        If you&apos;re already in a spreadsheet, the REPT function handles basic repetition:
      </p>
      <div className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        =REPT(&quot;Hello &quot;, 100)
      </div>
      <p>
        That repeats &quot;Hello &quot; 100 times inside a single cell. It&apos;s a reasonable option if you&apos;re already working in Sheets or Excel for another reason, though for a quick standalone task, a dedicated repeater is usually faster since there&apos;s no formula to write.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Python and JavaScript, Briefly
      </h2>
      <p>
        For developers, a one-liner does the job:
      </p>
      <p className="font-semibold text-foreground">Python:</p>
      <pre className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        <code>{`result = " ".join(["Hello"] * 100)`}</code>
      </pre>
      <p className="font-semibold text-foreground">JavaScript:</p>
      <pre className="rounded-lg bg-muted p-4 font-mono text-sm text-foreground overflow-x-auto">
        <code>{`const result = Array(100).fill("Hello").join(" ");`}</code>
      </pre>
      <p>
        These make sense when the repeated text needs to be part of a larger script or automated process.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Numbering Repetitions
      </h2>
      <p>
        If you want each repetition numbered — &quot;1. Hello,&quot; &quot;2. Hello,&quot; and so on — that&apos;s not something built into standard repetition output. You&apos;d need to add the numbering yourself afterward, or build it manually with a spreadsheet formula that combines a row number with the repeated text.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Character Counts and Output Size
      </h2>
      <p>
        Longer inputs and larger counts add up fast. The tool displays a live word and character count as the output is generated, so you can see exactly how large the result is before copying or downloading it — useful if you&apos;re headed somewhere with a character limit.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Manual-Copy Mistakes
      </h2>
      <p>
        Doing this by hand tends to go wrong in predictable ways:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Losing count somewhere past 20 or 30 repeats.</li>
        <li>Skipping a copy without noticing.</li>
        <li>Ending up with one extra copy by accident.</li>
        <li>Punctuation or capitalization drifting on some repeats but not others.</li>
        <li>Inconsistent spacing between pasted copies.</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Common Errors
      </h2>
      <p>
        Beyond manual mistakes, a few setup errors show up often:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Choosing Each Word mode when Entire Text was actually needed, splitting a phrase apart unintentionally.</li>
        <li>Forgetting to set a separator, ending up with a format that doesn&apos;t fit the destination.</li>
        <li>Not checking the character count before pasting into something with a limit.</li>
        <li>Assuming the output was generated correctly without a quick scan of the start and end.</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Legitimate Uses and Responsible Use
      </h2>
      <p>
        Repeating a word, phrase, or sentence comes up in plenty of ordinary situations — messages, captions, placeholder content, creative formatting, or testing how a system handles repeated input. It&apos;s not intended for flooding a chat, sending unwanted repetitive messages, or overwhelming another person or platform. Use it for content you&apos;d actually want to send or generate yourself.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Before You Copy: Checklist
      </h2>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Confirm the repetition count matches what you intended.</li>
        <li>Check whether the input should repeat as a whole (Entire Text) or broken apart (Each Word/Line).</li>
        <li>Check the separator matches where the output is going.</li>
        <li>Glance at the start and end of the generated output.</li>
        <li>Check the character count against any destination limit.</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Comparison: What Repeats as One Unit
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border my-4">
        <table className="w-full text-left text-sm text-foreground">
          <thead className="bg-muted text-xs uppercase text-muted-foreground border-b border-border">
            <tr>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="px-4 py-3 font-semibold">Example</th>
              <th className="px-4 py-3 font-semibold">Repeats as</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            <tr>
              <td className="px-4 py-3 font-medium">Word</td>
              <td className="px-4 py-3 font-mono text-xs">Hello</td>
              <td className="px-4 py-3">The word itself</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Sentence</td>
              <td className="px-4 py-3 font-mono text-xs">I will complete my work.</td>
              <td className="px-4 py-3">The full sentence</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Phrase</td>
              <td className="px-4 py-3 font-mono text-xs">yes no</td>
              <td className="px-4 py-3">Both words together</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Paragraph</td>
              <td className="px-4 py-3 font-mono text-xs">A short paragraph</td>
              <td className="px-4 py-3">The entire paragraph</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Line</td>
              <td className="px-4 py-3 font-mono text-xs">Each line you type</td>
              <td className="px-4 py-3">That line, on its own</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Individual word</td>
              <td className="px-4 py-3 font-mono text-xs">Each word split apart</td>
              <td className="px-4 py-3">One word at a time</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            What&apos;s the difference between a word repeater and a text repeater?
          </h3>
          <p className="text-muted-foreground text-base">
            A word repeater refers to repeating a single word specifically, while a text repeater is the broader tool that also handles phrases, sentences, paragraphs, lines, and emojis — repeating a word is just one thing it can do.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            How do I repeat a phrase online without splitting the words apart?
          </h3>
          <p className="text-muted-foreground text-base">
            Enter the whole phrase together, like &quot;yes no,&quot; and use Entire Text mode so it repeats as one combined unit instead of each word repeating separately.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            How do I copy a word 100 times without typing it manually?
          </h3>
          <p className="text-muted-foreground text-base">
            Type the word once, set the repetition count to 100, and generate the output — no retyping or manual pasting required.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Can I repeat text multiple times with a custom separator?
          </h3>
          <p className="text-muted-foreground text-base">
            Yes, separators include spaces, new lines, commas, or a custom character you choose.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Can I number each repetition automatically?
          </h3>
          <p className="text-muted-foreground text-base">
            No, numbering isn&apos;t a built-in feature — you&apos;d need to add numbers yourself afterward or build that separately in a spreadsheet.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            How many times can I repeat a word or sentence?
          </h3>
          <p className="text-muted-foreground text-base">
            Custom counts go up to 10,000.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Does this work on mobile?
          </h3>
          <p className="text-muted-foreground text-base">
            Yes, it&apos;s browser-based, so it works the same way on a phone browser as it does on desktop.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Can I download the repeated text instead of copying it?
          </h3>
          <p className="text-muted-foreground text-base">
            Yes, once the output is generated, you can copy it directly or download it.
          </p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Try It Yourself
      </h2>
      <p>
        Whether it&apos;s one word, a short phrase, a full sentence, or a paragraph, you can <Link href="/" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">repeat text online</Link> in a few seconds — type it once, set your count, choose a separator, and copy or download the result.
      </p>
    </div>
  )
}
