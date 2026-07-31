import Heading from "../../UI/Heading/Heading";
import Reveal from "../../UI/Reveal/Reveal";
import Section from "../../UI/Section/Section";

import ServiceCard from "./ServiceCard";
import SpecializedServices from "./SpecializedServices";

import { services } from "./services";

export default function Services() {
  return (
    <Section
      id="services"
      background="white"
      spacing="spacious"
    >
      <Reveal animation="up">
        <Heading
          eyebrow="Our Services"
          title="Professional bookkeeping built around your organization"
          subtitle="Apex provides dependable bookkeeping, QuickBooks support, cleanup, reporting, and financial guidance tailored to nonprofits, small businesses, and startups."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            animation="up"
            delay={index * 70}
            className="h-full"
          >
            <ServiceCard {...service} />
          </Reveal>
        ))}
      </div>

      <SpecializedServices />
    </Section>
  );
}
