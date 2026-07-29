export default function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}) {
  return (
    <li className="relative flex gap-5 sm:gap-7">
      {!isLast && (
        <span
          className="absolute left-6 top-14 h-[calc(100%-2rem)] w-px bg-slate-200 sm:left-7"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-amber-300 shadow-md sm:h-14 sm:w-14">
        {number}
      </div>

      <div className="pb-10 sm:pb-12">
        <h3 className="mb-2 text-xl font-bold text-slate-950 sm:text-2xl">
          {title}
        </h3>

        <p className="max-w-2xl leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </li>
  );
}
