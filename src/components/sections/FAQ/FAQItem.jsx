import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQItem({
  question,
  answer,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const headingId = useId();

  return (
    <article
      className={[
        "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
        isOpen
          ? "border-apex-gold/50 shadow-lg"
          : "border-slate-200 shadow-sm hover:border-apex-gold/30 hover:shadow-md",
      ].join(" ")}
    >
      <h3 id={headingId}>
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-apex-gold sm:px-7 sm:py-6"
        >
          <span className="text-base font-bold leading-7 text-apex-navy transition-colors duration-300 group-hover:text-apex-blue sm:text-lg">
            {question}
          </span>

          <span
            className={[
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
              isOpen
                ? "rotate-180 border-apex-gold bg-apex-gold text-apex-navy"
                : "border-slate-200 bg-slate-50 text-slate-600 group-hover:border-apex-gold/50 group-hover:text-apex-gold-dark",
            ].join(" ")}
            aria-hidden="true"
          >
            <ChevronDown
              size={20}
              strokeWidth={2}
            />
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        role="region"
        aria-labelledby={headingId}
        className={[
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
            <p className="max-w-4xl leading-8 text-slate-600">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
