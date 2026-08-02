import Heading from "../../UI/Heading/Heading";
import Reveal from "../../UI/Reveal/Reveal";
import Section from "../../UI/Section/Section";
import BrandWatermark from "../../UI/BrandWatermark/BrandWatermark";

import { SITE } from "../../../config/site";

import Credentials from "./Credentials";
import Values from "./Values";

import apexMark from "../../../assets/logo/apex-mark.png";

export default function About() {
  return (
    <Section
      id="about"
      background="mist"
      spacing="spacious"
      className="relative isolate overflow-hidden"
    >
      <BrandWatermark
        position="right"
        className="hidden opacity-80 lg:block"
      />

      <div
        className="pointer-events-none absolute -left-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-apex-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24">
        <div>
          <Reveal animation="up">
            <Heading
              eyebrow="Why Apex"
              title="Financial leadership built on experience."
              subtitle="Apex Bookkeeping Solutions was founded on the belief that reliable financial information is essential to responsible leadership, informed decisions, and lasting organizational success."
              size="lg"
            />
          </Reveal>

          <Reveal animation="up" delay={100}>
            <div className="mt-8 border-l-2 border-apex-gold pl-6 sm:pl-8">
              <p className="text-lg leading-8 text-slate-700">
                For more than{" "}
                <strong className="text-apex-navy">
                  23 years
                </strong>
                , Robert L. Young has served in financial leadership roles
                where accuracy, accountability, and responsible stewardship
                were expected every day.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Managing public funds, developing budgets, administering grant
                programs, strengthening internal controls, and producing
                dependable financial reports required precision, transparency,
                and a commitment to protecting the organizations served.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Those same principles became the foundation of{" "}
                <strong className="text-apex-navy">
                  Apex Bookkeeping Solutions
                </strong>
                . Today, Apex supports nonprofits, startups, and small
                businesses seeking organized financial records, meaningful
                reporting, and dependable long-term partnership.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Whether bringing overdue books current, implementing
                QuickBooks Online, or supporting ongoing financial operations,
                every engagement is guided by professionalism, integrity, and
                attention to detail.
              </p>
            </div>
          </Reveal>

          <Reveal animation="up" delay={180}>
            <blockquote className="relative mt-10 rounded-2xl border border-apex-gold/20 bg-white p-6 shadow-sm sm:p-8">
              <span
                className="absolute left-5 top-1 font-serif text-6xl leading-none text-apex-gold/30"
                aria-hidden="true"
              >
                “
              </span>

              <p className="relative pl-5 font-serif text-xl font-semibold leading-8 text-apex-navy sm:text-2xl">
                Better financial decisions begin with reliable financial
                information.
              </p>
            </blockquote>
          </Reveal>

          <Reveal animation="up" delay={240}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-apex-gold px-6 py-3 text-center font-bold text-apex-navy shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg"
              >
                Schedule a Free Consultation
              </a>

              <a
                href="#who-we-serve"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-apex-gold hover:shadow-sm"
              >
                See Who We Serve
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal animation="right" delay={140}>
          <Credentials />
        </Reveal>
      </div>

      <Values />
    </Section>
  );
}
