import Button from "../../UI/Button/Button";
import { navigation } from "../../../config/navigation";

export default function Navigation() {
  return (
    <nav
      className="hidden items-center gap-1 lg:flex"
      aria-label="Primary navigation"
    >
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-apex-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-2"
        >
          {item.label}
        </a>
      ))}

      <Button
        href="#consultation"
        size="sm"
        className="ml-3 whitespace-nowrap"
      >
        Free Consultation
      </Button>
    </nav>
  );
}
