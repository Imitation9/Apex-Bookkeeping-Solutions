import { useEffect, useState } from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

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
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/85 backdrop-blur-md",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8",
          isScrolled ? "min-h-[72px]" : "min-h-[82px]",
        ].join(" ")}
      >
        <Logo />
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  );
}
