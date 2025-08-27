import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ReadingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <h1 className="text-3xl font-bold text-gray-900">Reading</h1>

          <div className="space-y-6 text-gray-700">
            <p>A collection of articles, books, and resources I find interesting and worth sharing.</p>

            {/* <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Currently Reading</h2>
              <p>• The Pragmatic Programmer</p>
              <p>• Clean Code</p>
            </div> */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
