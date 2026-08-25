import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { fadeInLeft, fadeInRight } from "@/utils/animations";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-background-light overflow-hidden pt-[var(--section-py)] md:pt-[var(--section-py-lg)]">
      {/* Background Image - Full Width */}
      <div className="absolute inset-0">
        <img
          src={content.hero.backgroundImage}
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content - Left Aligned Glass Card */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)] py-[var(--section-py)] lg:py-[var(--section-py-lg)]">
          <div className="max-w-3xl">
            {/* Glass Card */}
            <motion.div
              className="font-aj11 glass rounded-2xl p-8 md:p-10 lg:p-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              <motion.h1
                className="font-aj11 text-3xl md:text-4xl lg:text-5xl xl:text-[64px] mb-8 whitespace-pre-line tracking-wider leading-[2]"
                style={{
                  color: "#0D1B2A",
                }}
                variants={fadeInLeft}
              >
                {content.hero.title}
              </motion.h1>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInRight}
              >
                <Button
                  size="xl"
                  className="px-8"
                  style={{
                    backgroundColor: "#007FFF",
                  }}
                >
                  <Link
                    to={"/contact"}
                    className="text-white text-[16px] sm:text-[20px] lg:text-[24px]"
                  >
                    {content.hero.cta1}
                  </Link>
                </Button>
                {/* <Button
                  size="xl"
                  variant="outline"
                  className="px-8"
                  style={{
                    borderColor: "#007FFF",
                    color: "#007FFF",
                  }}
                >
                  <span className="text-[16px] sm:text-[20px] lg:text-[24px] cursor-pointer">
                    {content.hero.cta2}
                  </span>
                </Button> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
