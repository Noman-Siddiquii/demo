import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { homeFeatured } from "@/lib/content";

export function FeaturedMenu() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <Container>
        <SectionHeading
          eyebrow="Curated Selections"
          title={
            <>
              The pours and the{" "}
              <span className="font-serif-italic text-oak">picks</span>
            </>
          }
          subtitle="A small taste of what awaits — handpicked cigars, signature cocktails, and rare spirits."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {homeFeatured.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <article className="group bg-surface overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-7">
                  <p className="eyebrow text-oak">{item.label}</p>
                  <h3 className="font-display text-2xl mt-3">{item.title}</h3>
                  <p className="text-taupe mt-3 text-sm leading-relaxed">
                    {item.blurb}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="text-center mt-14">
            <Button href="/menu" variant="primary">
              View Full Menu
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
