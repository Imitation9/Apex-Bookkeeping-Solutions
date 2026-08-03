import {
  CalendarDays,
  ShieldCheck,
} from "lucide-react";

import Heading from "../../UI/Heading/Heading";
import Reveal from "../../UI/Reveal/Reveal";
import Section from "../../UI/Section/Section";

import { SITE } from "../../../config/site";
import { processSteps } from "../../../data/process";

import ProcessStep from "./ProcessStep";

export default function Process() {
  return (
    <Section
      id="process"
      background="white"
      spacing="spacious"
      className="relative isolate overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-apex-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-16 -z-10 h-80 w-80 rounded-full bg-slate-200/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal animation="up">
            <Heading
              eyebrow="How It Works"
              title="A clear path to dependable financial records"
              subtitle="Working with Apex is designed to feel organized, transparent, and straightforward from the first conversation through ongoing support."
              size="lg"
            />
          </Reveal>

          <Reveal animation="up" delay={120}>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-apex-mist p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex shrink-0 rounded-2xl bg-apex-navy p-3 text-apex-gold-light">
                  <ShieldCheck
                    size={25}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="font-bold text-apex-navy">
                    No surprises. No unclear expectations.
                  </p>

                  <p className="mt-2 leading-7 text-slate-600">
                    Every engagement begins with a written agreement that
                    clearly defines services, responsibilities, timing, and
                    pricing before work begins.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal animation="up" delay={200}>
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-apex-gold px-6 py-3 text-center font-bold text-apex-navy shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-navy focus-visible:ring-offset-4"
            >
              <CalendarDays
                size={19}
                strokeWidth={1.9}
                aria-hidden="true"
              />

              Schedule a Free Consultation
            </a>
          </Reveal>
        </div>

        <div className="relative">
          <span
            className="absolute bottom-12 left-7 top-7 hidden w-px bg-gradient-to-b from-apex-gold via-apex-gold/60 to-slate-200 sm:block"
            aria-hidden="true"
          />

          <ol className="relative">
            {processSteps.map((step, index) => (
              <Reveal
                as="li"
                key={step.number}
                animation="up"
                delay={index * 90}
                className={
                  index === processSteps.length - 1
                    ? ""
                    : "pb-8 sm:pb-10"
                }
              >
                <ProcessStep
                  {...step}
                  isLast={index === processSteps.length - 1}
                />
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
