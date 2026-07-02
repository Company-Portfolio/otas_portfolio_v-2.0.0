import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { content } from "@/data/content";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/utils/animations";

export function ServiceSection() {
  return (
    <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white">
      <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <div className="">
              <div className="block w-fit px-4 py-3 rounded-md font-aj11 gap-2 text-sm lg:text-[20px] text-white bg-black font-semibold">
                {content.services.badge}
              </div>
            </div>
            <p className="text-lg lg:text-[24px] text-foreground leading-relaxed font-bold w-[80%]">
              {content.services.description}
            </p>
          </motion.div>

          {/* Right Content - Services List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {content.services.items.map((service) => (
              <motion.div
                key={service.id}
                className="flex items-center justify-between py-4 cursor-pointer hover:text-primary transition-colors"
                variants={fadeInUp}
              >
                <h3 className="text-[#5D5D5D] font-semibold text-lg lg:text-[20px] hover:text-black">
                  {service.title}
                </h3>
                <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
