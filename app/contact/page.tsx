import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  FileText,
  Download,
  Mail,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react"

export default function ContactPage() {
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
                Get in Touch
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-[1.1] text-balance max-w-3xl mb-4">
              Start a Conversation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
              {
                "Whether you\u2019re envisioning a new home, a commercial space, or a cultural landmark \u2014 every great project begins with a conversation. I\u2019d love to hear about yours."
              }
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Left column: Contact Info + CTA */}
              <div className="flex flex-col gap-5">
                <div className="rounded-sm border border-border/50 bg-card p-8">
                  <h2 className="text-xl font-serif text-foreground mb-6">
                    Studio Contact
                  </h2>
                  <div className="flex flex-col gap-5">
                    <a
                      href="mailto:studio@example.com"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-200">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
                          Email
                        </p>
                        <p className="text-sm text-foreground">
                          studio@example.com
                        </p>
                      </div>
                    </a>
                    <a
                      href="tel:+12125551234"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-200">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
                          Phone
                        </p>
                        <p className="text-sm text-foreground">
                          +1 (212) 555-1234
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-200">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
                          LinkedIn
                        </p>
                        <p className="text-sm text-foreground">
                          linkedin.com/in/architect
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-200">
                        <Instagram className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
                          Instagram
                        </p>
                        <p className="text-sm text-foreground">
                          @studio.architect
                        </p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
                          Studio
                        </p>
                        <p className="text-sm text-foreground">
                          New York, NY
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-sm border border-primary/20 bg-primary/5 p-8">
                  <h3 className="text-lg font-serif text-foreground mb-2">
                    {"Let\u2019s build something remarkable"}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {
                      "I\u2019m currently accepting new commissions for residential, commercial, and cultural projects. Reach out to discuss your vision."
                    }
                  </p>
                  <a
                    href="mailto:studio@example.com"
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4" />
                    Send an Email
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Right column: Documents */}
              <div className="flex flex-col gap-5">
                {/* Resume PDF */}
                <div className="rounded-sm border border-border/50 bg-card p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif text-foreground">
                        Resume / CV
                      </h2>
                      <p className="text-[10px] text-muted-foreground font-mono tracking-[0.15em] uppercase">
                        PDF Document
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Professional experience, education, licensures,
                    publications, and awards in architectural practice.
                  </p>
                  <div className="flex-1 flex items-center justify-center rounded-sm border border-dashed border-border bg-secondary/30 min-h-[160px] mb-6">
                    <div className="text-center px-4">
                      <FileText className="h-8 w-8 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-xs text-muted-foreground">
                        Resume PDF will appear here
                      </p>
                      <p className="text-[10px] text-muted-foreground/50 mt-1 font-mono">
                        Upload to /public/resume.pdf
                      </p>
                    </div>
                  </div>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>

                {/* Portfolio PDF */}
                <div className="rounded-sm border border-border/50 bg-card p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif text-foreground">
                        Design Portfolio
                      </h2>
                      <p className="text-[10px] text-muted-foreground font-mono tracking-[0.15em] uppercase">
                        PDF Document
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    A curated collection of built work, competition entries,
                    conceptual studies, and design process documentation.
                  </p>
                  <div className="flex-1 flex items-center justify-center rounded-sm border border-dashed border-border bg-secondary/30 min-h-[160px] mb-6">
                    <div className="text-center px-4">
                      <FileText className="h-8 w-8 text-muted-foreground/30 mx-auto mb-3" />
                      <p className="text-xs text-muted-foreground">
                        Portfolio PDF will appear here
                      </p>
                      <p className="text-[10px] text-muted-foreground/50 mt-1 font-mono">
                        Upload to /public/portfolio.pdf
                      </p>
                    </div>
                  </div>
                  <a
                    href="/portfolio.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
                  >
                    <Download className="h-4 w-4" />
                    Download Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
