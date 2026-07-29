import useInView from "../../../hooks/useInView";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Component = "div",
}) {
  const { ref, isInView } = useInView();

  const directionClasses = {
    up: "reveal-up",
    down: "reveal-down",
    left: "reveal-left",
    right: "reveal-right",
    none: "",
  };

  return (
    <Component
      ref={ref}
      className={[
        "reveal",
        directionClasses[direction] ?? directionClasses.up,
        isInView ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
