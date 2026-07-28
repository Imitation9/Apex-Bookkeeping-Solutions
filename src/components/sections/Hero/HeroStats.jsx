import Stat from "../../ui/Stat/Stat";

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-8">

      <Stat
        value="23+"
        label="Years Experience"
      />

      <Stat
        value="100%"
        label="Commitment"
      />

      <Stat
        value="QB"
        label="Gold ProAdvisor"
      />

      <Stat
        value="AR"
        label="Arkansas Based"
      />

    </div>
  );
}
