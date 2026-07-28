import Heading from "../../ui/Heading/Heading";
import Section from "../../ui/Section/Section";

import ServiceCard from "./ServiceCard";

import { services } from "../../../data/services";

export default function Services() {
  return (
    <Section id="services">

      <Heading
        eyebrow="Services"
        title="Professional Bookkeeping Services Built Around Your Success"
        subtitle="Whether you lead a nonprofit, manage a growing small business, or are launching a startup, Apex provides accurate financial records, dependable reporting, and the confidence to make informed decisions."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}

      </div>

    </Section>
  );
}
