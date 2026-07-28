import Section from "../../ui/Section/Section";
import Heading from "../../ui/Heading/Heading";

import AudienceCard from "./AudienceCard";

import { audiences } from "../../../data/audiences";

export default function Audiences() {
  return (
    <Section id="industries" className="bg-white">
      <Heading
        eyebrow="Who We Serve"
        title="Bookkeeping Solutions Tailored to Your Organization"
        subtitle="Every organization has unique financial needs. Apex delivers bookkeeping solutions tailored to your mission, business model, and stage of growth."
        align="center"
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {audiences.map((audience) => (
          <AudienceCard
            key={audience.title}
            {...audience}
          />
        ))}
      </div>
    </Section>
  );
}
