import { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="pt-36 md:pt-44 pb-16 md:pb-20 bg-cream relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="eyebrow flex items-center justify-center gap-3">
            <span className="divider-gold" />
            {eyebrow}
            <span className="divider-gold" />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display mt-6 text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-7 text-taupe text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
