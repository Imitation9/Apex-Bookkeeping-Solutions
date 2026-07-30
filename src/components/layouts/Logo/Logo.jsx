import { Link } from "react-router-dom";

import apexLogo from "../../../assets/logo/apex-logo-compact.svg";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Apex Bookkeeping Solutions home"
      className="group flex min-w-0 shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-4"
    >
      <img
        src={apexLogo}
        alt="Apex Bookkeeping Solutions"
        className="h-12 w-auto max-w-[230px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-14 sm:max-w-[280px]"
      />
    </Link>
  );
}
