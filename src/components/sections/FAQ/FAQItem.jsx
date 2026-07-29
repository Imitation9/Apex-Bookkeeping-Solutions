import { useId, useState } from "react";

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="text-base font-semibold text-slate-950 sm:text-lg">
            {question}
          </span>

          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-transform duration-200 ${
              isOpen ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M10 4v12M4 10h12" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={contentId}
        hidden={!isOpen}
        className="border-t border-slate-100 px-5 pb-5 pt-4 sm:px-6 sm:pb-6"
      >
        <p className="leading-7 text-slate-600">{answer}</p>
      </div>
    </article>
  );
}
