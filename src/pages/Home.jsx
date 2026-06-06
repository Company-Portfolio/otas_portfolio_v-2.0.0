import { HeroSection } from "@/components/sections/HeroSection"
import { ServiceSection } from "@/components/sections/ServiceSection"
import { CaseStudySection } from "@/components/sections/CaseStudySection"
import { CTASection } from "@/components/sections/CTASection"
import { ClientLogos } from "@/components/sections/ClientLogos"
import { FAQSection } from "@/components/sections/FAQSection"

export function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <CaseStudySection />
      <CTASection />
      <ClientLogos />
      <FAQSection />
    </main>
  )
}
