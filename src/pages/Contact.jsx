import React from 'react'
import Hero from '../components/sections/Hero'
import { ArrowRight } from "lucide-react"
import { ClientLogos } from '../components/sections/ClientLogos'

function Contact() {
    return (
        <main>
            <section className='relative' >
                <Hero />
            </section>


            <section className="py-16 md:py-24 select-none w-full relative z-10 -mt-10 md:-mt-28 lg:-mt-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        <div className="lg:col-span-6 bg-white border-2 border-slate-200 shadow-sm rounded-[24px] p-6 sm:p-8 md:p-10 w-full max-w-[540px] mx-auto">
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">

                                <div className="space-y-2">
                                    <label className="block text-slate-900 text-[20px] md:text-lg font-aj11">
                                        လုပ်ငန်းရှင် နာမည်
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="နာမည်"
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl font-aj11 text-sm focus:outline-none focus:border-primary transition-all placeholder-slate-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-slate-900 text-[20px] md:text-lg font-aj11">
                                        ဆက်သွယ်ရန် ဖုန်းနံပါတ်
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="ဖုန်းနံပါတ်"
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl font-aj11 text-sm focus:outline-none focus:border-primary transition-all placeholder-slate-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-slate-900 text-[20px] md:text-lg font-aj11">
                                        စိတ်ဝင်စားတဲ့ Service အမျိုးအစား
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-aj11 text-sm focus:outline-none focus:border-primary appearance-none text-slate-500 cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Service အမျိုးအစား ရွေးချယ်မယ်</option>
                                            <option value="portfolio">Business Portfolio Website</option>
                                            <option value="email">Business Email</option>
                                            <option value="ai">AI Agent Automation</option>
                                            <option value="software">Customize Software</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-slate-900 text-[20px] md:text-lg font-aj11">
                                        ဆွေးနွေးလိုတဲ့ အကြောင်းအရာ
                                    </label>
                                    <textarea
                                        rows={4}
                                        placeholder="ဆွေးနွေးလိုတဲ့ အကြောင်းအရာနဲ့ ပတ်သက်ပြီး အကြမ်းဖျင်းရေးခဲ့လို့ရပါတယ်"
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl font-aj11 text-sm focus:outline-none focus:border-primary transition-all resize-none placeholder-slate-400"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors font-aj11 text-base shadow-sm cursor-pointer"
                                >
                                    <span>ဆက်သွယ်ဖို့ အချက်အလက်တွေ ထားခဲ့မယ်</span>
                                    <ArrowRight className="h-4 w-4" />
                                </button>

                                <p className="text-xs font-bold text-[#2F75F7] font-myanmar leading-relaxed pt-2">
                                    * အိုတက်စ်အနေနဲ့ Contact Form တင်ထားသော လုပ်ငန်းရှင်များကို အမြန်ဆုံး ပြန်လည် ဆက်သွယ်ပေးပါမယ်
                                </p>

                            </form>
                        </div>

                        <div className="lg:col-span-6 space-y-6 text-left lg:pl-6">

                            <h2 className="text-[64px] sm:text-5xl md:text-[56px] lg:text-[60px] text-slate-950 font-aj11 leading-tight tracking-tight">
                                ဆက်သွယ်မေးမြန်းလို့ရပါတယ်
                            </h2>

                            <p className="text-slate-800 text-base sm:text-lg md:text-[20px] font-bold font-myanmar leading-relaxed max-w-xl">
                                လုပ်ငန်းရှင်တွေအနေနဲ့ မိမိရဲ့ လုပ်ငန်းကိုရဲ့ အခက်အခဲတွေကို နည်းပညာနဲ့ ဖြေရှင်းဖို့အတွက် အိုတက်စ်မှာ ရုံးချိန်အတွင်း ဆက်သွယ်စုံစမ်းလို့ရပါတယ်
                            </p>

                            <div className="pt-2">
                                <p className="text-2xl sm:text-3xl md:text-[38px] text-primary font-aj11 tracking-wide">
                                    ဖုန်းနံပါတ် : <span className="font-aj11 select-all">09 970 577 147</span>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section>
                <ClientLogos />
            </section>
        </main >

    )
}

export default Contact