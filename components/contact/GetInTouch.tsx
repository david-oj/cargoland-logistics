import { call, chat, support } from "@/assets/icons/index";
import Image from "next/image";

const contacts = [
  {
    title: "Chat to Sales",
    description: "Speak to our friendly team.",
    icon: support,
    link: "Sales@cargolandafrica.com",
    action: "mailto",
  },

  {
    title: "Chat to Support",
    icon: chat,
    description: "We're here to help",
    link: "Sales@cargolandafrica.com",
    action: "mailto",
  },

  {
    title: "Call Us",
    icon: call,
    description: "Mon - Fri from 8am to 5pm",
    link: "+1(565)000-1110",
    action: "tel",
  },
];

const GetInTouch = () => {
  return (
    <section className="container padding-x py-12 md:py-[64px] lg:py-[103px] ">
      <div className=" flex flex-col items-center justify-center">
        <div className="rounded-full py-2 px-3 bg-neutral-300">
          <p className="text-xs text-secondary font-medium leading-4.5">
            Contact Us
          </p>
        </div>
        <h2 className="sub-heading mt-2 md:mt-4 font-semibold leading-12 text-center">
          Get in Touch with Us
        </h2>
        <p className="text-base leading-6 max-w-[682px] mt-1 md:mt-3 text-center text-neutral-700">
          Get in touch with us for quick assistance, reliable support, and
          answers to all your shipping concerns.
        </p>
      </div>

      <div className="flex gap-6 flex-wrap mt-8 md:mt-12">
        {contacts.map((contact, idx) => (
          <div
            className="py-6 px-5.5 border rounded-[16px] flex-1 min-w-[240px]"
            key={idx}
          >
            <div className="size-14 flex justify-center items-center bg-primary rounded-full">
              <Image
                src={contact.icon}
                alt={contact.title}
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-2xl leading-8 mt-4">{contact.title}</h3>
            <p className="text-base leading-6 text-neutral-400 mt-4 max-w-[345px]">
              {contact.description}
            </p>
            <a
              href={`${contact.action}:${contact.link}`}
              className="mt-4 md:mt-8 block text-primary underline underline-offset-2 "
            >
              {contact.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;
