const variants = {
  default:
    "border-slate-200 bg-white shadow-sm",

  elevated:
    "border-slate-200/80 bg-white shadow-xl shadow-slate-900/5",

  soft:
    "border-slate-200/70 bg-slate-50",

  navy:
    "border-white/10 bg-apex-navy text-white shadow-xl",

  glass:
    "border-white/20 bg-white/80 shadow-xl backdrop-blur-xl",
};

const paddings = {
  none: "",
  sm: "p-5 sm:p-6",
  md: "p-6 sm:p-8",
  lg: "p-8 sm:p-10",
};

export default function Card({
  children,
  as: Component = "div",
  variant = "default",
  padding = "md",
  hover = true,
  accent = false,
  className = "",
  ...props
}) {
  const variantClass =
    variants[variant] ?? variants.default;

  const paddingClass =
    paddings[padding] ?? paddings.md;

  return (
    <Component
      className={[
        "relative overflow-hidden rounded-3xl border",
        "transition duration-300",
        variantClass,
        paddingClass,
        hover
          ? "hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {accent && (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-apex-gold"
        />
      )}

      {children}
    </Component>
  );
}
