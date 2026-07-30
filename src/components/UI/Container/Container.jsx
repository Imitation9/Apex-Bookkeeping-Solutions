const widths = {
  narrow: "max-w-3xl",
  content: "max-w-5xl",
  default: "max-w-7xl",
  wide: "max-w-[90rem]",
  full: "max-w-none",
};

const paddings = {
  none: "",
  compact: "px-4 sm:px-6",
  default: "px-5 sm:px-6 lg:px-8",
  spacious: "px-6 sm:px-8 lg:px-12",
};

export default function Container({
  children,
  as: Component = "div",
  width = "default",
  padding = "default",
  className = "",
}) {
  const widthClass = widths[width] ?? widths.default;
  const paddingClass = paddings[padding] ?? paddings.default;

  return (
    <Component
      className={[
        "mx-auto w-full",
        widthClass,
        paddingClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Component>
  );
}
