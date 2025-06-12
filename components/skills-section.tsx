"use client"

import { motion, useReducedMotion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { Zap, Star } from "lucide-react"

const skills = [
  { name: "React.js", level: 85, icon: "⚛️", category: "Frontend", rarity: "Epic" },
  { name: "TypeScript", level: 80, icon: "📘", category: "Language", rarity: "Epic" },
  { name: "Next.js", level: 90, icon: "▲", category: "Framework", rarity: "Legendary" },
  { name: "Node.js", level: 75, icon: "🟢", category: "Backend", rarity: "Rare" },
  { name: "PostgreSQL", level: 70, icon: "🐘", category: "Database", rarity: "Rare" },
  { name: "MySQL", level: 75, icon: "🗄️", category: "Database", rarity: "Rare" },
  { name: "PHP", level: 65, icon: "🐘", category: "Backend", rarity: "Common" },
  { name: "Python", level: 60, icon: "🐍", category: "Language", rarity: "Common" },
  { name: "JavaScript", level: 90, icon: "🟨", category: "Language", rarity: "Legendary" },
  { name: "HTML/CSS", level: 95, icon: "🎨", category: "Frontend", rarity: "Legendary" },
  { name: "TailwindCSS", level: 90, icon: "💨", category: "Styling", rarity: "Epic" },
  { name: "APIs", level: 85, icon: "🔌", category: "Integration", rarity: "Epic" },
  { name: "GitHub", level: 80, icon: "🐙", category: "Tools", rarity: "Rare" },
  { name: "Vercel", level: 85, icon: "▲", category: "Deployment", rarity: "Epic" },
  { name: "Blockchain", level: 40, icon: "⛓️", category: "Emerging", rarity: "Mythic" },
  { name: "Cybersecurity", level: 45, icon: "🔒", category: "Security", rarity: "Mythic" },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [unlockedSkills, setUnlockedSkills] = useState<string[]>([])
  const prefersReducedMotion = useReducedMotion()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const getLevelText = (level: number) => {
    if (level >= 80) return "Master"
    if (level >= 60) return "Expert"
    if (level >= 40) return "Adept"
    return "Novice"
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "from-yellow-400 to-orange-500"
      case "Epic":
        return "from-purple-400 to-pink-500"
      case "Rare":
        return "from-blue-400 to-cyan-500"
      case "Mythic":
        return "from-red-400 to-purple-600"
      default:
        return "from-gray-400 to-gray-600"
    }
  }

  const handleSkillClick = (skillName: string) => {
    if (!unlockedSkills.includes(skillName)) {
      setUnlockedSkills([...unlockedSkills, skillName])
    }
  }

  // Stagger animation for skills
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: 180 },
    show: { opacity: 1, scale: 1, rotateY: 0 },
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      {/* Reduced background elements */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                willChange: "transform, opacity",
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono">SKILL TREE UNLOCKED</span>
          </div>

          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Ability Arsenal
          </h2>
          <p className="text-xl text-gray-400">Collected powers and mastered techniques</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                      y: -5,
                    }
              }
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              onClick={() => handleSkillClick(skill.name)}
              className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-cyan-500/30 rounded-xl p-6 cursor-pointer group"
              style={{ willChange: "transform, box-shadow" }}
            >
              {/* Rarity border glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${getRarityColor(skill.rarity)} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity duration-300 -z-10`}
              ></div>

              {/* Rarity indicator */}
              <div
                className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r ${getRarityColor(skill.rarity)}`}
              ></div>

              <div className="text-center relative">
                <motion.div
                  className="text-4xl mb-3 relative"
                  animate={
                    unlockedSkills.includes(skill.name) && !prefersReducedMotion
                      ? {
                          scale: [1, 1.2, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                  {unlockedSkills.includes(skill.name) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-xs">✓</span>
                    </motion.div>
                  )}
                </motion.div>

                <h3 className="font-bold text-white mb-2 text-sm">{skill.name}</h3>

                <div className="text-xs text-gray-400 mb-3 flex items-center justify-center gap-1">
                  <span>{skill.category}</span>
                  <div className="flex">
                    {[...Array(Math.floor(skill.level / 20))].map((_, i) => (
                      <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Enhanced XP Bar */}
                <div className="w-full bg-gray-800 rounded-full h-3 mb-2 border border-gray-600">
                  <motion.div
                    className={`bg-gradient-to-r ${getRarityColor(skill.rarity)} h-3 rounded-full relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ willChange: "width" }}
                  >
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        style={{ willChange: "transform" }}
                      />
                    )}
                  </motion.div>
                </div>

                <div className="text-xs font-mono">
                  <div className={`text-cyan-400 font-bold`}>
                    LVL {Math.floor(skill.level / 10)} • {skill.level}%
                  </div>
                  <div className="text-gray-500">{getLevelText(skill.level)}</div>
                </div>
              </div>

              {/* Hover tooltip with enhanced styling */}
              {hoveredSkill === skill.name && !prefersReducedMotion && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-20 border border-cyan-500/50"
                >
                  <div className="font-bold text-cyan-400">{skill.name}</div>
                  <div className="text-xs text-gray-300">
                    {skill.rarity} • {getLevelText(skill.level)}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"></div>
                </motion.div>
              )}

              {/* Unlock animation */}
              {unlockedSkills.includes(skill.name) && !prefersReducedMotion && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="text-2xl">✨</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-16 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 rounded-xl px-8 py-4 backdrop-blur-sm">
            <motion.span
              className="text-3xl"
              animate={prefersReducedMotion ? {} : { rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              🏆
            </motion.span>
            <div>
              <div className="text-yellow-400 font-bold text-lg">ACHIEVEMENT UNLOCKED</div>
              <div className="text-yellow-300 text-sm">Full-Stack Warrior • Master of Multiple Domains</div>
            </div>
          </div>

          <div className="text-sm text-gray-400 font-mono">
            Skills Unlocked: {unlockedSkills.length}/{skills.length} • Click skills to unlock them!
          </div>
        </motion.div>
      </div>
    </section>
  )
}
