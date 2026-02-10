import { ArrowDown } from "lucide-react"

export function AboutHero() {
  return (
    <section className="flex flex-col justify-center min-h-[80vh] px-6 md:px-12 lg:px-20 pt-32 pb-16">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="arch-line" />
          <p className="text-primary font-mono text-xs tracking-[0.25em] uppercase">
            B.Arch Student
          </p>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif tracking-tight text-foreground leading-[1.05] text-balance max-w-5xl">
          Designing spaces with purpose and intention.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {"An undergraduate architecture student exploring the intersection of spatial design, materiality, and human experience. Currently seeking internship opportunities to bring studio rigor to real-world practice."}
        </p>
        <div className="mt-14 flex items-center gap-3 text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="text-xs font-mono tracking-[0.15em] uppercase">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
