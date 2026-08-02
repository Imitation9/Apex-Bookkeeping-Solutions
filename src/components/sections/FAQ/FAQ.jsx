import {
  CalendarDays,
  MessageCircleQuestion,
} from "lucide-react";

import Heading from "../../UI/Heading/Heading";
import Reveal from "../../UI/Reveal/Reveal";
import Section from "../../UI/Section/Section";

import { SITE } from "../../../config/site";

import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "What types of clients does Apex Bookkeeping Solutions serve?",
    answer:
      "Apex primarily serves nonprofit organizations while also supporting startups, small businesses, and professional service firms. Services are tailored to each organization’s size, structure, reporting requirements, and stage of development.",
  },
  {
    question: "Do you work exclusively with QuickBooks Online?",
    answer:
      "QuickBooks Online is the primary platform used by Apex because it supports efficient collaboration, dependable reporting, and scalable bookkeeping workflows. During the initial consultation, we can review your current system and determine the most appropriate path forward.",
  },
  {
    question: "Can you clean up inaccurate or overdue bookkeeping records?",
    answer:
      "Yes. Cleanup services may include categorizing transactions, reconciling accounts, correcting prior entries, separating business and personal activity, reviewing payroll or sales-tax activity, and organizing records so ongoing bookkeeping can begin from a dependable foundation.",
  },
  {
    question: "What is included in monthly bookkeeping services?",
    answer:
      "Monthly services may include transaction categorization, bank and credit-card reconciliations, accounts payable and receivable support, payroll-related bookkeeping, financial-statement preparation, management reporting, and ongoing review. Your exact scope of services will be clearly documented in the engagement agreement.",
  },
  {
    question: "Do you provide payroll and 1099 support?",
    answer:
      "Yes. Apex can assist with payroll-related bookkeeping, payroll-account reconciliation, contractor tracking, and 1099 preparation and filing support, depending on your organization’s needs and the services selected.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is based on factors such as transaction volume, number of accounts, reporting requirements, current condition of the books, payroll activity, cleanup needs, and the level of ongoing support required. After the discovery process, you will receive a clearly defined proposal before work begins.",
  },
  {
    question: "Can Apex help nonprofits with fund and grant tracking?",
    answer:
      "Yes. Nonprofit support can include fund and grant tracking, budget-to-actual reporting, program-level reporting, review of restricted and unrestricted activity, and board-ready financial information designed to strengthen accountability and stewardship.",
  },
  {
    question: "Can Apex work with clients remotely?",
    answer:
      "Yes. Apex is based in North Little Rock and serves clients throughout Arkansas, while secure cloud-based tools also make it possible to support organizations remotely across the United States.",
  },
  {
    question: "How do we get started?",
    answer:
      "The first step is a complimentary consultation. We will discuss your current bookkeeping, priorities, challenges, and desired outcomes. From there, Apex will recommend an appropriate service plan and explain the next steps.",
  },
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      background="mist"
      spacing="spacious"
      className="relative isolate overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div
        className="pointer-events-none absolute -left-28 top-20 -z-10 h-72 w-72 rounded-full bg-apex-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-28 bottom-12 -z-10 h-80 w-80 rounded-full bg-apex-blue-light/40 blur-3xl"
        aria-hidden="true"
      />

      <Reveal animation="up">
        <div className="mx-auto max-w-3xl">
          <Heading
            eyebrow="Frequently Asked Questions"
            title="Clear answers before we get started"
            subtitle="Learn more about Apex services, pricing, technology, client relationships, and the organizations we support."
            align="center"
          />
        </div>
      </Reveal>

      <div className="mx-auto mt-14 max-w-5xl space-y-4">
        {faqs.map((faq, index) => (
          <Reveal
            key={faq.question}
            animation="up"
            delay={Math.min(index * 55, 280)}
          >
            <FAQItem {...faq} />
          </Reveal>
        ))}
      </div>

      <Reveal animation="up" delay={180}>
        <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl bg-apex-navy px-6 py-10 text-center shadow-2xl shadow-slate-900/10 sm:px-10 lg:px-16">
          <div
            className="pointer-events-none absolute -left-16 top-0 h-52 w-52 rounded-full bg-apex-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <span className="mx-auto inline-flex rounded-2xl bg-white/10 p-4 text-apex-gold-light">
              <MessageCircleQuestion
                size={30}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Still have questions?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Schedule a complimentary consultation to discuss your
              bookkeeping needs and determine whether Apex is the right fit
              for your organization.
            </p>

            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-apex-gold px-7 py-3 text-center font-bold text-apex-navy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-apex-navy"
            >
              <CalendarDays
                size={19}
                strokeWidth={1.9}
                aria-hidden="true"
              />

              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
