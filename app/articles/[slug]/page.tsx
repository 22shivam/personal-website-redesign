import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getAllPosts, getPost } from "@/lib/blog"

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <article>
          <header className="mb-10 space-y-3">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <time dateTime={post.date}>{formattedDate}</time>
              {post.tags.length > 0 && (
                <>
                  <span>·</span>
                  <span>{post.tags.join(", ")}</span>
                </>
              )}
            </div>
          </header>

          <div className="prose prose-gray max-w-none prose-code:before:content-none prose-code:after:content-none prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-lg prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:bg-gray-50 prose-blockquote:rounded-r-lg prose-blockquote:px-5 prose-blockquote:py-4 prose-blockquote:text-gray-700 prose-blockquote:font-normal prose-blockquote:before:content-none prose-blockquote:after:content-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
