export default function TubeLight() {
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-0">
      {/* Main glow effect */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-primary"
        style={{
          boxShadow: "0 0 20px 5px var(--primary), 0 0 40px 15px var(--primary)",
        }}
      />

      {/* Light spread effect */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary/30 to-transparent" />
    </div>
  )
}
