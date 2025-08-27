import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function UsesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <h1 className="text-3xl font-bold text-gray-900">Uses</h1>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Development</h2>
              <div className="space-y-2 text-gray-700">
                <p>• PHP, Laravel, Livewire</p>
                <p>• Vue.js, TypeScript</p>
                <p>• Tailwind CSS</p>
                <p>• VS Code</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Hardware</h2>
              <div className="space-y-2 text-gray-700">
                <p>• MacBook Pro</p>
                <p>• External Monitor</p>
                <p>• Mechanical Keyboard</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
