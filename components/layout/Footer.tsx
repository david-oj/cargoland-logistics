import { facebook, instagram, tiktok, youtube } from "@/assets/icons/index";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Cargoland", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Our Network", href: "#" },
      { label: "Partners", href: "#" },
      { label: "News & Updates", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Air Freight", href: "#" },
      { label: "Ocean Freight", href: "#" },
      { label: "Road Freight", href: "#" },
      { label: "Get a quote", href: "#" },
      { label: "Domestic Shipping", href: "#" },
    ],
  },
  {
    title: "Shipment Tools",
    links: [
      { label: "Book Shipment", href: "#" },
      { label: "Track Shipment", href: "#" },
      { label: "Shipping Guidelines", href: "#" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Help Center", href: "/faqs" },
      { label: "Contact Support", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
      { label: "Report an Issue", href: "#" },
    ],
  },
];

const socialIcons: {
  title: string;
  icon: string;
}[] = [
  {
    title: "Facebook",
    icon: facebook.src,
  },
  {
    title: "Tiktok",
    icon: tiktok.src,
  },
  {
    title: "Instagram",
    icon: instagram.src,
  },
  {
    title: "Youtube",
    icon: youtube.src,
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 md:pt-15 mt-auto">
      <div className="container">
        <div className=" px-6 lg:px-[86px] lg:pr-[200px] xl:pr-[268px] flex flex-wrap justify-between max-sm:grid grid-cols-2 gap-8 gap-y-6 md:gap-10 ">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl leading-7.5 font-roboto">
                {section.title}
              </h3>

              <ul className="mt-3 md:mt-4.5 space-y-3">
                {section.links.map((link, idx) => (
                  <li className="text-xs leading-4.5 text-white/80" key={idx}>
                    <Link href={link.href} className="">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-6 lg:ml-[86px] lg:mr-[101px] flex justify-between gap-2 mt-6 md:mt-8.5">
          <p className="text-xs text-white/70 leading-4.5 max-w-[402px]">
            <span className="font-semibold text-white/80">Address 1:-</span>
            303B Sahco Business Complex Cargo Terminal MMIA (Muritala Muhammad
            International Airport) Lagos Nigeria (HQ)
          </p>
          <p className="text-xs text-white/70 leading-4.5 max-w-[402px]">
            <span className="font-semibold text-white/80">Address 2:-</span>
            303B Sahco Business Complex Cargo Terminal MMIA (Muritala Muhammad
            International Airport) Lagos Nigeria (HQ)
          </p>
          <p className="text-xs text-white/70 leading-4.5 max-w-[402px]">
            <span className="font-semibold text-white/80">Address 3:-</span>
            303B Sahco Business Complex Cargo Terminal MMIA (Muritala Muhammad
            International Airport) Lagos Nigeria (HQ)
          </p>
        </div>

        <div className=" mx-6 lg:ml-[86px] lg:mr-[101px] ">
          {/* horizontal bar */}
          <div className="h-px mt-4 md:mt-5 bg-white/55 w-full" />

          <div className="mt-6 md:mt-[33px] pb-4 md:pb-8 lg:pb-[91px] flex flex-col max-md:gap-1 md:flex-row items-center justify-between">
            <p className="text-xs font-medium leading-4.5">
              &copy; {new Date().getFullYear()} Cargoland Africa. All rights
              reserved.
            </p>

            {/* Social Media icons */}
            <div className="my-2 flex gap-2.5 justify-end mx-6">
              {socialIcons.map((icon) => (
                <div
                  className="relative size-12.5 rounded-full border border-white/25 flex items-ce\ justify-center"
                  key={icon.title}
                >
                  <Image
                    src={icon.icon}
                    alt={icon.title}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-2 items-center md:mr-[40px] lg:mr-[102px]">
              <Link
                href="/privacy-policy"
                className="text-xs font-medium leading-4.5"
              >
                Privacy Policy
              </Link>
              <div className="w-px h-3.25 bg-white/80" />
              <Link
                href="/terms-and-conditions"
                className="text-xs font-medium leading-4.5"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
