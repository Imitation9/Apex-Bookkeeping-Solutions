import apexMark from "../../../assets/logo/apex-mark.svg";

export default function BrandWatermark({
  className = "",
  position = "right",
}) {
  const positions = {
    left: "-left-20 top-1/2 -translate-y-1/2",
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
    right: "-right-20 top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={[
        "brand-watermark pointer-events-none absolute -z-10 select-none",
        positions[position] ?? positions.right,
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <img
        src={apexMark}
        alt=""
        className="h-auto w-full"
      />
    </div>
  );
}
