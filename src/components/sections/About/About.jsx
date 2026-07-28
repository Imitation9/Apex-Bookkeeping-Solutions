import Section from "../../ui/Section/Section";
import Heading from "../../ui/Heading/Heading";
import Credentials from "./Credentials";
import Values from "./Values";

export default function About() {
  return (
    <Section
      id="about"
      className="bg-slate-50"
    >
      <div className="grid gap-16 items-center lg:grid-cols-2">

        <div>

          <Heading
            eyebrow="Why Apex"
            title="Financial Stewardship Built on Experience, Integrity, and Trust."
            subtitle="Apex Bookkeeping Solutions was founded to help organizations gain confidence in their financial information through accurate bookkeeping, dependable reporting, and responsive service."
          />

          <p className="mt-8 text-lg leading-8 text-slate-600">

            With more than twenty-three years managing public funds,
            budgets, grant programs, and financial reporting,
            Robert Young brings a level of financial stewardship that
            extends well beyond traditional bookkeeping.

          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Our primary focus is serving nonprofit organizations,
            while also helping small businesses and startups establish
            organized financial systems that support long-term success.

          </p>

        </div>

        <Credentials />

      </div>

      <Values />

    </Section>
  );
}
