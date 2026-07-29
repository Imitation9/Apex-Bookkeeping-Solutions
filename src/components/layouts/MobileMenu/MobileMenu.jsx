import { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../../config/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="relative z-[60] rounded-lg p-2 transition hover:bg-slate-100"
      >
        {isOpen ? (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full z-[60] border-t border-slate-200 bg-white px-6 py-6 shadow-xl"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5">
            <Link
              to="/"
              onClick={closeMenu}
              className="font-medium text-slate-700 transition-colors hover:text-apex-blue"
            >
              Home
            </Link>

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="font-medium text-slate-700 transition-colors hover:text-apex-blue"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#consultation"
              onClick={closeMenu}
              className="mt-2 inline-flex justify-center rounded-lg bg-apex-blue px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Free Consultation
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}
