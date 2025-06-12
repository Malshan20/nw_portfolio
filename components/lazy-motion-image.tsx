"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface LazyMotionImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export function LazyMotionImage({ src, alt, className, width, height }: LazyMotionImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onLoad={() => setIsLoaded(true)}
    />
  )
}
