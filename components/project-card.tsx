import Link from "next/link"


interface Project {
  id: string
  title: string
  description: string
  color: string
  icon: string
  starred: boolean
  links: { label: string; url: string }[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="space-y-4">
      <div className={`${project.color} rounded-lg p-6 h-32 flex items-center justify-center relative`}>
        <div className="bg-black text-white px-3 py-1 rounded text-sm font-medium">{project.title}</div>
        <div className="text-2xl absolute top-4 right-4">{project.icon}</div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-gray-900">{project.title}</h3>
          {project.starred && <span className="text-yellow-500">⭐</span>}
        </div>
        {/* new line after description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-2">{project.description}.<br /> </p>
        {/* keep some vertical space between the description and the links. not a full line break, but some margin */}
        {project.links.map((link) => (
            <Link key={link.label} href={link.url} className="text-base font-light text-gray-800 hover:text-gray-900 underline decoration-gray-400 hover:decoration-gray-700 transition-colors">
              {link.label}{" |  "}
            </Link>
          ))}
        {/* </p> */}
      </div>
    </div>
  )
}
