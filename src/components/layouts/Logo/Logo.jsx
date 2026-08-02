import { Link } from "react-router-dom";

import apexMark from "../../../assets/logo/apex-mark.png";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Apex Bookkeeping Solutions home"
      className="group flex min-w-0 items-center gap-4 rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-4"
    >
      <img
        src={apexMark}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="
          h-14 w-14 shrink-0 object-contain
          transition-all duration-500 ease-out
          group-hover:-translate-y-[2px]
          group-hover:scale-[1.045]
          sm:h-16 sm:w-16
        "
      />

      <div className="min-w-0">
        <p
          className="
            whitespace-nowrap
            pb-0.5
            text-[1.05rem]
            font-semibold
            leading-[1.4]
            tracking-[-0.01em]

            text-apex-navy

            transition-all
            duration-500

            group-hover:bg-gradient-to-r
            group-hover:from-apex-navy
            group-hover:via-apex-gold
            group-hover:to-apex-gold
            group-hover:bg-clip-text
            group-hover:text-transparent

            sm:text-[1.32rem]
          "
        >
          Apex Bookkeeping Solutions
        </p>

        <p
          className="
            mt-1
            hidden
            whitespace-nowrap
            text-xs
            font-medium
            leading-[1.3]
            tracking-[0.045em]
            text-slate-500
            transition-colors
            duration-500
            group-hover:text-slate-600
            sm:block
          "
        >
          Clarity. Accuracy. Confidence.
        </p>
      </div>
    </Link>
  );
}
