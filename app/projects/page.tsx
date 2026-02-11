"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { ProjectPdfDialog } from "@/components/project-pdf-dialog"

const projects = [
  {
    title: "Tube Town",
    description:
      "Tube Town is a second-year group pavilion project built from reusable tube-based materials that create a playful, walkable structure. It focuses on community interaction, hands-on assembly, and collective building as part of the design process.",
    tags: ["Community", "Built", "Group", "Physical Model"],
    slug: "the-threshold-house",
    year: "2025",
    location: "Design Studio II",
    image: "/images/project-1.jpg",
    category: "Built",
  },
  {
    title: "Civic Memory Center",
    description:
      "A third-year studio project for a community archive and cultural center. The design uses rammed earth and mass timber to create a procession of galleries that guide visitors through layered narratives of local history.",
    tags: ["Cultural", "Community", "Mass Timber", "Revit"],
    slug: "civic-memory-center",
    year: "2024",
    location: "Design Studio III",
    image: "/images/project-2.jpg",
    category: "Studio",
  },
  {
    title: "Vertical Neighborhood",
    description:
      "A competition entry reimagining high-density urban housing. The proposal stacks shared amenity courtyards at every fourth floor, creating sky-villages that foster community in a 20-story tower.",
    tags: ["Competition", "Housing", "Urban", "Grasshopper"],
    slug: "vertical-neighborhood",
    year: "2024",
    location: "ACSA Student Competition",
    image: "/images/project-3.jpg",
    category: "Competition",
  },
  {
    title: "Adaptive Reuse: Textile Mill",
    description:
      "A second-year project transforming an abandoned textile mill into a maker space and co-working hub. Preserved the existing industrial steel frame while inserting a new timber and glass volume.",
    tags: ["Adaptive Reuse", "Mixed-Use", "AutoCAD", "Laser Cut Model"],
    slug: "adaptive-reuse-textile-mill",
    year: "2023",
    location: "Design Studio II",
    image: "/images/project-4.jpg",
    category: "Studio",
  },
  {
    title: "Timber Pavilion",
    description:
      "A design-build project for a campus outdoor learning pavilion. Led fabrication of a parametrically designed timber lattice structure using CNC-milled joints and traditional Japanese joinery techniques.",
    tags: ["Design-Build", "Fabrication", "Parametric", "Grasshopper"],
    slug: "timber-pavilion",
    year: "2023",
    location: "Design-Build Elective",
    image: "/images/project-5.jpg",
    category: "Fabrication",
  },
  {
    title: "Eco-Housing Prototype",
    description:
      "A sustainability-focused studio project designing a net-zero modular housing prototype for climate-vulnerable coastal communities. Explored passive ventilation strategies and locally-sourced materials.",
    tags: ["Sustainable", "Modular", "Net-Zero", "Enscape"],
    slug: "eco-housing-prototype",
    year: "2022",
    location: "Environmental Systems Studio",
    image: "/images/project-6.jpg",
    category: "Research",
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  function handleProjectClick(project: (typeof projects)[0]) {
    setSelectedProject(project)
    setDialogOpen(true)
  }

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <div className="relative z-10">
        <Navigation />
        <main className="px-6 md:px-12 lg:px-20 pt-32 pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="arch-line" />
              <p className="text-primary font-mono text-xs tracking-[0.25em] uppercase">
                Selected Work
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-[1.1] text-balance max-w-3xl mb-4">
              Studio & Beyond
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
              A curated selection of academic studio projects, design
              competitions, and research work. Each project reflects a
              commitment to thoughtful design thinking, rigorous process, and
              material exploration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>

      {selectedProject && (
        <ProjectPdfDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          projectTitle={selectedProject.title}
          projectSlug={selectedProject.slug}
          projectDescription={selectedProject.description}
        />
      )}
    </>
  )
}
