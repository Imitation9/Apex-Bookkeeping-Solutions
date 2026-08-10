import { useEffect, useState } from "react";

import { navigation } from "../../../config/navigation";
import { SITE } from "../../../config/site";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-apex-blue shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-2"
      >
        <span className="sr-only">
          {isOpen ? "Close menu" : "Open menu"}
        </span>

        <span
          className={[
            "absolute h-0.5 w-5 bg-current transition duration-300",
            isOpen ? "rotate-45" : "-translate-y-1.5",
          ].join(" ")}
        />

        <span
          className={[
            "absolute h-0.5 w-5 bg-current transition duration-300",
            isOpen ? "opacity-0" : "opacity-100",
          ].join(" ")}
        />

        <span
          className={[
            "absolute h-0.5 w-5 bg-current transition duration-300",
            isOpen ? "-rotate-45" : "translate-y-1.5",
          ].join(" ")}
        />
      </button>

      <div
        id="mobile-navigation"
        className={[
          "absolute inset-x-0 top-full overflow-hidden border-t bg-white shadow-xl transition-all duration-300",
          isOpen
            ? "visible max-h-[700px] border-slate-200 opacity-100"
            : "invisible pointer-events-none max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-6"
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="rounded-lg px-3 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-apex-blue"
          >
            Home
          </a>

          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-apex-blue"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-4 border-t border-slate-200 pt-5">
            <a
              href={SITE.phoneHref}
              onClick={closeMenu}
              className="mb-3 flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-apex-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-apex-gold hover:bg-slate-50"
            >
              Call {SITE.phoneDisplay}
            </a>

            <a
              href={SITE.emailHref}
              onClick={closeMenu}
              className="mb-3 flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-apex-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-apex-gold hover:bg-slate-50"
            >
              Email Robert
            </a>

            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center rounded-xl bg-apex-gold px-5 py-3 text-center text-sm font-bold text-apex-navy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-xl"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
