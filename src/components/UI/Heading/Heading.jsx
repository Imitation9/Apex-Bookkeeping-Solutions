const alignments = {
  left: "text-left",
  center: "mx-auto text-center",
  right: "ml-auto text-right",
};

const sizes = {
  sm: "text-3xl sm:text-4xl",
  md: "text-4xl sm:text-5xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl",
  hero:
    "text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] xl:leading-[1.02]",
};

const tones = {
  default: {
    title: "text-apex-navy",
    subtitle: "text-slate-600",
  },
  light: {
    title: "text-white",
    subtitle: "text-slate-300",
  },
};

export default function Heading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "md",
  tone = "default",
  as: TitleTag = "h2",
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}) {
  const alignmentClass =
    alignments[align] ?? alignments.left;

  const sizeClass = sizes[size] ?? sizes.md;
  const toneClasses = tones[tone] ?? tones.default;

  return (
    <div
      className={[
        "max-w-4xl",
        alignmentClass,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-apex-gold">
          {eyebrow}
        </p>
      )}

      <TitleTag
        className={[
          "font-bold tracking-[-0.035em] text-balance",
          sizeClass,
          toneClasses.title,
          titleClassName,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </TitleTag>

      {subtitle && (
        <p
          className={[
            "mt-6 max-w-3xl text-lg leading-8 sm:text-xl",
            align === "center" ? "mx-auto" : "",
            toneClasses.subtitle,
            subtitleClassName,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
