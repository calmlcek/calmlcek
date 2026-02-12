import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BentoItemProps {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  )
}

export function BentoItem({ children, className }: BentoItemProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-border bg-card p-6 md:p-8 transition-all duration-300 hover:border-foreground/15 shadow-sm hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  )
}
