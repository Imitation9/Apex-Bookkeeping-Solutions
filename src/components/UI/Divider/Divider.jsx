export default function Divider({
  width = "md",
  centered = false,
  className = "",
}) {
  const widths = {
    sm: "w-16",
    md: "w-24",
    lg: "w-40",
    xl: "w-64",
    full: "w-full",
  };

  return (
    <div
      className={[
        "h-px bg-gradient-to-r from-transparent via-apex-gold/70 to-transparent",
        widths[width] ?? widths.md,
        centered ? "mx-auto" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
