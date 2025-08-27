import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-6 text-sm">
            {/* <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
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
            </Link> */}
            <Link href="https://www.linkedin.com/in/shivammgarg" className="text-gray-600 hover:text-gray-900 underline">
              LinkedIn
            </Link>
            <Link href="https://github.com/22shivam" className="text-gray-600 hover:text-gray-900 underline">
              GitHub
            </Link>
            <Link href="https://x.com/smgarg_" className="text-gray-600 hover:text-gray-900 underline">
              Twitter
            </Link>
            <Link href="mailto:shivamgarg2604@gmail.com" className="text-gray-600 hover:text-gray-900 underline">
              Email
            </Link>
            <Link href="/resume.pdf" className="text-gray-600 hover:text-gray-900 underline">
              Resume
            </Link>
          </div>

          {/* <div className="flex flex-wrap gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
              RSS
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
              Micro
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
              Now
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
              Blogroll
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
              Colophon
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
              Changelog
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 underline">
              Subscribe
            </Link>
          </div> */}

          <div className="text-sm text-gray-500">© 2025 Shivam Garg</div>
        </div>
      </div>
    </footer>
  )
}
