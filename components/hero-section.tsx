"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { ChevronDown, Code, Rocket, Zap, Star } from "lucide-react"
import { downloadResume } from "@/utils/download-resume"

export default function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Building the Future, One Line of Code at a Time"
  const [showPowerUp, setShowPowerUp] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Optimized typing effect with useCallback
  const startTypingEffect = useCallback(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
        setShowPowerUp(true)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [fullText])

  useEffect(() => {
    if (isClient) {
      startTypingEffect()
    }
  }, [startTypingEffect, isClient])

  // Smooth scroll function
  const scrollToProjects = useCallback(() => {
    if (typeof window !== "undefined") {
      const projectsSection = document.querySelector("section:nth-of-type(3)")
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [])

  // Reduced number of particles for better performance
  const particleCount = 15

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Optimized background elements - only render on client */}
      {isClient && !prefersReducedMotion && (
        <div className="absolute inset-0">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1920),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1080),
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
              style={{ willChange: "transform, opacity" }}
            />
          ))}

          {/* Reduced geometric shapes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute w-4 h-4 border-2 border-purple-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                willChange: "transform",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Gaming HUD overlay */}
      <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-sm border border-cyan-500/50 rounded-lg p-4 z-20">
        <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          SYSTEM ONLINE
        </div>
        <div className="text-xs text-gray-400 mt-1">Welcome, Visitor</div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-mono">DEVELOPER LEVEL: JUNIOR</span>
            <div className="flex gap-1 ml-2">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Optimized name with glow effect */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent relative"
          style={{ willChange: "transform" }}
        >
          <span>
            Malshan Dissanayaka
            {isClient && !prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                style={{ willChange: "transform, opacity" }}
              />
            )}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold"
        >
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Junior Full-Stack Developer
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-blue-300 mb-12 h-8 font-mono bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30"
        >
          {text}
          <span className="animate-pulse text-cyan-400">|</span>
        </motion.div>

        {/* Power-up notification */}
        {showPowerUp && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/50 rounded-full px-4 py-2 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-mono">POWER-UP UNLOCKED: Portfolio Access</span>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 border border-blue-400/50 cursor-pointer"
            style={{ willChange: "transform, box-shadow" }}
          >
            <Rocket className="w-5 h-5" />
            START MISSION
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl -z-10"></div>
          </motion.button>

          <motion.button
            onClick={downloadResume}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm cursor-pointer"
            style={{ willChange: "transform, box-shadow" }}
          >
            DOWNLOAD RESUME
          </motion.button>
        </motion.div>

        {/* Gaming stats preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          <div className="bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-400">30+</div>
            <div className="text-xs text-gray-400 font-mono">PROJECTS</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-400">3</div>
            <div className="text-xs text-gray-400 font-mono">DEGREES</div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-purple-400">∞</div>
            <div className="text-xs text-gray-400 font-mono">POTENTIAL</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={isClient && !prefersReducedMotion ? { y: [0, 10, 0] } : {}}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-full p-2">
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </div>
      </motion.div>
    </section>
  )
}
