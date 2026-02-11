"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { FileText, Loader2 } from "lucide-react"

interface ProjectPdfDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  projectTitle: string
  projectSlug: string
  projectDescription: string
}

export function ProjectPdfDialog({
  open,
  onOpenChange,
  projectTitle,
  projectSlug,
  projectDescription,
}: ProjectPdfDialogProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchPdf = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch(`/api/list-pdfs?projectSlug=${projectSlug}`)
      const data = await res.json()
      if (data.files && data.files.length > 0) {
        setPdfUrl(data.files[0].url)
      } else {
        setPdfUrl(null)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [projectSlug])

  useEffect(() => {
    if (open) {
      fetchPdf()
    } else {
      setPdfUrl(null)
      setError(false)
    }
  }, [open, fetchPdf])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[90vh] flex flex-col p-0 gap-0 bg-background border-border">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border shrink-0">
          <DialogTitle className="text-xl font-serif text-foreground">
            {projectTitle}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            {projectDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 min-h-0">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full gap-3">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              <p className="text-sm text-muted-foreground font-mono tracking-wider">
                Loading document...
              </p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 px-8 text-center">
              <FileText className="h-10 w-10 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground">
                Something went wrong loading the document.
              </p>
            </div>
          ) : pdfUrl ? (
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title={`PDF document for ${projectTitle}`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-3 px-8 text-center">
              <FileText className="h-10 w-10 text-muted-foreground/40" />
              <p className="text-lg font-serif text-muted-foreground">
                No Document Available
              </p>
              <p className="text-sm text-muted-foreground/70">
                A PDF has not been uploaded for this project yet.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
