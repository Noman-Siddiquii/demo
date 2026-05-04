import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/lib/content";

export function StoryTeaser() {
  return (
    <section id="story" className="py-24 md:py-32 bg-ivory">
      <Container>
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={aboutContent.heroImage}
                alt="Inside the lounge"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold hidden md:block" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-cream hidden md:block -z-10" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="divider-gold" />
                Our Story
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-5 text-4xl md:text-5xl leading-[1.1] tracking-tight">
                A space rooted in{" "}
                <span className="font-serif-italic text-oak">elegance</span> and
                Southern hospitality.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 space-y-5 text-taupe leading-relaxed text-[1.02rem]">
                {aboutContent.story.slice(0, 2).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9">
                <Button href="/about" variant="outline">
                  Read Our Story
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
