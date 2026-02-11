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
    pdf: "/pdfs/tube-town.pdf",
    year: "2025",
    location: "Design Studio II",
    image: "/images/project-1.jpg",
    category: "Built",
  },
  {
    title: "Möbius Branch Library",
    description:
      "As a second-year studio project, the Möbius Branch Library emphasizes conceptual development, spatial organization, and circulation over highly technical construction detailing. The project reflects an intermediate level of architectural study, focusing on form, program relationships, and public experience to explore how design supports community use.",
    tags: ["Cultural", "Community", "Geometry", "Rhino", "Physical Model"],
    pdf: "/pdfs/möbius-branch-library.pdf",
    year: "2025",
    location: "Design Studio II",
    image: "/images/project-2.jpg",
    category: "Community",
  },
  {
    title: "Hidden Grounds",
    description:
      "As a second-year studio project, Hidden Grounds is designed as an ADU that combines a café and speakeasy within a compact footprint, emphasizing conceptual thinking and spatial experience over complex technical systems. The project reflects an intermediate level of study by exploring program layering, atmosphere, and scale to show how a small structure can support social gathering and community interaction.",
    tags: ["ADU", "Housing", "Urban", "Residental", "Commercial", "Rhino", "D5 Render"],
    pdf: "/pdfs/vertical-neighborhood.pdf",
    year: "2025",
    location: "Design Studio III",
    image: "/images/project-3.jpg",
    category: "Residential/Commercial",
  },
  {
    title: "Hidden Cohabitation",
    description:
      "Hidden Cohabitation is a third-year studio housing project that explores shared living through the design of a dormitory for both half-scale and double-scale inhabitants, prioritizing spatial strategy alongside developing technical awareness. The project reflects a more advanced level of study by integrating material decisions, structure, and program organization to examine how architecture can accommodate multiple scales of life within one cohesive system.",
    tags: ["Dual-Scale", "Mixed-Use", "residential", "Dormatory", "Rhino", "D5 Render"],
    pdf: "/pdfs/adaptive-reuse-textile-mill.pdf",
    year: "2025",
    location: "Design Studio III",
    image: "/images/project-4.jpg",
    category: "Residential",
  },
  {
    title: "Liminal Threashold",
    description:
      "Liminal Threshold is a second-year visitor center project that explores architecture as a moment of transition between landscape and visitor experience. Through layered planes and controlled circulation, the design frames arrival as a spatial sequence, using form and alignment to guide movement while creating moments of pause, orientation, and connection to place.",
    tags: ["Community", "Liminal", "Rhino", "V-Ray"],
    pdf: "/pdfs/timber-pavilion.pdf",
    year: "2024",
    location: "Design Studio I",
    image: "/images/project-5.jpg",
    category: "Community",
  },
  {
    title: "Co-Linear Constructions",
    description:
      "Co-Linear Constructions is a first-year design study that investigates how aligned and extended elements generate spatial order through shared directional axes. By organizing planes and volumes along continuous trajectories, the project explores how linear relationships create rhythm, continuity, and subtle variation, transforming simple geometric alignments into structured spatial experiences.",
    tags: ["Study Model", "Modular", "Linear", "Co-Linear"],
    pdf: "/pdfs/eco-housing-prototype.pdf",
    year: "2023",
    location: "ARCH Seeking & Making",
    image: "/images/project-6.jpg",
    category: "Study Model",
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
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  priority={index === 0}
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
          projectDescription={selectedProject.description}
          pdfPath={selectedProject.pdf}
        />
      )}
    </>
  )
}
