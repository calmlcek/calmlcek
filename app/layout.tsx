import React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google"

import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Architecture Portfolio",
  description:
    "A premium portfolio showcasing architectural design, spatial innovation, and built environments.",
}

export const viewport: Viewport = {
  themeColor: "#0c0a08",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${dmSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
