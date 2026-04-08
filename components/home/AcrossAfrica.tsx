import { worldMap } from "@/assets/images";
import Image from "next/image";

const AcrossAfrica = () => {
  return (
    <section className="pt-12 md:pt-[104px] overflow-hidden">
      <div className="padding-x flex flex-col items-center justify-center">
        <div className="rounded-full py-2 px-3 bg-neutral-300">
          <p className="text-xs text-secondary font-medium leading-4.5">
            Our Service Overview
          </p>
        </div>
        <h2 className="sub-heading mt-2 md:mt-4 font-semibold leading-12 text-center">
          Across Africa, We Deliver
        </h2>
        <p className="text-base leading-6 max-w-[682px] mt-1 md:mt-3 text-center text-neutral-700">
          Delivering reliable logistics solutions across major cities and
          regions in Africa with speed, efficiency, and trusted network
          coverage.
        </p>
      </div>

      <div className="mt-8 md:mt-9 md:padding-x flex flex-col items-center justify-center">
        <div className="relative h-[305px] w-full max-w-[782px]">
          <div className="absolute left-1/2 h-80 xs:h-100 sm:h-100  w-[140%]  sm:w-[110vw] md:w-full  transform -translate-x-1/2 semi-circle bg-primary-light rounded-fullmx-auto" />
          <Image
            src={worldMap}
            alt="world map"
            className="size-full object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default AcrossAfrica;
