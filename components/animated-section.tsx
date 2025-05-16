"use client"

import type React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  distance?: number
  once?: boolean
  threshold?: number
}

export default function AnimatedSection({
  children,
  className,
  id,
  direction = "up",
  delay = 0,
  distance = 30,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    freezeOnceVisible: once,
  })

  // Map directions to transform values
  const directionMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  }

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={cn(
        "transition-all duration-700 ease-out",
        {
          "opacity-0": !isIntersecting,
          "opacity-100": isIntersecting,
        },
        className,
      )}
      style={{
        transform: isIntersecting ? "translate(0, 0)" : directionMap[direction],
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </section>
  )
}
