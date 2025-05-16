"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text } from "@react-three/drei"
import * as THREE from "three"

function Model({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)

  useFrame((state, delta) => {
    if (mesh.current) {
      // Rotate based on mouse position
      mesh.current.rotation.x += delta * 0.2
      mesh.current.rotation.y += delta * 0.3

      // Subtle movement based on mouse position
      mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, (mousePosition.x * 0.5) / 5, 0.1)
      mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, (-mousePosition.y * 0.5) / 5, 0.1)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={mesh}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.2 : 1}
      >
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color={hovered ? "#a855f7" : "#9333ea"}
          wireframe={true}
          emissive={hovered ? "#a855f7" : "#9333ea"}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

function TextElement() {
  const textRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <Text
      ref={textRef}
      position={[0, -2.5, 0]}
      fontSize={0.5}
      color="#ffffff"
      font="/fonts/Inter_Regular.json"
      anchorX="center"
      anchorY="middle"
    >
      DEVELOPER
    </Text>
  )
}

export default function ThreeScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent) => {
    // Normalize mouse position to be between -1 and 1
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    })
  }

  return (
    <div className="absolute inset-0 z-0 opacity-80" onMouseMove={handleMouseMove}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model mousePosition={mousePosition} />
        <TextElement />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
