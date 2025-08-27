interface Project {
  id: string
  title: string
  description: string
  color: string
  icon: string
  starred: boolean
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
        <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
      </div>
    </div>
  )
}
