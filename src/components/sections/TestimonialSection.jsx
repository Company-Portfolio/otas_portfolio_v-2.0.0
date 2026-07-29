import { motion } from "framer-motion";
import { content } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export function TestimonialSection() {
  return (
    <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white select-none overflow-hidden">
      <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl lg:text-[64px] mb-12 font-aj11 text-gray-900 text-center"
        >
          {content.homeTestimonials.title}
        </motion.h2>

        {/* Testimonials Horizontal Scroll Row */}
        <motion.div
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {content.homeTestimonials.items.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="w-[280px] sm:w-[380px] md:w-[450px] lg:w-[480px] shrink-0 snap-align-start bg-white rounded-3xl border border-gray-100 p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Header: Logo, Name, Position */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      src={testimonial.logo}
                      alt=""
                      className="max-w-[85%] max-h-[85%] object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900 font-myanmar leading-tight">
                      {testimonial.name}
                    </h3>
                    <p className="text-[10px] md:text-xs font-bold text-gray-400 font-sans uppercase mt-1 tracking-wider">
                      {testimonial.position}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-gray-900 text-lg md:text-xl lg:text-[28px] font-aj11 leading-relaxed text-left">
                  {testimonial.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
