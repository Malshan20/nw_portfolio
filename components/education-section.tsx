"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Clock, ExternalLink } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      id: 1,
      degree: "Computer Science Certificate",
      institution: "Harvard University",
      platform: "EDX",
      period: "Completed",
      description:
        "Comprehensive computer science fundamentals covering algorithms, data structures, and software engineering principles.",
      icon: BookOpen,
      color: "from-red-500/20 to-red-700/20",
      borderColor: "border-red-500/30",
      iconBg: "bg-red-500",
      status: "Completed",
    },
    {
      id: 2,
      degree: "Full-stack Development Certificate",
      institution: "University of Moratuwa",
      period: "Completed",
      description:
        "Intensive program covering modern web development technologies, frameworks, and best practices for building full-stack applications.",
      icon: Award,
      color: "from-green-500/20 to-green-700/20",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500",
      status: "Completed",
    },
    {
      id: 3,
      degree: "BSc in Software Engineering",
      institution: "Birmingham City University",
      period: "Ongoing (Top-up)",
      description:
        "Advanced degree program focusing on software architecture, enterprise systems, and professional development in software engineering.",
      icon: GraduationCap,
      color: "from-blue-500/20 to-blue-700/20",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500",
      status: "In Progress",
    },
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
            Knowledge Tree
          </h2>
          <p className="text-xl text-gray-400">Academic achievements and learning paths</p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-16">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 w-10 h-10 rounded-full bg-slate-900 border-4 border-blue-500 z-10 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-blue-400" />
                </div>

                {/* Content card - alternate sides */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`bg-gradient-to-br ${item.color} rounded-xl p-6 border ${item.borderColor}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full ${item.iconBg} flex items-center justify-center`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                        <p className="text-gray-300">{item.institution}</p>
                      </div>
                    </div>

                    <div className="mb-4 flex items-center gap-2">
                      {item.status === "In Progress" ? (
                        <Clock className="w-4 h-4 text-yellow-400" />
                      ) : (
                        <Award className="w-4 h-4 text-green-400" />
                      )}
                      <span
                        className={`text-sm ${item.status === "In Progress" ? "text-yellow-400" : "text-green-400"}`}
                      >
                        {item.period}
                      </span>
                      {item.platform && (
                        <span className="ml-2 bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded-full">
                          {item.platform}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm">{item.description}</p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 flex items-center gap-1 text-blue-400 text-sm hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3">
              <span className="text-2xl">🧠</span>
              <span className="text-purple-400 font-semibold">Achievement Unlocked: Continuous Learner</span>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
            <div className="text-gray-400">Academic Qualifications</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">2</div>
            <div className="text-gray-400">Completed Certifications</div>
          </div>
          <div className="text-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-400">Learning Potential</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
