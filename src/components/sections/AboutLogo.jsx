import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { content } from "@/data/content"
import { fadeInUp, staggerContainer } from "@/utils/animations"
function AboutLogo() {
    return (
        <div>
            <section className="py-[var(--section-py)] lg:py-[var(--section-py-lg)] bg-white">
                <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-foreground mb-[var(--heading-mb)]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        {content.clients.title}
                    </motion.h2>

                    {/* Client Logos Grid */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {content.clients.items.map((client) => (
                            <motion.div
                                key={client.id}
                                className="flex flex-col items-center justify-center p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group"
                                variants={fadeInUp}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-16 w-16 object-contain mb-4 group-hover:scale-110 transition-transform"
                                />
                                <p className="text-sm text-center text-muted-foreground group-hover:text-foreground transition-colors">
                                    {client.name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View All Button */}
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <Button variant="outline" size="lg">
                            {content.clients.viewAll}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutLogo