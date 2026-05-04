import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { events } from "@/lib/content";

export function EventsPreview() {
  const upcoming = events.slice(0, 3);
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <Container>
        <SectionHeading
          eyebrow="What's On"
          title={
            <>
              Live music, tastings, and{" "}
              <span className="font-serif-italic text-oak">memorable nights</span>
            </>
          }
          subtitle="From Thursday jazz to private bourbon dinners — there's always a reason to come back."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {upcoming.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <article className="group relative aspect-[3/4] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/95 via-espresso/40 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end text-ivory">
                  <p className="eyebrow text-gold">{e.tag}</p>
                  <h3 className="font-display text-2xl mt-2">{e.title}</h3>
                  <p className="text-ivory/80 text-sm mt-2">
                    {e.date} · {e.time}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center mt-14">
            <Button href="/events" variant="outline">
              See All Events
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
