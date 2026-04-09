import GetInTouch from "@/components/contact/GetInTouch";
import HelpCenter from "@/components/contact/HelpCenter";
import Hero from "@/components/layout/Hero";

export default function ContactPage() {
  return (
    <>
      <Hero
        // trackShipment
        containerStyles="h-[353px]"
        imgStyles="otherPages"
        title="Contact Support"
        description="Our support team is always ready to assist you with any questions, concerns, or shipping needs anytime."
      />
      <GetInTouch />
      <HelpCenter />
    </>
  );
}
