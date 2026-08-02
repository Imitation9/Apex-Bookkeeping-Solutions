import { Link } from "react-router-dom";

import apexMark from "../../../assets/logo/apex-mark.svg";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Apex Bookkeeping Solutions home"
      className="group flex min-w-0 items-center gap-3"
    >
      <img
        src={apexMark}
        alt=""
        aria-hidden="true"
        className="h-12 w-12 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14"
      />

      <div className="min-w-0">
        <p className="truncate text-base font-bold leading-tight text-apex-blue sm:text-lg">
          Apex Bookkeeping Solutions
        </p>

        <p className="hidden text-xs font-semibold tracking-wide text-slate-600 sm:block">
          Clarity. Accuracy. Confidence.
        </p>
      </div>
    </Link>
  );
}
