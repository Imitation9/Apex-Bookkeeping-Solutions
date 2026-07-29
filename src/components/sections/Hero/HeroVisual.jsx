import heroDashboard from "../../../assets/illustrations/hero-dashboard.svg";
import Reveal from "../../UI/Reveal/Reveal";

export default function HeroVisual() {
  return (
    <Reveal
      direction="right"
      delay={180}
      className="relative mx-auto w-full max-w-2xl lg:mx-0"
    >
      <div
        className="pointer-events-none absolute -left-8 top-16 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-sky-200/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="hero-dashboard relative">
        <img
          src={heroDashboard}
          alt="Illustration of an organized financial dashboard with reporting, reconciliation, budgeting, payroll, and fund tracking"
          className="h-auto w-full"
          width="920"
          height="720"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="hero-floating-card hero-floating-card--top">
        <span className="hero-floating-card__icon" aria-hidden="true">
          ✓
        </span>

        <span>
          <strong>Reconciled</strong>
          <small>Records reviewed and current</small>
        </span>
      </div>

      <div className="hero-floating-card hero-floating-card--bottom">
        <span className="hero-floating-card__dot" aria-hidden="true" />

        <span>
          <strong>Financial clarity</strong>
          <small>Information you can act on</small>
        </span>
      </div>
    </Reveal>
  );
}
