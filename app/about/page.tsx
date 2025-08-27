import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="flex items-start gap-6">
            <Image className="rounded-lg" src="/chosen.jpeg" alt="Shivam Garg" width={64} height={64} />
            {/* <div className="w-16 h-16 bg-green-400 rounded-lg flex-shrink-0"></div> */}
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-gray-900">Shivam Garg</h1>
              <p className="text-gray-600">Software Engineer</p>
            </div>
          </div>

          <AboutSection />

          {/* <div className="space-y-4">
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
          </div> */}
        </div>
      </main>

      <Footer />
    </div>
  )
}
