export default function AudienceCard({
  title,
  description,
  items,
  icon,
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg sm:p-7">
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-amber-300"
        aria-hidden="true"
      >
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-950">{title}</h3>

      <p className="mb-5 leading-7 text-slate-600">{description}</p>

      <ul className="mt-auto space-y-3" aria-label={`${title} services`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-700">
            <svg
              className="mt-1 h-4 w-4 shrink-0 text-amber-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 5.293a1 1 0 0 1 .003 1.414l-7.25 7.28a1 1 0 0 1-1.418.002L3.292 9.25a1 1 0 1 1 1.416-1.412l4.038 4.046 6.543-6.588a1 1 0 0 1 1.415-.003Z"
                clipRule="evenodd"
              />
            </svg>

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
