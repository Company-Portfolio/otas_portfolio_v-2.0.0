// 📄 components/sections/Hero.jsx
import { motion } from "framer-motion"
import { content } from "@/data/content"

// 💡 Page အလိုက် ပို့ပေးမယ့် title နဲ့ subtitle ကို Props အနေနဲ့ လက်ခံလိုက်ပါတယ်
function Hero({ images, title, subtitle }) {
    return (
        <div>
            <section className="w-full relative bg-[#0B5FB2] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-16 md:h-20" />

                <div className="w-full h-full pt-16 md:pt-20 relative z-10">
                    <motion.img
                        src={images || content.heroImg.image}
                        alt="Hero Banner"
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.05, opacity: 0.85 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />

                    <motion.div
                        className="absolute inset-0 pt-16 md:pt-20 flex flex-col items-start justify-center px-5 md:px-20"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.18,
                                    delayChildren: 0.15,
                                },
                            },
                        }}
                    >
                        {title && (
                            <motion.h1
                                className="text-white font-aj11 leading-[2] text-xl md:text-4xl lg:text-[64px] drop-shadow-md md:w-[65%]"
                                variants={{
                                    hidden: { opacity: 0, x: -40, filter: "blur(6px)" },
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        filter: "blur(0px)",
                                        transition: {
                                            duration: 0.85,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    },
                                }}
                            >
                                {title}
                            </motion.h1>
                        )}
                        {subtitle && (
                            <motion.p
                                className="text-white/90 font-myanmar text-sm md:text-lg lg:text-xl mt-3 max-w-2xl mx-auto drop-shadow-sm"
                                variants={{
                                    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                        transition: {
                                            duration: 0.7,
                                            ease: "easeOut",
                                        },
                                    },
                                }}
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero