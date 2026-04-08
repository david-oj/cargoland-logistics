import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { heroImg } from "@/assets/images";

const TrackShipment = () => {
  return (
    <section className="padding-x py-12 bg-primary">
      <div className="container flex flex-col-reverse md:flex-row justify-center items-center gap-[51px]">
        <div className="text-white flex-1">
          <h2 className="sub-heading">Track Your Shipment in Real Time</h2>
          <p className="text-base font-light leading-6 mt-2 text-white text-center">
            Enter your tracking ID to monitor shipment <br className="md:hidden" /> progress from pickup to
            delivery.
          </p>

          <div className="relative w-full md:max-w-[462px] h-12 sm:h-14 mt-6 rounded-lg">
            <input
              type="text"
              placeholder="Enter your tracking number"
              className="w-full h-full py-4 px-6 pr-30 bg-neutral-50 text-black placeholder:text-neutral-500 rounded-lg"
            />
            <button className="absolute top-1/2 transform -translate-y-1/2 right-1 active:scale-95 transition duration-300 bg-primary rounded-lg text-white flex items-center justify-center gap-2 w-[106px] h-[calc(100%-8px)]">
              <span className="text-base leaing-6">Track</span>
              <ArrowRight className="size-4.5" />
            </button>
          </div>
        </div>

        <div className="relative h-[43vw] lg:h-[20.1vw] max-h-[343px] max-w-[492px] w-full md:flex-1 bg-amber-50 shrink-0">
          <Image
            src={heroImg}
            alt="woman with package"
            className="size-full object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default TrackShipment;
