import Button from "../../UI/Button/Button";

export default function HeroContent() {
  return (
    <div>

      <p className="mb-6 font-semibold uppercase tracking-[.3em] text-apex-gold">

        Accurate • Reliable • Empowering Your Success

<h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-tight text-[#163047] sm:text-6xl lg:text-7xl">
  Financial Clarity.
  <span className="block text-[#B88A2E]">
    Confident Decisions.
  </span>
  Sustainable Growth.
</h1>

<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
  Professional bookkeeping and financial reporting for nonprofit
  organizations, small businesses, and startups—delivered with accuracy,
  integrity, and more than 23 years of financial leadership.
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
