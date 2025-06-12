"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Star, Zap } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "2nd-brain.app",
    subtitle: "AI Study Buddy Platform",
    description:
      "A productivity AI study buddy app for students built and hosted as my own business. Features user auth and data management.",
    longDescription:
      "Complete full-stack application with user authentication, AI integration, and real-time features. Built as a commercial product with focus on student productivity.",
    tech: ["Next.js", "PostgreSQL", "React.js", "TailwindCSS", "TypeScript", "GROQ API", "11Labs API", "DeepGrams API"],
    liveUrl: "https://www.2nd-brain.app",
    githubUrl: "",
    featured: true,
    category: "Business",
    difficulty: "Expert",
    status: "Live",
  },
  {
    id: 2,
    title: "Twitchie",
    subtitle: "Social Platform",
    description: "A full-stack social platform with real-time features and modern UI.",
    longDescription:
      "Complete social media platform with user profiles, real-time messaging, and interactive features built with traditional web technologies.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    liveUrl: "",
    githubUrl: "https://github.com/Malshan20/twitchie",
    featured: true,
    category: "Social",
    difficulty: "Advanced",
    status: "Complete",
  },
  {
    id: 3,
    title: "Weather App",
    subtitle: "Real-time Weather Data",
    description: "A dynamic app fetching real-time weather data via APIs with beautiful UI.",
    longDescription:
      "Clean and intuitive weather application with location-based forecasts, interactive maps, and responsive design.",
    tech: ["JavaScript", "APIs", "HTML", "CSS"],
    liveUrl: "https://weather-app-bay-three-17.vercel.app/",
    githubUrl: "",
    featured: false,
    category: "Utility",
    difficulty: "Intermediate",
    status: "Live",
  },
  {
    id: 4,
    title: "Fluxy Fury",
    subtitle: "Creative Full-Stack App",
    description: "A creative full-stack application with modern design and interactive features.",
    longDescription: "Innovative web application showcasing creative design patterns and modern development practices.",
    tech: ["JavaScript", "React", "Node.js"],
    liveUrl: "https://fluxy-fury.vercel.app/",
    githubUrl: "",
    featured: false,
    category: "Creative",
    difficulty: "Advanced",
    status: "Live",
  },
  {
    id: 5,
    title: "Groq Bot",
    subtitle: "AI-Powered Chatbot",
    description: "An AI-powered chatbot leveraging modern APIs for intelligent conversations.",
    longDescription:
      "Advanced chatbot implementation using cutting-edge AI APIs with natural language processing capabilities.",
    tech: ["JavaScript", "React", "Node.js", "APIs"],
    liveUrl: "https://groq-bot-five.vercel.app/",
    githubUrl: "",
    featured: false,
    category: "AI",
    difficulty: "Advanced",
    status: "Live",
  },
  {
    id: 6,
    title: "Trady",
    subtitle: "Trading Interface",
    description: "A sleek frontend app with responsive UI for trading simulation.",
    longDescription: "Modern trading interface with real-time data visualization and responsive design patterns.",
    tech: ["React.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://trady-sable.vercel.app/",
    githubUrl: "",
    featured: false,
    category: "Finance",
    difficulty: "Intermediate",
    status: "Live",
  },
  {
    id: 7,
    title: "Blox Lucky",
    subtitle: "Gaming Interface",
    description: "A vibrant frontend app with modern design and gaming elements.",
    longDescription: "Interactive gaming interface with vibrant animations and modern UI/UX design principles.",
    tech: ["React.js", "TypeScript", "TailwindCSS"],
    liveUrl: "https://blox-lucky.vercel.app/",
    githubUrl: "",
    featured: false,
    category: "Gaming",
    difficulty: "Intermediate",
    status: "Live",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Business", "Social", "AI", "Creative", "Finance", "Gaming", "Utility"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Expert":
        return "text-red-400 border-red-400"
      case "Advanced":
        return "text-orange-400 border-orange-400"
      case "Intermediate":
        return "text-yellow-400 border-yellow-400"
      default:
        return "text-green-400 border-green-400"
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Mission Archive
          </h2>
          <p className="text-xl text-gray-400 mb-8">Completed quests and ongoing adventures</p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category ? "bg-blue-500 text-white" : "bg-slate-800 text-gray-400 hover:bg-slate-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden cursor-pointer group ${
                project.featured ? "ring-2 ring-yellow-400/50" : ""
              }`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-400 text-sm">{project.subtitle}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs border ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </div>
                </div>

                <p className="text-gray-400 mb-4 text-sm">
                  {selectedProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, selectedProject === project.id ? project.tech.length : 3).map((tech) => (
                    <span key={tech} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {!selectedProject && project.tech.length > 3 && (
                    <span className="text-gray-500 text-xs">+{project.tech.length - 3} more</span>
                  )}
                </div>

                {/* Status and links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm">{project.status}</span>
                  </div>

                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4 text-blue-400" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 text-gray-400" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">{projects.length}</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {projects.filter((p) => p.status === "Live").length}
            </div>
            <div className="text-gray-400">Live Deployments</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {new Set(projects.flatMap((p) => p.tech)).size}
            </div>
            <div className="text-gray-400">Technologies Used</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
