import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Instagram, Facebook } from "@/components/ui/SocialIcons";
import { business, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">
            Ash <span className="font-serif-italic text-gold">&amp;</span> Oak
          </p>
          <p className="font-serif-italic text-gold mt-2 text-lg">
            {business.tagline}
          </p>
          <p className="mt-6 text-ivory/70 leading-relaxed max-w-md">
            {business.intro}
          </p>
          <div className="flex gap-4 mt-7">
            <a
              href={business.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-espresso transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={business.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-espresso transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-gold">Visit</p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/80">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <a
                href={business.address.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                {business.address.line1}
                <br />
                {business.address.line2}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <a
                href={business.phoneHref}
                className="hover:text-gold transition-colors"
              >
                {business.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <a
                href={business.emailHref}
                className="hover:text-gold transition-colors"
              >
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-ivory/80">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-ivory/50">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="font-serif-italic">Crafted with care in Birmingham, Alabama.</p>
        </div>
      </div>
    </footer>
  );
}
