import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 shadow-sm">
      <div className="container flex h-20 items-center justify-between">

        <Navigation />

      </div>
    </header>
  );
}
