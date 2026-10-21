
import {
  Award,
  Building2,
  ExternalLink,
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
    href: "https://proadvisor.intuit.com/app/accountant/search?searchId=0te3iasyxzxs",
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
              value={24}
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

          const content = (
            <div className="flex items-start gap-4">
              <span className="inline-flex shrink-0 rounded-xl bg-white/10 p-3 text-apex-gold-light">
                <Icon
                  size={24}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white">
                    {credential.title}
                  </h3>

                  {credential.href && (
                    <ExternalLink
                      size={15}
                      className="shrink-0 text-apex-gold-light"
                      aria-hidden="true"
                    />
                  )}
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {credential.description}
                </p>
              </div>
            </div>
          );

          const cardClassName =
            "block rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-apex-gold/40 hover:bg-white/[0.08]";

          if (credential.href) {
            return (
              <a
                key={credential.title}
                href={credential.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${credential.title} — view profile (opens in a new tab)`}
                title="View Robert L. Young's QuickBooks ProAdvisor profile"
                className={`${cardClassName} cursor-pointer hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-2 focus-visible:ring-offset-apex-navy`}
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={credential.title}
              className={cardClassName}
            >
              {content}
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
