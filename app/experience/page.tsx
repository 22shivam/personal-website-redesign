import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const experiences = [
  {
    period: "September 2025 – Present",
    title: "Founding Engineer",
    company: "Scowtt",
    description: [
      "Built Scowtt's shared distributed ML infrastructure from scratch: config-driven Vertex AI pipelines for ingestion, inference, & retraining that scale to 47 enterprise tenants, with 10 engineers building on the join engine & CI/CD I own; cut onboarding time by 65% & enabled a 3× customer-count increase in 6 months.",
      "Engineered the fault-tolerant data plane behind $500M+ in performance marketing spend (100 GB/day ingested from Salesforce, SFTP drops, and custom API pushes) and the conversion event delivery to Google, Meta, and Microsoft powering a 30% average incremental return on ad spend (ROAS) lift across customers.",
      "Established the team's Terraform IaC foundation across AWS & GCP and co-designed the onboarding spec and workflows that auto-provisions tenants through our internal agent, cutting provisioning from 3–4 days to hours.",
      "Shipped Sage, an LLM data-analyst agent (DAG orchestration, self-correcting critic loop, per-tenant memory), which answers business data questions in minutes, saving 2 weeks of data discovery per new client.",
      "Own platform-wide production reliability through centralized log-based alerting, statistical anomaly detection on BigQuery baselines, and infrastructure drift detection, driving MTTR for failure classes from weeks to hours.",
      "Joined as engineer #3; as the company grew to 30, co-managed 2 engineers, personally onboarded all 8 ML engineers onto the pipeline platform for their per-client deployments, and codified common workflows into knowledge bases and LLM-executable skills so others run them without errors.",
    ],
  },
  {
    period: "May 2025 – October 2025",
    title: "Software Engineer",
    company: "AGI Labs",
    description: [
      "Built an automated payments and invoicing system via the Stripe API, saving 15–20 hrs/week in manual work for our client, MediaTeam, a marketing agency.",
      "Developed a scalable ad-tech analytics pipeline pulling spend/ROI data from Google Ads, Meta, and TikTok APIs; providing MediaTeam with dashboards with <1% sync failure and 5-min data freshness.",
    ],
  },
  {
    period: "2021 – 2023",
    title: "Co-founder, CEO",
    company: "Spindl",
    description: [
      "Built and scaled a crypto payments platform to 10k+ users and $50k MRR with shareable payment pages that replaced raw wallet addresses, and supported on-chain tips and donations, NFT galleries, social links, and one-click token minting, plus an embeddable widget for accepting payments anywhere.",
      "Engineered the TypeScript & Solidity stack with support for Ethereum, Solana, & Bitcoin through pluggable per-chain transfer adapters and network guards behind one interface, wallet-signature authentication unified into a single JWT session model, server-side on-chain payment settlement, and a deployed Merkle-proof airdrop contract.",
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

const awards = [
  {
    title: "Winner, Anthropic's Agents Hackathon",
    description: "Built ImmunAI, red-teaming AI agents with 36 adversarial attack vectors.",
  },
  {
    title: "Winner, Afore Capital's Software Hackathon",
    description: "Built ReCode, an AI DevOps agent that self-heals production apps.",
  },
  {
    title: "Organizer, AI+ Renaissance Conference 2026",
    description: "Co-organized a marquee AI conference for 2,000+ attendees.",
  },
  {
    title: "Herman B Wells Scholarship",
    description: "Full ride four-year scholarship to IU (top 15 per year out of 12k incoming students).",
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

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Awards &amp; Leadership</h2>
            <ul className="space-y-4">
              {awards.map((award, index) => (
                <li key={index} className="text-gray-600 leading-relaxed flex">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>
                    <span className="font-medium text-gray-900">{award.title}:</span> {award.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
