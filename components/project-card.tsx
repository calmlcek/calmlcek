import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  year: string
  location: string
  image: string
  category: string
  onClick?: () => void
}

export function ProjectCard({
  title,
  description,
  tags,
  year,
  location,
  image,
  category,
  onClick,
}: ProjectCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="glow-card group block rounded-sm border border-border bg-card overflow-hidden shadow-sm text-left w-full"
    >
      <div className="img-zoom relative aspect-[4/3]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/0 transition-colors duration-500" />
        <div className="absolute top-4 left-4">
          <span className="rounded-sm bg-background/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono tracking-[0.2em] uppercase text-foreground border border-border">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.2em] uppercase">
              {year}
            </span>
            <span className="text-border">|</span>
            <span className="text-[10px] font-mono text-muted-foreground tracking-[0.15em]">
              {location}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-border bg-muted px-2 py-0.5 text-[10px] font-mono text-muted-foreground tracking-wider uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
