import Button from "../../ui/Button/Button";

export default function HeroContent() {
  return (
    <div>

      <p className="mb-6 font-semibold uppercase tracking-[.3em] text-apex-gold">

        Accurate • Reliable • Empowering Your Success

      </p>

      <h1 className="max-w-2xl text-5xl font-bold leading-tight lg:text-7xl">

        Bookkeeping Built
        for Organizations
        That Want to Grow.

      </h1>

      <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">

        Professional bookkeeping,
        payroll, cleanup,
        reconciliations and
        financial reporting designed
        to help nonprofits,
        small businesses,
        and startups succeed.

      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <Button href="#contact">

          Schedule Consultation

        </Button>

        <Button
          href="#services"
          variant="outline"
        >

          Explore Services

        </Button>

      </div>

    </div>
  );
}
