import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedTools } from "@/components/related-tools"
import { getBlogPostBySlug, BLOG_POSTS, getRelatedPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Tag } from "lucide-react"

import { RepeatText1000TimesArticle } from "@/components/blog-articles/repeat-text-1000-times-article"
import { RepeatTextOnWhatsAppArticle } from "@/components/blog-articles/repeat-text-on-whatsapp-article"
import { RepeatEmojisMultipleTimesArticle } from "@/components/blog-articles/repeat-emojis-multiple-times-article"
import { HowToRepeatAWordOrSentenceArticle } from "@/components/blog-articles/how-to-repeat-a-word-or-sentence-article"
import { RepeatTextForTestingAndQaArticle } from "@/components/blog-articles/repeat-text-for-testing-and-qa-article"
import { RepeatTextOnNewLinesArticle } from "@/components/blog-articles/repeat-text-on-new-lines-article"
import { WordRepeaterArticle } from "@/components/blog-articles/word-repeater-article"
import { EmojiRepeaterArticle } from "@/components/blog-articles/emoji-repeater-article"
import { BlankTextArticle } from "@/components/blog-articles/blank-text-article"
import { CaseConverterArticle } from "@/components/blog-articles/case-converter-article"
import { FancyTextArticle } from "@/components/blog-articles/fancy-text-article"
import { WordCounterArticle } from "@/components/blog-articles/word-counter-article"
import { ZalgoTextArticle } from "@/components/blog-articles/zalgo-text-article"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = getBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    return {
      title: "Post Not Found | My Text Repeater",
      description: "The requested blog post could not be found.",
    }
  }

  const baseTitle = post.metaTitle || post.title
  const pageTitle = baseTitle.includes("My Text Repeater")
    ? baseTitle
    : `${baseTitle} | My Text Repeater`

  return {
    title: pageTitle,
    description: post.description,
    alternates: {
      canonical: `https://mytextrepeater.com/blog/${post.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: post.description,
      url: `https://mytextrepeater.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: "My Text Repeater",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: post.description,
    },
  }
}

function renderArticleContent(slug: string, paragraphs: string[]) {
  switch (slug) {
    case "repeat-text-for-testing-and-qa":
      return <RepeatTextForTestingAndQaArticle />
    case "repeat-text-on-new-lines":
      return <RepeatTextOnNewLinesArticle />
    case "how-to-repeat-a-word-or-sentence-multiple-times-online":
      return <HowToRepeatAWordOrSentenceArticle />
    case "repeat-emojis-multiple-times":
      return <RepeatEmojisMultipleTimesArticle />
    case "repeat-text-on-whatsapp":
      return <RepeatTextOnWhatsAppArticle />
    case "repeat-text-1000-times":
      return <RepeatText1000TimesArticle />
    case "word-repeater-how-to-repeat-words":
      return <WordRepeaterArticle />
    case "emoji-repeater-multiply-emojis-online":
      return <EmojiRepeaterArticle />
    case "blank-text-generator-invisible-space-guide":
      return <BlankTextArticle />
    case "case-converter-change-text-case-online":
      return <CaseConverterArticle />
    case "fancy-text-generator-cool-fonts-guide":
      return <FancyTextArticle />
    case "word-counter-character-count-guide":
      return <WordCounterArticle />
    case "zalgo-text-generator-glitchy-cursed-fonts":
      return <ZalgoTextArticle />
    default:
      return (
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const post = getBlogPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const relatedBlogPosts = getRelatedPosts(post.slug)

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mytextrepeater.com/blog/${post.slug}`,
    },
    url: `https://mytextrepeater.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author || "My Text Repeater",
      url: "https://mytextrepeater.com",
    },
    publisher: {
      "@type": "Organization",
      name: "My Text Repeater",
      url: "https://mytextrepeater.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mytextrepeater.com/icon.png",
      },
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mytextrepeater.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://mytextrepeater.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://mytextrepeater.com/blog/${post.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Header Banner */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-10 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs />
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              <Tag className="h-3 w-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-foreground">
            {post.title}
          </h1>

          <div className="flex items-center justify-between border-t border-border/60 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span>Written by <strong className="text-foreground">{post.author}</strong></span>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-sm space-y-8 text-foreground/90 leading-relaxed text-base sm:text-lg">
            {renderArticleContent(post.slug, post.content)}

            {/* Article Tags */}
            <div className="border-t border-border pt-6 mt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tags:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Back to Blog Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent text-sm font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Blog Articles */}
      {relatedBlogPosts.length > 0 && (
        <section className="border-t border-border bg-muted/20 py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground">More Guides & Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedBlogPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary/50 transition-all"
                >
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {rel.category}
                  </span>
                  <h3 className="mt-2 mb-2 text-lg font-bold text-foreground">
                    <Link href={`/blog/${rel.slug}`} className="hover:text-primary transition-colors">
                      {rel.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {rel.description}
                  </p>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Tools */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath={`/blog/${post.slug}`} />
        </div>
      </section>
    </>
  )
}
