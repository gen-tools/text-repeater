import Link from "next/link"

export function WordCounterArticle() {
  return (
    <div className="space-y-6">
      <p>
        Whether you are a student writing an academic essay, an author drafting a book chapter, a digital marketer crafting SEO meta descriptions, or a social media manager composing tweets and Instagram captions, staying within strict word and character limits is vital.
      </p>
      <p>
        Our real-time <Link href="/word-counter" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">Word Counter</Link> provides instant, accurate text statistics as you type or paste your document. Analyze total word count, character count with and without spaces, sentence count, paragraph count, and estimated reading time with zero lag.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Key Metrics Explained: Beyond Simple Word Counts
      </h2>
      <p>
        Effective writing requires monitoring multiple structural metrics simultaneously:
      </p>

      <div className="overflow-x-auto rounded-lg border border-border my-4">
        <table className="w-full text-left text-sm text-foreground">
          <thead className="bg-muted text-xs uppercase text-muted-foreground border-b border-border">
            <tr>
              <th className="px-4 py-3 font-semibold">Text Metric</th>
              <th className="px-4 py-3 font-semibold">How It Is Calculated</th>
              <th className="px-4 py-3 font-semibold">Primary Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            <tr>
              <td className="px-4 py-3 font-medium">Word Count</td>
              <td className="px-4 py-3">Total words separated by white spaces</td>
              <td className="px-4 py-3">Essays, blog posts, freelance copy rate calculations</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Characters (With Spaces)</td>
              <td className="px-4 py-3">Total string length including spaces & symbols</td>
              <td className="px-4 py-3">Twitter/X posts, SMS, meta title tags</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Characters (No Spaces)</td>
              <td className="px-4 py-3">Pure alphanumeric characters & punctuation</td>
              <td className="px-4 py-3">Academic translations, character-based billing</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Sentence Count</td>
              <td className="px-4 py-3">Sentences ending in periods, exclamation/question marks</td>
              <td className="px-4 py-3">Readability scoring, paragraph density checks</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Paragraph Count</td>
              <td className="px-4 py-3">Distinct text blocks delimited by new lines</td>
              <td className="px-4 py-3">Content structure, readability layout</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Estimated Reading Time</td>
              <td className="px-4 py-3">Based on average adult speed of 200–250 WPM</td>
              <td className="px-4 py-3">Blog header estimates, speech presentation planning</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Social Media & Digital Marketing Character Limits
      </h2>
      <p>
        Publishing online means dealing with strict character caps across digital channels:
      </p>

      <ul className="list-disc list-inside space-y-2.5 pl-2">
        <li><strong>Google Meta Title Tag:</strong> 50–60 characters (max 600 pixels width).</li>
        <li><strong>Google Meta Description Tag:</strong> 150–160 characters.</li>
        <li><strong>Twitter/X Post:</strong> 280 characters for free accounts.</li>
        <li><strong>Instagram Bio:</strong> 150 characters maximum.</li>
        <li><strong>Instagram Caption:</strong> 2,200 characters maximum.</li>
        <li><strong>LinkedIn Post:</strong> 3,000 characters maximum.</li>
        <li><strong>TikTok Bio:</strong> 80 characters maximum.</li>
      </ul>

      <p>
        Pasting your copy into our Word Counter before publishing ensures your headlines and captions never get cut off with awkward ellipses (...).
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Step-by-Step Guide: Analyzing Your Text Online
      </h2>
      <p>
        Checking your document statistics takes seconds:
      </p>
      <ol className="list-decimal list-inside space-y-2.5 pl-2 font-normal">
        <li>
          Open the Word Counter tool in any web browser.
        </li>
        <li>
          Start typing directly into the text editor, or paste copy from Microsoft Word, Google Docs, or an email.
        </li>
        <li>
          Observe the real-time statistics cards update automatically as you edit.
        </li>
        <li>
          Check the reading time estimate to gauge speech or presentation length.
        </li>
      </ol>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Integrating Word Count with Other Text Utilities
      </h2>
      <p>
        Combining analytics with text transformation streamlines writing workflows:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          Check character counts before duplicating content using our main <Link href="/" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">Text Repeater</Link> to prevent exceeding destination app limits.
        </li>
        <li>
          Convert text capitalization using the <Link href="/case-converter" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">Case Converter</Link> and verify headline lengths in real time.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            How does the word counter handle hyphenated words or contractions?
          </h3>
          <p className="text-muted-foreground text-base">
            Standard words separated by spaces count as individual units. Hyphenated words (e.g. &quot;state-of-the-art&quot;) count as single words or multiple depending on spacing.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Is my document uploaded to a server when I paste it?
          </h3>
          <p className="text-muted-foreground text-base">
            No. The Word Counter processes text 100% client-side inside your browser memory. Your documents remain confidential and secure.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Can I count words on mobile phones?
          </h3>
          <p className="text-muted-foreground text-base">
            Yes! The tool is lightweight, mobile-responsive, and works smoothly on iOS, Android, and tablets.
          </p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Conclusion
      </h2>
      <p>
        Never guess document length or hit unexpected character limits again. Bookmark our free tool to <Link href="/word-counter" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">count words and characters online</Link> for instant writing analytics!
      </p>
    </div>
  )
}
