import { useEffect, useRef, useState } from "react";

function formatValue(value, decimals) {
  return Number(value).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function AnimatedNumber({
  value,
  duration = 1400,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  threshold = 0.4,
  className = "",
}) {
  const elementRef = useRef(null);
  const frameRef = useRef(null);
  const timeoutRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  const numericValue = Number(value);
  const safeValue = Number.isFinite(numericValue) ? numericValue : 0;

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      setDisplayValue(safeValue);
      hasAnimatedRef.current = true;
      return undefined;
    }

    const animate = () => {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;

      timeoutRef.current = window.setTimeout(() => {
        const startTime = performance.now();

        const update = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          setDisplayValue(safeValue * easedProgress);

          if (progress < 1) {
            frameRef.current =
              window.requestAnimationFrame(update);
          } else {
            setDisplayValue(safeValue);
          }
        };

        frameRef.current =
          window.requestAnimationFrame(update);
      }, delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
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
  }, [delay, duration, safeValue, threshold]);

  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={`${prefix}${formatValue(
        safeValue,
        decimals,
      )}${suffix}`}
    >
      {prefix}
      {formatValue(displayValue, decimals)}
      {suffix}
    </span>
  );
}
