"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { FileText } from "lucide-react"

interface ProjectPdfDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  projectTitle: string
  projectDescription: string
  pdfPath: string
}

export function ProjectPdfDialog({
  open,
  onOpenChange,
  projectTitle,
  projectDescription,
  pdfPath,
}: ProjectPdfDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 gap-0 overflow-hidden [display:flex] flex-col h-[90vh]">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border shrink-0">
          <DialogTitle className="text-xl font-serif text-foreground">
            {projectTitle}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            {projectDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 min-h-0 overflow-hidden">
          {pdfPath ? (
            <object
              data={`${pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
              type="application/pdf"
              className="w-full h-full"
              title={`PDF document for ${projectTitle}`}
            >
              <div className="flex flex-col items-center justify-center h-full gap-3 px-8 text-center">
                <FileText className="h-10 w-10 text-muted-foreground/40" />
                <p className="text-lg font-serif text-muted-foreground">
                  Unable to display PDF
                </p>
                <p className="text-sm text-muted-foreground/70 mb-4">
                  Your browser may not support inline PDF viewing.
                </p>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Open PDF in New Tab
                </a>
              </div>
            </object>
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-3 px-8 text-center">
              <FileText className="h-10 w-10 text-muted-foreground/40" />
              <p className="text-lg font-serif text-muted-foreground">
                No Document Available
              </p>
              <p className="text-sm text-muted-foreground/70">
                A PDF has not been added for this project yet.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
