import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const experiences = [
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
    company: "Polychain",
    description: [
      "Launched multi-chain crypto checkout platform with NFT showcase features, enabling simple link-based transfers and embeddable merchant widgets. (React, Node.js, MongoDB, AWS)",
      "Deployed with EC2 Auto Scaling + Docker, CI/CD pipelines, and monitoring via Prometheus/Grafana.",
      "Drove adoption to 10k+ users by pairing technical execution with early viral growth strategies.",
    ],
  },
  {
    period: "July 2021 – November 2021",
    title: "Software Engineer and Co-founder",
    company: "Streamling",
    description: [
      "Built a decentralized video streaming platform with creator tokenization using DeSo blockchain + Media Network; reduced egress costs by leveraging peer-to-peer routing.",
      "Secured ~$6k in funding and acceptance into IU's Startup Accelerator.",
    ],
  },
  {
    period: "2021 – 2024",
    title: "Teaching Assistant and Directed Reading Program Mentee",
    company: "IU Math Department",
    description: [
      "As a DRP mentee, I independently studied and worked on problems from Topology, Measure Theory, Complex Analysis, Category Theory, and Abstract Algebra with a graduate student mentor.",
      "Assisted 250+ students through weekly doubt-solving sessions at the Math Learning Center and via email.",
      "Helped with exam invigilation, grading, and other administrative and academic duties of M118.",
    ],
  },
  {
    period: "2019 – 2021",
    title: "Founder and Lead Instructor",
    company: "testprep international",
    description: [
      "Expanded Instructor Team Internationally to 50+ and a student body to 200+ from 10+ countries.",
      "Co-created 14 IGCSE and 13 CBSE Subject Courses that have been enrolled over 200 times. Organized 60 Lectures & doubt solving sessions.",
      "Created and Gathered Resources for two Websites (prepIGCSE & prepSAT) with 60,000+ Visitors from 130+ Countries.",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Experience</h1>
            <p className="text-gray-600 leading-relaxed">
              My professional journey spans software engineering, entrepreneurship, and education. I've built scalable
              systems, co-founded startups, and helped hundreds of students succeed academically.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h2 className="text-xl font-semibold text-gray-900">{experience.title}</h2>
                    <div className="text-sm text-gray-500">{experience.period}</div>
                  </div>
                  <h3 className="text-lg text-gray-700 font-medium">{experience.company}</h3>
                </div>

                <ul className="space-y-3">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 leading-relaxed flex">
                      <span className="text-gray-400 mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
