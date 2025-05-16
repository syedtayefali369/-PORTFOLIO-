"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import type { Container, Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

export default function ParticleBackground() {
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
              distance: 150,
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 6,
            },
            repulse: {
              distance: 150,
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
            distance: 150,
            enable: true,
            opacity: 0.5, // Increased from 0.3
            width: 1.5, // Increased from 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.5, // Increased from 1
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
            value: 100, // Increased from 80
          },
          opacity: {
            value: 0.7, // Increased from 0.3
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
            value: { min: 2, max: 5 }, // Increased from min: 1, max: 3
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
