import {
  CalendarDays,
  Check,
} from "lucide-react";

import Button from "../../UI/Button/Button";
import { SITE } from "../../../config/site";

const consultationBenefits = [
  "No obligation",
  "Transparent pricing",
  "Personalized recommendations",
  "Professional guidance",
];

export default function ConsultationCard() {
  return (
    <article className="h-full rounded-3xl bg-white p-7 text-slate-700 shadow-2xl sm:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-apex-gold-dark">
        Complimentary Consultation
      </p>

      <h3 className="mt-4 text-3xl font-bold text-apex-navy">
        A practical first step toward stronger books
      </h3>

      <p className="mt-6 leading-8 text-slate-600">
        During your consultation, we’ll discuss your bookkeeping needs, review
        your current situation, and identify the services that best support your
        organization.
      </p>

      <ul className="mt-8 space-y-4">
        {consultationBenefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-center gap-3 text-slate-700"
          >
            <span
              className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"
              aria-hidden="true"
            >
              <Check size={15} strokeWidth={2.4} />
            </span>

            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <Button
        href={SITE.calendly}
        target="_blank"
        rel="noopener noreferrer"
        icon={<CalendarDays size={19} strokeWidth={1.9} />}
        iconPosition="left"
        fullWidth
        className="mt-10"
      >
        Schedule Online
      </Button>
    </article>
  );
}
