import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export function CTASection() {
  return (
    <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)]">
      <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
        <motion.h2
          className="font-aj11 text-3xl md:text-4xl tracking-wider text-foreground mb-[var(--heading-mb)] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {content.cta.title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {content.cta.cards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              variants={fadeInUp}
            >
              <div className="p-6 flex flex-col items-center">
                <h3 className="w-full lg:w-[420px] font-aj11 text-xl md:text-2xl font-bold text-foreground mb-6 leading-[2]">
                  {card.title}
                </h3>
                <div className="flex flex-col sm:flex-row w-full justify-between lg:w-[420px] gap-4">
                  <Button
                    size="lg"
                    className="text-white font-aj11 bg-primary hover:bg-primary/90 flex-1"
                  >
                    {card.cta1}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-aj11 flex-1"
                  >
                    {card.cta2}
                  </Button>
                </div>
              </div>
              <div className="px-6 pb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
