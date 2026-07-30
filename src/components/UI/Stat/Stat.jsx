import AnimatedNumber from "../AnimatedNumber/AnimatedNumber";

export default function Stat({
  value,
  label,
  description,
  prefix = "",
  suffix = "",
  decimals = 0,
  delay = 0,
  className = "",
}) {
  return (
    <div
      className={[
        "relative",
        "border-l-2 border-apex-gold",
        "pl-5 sm:pl-6",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="font-serif text-4xl font-bold tracking-tight text-apex-navy sm:text-5xl">
        <AnimatedNumber
          value={value}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          delay={delay}
        />
      </div>

      <p className="mt-2 font-semibold text-slate-900">
        {label}
      </p>

      {description && (
        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
