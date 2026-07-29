import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What types of clients does Apex Bookkeeping Solutions serve?",
    answer:
      "Apex primarily serves nonprofit organizations, while also supporting startups, small businesses, and professional service firms. Services are tailored to the size, structure, reporting needs, and stage of each organization.",
  },
  {
    question: "Do you work exclusively with QuickBooks Online?",
    answer:
      "QuickBooks Online is the primary platform used by Apex because it supports efficient collaboration, reliable reporting, and scalable bookkeeping workflows. During the initial consultation, we can review your current system and determine the best path forward.",
  },
  {
    question: "Can you clean up inaccurate or overdue bookkeeping records?",
    answer:
      "Yes. Cleanup services may include categorizing transactions, reconciling accounts, correcting prior entries, separating business and personal activity, reviewing payroll or sales tax activity, and organizing records so ongoing bookkeeping can begin from a dependable foundation.",
  },
  {
    question: "What is included in monthly bookkeeping services?",
    answer:
      "Monthly services may include transaction categorization, bank and credit card reconciliations, accounts payable and receivable support, payroll-related bookkeeping, financial statement preparation, management reporting, and ongoing review. The exact scope is defined in your service agreement.",
  },
  {
    question: "Do you provide payroll and 1099 support?",
    answer:
      "Yes. Apex can assist with payroll-related bookkeeping, payroll account reconciliation, contractor tracking, and 1099 preparation and filing support, depending on the needs of your organization and the services selected.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is based on the complexity of your books, transaction volume, number of accounts, reporting requirements, cleanup needs, payroll activity, and the level of ongoing support required. After the discovery process, you will receive a clearly defined proposal before work begins.",
  },
  {
    question: "Can Apex help nonprofits with fund and grant tracking?",
    answer:
      "Yes. Nonprofit support can include fund and grant tracking, budget-to-actual reporting, program-level reporting, restricted and unrestricted activity review, and board-ready financial information designed to strengthen accountability and stewardship.",
  },
  {
    question: "How do we get started?",
    answer:
      "The first step is a complimentary consultation. We will discuss your current bookkeeping, priorities, challenges, and desired outcomes. From there, Apex will recommend an appropriate service plan and explain the next steps.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
            Frequently Asked Questions
          </p>

          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Clear answers before we get started
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Learn more about our services, process, and the types of
            organizations we support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-900 px-6 py-8 text-center shadow-lg sm:px-10">
          <h3 className="text-2xl font-bold text-white">
            Still have questions?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
            Schedule a complimentary consultation to discuss your bookkeeping
            needs and determine whether Apex is the right fit for your
            organization.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
