import AudienceCard from "./AudienceCard";

const audiences = [
  {
    title: "Nonprofit Organizations",
    description:
      "Clear, accountable financial records that support responsible stewardship, grant compliance, and confident board oversight.",
    items: [
      "Fund and grant tracking",
      "Board-ready financial reports",
      "Budget monitoring",
      "Donor and program accountability",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M5 21V9m14 12V9M4 9h16L12 3 4 9Zm4 4v4m4-4v4m4-4v4"
        />
      </svg>
    ),
  },
  {
    title: "Small Businesses",
    description:
      "Dependable bookkeeping and financial reporting that give owners a clearer picture of performance, cash flow, and priorities.",
    items: [
      "Monthly bookkeeping",
      "Accounts payable and receivable",
      "Payroll support",
      "Financial statement preparation",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21h18M6 21V7h12v14M9 10h2m2 0h2m-6 4h2m2 0h2m-6 4h6M8 7V4h8v3"
        />
      </svg>
    ),
  },
  {
    title: "Startups",
    description:
      "A strong financial foundation from the beginning, with organized systems designed to support informed decisions and sustainable growth.",
    items: [
      "QuickBooks Online setup",
      "Chart of accounts design",
      "Budget development",
      "Bookkeeping workflows and controls",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.5 4.5c2.8-1.5 5-1.5 5-1.5s0 2.2-1.5 5l-4.2 7.1-4.9-4.9 5.6-5.7ZM8.9 10.2 5.4 11.3 3 13.7l5.2.1m5.6 2L13.7 21l2.4-2.4 1.1-3.5M9 17l-2 2m3-1-3 3"
        />
      </svg>
    ),
  },
  {
    title: "Professional Services",
    description:
      "Streamlined bookkeeping for consultants, agencies, and other service-based firms that need accurate records without unnecessary complexity.",
    items: [
      "Income and expense tracking",
      "Client and project reporting",
      "Monthly reconciliations",
      "Management-ready financial reports",
    ],
    icon: (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 7V5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V7m-10 0h14a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a2 2 0 0 1 2-2Zm-2 5h18M10 12v2h4v-2"
        />
      </svg>
    ),
  },
];

export default function Audiences() {
  return (
    <section
      id="who-we-serve"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
      aria-labelledby="audiences-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
            Who We Serve
          </p>

          <h2
            id="audiences-heading"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Bookkeeping built around your organization
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Apex Bookkeeping Solutions provides tailored financial support for
            organizations that value accuracy, transparency, and dependable
            reporting.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((audience) => (
            <AudienceCard key={audience.title} {...audience} />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-2xl bg-slate-900 px-6 py-8 text-center shadow-lg sm:px-10">
          <p className="text-lg leading-8 text-slate-100">
            Whether you are launching a new venture, managing a growing
            nonprofit, or leading an established business, Apex delivers
            dependable financial support that helps you make decisions with
            confidence.
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
