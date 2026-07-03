import React from 'react'
import { content } from '@/data/content'
function Hero() {
    return (
        <div>
            <section className="w-full bg-background-light relative">
                <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-[#0B5FB2] z-0" />

                <div className="w-full h-full pt-16 md:pt-20 relative z-10">
                    <img
                        src={content.about.hero.image}
                        alt="About Hero"
                        className="h-full w-full object-cover"
                    />
                </div>

            </section>

        </div>
    )
}

export default Hero