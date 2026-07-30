import { useEffect, useRef, useState } from "react";

const animations = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  fade: "",
};

export default function Reveal({
  children,
  as: Component = "div",
  animation = "up",
  delay = 0,
  threshold = 0.2,
  rootMargin = "0px 0px -40px 0px",
  once = true,
  className = "",
  ...props
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const animationClass =
    animations[animation] ?? animations.up;

  return (
    <Component
      ref={elementRef}
      className={[
        "reveal",
        animationClass,
        isVisible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        "--reveal-delay": `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
