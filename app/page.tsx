import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PackageSection } from "@/components/package-section"
import { TimelineSection } from "@/components/timeline-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PackageSection />
      <TimelineSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
