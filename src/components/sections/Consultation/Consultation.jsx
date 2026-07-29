import Section from "../../ui/Section/Section";
import Heading from "../../ui/Heading/Heading";

import ConsultationCard from "./ConsultationCard";
import ContactDetails from "./ContactDetails";

export default function Consultation() {
  return (
    <Section
      id="contact"
      className="bg-gradient-to-br from-[#203A5A] to-[#163047] text-white"
    >
      <Heading
        eyebrow="Schedule Your Consultation"
        title="Let's Build Confidence in Your Financial Records."
        subtitle="Whether you're a nonprofit, a growing small business, or launching a startup, Apex is ready to provide bookkeeping solutions tailored to your organization."
        align="center"
      />

      <div className="mt-20 grid gap-10 lg:grid-cols-2">

        <ConsultationCard />

        <ContactDetails />

      </div>

    </Section>
  );
}
