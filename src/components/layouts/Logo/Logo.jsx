import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="select-none"
      aria-label="Apex Bookkeeping Solutions home"
    >
      <div className="leading-tight">
        <div className="text-2xl font-black tracking-wide text-apex-navy">
          APEX
        </div>

        <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
          Bookkeeping Solutions
        </div>
      </div>
    </Link>
  );
}
