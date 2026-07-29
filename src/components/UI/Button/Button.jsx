import Button from "../../UI/Button/Button";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
        Trusted bookkeeping support
      </p>

      <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        Clear books. Confident decisions. Stronger organizations.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
        Apex Bookkeeping Solutions helps nonprofits, startups, and small
        businesses maintain accurate financial records, streamline QuickBooks,
        and gain the clarity needed to move forward with confidence.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button href="#contact">Schedule a Free Consultation</Button>

        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
        >
          Explore Our Services
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
        <span>23+ years of experience</span>
        <span>QuickBooks ProAdvisor</span>
        <span>Nonprofit-focused support</span>
      </div>
    </div>
  );
}
