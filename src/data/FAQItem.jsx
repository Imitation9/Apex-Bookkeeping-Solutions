import { useState } from "react";

export default function FAQItem({
  question,
  answer,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-semibold">
          {question}
        </span>

        <span className="text-2xl">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6">
          <p className="leading-8 text-slate-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
