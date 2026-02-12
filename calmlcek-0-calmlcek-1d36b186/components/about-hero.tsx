import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function AboutHero() {
  return (
    <section className="flex flex-col justify-center min-h-[80vh] px-6 md:px-12 lg:px-20 pt-32 pb-16">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="arch-line" />
              <p className="text-primary font-mono text-xs tracking-[0.25em] uppercase">
                B. Arch Student
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif tracking-tight text-foreground leading-[1.05] text-balance">
              Calvin Mlcek
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {"Third-year architecture student at The Ohio State University focused on the relationship between built and lived environment. Based in Columbus and Toledo Ohio."}
            </p>
            <div className="mt-14 flex items-center gap-3 text-muted-foreground">
              <ArrowDown className="h-4 w-4 animate-bounce" />
              <span className="text-xs font-mono tracking-[0.15em] uppercase">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Right: Headshot */}
          <div className="shrink-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative border frame offset behind the image */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-primary/25 rounded-sm" />
              <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 overflow-hidden rounded-sm border border-border shadow-lg">
                <Image
                  src="/images/headshot.jpg"
                  alt="Calvin Mlcek - Architecture student headshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                  priority
                />
              </div>
              {/* Small accent detail */}
              <div className="absolute -bottom-2 -left-2 h-6 w-6 border border-foreground/15 flex items-center justify-center bg-background">
                <div className="h-2 w-2 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
