import { Linkedin, Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-6 w-6 border border-foreground/15 flex items-center justify-center">
              <div className="h-3 w-3 bg-primary" />
            </div>
            <span className="font-serif text-sm font-semibold text-foreground">Calvin Mlcek</span>
          </div>
          <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
            The Ohio State University B.Arch candidate passionate about architecture, engineering, and design.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/calvin-mlcek-565580387/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:mlcek.2@buckeyemail.osu.edu"
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
