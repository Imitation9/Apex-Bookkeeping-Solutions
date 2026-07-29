import Section from "../../ui/Section/Section";
import Heading from "../../ui/Heading/Heading";

import FAQItem from "./FAQItem";

import { faqs } from "../../../data/faqs";

export default function FAQ() {
  return (
    <Section
      id="faq"
      className="bg-slate-50"
    >
      <Heading
        eyebrow="Frequently Asked Questions"
        title="Answers to Common Questions"
        subtitle="We believe informed clients make confident decisions. Here are answers to some of the questions we hear most often."
        align="center"
      />

      <div className="mx-auto mt-16 max-w-4xl space-y-6">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.question}
            {...faq}
          />
        ))}
      </div>
    </Section>
  );
}
