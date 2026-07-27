export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary:
      "bg-apex-gold text-apex-navy hover:-translate-y-1 hover:shadow-xl",

    secondary:
      "border border-white bg-transparent text-white hover:bg-white hover:text-apex-navy",

    outline:
      "border border-apex-navy bg-transparent text-apex-navy hover:bg-apex-navy hover:text-white",
  };

  return (
    <a
      href={href}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-7
        py-3.5
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </a>
  );
}
