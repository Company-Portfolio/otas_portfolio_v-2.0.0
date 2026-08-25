import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import { CaseStudySection } from "@/components/sections/CaseStudySection";
import { motion } from "framer-motion";
import { content } from "@/data/content";

export function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const scrollToTarget = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      // Slight delays to ensure DOM rendering and Framer Motion components are ready
      const t1 = setTimeout(scrollToTarget, 50);
      const t2 = setTimeout(scrollToTarget, 200);
      const t3 = setTimeout(scrollToTarget, 400);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [location.hash, location.pathname]);

  const serviceList = content.service?.details || [];

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <Hero
        images={content.service.banner}
        title={
          <>
            အိုတက်စ်က ကူညီဆောင်ရွက်ပေးနေတဲ့ <br /> နည်းပညာဆိုင်ရာ Services များ
          </>
        }
      />

      {serviceList.map((service) => {
        const textVariants = {
          hidden: { opacity: 0, x: -40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        };

        const imageVariants = {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.15 },
          },
        };

        const listItemVariants = {
          hidden: { opacity: 0, y: 15 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
          },
        };

        return (
          <motion.section
            key={service.id}
            id={service.slug}
            className="py-16 md:py-24 select-none scroll-mt-24 md:scroll-mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-150px" }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                <motion.div
                  variants={textVariants}
                  className="lg:col-span-7 space-y-4 md:space-y-5 text-left"
                >
                  <div className="space-y-1">
                    <p className="text-slate-900 lg:text-[40px] sm:text-xl md:text-2xl font-bold font-myanmar leading-tight">
                      {service.subtitle}
                    </p>
                    <h2 className="lg:text-[40px] sm:text-4xl md:text-5x font-bold text-slate-950 font-PoppinsLocal pt-3">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-slate-600 lg:text-[20px] sm:text-sm md:text-[15px] font-bold font-myanmar leading-relaxed max-w-xl pt-2 w-[80%]">
                    {service.description}
                  </p>

                  <p className="text-slate-900 text-lg lg:text-[20px] font-bold font-aj11 pt-4">
                    ဒီ Service ကိုအပ်နှံလိုက်ရုံနဲ့
                  </p>

                  <motion.ul
                    className="space-y-7 pt-2"
                    variants={{
                      visible: { transition: { staggerChildren: 0.08 } }
                    }}
                  >
                    {service.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        variants={listItemVariants}
                        className="flex items-center gap-3"
                      >
                        <span className="text-slate-800 text-xs lg:text-[20px] sm:text-sm md:text-[15px] font-bold font-aj11">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div
                  variants={imageVariants}
                  className="lg:col-span-5 w-full flex justify-center lg:justify-end h-120"
                >
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full max-w-[460px] aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-white border-4 border-white shadow-md"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </motion.section>
        );
      })}


      <CaseStudySection />
    </main>
  )
}