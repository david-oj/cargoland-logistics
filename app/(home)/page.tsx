import DiscoverLogistics from "@/components/home/DiscoverLogistics";
import Hero from "@/components/layout/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Hero
        trackShipment
        title={
          <>
            Fast <br className="lg:hidden" /> & Reliable <br /> Global Shipping
          </>
        }
        description=" Ship packages across countries via Air, Ocean, or Road freight with
          real-time tracking and transparent pricing."
      />
      <Services />
      <HowItWorks />
      <DiscoverLogistics />
    </>
  );
}
