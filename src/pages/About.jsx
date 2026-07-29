import { CardContent } from "@/components/ui/card"
import { content } from "@/data/content"
import Hero from "@/components/sections/Hero"
import { motion } from "framer-motion";
import { TestimonialSection } from "../components/sections/TestimonialSection";

// 💡 ၁။ Framer Motion ကို Import ယူခြင်း

export function About() {

  // 💡 ၂။ Animations အတွက် ရိုးရှင်းပြီး ထိရောက်မည့် Variants များ သတ်မှတ်ခြင်း
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
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full relative">
        <Hero images={content.about.hero.image} title={
          <>
            လူကြီးမင်းတို့ရဲ့ လုပ်ငန်းအခက်အခဲတွေကို <br />နည်းပညာနဲ့ ကူညီ‌ဖြေရှင်းပေးမဲ့ အိုတက်စ်
          </>
        } />

        {/* Entry Fade Animation for Main Hero Image */}
        {/* <motion.div
          className="w-full rounded-2xl mx-auto max-w-5xl px-4 mt-10"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={content.about.journey.image}
            alt="About Hero"
            className="w-full h-full object-cover object-center"
          />
        </motion.div> */}
      </section>

      {/* Journey Stats Section */}
      <section className="py-12 md:py-20 bg-white select-none">
        <motion.div
          className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-16 max-w-3xl mx-auto">
            {content.about.journey.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center text-center justify-center gap-2"
              >
                <span className="text-[#007FFF] lg:text-[24px] md:text-xl font-bold font-myanmar mb-1 md:mb-2">
                  {stat.label}
                </span>
                <span className="lg:text-[64px] md:text-5xl sm:text-3xl text-[#007FFF] leading-tight font-aj11 ">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Process Row */}
          <div className="mt-16 md:mt-28 flex flex-col md:flex-row w-full justify-between items-center gap-8 md:gap-12">
            <motion.div
              className="w-full md:w-[55%] text-left space-y-4 md:space-y-6"
              variants={fadeInUp}
            >
              <div className="px-3 py-1 bg-black w-fit text-white text-xs md:text-sm rounded font-aj11 px-4 py-1.5 rounded-[var(--radius-md)] mb-4 py-4 px-6 w-fit">
                {content.about.process.title}
              </div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-myanmar font-bold leading-relaxed text-slate-800">
                {content.about.process.description}
              </p>
            </motion.div>

            <motion.div
              className="w-full md:w-[40%] flex justify-center md:justify-end"
              variants={fadeInUp}
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-slate-50 border border-slate-100">
                <img
                  src={content.about.purpose.image}
                  alt="Process Section Showcase"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)]">
        <motion.div
          className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.about.process.steps.map((step, index) => (
              <motion.div key={index} className="p-6" variants={fadeInUp}>
                <CardContent className="p-0">
                  <p className="mb-4 font-myanmar text-primary font-bold lg:text-[24px]">{step.step}</p>
                  <h3 className="lg:text-[32px] font-aj11 text-primary text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-myanmar lg:text-[20px] font-bold">{step.description}</p>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Help Customers */}
      <section>
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 w-full px-2">
            {content.about.helpCustomers.image.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt=""
                variants={fadeInUp}
                className="w-full h-full object-cover rounded-md"
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Client help & Partner Brands Section */}
      <section className="py-16 md:py-24 bg-white select-none">
        <motion.div
          className="mx-auto max-w-6xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="space-y-12 text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-4xl text-primary font-aj11 tracking-wide mb-12 py-2"
            >
              {content.about.clientHelp.title}
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-16 items-start justify-center">
              {content.about.clientHelp.items.map((client) => (
                <motion.div
                  key={client.id}
                  variants={fadeInUp}
                  className="flex flex-col items-center justify-center text-center space-y-4 group"
                >
                  <div className="h-16 md:h-20 w-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-[11px] md:text-[13px] font-bold text-gray-800 tracking-wide font-sans uppercase leading-tight max-w-[160px]">
                    {client.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white select-none border-t border-gray-100">
        <motion.div
          className="mx-auto max-w-6xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="space-y-12 text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-4xl text-primary font-aj11 tracking-wide mb-12 py-2"
            >
              {content.about.partners.title}
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 items-start justify-center max-w-4xl mx-auto">
              {content.about.partners.items.map((partner) => (
                <motion.div
                  key={partner.id}
                  variants={fadeInUp}
                  className="flex flex-col items-center justify-center text-center space-y-4 group"
                >
                  <div className="h-16 md:h-20 w-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-[11px] md:text-[13px] font-bold text-gray-800 tracking-wide font-sans uppercase leading-tight max-w-[160px]">
                    {partner.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />
    </main>
  )
}