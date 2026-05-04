import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Instagram, Facebook } from "@/components/ui/SocialIcons";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit Ash & Oak Cigar Club & Lounge — ${business.address.full}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visit Us"
        title={
          <>
            Find your{" "}
            <span className="font-serif-italic text-oak">seat</span>
          </>
        }
        subtitle={`${business.address.line1}, ${business.address.line2}`}
      />

      <section className="py-20 md:py-24 bg-ivory">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-10">
              <Reveal>
                <div>
                  <p className="eyebrow flex items-center gap-3">
                    <span className="divider-gold" /> Address
                  </p>
                  <a
                    href={business.address.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex gap-3 hover:text-oak transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-oak shrink-0 mt-1" />
                    <span className="font-display text-2xl leading-snug">
                      {business.address.line1}
                      <br />
                      {business.address.line2}
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <div>
                  <p className="eyebrow flex items-center gap-3">
                    <span className="divider-gold" /> Reservations
                  </p>
                  <a
                    href={business.phoneHref}
                    className="mt-3 flex gap-3 hover:text-oak transition-colors"
                  >
                    <Phone className="w-5 h-5 text-oak shrink-0 mt-1" />
                    <span className="font-display text-2xl">
                      {business.phone}
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <p className="eyebrow flex items-center gap-3">
                    <span className="divider-gold" /> Email
                  </p>
                  <a
                    href={business.emailHref}
                    className="mt-3 flex gap-3 hover:text-oak transition-colors"
                  >
                    <Mail className="w-5 h-5 text-oak shrink-0 mt-1" />
                    <span className="font-display text-2xl break-all">
                      {business.email}
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div>
                  <p className="eyebrow flex items-center gap-3">
                    <span className="divider-gold" /> Follow
                  </p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href={business.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-12 h-12 border border-espresso flex items-center justify-center hover:bg-espresso hover:text-ivory transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={business.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-12 h-12 border border-espresso flex items-center justify-center hover:bg-espresso hover:text-ivory transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Button href={business.phoneHref} variant="primary">
                    Reserve Now
                  </Button>
                  <Button href={business.address.mapsHref} variant="outline" external>
                    Get Directions
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <Reveal>
                <div className="aspect-[5/4] border border-line overflow-hidden">
                  <iframe
                    src={business.address.embedSrc}
                    title="Map to Ash & Oak Cigar Club"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0, filter: "grayscale(0.3) contrast(0.95)" }}
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-surface border border-line p-8">
                  <p className="eyebrow flex items-center gap-3">
                    <span className="divider-gold" /> Hours
                  </p>
                  <ul className="mt-5 divide-y divide-line">
                    {business.hours.map((h) => (
                      <li
                        key={h.day}
                        className="py-3 flex justify-between text-[0.95rem]"
                      >
                        <span className="text-espresso">{h.day}</span>
                        <span
                          className={
                            h.time === "Closed" ? "text-ash" : "text-taupe"
                          }
                        >
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
