import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { membershipTiers, business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Become a member of Ash & Oak. Priority reservations, personal humidor lockers, private nights, and more.",
};

export default function MembershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title={
          <>
            An invitation,{" "}
            <span className="font-serif-italic text-oak">extended</span>
          </>
        }
        subtitle="Three tiers, one shared idea — that the best evenings deserve a place that already knows your name."
      />

      <section className="py-20 md:py-24 bg-ivory">
        <Container>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {membershipTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <article
                  className={`relative h-full p-9 md:p-10 border ${
                    tier.featured
                      ? "border-oak bg-espresso text-ivory"
                      : "border-line bg-surface"
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-espresso px-4 py-1 text-[0.7rem] uppercase tracking-[0.22em]">
                      Most Popular
                    </span>
                  )}

                  <h3
                    className={`font-display text-3xl ${
                      tier.featured ? "text-ivory" : "text-espresso"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`font-serif-italic mt-1 ${
                      tier.featured ? "text-gold" : "text-oak"
                    }`}
                  >
                    {tier.tagline}
                  </p>

                  <div
                    className={`mt-7 pb-7 border-b ${
                      tier.featured ? "border-ivory/15" : "border-line"
                    }`}
                  >
                    <span className="font-display text-5xl">{tier.price}</span>
                    <span
                      className={`ml-2 text-sm ${
                        tier.featured ? "text-ivory/70" : "text-taupe"
                      }`}
                    >
                      {tier.cadence}
                    </span>
                  </div>

                  <ul className="mt-7 space-y-3.5">
                    {tier.perks.map((p) => (
                      <li
                        key={p}
                        className={`flex gap-3 items-start text-sm leading-relaxed ${
                          tier.featured ? "text-ivory/90" : "text-taupe"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            tier.featured ? "text-gold" : "text-oak"
                          }`}
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Button
                      href={`mailto:${business.reservationsEmail}?subject=${encodeURIComponent(
                        `Membership Inquiry — ${tier.name}`
                      )}`}
                      variant={tier.featured ? "light" : "outline"}
                      className="w-full"
                    >
                      Inquire
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-cream">
        <Container size="narrow">
          <Reveal>
            <p className="eyebrow text-center flex items-center justify-center gap-3">
              <span className="divider-gold" />
              Have questions?
              <span className="divider-gold" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-center mt-5 text-4xl md:text-5xl">
              Let&rsquo;s talk.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-center text-taupe mt-6 leading-relaxed">
              Tell us about what you&rsquo;re looking for, and we&rsquo;ll
              walk you through the membership that fits &mdash; or design one
              that does.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={`mailto:${business.reservationsEmail}?subject=Membership Inquiry`}
                variant="primary"
              >
                Email Us
              </Button>
              <Button href={business.phoneHref} variant="outline">
                Call {business.phone}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
