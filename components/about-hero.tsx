import { ArrowDown } from "lucide-react"

export function AboutHero() {
  return (
    <section className="flex flex-col justify-center min-h-[70vh] px-6 md:px-12 lg:px-20 pt-32 pb-16">
      <div className="mx-auto max-w-7xl w-full">
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
          Creative Developer
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance max-w-4xl">
          I build accessible, pixel-perfect digital experiences for the web.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          A developer passionate about crafting thoughtful interfaces that blend design with robust engineering. Currently focused on building performant, beautiful products.
        </p>
        <div className="mt-12 flex items-center gap-2 text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="text-sm font-mono tracking-wide">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
