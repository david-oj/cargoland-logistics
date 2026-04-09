import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

const faqs = [
  {
    question: "How do I book a shipment?",
    answer:
      "You can book a shipment by clicking on “Start Shipping,” filling in your shipment details, selecting a shipping mode, and confirming your order.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment by entering your tracking number in the tracking field on our website. You’ll get real-time updates on your package status and delivery progress.",
  },
  {
    question: "What shipping methods do you offer?",
    answer:
      "We offer multiple shipping options including Air Freight for fast delivery, Ocean Freight for cost-effective bulk shipping, and Road Freight for regional transportation.",
  },
  {
    question: "Do you provide door-to-door delivery?",
    answer:
      "Yes, we provide door-to-door delivery services. We handle the entire process from pickup at your location to final delivery at the destination.",
  },
];

const HelpCenter = () => {
  return (
    <section className="padding-x pt-12 md:pt-16 pb-[50px] lg:pt-[100px] bg-primary-light/20">
      <div className=" flex flex-col items-center justify-center">
        <div className="rounded-full py-2 px-3 bg-neutral-300">
          <p className="text-xs text-secondary font-medium leading-4.5">Faqs</p>
        </div>
        <h2 className="sub-heading mt-2 md:mt-4 font-semibold leading-12 text-center">
          Help Center FAQs
        </h2>
        <p className="text-base leading-6 max-w-[682px] mt-1 md:mt-3 text-center text-neutral-700">
          Find quick answers to common questions about our services, shipping
          process, and support.
        </p>
        <Accordion
          type="single"
          collapsible
          className="mt-8 max-w-[775px] mx-auto"
        >
          {faqs.map((faq, idx) => (
            <>
              <AccordionItem
                value={faq.question}
                className="border-b-0!"
                key={idx}
              >
                <AccordionTrigger className="font-bold text-xl md:text-2xl leading-8 p-0">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base font-light leading-6 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
              <div
                className={`${
                  idx !== faqs.length - 1 ? "" : "hidden"
                } h-px w-full bg-neutral-300 my-5 lg:my-10`}
              />
            </>
          ))}
        </Accordion>

        <Button variant="link" className="text-lg leading-7 mt-8 p-0 h-fit">
          Read More
        </Button>
      </div>
    </section>
  );
};

export default HelpCenter;
