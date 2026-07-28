import { Card, CardContent } from "@/components/ui/card"
import { content } from "@/data/content"
import Hero from "@/components/sections/Hero"
import { motion } from "framer-motion";

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
        <Hero images={content.about.hero.image} title={content.heroImg.aboutTitle} />

        {/* Entry Fade Animation for Main Hero Image */}
        <motion.div
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
        </motion.div>
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
          <motion.p variants={fadeInUp} className="font-aj11 text-primary lg:text-[32px] md:text-[24px] sm:text-[24px] text-center">
            {content.about.helpCustomers.title}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 w-full px-2">
            {content.about.helpCustomers.image.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt=""
                variants={fadeInUp}
                className="w-full h-full object-cover rounded-md"
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Client help & Partner Brands Section */}
      <section className="py-12 md:py-16 bg-white select-none">
        <motion.div
          className="mx-auto max-w-6xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)] space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Client Help Sub-section */}
          <div className="space-y-8 text-center">
            <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-primary font-aj11 tracking-wide">
              {content.about.clientHelp?.title || "အိုတက်စ်မှ ကူညီဖြေရှင်းပေးထားတဲ့ လုပ်ငန်းများ"}
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10 items-center justify-center">
              {content.clients.items.slice(0, 5).map((client) => (
                <motion.div key={client.id} variants={fadeInUp} className="flex flex-col items-center justify-center text-center space-y-3 group">
                  <div className="h-12 md:h-16 w-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-[80%] object-contain"
                    />
                  </div>
                  <p className="lg:text-[12px] md:text-xs font-semibold text-slate-800 tracking-wide font-sans uppercase">
                    {client.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Partner Brands Sub-section */}
          <div className="space-y-8 text-center">
            <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-primary tracking-wide font-aj11">
              {content.about.clientPartner?.title || "အိုတက်စ်နဲ့ လက်တွဲထားသော လုပ်ငန်းများ"}
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10 items-center justify-center">
              {/* 💡 ညီလေးရဲ့ ကုဒ်အသစ်ထဲက content.clientsLogo.items ကို မပြောင်းလဲဘဲ သုံးပေးထားပါတယ် */}
              {content.clientsLogo.items.slice(5, 10).map((client) => (
                <motion.div key={client.id} variants={fadeInUp} className="flex flex-col items-center justify-center text-center space-y-3 group">
                  <div className="h-12 md:h-16 w-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-[80%] object-contain"
                    />
                  </div>
                  <p className="lg:text-[12px] md:text-xs font-semibold text-slate-800 tracking-wide font-sans uppercase">
                    {client.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white select-none">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:text-[64px] md:text-[40px] sm:text-[32px] mb-12 font-aj11 text-slate-900 text-center"
          >
            {content.about.testimonials.title}
          </motion.h2>

          {/* Testimonials Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {content.about.testimonials.items.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeInOut" } }}
                className="h-full"
              >
                <Card className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between p-5 h-full transition-shadow duration-300 hover:shadow-md">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 shrink-0">
                        <img
                          src={testimonial.logo}
                          alt=""
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div className="text-left">
                        <h3 className="text-sm font-bold text-slate-900 font-myanmar leading-tight">
                          {testimonial.name}
                        </h3>
                        <p className="text-[10px] md:text-xs font-bold text-slate-400 font-myanmar uppercase mt-0.5 tracking-wider">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-800 text-sm md:text-base font-aj11 leading-relaxed text-left mb-5 lg:text-[28px]">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}