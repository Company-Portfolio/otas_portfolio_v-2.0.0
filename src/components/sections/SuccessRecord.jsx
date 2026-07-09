import { content } from "@/data/content";
import { motion } from "framer-motion";

function SuccessRecord() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section>
            <motion.div
                className="mx-auto max-w-7xl py-[var(--container-py)] px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)] mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div variants={fadeInUp} className="bg-[#171717] rounded-[var(--radius-md)] py-4 px-6 w-fit">
                    <p className="text-white font-aj11 tracking-wide">{content.success.badge}</p>
                </motion.div>

                <motion.p
                    variants={fadeInUp}
                    className="pt-3 font-myanmar text-[16px] md:text-[20px] lg:text-[24px] font-bold w-full md:w-[45%]" // w-[45%] ကို မိုဘိုင်းလ်မှာ အဆင်ပြေအောင် w-full md:w-[45%] ပြင်ပေးထားပါတယ်
                >
                    {content.success.subTitle}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 w-full">
                    {content.success.cards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={fadeInUp}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col w-full"
                        >
                            <div className="aspect-[362/255] w-full rounded-xl overflow-hidden mb-5">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="font-sans font-semibold text-xl md:text-2xl text-gray-950 mb-3 leading-snug">
                                {card.title}
                            </h3>

                            <p className="font-myanmar font-bold text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed mb-6 flex-grow">
                                {card.description}
                            </p>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-primary hover:bg-blue-700 text-white font-aj11 font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
                            >
                                <span>{card.cta1}</span>
                                <span className="text-lg">→</span>
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default SuccessRecord;