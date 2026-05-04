import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Kept for API compatibility; currently unused. */
  y?: number;
};

// Render content unconditionally with a CSS-only fade-in.
// No IntersectionObserver, no SSR opacity gating — content is always
// visible to users (and to crawlers / users without JS) the moment
// it lands in the DOM. The animation is purely decorative.
export function Reveal({ children, delay = 0, className = "" }: Props) {
  const style: React.CSSProperties = {
    animationName: "revealFade",
    animationDuration: "700ms",
    animationDelay: `${delay}s`,
    animationFillMode: "backwards",
    animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
