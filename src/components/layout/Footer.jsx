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
                href={`tel:${content.footer.contact.phone}`}
                className="block font-sans text-xl xl:text-[32px] md:text-2xl text-primary font-semibold"
              >
                {content.footer.contact.phone}
              </a>
              <div className="w-[85%] md:w-[420px] h-[1px] bg-zinc-400 my-4"></div>
              <a
                href={`mailto:${content.footer.contact.email}`}
                className="block font-sans text-xl xl:text-[32px] md:text-2xl text-primary font-semibold"
              >
                {content.footer.contact.email}
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
              {/* Viber Icon */}
              <a
                href={content.footer.social[2]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-85 transition-opacity"
              >
                <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="7.03297" fill="#7360F2" />
                  <g clipPath="url(#clip0_470_83)">
                    <path d="M24.3334 7.45036C23.7791 6.93895 21.5393 5.313 16.5504 5.29091C16.5504 5.29091 10.6671 4.93614 7.79911 7.56683C6.20262 9.16366 5.641 11.5002 5.58176 14.3969C5.52252 17.2937 5.44587 22.7225 10.6788 24.1945H10.6838L10.6805 26.4406C10.6805 26.4406 10.647 27.35 11.2458 27.5354C11.9701 27.7603 12.3951 27.0692 13.0866 26.3241C13.4662 25.9151 13.9903 25.3144 14.3852 24.8552C17.9641 25.1564 20.7166 24.4679 21.0293 24.3662C21.7519 24.1319 25.8408 23.6081 26.5059 18.1797C27.1923 12.5846 26.1738 9.04552 24.3334 7.45036ZM24.9398 17.7784C24.3785 22.3108 21.0621 22.5956 20.4506 22.7918C20.1905 22.8754 17.773 23.4769 14.733 23.2784C14.733 23.2784 12.4678 26.0112 11.7602 26.7217C11.6498 26.8329 11.5199 26.8777 11.4332 26.8556C11.3114 26.8258 11.2779 26.6816 11.2793 26.4707C11.2813 26.1695 11.2987 22.7382 11.2987 22.7382C6.87201 21.5092 7.13006 16.8887 7.18026 14.4692C7.23046 12.0497 7.68498 10.0677 9.03514 8.73458C11.461 6.53731 16.4583 6.86565 16.4583 6.86565C20.6785 6.88406 22.7007 8.15489 23.1696 8.58062C24.7266 9.91371 25.5198 13.1037 24.9398 17.777V17.7784Z" fill="white" />
                    <path d="M18.604 14.2703C18.5491 13.1638 17.987 12.5826 16.9178 12.5269" stroke="white" strokeWidth="0.564295" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.0516 14.7556C20.0739 13.7247 19.7686 12.8634 19.1356 12.1717C18.4996 11.4776 17.6194 11.0954 16.4898 11.0127" stroke="white" strokeWidth="0.564295" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.5336 15.3355C21.52 13.5467 20.9855 12.1378 19.9301 11.109C18.8747 10.0801 17.5621 9.56025 15.9924 9.54932" stroke="white" strokeWidth="0.564295" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.9737 18.0491C16.9737 18.0491 17.3704 18.0826 17.5839 17.8195L18.0003 17.2957C18.2011 17.036 18.6857 16.8703 19.1603 17.1348C19.516 17.3376 19.8612 17.5581 20.1948 17.7954C20.5098 18.0271 21.1547 18.5652 21.1568 18.5652C21.464 18.8246 21.535 19.2055 21.3258 19.6071C21.3258 19.6095 21.3241 19.6135 21.3241 19.6155C21.0937 20.0149 20.8012 20.3751 20.4576 20.6825C20.4536 20.6845 20.4536 20.6865 20.4499 20.6885C20.1513 20.938 19.858 21.0798 19.57 21.1139C19.5276 21.1214 19.4845 21.1241 19.4414 21.122C19.3144 21.1232 19.188 21.1038 19.0673 21.0644L19.0579 21.0507C18.6141 20.9255 17.8731 20.6122 16.639 19.9315C15.9249 19.5422 15.2451 19.0931 14.6068 18.589C14.2868 18.3365 13.9817 18.0658 13.6927 17.7784L13.6619 17.7476L13.6311 17.7168L13.6004 17.6857C13.59 17.6756 13.5799 17.6652 13.5696 17.6549C13.2821 17.3659 13.0114 17.0608 12.7589 16.7408C12.255 16.1026 11.8059 15.4228 11.4165 14.7089C10.7357 13.4745 10.4224 12.7342 10.2973 12.2897L10.2835 12.2803C10.2443 12.1595 10.225 12.0332 10.2263 11.9062C10.224 11.8632 10.2265 11.82 10.234 11.7776C10.2699 11.4902 10.4119 11.1968 10.6601 10.8974C10.6621 10.8937 10.6641 10.8937 10.6661 10.8897C10.9734 10.5461 11.3336 10.2537 11.7331 10.0235C11.7351 10.0235 11.7391 10.0215 11.7415 10.0215C12.1431 9.81231 12.524 9.88326 12.783 10.1888C12.785 10.1908 13.3222 10.8358 13.5528 11.1507C13.7902 11.4847 14.0107 11.8303 14.2135 12.1863C14.4779 12.6606 14.3123 13.1462 14.0525 13.3463L13.5287 13.7627C13.2643 13.9762 13.2991 14.3729 13.2991 14.3729C13.2991 14.3729 14.075 17.3091 16.9737 18.0491Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_470_83">
                      <rect width="21.1524" height="22.3051" fill="white" transform="translate(5.56866 5.2749)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-aj11 text-[20px] md:text-[24px] text-gray-950 mb-6">
              {content.footer.linkHeader[0].title1}
            </h3>
            <ul className="space-y-4">
              {content.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-aj11 text-sm md:text-[16px] transition-colors duration-150 ${isActive(link.href)
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
            <h3 className="font-aj11 text-[20px] md:text-[24px] text-gray-950 mb-6">
              {content.footer.linkHeader[1].title2}
            </h3>
            <p className="font-sans text-sm md:text-base font-medium font-PoppinsLocal text-gray-900 leading-relaxed max-w-[260px]">
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