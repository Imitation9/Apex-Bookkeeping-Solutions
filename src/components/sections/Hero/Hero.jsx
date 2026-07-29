import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:min-h-[760px] lg:pb-28 lg:pt-40"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(216,180,90,0.12),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(32,58,90,0.09),transparent_30%)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-16">
        <div>
          <HeroContent />
          <HeroStats />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
