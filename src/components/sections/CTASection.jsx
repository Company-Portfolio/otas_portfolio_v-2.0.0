import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export function CTASection() {
  return (
    <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)]">
      <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
        <motion.h2
          className="font-aj11 text-3xl tracking-wider text-foreground mb-[var(--heading-mb)] text-center font-normal md:text-[64px]"
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
          {content.cta.cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow text-primary"
              variants={fadeInUp}
            >
              <div className="p-6 flex flex-col items-center w-full">
                <h3 className="w-full lg:w-[100%] font-aj11 lg:text-[40px] text-foreground mb-6 leading-[2] text-primary text-center">
                  {card.title}
                </h3>
                <div className="flex flex-col sm:flex-row w-full justify-between lg:w-[420px] gap-4">
                  {index == 1 && (
                    <Button
                      size="lg"
                      className="text-white text-[16px] lg:text-[20px] py-3 font-aj11 bg-primary hover:bg-primary/90 flex-1 cursor-pointer"
                      asChild
                    >
                      <a
                        href={card.cta1Link || "https://autoshopmm.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card.cta1}
                      </a>
                    </Button>
                  )}
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-aj11 text-[16px] lg:text-[20px] py-3 flex-1 cursor-pointer border border-primary"
                    asChild
                  >
                    {card.cta2Link?.startsWith("http") ? (
                      <a
                        href={card.cta2Link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {card.cta2}
                      </a>
                    ) : (
                      <Link to={card.cta2Link || "/contact"}>{card.cta2}</Link>
                    )}
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
