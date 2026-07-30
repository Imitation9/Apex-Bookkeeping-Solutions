const variants = {
  gold:
    "border-apex-gold/20 bg-apex-gold/10 text-apex-gold",

  navy:
    "border-apex-navy/10 bg-apex-navy/5 text-apex-navy",

  slate:
    "border-slate-200 bg-slate-100 text-slate-700",

  light:
    "border-white/20 bg-white/10 text-white",
};

const sizes = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-1.5 text-sm",
};

export default function Badge({
  children,
  variant = "gold",
  size = "md",
  icon,
  className = "",
}) {
  const variantClass =
    variants[variant] ?? variants.gold;

  const sizeClass = sizes[size] ?? sizes.md;

  return (
    <span
      className={[
        "inline-flex items-center gap-2 rounded-full border",
        "font-semibold leading-none",
        variantClass,
        sizeClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon && (
        <span aria-hidden="true">{icon}</span>
      )}

      {children}
    </span>
  );
}
