export default function ParticleMask() {
  return (
    <div className="fixed inset-0 z-[2] pointer-events-none">
      {/* Top section - no mask */}
      <div className="h-screen w-full"></div>

      {/* About to Skills sections - center mask, visible on sides */}
      <div className="w-full h-[100vh] relative">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, 
                        rgba(17, 24, 39, 0.98) 0%, 
                        rgba(17, 24, 39, 0.95) 20%, 
                        rgba(17, 24, 39, 0.7) 40%, 
                        rgba(17, 24, 39, 0.3) 70%, 
                        transparent 100%)`,
          }}
        ></div>
      </div>

      {/* Projects section - standard mask */}
      <div className="w-full h-[100vh] relative">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, 
                        rgba(17, 24, 39, 0.9) 0%, 
                        rgba(17, 24, 39, 0.8) 30%, 
                        rgba(17, 24, 39, 0.4) 60%, 
                        transparent 100%)`,
          }}
        ></div>
      </div>

      {/* Bottom section - no mask */}
      <div className="h-screen w-full"></div>
    </div>
  )
}
