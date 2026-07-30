import { useEffect, useState } from "react";

import apexLogo from "../../../assets/logo/apex-logo-compact.svg";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-white/80 backdrop-blur-md",
      ].join(" ")}
    >
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="relative z-50 flex shrink-0 items-center"
          aria-label="Apex Bookkeeping Solutions home"
          onClick={closeMenu}
        >
          <img
            src={apexLogo}
            alt="Apex Bookkeeping Solutions"
            className="h-11 w-auto sm:h-12"
          />
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-apex-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:5013668940"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-apex-navy transition-colors hover:text-apex-gold"
          >
            501.366.8940
          </a>

          <a
            href="https://calendly.com/ryoung4696"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-apex-navy px-5 py-2.5 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-2"
          >
            Free Consultation
          </a>
        </div>

        <button
          type="button"
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-apex-navy shadow-sm transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-2 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          <span
            className={[
              "absolute h-0.5 w-5 bg-current transition duration-300",
              isMenuOpen ? "rotate-45" : "-translate-y-1.5",
            ].join(" ")}
          />

          <span
            className={[
              "absolute h-0.5 w-5 bg-current transition duration-300",
              isMenuOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />

          <span
            className={[
              "absolute h-0.5 w-5 bg-current transition duration-300",
              isMenuOpen ? "-rotate-45" : "translate-y-1.5",
            ].join(" ")}
          />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={[
          "overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden",
          isMenuOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-6"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-base font-semibold text-slate-800 transition-colors hover:bg-slate-100 hover:text-apex-navy"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-4 border-t border-slate-200 pt-5">
            <a
              href="tel:5013668940"
              className="mb-3 flex min-h-11 items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-apex-navy"
            >
              Call 501.366.8940
            </a>

            <a
              href="https://calendly.com/ryoung4696"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="flex min-h-12 items-center justify-center rounded-xl bg-apex-navy px-5 py-3 text-sm font-bold text-white shadow-sm"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
