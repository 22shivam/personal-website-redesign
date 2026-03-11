import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/blog"
import Link from "next/link"

export default async function ArticlesPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <h1 className="text-3xl font-bold text-gray-900">Writing</h1>

          {posts.length === 0 ? (
            <p className="text-gray-500 text-sm">No posts yet.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.slug} className="flex gap-6">
                  <div className="text-sm text-gray-500 w-20 flex-shrink-0 font-mono">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "2-digit", year: "numeric" })}
                  </div>
                  <div className="space-y-1">
                    <Link
                      href={`/articles/${post.slug}`}
                      className="text-gray-900 hover:text-gray-600 underline leading-relaxed"
                    >
                      {post.title}
                    </Link>
                    {post.description && (
                      <p className="text-sm text-gray-500 leading-relaxed">{post.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
