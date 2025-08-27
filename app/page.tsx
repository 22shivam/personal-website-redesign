import { ProjectCard } from "@/components/project-card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const projects = [
  {
    id: "llm-podcast-clipping",
    title: "LLM-Powered Podcast Clipping",
    description: "Auto-generates 10-15 short viral clips from long podcasts using Whisper transcription + Gemini LLM",
    color: "bg-orange-200",
    icon: "🎬",
    starred: true,
  },
  {
    id: "distributed-lock-service",
    title: "Distributed Lock Service",
    description: "Fault-tolerant distributed lock manager in Python on top of etcd cluster with reentrant locks",
    color: "bg-teal-200",
    icon: "🔒",
    starred: true,
  },
  {
    id: "polychain",
    title: "Polychain",
    description: "Multi-chain crypto checkout platform with NFT showcase features and embeddable merchant widgets",
    color: "bg-pink-200",
    icon: "⛓️",
    starred: true,
  },
  {
    id: "streamling",
    title: "Streamling",
    description: "Decentralized video streaming platform with creator tokenization using DeSo blockchain",
    color: "bg-blue-200",
    icon: "📺",
    starred: true,
  },
  {
    id: "agi-labs-payments",
    title: "Automated Payments System",
    description: "Built automated payments and invoicing system via Stripe API, saving 15-20 hrs/week",
    color: "bg-purple-200",
    icon: "💳",
    starred: true,
  },
  {
    id: "ad-tech-analytics",
    title: "Ad-Tech Analytics Pipeline",
    description: "Scalable analytics pipeline pulling spend/ROI data from Google Ads, Meta, and TikTok APIs",
    color: "bg-yellow-200",
    icon: "📊",
    starred: true,
  },
  {
    id: "spero-ml",
    title: "Spero: Depression Diagnosis",
    description: "LSTM Network + CNN (95% accuracy) for early diagnosis of major depressive disorder",
    color: "bg-green-200",
    icon: "🧠",
    starred: true,
  },
  {
    id: "healera-iot",
    title: "Healera: IoT Faucet Extension",
    description: "IoT faucet extension that modernizes outdated taps with smart water management system",
    color: "bg-indigo-200",
    icon: "🚰",
    starred: true,
  },
  {
    id: "testprep-international",
    title: "TestPrep International",
    description: "Expanded instructor team to 50+ and student body to 200+ from 10+ countries",
    color: "bg-red-200",
    icon: "📚",
    starred: true,
  },
]

const selectedWriting = [
  { date: "12/2024", title: "Building Scalable Ad-Tech Analytics with Multi-API Integration", url: "#" },
  { date: "11/2024", title: "LLM-Powered Video Processing: From Podcasts to Viral Clips", url: "#" },
  { date: "10/2024", title: "Implementing Fault-Tolerant Distributed Systems with etcd", url: "#" },
  { date: "09/2024", title: "Stripe Integration Patterns for B2B SaaS Applications", url: "#" },
  { date: "08/2024", title: "Computer Vision for Active Speaker Detection in Video Processing", url: "#" },
  { date: "07/2024", title: "Building Multi-Chain Crypto Payment Systems", url: "#" },
  { date: "06/2024", title: "Serverless GPU Acceleration with Modal and AWS", url: "#" },
  { date: "05/2024", title: "Machine Learning for Depression Diagnosis: LSTM + CNN Approach", url: "#" },
  { date: "04/2024", title: "Decentralized Video Streaming with Blockchain Integration", url: "#" },
  { date: "03/2024", title: "Docker and Kubernetes for Startup Infrastructure", url: "#" },
  { date: "02/2024", title: "Building IoT Solutions with Bluetooth Low Energy", url: "#" },
  { date: "01/2024", title: "Scaling Educational Platforms: Lessons from TestPrep International", url: "#" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 space-y-8 sm:space-y-12 lg:space-y-16">
        <section className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-16 h-16 sm:w-16 sm:h-16 bg-green-400 rounded-lg flex-shrink-0 mx-auto sm:mx-0"></div>
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">Shivam Garg</h1>
              <p className="text-sm sm:text-base text-gray-600">Software Engineer & CS Student</p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              I'm currently working at{" "}
              <a href="#" className="underline">
                AGI Labs
              </a>{" "}
              as a Software Engineer while completing my B.S. in Computer Science and Mathematics at Indiana University
              Bloomington. I'm a Herman B. Wells Scholar and former National Cricket Team Player for Singapore.
            </p>

            <p>
              I regularly build scalable systems and contribute to innovative projects, from automated payment systems
              that save 15-20 hours per week to LLM-powered video processing pipelines. I've co-founded two startups,
              Polychain and Streamling, gaining 10k+ users and securing funding.
            </p>

            <p>
              On this personal website I write about how I{" "}
              <a href="#" className="underline">
                solve complex problems
              </a>{" "}
              in distributed systems, machine learning, and full-stack development, how I build{" "}
              <a href="#" className="underline">
                scalable applications
              </a>{" "}
              and my experiences in the startup ecosystem.
            </p>
          </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-gray-900">On the web</h2>
          <div className="flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base text-gray-600">
            <a href="#" className="underline hover:text-gray-900">
              LinkedIn
            </a>
            <a href="#" className="underline hover:text-gray-900">
              GitHub
            </a>
            <a href="#" className="underline hover:text-gray-900">
              Twitter
            </a>
            <a href="#" className="underline hover:text-gray-900">
              Email
            </a>
          </div>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-base sm:text-lg font-medium text-gray-900">Selected Writing</h2>
          <div className="space-y-2 sm:space-y-3">
            {selectedWriting.map((article, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:gap-4 text-xs sm:text-sm">
                <span className="text-gray-500 sm:w-16 sm:flex-shrink-0 font-mono">{article.date}</span>
                <a href={article.url} className="text-gray-700 underline hover:text-gray-900 mt-1 sm:mt-0">
                  {article.title}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 sm:space-y-6">
          <h2 className="text-base sm:text-lg font-medium text-gray-900">Selected Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
