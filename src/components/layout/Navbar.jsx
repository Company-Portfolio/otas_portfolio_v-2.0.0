import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { content } from "@/data/content";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 💡 ၁။ Scroll လားရာအလိုက် ပုန်း/ပြ လုပ်ရန် State အသစ် ၂ ခု
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const isActive = (href) => location.pathname === href;

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Only update scrolled state if it changes
          const isScrolled = currentScrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

          // Only update visibility if it changes
          if (currentScrollY < 20) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY) {
            setIsVisible((prev) => (prev !== false ? false : prev));
          } else if (currentScrollY < lastScrollY) {
            setIsVisible((prev) => (prev !== true ? true : prev));
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-20 py-4 transition-all duration-300",
        isHomePage ? "bg-white" : "bg-gradient-to-r from-[#0B5FB2] to-[#0B5FB2]"
      )}
      initial={{ y: -120, opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -120,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
        mass: 0.8
      }}
    >
      <div className="mx-auto ">
        <div
          className={cn(
            "bg-white transition-all duration-300 px-4 md:px-6 lg:px-8 rounded-2xl",
            "flex h-16 md:h-[80px] items-center justify-between",
            scrolled
              ? "shadow-md border border-slate-100/80"
              : "shadow-sm border border-slate-100",
          )}
        >
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={content.nav.logo}
              alt="OTAS Logo"
              className="h-8 md:h-18 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-6 xl:gap-8">
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* <div className="flex items-center gap-1 text-[14px] md:text-[15px] font-semibold text-slate-700 hover:text-primary transition-colors cursor-pointer font-aj11">
                <Globe className="h-4 w-4" />
                <span>{content.nav.language.code}</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </div> */}

              {/* Nav Links */}
              {content.nav.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-[14px] lg:text-[18px] transition-colors font-aj11",
                    isActive(link.href)
                      ? "text-[#007FFF]"
                      : "text-slate-800 hover:text-[#007FFF]",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="hidden lg:flex items-center rounded-md bg-primary hover:bg-[#0066cc] text-white p-7 transition-colors duration-200 shrink-0"
            >
              <Link to="/contact">
                <span className="text-[14px] md:text-[15px] font-aj11">
                  {content.nav.cta}
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden shrink-0 hover:bg-slate-50 rounded-lg cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5 text-slate-700" />
          </Button>
        </div>
      </div>

      {/* Mobile Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="fixed inset-0 z-50 w-full h-full max-w-none m-0 rounded-none border-none bg-white p-6 translate-x-0 translate-y-0 lg:hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between border-b border-slate-50 pb-2">
              {/* <img
                src=
                alt="OTAS Logo"
                className="h-8 w-auto object-contain"
              /> */}

              <Link to={"/"} onClick={() => setIsOpen(false)}>
                <img
                  src={content.nav.logo}
                  alt="OTAS Logo"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5 text-slate-500" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2 text-center">
            {/* Language Selector */}
            {/* <button className="flex items-center justify-center gap-2 text-[15px] font-bold text-slate-800 py-2 border-b border-slate-50">
              <Globe className="h-4 w-4 text-slate-500" />
              <span className="font-myanmar">{content.nav.language.code}</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button> */}

            {/* Nav Links */}
            {content.nav.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-[15px] font-bold transition-colors py-2 border-b border-slate-50 font-myanmar",
                  isActive(link.href) ? "text-[#007FFF]" : "text-slate-800",
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Button
              asChild
              className="w-full mt-4 bg-[#007FFF] hover:bg-[#0066cc] rounded-xl"
              size="lg"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <span className="text-[15px] text-white font-bold font-myanmar">
                  {content.nav.cta}
                </span>
              </Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.nav>
  );
}
