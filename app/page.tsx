import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, ExternalLink, Github, Mail, User } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import GridBackground from "@/components/grid-background"
import TubeLight from "@/components/tube-light"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Grid Background */}
      <GridBackground />

      {/* Tube Light Effect */}
      <TubeLight />

      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full py-4">
        <div className="container flex justify-center">
          <nav className="px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex items-center gap-8 text-sm">
            <Link href="#about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="transition-colors hover:text-primary">
              Skills
            </Link>
            <div className="flex items-center gap-2 font-bold px-4">
              <Code className="h-5 w-5 text-primary" />
              <span>DevPortfolio</span>
            </div>
            <Link href="#projects" className="transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="container py-10 relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center">
          <div className="rounded-full bg-gradient-to-br from-primary/20 to-primary/40 p-4 mb-8 shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-primary/30">
            <User className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-primary">Alex</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-[650px] mb-8">
            A passionate full-stack developer crafting beautiful and functional web experiences
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-none shadow-lg shadow-primary/20"
              size="lg"
              asChild
            >
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/50 text-white hover:bg-primary/20" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
              <p className="text-gray-300 mb-4">
                I'm a full-stack developer with 5+ years of experience building web applications. I specialize in React,
                Next.js, Node.js, and modern web technologies.
              </p>
              <p className="text-gray-300 mb-6">
                My journey in web development started when I built my first website in college. Since then, I've worked
                with startups and established companies to create user-friendly, performant, and accessible web
                applications.
              </p>
              <Button variant="outline" className="border-primary/50 text-white hover:bg-primary/20" asChild>
                <Link href="/resume.pdf" target="_blank">
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg aspect-square flex items-center justify-center border border-white/10 shadow-xl overflow-hidden">
              <div className="relative w-full h-full p-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg"></div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  className="rounded-lg relative z-10 w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "HTML/CSS",
              "Git",
              "RESTful APIs",
              "GraphQL",
              "AWS",
              "Docker",
              "CI/CD",
            ].map((skill, index) => (
              <div
                key={skill}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 group"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: "fadeIn 0.5s ease-out forwards",
                  opacity: 0,
                }}
              >
                <p className="font-medium text-gray-200 group-hover:text-primary transition-colors">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section - Roadmap Style */}
        <section id="projects" className="py-16 scroll-mt-16 relative">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">Project Timeline</h2>

          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-32 bottom-16 w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 transform -translate-x-1/2 z-0"></div>

          {[
            {
              title: "E-commerce Platform",
              description: "A full-featured online store with payment processing and inventory management.",
              tags: ["Next.js", "Stripe", "MongoDB"],
              image: "/placeholder.svg?height=200&width=300",
              github: "#",
              demo: "#",
              year: "2023",
              align: "right", // right side of timeline
            },
            {
              title: "Task Management App",
              description: "A collaborative task manager with real-time updates and team features.",
              tags: ["React", "Firebase", "Tailwind"],
              image: "/placeholder.svg?height=200&width=300",
              github: "#",
              demo: "#",
              year: "2022",
              align: "left", // left side of timeline
            },
            {
              title: "Weather Dashboard",
              description: "A weather application with location-based forecasts and interactive maps.",
              tags: ["JavaScript", "Weather API", "Chart.js"],
              image: "/placeholder.svg?height=200&width=300",
              github: "#",
              demo: "#",
              year: "2021",
              align: "right", // right side of timeline
            },
          ].map((project, index) => (
            <div key={index} className="relative z-10 mb-16">
              <div
                className={`flex items-center justify-center mb-8 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
              >
                <div className="bg-primary text-white px-4 py-1 rounded-full font-medium">{project.year}</div>
              </div>

              <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}>
                {/* Timeline node */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/50 relative z-20">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                  </div>
                </div>

                {/* Project card - positioned based on index */}
                <div className={`${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
                  <Card className="overflow-hidden border-white/10 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm shadow-xl hover:shadow-primary/10 transition-all group">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">{project.title}</CardTitle>
                      <CardDescription className="text-gray-300">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 text-white hover:bg-primary/20"
                        asChild
                      >
                        <Link href={project.github}>
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                        <Link href={project.demo}>
                          <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-16">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Get In Touch</h2>
            <Card className="border-white/10 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Contact Me</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-200">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-white/10 bg-gray-800/50 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-200">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-white/10 bg-gray-800/50 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-gray-800/50 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      placeholder="Your message"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-none shadow-lg shadow-primary/20">
                  <Mail className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 md:py-0 relative z-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
