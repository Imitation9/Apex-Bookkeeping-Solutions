import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 sm:py-24 lg:min-h-[720px] lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(216,180,90,0.14),transparent_34%),radial-gradient(circle_at_82%_22%,rgba(32,58,90,0.10),transparent_32%)]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-28 top-20 -z-20 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-10 -z-20 h-96 w-96 rounded-full bg-slate-300/30 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 lg:px-8 xl:gap-16">
        <div className="relative z-10">
          <HeroContent />
          <HeroStats />
        </div>

        <div className="relative z-10">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
