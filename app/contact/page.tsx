import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  FileText,
  Download,
  Mail,
  Linkedin,
  Instagram,
  MapPin,
  ExternalLink,
  GraduationCap,
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
              {"Let\u2019s Connect"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
              {
                "I\u2019m actively seeking internship and entry-level opportunities in architecture. If you\u2019re looking for a motivated designer who brings curiosity, technical skill, and studio discipline \u2014 I\u2019d love to hear from you."
              }
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Left column: Contact Info + CTA */}
              <div className="flex flex-col gap-5">
                <div className="rounded-sm border border-border/50 bg-card p-8">
                  <h2 className="text-xl font-serif text-foreground mb-6">
                    Contact Information
                  </h2>
                  <div className="flex flex-col gap-5">
                    <a
                      href="mailto:yourname@university.edu"
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
                          mlcek.2@buckeyemail.osu.edu
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/calvin-mlcek-565580387/"
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
                          https://www.linkedin.com/in/calvin-mlcek-565580387/
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://instagram.com/calvin_mlcek_architecture"
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
                          @calvin_mlcek_architecture
                        </p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
                          Location
                        </p>
                        <p className="text-sm text-foreground">
                          Columbus, Ohio
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/20 bg-primary/5">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-[0.2em]">
                          University
                        </p>
                        <p className="text-sm text-foreground">
                          The Ohio State University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-sm border border-primary/20 bg-primary/5 p-8">
                  <h3 className="text-lg font-serif text-foreground mb-2">
                    Available for internships
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {
                      "I\u2019m looking for hands-on opportunities to contribute to meaningful projects while learning from experienced practitioners. I bring strong software skills, a design-build mindset, and genuine enthusiasm for the craft."
                    }
                  </p>
                  <a
                    href="mailto:yourname@university.edu"
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
                        Resume
                      </h2>
                      <p className="text-[10px] text-muted-foreground font-mono tracking-[0.15em] uppercase">
                        PDF Document
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Education, Professional Experience, Activities & Involvement, and Technical Skills.
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
                    A curated selection of studio projects, personal projects,
                    design-build work, and process documentation.
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
