import { list } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const projectSlug = searchParams.get("projectSlug")

    const prefix = projectSlug ? `projects/${projectSlug}/` : "projects/"
    const { blobs } = await list({ prefix })

    const files = blobs.map((blob) => ({
      url: blob.url,
      filename: blob.pathname.split("/").pop() || "unknown",
      pathname: blob.pathname,
      size: blob.size,
      uploadedAt: blob.uploadedAt,
    }))

    return NextResponse.json({ files })
  } catch (error) {
    console.error("Error listing files:", error)
    return NextResponse.json(
      { error: "Failed to list files" },
      { status: 500 }
    )
  }
}
