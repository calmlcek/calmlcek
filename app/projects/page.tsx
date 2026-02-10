import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, Stripe integration, and a custom CMS for product management.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
    year: "2025",
  },
  {
    title: "Design System",
    description:
      "A comprehensive component library and design system built for scalability. Includes 50+ components with full accessibility support and theming.",
    tags: ["React", "Storybook", "Tailwind CSS", "Radix UI"],
    link: "#",
    year: "2025",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, custom data visualizations, and automated reporting for key business metrics.",
    tags: ["Next.js", "D3.js", "WebSocket", "Redis"],
    link: "#",
    year: "2024",
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that leverages large language models to create, edit, and optimize marketing copy at scale.",
    tags: ["React", "OpenAI", "Node.js", "MongoDB"],
    link: "#",
    year: "2024",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop kanban boards, and team communication features.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "DnD Kit"],
    link: "#",
    year: "2024",
  },
  {
    title: "Portfolio Generator",
    description:
      "A platform that allows creatives to build stunning portfolio sites from templates with a visual editor and custom domain support.",
    tags: ["React", "Node.js", "AWS S3", "Prisma"],
    link: "#",
    year: "2023",
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
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
              Selected Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance max-w-3xl mb-4">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
              A collection of projects that showcase my skills in design, development, and problem-solving. Each built with care and attention to detail.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
