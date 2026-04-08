import { heroImg } from "@/assets/images";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[calc(100dvh-136px)] overflow-hidden">
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="right-trapezoid" clipPathUnits="objectBoundingBox">
            <path
              d="
          M 0,0
          L 0.75,0
          L 1,1
          L 0,1
          Z
        "
            />
          </clipPath>
        </defs>
      </svg>

      <div className="absolute inset-0 -z-1 overflow-hidden">
        <Image
          src={heroImg}
          alt="Cargoland Logistics Logo"
          className="size-full object-cover md:object-[100px] lg:object-[352px] "
          fill
        />
      </div>

      <div className="h-full w-[100%] md:w-[80%] lg:w-[60%] bg-primary/78 hero-trapezoid transition-[clip-path] duration-500 ease-in-out flex flex-col justify-center pl-6 sm:pl-14 lg:pl-[97px]  overflow-hidden">
        <h1 className="text-[28px] md:text-[32px] lg:text-[60px] leading-8.5 md:leading-10 lg:leading-18 font-bold text-white">
          Fast <br className="lg:hidden" /> & Reliable <br /> Global Shipping
        </h1>
        <p className="mt-4 text-sm md:text-lg lg:leading-7 max-w-[250px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[613px] text-white/85">
          Ship packages across countries via Air, Ocean, or Road freight with
          real-time tracking and transparent pricing.
        </p>

        <div className="mt-10 w-[75vw] sm:w-[60vw] max-w-[380px] sm:max-w-[510px] overflow-hidden rounded-lg bg-white p-2 sm:p-6">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar">
            <Button
              variant="ghost"
              className="text-sm sm:text-base font-montserrat font-semibold leading-6 p-0"
            >
              Track Shipment
            </Button>
            <Button
              variant="ghost"
              className="text-sm sm:text-base font-montserrat font-semibold leading-6 p-0"
            >
              Book Shipment
            </Button>
            <Button
              variant="ghost"
              className="text-sm sm:text-base font-montserrat font-semibold leading-6 p-0"
            >
              Get a Quote
            </Button>
          </div>

          <div className="relative w-full h-12 sm:h-14 rounded-lg">
            <input
              type="text"
              placeholder="Enter your tracking number"
              className="w-full h-full py-4 px-6 pr-30 bg-neutral-100 placeholder:text-neutral-500 rounded-lg"
            />
            <button className="absolute top-1/2 transform -translate-y-1/2 right-1 active:scale-95 transition duration-300 bg-primary rounded-lg text-white flex items-center justify-center gap-2 w-[106px] h-[calc(100%-8px)]">
              <span className="text-base leaing-6">Track</span>
              <ArrowRight className="size-4.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
