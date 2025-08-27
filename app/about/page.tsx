import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-green-400 rounded-lg flex-shrink-0"></div>
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-gray-900">Stefan Zweifel</h1>
              <p className="text-gray-600">Fullstack Developer</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              I'm working at{" "}
              <Link href="#" className="underline hover:text-gray-900">
                Trenda
              </Link>{" "}
              as a senior fullstack developer, bringing over 15 years of experience building applications with PHP,
              Laravel, Livewire, Tailwind CSS and Vue.js to help drive their product forward.
            </p>

            <p>
              I regularly contribute to the open source community by writing guides on how to automate tasks or by
              releasing PHP packages to solve a particular problem.
            </p>

            <p>
              On this personal website I write about how I{" "}
              <Link href="#" className="underline hover:text-gray-900">
                solve problems
              </Link>{" "}
              in my personal or professional projects, how I set up{" "}
              <Link href="#" className="underline hover:text-gray-900">
                my favourite
              </Link>{" "}
              <Link href="#" className="underline hover:text-gray-900">
                apps
              </Link>{" "}
              or on how to apply minimalism to the digital world.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-900">On the web</h2>
            <div className="flex flex-wrap gap-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
                Mastodon
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
                Bluesky
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
                GitHub
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
                Email
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
