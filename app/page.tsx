import { ProjectCard } from "@/components/project-card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutSection } from "@/components/about-section"
import { projects } from "@/data/projects"
import { getAllPosts } from "@/lib/blog"
import Image from "next/image"
import Link from "next/link"

const selectedExperiences = [
  {
    period: "August 2025 – Present",
    title: "Founding Engineer",
    company: "Scowtt",
    description: [
      "Architected and productionized config-driven general Vertex AI pipelines, replacing FDE-style per-client custom code with standardized deployments for hourly data ingestion, online inference, and weekly retraining—cutting enterprise customer onboarding time from 4 weeks to 2 and enabling parallel multi-client launches.",
      "Built and deployed lead-value prediction models using GA4 and CRM features, streaming real-time scores via Cloud Run into Meta and Google Ads Conversion APIs for automated bid optimization.",
      "Worked directly with two enterprise clients to translate ad optimization goals into reusable ML systems, driving +59% ROAS in Search and +80% in PMax and supporting Scowtt’s $60M Series A."
    ],
  },
  {
    period: "July 2025 – Present",
    title: "Software Engineer",
    company: "AGI Labs",
    description: [
      "Built an automated payments and invoicing system via the Stripe API, saving 15–20 hrs/week in manual work for our client, MediaTeam, a marketing agency.",
      "Developed a scalable ad-tech analytics pipeline pulling spend/ROI data from Google Ads, Meta, and TikTok APIs; providing MediaTeam with dashboards with <1% sync failure and 5-min data freshness.",
    ],
  },
  {
    period: "November 2021 – May 2022",
    title: "Software Engineer and Co-founder",
    company: "Spindl",
    description: [
      "Launched multi-chain crypto checkout platform with NFT showcase features, enabling simple link-based transfers and embeddable merchant widgets. (React, Node.js, MongoDB, AWS)",
      "Deployed with EC2 Auto Scaling + Docker, CI/CD pipelines, and monitoring via Prometheus/Grafana.",
      "Drove adoption to 10k+ users by pairing technical execution with early viral growth strategies.",
    ],
  },
  // {
  //   period: "July 2021 – November 2021",
  //   title: "Software Engineer and Co-founder",
  //   company: "Streamling",
  //   description: [
  //     "Built a decentralized video streaming platform with creator tokenization using DeSo blockchain + Media Network; reduced egress costs by leveraging peer-to-peer routing.",
  //     "Secured ~$6k in funding and acceptance into IU's Startup Accelerator.",
  //   ],
  // },
]

export default async function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-12 lg:space-y-16">
        <section className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="flex justify-center sm:justify-start">
              <Image className="rounded-lg" src="/chosen.jpeg" alt="Shivam Garg" width={64} height={64} />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">Shivam Garg</h1>
              <p className="text-sm sm:text-base text-gray-600">Software Engineer</p>
            </div>
          </div>

          <AboutSection />
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-gray-900">On the web</h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base text-gray-600">
            <a href="https://www.linkedin.com/in/shivammgarg" className="underline hover:text-gray-900">
              LinkedIn
            </a>
            <a href="https://github.com/22shivam" className="underline hover:text-gray-900">
              GitHub
            </a>
            <a href="https://x.com/smgarg_" className="underline hover:text-gray-900">
              Twitter
            </a>
            <a href="mailto:shivamgarg2604@gmail.com" className="underline hover:text-gray-900">
              Email
            </a>
            <a href="/resume.pdf" className="underline hover:text-gray-900">
              Resume
            </a>
          </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-gray-900">Selected Writing</h2>
          <div className="space-y-2 sm:space-y-3">
            {recentPosts.length === 0 ? (
              <p className="text-sm text-gray-500">No posts yet.</p>
            ) : (
              recentPosts.map((post) => (
                <div key={post.slug} className="flex flex-col sm:flex-row sm:gap-4 text-xs sm:text-sm">
                  <span className="text-gray-500 sm:w-16 sm:flex-shrink-0 font-mono">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "2-digit", year: "numeric" })}
                  </span>
                  <Link href={`/articles/${post.slug}`} className="text-gray-700 underline hover:text-gray-900 mt-1 sm:mt-0">
                    {post.title}
                  </Link>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-base sm:text-lg font-medium text-gray-900">Selected Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {selectedExperiences.map((experience, index) => (
              <div key={index} className="space-y-3 sm:space-y-4">
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    <h3 className="text-sm sm:text-base font-medium text-gray-900">{experience.title}</h3>
                    <span className="text-sm text-gray-600">at {experience.company}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 font-mono">{experience.period}</p>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 leading-relaxed flex">
                      <span className="text-gray-400 mr-2 sm:mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-base sm:text-lg font-medium text-gray-900">Selected Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {projects.map((project) => (
              <div key={project.id} className="w-full max-w-sm">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
