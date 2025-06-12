"use client"

import { useEffect, useRef, useState } from "react"
import { useWindowSize } from "@/hooks/use-window-size"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const windowSize = useWindowSize()
  const animationRef = useRef<number>()
  const particlesRef = useRef<
    Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      pulse: number
    }>
  >([])

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = () => setIsReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()

    // Optimize by reducing particles on mobile
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 30 : 60
    const connectionDistance = isMobile ? 80 : 120

    const colors = ["#00f5ff", "#0080ff", "#8000ff", "#ff0080", "#00ff80"]

    // Initialize particles only if they haven't been created yet
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
        })
      }
    }

    // Animation function with performance optimizations
    const animate = () => {
      // Skip animation if reduced motion is preferred
      if (isReducedMotion) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Use a buffer for connections to reduce draw calls
      const connections: Array<{
        x1: number
        y1: number
        x2: number
        y2: number
        opacity: number
        color1: string
        color2: string
      }> = []

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulse += 0.01 // Reduced pulse speed

        // Bounce off edges with proper scaling
        const scaledWidth = window.innerWidth
        const scaledHeight = window.innerHeight
        if (particle.x < 0 || particle.x > scaledWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > scaledHeight) particle.vy *= -1

        // Collect connections first
        particlesRef.current.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            connections.push({
              x1: particle.x,
              y1: particle.y,
              x2: otherParticle.x,
              y2: otherParticle.y,
              opacity: (1 - distance / connectionDistance) * 0.2,
              color1: particle.color,
              color2: otherParticle.color,
            })
          }
        })
      })

      // Draw particles in a batch
      particlesRef.current.forEach((particle) => {
        const pulseSize = particle.size + Math.sin(particle.pulse) * 0.3 // Reduced pulse effect

        // Simplified particle drawing
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()
      })

      // Draw connections in a batch
      connections.forEach((connection) => {
        ctx.beginPath()
        ctx.moveTo(connection.x1, connection.y1)
        ctx.lineTo(connection.x2, connection.y2)
        ctx.strokeStyle = `${connection.color1}${Math.floor(connection.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Clean up animation frame on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isReducedMotion, windowSize])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ willChange: "transform" }} // GPU acceleration hint
    />
  )
}
