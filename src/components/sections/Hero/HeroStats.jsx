import AnimatedNumber from "../../UI/AnimatedNumber/AnimatedNumber";
import Reveal from "../../UI/Reveal/Reveal";

const heroStats = [
  {
    value: 23,
    suffix: "+",
    label: "Years of Experience",
    detail: "Accounting, budgeting, reporting, and fund management",
  },
  {
    value: 3,
    label: "Client Groups",
    detail: "Nonprofits, small businesses, and startups",
  },
  {
    value: 1,
    label: "Business-Day Goal",
    detail: "Responsive, dependable communication",
  },
];

export default function HeroStats() {
  return (
    <Reveal animation="up" delay={340}>
      <dl
        className="mt-10 grid gap-6 border-t border-slate-200/80 pt-8 sm:grid-cols-3"
        aria-label="Apex experience and service highlights"
      >
        {heroStats.map((stat, index) => (
          <div
            key={stat.label}
            className="relative border-l-2 border-amber-400 pl-4"
          >
            <dt className="mt-2 text-sm font-semibold leading-5 text-slate-700">
              {stat.label}
            </dt>

            <dd className="order-first font-serif text-3xl font-bold tracking-tight text-[#203A5A] sm:text-4xl">
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                duration={1500}
                delay={index * 100}
              />
            </dd>

            <dd className="mt-2 text-xs leading-5 text-slate-500">
              {stat.detail}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
