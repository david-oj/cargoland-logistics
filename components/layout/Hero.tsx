import { heroImg } from "@/assets/images";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import React, { ReactNode } from "react";

interface HeroProps {
  containerStyles?: string;
  imgStyles?: "home" | "otherPages";
  title: ReactNode | string;
  description: ReactNode | string;
  trackShipment?: boolean;
}

const backgroundImg = {
  home: " md:object-[100px] lg:object-[352px]",
  otherPages: " object-[10px] sm:object-[100px] lg:object-[250px_-120px] ",
};

const Hero = ({
  containerStyles,
  imgStyles,
  title,
  description,
  trackShipment = false,
}: HeroProps) => {
  const defaultStyles = "h-[calc(100vh-80px)] md:h-[calc(100vh-136px)]";
  const styles = containerStyles ? containerStyles : defaultStyles;
  const imageStyles = backgroundImg[imgStyles ?? "home"];

  return (
    <section className={`relative ${styles} overflow-hidden`}>
      <div className="absolute inset-0 -z-1 overflow-hidden">
        <Image
          src={heroImg}
          alt="Cargoland Logistics Logo"
          className={`size-full object-cover ${imageStyles}`}
          fill
        />
      </div>
      {/* Background Trapezoid */}
      <div className="absolute inset-0 hero-trapezoid h-full w-[100%] md:w-[80%] lg:w-[60%] bg-primary/78  transition-[clip-path] duration-500 ease-in-out " />

      <div className="container relative h-full flex flex-col justify-center pl-6 sm:pl-14 lg:pl-[97px] 2xl:pl-0  overflow-hidden">
        <h1 className="text-[28px] md:text-[32px] lg:text-[60px] leading-8.5 md:leading-10 lg:leading-18 font-bold text-white">
          {title}
        </h1>
        <p className="mt-4 text-sm md:text-lg lg:leading-7 max-w-[250px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[613px] text-white/85">
          {description}
        </p>

        {trackShipment && (
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
                className="w-full h-full py-4 px-6 pr-30 bg-neutral-50 placeholder:text-neutral-500 rounded-lg"
              />
              <button className="absolute top-1/2 transform -translate-y-1/2 right-1 active:scale-95 transition duration-300 bg-primary rounded-lg text-white flex items-center justify-center gap-2 w-[106px] h-[calc(100%-8px)]">
                <span className="text-base leaing-6">Track</span>
                <ArrowRight className="size-4.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
