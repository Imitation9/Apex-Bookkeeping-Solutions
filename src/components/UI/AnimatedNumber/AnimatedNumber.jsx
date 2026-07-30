import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({
  value = 0,
  duration = 1400,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const ref = useRef(null);
  const frameRef = useRef(null);
  const timeoutRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  const targetValue = Number(value) || 0;

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    const startAnimation = () => {
      timeoutRef.current = window.setTimeout(() => {
        const startTime = window.performance.now();

        const animate = (currentTime) => {
          const progress = Math.min(
            (currentTime - startTime) / duration,
            1,
          );

          const eased = 1 - Math.pow(1 - progress, 3);

          setDisplayValue(targetValue * eased);

          if (progress < 1) {
            frameRef.current =
              window.requestAnimationFrame(animate);
          } else {
            setDisplayValue(targetValue);
          }
        };

        frameRef.current =
          window.requestAnimationFrame(animate);
      }, delay);
    };

    if (!("IntersectionObserver" in window)) {
      setDisplayValue(targetValue);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [delay, duration, targetValue]);

  const formattedValue = displayValue.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
