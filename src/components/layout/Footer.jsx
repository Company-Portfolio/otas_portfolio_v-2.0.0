import { Link, useLocation } from "react-router-dom"
import { content } from "@/data/content"

export function Footer() {
  const location = useLocation();
  const isActive = (href) => location.pathname === href;

  const handleLinkClick = (e, href) => {
    if (isActive(href)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-[var(--container-px)] sm:px-[var(--container-px-sm)] lg:px-[var(--container-px-lg)]">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 pb-12">

          <div className="md:col-span-6 space-y-5">
            <h2 className="font-aj11 xl:text-[64px] md:text-[40px] text-primary leading-tight">
              {content.footer.cta}
            </h2>

            <div className="space-y-2 pt-2">
              <a
                href={`mailto:${content.footer.contact.email}`}
                className="block font-sans text-xl xl:text-[32px] md:text-2xl text-primary font-semibold"
              >
                {content.footer.contact.email}
              </a>

              <div className="w-[85%] md:w-[420px] h-[1px] bg-zinc-400 my-4"></div>

              <a
                href={`tel:${content.footer.contact.phone}`}
                className="block font-sans text-xl xl:text-[32px] md:text-2xl text-primary font-semibold"
              >
                {content.footer.contact.phone}
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {/* Facebook Icon */}
              <a
                href={content.footer.social[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-700 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* LinkedIn Icon */}
              <a
                href={content.footer.social[1]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-800 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Twitter Icon */}
              <a
                href={content.footer.social[2]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-400 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-aj11 text-xl font-bold text-gray-950 mb-6">
              {content.footer.linkHeader[0].title1}
            </h3>
            <ul className="space-y-4">
              {content.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-aj11 text-sm md:text-base transition-colors duration-150 ${isActive(link.href)
                      ? "text-primary font-semibold"
                      : "text-gray-500 hover:text-primary"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-aj11 text-xl font-bold text-gray-950 mb-6">
              {content.footer.linkHeader[1].title2}
            </h3>
            <p className="font-sans text-sm md:text-base font-semibold text-gray-900 leading-relaxed max-w-[260px]">
              {content.footer.address}
            </p>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex justify-end">
          <p className="font-sans text-xs md:text-sm font-medium text-gray-900">
            © 2026 otastechsolutions.com, All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  )
}