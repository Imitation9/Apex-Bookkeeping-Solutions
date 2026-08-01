import {
  Award,
  Building2,
  HandCoins,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import AnimatedNumber from "../../UI/AnimatedNumber/AnimatedNumber";
import Card from "../../UI/Card/Card";

const credentials = [
  {
    icon: Award,
    title: "QuickBooks ProAdvisor",
    description:
      "Certified QuickBooks Online expertise supporting setup, cleanup, reporting, payroll, and daily financial workflows.",
  },
  {
    icon: HandCoins,
    title: "Nonprofit Focus",
    description:
      "Bookkeeping and reporting informed by experience with funds, grants, budgets, accountability, and stewardship.",
  },
  {
    icon: ShieldCheck,
    title: "Financial Stewardship",
    description:
      "A disciplined approach built around accuracy, internal controls, transparency, and dependable information.",
  },
  {
    icon: MapPin,
    title: "Arkansas Based",
    description:
      "Locally owned in North Little Rock, with remote support available for organizations beyond Arkansas.",
  },
];

export default function Credentials() {
  return (
    <Card
      as="aside"
      variant="navy"
      padding="lg"
      hover={false}
      className="overflow-visible"
      aria-label="Apex experience and credentials"
    >
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-apex-gold-light">
          Experience
        </p>

        <div className="mt-3 flex items-end gap-3">
          <div className="font-serif text-6xl font-bold leading-none text-white sm:text-7xl">
            <AnimatedNumber
              value={23}
              suffix="+"
              duration={1500}
            />
          </div>

          <p className="pb-1 text-sm font-semibold leading-5 text-slate-300">
            Years of professional
            <br />
            financial leadership
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {credentials.map((credential) => {
          const Icon = credential.icon;

          return (
            <div
              key={credential.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-apex-gold/40 hover:bg-white/[0.08]"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex shrink-0 rounded-xl bg-white/10 p-3 text-apex-gold-light">
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <h3 className="text-base font-bold text-white">
                    {credential.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {credential.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6">
        <Building2
          size={22}
          className="shrink-0 text-apex-gold-light"
          aria-hidden="true"
        />

        <p className="text-sm font-semibold text-slate-200">
          Serving nonprofits, small businesses, and startups with clarity,
          accuracy, and confidence.
        </p>
      </div>
    </Card>
  );
}
