import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { MenuTabs } from "@/components/menu/MenuTabs";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cigar & Bar Menu",
  description:
    "Explore our curated menu of premium cigars, handcrafted cocktails, fine whiskey, wine, and small plates.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Menu"
        title={
          <>
            Cigar <span className="font-serif-italic text-oak">&amp;</span> Bar
          </>
        }
        subtitle="A curated selection — cigars from the world's finest growers, spirits aged with care, and cocktails crafted in-house."
      />

      <section className="py-20 md:py-24 bg-ivory">
        <MenuTabs />
      </section>

      <section className="bg-cream py-20 text-center">
        <Reveal>
          <p className="font-serif-italic text-2xl md:text-3xl max-w-2xl mx-auto px-6 text-espresso">
            &ldquo;The cigar pairing menu changes with the seasons &mdash; ask
            your host.&rdquo;
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10">
            <Button href={business.phoneHref} variant="primary">
              Reserve a Pairing
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
