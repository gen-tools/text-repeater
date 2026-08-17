import { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RelatedTools } from "@/components/related-tools"
import { BLOG_POSTS } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight, Tag, BookOpen, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Guides — Text Repeater, Formatting & Unicode Tips",
  description: "Read the latest guides, tutorials, and tips on text repeating, invisible characters, Zalgo text, case conversion, and word counting tools.",
  alternates: {
    canonical: "https://mytextrepeater.com/blog",
  },
  openGraph: {
    title: "Blog & Guides — My Text Repeater",
    description: "Explore articles, tutorials, and formatting guides for text manipulation tools, social media tricks, and Unicode font effects.",
    url: "https://mytextrepeater.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Guides — My Text Repeater",
    description: "Explore articles, tutorials, and formatting guides for text manipulation tools.",
  },
}

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "My Text Repeater Blog",
    description: "Articles, guides, and tutorials about text repeating tools, Unicode fonts, and formatting tips.",
    url: "https://mytextrepeater.com/blog",
    publisher: {
      "@type": "Organization",
      name: "My Text Repeater",
      url: "https://mytextrepeater.com",
    },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `https://mytextrepeater.com/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  }

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0]
  const regularPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-muted/50 to-background py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Blog & Guides
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Tips, tutorials, and insights on text formatting, repeater tools, font tricks, and Unicode manipulation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Featured Post Card */}
          {featuredPost && (
            <div className="mb-12">
              <div className="inline-block mb-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                Featured Guide
              </div>
              <article className="group rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all hover:border-primary/50 hover:shadow-md">
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1 font-medium text-primary bg-muted px-2.5 py-1 rounded-md">
                    <Tag className="h-3 w-3" />
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="mb-3 text-2xl sm:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="mb-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {featuredPost.description}
                </p>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4 text-primary" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="font-medium text-primary bg-muted px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mb-6 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-primary" />
                    {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform"
                  >
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <RelatedTools currentPath="/blog" />
        </div>
      </section>
    </>
  )
}
