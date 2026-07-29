export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-amber-400 text-slate-950 hover:bg-amber-300 focus-visible:outline-amber-400",

    secondary:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 focus-visible:outline-slate-400",

    dark:
      "bg-slate-900 text-white hover:bg-slate-800 focus-visible:outline-slate-900",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
