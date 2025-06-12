"use client"

import { motion } from "framer-motion"
import { User, Briefcase, Heart, Download, Shield } from "lucide-react"
import { downloadResume } from "@/utils/download-resume"

export default function AboutSection() {
  const stats = [
    { label: "Passion Level", value: 100, icon: "❤️" },
    { label: "Problem Solving", value: 95, icon: "🧩" },
    { label: "Team Player", value: 100, icon: "🤝" },
    { label: "Learning Speed", value: 90, icon: "🚀" },
    { label: "Code Quality", value: 85, icon: "✨" },
    { label: "Innovation", value: 88, icon: "💡" },
  ]

  const achievements = [
    {
      title: "Self-Taught Developer",
      description: "Mastered full-stack development through dedication and continuous learning",
      icon: "🎓",
    },
    {
      title: "Business Owner",
      description: "Successfully launched and operate 2nd-brain.app as a commercial product",
      icon: "💼",
    },
    {
      title: "Blockchain Explorer",
      description: "Actively learning blockchain technology and smart contract development",
      icon: "⛓️",
    },
    {
      title: "Security Minded",
      description: "Developing cybersecurity skills to build secure applications",
      icon: "🔒",
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
            Player Profile
          </h2>
          <p className="text-xl text-gray-400">Get to know the developer behind the code</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Character Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Developer Stats</h3>
                <p className="text-blue-400">Junior Full-Stack Developer</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span>Passionate coder and problem-solver</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Heart className="w-5 h-5 text-red-400" />
                <span>Self-taught with entrepreneurial spirit</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Interested in blockchain & cybersecurity</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-gray-400 leading-relaxed">
                I'm a self-taught full-stack developer with a passion for creating innovative solutions. My journey
                began with curiosity and has evolved into building commercial applications like 2nd-brain.app. I love
                tackling complex problems and am always eager to learn new technologies, especially in blockchain and
                cybersecurity.
              </p>
            </div>

            <motion.button
              onClick={downloadResume}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download Power-Up (Resume)
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Character Attributes</h3>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-4 border border-blue-500/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{stat.icon}</span>
                    <span className="text-white font-medium">{stat.label}</span>
                  </div>
                  <span className="text-blue-400 font-mono">{stat.value}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Achievements Unlocked</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Easter Egg Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2">
            <span className="text-purple-400 text-sm">
              🎮 Secret Mission Available - Explore to find hidden blockchain demo
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
