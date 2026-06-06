import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { content } from "@/data/content"
import { fadeInUp, staggerContainer } from "@/utils/animations"

export function FAQSection() {
  return (
    <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-background-light">
      <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Tabs defaultValue="website" className="w-full">
            {/* Tab Navigation */}
            <TabsList className="flex flex-wrap justify-center gap-2 mb-[var(--heading-mb)] h-auto p-1 bg-transparent">
              {content.faq.tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-6 py-3 text-sm font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            {content.faq.tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
                    {content.faq.items[tab.id]?.map((item, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <AccordionItem value={`item-${index}`}>
                          <AccordionTrigger className="text-left text-foreground hover:text-primary">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
