import Hero from '@/components/sections/Hero'
import { CaseStudySection } from '@/components/sections/CaseStudySection'

const serviceDetails = [
  {
    id: 1,
    title: "Business Portfolio",
    subtitle: "လုပ်ငန်းရဲ့ ယုံကြည်မှုတိုးစေမယ့်",
    description: "ယုံကြည်စိတ်ချရတဲ့ Business Website ရှိထားခြင်းက စစချင်း ဖောက်သည်အသစ်တွေ သင့်လုပ်ငန်းကို ဘယ်လိုမြင်သွားမလဲ ဆိုတဲ့ First Impression ကို ပိုမိုကောင်းမွန်စေမှာပါ ",
    image: "/images/image48.png",
  },
  {
    id: 2,
    title: "Business Email",
    subtitle: "လုပ်ငန်းရဲ့ ပုံရိပ်ကို မြှင့်တင်ပေးမဲ့",
    description: "Business Email မရှိဘဲ Personal Gmail account တွေနဲ့ အလုပ်လုပ်နေတာဟာ သင့်လုပ်ငန်းရဲ့ ပုံရိပ်ကို အများကြီး ထိခိုက်စေသလို အန္တရာယ်လည်းများပါတယ်။ သင့်လုပ်ငန်းရဲ့ လုံခြုံမှုနဲ့ ယုံကြည်စိတ်ချရမှုအတွက် အရေးကြီးတဲ့ Business Email ကို ကျွန်တော်တို OTAS Tech Solutions မှာ အပ်နှံလိုက်ပါ။",
    image: "/images/image49.png",
  },
  {
    id: 3,
    title: "AI Agent",
    subtitle: "လုပ်ငန်းရဲ့ အချိန်ကို တိုးချဲ့ပေးမဲ့",
    description: "AI သုံးခြင်းဟာ လုပ်ငန်းရှင်တွေအတွက် ပိုကောင်းမလား ပိုဆိုးမလား။ အလုပ်သမား အချိန်ကုန်သက်သာစေပြီး Accuracy ပိုမိုမြင့်မားစေကာ လုပ်ငန်းတွေကို အလိုအလျောက် ပိုမိုမြန်ဆန် စနစ်ကျစေမှာ ဖြစ်ပါတယ်။",
    image: "/images/image50.png",
  },
  {
    id: 4,
    title: "Customize Software",
    subtitle: "လုပ်ငန်းရဲ့ အခက်အခဲကို လွယ်လွယ်ကူကူ ဖြေရှင်းပေးမဲ့",
    description: "သင့်လုပ်ငန်းလိုအပ်ချက်အလိုက် စနစ်တကျ ရေးဆွဲပေးထားတဲ့ Customized Software Development များသည် လုပ်ငန်းလည်ပတ်မှုကို ပိုမိုသွက်လက် စနစ်ကျစေပြီး ဒေတာ စီမံခန့်ခွဲမှုတွေကို အကောင်းဆုံး ကူညီပေးမှာ ဖြစ်ပါတယ်။",
    image: "/images/image51.png",
  },
]

const commonBenefits = [
  "လုပ်ငန်းသုံး Business Email အခမဲ့ (၁နှစ်စာ)",
  "လုပ်ငန်းအလိုက် အခမဲ့ ယုံကြည်မှု",
  "လုပ်ငန်းခြင်း စိတ်ချယုံကြည်မှု မြန်ဆန်ခြင်း",
  "24/7 Digital ရုံးခန်းဝန်ဆောင်မှု",
]

export function Services() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <Hero />

      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          className={`py-16 md:py-24 select-none`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              <div className="lg:col-span-7 space-y-4 md:space-y-5 text-left">

                <div className="space-y-1">
                  <p className="text-slate-900 lg:text-[40px] sm:text-xl md:text-2xl font-bold font-myanmar leading-tight">
                    {service.subtitle}
                  </p>
                  <h2 className="lg:text-[40px] sm:text-4xl md:text-5xl font-bold text-slate-950 font-sans leading-none tracking-tight pt-3">
                    {service.title}
                  </h2>
                </div>

                <p className="text-slate-600 lg:text-[20px] sm:text-sm md:text-[15px] font-bold font-myanmar leading-relaxed max-w-xl pt-2 w-[80%]">
                  {service.description}
                </p>
                <ul className="space-y-7 pt-4">
                  {commonBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">

                      <span className="text-slate-800 text-xs lg:text-[20px] sm:text-sm md:text-[15px] font-bold font-aj11">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>

              <div className="lg:col-span-5 w-full flex justify-center lg:justify-end h-120">
                <div className="w-full max-w-[460px] aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden bg-white border-4 border-white shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>


        </section>
      ))}
      <CaseStudySection />
    </main>
  )
}