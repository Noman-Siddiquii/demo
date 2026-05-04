import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { aboutContent, business } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Ash & Oak — Birmingham's home for premium cigars, fine spirits, and Southern hospitality.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={
          <>
            Where luxury meets{" "}
            <span className="font-serif-italic text-oak">community</span>
          </>
        }
      />

      <section className="py-20 md:py-28 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={aboutContent.heroImage}
                  alt="Inside Ash & Oak"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="eyebrow flex items-center gap-3">
                  <span className="divider-gold" /> The Beginning
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display mt-5 text-4xl md:text-5xl leading-[1.1]">
                  A space designed with{" "}
                  <span className="font-serif-italic text-oak">
                    intention
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-7 space-y-5 text-taupe leading-relaxed text-[1.02rem]">
                  {aboutContent.story.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <p className="eyebrow flex items-center justify-center gap-3">
                <span className="divider-gold" />
                What We Stand For
                <span className="divider-gold" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-5 text-4xl md:text-5xl leading-[1.1]">
                Three things, always.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {aboutContent.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="bg-surface p-9 border border-line text-center h-full">
                  <span className="font-display text-gold text-3xl">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl mt-4">{v.title}</h3>
                  <p className="text-taupe mt-3 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <Container size="narrow">
          <div className="text-center">
            <Reveal>
              <p className="font-serif-italic text-2xl md:text-3xl text-espresso leading-relaxed">
                &ldquo;We didn&rsquo;t build a cigar club. We built a place
                where the evening slows down &mdash; and a city remembers how
                to gather.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 eyebrow text-oak">— Founder, Ash &amp; Oak</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={business.phoneHref} variant="primary">
                  Visit Us
                </Button>
                <Button href="/membership" variant="outline">
                  Become a Member
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
