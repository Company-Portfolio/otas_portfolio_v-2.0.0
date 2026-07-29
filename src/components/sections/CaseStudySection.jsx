import { motion } from "framer-motion";
import { content } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export function CaseStudySection() {
  return (
    <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white">
      <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
        <motion.h2
          className="font-aj11 text-center text-3xl md:text-4xl text-gradient mb-[var(--heading-mb)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {content.caseStudies.title}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {content.caseStudies.items.map((study) => (
            <motion.div
              key={study.id}
              className="group rounded-3xl border border-gray-100 bg-white p-6 hover:shadow-lg transition-all duration-300 cursor-pointer"
              variants={fadeInUp}
            >
              {/* Logo / Image Box */}
              <div className="w-full h-[260px] flex items-center justify-center p-8 bg-white mb-6 overflow-hidden">
                <img
                  src={study.logo}
                  alt={study.company}
                  className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="px-1">
                {/* Company Name */}
                <h3 className="font-bold font-[manropeLight] text-gray-900 text-xl md:text-2xl mb-3">
                  {study.company}
                </h3>

                {/* Description */}
                <p className="text-[#111827] text-base lg:text-[20px] leading-relaxed">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
