export default function Heading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}) {
  const alignment = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <div className={`${alignment[align]} max-w-3xl`}>
      {eyebrow && (
        <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-apex-gold">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-apex-navy lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
