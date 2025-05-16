"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedItemProps {
  children: ReactNode
  className?: string
  delay?: number
  isVisible?: boolean
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

export default function AnimatedItem({
  children,
  className,
  delay = 0,
  isVisible = false,
  direction = "up",
  distance = 20,
}: AnimatedItemProps) {
  // Map directions to transform values
  const directionMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  }

  return (
    <div
      className={cn(
        "transition-all duration-500 ease-out",
        {
          "opacity-0": !isVisible,
          "opacity-100": isVisible,
        },
        className,
      )}
      style={{
        transform: isVisible ? "translate(0, 0)" : directionMap[direction],
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
