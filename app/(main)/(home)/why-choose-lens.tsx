import { Check } from "lucide-react";
import React from "react";
import ChooseCard from "./_components/choose-card";


const list = [
    "State-of-the-art solutions",
    "Lifetime support & upgrades",
    "Fast & Efficient",
    "Plug-and-Play",
    "No extra computation fee",
    "24x7 Progress Monitoring",
    "No licensing fee",
    "Incremental Updates"
]
const WhyChooseSection = () => {
  return (
    <div className="flex flex-col my-20 items-center justify-center">
      <div className="flex gap-2 font-semibold text-xl uppercase">
        {" "}
        Why
        <div className="w-fit">
          <h2 className="">Choose</h2>
          <div className="bg-gradient-to-r mt-1 from-[#0796FF] to-[#91F6FF] rounded-lg mx-auto w-8/12 h-[5px]"></div>
        </div>
        Lens
      </div>
      <div className="lg:text-7xl max-w-[1080px] text-center mt-16 mb-10 md:text-5xl text-3xl">
        <p>AI-driven solutions backed by science</p>
      </div>
      <div className="lg:text-2xl max-w-[980px] text-muted-foreground text-center text-xl">
        <p>Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</p>
      </div>

      <div className="mt-10">
        <ul className="grid lg:grid-cols-2 gap-4 grid-cols-1">
            {
                list.map((item,i)=>(
                    <li key={i} className="flex gap-2"> <Check strokeWidth={3} className="w-4 h-4 my-auto"/> <span className="font-medium">{item}</span></li>
                ))
            }
        </ul>
      </div>
      <ChooseCard/>
    </div>

  );
};

export default WhyChooseSection;
