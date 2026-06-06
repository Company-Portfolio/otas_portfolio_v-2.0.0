import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { content } from "@/data/content"

export function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full bg-background-light">
        <div className="absolute inset-0">
          <img
            src={content.about.hero.image}
            alt="About Hero"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)] py-[var(--section-py)] lg:py-[var(--section-py-lg)]">
          <div className="mx-auto max-w-3xl glass rounded-2xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground whitespace-pre-line">
              {content.about.hero.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Journey Stats */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-[var(--heading-mb)]">
            {content.about.journey.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.about.journey.stats.map((stat, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-background-light">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-[var(--heading-mb)]">
            {content.about.process.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.about.process.steps.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Badge variant="secondary" className="mb-4">{step.step}</Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white">
        <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-[var(--heading-mb)]">
            {content.about.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.about.testimonials.items.map((testimonial) => (
              <Card key={testimonial.id} className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.logo}
                      alt=""
                      className="h-8 w-8 object-contain"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
