import Container from "../Container/Container";

const spacings = {
  none: "",
  compact: "py-12 sm:py-16",
  default: "py-20 sm:py-24 lg:py-28",
  spacious: "py-24 sm:py-28 lg:py-36",
};

const backgrounds = {
  transparent: "",
  white: "bg-white",
  mist: "bg-slate-50",
  soft: "bg-slate-100/70",
  navy: "bg-apex-navy text-white",
  dark: "bg-slate-950 text-white",
};

export default function Section({
  id,
  children,
  as: Component = "section",
  spacing = "default",
  background = "transparent",
  width = "default",
  container = true,
  divider = false,
  className = "",
  containerClassName = "",
  ...props
}) {
  const spacingClass = spacings[spacing] ?? spacings.default;
  const backgroundClass =
    backgrounds[background] ?? backgrounds.transparent;

  const sectionClasses = [
    "relative",
    spacingClass,
    backgroundClass,
    divider ? "border-y border-slate-200/80" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      id={id}
      className={sectionClasses}
      {...props}
    >
      {container ? (
        <Container
          width={width}
          className={containerClassName}
        >
          {children}
        </Container>
      ) : (
        children
      )}
    </Component>
  );
}
