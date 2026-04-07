import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import { arrowDown2, mail, worldFIlled } from "@/assets/icons";

const ContactHeading = () => {
  return (
    <section className="bg-secondary text-white py-1 md:py-3 padding-x">
      <div className="flex justify-between items-center">
        <div className="flex gap-10.5">
          <div className="flex">
            <Icon icon={mail} className="size-4 mr-px" />
            <p className="text-xs font-medium leading-4.5">
              Support@cargoland.com
            </p>
          </div>
          <div className="flex">
            <Icon icon={mail} className="size-4 mr-px" />
            <p className="text-xs font-medium leading-4.5">+(204)323-2345</p>
          </div>
        </div>

        <Button variant="link" className="text-white gap-2 items-center p-0">
          <Icon icon={worldFIlled} color="white" className="text-white size-4 sm:size-6" />
          <span className="text-xs sm:text-sm font-normal sm:leading-5 underline">Lagos, NG </span>
          <Icon icon={arrowDown2} className="size-5" />
        </Button>
      </div>
    </section>
  );
};

export default ContactHeading;
