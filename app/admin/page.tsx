"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowLeft, FileText, Loader2, Trash2, Upload } from "lucide-react"

const PROJECT_SLUGS = [
  { slug: "the-threshold-house", title: "The Threshold House" },
  { slug: "civic-memory-center", title: "Civic Memory Center" },
  { slug: "vertical-neighborhood", title: "Vertical Neighborhood" },
  { slug: "adaptive-reuse-textile-mill", title: "Adaptive Reuse: Textile Mill" },
  { slug: "timber-pavilion", title: "Timber Pavilion" },
  { slug: "eco-housing-prototype", title: "Eco-Housing Prototype" },
]

interface PdfFile {
  url: string
  filename: string
  size: number
  uploadedAt: string
}

export default function AdminPage() {
  const [selectedSlug, setSelectedSlug] = useState(PROJECT_SLUGS[0].slug)
  const [pdfs, setPdfs] = useState<PdfFile[]>([])
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const fetchPdfs = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/list-pdfs?projectSlug=${selectedSlug}`)
      const data = await res.json()
      if (data.files) {
        setPdfs(data.files)
      }
    } catch (err) {
      console.error("Failed to fetch PDFs:", err)
    } finally {
      setLoading(false)
    }
  }, [selectedSlug])

  useEffect(() => {
    fetchPdfs()
  }, [fetchPdfs])

  async function uploadFile(file: File) {
    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed.")
      return
    }

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("projectSlug", selectedSlug)

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
      }
    } catch (err) {
      console.error("Upload failed:", err)
    } finally {
      setUploading(false)
    }
  }

  async function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) await uploadFile(file)
    e.target.value = ""
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) uploadFile(file)
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

  const selectedProject = PROJECT_SLUGS.find((p) => p.slug === selectedSlug)

  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" aria-hidden="true" />
      <div className="relative z-10">
        <header className="border-b border-border px-6 py-5 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/projects"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase">
                  Back to Projects
                </span>
              </Link>
            </div>
            <h1 className="text-lg font-serif font-semibold text-foreground">
              PDF Manager
            </h1>
          </div>
        </header>

        <main className="px-6 md:px-12 lg:px-20 py-12">
          <div className="mx-auto max-w-5xl">
            {/* Project selector */}
            <div className="mb-8">
              <label
                htmlFor="project-select"
                className="block text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-3"
              >
                Select Project
              </label>
              <select
                id="project-select"
                value={selectedSlug}
                onChange={(e) => setSelectedSlug(e.target.value)}
                className="w-full max-w-md rounded-sm border border-border bg-card px-4 py-2.5 text-sm font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {PROJECT_SLUGS.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Upload area */}
            <div
              className={`mb-10 rounded-sm border-2 border-dashed transition-colors ${
                dragOver
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-muted-foreground"
              }`}
              onDragOver={(e) => {
                e.preventDefault()
                setDragOver(true)
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
            >
              <label className="flex flex-col items-center justify-center py-12 cursor-pointer">
                {uploading ? (
                  <Loader2 className="h-8 w-8 animate-spin text-primary mb-3" />
                ) : (
                  <Upload className="h-8 w-8 text-muted-foreground mb-3" />
                )}
                <p className="text-sm font-medium text-foreground mb-1">
                  {uploading
                    ? "Uploading..."
                    : "Drop a PDF here or click to upload"}
                </p>
                <p className="text-xs text-muted-foreground">
                  PDF files only, uploading to{" "}
                  <span className="font-mono text-foreground">
                    {selectedProject?.title}
                  </span>
                </p>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileInput}
                  className="sr-only"
                  disabled={uploading}
                />
              </label>
            </div>

            {/* PDF list */}
            <div>
              <h2 className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Uploaded PDFs ({pdfs.length})
              </h2>

              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
              ) : pdfs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 border border-border rounded-sm bg-card">
                  <FileText className="h-10 w-10 text-muted-foreground/40 mb-3" />
                  <p className="text-sm text-muted-foreground">
                    No PDFs uploaded for this project yet
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {pdfs.map((pdf) => (
                    <div
                      key={pdf.url}
                      className="flex items-center gap-4 px-4 py-3 rounded-sm border border-border bg-card"
                    >
                      <FileText className="h-5 w-5 text-primary shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {pdf.filename}
                        </p>
                        <p className="text-[10px] font-mono text-muted-foreground mt-0.5">
                          {formatFileSize(pdf.size)}
                          {pdf.uploadedAt &&
                            ` \u00B7 ${new Date(pdf.uploadedAt).toLocaleDateString()}`}
                        </p>
                      </div>
                      <a
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono tracking-wider uppercase text-primary hover:underline shrink-0"
                      >
                        View
                      </a>
                      <button
                        onClick={() => handleDelete(pdf.url)}
                        className="p-2 rounded-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors shrink-0"
                        aria-label={`Delete ${pdf.filename}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
