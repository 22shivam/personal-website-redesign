const skills = [
  "Python",
  "TypeScript",
  "C",
  "C++",
  "SQL",
  "Java",
  "React",
  "Next.js",
  "PyTorch",
  "PySpark",
  "MLflow",
  "AWS",
  "GCP",
  "Vertex AI",
  "Terraform",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Git",
]

export function AboutSection() {
  return (
    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
      <p>
        I'm currently working at{" "}
        <a href="#" className="underline">
          Scowtt
        </a>{" "}
        (Series A) as a Founding Engineer.
      </p>
      <div className="flex flex-wrap gap-2 pt-1">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs sm:text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
