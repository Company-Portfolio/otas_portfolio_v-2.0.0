import Hero from '@/components/sections/Hero'
import { CaseStudySection } from '@/components/sections/CaseStudySection'
import { motion } from "framer-motion";
import { content } from '@/data/content';

const serviceDetails = [
  {
    id: 1,
    title: "Business Website",
    subtitle: "လုပ်ငန်းကို ယုံကြည်မှုတိုးစေမဲ့",
    description: "လုပ်ငန်းရှင်တွေရဲ့ လုပ်ငန်းအတွက် Branding နှင့် Customer များ ၊ အလုပ်လက်တွဲလုပ်ဆောင်မည့် စီးပွားရေး လုပ်ငန်းများ၏ ယုံကြည်မှု ခိုင်မာစေဖို့အတွက် လုပ်ငန်းများအတွက် Business Portfolio ရရှိမှာ ဖြစ်ပါတယ်",
    image: "/images/image.png",
    benefits: [
      "- ကိုယ်ပိုင် Domain နှင့် Hosting ဖြင့် လုပ်ငန်း၏ ယုံကြည်မှုကို တိုးတက်စေခြင်း",
      "- သန့်ရှင်းသပ်ရပ်ပြီး Professional ကျသော Design များဖြင့် ဖန်တီးပေးခြင်း",
      "- Google SEO အပြည့်အဝ ထည့်သွင်းပေးထားသဖြင့် ရှာဖွေရလွယ်ကူခြင်း",
      "- Responsive Design ဖြစ်သဖြင့် မည်သည့် Device တွင်မဆို အဆင်ပြေစွာကြည့်ရှုနိုင်ခြင်း"
    ]
  },
  {
    id: 2,
    title: "Business Email",
    subtitle: "လုပ်ငန်းရဲ့ ပုံရိပ်ကို မြှင့်တင်ပေးမဲ့",
    description: "လုပ်ငန်းရှင်တွေရဲ့ လုပ်ငန်းအတွက် B2B, B2G လုပ်ငန်းအမျိုးအစားများ ဆက်သွယ်ဆောင်ရွက်ရန်အတွက် အထူးသင့်လျော်ပြီး၊ လုပ်ငန်း၏ လုံခြုံစိတ်ချရမှုနှင့် ပရော်ဖက်ရှင်နယ်ကျမှုကို အပြည့်အဝ မြှင့်တင်ပေးမည့် Business Email ဖြစ်ပါတယ်",
    image: "/images/image2.png",
    benefits: [
      "- ကိုယ်ပိုင်လုပ်ငန်းအမည်ဖြင့် အသုံးပြုနိုင်၍ B2B, B2G နှင့် Client များ၏ ယုံကြည်မှုကို ခိုင်မာစေခြင်း။",
      "- ဝန်ထမ်းများ၏ အကောင့်များကို အပြည့်အဝ စီမံနိုင်ပြီး Data ဆုံးရှုံးမှု၊ မသမာမှုများကို ကာကွယ်ပေးနိုင်ခြင်း။",
      "- Google SMS OTP ပြဿနာကို ကျော်လွှားနိုင်ပြီး အကောင့်ပြန်ရလွယ်ကူခြင်း။",
      "- Built-in AI Assistant ပါဝင်သဖြင့် ရုံးသုံး Email များကို အချိန်တိုအတွင်း လွယ်ကူစွာ ရေးသားနိုင်ခြင်း။"
    ]
  },
  {
    id: 3,
    title: "AI Agent",
    subtitle: "လုပ်ငန်းရဲ့ အချိန်ကို ၈ဆ မြှင့်တင်ပေးမဲ့",
    description: "လုပ်ငန်းရှင်တွေရဲ့ လုပ်ငန်းအတွက် Social Media ကနေ အရောင်းပိုင်း ၊ ပစ္စည်းအကြောင်းရှင်းပြခြင်းနှင့် Customer Service လုပ်ငန်းများကို အကောင်းဆုံးနဲ့ အမြန်ဆုံး (24/7) ဝန်ဆောင်မှုပေးနိုင်တဲ့ AI အရောင်းဝန်ထမ်း ရရှိမှာ ဖြစ်ပါတယ်",
    image: "/images/image3.png",
    benefits: [
      "- လုပ်ငန်းလည်ပတ်မှုနှုန်းကို ၈ဆအထိ မြှင့်တင်ပေးပြီး အကောင်းဆုံး Customer Experience ကို ပေးစွမ်းနိုင်ခြင်း",
      "- Facebook, TikTok နှင့် ကိုယ်ပိုင် App များတွင် တိုက်ရိုက်အသုံးပြုနိုင်သော AI Agent တစ်ယောက် ရရှိခြင်း",
      "- Customer များအတွက် အမြန်ဆန်ဆုံးနှင့် စိတ်ကျေနပ်မှုအပြည့်အဝ ဝန်ဆောင်မှုကို အပြည့်အဝ ပေးနိုင်ခြင်း",
      "- ပိတ်ရက်မရှိ (24/7) အော်ဒါကောက်ခြင်း၊ မေးခွန်းဖြေခြင်းနှင့် အခက်အခဲများကို ချက်ချင်းဖြေရှင်းပေးနိုင်ခြင်း"
    ]
  },
  {
    id: 4,
    title: "Customize Software",
    subtitle: "သင့်လုပ်ငန်းရဲ့ အခက်အခဲကို တစ်ချက်တည်းနဲ့ ဖြေရှင်းပေးမဲ့",
    description: "လုပ်ငန်းရှင်တွေရဲ့ ကြုံတွေ့နေရတဲ့ လုပ်ငန်းအခက်အခဲတွေကို အမှန်တကယ် ဖြေရှင်းပေးနိုင်သည့် Software သာ ဖြစ်သည်ဟူသော ယုံကြည်ချက်ဖြင့် လုပ်ငန်းသုံး Software များကို အစမှအဆုံး ရေးဆွဲဖန်တီးပေးသော ဝန်ဆောင်မှုဖြစ်ပါသည်။",
    image: "/images/image4.png",
    benefits: [
      "- လုပ်ငန်းသုံး Software များကို မိမိလုပ်ငန်းလိုအပ်ချက်နှင့် ကိုက်ညီအောင် စိတ်ကြိုက် ရေးဆွဲနိုင်ခြင်း။",
      "- ကြန့်ကြာနေသော Manual လုပ်ငန်းစဉ်များကို အလိုအလျောက်စနစ်ဖြင့် အစားထိုးကာ လုပ်ငန်းအချိန်နှင့်အရှိန်ကို မြှင့်တင်ပေးနိုင်ခြင်း။",
      "- စနစ်ကျွမ်းကျင်စွာ အသုံးပြုနိုင်သည့်အထိ အနီးကပ် ပံ့ပိုးကူညီပေးမည့် သီးသန့် Technical Support Team ၏ ဝန်ဆောင်မှုကို ရရှိခြင်း။",
      "- ပြောင်းလဲလာသော Сီးပွားရေး လိုအပ်ချက်များနှင့်အညီ Software ကို ရေရှည်အတွက် စဉ်ဆက်မပြတ် Updates ပြုလုပ်ပေးခြင်း။"
    ]
  },
]

export function Services() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <Hero images={content.service.banner} title={<>
        အိုတက်စ်က ကူညီဆောင်ရွက်ပေးနေတဲ့ <br /> နည်းပညာဆိုင်ရာ Services များ
      </>} />

      {serviceDetails.map((service) => {

        const textVariants = {
          hidden: { opacity: 0, x: -40 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          }
        };

        const imageVariants = {
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.15 }
          }
        };

        const listItemVariants = {
          hidden: { opacity: 0, y: 15 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
          }
        };

        return (
          <motion.section
            key={service.id}
            className="py-16 md:py-24 select-none"
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