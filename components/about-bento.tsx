import { BentoGrid, BentoItem } from "@/components/bento-grid"
import { Code2, Layers, Palette, Zap, Globe, Coffee } from "lucide-react"

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Figma",
]

export function AboutBento() {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
          At a glance
        </h2>
        <BentoGrid className="lg:grid-rows-3">
          {/* Large intro card */}
          <BentoItem className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">About Me</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {"I'm a developer who thrives at the intersection of design and engineering. With years of experience building for the web, I focus on creating interfaces that are not only beautiful but performant, accessible, and thoughtfully crafted."}
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mt-4">
                {"My approach combines clean code with meticulous attention to detail, ensuring every pixel serves a purpose. I believe great software should feel effortless to use."}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Available for new projects</span>
            </div>
          </BentoItem>

          {/* Experience card */}
          <BentoItem className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Experience</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {"Built products across agencies, startups, and enterprise — from design systems to full-stack applications."}
              </p>
            </div>
            <p className="text-4xl font-bold text-foreground mt-6 font-mono">5+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Years of Experience</p>
          </BentoItem>

          {/* Design card */}
          <BentoItem className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Design-Driven</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {"I believe design and development are inseparable. Every project starts with understanding the user's needs."}
              </p>
            </div>
          </BentoItem>

          {/* Skills card */}
          <BentoItem className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-secondary px-3 py-1.5 text-sm font-mono text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </BentoItem>

          {/* Location card */}
          <BentoItem className="flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Location</h3>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">Remote</p>
              <p className="text-sm text-muted-foreground mt-1">Based worldwide, building globally</p>
            </div>
          </BentoItem>

          {/* Interests card */}
          <BentoItem className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <Coffee className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Beyond Code</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {"When I'm not coding, you'll find me exploring new coffee shops, reading about design systems, contributing to open-source, or planning my next adventure. I believe the best ideas come from a well-rounded perspective."}
            </p>
          </BentoItem>
        </BentoGrid>
      </div>
    </section>
  )
}
