import DiscoverLogistics from "@/components/home/DiscoverLogistics";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Services from "@/components/home/Services";
import TrackShipment from "@/components/home/TrackShipment";
import WeDeliver from "@/components/home/AcrossAfrica";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <DiscoverLogistics />
      <TrackShipment />
      <WeDeliver />
    </>
  );
}
