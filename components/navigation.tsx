"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20 bg-background/80 backdrop-blur-md border-b border-border/40">
      <Link
        href="/"
        className="flex items-center gap-3 text-foreground"
      >
        <div className="h-8 w-8 border border-primary/60 flex items-center justify-center">
          <div className="h-4 w-4 bg-primary/80" />
        </div>
        <span className="font-serif text-lg tracking-tight">Studio</span>
      </Link>
      <nav className="flex items-center gap-8" aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-200",
              pathname === link.href
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
