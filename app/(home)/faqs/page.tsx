import HelpCenter from "@/components/contact/HelpCenter";
import Hero from "@/components/layout/Hero";

export default function FaqsPage() {
  return (
    <>
      <Hero
        title="FAQs"
        description="Find answers to common questions about shipping, tracking, payments, and services to help you navigate our platform easily."
        containerStyles="h-[353px]"
        imgStyles="otherPages"
      />
      <HelpCenter />
    </>
  );
}
