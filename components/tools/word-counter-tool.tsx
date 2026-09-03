"use client"

import * as React from "react"
import { 
  Copy, 
  Download, 
  Trash2, 
  Clock, 
  BookOpen, 
  BarChart3, 
  Zap, 
  Sparkles, 
  FileText, 
  Check, 
  Volume2, 
  RotateCcw,
  Wand2,
  FileSpreadsheet,
  Eye
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { CopyToast, useCopyToast } from "@/components/copy-toast"

const COMMON_STOP_WORDS = new Set([
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "i",
  "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
  "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "is", "are", "was", "were", "been", "has", "had", "does", "did", "can",
  "could", "should", "your", "its", "them", "than", "then", "into", "no"
])

const SAMPLE_TEXTS = [
  {
    label: "Blog Sample",
    content: "Writing high-quality content requires focus, clarity, and consistency. When crafting an engaging blog post, aim for concise sentences, compelling headings, and actionable takeaways. A well-structured article holds reader attention, improves SEO rankings, and effectively communicates key concepts to your audience."
  },
  {
    label: "Essay Sample",
    content: "The impact of modern technology on global communication is undeniable. Digital platforms have transcended geographic boundaries, enabling real-time collaboration across continents. However, this shift presents challenges regarding information privacy, digital literacy, and authentic human interaction in an increasingly automated era."
  },
  {
    label: "Social Post",
    content: "✨ Excited to launch our brand new Word Counter tool! 🚀 Track word counts, character limits, reading time, and keyword density in real-time. Try it out now and supercharge your content workflow! #ContentCreation #Productivity #WritingTools #Tech"
  }
]

// Simple syllable counter algorithm for English words
function countWordSyllables(word: string): number {
  word = word.toLowerCase().trim()
  if (word.length <= 3) return 1
  word = word.replace(/(?:[^laeiouy]es|ed|es|e)$/, "")
  word = word.replace(/^y/, "")
  const syllables = word.match(/[aeiouy]{1,2}/g)
  return syllables ? syllables.length : 1
}

export function WordCounterTool() {
  const [inputText, setInputText] = React.useState("")
  const deferredInputText = React.useDeferredValue(inputText)
  const [readingSpeed, setReadingSpeed] = React.useState(225) // WPM
  const [speakingSpeed, setSpeakingSpeed] = React.useState(150) // WPM
  const [ignoreStopWords, setIgnoreStopWords] = React.useState(true)
  const [extractedInfo, setExtractedInfo] = React.useState<string | null>(null)

  const { showToast, copyToClipboard } = useCopyToast()

  const handleClear = React.useCallback(() => {
    setInputText("")
    setExtractedInfo(null)
  }, [])

  // Calculations
  const stats = React.useMemo(() => {
    const text = deferredInputText
    const trimmed = text.trim()

    // Words
    const wordList = trimmed ? trimmed.split(/\s+/).filter(Boolean) : []
    const wordsCount = wordList.length

    // Characters
    const charWithSpaces = text.length
    const charNoSpaces = text.replace(/\s/g, "").length

    // Sentences
    const sentencesList = trimmed ? trimmed.split(/[.!?]+/).filter(s => s.trim().length > 0) : []
    const sentencesCount = sentencesList.length || (wordsCount > 0 ? 1 : 0)

    // Paragraphs
    const paragraphsCount = trimmed ? trimmed.split(/\n+/).filter(p => p.trim().length > 0).length : 0

    // Lines
    const linesCount = text.length === 0 ? 0 : text.split(/\r\n|\r|\n/).length

    // Syllables
    let totalSyllables = 0
    let longestWord = ""
    let lettersCount = 0
    let numbersCount = 0
    let symbolsCount = 0
    let spacesCount = 0

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      if (/[a-zA-Z]/.test(char)) lettersCount++
      else if (/[0-9]/.test(char)) numbersCount++
      else if (/\s/.test(char)) spacesCount++
      else symbolsCount++
    }

    wordList.forEach(w => {
      const cleanW = w.replace(/[^a-zA-Z]/g, "")
      if (cleanW.length > longestWord.length) {
        longestWord = cleanW
      }
      totalSyllables += countWordSyllables(cleanW || w)
    })

    // Pages estimate (~275 words per page double spaced)
    const pagesCount = (wordsCount / 275).toFixed(1)

    // Reading & Speaking times
    const readMinutesDecimal = wordsCount / readingSpeed
    const readMin = Math.floor(readMinutesDecimal)
    const readSec = Math.round((readMinutesDecimal - readMin) * 60)

    const speakMinutesDecimal = wordsCount / speakingSpeed
    const speakMin = Math.floor(speakMinutesDecimal)
    const speakSec = Math.round((speakMinutesDecimal - speakMin) * 60)

    // Readability: Flesch Reading Ease
    // 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words)
    let fleschScore = 100
    let fleschLabel = "Very Easy"
    let fleschGrade = "5th Grade"

    if (wordsCount > 0 && sentencesCount > 0) {
      const wordsPerSentence = wordsCount / sentencesCount
      const syllablesPerWord = totalSyllables / wordsCount
      const score = 206.835 - 1.015 * wordsPerSentence - 84.6 * syllablesPerWord
      fleschScore = Math.max(0, Math.min(100, Math.round(score)))

      if (fleschScore >= 90) {
        fleschLabel = "Very Easy"
        fleschGrade = "5th Grade level"
      } else if (fleschScore >= 80) {
        fleschLabel = "Easy"
        fleschGrade = "6th Grade level"
      } else if (fleschScore >= 70) {
        fleschLabel = "Fairly Easy"
        fleschGrade = "7th Grade level"
      } else if (fleschScore >= 60) {
        fleschLabel = "Standard / Plain English"
        fleschGrade = "8th - 9th Grade level"
      } else if (fleschScore >= 50) {
        fleschLabel = "Fairly Difficult"
        fleschGrade = "High School level"
      } else if (fleschScore >= 30) {
        fleschLabel = "Difficult"
        fleschGrade = "College level"
      } else {
        fleschLabel = "Very Technical / Complex"
        fleschGrade = "Graduate level"
      }
    }

    // Averages
    const avgWordLength = wordsCount > 0 ? (lettersCount / wordsCount).toFixed(1) : "0"
    const avgSentenceLength = sentencesCount > 0 ? (wordsCount / sentencesCount).toFixed(1) : "0"

    // Keyword Frequency Analysis
    const freqMap: Record<string, number> = {}
    wordList.forEach(w => {
      const clean = w.toLowerCase().replace(/[^a-z0-9]/g, "")
      if (!clean) return
      if (ignoreStopWords && COMMON_STOP_WORDS.has(clean)) return
      if (clean.length < 2 && ignoreStopWords) return
      freqMap[clean] = (freqMap[clean] || 0) + 1
    })

    const topKeywords = Object.entries(freqMap)
      .map(([word, count]) => ({
        word,
        count,
        percent: wordsCount > 0 ? ((count / wordsCount) * 100).toFixed(1) : "0"
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8)

    return {
      wordsCount,
      charWithSpaces,
      charNoSpaces,
      sentencesCount,
      paragraphsCount,
      linesCount,
      totalSyllables,
      pagesCount,
      readMin,
      readSec,
      speakMin,
      speakSec,
      fleschScore,
      fleschLabel,
      fleschGrade,
      avgWordLength,
      avgSentenceLength,
      longestWord: longestWord || "N/A",
      lettersCount,
      numbersCount,
      symbolsCount,
      spacesCount,
      topKeywords
    }
  }, [deferredInputText, readingSpeed, speakingSpeed, ignoreStopWords])

  // Formatting actions
  const applyAction = (type: string) => {
    if (!inputText) return
    switch (type) {
      case "trim":
        setInputText(inputText.replace(/\s+/g, " ").trim())
        break
      case "remove-breaks":
        setInputText(inputText.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim())
        break
      case "strip-html":
        setInputText(inputText.replace(/<[^>]*>/g, ""))
        break
      case "upper":
        setInputText(inputText.toUpperCase())
        break
      case "lower":
        setInputText(inputText.toLowerCase())
        break
      case "title":
        setInputText(inputText.toLowerCase().replace(/\b\w/g, c => c.toUpperCase()))
        break
      case "extract-emails": {
        const emails = inputText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || []
        if (emails.length > 0) {
          const result = Array.from(new Set(emails)).join("\n")
          setExtractedInfo(`Found ${emails.length} email(s):\n${result}`)
        } else {
          setExtractedInfo("No email addresses found in text.")
        }
        break
      }
      case "extract-urls": {
        const urls = inputText.match(/https?:\/\/[^\s]+/g) || []
        if (urls.length > 0) {
          const result = Array.from(new Set(urls)).join("\n")
          setExtractedInfo(`Found ${urls.length} URL(s):\n${result}`)
        } else {
          setExtractedInfo("No URLs found in text.")
        }
        break
      }
      default:
        break
    }
  }

  // Copy Stats Summary
  const handleCopyStats = () => {
    const summary = `--- Word Counter Report ---
Words: ${stats.wordsCount}
Characters (with spaces): ${stats.charWithSpaces}
Characters (without spaces): ${stats.charNoSpaces}
Sentences: ${stats.sentencesCount}
Paragraphs: ${stats.paragraphsCount}
Lines: ${stats.linesCount}
Syllables: ${stats.totalSyllables}
Estimated Pages: ${stats.pagesCount}
Reading Time: ${stats.readMin}m ${stats.readSec}s (${readingSpeed} wpm)
Speaking Time: ${stats.speakMin}m ${stats.speakSec}s (${speakingSpeed} wpm)
Flesch Readability: ${stats.fleschScore}/100 (${stats.fleschLabel})
Average Word Length: ${stats.avgWordLength} letters
Average Sentence Length: ${stats.avgSentenceLength} words
Top Keywords: ${stats.topKeywords.map(k => `${k.word} (${k.count})`).join(", ") || "None"}
`
    copyToClipboard(summary)
  }

  // Download Text / Stats
  const handleDownloadText = () => {
    if (!inputText) return
    const blob = new Blob([inputText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "word-counter-text.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleDownloadCSV = () => {
    const csvContent = `Metric,Value
Words,${stats.wordsCount}
Characters (with spaces),${stats.charWithSpaces}
Characters (without spaces),${stats.charNoSpaces}
Sentences,${stats.sentencesCount}
Paragraphs,${stats.paragraphsCount}
Lines,${stats.linesCount}
Syllables,${stats.totalSyllables}
Estimated Pages,${stats.pagesCount}
Reading Time,${stats.readMin}m ${stats.readSec}s
Speaking Time,${stats.speakMin}m ${stats.speakSec}s
Flesch Reading Score,${stats.fleschScore}
Readability Level,${stats.fleschLabel}
Avg Word Length,${stats.avgWordLength}
Avg Sentence Length,${stats.avgSentenceLength}
Longest Word,${stats.longestWord}
`
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "word-count-analysis.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      {/* Sample Text Quick Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> Load Sample:
          </span>
          {SAMPLE_TEXTS.map((sample, idx) => (
            <button
              key={idx}
              onClick={() => {
                setInputText(sample.content)
                setExtractedInfo(null)
              }}
              className="rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium transition-all hover:border-primary/50 hover:bg-accent hover:text-accent-foreground"
            >
              {sample.label}
            </button>
          ))}
        </div>

        {inputText && (
          <Button
            onClick={handleClear}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-destructive text-xs"
          >
            <Trash2 className="mr-1.5 h-3.5 w-3.5" /> Clear Text
          </Button>
        )}
      </div>

      {/* Primary Input Box & Live Summary */}
      <div className="space-y-4">
        <div className="relative">
          <textarea
            id="word-counter-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type, paste, or load sample text here to analyze words, characters, reading time, and readability..."
            autoFocus
            className="h-64 w-full resize-y rounded-xl border border-input bg-background p-4 text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-ring shadow-sm"
          />
          {inputText && (
            <button
              onClick={handleClear}
              aria-label="Clear input"
              className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Extracted Email/URL Notification Box */}
      {extractedInfo && (
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-primary flex items-center gap-1.5">
              <Eye className="h-4 w-4" /> Extraction Result
            </span>
            <button
              onClick={() => copyToClipboard(extractedInfo)}
              className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
            >
              <Copy className="h-3 w-3" /> Copy Extracted
            </button>
          </div>
          <pre className="font-mono text-xs whitespace-pre-wrap text-foreground/90 bg-card p-3 rounded-lg border border-border max-h-40 overflow-y-auto">
            {extractedInfo}
          </pre>
        </div>
      )}

      {/* Primary Stats Grid Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-sm font-medium">Words</span>
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-2 text-3xl font-extrabold text-foreground tracking-tight">
            {stats.wordsCount.toLocaleString()}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Total word tokens</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-sm font-medium">Characters</span>
            <BarChart3 className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-2 text-3xl font-extrabold text-foreground tracking-tight">
            {stats.charWithSpaces.toLocaleString()}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            {stats.charNoSpaces.toLocaleString()} excluding spaces
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-sm font-medium">Sentences</span>
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-2 text-3xl font-extrabold text-foreground tracking-tight">
            {stats.sentencesCount.toLocaleString()}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            ~{stats.avgSentenceLength} words per sentence
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/50">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-sm font-medium">Paragraphs</span>
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-2 text-3xl font-extrabold text-foreground tracking-tight">
            {stats.paragraphsCount.toLocaleString()}
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            ~{stats.pagesCount} standard page(s)
          </p>
        </div>
      </div>

      {/* Reading & Speaking Time + Readability Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Reading & Speaking Estimates */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h3 className="text-base font-semibold flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-primary" /> Estimated Time to Read & Speak
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5 text-primary" /> Reading Time</span>
                <select
                  value={readingSpeed}
                  onChange={(e) => setReadingSpeed(Number(e.target.value))}
                  className="rounded bg-background border border-input text-xs px-2 py-0.5"
                >
                  <option value={180}>Slow (180 WPM)</option>
                  <option value={225}>Normal (225 WPM)</option>
                  <option value={300}>Fast (300 WPM)</option>
                </select>
              </div>
              <div className="text-xl font-bold text-foreground">
                {stats.readMin > 0 ? `${stats.readMin} min ${stats.readSec} sec` : `${stats.readSec} sec`}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted/20 p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                <span className="flex items-center gap-1.5"><Volume2 className="h-3.5 w-3.5 text-primary" /> Speaking Time</span>
                <select
                  value={speakingSpeed}
                  onChange={(e) => setSpeakingSpeed(Number(e.target.value))}
                  className="rounded bg-background border border-input text-xs px-2 py-0.5"
                >
                  <option value={120}>Slow (120 WPM)</option>
                  <option value={150}>Normal (150 WPM)</option>
                  <option value={180}>Fast (180 WPM)</option>
                </select>
              </div>
              <div className="text-xl font-bold text-foreground">
                {stats.speakMin > 0 ? `${stats.speakMin} min ${stats.speakSec} sec` : `${stats.speakSec} sec`}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="rounded-md border border-border bg-card p-2.5">
              <div className="text-muted-foreground font-medium">Syllables</div>
              <div className="mt-1 font-bold text-foreground text-sm">{stats.totalSyllables}</div>
            </div>
            <div className="rounded-md border border-border bg-card p-2.5">
              <div className="text-muted-foreground font-medium">Total Lines</div>
              <div className="mt-1 font-bold text-foreground text-sm">{stats.linesCount}</div>
            </div>
            <div className="rounded-md border border-border bg-card p-2.5">
              <div className="text-muted-foreground font-medium">Avg Word Size</div>
              <div className="mt-1 font-bold text-foreground text-sm">{stats.avgWordLength} chars</div>
            </div>
          </div>
        </div>

        {/* Readability Score */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-border pb-3">
            <h3 className="text-base font-semibold flex items-center gap-2 text-foreground">
              <Zap className="h-5 w-5 text-primary" /> Flesch Readability Score
            </h3>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
              {stats.fleschGrade}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-primary bg-primary/5 text-2xl font-black text-primary shadow-inner">
              {stats.fleschScore}
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-foreground text-lg">{stats.fleschLabel}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Flesch Reading Ease rate measures text clarity. Higher scores (60-100) mean easier reading for broader audiences.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-muted-foreground">
              <span>Longest Word</span>
              <span className="font-mono font-medium text-foreground">{stats.longestWord}</span>
            </div>
            <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
              <div 
                className="bg-primary h-full transition-all duration-300" 
                style={{ width: `${stats.fleschScore}%` }} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Keyword Frequency & Density */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">Top Keyword Density</h3>
            <p className="text-xs text-muted-foreground">Most repeated words and percentage of total content</p>
          </div>
          <label className="flex items-center gap-2 text-xs font-medium cursor-pointer text-muted-foreground hover:text-foreground">
            <input
              type="checkbox"
              checked={ignoreStopWords}
              onChange={(e) => setIgnoreStopWords(e.target.checked)}
              className="rounded border-input text-primary focus:ring-primary"
            />
            Exclude common stop words (the, is, and, etc.)
          </label>
        </div>

        {stats.topKeywords.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.topKeywords.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-border bg-muted/20 p-3 text-xs">
                <span className="font-semibold text-foreground truncate max-w-[120px]">{item.word}</span>
                <div className="text-right">
                  <span className="font-bold text-primary">{item.count}x</span>
                  <span className="ml-1.5 text-muted-foreground">({item.percent}%)</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-6 text-center text-xs text-muted-foreground">
            Type or paste text above to calculate keyword frequency analysis.
          </div>
        )}
      </div>

      {/* Quick Formatting & Utility Tools */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
        <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
          <Wand2 className="h-5 w-5 text-primary" /> Quick Text Formatting & Utilities
        </h3>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => applyAction("trim")}
            disabled={!inputText}
            variant="outline"
            size="sm"
            className="rounded-lg text-xs"
          >
            Clean Extra Spaces
          </Button>
          <Button
            onClick={() => applyAction("remove-breaks")}
            disabled={!inputText}
            variant="outline"
            size="sm"
            className="rounded-lg text-xs"
          >
            Remove Line Breaks
          </Button>
          <Button
            onClick={() => applyAction("strip-html")}
            disabled={!inputText}
            variant="outline"
            size="sm"
            className="rounded-lg text-xs"
          >
            Strip HTML Tags
          </Button>
          <Button
            onClick={() => applyAction("extract-emails")}
            disabled={!inputText}
            variant="outline"
            size="sm"
            className="rounded-lg text-xs"
          >
            Extract Emails
          </Button>
          <Button
            onClick={() => applyAction("extract-urls")}
            disabled={!inputText}
            variant="outline"
            size="sm"
            className="rounded-lg text-xs"
          >
            Extract URLs
          </Button>
          <Button
            onClick={() => applyAction("upper")}
            disabled={!inputText}
            variant="outline"
            size="sm"
            className="rounded-lg text-xs"
          >
            UPPERCASE
          </Button>
          <Button
            onClick={() => applyAction("lower")}
            disabled={!inputText}
            variant="outline"
            size="sm"
            className="rounded-lg text-xs"
          >
            lowercase
          </Button>
          <Button
            onClick={() => applyAction("title")}
            disabled={!inputText}
            variant="outline"
            size="sm"
            className="rounded-lg text-xs"
          >
            Title Case
          </Button>
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => copyToClipboard(inputText)}
          disabled={!inputText}
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy Text
        </Button>
        <Button
          onClick={handleCopyStats}
          disabled={!inputText}
          variant="secondary"
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <BarChart3 className="mr-2 h-4 w-4" />
          Copy Analysis Report
        </Button>
        <Button
          onClick={handleDownloadText}
          disabled={!inputText}
          variant="outline"
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Text
        </Button>
        <Button
          onClick={handleDownloadCSV}
          disabled={!inputText}
          variant="outline"
          className="flex-1 rounded-xl sm:flex-none"
          size="lg"
        >
          <FileSpreadsheet className="mr-2 h-4 w-4" />
          Download CSV Stats
        </Button>
      </div>

      {/* Sticky Mobile Copy Bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background p-4 sm:hidden flex gap-2">
        <Button
          onClick={() => copyToClipboard(inputText)}
          disabled={!inputText}
          className="flex-1 rounded-xl"
          size="lg"
        >
          <Copy className="mr-2 h-4 w-4" />
          Copy Text
        </Button>
        <Button
          onClick={handleCopyStats}
          disabled={!inputText}
          variant="secondary"
          className="flex-1 rounded-xl"
          size="lg"
        >
          <BarChart3 className="mr-2 h-4 w-4" />
          Copy Report
        </Button>
      </div>

      <CopyToast show={showToast} />
    </div>
  )
}
