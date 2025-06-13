"use client"

import { useState, useEffect, Suspense, lazy } from "react"
import dynamic from "next/dynamic"
import { useReducedMotion } from "framer-motion"

// Import critical components normally
import HeroSection from "@/components/hero-section"
import GameHUD from "@/components/game-hud"

// Lazy load non-critical components with SSR disabled
const ParticleBackground = dynamic(() => import("@/components/particle-background"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-black"></div>,
})

const SkillsSection = lazy(() => import("@/components/skills-section"))
const ProjectsSection = lazy(() => import("@/components/projects-section"))
const EducationSection = lazy(() => import("@/components/education-section"))
const AboutSection = lazy(() => import("@/components/about-section"))
const ContactSection = lazy(() => import("@/components/contact-section"))
// Add the import for ExperienceSection
const ExperienceSection = lazy(() => import("@/components/experience-section"))

// Loading fallback component
const SectionLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

export default function Portfolio() {
  const [score, setScore] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    // Optimized scroll handler with throttling
    let lastScrollTime = 0
    const scrollThrottle = 100 // ms

    const handleScroll = () => {
      const now = Date.now()
      if (now - lastScrollTime < scrollThrottle) return
      lastScrollTime = now

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Calculate score based on scroll progress
      const scrollProgress = scrollY / (documentHeight - windowHeight)
      setScore(Math.floor(scrollProgress * 500))

      // Determine current section
      const sectionHeight = windowHeight * 0.8
      const section = Math.floor(scrollY / sectionHeight)
      setCurrentSection(section)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isClient])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black overflow-x-hidden">
      {isClient && !prefersReducedMotion && <ParticleBackground />}
      {isClient && <GameHUD score={score} currentSection={currentSection} />}

      <main className="relative z-10">
        <HeroSection />

        {isClient && (
          <>
            <Suspense fallback={<SectionLoading />}>
              <SkillsSection />
            </Suspense>

            <Suspense fallback={<SectionLoading />}>
              <ExperienceSection />
            </Suspense>

            <Suspense fallback={<SectionLoading />}>
              <ProjectsSection />
            </Suspense>

            <Suspense fallback={<SectionLoading />}>
              <EducationSection />
            </Suspense>

            <Suspense fallback={<SectionLoading />}>
              <AboutSection />
            </Suspense>

            <Suspense fallback={<SectionLoading />}>
              <ContactSection />
            </Suspense>
          </>
        )}
      </main>

      {/* Grain texture overlay - optimized to use CSS instead of SVG */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-20">
        <div className="w-full h-full noise-bg opacity-30"></div>
      </div>
    </div>
  )
}
