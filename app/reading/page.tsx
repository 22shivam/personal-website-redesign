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

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Great Academic books:</h2>
              <p>• Linear Algebra Done Right by Axler</p>
              <p>• Theory of Computation by Michael Sipser</p>
              <p>• Principles of Mathematical Analysis by Rudin</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Great books:</h2>
              <p>• Men of Mathematics by E.T. Bell</p>
              <p>• The Wright Brothers by David McCullough</p>
              <p>• The Idea Factory: Bell Labs and the Great Age of American Innovation by Jon Gertner</p>
              <p>• Gödel, Escher, Bach: An Eternal Golden Braid by Douglas Hofstadter</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
