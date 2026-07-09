import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { content } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export function FAQSection() {
  return (
    <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)] flex flex-col items-start">
        <div className="bg-white text-black font-aj11 lg:text-[20px] md:text-sm px-4 py-1.5 rounded-[var(--radius-md)] mb-4 py-4 px-6 w-fit">
          {content.faq.title}
        </div>
        <h2 className="font-myanmar text-xl md:text-3xl font-semibold mb-10 text-left text-white max-w-2xl leading-snug">
          {content.faq.subtitle}
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full"
        >
          <Tabs defaultValue="website" className="w-full cursor-pointer">
            <TabsList className="flex flex-nowrap md:flex-row justify-start gap-3 md:gap-8 mb-10 h-auto p-0 bg-transparent border-b-0 md:border-b md:border-zinc-800 rounded-none w-full overflow-x-auto md:overflow-visible -webkit-overflow-scrolling touch scrollbar-hide">
              {content.faq.tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex-shrink-0 md:w-auto text-left md:text-center px-2 py-3 text-base font-myanmar font-medium bg-transparent text-zinc-500 rounded-none border-b-2 border-zinc-800 md:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-primary transition-all duration-200 cursor-pointer"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {content.faq.tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="w-full mt-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  <Accordion type="single" collapsible className="w-full">
                    {content.faq.items[tab.id]?.map((item, index) => (
                      <motion.div key={index} variants={fadeInUp}>
                        <AccordionItem
                          value={`item-${index}`}
                          className="border-b border-zinc-700 py-2"
                        >
                          <AccordionTrigger className="text-left font-myanmar text-base md:text-lg text-zinc-100 hover:text-primary hover:no-underline py-4 transition-colors">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="font-myanmar text-sm md:text-base text-zinc-400 leading-relaxed pb-4">
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
  );
}
