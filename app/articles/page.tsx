import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

const articles = [
  // {
  //   date: "08/2024",
  //   title: "Deployer: Build and Cache Frontend Assets once using GitHub Actions",
  //   href: "#",
  // },
  // {
  //   date: "03/2024",
  //   title: "Meal Planning in Things 3",
  //   href: "#",
  // },
  // {
  //   date: "09/2023",
  //   title: "An Opinionated Personal Folder Structure",
  //   href: "#",
  // },
  // {
  //   date: "12/2022",
  //   title: "My updated Things 3 Setup",
  //   href: "#",
  // },
  // {
  //   date: "05/2021",
  //   title: "Deployer on GitHub Actions",
  //   href: "#",
  // },
  // {
  //   date: "04/2021",
  //   title: "Auto Merge Dependabot Pull Requests with GitHub Actions",
  //   href: "#",
  // },
  // {
  //   date: "02/2021",
  //   title: "My Alfred Setup",
  //   href: "#",
  // },
  // {
  //   date: "12/2020",
  //   title: "Getting Started with Bash Testing with Bats",
  //   href: "#",
  // },
  // {
  //   date: "08/2020",
  //   title: "Synology NAS Setup (2020)",
  //   href: "#",
  // },
  // {
  //   date: "12/2019",
  //   title: "Things 3 Setup",
  //   href: "#",
  // },
  // {
  //   date: "06/2019",
  //   title: "GitHub Actions for PHP Developers (HCL)",
  //   href: "#",
  // },
  // {
  //   date: "12/2018",
  //   title: "Create Mocks for API Clients in Laravel",
  //   href: "#",
  // },
  // {
  //   date: "10/2018",
  //   title: "How to Encrypt File Uploads with Laravel",
  //   href: "#",
  // },
  // {
  //   date: "02/2018",
  //   title: "How to use Tailwind CSS in Vue together with CSS Modules",
  //   href: "#",
  // },
  // {
  //   date: "12/2016",
  //   title: "How I write Integration Tests for Laravel Socialite powered Apps",
  //   href: "#",
  // },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <h1 className="text-3xl font-bold text-gray-900">Selected Writing</h1>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-sm text-gray-500 w-20 flex-shrink-0">{article.date}</div>
                <Link href={article.href} className="text-gray-900 hover:text-gray-600 underline leading-relaxed">
                  {article.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
