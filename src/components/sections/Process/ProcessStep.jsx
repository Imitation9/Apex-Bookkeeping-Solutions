import {
  Check,
} from "lucide-react";

export default function ProcessStep({
  icon: Icon,
  number,
  title,
  description,
  items = [],
}) {
  return (
    <article className="group relative grid gap-5 sm:grid-cols-[3.5rem_1fr] sm:gap-7">
      <div className="relative z-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-apex-gold bg-white text-apex-navy shadow-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-apex-gold">
          <Icon
            size={24}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-apex-gold/50 group-hover:shadow-xl sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full bg-apex-gold/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-apex-gold-dark">
            Step {number}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-bold text-apex-navy">
          {title}
        </h3>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          {description}
        </p>

        {items.length > 0 && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-6 text-slate-700"
              >
                <span
                  className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"
                  aria-hidden="true"
                >
                  <Check
                    size={13}
                    strokeWidth={2.4}
                  />
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
