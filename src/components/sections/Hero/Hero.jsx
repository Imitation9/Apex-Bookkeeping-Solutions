import Section from "../../ui/Section/Section";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <Section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-slate-50
        to-slate-100
        pt-36
      "
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">

        <HeroContent />

        <HeroVisual />

      </div>
    </Section>
  );
}
