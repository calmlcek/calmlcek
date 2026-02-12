import { BentoGrid, BentoItem } from "@/components/bento-grid"
import {
  Compass,
  Wrench,
  GraduationCap,
  Layers,
  MapPin,
} from "lucide-react"

const skills = [
  "Rhinoceros 3D",
  "Fusion 360",
  "Solidworks 3D",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Indesign",
  "Adobe Suite",
  "V-Ray / Enscape",
  "Microsoft Office",
  "Microsoft Excel",
  "Laser Cutting",
  "3D Printing",
  "CNC",
  "Zünd",
  "Physical Model Making",
  "Hand Drafting",
  "Photography", "Web Design",
]

export function AboutBento() {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-serif font-semibold tracking-tight text-foreground">
            At a glance
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <BentoGrid className="lg:grid-rows-3">
          {/* Large philosophy card */}
          <BentoItem className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-muted">
                  <Compass className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Design Approach
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {
                  "I approach architecture as the careful choreography of space, light, and material. My studio work is driven by a curiosity for how people inhabit and move through environments \u2014 and how design can elevate those everyday experiences."
                }
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mt-4">
                {
                  "From site analysis to final presentation, I bring a process grounded in research, iterative model-making, and a deep respect for context. I\u2019m drawn to projects that challenge conventional thinking about program, structure, and sustainability."
                }
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-2.5 w-2.5 bg-primary animate-pulse rounded-full" />
              <span className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
                Seeking summer 2026 internships
              </span>
            </div>
          </BentoItem>

          {/* Education card */}
          <BentoItem className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-muted">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Education
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {
                  "Pursuing a Bachelor of Architecture with a minor in Engineering Sciences."
                }
              </p>
            </div>
            <div className="mt-6">
              <p className="text-xl font-serif font-semibold text-foreground">
                B.Arch Candidate
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mt-1">
                The Ohio State University, Class of 2027
              </p>
            </div>
          </BentoItem>

          {/* Interests card */}
          <BentoItem className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-muted">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Interests
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {"Architecture, Engineering, Graphic Design, Photography"}
              </p>
            </div>
          </BentoItem>

          {/* Skills & Tools card */}
          <BentoItem className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-muted">
                <Wrench className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground">
                Skills & Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border bg-muted px-3 py-1.5 text-xs font-mono tracking-wider text-foreground/70 uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </BentoItem>

          {/* Location card */}
          <BentoItem className="flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-muted">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground">
                Based In
              </h3>
            </div>
            <div>
              <p className="text-2xl font-serif font-semibold text-foreground">
                Columbus & Toledo OH
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Open to relocating for internship/job opportunities
              </p>
            </div>
          </BentoItem>
        </BentoGrid>
      </div>
    </section>
  )
}
