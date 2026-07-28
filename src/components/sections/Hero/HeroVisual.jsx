import HeroStats from "./HeroStats";

export default function HeroVisual() {
  return (
    <div className="relative">

      <div
        className="
          glass
          shadow-premium
          rounded-[32px]
          border
          p-10
        "
      >

        <div className="mb-8 h-3 w-24 rounded-full bg-slate-200"></div>

        <div className="space-y-5">

          <div className="h-6 w-full rounded-full bg-slate-100"></div>

          <div className="h-6 w-10/12 rounded-full bg-slate-100"></div>

          <div className="h-6 w-8/12 rounded-full bg-slate-100"></div>

        </div>

        <HeroStats />

      </div>

    </div>
  );
}
