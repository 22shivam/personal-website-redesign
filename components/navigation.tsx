import Link from "next/link"

export function Navigation() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            Stefan Zweifel
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/articles"
              className="text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/uses"
              className="text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              Uses
            </Link>
            <Link
              href="/reading"
              className="text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              Reading
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
