import { useEffect, useState } from "react";

import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={[
        "relative sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-apex-gold/25 bg-white/90 backdrop-blur-md",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8",
          isScrolled
            ? "min-h-[80px] py-2"
            : "min-h-[92px] py-2.5",
        ].join(" ")}
      >
        <Logo />
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  );
}
