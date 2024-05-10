import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col w-11/12 mx-auto mt-8 items-center justify-center">
      <div className="w-fit my-10">
        <h2 className="lg:text-7xl md:text-5xl text-3xl my-4">About Us</h2>
        <div className="bg-gradient-to-r from-[#0796FF] to-[#91F6FF] rounded-lg mx-auto w-8/12 h-[9px]"></div>
      </div>

      <div className="max-w-[1200px] mt-6 group w-11/12 hover:scale-105 transition-all duration-200 bg-[#E2F2FF] dark:bg-[#1B1C1E]  rounded-3xl px-6 py-8 lg:px-14 flex md:flex-row gap-5 items-center flex-col justify-between">
        <div className="flex max-w-[450px] flex-col gap-y-16 pt-12">
          <h3 className="lg:text-5xl text-2xl font-semibold">Welcome To LENS</h3>
          <p className="text-muted-foreground">
            We put our hearts, souls and sweat into designing and developing
            custom AI - powered solutions for your business so you {"don't"}{" "}
            have to.
          </p>
          <Button variant={"outline"}  className="w-fit p-6 rounded-xl group/button">Learn More <ArrowRight className="hidden group-hover/button:block transition-all duration-200 w-4 h-4 ml-2"/> </Button>
        </div>
        <div className="relative w-full max-w-[450px] border-[12px] rounded-lg group-hover:border-[0px] transition-all duration-200 border-white aspect-square">
            <Image fill={true} className="rounded-xl" src={"https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75"} alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
