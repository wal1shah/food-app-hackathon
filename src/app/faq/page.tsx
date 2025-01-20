"use client";
import Heroimg from "@/components/Common/heroimg";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleAccordionChange = (value: string) => {
    setExpandedItem(expandedItem === value ? null : value);
  };

  return (
    <div>
      <Heroimg title="FAQ Page" subtitle="Faq" />
      <div className="m-10">
        <h1 className="text-center text-[48px] font-bold pt-10">
          Questions Looks Here
        </h1>
        <p className="text-center text-[16px] leading-6 mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the{" "}
        </p>
      </div>

      {/* Responsive grid layout for accordions */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10 p-12">
        {/* Accordion 1 */}
        <div className="border w-full  p-4 rounded-lg shadow-lg">
          <Accordion
            type="single"
            collapsible
            onValueChange={handleAccordionChange}
            value={expandedItem === "item-1" ? "item-1" : undefined}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>How we serve food?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Accordion 2 */}
        <div className="border w-full  p-4 rounded-lg shadow-lg">
          <Accordion
            type="single"
            collapsible
            onValueChange={handleAccordionChange}
            value={expandedItem === "item-2" ? "item-2" : undefined}
          >
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the delivery time?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Accordion 3 */}
        <div className="border w-full  p-4 rounded-lg shadow-lg">
          <Accordion
            type="single"
            collapsible
            onValueChange={handleAccordionChange}
            value={expandedItem === "item-3" ? "item-3" : undefined}
          >
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I place an order?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Accordion 4 */}
        <div className="border w-full  p-4 rounded-lg shadow-lg">
          <Accordion
            type="single"
            collapsible
            onValueChange={handleAccordionChange}
            value={expandedItem === "item-4" ? "item-4" : undefined}
          >
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I modify my order?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Accordion 5 */}
        <div className="border w-full  p-4 rounded-lg shadow-lg">
          <Accordion
            type="single"
            collapsible
            onValueChange={handleAccordionChange}
            value={expandedItem === "item-5" ? "item-5" : undefined}
          >
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer any discounts?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Accordion 6 */}
        <div className="border w-full  p-4 rounded-lg shadow-lg">
          <Accordion
            type="single"
            collapsible
            onValueChange={handleAccordionChange}
            value={expandedItem === "item-6" ? "item-6" : undefined}
          >
            <AccordionItem value="item-6">
              <AccordionTrigger>What are the payment options?</AccordionTrigger>
              <AccordionContent className="overflow-hidden transition-all duration-300 ease-in-out">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis modi ullam amet debitis libero veritatis enim repellat
                optio natus eum delectus deserunt, odit expedita eos molestiae
                ipsa totam quidem?
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
