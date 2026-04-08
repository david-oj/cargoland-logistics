import { manWIthPackage } from "@/assets/images";
import Image from "next/image";

const DiscoverLogistics = () => {
  return (
    <section className="padding-x py-12  lg:pt-[143px] lg:pb-[122px] bg-primary-light/20">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[97px]">
        <div className="relative h-[43vw] lg:h-[28vw] max-h-[486px] max-w-[595px] w-full md:flex-1">
          <Image
            src={manWIthPackage}
            alt="man with package"
            className="size-full object-cover"
            fill
          />
        </div>

        <div className="flex-1 flex flex-col justify-center max-md:items-center bg-amber-10 max-w-[450px]">
          <div className="rounded-full py-2 px-3 bg-secondary/10 w-fit">
            <p className="text-xs text-secondary font-medium leading-4.5">
              Process
            </p>
          </div>
          <h2 className="mt-4 sub-heading max-md:text-center">
            Discover Our Logistics Services
          </h2>

          <p className="text-base font-light leading-6 mt-2 text-neutral-700 text-center">
            Showcase what your platform offers beyond{" "}
            <br className="md:hidden" /> just shipping.
          </p>

          <ul className="mt-4 lg:mt-6 grid gap-x-4 lg:gap-x-12.75 gap-y-2 lg:gap-y-4 grid-cols-2 max-w-[407px]">
            <li className="text-base leading-5.5 flex gap-2 items-center">
              <div className="size-2 bg-secondary" />
              Express Delivery
            </li>
            <li className="text-base leading-5.5 flex gap-2 items-center">
              <div className="size-2 bg-secondary" />
              Bulk Cargo Handling
            </li>
            <li className="text-base leading-5.5 flex gap-2 items-center">
              <div className="size-2 bg-secondary" />
              Door-to-Door Service
            </li>
            <li className="text-base leading-5.5 flex gap-2 items-center">
              <div className="size-2 bg-secondary" />
              Customs Clearance
            </li>
            <li className="text-base leading-5.5 flex gap-2 items-center">
              <div className="size-2 bg-secondary" />
              Real-Time Tracking
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DiscoverLogistics;
