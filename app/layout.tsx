import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true })

export const metadata: Metadata = {
  title: "Malshan Dissanayaka - Junior Full-Stack Developer",
  description:
    "Gamified portfolio showcasing full-stack development skills, projects, and passion for coding. Building the future, one line of code at a time.",
    icons: {
      icon: "/logo.png",
    },
  keywords:
    "Malshan Dissanayaka, full-stack developer, React, Next.js, TypeScript, portfolio, web development, junior developer",
  authors: [{ name: "Malshan Dissanayaka" }],
  openGraph: {
    title: "Malshan Dissanayaka - Junior Full-Stack Developer",
    description: "Gamified portfolio showcasing full-stack development skills and projects",
    
  }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical assets */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Add preload hints for the resume file */}
        <link rel="prefetch" href="/Malshan_Dissanayaka_Resume.pdf" as="document" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
