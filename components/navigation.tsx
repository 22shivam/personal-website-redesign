import Link from "next/link"

export function Navigation() {
  return (
    <header className="border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <Link href="/" className="text-lg sm:text-xl font-semibold text-gray-900">
            Shivam Garg
          </Link>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
            <Link
              href="/about"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/articles"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              Articles
            </Link>
            <Link
              href="/projects"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              Projects
            </Link>
            {/* <Link
              href="/uses"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              Uses
            </Link> */}
            <Link
              href="/reading"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 underline decoration-gray-300 hover:decoration-gray-600 transition-colors"
            >
              Reading
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
