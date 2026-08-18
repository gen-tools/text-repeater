export interface BlogPost {
  slug: string
  title: string
  metaTitle?: string
  description: string
  content: string[]
  date: string
  readTime: string
  author: string
  category: string
  tags: string[]
  featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "repeat-text-for-testing-and-qa",
    title: "How to Repeat Text for Testing and QA: Generate Reliable Test Data",
    metaTitle: "How to Repeat Text for Testing and QA: Generate Reliable Test Data",
    description: "Learn how to generate repeated, deterministic test strings for QA — character-limit testing, Unicode handling, multiline fields, and structured data.",
    date: "August 18, 2026",
    readTime: "8 min read",
    author: "My Text Repeater Team",
    category: "Guides",
    tags: ["Testing", "QA", "Test Data", "Text Repeater", "Tutorials"],
    featured: true,
    content: [
      "Repeated text is useful for QA because it's deterministic — the same input, the same count, and the same separator always produce the exact same output. That predictability matters when you're testing character limits, overflow behavior, or how a field handles a specific length of input, since you need to know exactly what went in to make sense of what came out."
    ]
  },
  {
    slug: "repeat-text-on-new-lines",
    title: "How to Repeat Text on New Lines Online",
    metaTitle: "How to Repeat Text on New Lines Online",
    description: "Learn how to repeat text on separate lines online — words, sentences, paragraphs, and test values, each formatted with a clean line break between copies.",
    date: "August 17, 2026",
    readTime: "7 min read",
    author: "My Text Repeater Team",
    category: "Guides",
    tags: ["Repeat Text", "Line Repeater", "Text Repeater", "Formatting", "Tutorials"],
    featured: true,
    content: [
      "Type your text, set your repetition count, and choose a new-line separator instead of a space or comma. Each copy lands on its own line, ready to copy or download — no need to manually hit Enter between repetitions."
    ]
  },
  {
    slug: "how-to-repeat-a-word-or-sentence-multiple-times-online",
    title: "How to Repeat a Word or Sentence Multiple Times Online",
    metaTitle: "How to Repeat a Word or Sentence Multiple Times Online",
    description: "Learn how to repeat a word, phrase, sentence, or paragraph multiple times online — including when to use a word repeater vs. a full text repeater.",
    date: "August 16, 2026",
    readTime: "7 min read",
    author: "My Text Repeater Team",
    category: "Guides",
    tags: ["Word Repeater", "Text Repeater", "Repeat Sentence", "Repeat Words", "Tutorials"],
    featured: true,
    content: [
      "Type your word, phrase, or sentence once, set how many times you want it repeated, and choose a separator. A browser-based repeater generates the full result instantly — no manual copying, no losing count halfway through."
    ]
  },
  {
    slug: "repeat-emojis-multiple-times",
    title: "How to Repeat Emojis Multiple Times Online",
    metaTitle: "How to Repeat Emojis Multiple Times Online (100, 1,000+)",
    description: "Learn how to repeat one emoji or a group of emojis online — with spaces, line breaks, or no separator — for messages, captions, and testing.",
    date: "August 14, 2026",
    readTime: "7 min read",
    author: "My Text Repeater Team",
    category: "Guides",
    tags: ["Emoji Repeater", "Emojis", "Repeat Emojis", "Social Media", "Tutorials"],
    featured: true,
    content: [
      "The fastest way to repeat an emoji is to enter it once, choose how many times you want it repeated, pick a separator if you want one, and generate the output. No retyping, no counting on your fingers, no losing track after emoji number 40."
    ]
  },
  {
    slug: "repeat-text-on-whatsapp",
    title: "How to Repeat Text on WhatsApp Without Typing It 100 Times",
    metaTitle: "How to Repeat Text on WhatsApp Without Typing It Manually",
    description: "Learn how to repeat a word, phrase, or emoji on WhatsApp without typing it over and over. A quick copy-paste method using a free online text repeater.",
    date: "August 13, 2026",
    readTime: "8 min read",
    author: "My Text Repeater Team",
    category: "Guides",
    tags: ["WhatsApp", "Text Repeater", "Repeat Text", "Messaging", "Tutorials"],
    featured: true,
    content: [
      "WhatsApp doesn't have a built-in way to repeat a message, and there's no setting hiding in the app that does it for you. But that doesn't mean you're stuck retyping 'Happy Birthday!' fifty times by hand. The actual workflow is simpler than people expect: generate the repeated text somewhere else first, then paste the finished result straight into your chat."
    ]
  },
  {
    slug: "repeat-text-1000-times",
    title: "How to Repeat Text 1,000 Times Online: Fast, Free, and Accurate",
    description: "Learn how to repeat text 1,000 times online in seconds. Step-by-step methods for words, sentences, emojis, and paragraphs, plus spreadsheet and code alternatives.",
    date: "August 12, 2026",
    readTime: "6 min read",
    author: "My Text Repeater Team",
    category: "Guides",
    tags: ["Text Repeater", "Repeat Text", "Tutorials", "Tools"],
    featured: true,
    content: [
      "Try repeating text 1,000 times by hand and you'll lose count somewhere around copy 200 — probably sooner if you get interrupted even once. This guide walks through the fastest way to get an exact result, along with every manual and technical alternative, so you can pick whichever one actually fits what you're doing."
    ]
  },
  {
    slug: "word-repeater-how-to-repeat-words",
    title: "Word Repeater: How to Repeat Any Word Online Fast",
    description: "Master the Word Repeater tool to duplicate single words hundreds or thousands of times with custom separators, formatting modes, and instant copying.",
    date: "August 12, 2026",
    readTime: "7 min read",
    author: "My Text Repeater Team",
    category: "Guides",
    tags: ["Word Repeater", "Text Manipulation", "Formatting", "Tools"],
    content: [
      "Repeating an individual word repeatedly manually is tedious and time-consuming. Discover how an online word repeater simplifies duplication, keyword testing, and custom list creation in seconds."
    ]
  },
  {
    slug: "emoji-repeater-multiply-emojis-online",
    title: "Emoji Repeater: How to Multiply Emojis for Social Media & Chat",
    description: "Learn how to multiply emojis up to 10,000 times for Instagram captions, TikTok videos, Discord chats, and messaging pranks using an online Emoji Repeater.",
    date: "August 11, 2026",
    readTime: "7 min read",
    author: "My Text Repeater Team",
    category: "Social Media",
    tags: ["Emoji Repeater", "Emojis", "Social Media", "Messaging"],
    content: [
      "Multiply your favorite emojis into solid blocks or structured grids instantly. Learn how Unicode handles emojis and how to generate thousands of emojis for social media."
    ]
  },
  {
    slug: "blank-text-generator-invisible-space-guide",
    title: "Blank Text Generator: How to Copy Invisible Characters & Send Empty Space",
    description: "Complete guide to generating invisible Unicode characters, blank WhatsApp messages, empty Instagram bios, and hidden gaming nicknames safely and easily.",
    date: "August 10, 2026",
    readTime: "8 min read",
    author: "My Text Repeater Team",
    category: "Tutorials",
    tags: ["Blank Text", "Invisible Space", "Unicode", "Instagram", "WhatsApp"],
    content: [
      "Learn how non-breaking invisible Unicode characters bypass trim functions, allowing you to send blank messages, format clean social media bios, and create empty gamertags."
    ]
  },
  {
    slug: "case-converter-change-text-case-online",
    title: "Case Converter Guide: How to Convert Text Case Online Fast",
    description: "Master text case transformation with our Case Converter guide. Convert to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, and Alternating Case in one click.",
    date: "August 9, 2026",
    readTime: "7 min read",
    author: "My Text Repeater Team",
    category: "Guides",
    tags: ["Case Converter", "Capitalization", "Text Editing", "Formatting"],
    content: [
      "Fix accidental Caps Lock typing and convert text between UPPERCASE, lowercase, Title Case, camelCase, and snake_case effortlessly with an online case converter."
    ]
  },
  {
    slug: "fancy-text-generator-cool-fonts-guide",
    title: "Fancy Text Generator: How to Create Cool Fonts for Bios & Captions",
    description: "Learn how to convert standard text into 50+ aesthetic mathematical Unicode styles for Instagram bios, Twitter headlines, TikTok captions, and Discord names.",
    date: "August 8, 2026",
    readTime: "7 min read",
    author: "My Text Repeater Team",
    category: "Design & Social",
    tags: ["Fancy Text", "Cool Fonts", "Unicode", "Bios", "Captions"],
    content: [
      "Transform plain text into stylish cursive, bold gothic, outline, or monospace fonts using mathematical Unicode alphanumerics for social media bios and posts."
    ]
  },
  {
    slug: "word-counter-character-count-guide",
    title: "Word Counter & Character Count Guide: Accurate Text Statistics Online",
    description: "Learn how to accurately count words, characters, sentences, paragraphs, and reading time online for essays, social media posts, SEO meta tags, and translation projects.",
    date: "August 7, 2026",
    readTime: "7 min read",
    author: "My Text Repeater Team",
    category: "Analytics",
    tags: ["Word Counter", "Character Count", "SEO", "Writing", "Tools"],
    content: [
      "Analyze text statistics in real time. Count words, characters with and without spaces, sentences, paragraphs, and reading time to meet strict essay and character limits."
    ]
  },
  {
    slug: "zalgo-text-generator-glitchy-cursed-fonts",
    title: "Zalgo Text Generator: How Glitchy Cursed Fonts Work and How to Create Them",
    description: "Discover the secrets behind Zalgo text generator tools, Unicode combining diacritical marks, glitch effects, creepy meme typography, and step-by-step customization.",
    date: "August 6, 2026",
    readTime: "8 min read",
    author: "My Text Repeater Team",
    category: "Unicode Tricks",
    tags: ["Zalgo Text", "Glitch Text", "Cursed Fonts", "Unicode", "Memes"],
    content: [
      "Explore the mechanics of Zalgo text and Unicode combining characters. Learn how to generate eerie, corrupted text with Mini, Normal, and Crazy chaos intensity levels."
    ]
  }
]

export function getBlogPosts(): BlogPost[] {
  return BLOG_POSTS
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function getAllCategories(): string[] {
  const categories = BLOG_POSTS.map((post) => post.category)
  return Array.from(new Set(categories))
}

export function getRelatedPosts(currentSlug: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, 3)
}
