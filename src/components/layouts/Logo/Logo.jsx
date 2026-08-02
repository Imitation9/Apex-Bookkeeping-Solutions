import { Link } from "react-router-dom";

import apexMark from "../../../assets/logo/apex-mark.png";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Apex Bookkeeping Solutions home"
      className="group flex min-w-0 items-center gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-4"
    >
      <img
        src={apexMark}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="h-12 w-12 shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.04] sm:h-[3.75rem] sm:w-[3.75rem]"
      />

      <div className="min-w-0">
        <p className="truncate text-[1.05rem] font-bold leading-[1.15] tracking-[-0.015em] text-apex-navy sm:text-xl">
          Apex Bookkeeping Solutions
        </p>

        <p className="mt-1 hidden text-xs font-semibold leading-none tracking-[0.035em] text-slate-500 sm:block">
          Clarity. Accuracy. Confidence.
        </p>
      </div>
    </Link>
  );
}
