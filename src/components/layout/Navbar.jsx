import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 bg-white sm:px-6 lg:px-8 transition-all duration-300",
        scrolled ? "mt-0" : "mt-0",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "font-aj11 flex h-16 md:h-24 items-center justify-between px-4 md:px-6 transition-shadow duration-300",
          )}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img
              src={content.nav.logo}
              alt="OTAS Logo"
              className="h-10 md:h-[72px] w-10 md:w-[72px] object-contain"
            />
          </Link>
          <div className="flex items-center gap-10">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {/* Language Selector */}
              <div className="flex  gap-1.5 text-[18px] font-medium text-foreground hover:text-primary transition-colors">
                <Globe className="h-5 w-5 mb-2" />
                <span>{content.nav.language.code}</span>
                <ChevronDown className="h-4 w-4" />
              </div>

              {/* Nav Links */}
              {content.nav.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-[18px] font-medium transition-colors hover:text-primary",
                    isActive(link.href) ? "text-primary" : "text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}

            <Button
              size="default"
              className="hidden lg:flex items-center rounded-xl px-6 py-8"
            >
              <span className="text-[20px] text-white">{content.nav.cta}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden shrink-0"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <img
                src={content.nav.logo}
                alt="OTAS Logo"
                className="h-10 w-10 object-contain"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-4">
            {/* Language Selector */}
            <button className="flex items-center gap-2 text-[18px] font-medium text-foreground hover:text-primary transition-colors">
              <Globe className="h-4 w-4" />
              <span>{content.nav.language.code}</span>
              <ChevronDown className="h-3 w-3" />
            </button>

            {/* Nav Links */}
            {content.nav.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-[18px] font-medium transition-colors hover:text-primary py-2",
                  isActive(link.href) ? "text-primary" : "text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Button className="w-full mt-4" size="lg">
              <span className="text-[18px] text-white">{content.nav.cta}</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.nav>
  );
}
