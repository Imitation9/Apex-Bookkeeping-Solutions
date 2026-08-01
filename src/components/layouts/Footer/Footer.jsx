import {
  CalendarDays,
  MapPin,
  Phone,
} from "lucide-react";

import { SITE } from "../../../config/site";
import { footerNavigation } from "../../../data/footerNavigation";

export default function Footer() {
  return (
    <footer className="bg-apex-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr_0.75fr] lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <a
            href="#home"
            aria-label="Apex Bookkeeping Solutions home"
            className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-4 focus-visible:ring-offset-apex-navy"
          >
            <div>
              <p className="font-serif text-3xl font-bold tracking-[0.12em] text-white">
                APEX
              </p>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-apex-gold-light">
                Bookkeeping Solutions
              </p>
            </div>
          </a>

          <p className="mt-8 max-w-md text-lg font-semibold leading-8 text-white">
            Financial stewardship. Practical solutions. Trusted partnership.
          </p>

          <p className="mt-4 max-w-md leading-7 text-slate-300">
            Accurate bookkeeping, dependable reporting, and responsive support
            for nonprofits, small businesses, and startups.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-3 text-slate-200 transition hover:text-white"
            >
              <span className="inline-flex rounded-xl bg-white/10 p-2.5 text-apex-gold-light">
                <Phone
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <span className="font-semibold">
                {SITE.phoneDisplay}
              </span>
            </a>

            <div className="flex items-center gap-3 text-slate-300">
              <span className="inline-flex rounded-xl bg-white/10 p-2.5 text-apex-gold-light">
                <MapPin
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <span>{SITE.location}</span>
            </div>
          </div>

          <a
            href={SITE.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-apex-gold px-6 py-3 text-center font-bold text-apex-navy shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-apex-navy"
          >
            <CalendarDays
              size={20}
              strokeWidth={1.9}
              aria-hidden="true"
            />

            Schedule a Free Consultation
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-apex-gold-light">
              Company
            </p>

            <div
              className="mt-3 h-0.5 w-14 rounded-full bg-apex-gold"
              aria-hidden="true"
            />
          </div>

          <ul className="space-y-4">
            {footerNavigation.company.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group inline-flex items-center rounded text-base font-medium text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-2 focus-visible:ring-offset-apex-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-apex-gold-light">
              Services
            </p>

            <div
              className="mt-3 h-0.5 w-14 rounded-full bg-apex-gold"
              aria-hidden="true"
            />
          </div>

          <ul className="space-y-4">
            {footerNavigation.services.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group inline-flex items-center rounded text-base font-medium text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apex-gold focus-visible:ring-offset-2 focus-visible:ring-offset-apex-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          <p>
            Clarity. Accuracy. Confidence.
          </p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs leading-5 text-slate-500 sm:px-6 lg:px-8">
          QuickBooks and QuickBooks ProAdvisor are trademarks or service marks
          of Intuit Inc. Apex Bookkeeping Solutions, LLC is an independent
          bookkeeping firm and is not employed by Intuit.
        </div>
      </div>
    </footer>
  );
}
