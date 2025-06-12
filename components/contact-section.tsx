"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Github, Linkedin, Twitter, Mail, MapPin, Rocket } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setSubmitted(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/Malshan20", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/maleeshamalshan/", color: "hover:text-blue-400" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/Ma_malshan", color: "hover:text-sky-400" },
    { name: "Email", icon: Mail, url: "mailto:malshandissanayaka246@gmail.com", color: "hover:text-red-400" },
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
            Mission Control
          </h2>
          <p className="text-xl text-gray-400">Ready to start your next project? Let's connect!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 position-relative">
          {/* Contact Form */}
          

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Quick Info */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Available for remote work worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span>Response time: Usually within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Social Portals */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Social Portals</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 p-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 text-gray-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Developer Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Coffee consumed</span>
                  <span className="text-yellow-400 font-mono">∞ cups</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Lines of code written</span>
                  <span className="text-green-400 font-mono">50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Projects completed</span>
                  <span className="text-blue-400 font-mono">7+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Bugs fixed</span>
                  <span className="text-purple-400 font-mono">1,337</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
