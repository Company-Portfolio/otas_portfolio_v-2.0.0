import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export function CaseStudySection() {
  return (
    <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-background-light">
      <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
        <motion.h2
          className="font-aj11 text-center text-primary text-3xl md:text-4xl font-bold text-foreground mb-[var(--heading-mb)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {content.caseStudies.title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {content.caseStudies.items.map((study) => (
            <motion.div
              key={study.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-white hover:shadow-lg transition-all cursor-pointer"
              variants={fadeInUp}
            >
              {/* Card Content */}
              <div className="px-6 py-4">
                {/* Company Logo & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={study.logo}
                    alt={study.company}
                    className="h-8 w-8 object-contain"
                  />
                  <h3 className="font-semibold text-primary">
                    {study.company}
                  </h3>
                </div>

                {/* Description */}
                <p className="h-[50px] text-sm text-muted-foreground mb-6 line-clamp-2">
                  {study.description}
                </p>

                {/* View More Button */}
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  <span className="text-primary">ပိုမိုကြည့်ရန်</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
