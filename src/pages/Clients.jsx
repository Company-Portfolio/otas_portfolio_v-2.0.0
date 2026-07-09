// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
import { content } from "@/data/content"
import Hero from '@/components/sections/Hero'
import SuccessRecord from "../components/sections/SuccessRecord"
import { motion } from "framer-motion";

export function Clients() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero title={content.heroImg.businessPartner} className="w-full" />

      {/* Highlight Message Section */}
      <section>
        <motion.div
          className="w-full flex items-center justify-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="text-center mt-20 font-bold font-myanmar lg:text-[48px] md:text-[36px] text-[22px] w-full text-primary leading-tight md:leading-normal">
            <motion.span variants={fadeInUp} className="block">
              အိုတက်စ်အနေနဲ့ ၄ နှစ်တာ ကာလအတွင်း မတူညီတဲ့
            </motion.span>
            <motion.span variants={fadeInUp} className="block">
              စီးပွားရေး အမျိုးအစား ၆ မျိုးထဲမှ လုပ်ငန်းပေါင်း ၂၀ ကျော်ရဲ့
            </motion.span>
            <motion.span variants={fadeInUp} className="block">
              အခက်အနေတွေကို တာဝန်ယူ ကူညီဖြေရှင်းပေးနိုင်ခဲ့ပါတယ်
            </motion.span>
          </h2>
        </motion.div>
      </section>

      {/* All Clients */}
      <section className="py-16 md:py-24 bg-white select-none">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
        >
          {/* Title Element */}
          <motion.h2
            variants={fadeInUp}
            className="lg:text-[64px] sm:text-4xl lg:text-[44px] text-slate-950 tracking-tight text-center font-aj11 leading-tight mb-16 max-w-4xl mx-auto"
          >
            {content.clients.title}
          </motion.h2>

          {/* Grid Items Elements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {content.clients.items.map((client) => (
              <motion.div
                key={client.id}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="flex flex-col items-center text-center space-y-4 max-w-[360px] mx-auto group cursor-pointer"
              >
                <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-900 uppercase font-sans">
                  {client.name}
                </span>

                <p className="text-slate-800 lg:text-[20px] md:text-base font-bold font-myanmar leading-relaxed px-2">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Success Record Section */}
      <section>
        <SuccessRecord />
      </section>
    </main>
  )
}