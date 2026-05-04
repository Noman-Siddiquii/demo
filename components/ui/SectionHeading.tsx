import { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: Props) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  const inkTitle = invert ? "text-ivory" : "text-espresso";
  const inkSub = invert ? "text-ivory/75" : "text-taupe";
  const inkEyebrow = invert ? "text-gold" : "text-oak";
  return (
    <Reveal>
      <div className={`max-w-2xl ${alignCls}`}>
        {eyebrow && (
          <div
            className={`eyebrow ${inkEyebrow} flex items-center gap-3 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <span className="divider-gold" />
            <span>{eyebrow}</span>
            <span className="divider-gold" />
          </div>
        )}
        <h2
          className={`font-display ${inkTitle} mt-5 text-4xl md:text-5xl leading-[1.1] tracking-tight`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-5 text-base md:text-lg ${inkSub} leading-relaxed`}>
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
