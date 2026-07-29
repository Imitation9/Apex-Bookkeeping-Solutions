import ProcessStep from "./ProcessStep";

const steps = [
  {
    number: "01",
    title: "Discovery and assessment",
    description:
      "We begin with a conversation about your organization, current bookkeeping process, priorities, and challenges. This helps us understand what is working, what needs attention, and where Apex can provide the greatest value.",
  },
  {
    number: "02",
    title: "Customized service plan",
    description:
      "You receive a clearly defined scope of work tailored to your needs. The plan may include bookkeeping, cleanup, QuickBooks setup, payroll support, reporting, budgeting, or other agreed-upon services.",
  },
  {
    number: "03",
    title: "Setup, cleanup, and transition",
    description:
      "We organize your records, resolve outstanding issues, establish efficient workflows, and make sure your QuickBooks environment is configured to support accurate and consistent financial management.",
  },
  {
    number: "04",
    title: "Ongoing bookkeeping and reporting",
    description:
      "Transactions are categorized, accounts are reconciled, records are reviewed, and reports are prepared on an agreed schedule so you always have reliable information available.",
  },
  {
    number: "05",
    title: "Review and continuous improvement",
    description:
      "We stay attentive to changing needs, answer questions, and refine processes as your organization grows. The goal is dependable financial clarity, not simply completed tasks.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
            Our Process
          </p>

          <h2
            id="process-heading"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            A clear path to dependable financial records
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Our process is designed to make bookkeeping straightforward,
            organized, and transparent from the first conversation through
            ongoing monthly support.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="font-semibold text-slate-950">
              Clear expectations. Consistent communication. Reliable results.
            </p>

            <p className="mt-2 leading-7 text-slate-600">
              You will know what is being done, what information is needed, and
              what to expect next.
            </p>
          </div>
        </div>

        <ol>
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              {...step}
              isLast={index === steps.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
