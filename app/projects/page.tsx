import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"

const projects = [
  {
    id: "laravel-tfa-confirmation",
    title: "laravel-tfa-confirmation",
    description: "Protect sensitive routes or actions with a two-factor challenge",
    color: "bg-orange-200",
    icon: "🔒",
    starred: true,
  },
  {
    id: "laravel-backup-restore",
    title: "laravel-backup-restore",
    description: "A package to restore database backups made with spatie/laravel-backup.",
    color: "bg-teal-200",
    icon: "🔄",
    starred: true,
  },
  {
    id: "git-auto-commit-action",
    title: "git-auto-commit-action",
    description: "GitHub Action to automatically commit changed files back to the repository.",
    color: "bg-pink-200",
    icon: "🔗",
    starred: true,
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As a developer I run into problems every day. Whenever possible, I try to publish my solutions as open
                source software so others can benefit and build upon them.
              </p>

              <p>
                Some projects are simple PHP packages, others are full blown web applications or SaaS products and
                others are shell scripts to automate tedious "borings" tasks.
              </p>

              <p>
                My projects are being used in organisations like{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-800 underline">
                  GitHub
                </Link>
                ,{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Shopify
                </Link>
                ,{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Laravel
                </Link>
                ,{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Etherum
                </Link>{" "}
                or{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-800 underline">
                  Bun
                </Link>{" "}
                and by many fellow developers around the world.
              </p>

              <p>
                If you've benefited from my projects, consider supporting me through a monthly or one-time donation on{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-800 underline">
                  GitHub Sponsors
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project) => (
              <div key={project.id} className="w-full max-w-sm">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
