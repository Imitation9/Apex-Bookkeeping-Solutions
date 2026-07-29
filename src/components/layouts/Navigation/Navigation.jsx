import Button from "../../UI/Button/Button";
import { navigation } from "../../../config/navigation";

export default function Navigation() {
  return (
    <nav
      className="hidden items-center gap-8 lg:flex"
      aria-label="Primary navigation"
    >
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="font-medium text-slate-700 transition-colors hover:text-apex-blue"
        >
          {item.label}
        </a>
      ))}

      <Button href="#contact">
        Free Consultation
      </Button>
    </nav>
  );
}
