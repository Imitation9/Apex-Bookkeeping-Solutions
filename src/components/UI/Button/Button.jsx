const variants = {
  primary:
    "bg-apex-gold text-apex-navy shadow-sm hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg focus-visible:outline-apex-gold",

  navy:
    "bg-apex-navy text-white shadow-sm hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg focus-visible:outline-apex-navy",

  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:-translate-y-0.5 hover:border-apex-gold hover:bg-slate-50 focus-visible:outline-slate-500",

  outline:
    "border border-current bg-transparent text-apex-navy hover:-translate-y-0.5 hover:bg-apex-navy hover:text-white focus-visible:outline-apex-navy",

  ghost:
    "bg-transparent text-apex-navy hover:bg-slate-100 focus-visible:outline-apex-navy",

  light:
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white hover:text-apex-navy focus-visible:outline-white",
};

const sizes = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-6 py-3 text-base",
  lg: "min-h-14 px-7 py-3.5 text-base sm:px-8",
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
  target,
  rel,
  className = "",
  ...props
}) {
  const variantClass =
    variants[variant] ?? variants.primary;

  const sizeClass = sizes[size] ?? sizes.md;

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold",
    "transition-all duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
    fullWidth ? "w-full" : "",
    variantClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span aria-hidden="true">{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === "right" && (
        <span aria-hidden="true">{icon}</span>
      )}
    </>
  );

  if (href) {
    const safeRel =
      target === "_blank"
        ? rel ?? "noopener noreferrer"
        : rel;

    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
        target={target}
        rel={safeRel}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}
