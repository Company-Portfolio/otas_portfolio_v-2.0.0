import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Code, Mail, Bot, CheckCircle } from "lucide-react"
import { content } from "@/data/content"

const serviceDetails = [
  {
    id: 1,
    icon: Globe,
    title: "Business Portfolio",
    subtitle: "Business Website",
    description: "လုပ်ငန်းရဲ့ Brand Identity ကို ပိုခိုင်မာစေပြီး Customer တွေရဲ့ ယုံကြည်မှုတိုးစေတဲ့ Business Website များ",
    benefits: [
      "Online Presence တိုးလာခြင်း",
      "Customer ယုံကြည်မှု တိုးလာခြင်း",
      "Brand Identity ပိုခိုင်မာလာခြင်း",
      "24/7 ဝန်ဆောင်မှု ရရှိခြင်း",
    ],
    image: "/images/service-website.jpg",
  },
  {
    id: 2,
    icon: Mail,
    title: "Business Email",
    subtitle: "Business Email for Brand Identity",
    description: "လုပ်ငန်းရဲ့ Brand Identity ကို ပိုခိုင်မာစေတဲ့ Business Email များ",
    benefits: [
      "Professional Email Address",
      "Brand Identity တိုးလာခြင်း",
      "Security ပိုမိုခိုင်မာခြင်း",
      "Storage ပိုမိုရရှိခြင်း",
    ],
    image: "/images/service-email.jpg",
  },
  {
    id: 3,
    icon: Bot,
    title: "AI Agent",
    subtitle: "AI Agents for Automation",
    description: "လုပ်ငန်းတွေကို အလိုအလျောက် လုပ်ဆောင်ပေးနိုင်တဲ့ AI Agents များ",
    benefits: [
      "အလုပ်သမား အချိန် သက်သာခြင်း",
      "Accuracy ပိုမိုမြင့်မားခြင်း",
      "Cost လျှော့ချနိုင်ခြင်း",
      "24/7 အလုပ်လုပ်နိုင်ခြင်း",
    ],
    image: "/images/service-ai.jpg",
  },
  {
    id: 4,
    icon: Code,
    title: "Customize Software",
    subtitle: "Customize Software for Business Problems",
    description: "လုပ်ငန်းရဲ့ အခက်အခဲတွေကို ဖြေရှင်းပေးနိုင်တဲ့ Software များ",
    benefits: [
      "လုပ်ငန်းအတိုင်းအတာအလိုက် Customization",
      "Efficiency တိုးလာခြင်း",
      "Data Management ပိုကောင်းခြင်း",
      "ROI ပိုမိုရရှိခြင်း",
    ],
    image: "/images/service-software.jpg",
  },
]

export function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-background-light">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">ရနိုင်တဲ့ Service များ</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              လုပ်ငန်းရှင်တွေရဲ့ အခက်အခဲတွေကို ဖြေရှင်းပေးမဲ့ Service များ
            </h1>
            <p className="text-lg text-muted-foreground">
              {content.services.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      {serviceDetails.map((service, index) => (
        <section
          key={service.id}
          className={`py-[var(--section-py)] lg:py-[var(--section-py-lg)] ${index % 2 === 0 ? 'bg-white' : 'bg-background-light'}`}
        >
          <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              index % 2 === 0 ? '' : 'lg:flex-row-reverse'
            }`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary">{service.subtitle}</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}
