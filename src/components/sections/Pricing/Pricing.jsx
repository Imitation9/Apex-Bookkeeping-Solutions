const nonprofitPackages = [
  {
    name: "Nonprofit Essentials",
    description:
      "For smaller organizations that need dependable monthly financials.",
    price: "Starting around $450/month",
    features: [
      "Monthly reconciliations",
      "Financial statements",
      "Fund tracking",
      "Board-ready reporting",
    ],
  },
  {
    name: "Fund & Grant Management",
    description:
      "For organizations managing grants, restricted funding, or multiple programs.",
    price: "Starting around $750/month",
    featured: true,
    features: [
      "Everything in Nonprofit Essentials",
      "Restricted and unrestricted fund tracking",
      "Grant expenditure tracking",
      "Budget-to-actual reporting",
    ],
  },
  {
    name: "Financial Oversight & Advisory",
    description:
      "For growing organizations needing stronger reporting, controls, and financial guidance.",
    price: "Custom pricing",
    features: [
      "Everything in Fund & Grant Management",
      "Internal-control assessment",
      "Audit-readiness support",
      "Advanced reporting",
      "Leadership and board advisory",
    ],
  },
];

const businessPackages = [
  {
    name: "Essential Books",
    description:
      "For businesses that need clean, reconciled monthly books and reliable financial statements.",
    price: "Starting around $350/month",
    features: [
      "Monthly transaction categorization",
      "Bank and credit card reconciliations",
      "Monthly financial statements",
      "Ongoing QuickBooks support",
    ],
  },
  {
    name: "Growth Bookkeeping",
    description:
      "For businesses with inventory, AP/AR, multiple revenue streams, or greater reporting needs.",
    price: "Starting around $600/month",
    featured: true,
    features: [
      "Everything in Essential Books",
      "Accounts payable and receivable support",
      "Inventory accounting support",
      "Enhanced financial reporting",
    ],
  },
  {
    name: "Financial Advisory",
    description:
      "Separately scoped financial guidance for owners who need deeper insight to support planning and decision-making.",
    price: "Custom pricing",
    features: [
      "Cash-flow forecasting",
      "KPI reporting",
      "Budgeting and forecasting",
      "Management-level financial analysis",
    ],
  },
];

const projectServices = [
  {
    name: "New QuickBooks Setup",
    description:
      "For organizations starting fresh in QuickBooks Online or moving from spreadsheets and manual records.",
    features: [
      "QuickBooks Online company setup",
      "Chart of accounts design",
      "Bank and credit card connections",
      "Opening balances",
      "Classes, funds, and tracking structure as needed",
      "Initial workflow configuration",
    ],
  },
  {
    name: "Conversion & Transition",
    description:
      "For organizations moving from another accounting system or transitioning to a new bookkeeping structure.",
    features: [
      "Existing records review",
      "Conversion and cutoff planning",
      "Chart of accounts mapping",
      "Opening balances and historical data strategy",
      "Account and tracking configuration",
      "Post-conversion review and reconciliation",
    ],
  },
  {
    name: "Cleanup & Catch-Up",
    description:
      "For organizations already using QuickBooks whose books need attention before reliable ongoing bookkeeping can begin.",
    features: [
      "Uncategorized transaction review",
      "Account reconciliation",
      "Chart of accounts cleanup",
      "Balance and classification review",
      "Prior-period catch-up",
      "Preparation for ongoing bookkeeping",
    ],
  },
];

function PricingCard({ pkg }) {
  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300",
        pkg.featured
          ? "border-apex-gold bg-apex-navy text-white shadow-lg lg:-translate-y-2"
          : "border-slate-200 bg-white text-apex-navy shadow-sm hover:-translate-y-1 hover:shadow-md",
      ].join(" ")}
    >
      <h4 className="text-xl font-bold">
        {pkg.name}
      </h4>

      <p
        className={[
          "mt-3 text-sm leading-6",
          pkg.featured ? "text-slate-200" : "text-slate-600",
        ].join(" ")}
      >
        {pkg.description}
      </p>

      <p
        className={[
          "mt-6 text-xl font-bold",
          pkg.featured ? "text-apex-gold" : "text-apex-navy",
        ].join(" ")}
      >
        {pkg.price}
      </p>

      <div
        className={[
          "my-6 h-px",
          pkg.featured ? "bg-white/15" : "bg-slate-200",
        ].join(" ")}
      />

      <ul className="flex-1 space-y-3">
        {pkg.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-sm leading-5"
          >
            <span
              aria-hidden="true"
              className={[
                "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                pkg.featured
                  ? "bg-apex-gold text-apex-navy"
                  : "bg-[#FFF9EE] text-apex-gold",
              ].join(" ")}
            >
              ✓
            </span>

            <span
              className={
                pkg.featured ? "text-slate-100" : "text-slate-700"
              }
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#consultation"
        className={[
          "mt-8 flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-center text-sm font-bold transition-all duration-300 hover:-translate-y-0.5",
          pkg.featured
            ? "bg-apex-gold text-apex-navy hover:brightness-105"
            : "border border-apex-navy text-apex-navy hover:bg-apex-navy hover:text-white",
        ].join(" ")}
      >
        Schedule a Free Consultation
      </a>
    </article>
  );
}

function PricingGroup({ eyebrow, title, description, packages }) {
  return (
    <div>
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-apex-gold">
          {eyebrow}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-apex-navy sm:text-3xl">
          {title}
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-9 grid gap-6 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PricingCard
            key={pkg.name}
            pkg={pkg}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectServiceCard({ service }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <h4 className="text-xl font-bold text-apex-navy">
        {service.name}
      </h4>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {service.description}
      </p>

      <div className="my-6 h-px bg-slate-200" />

      <ul className="flex-1 space-y-3">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-sm leading-5"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF9EE] text-xs font-bold text-apex-gold"
            >
              ✓
            </span>

            <span className="text-slate-700">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-7 text-lg font-bold text-apex-navy">
        Custom project pricing
      </p>

      <a
        href="#consultation"
        className="mt-5 flex min-h-12 items-center justify-center rounded-xl border border-apex-navy px-5 py-3 text-center text-sm font-bold text-apex-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-apex-navy hover:text-white"
      >
        Discuss Your Project
      </a>
    </article>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#FFF9EE] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-apex-gold">
            Bookkeeping Support
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-apex-navy sm:text-4xl">
            Bookkeeping built around your organization.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Clear starting points for dependable bookkeeping, stronger
            financial reporting, and the level of support your organization
            needs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-20">
          <PricingGroup
            eyebrow="For Nonprofits"
            title="Financial support for mission-driven organizations"
            description="From dependable monthly financials to fund, grant, reporting, and advisory support."
            packages={nonprofitPackages}
          />

          <PricingGroup
            eyebrow="For Small Businesses"
            title="Bookkeeping that can grow with your business"
            description="From clean monthly books to expanded bookkeeping and financial insight for growing businesses."
            packages={businessPackages}
          />

          <div>
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-apex-gold">
                QuickBooks Projects
              </p>

              <h3 className="mt-2 text-2xl font-bold text-apex-navy sm:text-3xl">
                Need help getting your books in order?
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Whether you're starting fresh, moving to QuickBooks Online, or correcting 
                existing books, Apex can help build a stronger accounting foundation.
              </p>
            </div>

            <div className="mt-9 grid gap-6 lg:grid-cols-3">
              {projectServices.map((service) => (
                <ProjectServiceCard
                  key={service.name}
                  service={service}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-apex-gold/40 bg-white/70 px-6 py-6 text-center sm:px-10">
          <p className="font-bold text-apex-navy">
            Every organization is different.
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            Monthly pricing is based on transaction volume, number of accounts,
            reporting requirements, grants or restricted funds, AP/AR needs,
            and overall accounting complexity. Cleanup, catch-up, and initial
            setup work are quoted separately.
          </p>
        </div>
      </div>
    </section>
  );
}
