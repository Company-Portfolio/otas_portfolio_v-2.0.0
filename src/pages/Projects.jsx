import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { content } from "@/data/content"

export function Projects() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-background-light">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6">ပရောဂျက်များ</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              အိုတက်စ်မှ ဖန်တီးပေးထားတဲ့ ပရောဂျက်များ
            </h1>
            <p className="text-lg text-muted-foreground">
              ကျွန်တော်တို့ဖန်တီးပေးထားတဲ့ ပရောဂျက်တွေကို ကြည့်ရှုနိုင်ပါတယ်
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.caseStudies.items.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={study.logo}
                      alt={study.company}
                      className="h-8 w-8 object-contain"
                    />
                    <h3 className="font-semibold text-foreground">{study.company}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  <Button variant="ghost" className="p-0 h-auto group/btn">
                    <span className="text-primary">ပိုမိုကြည့်ရန်</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
