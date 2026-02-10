import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FileText, Download, Mail, Github, Linkedin, MapPin, ExternalLink } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <div className="relative z-10">
        <Navigation />
        <main className="px-6 md:px-12 lg:px-20 pt-32 pb-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance max-w-3xl mb-4">
              Contact
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
              {"Have a project in mind or just want to say hello? I'm always open to discussing new opportunities, creative ideas, or partnerships."}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                <div className="rounded-lg border border-border/60 bg-card p-8">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Contact Information</h2>
                  <div className="flex flex-col gap-5">
                    <a
                      href="mailto:hello@example.com"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Email</p>
                        <p className="text-sm text-foreground">hello@example.com</p>
                      </div>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">GitHub</p>
                        <p className="text-sm text-foreground">github.com/username</p>
                      </div>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">LinkedIn</p>
                        <p className="text-sm text-foreground">linkedin.com/in/username</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Location</p>
                        <p className="text-sm text-foreground">Available Worldwide, Remote</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-lg border border-primary/30 bg-primary/5 p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{"Let's work together"}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {"I'm currently accepting new projects. Reach out and let's create something exceptional."}
                  </p>
                  <a
                    href="mailto:hello@example.com"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4" />
                    Send an Email
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Documents */}
              <div className="flex flex-col gap-4">
                {/* Resume PDF */}
                <div className="rounded-lg border border-border/60 bg-card p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Resume</h2>
                      <p className="text-xs text-muted-foreground font-mono">PDF Document</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Download my resume to learn more about my professional experience, education, and technical skills.
                  </p>
                  <div className="flex-1 flex items-center justify-center rounded-md border border-dashed border-border bg-secondary/50 min-h-[180px] mb-6">
                    <div className="text-center">
                      <FileText className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">Resume PDF will appear here</p>
                      <p className="text-xs text-muted-foreground/60 mt-1">Upload your resume to /public/resume.pdf</p>
                    </div>
                  </div>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>

                {/* Portfolio PDF */}
                <div className="rounded-lg border border-border/60 bg-card p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">Portfolio</h2>
                      <p className="text-xs text-muted-foreground font-mono">PDF Document</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    A curated collection of my best work, case studies, and design process documentation.
                  </p>
                  <div className="flex-1 flex items-center justify-center rounded-md border border-dashed border-border bg-secondary/50 min-h-[180px] mb-6">
                    <div className="text-center">
                      <FileText className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">Portfolio PDF will appear here</p>
                      <p className="text-xs text-muted-foreground/60 mt-1">Upload your portfolio to /public/portfolio.pdf</p>
                    </div>
                  </div>
                  <a
                    href="/portfolio.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
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
