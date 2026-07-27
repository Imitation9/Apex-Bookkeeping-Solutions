import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

import Container from "../../ui/Container/Container";

import useScrollPosition from "../../../hooks/useScrollPosition";

export default function Header() {
  const scrolled = useScrollPosition();

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur"
            : "bg-transparent"
        }
      `}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <Navigation />

        <MobileMenu />
      </Container>
    </header>
  );
}
