// 📄 components/sections/Hero.jsx
import { content } from '@/data/content'

// 💡 Page အလိုက် ပို့ပေးမယ့် title နဲ့ subtitle ကို Props အနေနဲ့ လက်ခံလိုက်ပါတယ်
function Hero({ images, title, subtitle }) {
    return (
        <div>
            <section className="w-full relative bg-[#0B5FB2]">
                <div className="absolute top-0 left-0 right-0 h-16 md:h-20" />

                <div className="w-full h-full pt-16 md:pt-20 relative z-10">
                    <img
                        src={images || content.heroImg.image}
                        alt="Hero Banner"
                        className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 pt-16 md:pt-20 flex flex-col items-start justify-center px-5 md:px-20">
                        {title && (
                            <h1 className="text-white font-aj11 leading-[2] text-xl md:text-4xl lg:text-[64px] drop-shadow-md md:w-[65%]">
                                {title}
                            </h1>
                        )}
                        {subtitle && (
                            <p className="text-white/90 font-myanmar text-sm md:text-lg lg:text-xl mt-3 max-w-2xl mx-auto drop-shadow-sm">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero