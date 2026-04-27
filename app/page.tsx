import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <main className="bg-background">
        <HeroSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
