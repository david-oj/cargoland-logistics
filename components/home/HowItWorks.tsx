import { target } from "@/assets/icons/index";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const howItWorks = [
  {
    title: "Select shipping mode",
    description: "Choose Air, Ocean, or Road freight.",
  },
  {
    title: "Enter shipment details",
    description: "Pickup location, destination, weight, package type.",
  },
  {
    title: "Choose carrier & pay",
    description: "Select available carrier and complete payment.",
  },
  {
    title: "Track shipment",
    description: "Receive a unique tracking ID and monitor delivery.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-white">
      {/* Dark primary background color  */}
      <div className="absolute h-[465px] w-full bg-primary-dark" />
      <div className="padding-x pt-12 md:pt-[90px] relative z-5 flex flex-col items-center text-white">
        <div className="rounded-full py-2 px-3 bg-primary/40">
          <p className="text-xs font-medium leading-4.5">Process</p>
        </div>

        <h2 className="mt-2 md:mt-4 sub-heading">
          How It Works
        </h2>

        <p className="text-base leading-6 mt-1 md:mt-3 text-center">
          Get your shipment booked and tracked in four simple steps.
        </p>
      </div>

      <div className="padding-x pt-6 md:pt-10 pb-8 md:pb-12 relative z-5">
        <div className="p-6 md:py-14.5 md:px-[45px] grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-[24px] bg-white ">
          {howItWorks.map((step, idx) => (
            <div
              className="py-6 px-5.5 space-y-4 rounded-[16px] bg-primary-light"
              key={idx}
            >
              <div className="size-14 rounded-full bg-primary/8 flex justify-center items-center">
                <Image src={target} alt="step icons" width={24} height={24} />
              </div>
              <h3 className="text-xl leading-8">{step.title}</h3>

              <p className="text-base leading-6 text-neutral-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <button className=" border border-primary rounded-lg py-3 px-5 flex gap-2 items-center text-primary mx-auto md:">
          Start Shipping
          <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
