import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { heroBackdrops } from "@/lib/content";

export function MembershipCTA() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${heroBackdrops.membership}')`,
        }}
      />
      <div className="absolute inset-0 bg-espresso/80" />

      <div className="relative max-w-3xl mx-auto px-6 text-center text-ivory">
        <Reveal>
          <p className="eyebrow text-gold flex items-center justify-center gap-3">
            <span className="divider-gold" />
            Membership
            <span className="divider-gold" />
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 text-4xl md:text-5xl leading-[1.1]">
            An invitation, <span className="font-serif-italic text-gold">extended</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-ivory/80 text-lg leading-relaxed">
            Members enjoy priority reservations, a personal humidor locker,
            access to private nights, and a quietly extraordinary place to
            gather — anytime.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/membership" variant="light">
              Explore Tiers
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
