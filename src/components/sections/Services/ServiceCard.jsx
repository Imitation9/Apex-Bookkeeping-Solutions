import Card from "../../UI/Card/Card";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
}) {
  return (
    <Card
      as="article"
      accent
      className="group h-full"
    >
      {Icon && (
        <div className="mb-6 inline-flex rounded-2xl bg-apex-gold/10 p-4 text-apex-gold transition duration-300 group-hover:bg-apex-gold group-hover:text-apex-navy">
          <Icon
            size={32}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-apex-navy">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-6 text-slate-700"
            >
              <span
                className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
