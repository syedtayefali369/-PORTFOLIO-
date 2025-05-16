"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-tsparticles"
import type { Container, Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export default function ParticleBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on mount
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: You can do something with the container once it's loaded
  }, [])

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 z-0"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        fullScreen: false,
        background: {
          color: {
            value: "transparent",
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              distance: isMobile ? 100 : 150,
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: isMobile ? 3 : 6,
            },
            repulse: {
              distance: isMobile ? 100 : 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#9333ea",
          },
          links: {
            color: "#9333ea",
            distance: isMobile ? 100 : 150,
            enable: true,
            opacity: 0.5,
            width: isMobile ? 1 : 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: isMobile ? 1 : 1.5,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: isMobile ? 50 : 100,
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.4,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: isMobile ? 1 : 2, max: isMobile ? 3 : 5 },
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
