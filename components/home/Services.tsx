import { ArrowRight } from "lucide-react";
import { plane, ship, truck } from "@/assets/icons/index";
import Image from "next/image";

const services = [
  {
    title: "Air Freight",
    description:
      "We provide fast international shipping for urgent deliveries with express cargo services, secure handling, and a reliable global airport network.",
    icon: plane,
    action: "Ship Via Air",
  },

  {
    title: "Ocean Freight",
    icon: ship,
    description:
      "A reliable option for bulk cargo shipping, offering container transport (FCL & LCL), large capacity, and cost-effective international delivery.",
    action: "Ship Via Ocean",
  },

  {
    title: "Road Freight",
    icon: truck,
    description:
      "Reliable transportation across cities and borders with regional cargo services, door-to-door delivery, and fleet-tracked vehicles.",
    action: "Ship Via Road",
  },
];

const Services = () => {
  return (
    <section className="py-10 md:py-[64px] lg:py-[103px] padding-x">
      <div className="flex flex-col items-center">
        <div className="rounded-full py-2 px-3 bg-neutral-300">
          <p className="text-xs text-secondary font-medium leading-4.5">
            Our Service Overview
          </p>
        </div>
        <h2 className="text-2xl md:text-[40px] mt-2 md:mt-4 font-semibold leading-12 text-center">
          Services that we Offer
        </h2>
        <p className="text-base leading-6 max-w-[682px] mt-1 md:mt-3 text-center text-neutral-700">
          Choose the shipping mode that fits your needs — from express air
          freight to cost-effective ocean routes.
        </p>

        <div className="flex gap-6 flex-wrap mt-8 md:mt-12">
          {services.map((service, idx) => (
            <div
              className="py-6 px-5.5 border rounded-[16px] flex-1 min-w-[240px]"
              key={idx}
            >
              <div className="size-14 flex justify-center items-center bg-primary rounded-full">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-2xl leading-8 mt-4">{service.title}</h3>
              <p className="text-base leading-6 text-neutral-400 mt-4 max-w-[345px]">
                {service.description}
              </p>
              <button className="py-3 px-5 mt-4 md:mt-8 flex items-center gap-3 whitespace-nowrap text-base font-normal leading-6  bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-lg transition duration-300">
                {service.action}
                <ArrowRight className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
