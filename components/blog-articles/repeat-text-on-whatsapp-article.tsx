import Link from "next/link"

export function RepeatTextOnWhatsAppArticle() {
  return (
    <div className="space-y-6">
      <p>
        WhatsApp doesn&apos;t have a built-in way to repeat a message, and there&apos;s no setting hiding in the app that does it for you. But that doesn&apos;t mean you&apos;re stuck retyping &quot;Happy Birthday!&quot; fifty times by hand. The actual workflow is simpler than people expect: generate the repeated text somewhere else first, then paste the finished result straight into your chat.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Quick Answer
      </h2>
      <p>
        Use an online text repeater to generate your repeated text, then copy and paste it into WhatsApp. Type your word, phrase, or emoji once, set how many times you want it repeated, choose how each copy should be separated, and paste the result into the chat. WhatsApp itself doesn&apos;t do any of the repeating — it just displays whatever you paste in.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Repeat Text on WhatsApp in Five Steps
      </h2>
      <ol className="list-decimal list-inside space-y-2.5 pl-2 font-normal">
        <li>
          <strong>Open a text repeater in your browser.</strong> The <Link href="/" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">Text Repeater</Link> works on both phone and desktop browsers, is free, and doesn&apos;t require an account.
        </li>
        <li>
          <strong>Type or paste the text you want repeated.</strong> This can be a single word, a full phrase, an emoji, or even a short paragraph.
        </li>
        <li>
          <strong>Set your repetition count.</strong> You can go anywhere up to 10,000 repetitions, though for WhatsApp you&apos;ll usually want a much smaller number.
        </li>
        <li>
          <strong>Pick a separator.</strong> Decide whether each copy should be separated by a space, a new line, a comma, or something custom.
        </li>
        <li>
          <strong>Copy the result and paste it into WhatsApp.</strong> Tap into your chat, paste, and send like you would with any normal message.
        </li>
      </ol>
      <p>
        That&apos;s the whole process. No app switching mid-conversation, no manual counting, no risk of accidentally sending &quot;Hello&quot; 97 times instead of 100.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Repeat a Word on WhatsApp
      </h2>
      <p>
        Single words are the simplest case. Use Entire Text mode with a space separator, and you&apos;ll get a clean, evenly spaced block.
      </p>
      <p>
        <strong>Example: &quot;Hello&quot; repeated 10 times</strong>
      </p>
      <pre className="rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto border border-border">
        <code>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello</code>
      </pre>
      <p>
        That&apos;s ten copies of &quot;Hello,&quot; each separated by a single space — copy it exactly as it appears, paste it into WhatsApp, and send.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Repeat a Sentence or Phrase
      </h2>
      <p>
        Full sentences and phrases work the same way, just with more characters per repetition.
      </p>
      <p>
        <strong>Example: &quot;Happy birthday!&quot; repeated 100 times</strong>
      </p>
      <p>
        At 100 repetitions, a space separator turns into a long, dense line of text. A new-line separator is usually easier to read on the other end, especially in a chat window where message width is limited. Either way, the process is identical — type the phrase once, set the count, choose your separator, and generate the output.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Repeat Emojis
      </h2>
      <p>
        Emojis are treated exactly like any other character in the tool, so the process doesn&apos;t change.
      </p>
      <p>
        <strong>Example: a laughing emoji repeated 50 times</strong>
      </p>
      <pre className="rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto border border-border break-all whitespace-pre-wrap">
        <code>😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂😂</code>
      </pre>
      <p>
        With no separator, emojis stack into one tight block, which is the look most people go for. Add a space between each one and it spreads out into something more readable, if that&apos;s what you&apos;d rather send instead.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Put Each Repetition on a Separate Line
      </h2>
      <p>
        If you&apos;d rather each copy appear on its own line — useful for a list-style message, or just easier reading in a chat — set the separator to a new line instead of a space or comma.
      </p>
      <p>
        <strong>Example: &quot;Please reply&quot; on new lines</strong>
      </p>
      <pre className="rounded-lg bg-muted p-4 font-mono text-sm overflow-x-auto border border-border">
        <code>{`Please reply
Please reply
Please reply
Please reply
Please reply`}</code>
      </pre>
      <p>
        This paste behaves normally in WhatsApp: each line shows up as its own line within the same message, exactly as it appeared when you copied it.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Repeat Text With Spaces, Punctuation, or Custom Separators
      </h2>
      <p>
        The separator you pick shapes how the final message reads. A few common options:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li><strong>Space</strong> — a compact, single-line block, good for short words or emojis.</li>
        <li><strong>New line</strong> — better for longer phrases or when you want each copy clearly separated.</li>
        <li><strong>Comma</strong> — gives the message a list-like structure.</li>
        <li><strong>Custom separator</strong> — you&apos;re not locked into the defaults; a dash, a pipe, or any character you choose works too.</li>
      </ul>
      <p>
        Punctuation in your original text — exclamation points, question marks, periods — carries through exactly as typed, since the repeater doesn&apos;t alter your source text, only how many times it appears and what sits between each copy.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Repeat Text on WhatsApp Using a Phone
      </h2>
      <p>
        On mobile, the process is the same five steps, just within your phone&apos;s browser instead of a desktop one.
      </p>
      <ol className="list-decimal list-inside space-y-2.5 pl-2 font-normal">
        <li>Open your phone&apos;s browser and go to the text repeater.</li>
        <li>Type your text into the input field.</li>
        <li>Set the repetition count and separator.</li>
        <li>Tap to copy the result.</li>
        <li>Switch to WhatsApp, tap into the chat, paste, and send.</li>
      </ol>
      <p>
        Mobile keyboards make typing the same phrase repeatedly slow and error-prone, so this approach saves a real amount of time and taps compared to doing it by hand.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Repeat Text Using a Desktop Computer
      </h2>
      <p>
        On desktop, WhatsApp Web or the desktop app makes the copy-paste step even quicker, since you can use keyboard shortcuts.
      </p>
      <ol className="list-decimal list-inside space-y-2.5 pl-2 font-normal">
        <li>Open the text repeater in a browser tab.</li>
        <li>Enter your text, repetition count, and separator.</li>
        <li>Copy the output (Ctrl+C or Cmd+C).</li>
        <li>Switch to WhatsApp Web or the desktop app.</li>
        <li>Click into the chat box, paste (Ctrl+V or Cmd+V), and send.</li>
      </ol>
      <p>
        If you&apos;re going back and forth between the two often, keeping the text repeater open in one tab and WhatsApp Web in another makes the whole thing pretty fast.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        How to Check Character Count Before Pasting
      </h2>
      <p>
        Before you send anything, it helps to know how long the final message actually is. The Text Repeater tool shows a live word and character count as you generate your output, so you can see the size before copying anything.
      </p>
      <p>
        This matters more with longer phrases or paragraphs repeated many times over, since it&apos;s easy to underestimate how large the final block of text ends up being.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Why WhatsApp May Change Line Breaks, Emojis, or Formatting
      </h2>
      <p>
        Every so often, pasted text doesn&apos;t look exactly the same once it lands in WhatsApp. A few reasons this happens:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li><strong>Line breaks can collapse</strong> depending on your device&apos;s keyboard or clipboard behavior, especially when copying from certain browser fields.</li>
        <li><strong>Emoji rendering varies by device.</strong> The same emoji can look slightly different on an iPhone versus an Android phone versus a desktop app, since each platform uses its own emoji artwork.</li>
        <li><strong>Auto-formatting</strong> in WhatsApp (like turning <code>*text*</code> into bold) can interact unexpectedly with repeated symbols if your source text happens to include formatting characters.</li>
      </ul>
      <p>
        None of this is something a text repeater controls — it&apos;s just how WhatsApp handles pasted content on different devices. If something looks off after pasting, it&apos;s worth previewing the message before sending.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        WhatsApp Spam, Harassment, and Responsible Use
      </h2>
      <p>
        Repeating text has plenty of legitimate uses — emphasis, humor, testing, creative messaging. It&apos;s not meant for flooding someone&apos;s chat, sending unwanted repetitive messages, or harassing another person.
      </p>
      <p>
        A few things worth keeping in mind:
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li>Only send repeated messages to people who&apos;d actually welcome them — friends, group chats where it fits the tone, and so on.</li>
        <li>Sending the same message repeatedly to someone who hasn&apos;t asked for it can come across as spam, and WhatsApp treats repetitive or unwanted messaging as a violation of its terms.</li>
        <li>Repeated messaging aimed at bothering or overwhelming another person crosses into harassment, regardless of the platform.</li>
      </ul>
      <p>
        Generating repeated text is easy. Using it thoughtfully is on you.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Troubleshooting
      </h2>
      <p>
        <strong>Pasted text is incomplete.</strong> This usually means the copy didn&apos;t fully register before switching apps, or the text was too long for the clipboard to hold reliably on your device. Try copying again, or generate a shorter output and paste it in smaller pieces.
      </p>
      <p>
        <strong>Formatting changes after pasting.</strong> Line breaks or spacing can shift slightly depending on your device and keyboard. If the exact layout matters, preview the message in WhatsApp before sending and adjust the separator if needed.
      </p>
      <p>
        <strong>The message is too large to send.</strong> WhatsApp does have practical limits on message length, though the exact number isn&apos;t something worth guessing at. If your message won&apos;t send, try reducing the repetition count or breaking it into two separate messages.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        WhatsApp-Specific Ways to Speed This Up
      </h2>
      <p>
        Beyond the copy-paste workflow, WhatsApp and your phone&apos;s own keyboard have a couple of built-in features that pair well with a text repeater, especially if you find yourself repeating the same kind of message often.
      </p>

      <h3 className="text-xl font-bold text-foreground pt-2">
        Save a Phone Keyboard Shortcut for Instant Reuse
      </h3>
      <p>
        If you send a particular repeated phrase more than once — say, the same &quot;Happy Birthday!&quot; block or a laughing-emoji reaction — it&apos;s worth generating it once and saving it as a keyboard shortcut, rather than regenerating it from scratch every time.
      </p>
      <p>
        <strong>On iPhone:</strong> Go to Settings &gt; General &gt; Keyboard &gt; Text Replacement, add the repeated text as a new entry, and assign it a short trigger phrase like &quot;hbday.&quot; Typing that trigger anywhere, including in WhatsApp, expands it into the full repeated message.
      </p>
      <p>
        <strong>On Android (Gboard):</strong> Open Gboard settings, go to Dictionary &gt; Personal Dictionary, and add your repeated text with a shortcut phrase. The same expansion happens automatically as you type in any app, WhatsApp included.
      </p>
      <p>
        This only makes sense for phrases you reuse often. For a one-off message, generating it fresh with a text repeater is still faster than setting up a shortcut you&apos;ll only use once.
      </p>

      <h3 className="text-xl font-bold text-foreground pt-2">
        Use WhatsApp&apos;s Message Yourself Chat as a Staging Area
      </h3>
      <p>
        WhatsApp includes a self-chat feature — often labeled &quot;Message Yourself&quot; — that lets you send messages to your own number. It&apos;s a convenient place to paste a freshly generated repeated message, double-check how it looks once it&apos;s actually inside WhatsApp, and confirm line breaks and emoji rendering look right before forwarding it to the real conversation.
      </p>
      <p>
        This step is optional, but it&apos;s a useful habit for longer or more formatted messages where getting the layout right matters more than usual.
      </p>

      <h3 className="text-xl font-bold text-foreground pt-2">
        Star a Message for Later Use
      </h3>
      <p>
        Once you&apos;ve sent a repeated message you&apos;re happy with, you can star it inside WhatsApp (press and hold the message, then tap the star icon). Starred messages are collected in one place under Settings &gt; Starred Messages, which makes it easy to find and copy that exact block of text again later without having to regenerate it.
      </p>

      <h3 className="text-xl font-bold text-foreground pt-2">
        A Note on Broadcast Lists and Groups
      </h3>
      <p>
        WhatsApp&apos;s broadcast list feature sends a message to multiple contacts individually, without creating a group. It&apos;s built for one-to-many updates a recipient list has already opted into — not for pushing repeated or bulk content to people who haven&apos;t agreed to receive it. If you&apos;re thinking about sending a repeated message to more than one contact, it&apos;s worth pausing on whether everyone on that list actually expects it.
      </p>
      <p>
        For readers who want the code-based approach — generating repeated text with a spreadsheet formula or a short Python or JavaScript snippet — that&apos;s covered in more depth in the guide on <Link href="/blog/repeat-text-1000-times" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">repeating text 1,000 times</Link>, including working examples for Google Sheets, Excel, Python, and JavaScript.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Comparison: Ways to Repeat Text for WhatsApp
      </h2>
      <div className="overflow-x-auto rounded-lg border border-border my-4">
        <table className="w-full text-left text-sm text-foreground">
          <thead className="bg-muted text-xs uppercase text-muted-foreground border-b border-border">
            <tr>
              <th className="px-4 py-3 font-semibold">Method</th>
              <th className="px-4 py-3 font-semibold">Setup Needed</th>
              <th className="px-4 py-3 font-semibold">Speed</th>
              <th className="px-4 py-3 font-semibold">Works on Mobile</th>
              <th className="px-4 py-3 font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            <tr>
              <td className="px-4 py-3 font-medium">Phone browser + text repeater</td>
              <td className="px-4 py-3">None</td>
              <td className="px-4 py-3">Fast</td>
              <td className="px-4 py-3">Yes</td>
              <td className="px-4 py-3">Quick one-off messages sent from your phone</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Desktop browser + text repeater</td>
              <td className="px-4 py-3">None</td>
              <td className="px-4 py-3">Very fast</td>
              <td className="px-4 py-3">No</td>
              <td className="px-4 py-3">Frequent use, keyboard shortcuts</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Phone keyboard text-replacement shortcut</td>
              <td className="px-4 py-3">One-time setup per phrase</td>
              <td className="px-4 py-3">Instant after setup</td>
              <td className="px-4 py-3">Yes</td>
              <td className="px-4 py-3">Phrases you send often, like a go-to reaction</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Starred WhatsApp message</td>
              <td className="px-4 py-3">None, after first send</td>
              <td className="px-4 py-3">Instant</td>
              <td className="px-4 py-3">Yes</td>
              <td className="px-4 py-3">Reusing something you&apos;ve already sent before</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Spreadsheet or code (Sheets/Excel/Python/JS)</td>
              <td className="px-4 py-3">Spreadsheet or code editor</td>
              <td className="px-4 py-3">Fast</td>
              <td className="px-4 py-3">Limited</td>
              <td className="px-4 py-3">Users already working outside WhatsApp entirely</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Repeating the Whole Phrase vs. Every Word vs. Every Line
      </h2>
      <p>
        These three modes produce different results, and it&apos;s easy to pick the wrong one without realizing it.
      </p>
      <ul className="list-disc list-inside space-y-2 pl-2">
        <li><strong>Repeating the whole phrase as one unit (Entire Text mode)</strong> treats your entire input — even a full sentence — as a single block and repeats that block as many times as you set.</li>
        <li><strong>Repeating every word separately (Each Word mode)</strong> breaks your input into individual words and repeats each word on its own, which produces a very different output than repeating the full sentence.</li>
        <li><strong>Repeating every line separately (Each Line mode)</strong> treats each line you&apos;ve entered as its own item and repeats each one independently — useful if you&apos;ve typed a few different phrases and want each repeated the same number of times.</li>
      </ul>
      <p>
        <strong>Example: a short paragraph repeated 20 times</strong>
      </p>
      <p>
        If you paste in a two-sentence paragraph and choose Entire Text mode with a new-line separator, you&apos;ll get 20 full copies of that paragraph, each on its own line or block — not 20 copies of each individual sentence.
      </p>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Does WhatsApp have a built-in feature to repeat messages?
          </h3>
          <p className="text-muted-foreground text-base">
            No. WhatsApp doesn&apos;t include any repeat function — the practical approach is to generate the repeated text elsewhere and paste it into the chat as a normal message.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Can I repeat emojis on WhatsApp the same way as text?
          </h3>
          <p className="text-muted-foreground text-base">
            Yes. Emojis are handled the same as any other character, so you can repeat a single emoji or a combination of them using the same process.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Is there a limit to how many times I can repeat text?
          </h3>
          <p className="text-muted-foreground text-base">
            The tool supports custom repetition counts up to 10,000, though WhatsApp itself has its own practical limits on message length that aren&apos;t tied to the repeater.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Will this send the message automatically or connect to WhatsApp directly?
          </h3>
          <p className="text-muted-foreground text-base">
            No. The tool generates the repeated text for you to copy — it doesn&apos;t connect to WhatsApp, send messages automatically, or interact with WhatsApp&apos;s systems in any way. You paste and send manually, like any other message.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            Is repeating text on WhatsApp against the rules?
          </h3>
          <p className="text-muted-foreground text-base">
            Repeating text for personal use, emphasis, or humor within a conversation is fine. Sending large volumes of repetitive or unsolicited messages to people who don&apos;t want them can be treated as spam or harassment under WhatsApp&apos;s terms.
          </p>
        </div>

        <div className="rounded-lg bg-muted/30 p-4 border border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">
            What&apos;s the fastest way to repeat text on WhatsApp from my phone?
          </h3>
          <p className="text-muted-foreground text-base">
            Open a text repeater in your phone&apos;s browser, generate the output, copy it, and paste it directly into your WhatsApp chat — no app switching beyond that.
          </p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-foreground pt-4">
        Try It Yourself
      </h2>
      <p>
        Next time you need to repeat a word, phrase, or emoji for WhatsApp, skip the manual retyping. Use our free tool to <Link href="/" className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80">generate your repeated text</Link> in a few seconds, check the count, and paste it straight into your chat.
      </p>
    </div>
  )
}
