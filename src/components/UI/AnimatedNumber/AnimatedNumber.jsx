import useCountUp from "../../../hooks/useCountUp";
import useInView from "../../../hooks/useInView";

export default function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
  className = "",
}) {
  const { ref, isInView } = useInView({
    threshold: 0.4,
    rootMargin: "0px",
  });

  const animatedValue = useCountUp({
    end: value,
    duration,
    shouldStart: isInView,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {animatedValue}
      {suffix}
    </span>
  );
}
