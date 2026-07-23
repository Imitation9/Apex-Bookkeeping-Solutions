export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-apex-gold text-apex-navy hover:shadow-premium hover:-translate-y-1",

    secondary:
      "border border-white text-white hover:bg-white hover:text-apex-navy",

    outline:
      "border border-apex-navy text-apex-navy hover:bg-apex-navy hover:text-white",
  };

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
