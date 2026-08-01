import {
  Clock3,
  MapPin,
  Target,
} from "lucide-react";

const details = [
  {
    icon: Clock3,
    label: "Response Time",
    description:
      "We strive to respond to every inquiry within one business day.",
  },
  {
    icon: MapPin,
    label: "Service Area",
    description:
      "Serving clients throughout Arkansas and remotely across the United States.",
  },
  {
    icon: Target,
    label: "Primary Focus",
    description:
      "Nonprofit organizations, small businesses, and startups.",
  },
];

export default function ContactDetails() {
  return (
    <div className="flex h-full flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-apex-gold-light">
        Why Schedule?
      </p>

      <h3 className="mt-4 text-3xl font-bold text-white">
        Start with a clear conversation about your needs
      </h3>

      <p className="mt-6 text-lg leading-9 text-slate-200">
        Every organization has unique bookkeeping needs. Your consultation
        gives us an opportunity to understand your goals, answer your
        questions, and recommend the services that best fit your organization.
      </p>

      <div className="mt-10 space-y-5">
        {details.map((detail) => {
          const Icon = detail.icon;

          return (
            <div
              key={detail.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex shrink-0 rounded-xl bg-white/10 p-3 text-apex-gold-light">
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <p className="font-bold text-white">
                    {detail.label}
                  </p>

                  <p className="mt-2 leading-7 text-slate-300">
                    {detail.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
