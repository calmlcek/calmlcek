import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  year: string
  location: string
  image: string
  category: string
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  year,
  location,
  image,
  category,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="glow-card group block rounded-sm border border-border/50 bg-card overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="img-zoom relative aspect-[4/3]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
        <div className="absolute top-4 left-4">
          <span className="rounded-sm bg-background/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono tracking-[0.2em] uppercase text-foreground">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.2em] uppercase">
              {year}
            </span>
            <span className="text-muted-foreground/30">|</span>
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.15em]">
              {location}
            </span>
          </div>
          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-0.5" />
        </div>
        <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border bg-secondary px-2 py-0.5 text-[10px] font-mono text-secondary-foreground tracking-wider uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
