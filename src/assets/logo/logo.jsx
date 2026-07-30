import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="Apex Bookkeeping Solutions home"
      className="flex items-center gap-3"
    >
      <img
        src={`${import.meta.env.BASE_URL}images/apex-logo.png`}
        alt="Apex Bookkeeping Solutions"
        className="h-12 w-auto object-contain sm:h-14"
      />

      <div className="hidden sm:block">
        <p className="text-lg font-bold leading-tight text-apex-blue">
          Apex Bookkeeping Solutions
        </p>
        <p className="text-xs font-medium tracking-wide text-slate-600">
          Clarity. Accuracy. Confidence.
        </p>
      </div>
    </Link>
  );
}
