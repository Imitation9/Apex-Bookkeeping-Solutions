import Heading from "../../UI/Heading/Heading";
import Reveal from "../../UI/Reveal/Reveal";
import Section from "../../UI/Section/Section";

import ConsultationCard from "./ConsultationCard";
import ContactDetails from "./ContactDetails";
import DirectContact from "./DirectContact";

export default function Consultation() {
  return (
    <Section
      id="consultation"
      className="relative overflow-hidden bg-apex-navy"
    >
      <div
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-white/5 blur-3xl"
        aria-hidden="true"
      />

      <Reveal animation="up">
        <Heading
          eyebrow="Schedule Your Consultation"
          title="Let's build confidence in your financial records."
          subtitle="Whether you're a nonprofit, a growing small business, or launching a startup, Apex is ready to provide bookkeeping solutions tailored to your organization."
          align="center"
          tone="light"
          size="lg"
        />
      </Reveal>

      <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-2">
        <Reveal animation="left" className="h-full">
          <ConsultationCard />
        </Reveal>

        <Reveal animation="right" delay={100} className="h-full">
          <ContactDetails />
        </Reveal>
      </div>

      <Reveal animation="up" delay={150} className="mt-10">
        <DirectContact />
      </Reveal>
    </Section>
  );
}
