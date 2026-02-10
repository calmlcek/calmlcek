import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Meridian Residence",
    description:
      "A cantilevered concrete and glass home that frames panoramic views of the Hudson Valley. The living spaces flow seamlessly into terraced gardens, blurring the boundary between interior and landscape.",
    tags: ["Residential", "Concrete", "Glass", "LEED Gold"],
    link: "#",
    year: "2025",
    location: "Hudson Valley, NY",
    image: "/images/project-1.jpg",
    category: "Residential",
  },
  {
    title: "Atelier of Light",
    description:
      "A contemporary art museum with soaring double-height galleries washed in natural light. Rammed earth walls and polished concrete floors ground the ethereal volumes in tactile materiality.",
    tags: ["Cultural", "Museum", "Rammed Earth", "Daylight Design"],
    link: "#",
    year: "2024",
    location: "Santa Fe, NM",
    image: "/images/project-2.jpg",
    category: "Cultural",
  },
  {
    title: "Parallax Tower",
    description:
      "A 28-story mixed-use tower with a faceted glass curtain wall that shifts appearance throughout the day. The podium houses retail and public plazas that activate the streetscape.",
    tags: ["Commercial", "High-Rise", "Mixed-Use", "Curtain Wall"],
    link: "#",
    year: "2024",
    location: "Brooklyn, NY",
    image: "/images/project-3.jpg",
    category: "Commercial",
  },
  {
    title: "Refuge Hotel & Spa",
    description:
      "A boutique hotel carved into a hillside, featuring exposed timber frames, rammed earth walls, and private courtyards. Each suite is oriented to capture morning light and mountain vistas.",
    tags: ["Hospitality", "Timber", "Landscape", "Wellness"],
    link: "#",
    year: "2023",
    location: "Aspen, CO",
    image: "/images/project-4.jpg",
    category: "Hospitality",
  },
  {
    title: "Civic Library & Archive",
    description:
      "A public library with a dramatic cantilevered reading room that hovers above a landscaped civic plaza. Cross-laminated timber structure achieves warmth at an institutional scale.",
    tags: ["Civic", "CLT Structure", "Public Space", "Archive"],
    link: "#",
    year: "2023",
    location: "Portland, OR",
    image: "/images/project-5.jpg",
    category: "Civic",
  },
  {
    title: "Verdant Commons",
    description:
      "A sustainable multi-family housing complex organized around shared courtyards and green rooftops. Passive House certified with integrated photovoltaic facades and rainwater harvesting.",
    tags: ["Residential", "Passive House", "Net-Zero", "Community"],
    link: "#",
    year: "2022",
    location: "Cambridge, MA",
    image: "/images/project-6.jpg",
    category: "Sustainable",
  },
]

export default function ProjectsPage() {
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
              Built & Envisioned
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
              A curated selection of projects spanning residential, cultural,
              commercial, and civic architecture. Each designed with deep respect
              for site, sustainability, and the people who inhabit these spaces.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
