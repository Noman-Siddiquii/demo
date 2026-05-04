import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Clock, Phone } from "lucide-react";
import { business } from "@/lib/content";

export function LocationStrip() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden border border-line">
              <iframe
                src={business.address.embedSrc}
                title="Ash & Oak Location"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "grayscale(0.3) contrast(0.95)" }}
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="divider-gold" /> Visit Us
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display mt-5 text-4xl md:text-5xl leading-[1.1]">
                Find your seat at the bar
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 space-y-5">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 text-oak shrink-0 mt-0.5" />
                  <div>
                    <p className="eyebrow">Address</p>
                    <a
                      href={business.address.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-espresso mt-1 block hover:text-oak transition-colors"
                    >
                      {business.address.line1}
                      <br />
                      {business.address.line2}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="w-5 h-5 text-oak shrink-0 mt-0.5" />
                  <div>
                    <p className="eyebrow">Hours</p>
                    <p className="text-espresso mt-1">
                      Tue – Sun · 5:00 PM until late
                    </p>
                    <p className="text-ash text-sm mt-0.5">Closed Mondays</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 text-oak shrink-0 mt-0.5" />
                  <div>
                    <p className="eyebrow">Reservations</p>
                    <a
                      href={business.phoneHref}
                      className="text-espresso mt-1 block hover:text-oak transition-colors"
                    >
                      {business.phone}
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
