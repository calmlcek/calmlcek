import { BentoGrid, BentoItem } from "@/components/bento-grid"
import {
  Compass,
  Ruler,
  Layers,
  Sun,
  MapPin,
  Award,
} from "lucide-react"

const expertise = [
  "Residential",
  "Commercial",
  "Cultural",
  "Hospitality",
  "Sustainable Design",
  "Urban Planning",
  "Interior Architecture",
  "Adaptive Reuse",
]

export function AboutBento() {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-serif tracking-tight text-foreground">
            At a glance
          </h2>
          <div className="flex-1 h-px bg-border/60" />
        </div>
        <BentoGrid className="lg:grid-rows-3">
          {/* Large philosophy card */}
          <BentoItem className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                  <Compass className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground">
                  Design Philosophy
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-base">
                {
                  "I believe architecture is the art of organizing space to serve the human spirit. My work begins with deep listening \u2014 understanding the site, the client, and the community \u2014 before a single line is drawn."
                }
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mt-4">
                {
                  "Every project is an opportunity to harmonize form with function, to let natural light sculpt interiors, and to choose materials that age with grace. I design structures that are not monuments to ego, but quiet celebrations of place and purpose."
                }
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-2.5 w-2.5 bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
                Accepting new commissions
              </span>
            </div>
          </BentoItem>

          {/* Experience card */}
          <BentoItem className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                  <Ruler className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground">
                  Experience
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {
                  "From boutique residences to cultural institutions, each project has deepened my understanding of how spaces shape behavior and emotion."
                }
              </p>
            </div>
            <div className="mt-6">
              <p className="text-5xl font-serif text-foreground">12+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mt-1">
                Years of Practice
              </p>
            </div>
          </BentoItem>

          {/* Materiality card */}
          <BentoItem className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground">
                  Materiality
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {
                  "Concrete, timber, stone, steel \u2014 I select materials not just for aesthetics, but for how they feel under the hand and weather over decades."
                }
              </p>
            </div>
          </BentoItem>

          {/* Expertise card */}
          <BentoItem className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground">Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border bg-secondary px-3 py-1.5 text-xs font-mono tracking-wider text-secondary-foreground uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </BentoItem>

          {/* Location card */}
          <BentoItem className="flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground">Based In</h3>
            </div>
            <div>
              <p className="text-2xl font-serif text-foreground">New York</p>
              <p className="text-sm text-muted-foreground mt-1">
                Designing globally from the Northeast
              </p>
            </div>
          </BentoItem>

          {/* Light & space card */}
          <BentoItem className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                <Sun className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-serif text-foreground">
                Beyond the Blueprint
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {
                "When I step away from the drafting table, I\u2019m photographing vernacular architecture, visiting construction sites for the pure joy of watching a building rise, or sketching in travel journals. I find that the best design ideas come from observing the world \u2014 how light falls on a weathered wall, how a narrow alley creates unexpected intimacy."
              }
            </p>
          </BentoItem>
        </BentoGrid>
      </div>
    </section>
  )
}
