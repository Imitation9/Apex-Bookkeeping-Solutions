import {
  Check,
  Star,
} from "lucide-react";

import Card from "../../UI/Card/Card";

export default function AudienceCard({
  title,
  description,
  items = [],
  icon: Icon,
  featured = false,
}) {
  return (
    <Card
      as="article"
      accent
      className={[
        "group flex h-full flex-col",
        featured
          ? "border-apex-gold/40 ring-1 ring-apex-gold/10"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        {Icon && (
          <div
            className="inline-flex rounded-2xl bg-apex-navy p-4 text-apex-gold-light transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-apex-gold group-hover:text-apex-navy"
            aria-hidden="true"
          >
            <Icon
              size={30}
              strokeWidth={1.8}
            />
          </div>
        )}

        {featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-apex-gold/20 bg-apex-gold/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-apex-gold-dark">
            <Star
              size={13}
              fill="currentColor"
              aria-hidden="true"
            />
            Primary Focus
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-bold text-apex-navy">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      <ul
        className="mt-6 space-y-3"
        aria-label={`${title} services`}
      >
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-6 text-slate-700"
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
    </Card>
  );
}
