import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { SITE } from "../../../config/site";

export default function DirectContact() {
  return (
    <div
      id="contact"
      className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-apex-gold-light">
            Prefer to Reach Out Directly?
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Contact Apex Bookkeeping Solutions
          </h3>

          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            If you would rather call or email before scheduling, you are always
            welcome to reach out directly. We strive to respond to every inquiry
            within one business day.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            <span className="inline-flex shrink-0 rounded-xl bg-white/10 p-3 text-apex-gold-light">
              <Phone size={20} strokeWidth={1.8} aria-hidden="true" />
            </span>

            <span>
              <span className="block text-sm text-slate-400">
                Phone
              </span>

              <span className="font-semibold">
                {SITE.phoneDisplay}
              </span>
            </span>
          </a>

          <a
            href={SITE.emailHref}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            <span className="inline-flex shrink-0 rounded-xl bg-white/10 p-3 text-apex-gold-light">
              <Mail size={20} strokeWidth={1.8} aria-hidden="true" />
            </span>

            <span className="min-w-0">
              <span className="block text-sm text-slate-400">
                Email
              </span>

              <span className="break-all font-semibold sm:break-normal">
                {SITE.emailDisplay}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200">
            <span className="inline-flex shrink-0 rounded-xl bg-white/10 p-3 text-apex-gold-light">
              <MapPin size={20} strokeWidth={1.8} aria-hidden="true" />
            </span>

            <span>
              <span className="block text-sm text-slate-400">
                Location
              </span>

              <span className="font-semibold">
                {SITE.location}
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">
        <p className="text-sm leading-6 text-slate-400">
          Serving clients throughout Arkansas and remotely across the United States.
        </p>
      </div>
    </div>
  );
}
