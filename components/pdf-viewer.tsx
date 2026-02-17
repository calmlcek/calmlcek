"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2 } from "lucide-react"

interface PdfViewerProps {
  src: string
}

export function PdfViewer({ src }: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [pdf, setPdf] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [scale, setScale] = useState(1.5)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadPdf() {
      try {
        setLoading(true)
        setError(null)

        const pdfjsLib = await import("pdfjs-dist")
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`

        const loadingTask = pdfjsLib.getDocument(src)
        const pdfDoc = await loadingTask.promise

        if (!cancelled) {
          setPdf(pdfDoc)
          setTotalPages(pdfDoc.numPages)
          setCurrentPage(1)
        }
      } catch (err) {
        if (!cancelled) {
          setError("Failed to load PDF")
          console.error("PDF load error:", err)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadPdf()
    return () => {
      cancelled = true
    }
  }, [src])

  const renderPage = useCallback(
    async (pageNum: number) => {
      if (!pdf || !canvasRef.current) return

      try {
        const page = await pdf.getPage(pageNum)
        const viewport = page.getViewport({ scale })
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")

        if (!context) return

        canvas.height = viewport.height
        canvas.width = viewport.width

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise
      } catch (err) {
        console.error("Page render error:", err)
      }
    },
    [pdf, scale]
  )

  useEffect(() => {
    if (pdf && currentPage) {
      renderPage(currentPage)
    }
  }, [pdf, currentPage, renderPage])

  function goToPrevPage() {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  function goToNextPage() {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  function zoomIn() {
    setScale((prev) => Math.min(prev + 0.25, 3))
  }

  function zoomOut() {
    setScale((prev) => Math.max(prev - 0.25, 0.5))
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <Loader2 className="h-8 w-8 text-muted-foreground animate-spin" />
        <p className="text-sm text-muted-foreground">Loading PDF...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 px-8 text-center">
        <p className="text-lg font-serif text-muted-foreground">{error}</p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Open PDF in New Tab
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/30 shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={goToPrevPage}
            disabled={currentPage <= 1}
            className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm text-muted-foreground font-mono tabular-nums">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage >= totalPages}
            className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={zoomOut}
            disabled={scale <= 0.5}
            className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-4 w-4" />
          </button>
          <span className="text-xs text-muted-foreground font-mono tabular-nums w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            disabled={scale >= 3}
            className="p-1.5 rounded-md hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex-1 overflow-auto flex justify-center p-4 bg-secondary/20"
      >
        <canvas ref={canvasRef} className="shadow-md" />
      </div>
    </div>
  )
}
