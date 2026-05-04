import { Reveal } from "@/components/ui/Reveal";

export function Intermission() {
  return (
    <section className="relative bg-deep text-ivory py-28 md:py-40 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550520293-d34b3f2e116d?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(26,17,10,0.55) 0%, rgba(26,17,10,0.92) 75%, #1a110a 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,110,0.6) 50%, transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,169,110,0.6) 50%, transparent)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <span
            aria-hidden
            className="font-display text-gold text-7xl md:text-9xl leading-none block"
          >
            &amp;
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-serif-italic text-2xl md:text-4xl mt-8 leading-[1.35] text-ivory/95">
            The art of an evening lies between the first pour and the last
            ember.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 section-rule">
            <span className="diamond" />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="eyebrow text-gold mt-8">
            Birmingham&rsquo;s Premier Cigar Lounge
          </p>
        </Reveal>
      </div>
    </section>
  );
}
