import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { content } from "@/data/content"
import Hero from '@/components/sections/Hero'
import SuccessRecord from "../components/sections/SuccessRecord"

// const caseStudies = [

//   {
//     id: 1,
//     company: "UEDC Myanmar",
//     logo: "/images/logo-uedc.png",
//     description: "အော်ဒါ အလိုအလျောက်ကောက်ပြီး စာရင်းသွင်း စိီမံပေးတဲ့ လုပ်ငန်းသုံး အရောင်း Sale Bot",
//     details: "UEDC Myanmar အတွက် Order Management System ကို Custom Build လုပ်ပေးခဲ့ပါတယ်။ Live Sale မှ အော်ဒါများကို အလိုအလျောက် ကောက်ယူပြီး စီမံခန့်ခွဲပေးနိုင်ပါတယ်။",
//     image: "/images/case-uedc.jpg",
//     color: "#05C5C5",
//   },
//   {
//     id: 2,
//     company: "Mi Mi Cosmetic",
//     logo: "/images/logo-mimi.png",
//     description: "အော်ဒါစီမံခန့်ခွဲရေး Software",
//     details: "Mi Mi Cosmetic အတွက် Order Management System ကို Custom Build လုပ်ပေးခဲ့ပါတယ်။ Customer တွေရဲ့ Order များကို စနစ်တကျ စီမံခန့်ခွဲပေးနိုင်ပါတယ်။",
//     image: "/images/case-mimi.jpg",
//     color: "#2E8D80",
//   },
//   {
//     id: 3,
//     company: "Healthy Nara",
//     logo: "/images/logo-healthynara.png",
//     description: "လုပ်ငန်းစီမံခန့်ခွဲရေး Software",
//     details: "Healthy Nara အတွက် Business Management System ကို Custom Build လုပ်ပေးခဲ့ပါတယ်။ လုပ်ငန်းရဲ့ လုပ်ငန်းစဉ်များကို အလိုအလျောက် လုပ်ဆောင်ပေးနိုင်ပါတယ်။",
//     image: "/images/case-healthy.jpg",
//     color: "#FF5A5F",
//   },
// ]



export function Clients() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />


      {/* Case Studies */}
      <section>
        <div className="w-full flex items-center justify-center">
          <p className="text-center mt-20 font-bold font-myanmar lg:text-[48px] w-[90%] text-primary">အိုတက်စ်အနေနဲ့ ၄ နှစ်တာ ကာလအတွင်း <br />မတူညီတဲ့ စီးပွားရေး အမျိုးအစား ၆ မျိုးထဲမှ လုပ်ငန်းပေါင်း ၂၀ ကျော်ရဲ့ အခက်အခဲတွေကို တာဝန်ယူ ကူညီဖြေရှင်းပေးနိုင်ခဲ့ပါတယ်</p>
        </div>
      </section>

      {/* All Clients */}
      <section className="py-16 md:py-24 bg-white select-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="lg:text-[64px] sm:text-4xl lg:text-[44px] text-slate-950 tracking-tight text-center font-aj11 leading-tight mb-16 max-w-4xl mx-auto">
            {content.clients.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {content.clients.items.map((client) => (
              <div
                key={client.id}
                className="flex flex-col items-center text-center space-y-4 max-w-[360px] mx-auto group"
              >
                <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-900 uppercase font-sans">
                  {client.name}
                </span>

                <p className="text-slate-800 lg:text-[20px] md:text-base font-bold font-myanmar leading-relaxed px-2">
                  {client.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section>
        <SuccessRecord />
      </section>
    </main>
  )
}
