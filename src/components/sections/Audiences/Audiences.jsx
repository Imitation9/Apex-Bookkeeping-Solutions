import {
  BriefcaseBusiness,
  Building2,
  HandCoins,
  Rocket,
} from "lucide-react";

import Heading from "../../UI/Heading/Heading";
import Reveal from "../../UI/Reveal/Reveal";
import Section from "../../UI/Section/Section";

import { SITE } from "../../../config/site";

import AudienceCard from "./AudienceCard";

const audiences = [
  {
    title: "Nonprofit Organizations",
    description:
      "Clear, accountable financial records that support responsible stewardship, grant compliance, and confident board oversight.",
    items: [
      "Fund and grant tracking",
      "Board-ready financial reports",
      "Budget monitoring",
      "Donor and program accountability",
    ],
    icon: HandCoins,
    featured: true,
  },
  {
    title: "Small Businesses",
    description:
      "Dependable bookkeeping and reporting that give owners a clearer view of performance, cash flow, and financial priorities.",
    items: [
      "Monthly bookkeeping",
      "Accounts payable and receivable",
      "Payroll support",
      "Management-ready reporting",
    ],
    icon: Building2,
  },
  {
    title: "Startups",
    description:
      "A strong financial foundation from the beginning, with organized systems designed to support informed decisions and sustainable growth.",
    items: [
      "QuickBooks Online setup",
      "Chart of accounts design",
      "Budget development",
      "Bookkeeping workflows and controls",
    ],
    icon: Rocket,
  },
  {
    title: "Professional Services",
    description:
      "Streamlined bookkeeping for consultants, agencies, and service-based firms that need accurate records without unnecessary complexity.",
    items: [
      "Income and expense tracking",
      "Client and project reporting",
      "Monthly reconciliations",
      "Financial performance reporting",
    ],
    icon: BriefcaseBusiness,
  },
];

export default function Audiences() {
  return (
    <Section
      id="who-we-serve"
      background="mist"
      spacing="spacious"
      aria-labelledby="audiences-heading"
    >
      <Reveal animation="up">
        <Heading
          eyebrow="Who We Serve"
          title="Bookkeeping built around your organization"
          subtitle="Apex provides tailored financial support for organizations that value accuracy, transparency, responsible stewardship, and dependable reporting."
          align="center"
          size="lg"
          className="mx-auto"
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {audiences.map((audience, index) => (
          <Reveal
            key={audience.title}
            animation="up"
            delay={index * 90}
            className="h-full"
          >
            <AudienceCard {...audience} />
          </Reveal>
        ))}
      </div>

      <Reveal animation="up" delay={180}>
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-apex-navy px-6 py-10 text-center shadow-2xl shadow-slate-900/10 sm:px-10 lg:px-16">
          <div
            className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-apex-gold/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-apex-gold-light">
              Support Designed Around You
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your financial system should reflect how your organization
              actually operates
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Whether you are leading a nonprofit, managing a growing business,
              launching a new venture, or operating a professional practice,
              Apex provides dependable support designed around your goals,
              responsibilities, and reporting needs.
            </p>

            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-apex-gold px-7 py-3 text-center font-bold text-apex-navy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-apex-navy"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
