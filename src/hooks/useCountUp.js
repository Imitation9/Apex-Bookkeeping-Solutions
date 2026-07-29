import { useEffect, useState } from "react";

export default function useCountUp({
  end,
  duration = 1400,
  shouldStart = true,
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) {
      return undefined;
    }

    const numericEnd = Number(end);

    if (!Number.isFinite(numericEnd)) {
      setValue(0);
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setValue(numericEnd);
      return undefined;
    }

    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(numericEnd * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [duration, end, shouldStart]);

  return value;
}
