import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { content } from "@/data/content"
import { fadeInUp, staggerContainer } from "@/utils/animations"

export function ClientLogos() {
  return (
    <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white">
      <div className="mx-auto w-full text-center max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
        <motion.h2
          className="font-aj11 text-primary text-3xl md:text-4xl font-bold text-foreground mb-[var(--heading-mb)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {content.clients.title}
        </motion.h2>

        {/* Client Logos Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {content.clients.items.map((client) => (
            <motion.div
              key={client.id}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group"
              variants={fadeInUp}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-16 object-contain mb-4 group-hover:scale-110 transition-transform"
              />
              <p className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
                {client.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <a to="/clients" className="group inline-block no-underline">
            <Button variant="link" size="lg" className="text-primary font-aj11 p-0 hover:no-underline flex items-center cursor-pointer">
              {content.clients.viewAll}
              <ArrowRight className="ml-2 h-5 w-5 text-primary" />
            </Button>
            <div className="w-full bg-primary h-[2px] transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left"></div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
