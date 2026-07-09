import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { content } from "@/data/content"
import { fadeInUp, staggerContainer } from "@/utils/animations"

export function ClientLogos() {
  return (
    <section className="py-16 md:py-24 bg-white select-none w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-[44px] text-primary text-center font-aj11 leading-tight mb-16 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {content.clients.title || "အိုတက်စ် နှင့် လက်တွဲထားသော လုပ်ငန်းများ"}
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 items-start mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {content.clientsLogo.items.slice(0, 10).map((client) => (
            <motion.div
              key={client.id}
              className="flex flex-col items-center text-center space-y-4 group cursor-pointer"
              variants={fadeInUp}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <p className="text-slate-900 text-xs md:text-sm font-semibold uppercase font-sans tracking-wide max-w-[160px] leading-snug">
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Link to="/clients" className="group inline-flex flex-col items-center justify-center cursor-pointer">
            <div className="flex items-center gap-2 text-primary font-aj11 text-base sm:text-lg md:text-[20px]">
              <span>{content.clients.viewAll || "လုပ်ငန်းရှင် အားလုံးကို ကြည့်မယ်"}</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            <div className="w-full h-[2px] bg-[#2F75F7] mt-1 transition-transform duration-300 scale-x-100 group-hover:scale-x-110"></div>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}