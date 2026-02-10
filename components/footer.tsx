import { Linkedin, Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40 px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-6 w-6 border border-primary/60 flex items-center justify-center">
              <div className="h-3 w-3 bg-primary/80" />
            </div>
            <span className="font-serif text-sm text-foreground">Your Name</span>
          </div>
          <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
            B.Arch candidate passionate about thoughtful, human-centered design.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="mailto:studio@example.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
