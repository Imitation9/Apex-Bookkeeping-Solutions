import Section from "../../ui/Section/Section";
import Heading from "../../ui/Heading/Heading";

import ProcessStep from "./ProcessStep";

import { processSteps } from "../../../data/process";

export default function Process() {
  return (
    <Section
      id="process"
      className="bg-slate-50"
    >
      <Heading
        eyebrow="Our Process"
        title="A Simple, Transparent Path to Better Bookkeeping"
        subtitle="We've designed our onboarding process to be straightforward, collaborative, and focused on giving you confidence in your financial records."
        align="center"
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step) => (
          <ProcessStep
            key={step.number}
            {...step}
          />
        ))}
      </div>
    </Section>
  );
}
