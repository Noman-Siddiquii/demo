"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

type State = "ssr" | "hidden" | "visible";

export function Reveal({ children, delay = 0, className = "", y = 24 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<State>("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setState("visible");
      return;
    }

    const rect = el.getBoundingClientRect();
    const inViewNow = rect.top < window.innerHeight && rect.bottom > 0;

    if (inViewNow) {
      setState("visible");
      return;
    }

    setState("hidden");

    if (typeof IntersectionObserver === "undefined") {
      setState("visible");
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setState("visible");
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);

    const fallback = window.setTimeout(() => setState("visible"), 1500);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const style: React.CSSProperties =
    state === "ssr"
      ? {}
      : {
          opacity: state === "visible" ? 1 : 0,
          transform:
            state === "visible" ? "translateY(0)" : `translateY(${y}px)`,
          transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
          willChange: state === "hidden" ? "opacity, transform" : "auto",
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
