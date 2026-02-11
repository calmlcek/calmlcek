"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { FileText, Loader2, Upload, X } from "lucide-react"

interface PdfFile {
  url: string
  filename: string
  size: number
  uploadedAt: string
}

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
  const [pdfs, setPdfs] = useState<PdfFile[]>([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  const fetchPdfs = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/list-pdfs?projectSlug=${projectSlug}`)
      const data = await res.json()
      if (data.files) {
        setPdfs(data.files)
        if (data.files.length > 0 && !selectedPdf) {
          setSelectedPdf(data.files[0].url)
        }
      }
    } catch (err) {
      console.error("Failed to fetch PDFs:", err)
    } finally {
      setLoading(false)
    }
  }, [projectSlug, selectedPdf])

  useEffect(() => {
    if (open) {
      fetchPdfs()
    } else {
      setSelectedPdf(null)
    }
  }, [open, fetchPdfs])

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("projectSlug", projectSlug)

      const res = await fetch("/api/upload-pdf", {
        method: "POST",
        body: formData,
      })

      if (res.ok) {
        const data = await res.json()
        setPdfs((prev) => [
          ...prev,
          {
            url: data.url,
            filename: data.filename,
            size: data.size,
            uploadedAt: new Date().toISOString(),
          },
        ])
        setSelectedPdf(data.url)
      }
    } catch (err) {
      console.error("Upload failed:", err)
    } finally {
      setUploading(false)
      e.target.value = ""
    }
  }

  async function handleDelete(url: string) {
    try {
      const res = await fetch("/api/delete-pdf", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })

      if (res.ok) {
        setPdfs((prev) => prev.filter((pdf) => pdf.url !== url))
        if (selectedPdf === url) {
          const remaining = pdfs.filter((pdf) => pdf.url !== url)
          setSelectedPdf(remaining.length > 0 ? remaining[0].url : null)
        }
      }
    } catch (err) {
      console.error("Delete failed:", err)
    }
  }

  function formatFileSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[85vh] flex flex-col p-0 gap-0 bg-background border-border">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border shrink-0">
          <DialogTitle className="text-xl font-serif text-foreground">
            {projectTitle}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {projectDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-1 min-h-0">
          {/* Sidebar with PDF list */}
          <div className="w-64 border-r border-border flex flex-col shrink-0">
            <div className="p-4 border-b border-border">
              <label
                className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm border border-dashed border-border 
                  text-sm font-mono tracking-wider uppercase cursor-pointer transition-colors
                  ${uploading ? "opacity-50 pointer-events-none" : "hover:border-primary hover:text-primary"} text-muted-foreground`}
              >
                {uploading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="h-4 w-4" />
                )}
                <span>{uploading ? "Uploading..." : "Upload PDF"}</span>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleUpload}
                  className="sr-only"
                  disabled={uploading}
                />
              </label>
            </div>

            <div className="flex-1 overflow-y-auto p-2">
              {loading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
              ) : pdfs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center px-4">
                  <FileText className="h-8 w-8 text-muted-foreground/50 mb-3" />
                  <p className="text-sm text-muted-foreground">
                    No PDFs uploaded yet
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    Upload a PDF to view it here
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {pdfs.map((pdf) => (
                    <div
                      key={pdf.url}
                      className={`group flex items-start gap-2 px-3 py-2.5 rounded-sm cursor-pointer transition-colors ${
                        selectedPdf === pdf.url
                          ? "bg-primary/10 border border-primary/20"
                          : "hover:bg-muted border border-transparent"
                      }`}
                      onClick={() => setSelectedPdf(pdf.url)}
                    >
                      <FileText className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate">
                          {pdf.filename}
                        </p>
                        <p className="text-[10px] font-mono text-muted-foreground mt-0.5">
                          {formatFileSize(pdf.size)}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDelete(pdf.url)
                        }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-destructive/10 rounded-sm"
                        aria-label={`Delete ${pdf.filename}`}
                      >
                        <X className="h-3 w-3 text-destructive" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* PDF viewer */}
          <div className="flex-1 min-w-0 bg-muted/30">
            {selectedPdf ? (
              <iframe
                src={selectedPdf}
                className="w-full h-full border-0"
                title={`PDF viewer for ${projectTitle}`}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center px-8">
                <FileText className="h-12 w-12 text-muted-foreground/30 mb-4" />
                <p className="text-lg font-serif text-muted-foreground">
                  No PDF Selected
                </p>
                <p className="text-sm text-muted-foreground/70 mt-1">
                  Upload a PDF or select one from the sidebar
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
