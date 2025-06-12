"use client"

import { motion } from "framer-motion"
import { Trophy, Target, Zap, Shield, Heart } from "lucide-react"
import { useState } from "react"

interface GameHUDProps {
  score: number
  currentSection: number
}

export default function GameHUD({ score, currentSection }: GameHUDProps) {
  const sections = ["Hero", "Skills", "Projects", "Education", "About", "Contact"]
  const level = Math.floor(score / 100) + 1
  const health = Math.min(100, score / 5)
  const mana = Math.min(100, (score * 1.2) % 100)
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`fixed top-4 right-4 z-50 bg-black/90 backdrop-blur-sm border-2 border-cyan-500/50 rounded-xl p-4 shadow-2xl transition-all duration-300 ${
        isMinimized ? "min-w-[60px]" : "min-w-[250px]"
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        {/* Minimize/Expand button */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="absolute top-2 right-2 w-6 h-6 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-full flex items-center justify-center transition-colors"
        >
          {isMinimized ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-400"
            >
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-400"
            >
              <polyline points="4 14 10 14 10 20"></polyline>
              <polyline points="20 10 14 10 14 4"></polyline>
              <line x1="14" y1="10" x2="21" y2="3"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          )}
        </button>
      </div>

      {isMinimized ? (
        // Minimized view
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div className="text-xs text-cyan-400 font-mono">LVL {level}</div>
        </div>
      ) : (
        // Full view - keep the existing content
        <div className="space-y-4">
          {/* Player Info Header */}
          <div className="border-b border-cyan-500/30 pb-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-cyan-400 font-mono text-sm font-bold">MALSHAN.EXE</span>
            </div>
            <div className="text-xs text-gray-400 font-mono">Portfolio Explorer</div>
          </div>

          {/* Health Bar */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-red-400 font-mono text-xs">HP: {Math.floor(health)}/100</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 border border-red-500/30">
              <motion.div
                className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${health}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Mana Bar */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-mono text-xs">MP: {Math.floor(mana)}/100</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 border border-blue-500/30">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${mana}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Score & Level */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-mono text-xs">EXP: {score}/500</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-mono text-xs">LVL: {level}</span>
              <div className="flex gap-1">
                {[...Array(Math.min(5, level))].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-purple-400 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Current Location */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono text-xs">LOCATION:</span>
            </div>
            <div className="text-green-300 font-mono text-xs bg-green-500/10 px-2 py-1 rounded border border-green-500/30">
              {sections[currentSection] || "Unknown"}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="text-xs text-gray-400 font-mono">MISSION PROGRESS</div>
            <div className="w-full bg-gray-800 rounded-full h-3 border border-purple-500/30">
              <motion.div
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 h-3 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: `${(score / 500) * 100}%` }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            </div>
          </div>

          {/* Mini achievements */}
          <div className="pt-2 border-t border-cyan-500/30">
            <div className="text-xs text-gray-400 font-mono mb-2">ACTIVE BUFFS</div>
            <div className="flex gap-1">
              <div className="w-6 h-6 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center">
                <span className="text-xs">🚀</span>
              </div>
              <div className="w-6 h-6 bg-green-500/20 border border-green-500/50 rounded flex items-center justify-center">
                <span className="text-xs">💡</span>
              </div>
              <div className="w-6 h-6 bg-purple-500/20 border border-purple-500/50 rounded flex items-center justify-center">
                <span className="text-xs">⚡</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}
