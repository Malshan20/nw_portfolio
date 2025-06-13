"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Briefcase, Calendar, MapPin, Code, Server, Palette, Zap, ExternalLink } from "lucide-react"

export default function ExperienceSection() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const experience = [
    {
      id: 1,
      title: "Founder",
      company: "2nd Brain",
      location: "Remote",
      period: "2025 – Present",
      description: [
        "Founded and launched an AI-based productivity web app with real users.",
        "Designed and developed the entire tech stack, including frontend (Next.js, TailwindCSS) and backend (Node.js, PostgreSQL).",
        "Implemented scalable architecture and optimized performance for production use.",
        "Handled business development, marketing, and customer engagement.",
      ],
      skills: [
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "PostgreSQL",
        "AI Integration",
        "Business Development",
        "Marketing",
      ],
      achievements: [
        { title: "Successful Product Launch", icon: "🚀" },
        { title: "Full-Stack Architecture", icon: "🏗️" },
        { title: "Business Development", icon: "📈" },
      ],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500",
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "CR-X",
      location: "Remote",
      period: "2024 – Present",
      description: [
        "Leading development of internal and external tools using React, Node.js, and RESTful APIs.",
        "Collaborating with product teams to deliver scalable solutions.",
        "Writing clean, maintainable code and participating in agile development cycles.",
      ],
      skills: ["React", "Node.js", "RESTful APIs", "Agile Development", "Collaboration", "Clean Code"],
      achievements: [
        { title: "Tool Development Lead", icon: "🛠️" },
        { title: "Agile Practitioner", icon: "🔄" },
        { title: "Team Collaboration", icon: "👥" },
      ],
      color: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500",
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      company: "Freelance & Personal Projects",
      location: "Sri Lanka",
      period: "2023 – Present",
      description: [
        "Built and deployed over 30 web applications using React.js, Node.js, PHP, and PostgreSQL.",
        "Led full product cycles from idea to deployment using Git and Vercel.",
        "Integrated RESTful APIs for real-time features including weather apps and AI tools.",
        "Designed cross-browser responsive UIs using HTML, CSS, JavaScript, and TypeScript.",
      ],
      skills: ["React.js", "Node.js", "PHP", "PostgreSQL", "Git", "Vercel", "RESTful APIs", "TypeScript"],
      achievements: [
        { title: "30+ Projects Completed", icon: "🏆" },
        { title: "Full Product Cycle Mastery", icon: "🔄" },
        { title: "API Integration Expert", icon: "🔌" },
      ],
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500",
    },
  ]

  // Skill categories for the radar chart
  const skillCategories = [
    { name: "Frontend", icon: <Code className="w-4 h-4" />, value: 90 },
    { name: "Backend", icon: <Server className="w-4 h-4" />, value: 80 },
    { name: "Design", icon: <Palette className="w-4 h-4" />, value: 75 },
    { name: "APIs", icon: <Zap className="w-4 h-4" />, value: 85 },
  ]

  // Project types for the stats
  const projectTypes = [
    { name: "Frontend", count: 12, color: "bg-blue-400" },
    { name: "Full-Stack", count: 10, color: "bg-purple-400" },
    { name: "API Integration", count: 8, color: "bg-green-400" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Quest Log
          </h2>
          <p className="text-xl text-gray-400">Professional adventures and completed missions</p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-16 relative">
          {/* Vertical timeline connector */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-500 via-green-500 to-blue-500 rounded-full hidden md:block"></div>

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="mb-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 z-10 transform -translate-x-1/2 hidden md:block"></div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`bg-gradient-to-br ${item.color} rounded-xl p-6 border ${item.borderColor} cursor-pointer md:ml-12`}
                onClick={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full ${item.iconBg} flex items-center justify-center shrink-0`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="text-blue-300">{item.company}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-green-400" />
                        {item.period}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <motion.div
                      animate={{ rotate: expandedItem === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-400"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedItem === item.id ? "auto" : 0,
                    opacity: expandedItem === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-blue-500/30 mt-4">
                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2 mb-6">
                      {item.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-1 shrink-0">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                          </div>
                          <span>{desc}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.skills.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-blue-300 mb-3">Achievements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {item.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-4"
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{achievement.icon}</div>
                            <div className="text-yellow-400 font-medium">{achievement.title}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats and Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skill Radar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/30"
          >
            <h3 className="text-xl font-bold text-white mb-6">Skill Distribution</h3>
            <div className="relative h-64">
              {/* Radar Chart Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-[250px] max-h-[250px]">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border border-gray-700 rounded-full"
                      style={{
                        transform: `scale(${(i + 1) / 4})`,
                        opacity: 0.3,
                      }}
                    ></div>
                  ))}
                  {/* Radar Lines */}
                  {skillCategories.map((category, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gray-700 origin-left"
                      style={{
                        transform: `rotate(${(i * 360) / skillCategories.length}deg)`,
                        opacity: 0.3,
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Radar Chart Data */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-[250px] max-h-[250px]">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <polygon
                      points={skillCategories
                        .map((category, i) => {
                          const angle = (i * 2 * Math.PI) / skillCategories.length - Math.PI / 2
                          const radius = (category.value / 100) * 50
                          return `${50 + radius * Math.cos(angle)},${50 + radius * Math.sin(angle)}`
                        })
                        .join(" ")}
                      fill="rgba(59, 130, 246, 0.2)"
                      stroke="#3b82f6"
                      strokeWidth="1"
                    />
                  </svg>

                  {/* Data Points */}
                  {skillCategories.map((category, i) => {
                    const angle = (i * 2 * Math.PI) / skillCategories.length - Math.PI / 2
                    const radius = (category.value / 100) * 50
                    const x = 50 + radius * Math.cos(angle)
                    const y = 50 + radius * Math.sin(angle)

                    return (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="absolute w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Labels */}
              {skillCategories.map((category, i) => {
                const angle = (i * 2 * Math.PI) / skillCategories.length - Math.PI / 2
                const radius = 55
                const x = 50 + radius * Math.cos(angle)
                const y = 50 + radius * Math.sin(angle)

                return (
                  <div
                    key={i}
                    className="absolute flex items-center justify-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="bg-slate-800 p-2 rounded-full">{category.icon}</div>
                    <div className="absolute mt-8 text-xs text-gray-300 whitespace-nowrap">
                      {category.name} ({category.value}%)
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/30"
          >
            <h3 className="text-xl font-bold text-white mb-6">Career Progression</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Professional Growth</span>
                  <span className="text-blue-400 font-mono">3 Roles</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"></div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gradient-to-br from-blue-500/10 to-blue-700/10 border border-blue-500/30 rounded-lg p-4"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">👨‍💻</div>
                    <div className="text-lg font-bold text-blue-400">Freelancer</div>
                    <div className="text-xs text-gray-400 mt-1">2023 - Present</div>
                    <div className="mt-2 text-sm text-gray-300">30+ Projects</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-green-500/10 to-green-700/10 border border-green-500/30 rounded-lg p-4"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">🛠️</div>
                    <div className="text-lg font-bold text-green-400">Full-Stack Dev</div>
                    <div className="text-xs text-gray-400 mt-1">2024 - Present</div>
                    <div className="mt-2 text-sm text-gray-300">CR-X</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-br from-purple-500/10 to-purple-700/10 border border-purple-500/30 rounded-lg p-4"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">🚀</div>
                    <div className="text-lg font-bold text-purple-400">Founder</div>
                    <div className="text-xs text-gray-400 mt-1">2025 - Present</div>
                    <div className="mt-2 text-sm text-gray-300">2nd Brain</div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 pt-6 border-t border-gray-700"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">3+ Years</div>
                  <div className="text-gray-400">Professional Experience</div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-xl font-bold text-green-400">30+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-xl font-bold text-yellow-400">1</div>
                    <div className="text-xs text-gray-400">Company Founded</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3">
                    <div className="text-xl font-bold text-purple-400">3</div>
                    <div className="text-xs text-gray-400">Professional Roles</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
              <span className="text-purple-400 text-sm">FOUNDER SPOTLIGHT</span>
            </div>
            <h3 className="text-2xl font-bold text-white">2nd Brain - AI Productivity Platform</h3>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-purple-500/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-purple-400 mb-2">2nd Brain</h4>
                <p className="text-gray-300 mb-4">
                  An AI-powered productivity platform designed to enhance learning and productivity for students and
                  professionals.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                    <span className="text-gray-300">
                      Built complete tech stack from scratch using Next.js, TailwindCSS, Node.js, and PostgreSQL
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                    <span className="text-gray-300">
                      Implemented advanced AI features for personalized learning experiences
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                    <span className="text-gray-300">
                      Managed all aspects of business from development to marketing and customer support
                    </span>
                  </div>
                </div>
                <motion.a
                  href="https://www.2nd-brain.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit 2nd Brain
                </motion.a>
              </div>
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg overflow-hidden border border-purple-500/30 h-64 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🧠</div>
                  <div className="text-purple-400 font-bold text-xl">2nd Brain</div>
                  <div className="text-gray-400 text-sm mt-2">Founded 2025</div>
                  <div className="mt-4 flex justify-center gap-2">
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">AI</span>
                    <span className="bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full text-xs">Productivity</span>
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">SaaS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3">
            <span className="text-2xl">🚀</span>
            <span className="text-purple-400 font-semibold">Achievement Unlocked: Entrepreneur & Developer</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
