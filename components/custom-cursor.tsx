"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverOn = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setLinkHovered(true)
      } else {
        setLinkHovered(false)
      }
    }

    const handleMouseLeave = () => setHidden(true)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseenter", updatePosition)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleLinkHoverOn)

    document.body.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseenter", updatePosition)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleLinkHoverOn)

      document.body.style.cursor = "auto"
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference ${
          hidden ? "opacity-0" : "opacity-100"
        } ${clicked ? "scale-75" : "scale-100"} transition-opacity duration-150 ease-in-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: linkHovered ? "60px" : "30px",
          height: linkHovered ? "60px" : "30px",
          backgroundColor: "white",
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
          transition: "width 0.2s, height 0.2s, transform 0.1s",
        }}
      />

      {/* Cursor trail */}
      <div
        className={`fixed pointer-events-none z-40 rounded-full bg-primary/40 ${
          hidden ? "opacity-0" : "opacity-60"
        } transition-opacity duration-300 ease-in-out`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "8px",
          height: "8px",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s, width 0.2s, height 0.2s",
          transitionDelay: "0.05s",
        }}
      />
    </>
  )
}
