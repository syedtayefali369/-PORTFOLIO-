"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Check if we're on a mobile device
    setIsMobile(window.innerWidth < 768)

    // If mobile, don't set up the cursor effect
    if (window.innerWidth < 768) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = () => setVisible(true)
    const handleMouseLeave = () => setVisible(false)

    const handleLinkHoverOn = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleLinkHoverOn)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleLinkHoverOn)
    }
  }, [])

  // Don't render anything on mobile
  if (isMobile) return null

  return (
    <div
      className={`fixed pointer-events-none z-50 rounded-full transition-all duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? "50px" : "30px",
        height: isHovering ? "50px" : "30px",
        backgroundColor: "transparent",
        boxShadow: `0 0 ${isClicking ? "10px" : isHovering ? "25px" : "15px"} 5px var(--primary)`,
        transform: "translate(-50%, -50%)",
        transition: "width 0.3s, height 0.3s, box-shadow 0.3s",
      }}
    />
  )
}
