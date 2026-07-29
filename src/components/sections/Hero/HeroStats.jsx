import AnimatedNumber from "../../UI/AnimatedNumber/AnimatedNumber";
import Reveal from "../../UI/Reveal/Reveal";

const heroStats = [
  {
    value: 23,
    suffix: "+",
    label: "Years of Financial Experience",
  },
  {
    value: 3,
    label: "Core Client Groups",
    detail: "Nonprofits, small businesses, and startups",
  },
  {
    value: 1,
    label: "Business-Day Response Goal",
  },
];

export default function HeroStats() {
  return (
    <Reveal delay={260}>
      <dl
        className="mt-10 grid gap-5 border-t border-slate-200/80 pt-8 sm:grid-cols-3"
        aria-label="Apex experience and service highlights"
      >
        {heroStats.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <dt className="text-sm font-medium leading-5 text-slate-600">
              {stat.label}
            </dt>

            <dd className="order-first mb-2 font-serif text-3xl font-bold text-[#203A5A]">
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                duration={1500}
              />
            </dd>

            {stat.detail ? (
              <dd className="mt-2 text-xs leading-5 text-slate-500">
                {stat.detail}
              </dd>
            ) : null}
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
