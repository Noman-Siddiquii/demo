import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { events, galleryImages, business } from "@/lib/content";
import { Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Live music, tastings, and members-only nights at Ash & Oak Cigar Club.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="What's On"
        title={
          <>
            Evenings worth{" "}
            <span className="font-serif-italic text-oak">remembering</span>
          </>
        }
        subtitle="From Thursday jazz to private bourbon dinners — there's always a reason to come back."
      />

      <section className="py-20 md:py-24 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={(i % 2) * 0.1}>
                <article className="group bg-surface overflow-hidden border border-line">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-7 md:p-9">
                    <p className="eyebrow text-oak">{e.tag}</p>
                    <h3 className="font-display text-2xl md:text-3xl mt-3">
                      {e.title}
                    </h3>
                    <div className="flex flex-wrap gap-5 mt-4 text-sm text-taupe">
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold" />
                        {e.date}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gold" />
                        {e.time}
                      </span>
                    </div>
                    <p className="text-taupe mt-4 leading-relaxed">
                      {e.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-cream">
        <Container>
          <Reveal>
            <p className="eyebrow flex items-center justify-center gap-3">
              <span className="divider-gold" />
              Gallery
              <span className="divider-gold" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-center mt-5 text-4xl md:text-5xl">
              Inside the lounge
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 0.05}>
                <div
                  className={`overflow-hidden ${
                    i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.06]"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="text-center mt-14">
              <Button href={business.phoneHref} variant="primary">
                Book a Private Event
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
