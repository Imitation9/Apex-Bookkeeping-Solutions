import Button from "../../UI/Button/Button";
import Reveal from "../../UI/Reveal/Reveal";

const trustPoints = [
  "23+ years of experience",
  "QuickBooks ProAdvisor",
  "Nonprofit-focused expertise",
];

export default function HeroContent() {
  return (
    <div className="max-w-3xl">
      <Reveal animation="up">
        <p className="mb-5 inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-800 sm:text-sm">
          Trusted bookkeeping support
        </p>
      </Reveal>

      <Reveal animation="up" delay={80}>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.75rem] lg:leading-[1.06]">
          Clear books. Confident decisions. Stronger organizations.
        </h1>
      </Reveal>

      <Reveal animation="up" delay={160}>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          Apex Bookkeeping Solutions helps nonprofits, startups, and small
          businesses maintain accurate records, streamline QuickBooks, and gain
          the financial clarity needed to move forward confidently.
        </p>
      </Reveal>

      <Reveal animation="up" delay={220}>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="#consultation">
            Schedule a Free Consultation
          </Button>

          <Button href="#services" variant="outline">
            Explore Our Services
          </Button>
        </div>
      </Reveal>

      <Reveal animation="up" delay={280}>
        <ul
          className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600"
          aria-label="Apex credentials and specialties"
        >
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span
                className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700"
                aria-hidden="true"
              >
                ✓
              </span>

              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
