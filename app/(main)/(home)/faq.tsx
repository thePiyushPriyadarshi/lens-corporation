import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/faq";
import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-fit mt-20">
        <h2 className="lg:text-xl font-semibold uppercase my-1">
          Get to Know us
        </h2>
        <div className="bg-gradient-to-r from-[#0796FF] to-[#91F6FF] rounded-lg mx-auto w-8/12 h-[4px]"></div>
      </div>
      <div className="lg:text-7xl max-w-[1080px] text-center my-10 md:text-5xl text-3xl">
        <p>Frequently Asked Questions</p>
      </div>
      <div className="w-11/12 mx-auto my-5">
        <Accordion type="multiple" className="w-full grid gap-5 lg:grid-cols-2 grid-cols-1">
          {faq.map((item, i) => (
            <AccordionItem value={`item-${i+1}`} className="" key={i}>
              <AccordionTrigger>{item.ques}</AccordionTrigger>
              <AccordionContent>{item.ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
