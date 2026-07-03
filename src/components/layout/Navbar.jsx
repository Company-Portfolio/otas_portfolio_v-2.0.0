import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Globe, ChevronDown, X } from "lucide-react";
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
  const location = useLocation();

  const isActive = (href) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "bg-white rounded-b-xl md:rounded-b-2xl transition-all duration-300 px-4 md:px-6 lg:px-8",
            "flex h-16 md:h-20 items-center justify-between",
            scrolled ? "shadow-md border-b border-x border-slate-100/80" : "shadow-sm border-b border-x border-slate-100"
          )}
        >
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={content.nav.logo}
              alt="OTAS Logo"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-6 xl:gap-8">

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <div className="flex items-center gap-1 text-[14px] md:text-[15px] font-semibold text-slate-700 hover:text-primary transition-colors cursor-pointer font-aj11">
                <Globe className="h-4 w-4" />
                <span>{content.nav.language.code}</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </div>

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
              className="hidden lg:flex items-center rounded-xl bg-[#007FFF] hover:bg-[#0066cc] text-white px-5 py-5 transition-colors duration-200 shrink-0"
            >
              <Link to="/contact">
                <span className="text-[14px] md:text-[15px] font-bold font-myanmar">
                  {content.nav.cta}
                </span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden shrink-0 hover:bg-slate-50 rounded-lg"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5 text-slate-700" />
          </Button>
        </div>
      </div>

      {/* Mobile Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between border-b border-slate-50 pb-3">
              <img
                src={content.nav.logo}
                alt="OTAS Logo"
                className="h-8 w-auto object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5 text-slate-500" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2 text-left">
            {/* Language Selector */}
            <button className="flex items-center gap-2 text-[15px] font-bold text-slate-800 py-2 border-b border-slate-50">
              <Globe className="h-4 w-4 text-slate-500" />
              <span className="font-myanmar">{content.nav.language.code}</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

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
            <Button asChild className="w-full mt-4 bg-[#007FFF] hover:bg-[#0066cc] rounded-xl" size="lg">
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