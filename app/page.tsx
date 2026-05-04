import { HeroVideo } from "@/components/home/HeroVideo";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { FeaturedMenu } from "@/components/home/FeaturedMenu";
import { EventsPreview } from "@/components/home/EventsPreview";
import { MembershipCTA } from "@/components/home/MembershipCTA";
import { LocationStrip } from "@/components/home/LocationStrip";

export default function Home() {
  return (
    <>
      <HeroVideo />
      <StoryTeaser />
      <FeaturedMenu />
      <EventsPreview />
      <MembershipCTA />
      <LocationStrip />
    </>
  );
}
