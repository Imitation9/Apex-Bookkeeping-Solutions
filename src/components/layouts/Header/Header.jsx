import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Header() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  );
}
