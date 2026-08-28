import Link from "next/link"

export function ZalgoTextArticle() {
  return (
    <div className="space-y-6">
      <p>
        Zalgo text — often described as &quot;cursed text,&quot; &quot;glitch text,&quot; or &quot;demonic typography&quot; — is one of the most recognizable visual memes on the internet. With character marks dripping downward, soaring upward, and slashing through letters, Zalgo text looks like corrupted code or a digital glitch straight out of a horror movie.
      </p>
      <p>
        Despite its distorted appearance, Zalgo text is not a glitch, virus, or image file. It consists entirely of valid Unicode characters. Our free <Link href="/zalgo-text-generator" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">Zalgo Text Generator</Link> allows you to convert plain text into creepy glitch art in seconds with adjustable intensity levels (Mini, Normal, and Crazy).
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        The Lore & Origins of Zalgo Text
      </h2>
      <p>
        The term &quot;Zalgo&quot; originated in 2004 on the Something Awful forums created by cartoonist Dave Kelly. He posted comic strips where characters were overtaken by an eldritch entity called Zalgo, causing their eyes to bleed and surrounding text to corrupt visually.
      </p>
      <p>
        As the meme expanded across Reddit, 4chan, and Creepypasta lore, web developers realized they could replicate the visual corruption effect purely using Unicode combining marks. Today, Zalgo text is widely used in Halloween social media posts, horror gaming profiles, metal band aesthetic captions, and Discord roll plays.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        The Science Behind Zalgo Text: Unicode Combining Marks
      </h2>
      <p>
        How does a text string overflow its line height without breaking web layouts? The secret lies in <strong>Combining Diacritical Marks</strong> (Unicode range <code>U+0300</code> to <code>U+036F</code>).
      </p>

      <p>
        In world languages (such as French, Spanish, Vietnamese, or Arabic), accents and diacritics sit above or below letters (e.g., é, ñ, ü). The Unicode standard allows multiple diacritical marks to stack onto a single base character.
      </p>

      <div className="overflow-x-auto rounded-lg border border-border my-4">
        <table className="w-full text-left text-sm text-foreground">
          <thead className="bg-muted text-xs uppercase text-muted-foreground border-b border-border">
            <tr>
              <th className="px-4 py-3 font-semibold">Direction</th>
              <th className="px-4 py-3 font-semibold">Unicode Range</th>
              <th className="px-4 py-3 font-semibold">Visual Stacking Effect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            <tr>
              <td className="px-4 py-3 font-medium">Zalgo Up (Top)</td>
              <td className="px-4 py-3 font-mono text-xs">U+0300 – U+0314</td>
              <td className="px-4 py-3">Diacritics stack upward into line height above text</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Zalgo Middle</td>
              <td className="px-4 py-3 font-mono text-xs">U+0315 – U+0338</td>
              <td className="px-4 py-3">Strikethrough & overlay marks through letter centers</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Zalgo Down (Bottom)</td>
              <td className="px-4 py-3 font-mono text-xs">U+0339 – U+036F</td>
              <td className="px-4 py-3">Dripping marks stack downward into lower margins</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        A Zalgo text generator takes standard letters and attaches dozens of random combining diacritics above, middle, and below each letter, creating the signature dripping corruption.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Zalgo Chaos Intensity Levels
      </h2>
      <p>
        Depending on where you plan to paste your Zalgo text, choosing the right chaos level ensures readability while maintaining dramatic effect:
      </p>

      <ul className="list-disc list-inside space-y-2.5 pl-2">
        <li><strong>Mini (Low Chaos):</strong> Adds 1–3 diacritical marks per letter. Clean, highly readable, suitable for gamertags and Twitter names.</li>
        <li><strong>Normal (Medium Chaos):</strong> Adds 5–10 marks per letter. Balanced glitch aesthetic perfect for Discord messages and captions.</li>
        <li><strong>Crazy (High Chaos):</strong> Adds 15–30+ marks per letter. Extreme, dripping corruption for memes and horror art.</li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Step-by-Step Guide: How to Generate Zalgo Text
      </h2>
      <p>
        Creating glitch text with our generator is effortless:
      </p>
      <ol className="list-decimal list-inside space-y-2.5 pl-2 font-normal">
        <li>
          Open the Zalgo Text Generator in your browser.
        </li>
        <li>
          Enter your target word or message in the input field.
        </li>
        <li>
          Adjust the intensity slider or toggle between <strong>Up</strong>, <strong>Middle</strong>, and <strong>Down</strong> direction checkboxes.
        </li>
        <li>
          Watch the live glitch box update automatically.
        </li>
        <li>
          Click <strong>Copy Zalgo Text</strong> and paste into Discord, Steam, WhatsApp, or Instagram.
        </li>
      </ol>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Combining Zalgo Text with Other Formatting Tools
      </h2>
      <p>
        Expand your digital typography Toolkit by exploring our other tools:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>
          Pre-format your text into aesthetic Unicode fonts using our <Link href="/fancy-text-generator" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">Fancy Text Generator</Link> before adding Zalgo glitch layers.
        </li>
        <li>
          Separate dense Zalgo blocks with clean spacing using our <Link href="/blank-text-generator" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">Blank Text Generator</Link> to prevent layout clipping.
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Can Zalgo text harm or crash my computer?
          </h3>
          <p className="text-muted-foreground text-base">
            No. Zalgo text consists purely of standard Unicode text characters. It contains no code, scripts, or viruses and is completely safe.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Why do some chat apps crop Zalgo text height?
          </h3>
          <p className="text-muted-foreground text-base">
            Some messaging platforms enforce fixed line-height containers (CSS <code>overflow: hidden</code>) to prevent distorted text from overlapping adjacent messages. Choosing &quot;Mini&quot; intensity resolves clipping.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Is the Zalgo Text Generator free to use?
          </h3>
          <p className="text-muted-foreground text-base">
            Yes, it is 100% free with unlimited generation and instant copying.
          </p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Conclusion
      </h2>
      <p>
        Unleash creepy, corrupted glitch typography for your profiles and memes. Try out our free tool to <Link href="/zalgo-text-generator" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">generate corrupted glitch text</Link> today!
      </p>
    </div>
  )
}
