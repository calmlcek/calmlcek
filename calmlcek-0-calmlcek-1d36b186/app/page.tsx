import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutBento } from "@/components/about-bento"

export default function Page() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <div className="relative z-10">
        <Navigation />
        <main>
          <AboutHero />
          <AboutBento />
        </main>
        <Footer />
      </div>
    </>
  )
}
