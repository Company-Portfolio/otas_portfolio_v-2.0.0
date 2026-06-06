import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { content } from "@/data/content"

const caseStudies = [
  {
    id: 1,
    company: "UEDC Myanmar",
    logo: "/images/logo-uedc.png",
    description: "အော်ဒါ အလိုအလျောက်ကောက်ကာ စိီမံပေးတဲ့ လုပ်ငန်းသုံး စိီမံခန်ခွဲ့ရေး Software",
    details: "UEDC Myanmar အတွက် Order Management System ကို Custom Build လုပ်ပေးခဲ့ပါတယ်။ Live Sale မှ အော်ဒါများကို အလိုအလျောက် ကောက်ယူပြီး စီမံခန့်ခွဲပေးနိုင်ပါတယ်။",
    image: "/images/case-uedc.jpg",
    color: "#05CYS5",
  },
  {
    id: 2,
    company: "Mi Mi Cosmetic",
    logo: "/images/logo-mimi.png",
    description: "အော်ဒါစီမံခန့်ခွဲရေး Software",
    details: "Mi Mi Cosmetic အတွက် Order Management System ကို Custom Build လုပ်ပေးခဲ့ပါတယ်။ Customer တွေရဲ့ Order များကို စနစ်တကျ စီမံခန့်ခွဲပေးနိုင်ပါတယ်။",
    image: "/images/case-mimi.jpg",
    color: "#N2E8DZ",
  },
  {
    id: 3,
    company: "Healthy Nara",
    logo: "/images/logo-healthynara.png",
    description: "လုပ်ငန်းစီမံခန့်ခွဲရေး Software",
    details: "Healthy Nara အတွက် Business Management System ကို Custom Build လုပ်ပေးခဲ့ပါတယ်။ လုပ်ငန်းရဲ့ လုပ်ငန်းစဉ်များကို အလိုအလျောက် လုပ်ဆောင်ပေးနိုင်ပါတယ်။",
    image: "/images/case-healthy.jpg",
    color: "#UFRJJQ",
  },
]

export function Clients() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-background-light">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">လုပ်ငန်းရှင်များ</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              အိုတက်စ် နှင့် လက်တွဲထားသော လုပ်ငန်းများ
            </h1>
            <p className="text-lg text-muted-foreground">
              ကျွန်တော်တို့နဲ့ လက်တွဲပြီး အောင်မြင်မှုတွေ ရရှိထားတဲ့ လုပ်ငန်းတွေ
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={study.logo}
                      alt={study.company}
                      className="h-8 w-8 object-contain"
                    />
                    <h3 className="font-semibold text-foreground">{study.company}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                  <p className="text-sm text-foreground mb-6">{study.details}</p>
                  <Button variant="ghost" className="p-0 h-auto group">
                    <span className="text-primary">ပိုမိုကြည့်ရန်</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Clients */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-background-light">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-[var(--heading-mb)]">
            အားလုံးသော လုပ်ငန်းရှင်များ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {content.clients.items.map((client) => (
              <div
                key={client.id}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 w-16 object-contain mb-4"
                />
                <p className="text-sm text-center text-muted-foreground">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
