import { HeroSection } from "@/components/sections/HeroSection"
import { ServiceSection } from "@/components/sections/ServiceSection"
import { CaseStudySection } from "@/components/sections/CaseStudySection"
import { CTASection } from "@/components/sections/CTASection"
import { TestimonialSection } from "@/components/sections/TestimonialSection"
import { ClientLogos } from "@/components/sections/ClientLogos"
// import { FAQSection } from "@/components/sections/FAQSection"
// import SuccessRecord from "../components/sections/SuccessRecord"

export function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <CaseStudySection />
      <ClientLogos />
      <CTASection />
      <TestimonialSection />
      {/* <SuccessRecord /> */}
      {/* <FAQSection /> */}
    </main>
  )
}
