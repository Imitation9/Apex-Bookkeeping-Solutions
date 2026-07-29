import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <MobileMenu />
    </header>
  );
}
