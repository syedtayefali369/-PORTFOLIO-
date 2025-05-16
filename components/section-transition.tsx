"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SectionTransitionProps {
  children: React.ReactNode
  id: string
}

export default function SectionTransition({ children, id }: SectionTransitionProps) {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash) {
        setActiveSection(hash)
      }
    }

    // Initial check
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.section
        id={id}
        key={id}
        initial={{ opacity: 0.8, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`scroll-mt-20 ${activeSection === id ? "active-section" : ""}`}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  )
}
