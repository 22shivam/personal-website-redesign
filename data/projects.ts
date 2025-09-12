export const projects = [
  {
    id: "llm-podcast-clipping",
    title: "LLM-Powered Podcast Clipping",
    description: "Clippy transforms long podcasts into 10–15 punchy 30–60s clips by combining WhisperX transcription with an LLM that selects the most engaging Q&A and story moments. Active-speaker detection keeps faces perfectly framed while captions are auto-generated and burned in for vertical, social-ready output. A cloud pipeline—S3 storage, Inngest queues, and Modal GPU workers—handles the heavy lifting asynchronously, and a Next.js web app lets users upload, track progress, preview, and download their clips.",
    color: "bg-orange-200",
    icon: "🎬",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/22shivam/clippy",
      },
      {
        label: "Demo",
        url: "",
      },
      {
        label: "Website",
        url: "https://clippy-seven.vercel.app/",
      },
    ],
    starred: true,
  },
  {
    id: "distributed-lock-service",
    title: "Distributed Lock Service",
    description: "Fault-tolerant distributed lock manager in Python on top of etcd cluster with reentrant locks",
    color: "bg-teal-200",
    icon: "🔒",
    starred: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/22shivam/distributed-lock-etcd",
      },
    ],
  },
  {
    id: "polychain",
    title: "Polychain",
    description: "Multi-chain crypto checkout platform with NFT showcase features and embeddable merchant widgets",
    color: "bg-pink-200",
    icon: "⛓️",
    starred: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/22shivam/polychain",
      },
      {
        label: "Demo",
        url: "",
      },
      {
        label: "Website",
        url: "polychain.vercel.app/",
      },
    ],
  },
  {
    id: "streamling",
    title: "Streamling",
    description: "Decentralized video streaming platform with creator tokenization using DeSo blockchain",
    color: "bg-blue-200",
    icon: "📺",
    starred: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/22shivam/streamling",
      },
    ],
  },
  {
    id: "spero-ml",
    title: "Spero: Depression Diagnosis",
    description: "LSTM Network + CNN (95% accuracy) for early diagnosis of major depressive disorder",
    color: "bg-green-200",
    icon: "🧠",
    starred: true,
    links: [
      {
        label: "GitHub",
        url: "https://github.com/22shivam/Spero",
      },
      {
        label: "Demo",
        url: "https://youtu.be/X1XI5dMyRJs",
      },
    ],
  },
  {
    id: "healera-iot",
    title: "Healera: IoT Faucet Extension",
    description: "IoT faucet extension that modernizes outdated taps with smart water management system",
    color: "bg-indigo-200",
    icon: "🚰",
    starred: true,
    links: [],
  },
  {
    id: "testprep-international",
    title: "TestPrep International",
    description: "Expanded instructor team to 50+ and student body to 200+ from 10+ countries",
    color: "bg-red-200",
    icon: "📚",
    starred: true,
    links: [],
  },
]
