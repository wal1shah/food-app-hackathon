import Heroimg from "@/components/home/heroimg";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div>
      <Heroimg title="FAQ Page" subtitle="Faq" />
      <div>
        <h1 className="text-center text-[48px] font-bold">
          Questions Looks Here
        </h1>
        <p className="text-center text-[16px] leading-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How we serve food?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestiae ipsa totam
            quidem?
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How can we get in touch with you?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
            modi ullam amet debitis libero veritatis enim repellat optio natus
            eum delectus deserunt, odit expedita eos molestiae ipsa totam
            quidem?
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
