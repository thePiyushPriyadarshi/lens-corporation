import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="dark:hidden relative h-screen overflow-y-hidden">
        <div className="absolute -top-14 left-16 w-[500px] aspect-square bg-gradient-to-bl from-[#68cefe] to-[#34d4af] blur-2xl opacity-35 -z-10"></div>
        <div className="absolute -top-14 left-[35%] w-[500px] h-full bg-gradient-to-br from-[#3badffdf] to-[#3badff7e] blur-2xl opacity-35 -z-10"></div>
        <div className="absolute -top-14 right-16 w-[500px] h-full bg-gradient-to-bl from-[#b1784f] to-[#ffb9a9] blur-2xl  opacity-35 -z-10"></div>
        <div className="absolute bottom-16 left-[40%] w-[400px] h-full bg-gradient-to-bl from-[#F5E1BF] to-[#ffb9a9] blur-2xl  opacity-35 -z-10"></div>
       <div className="w-11/12 mx-auto max-w-[1080px] z-50">
        
        <div className="flex flex-col justify-center mt-36 gap-7 max-w-[500px]">
          <p className="w-full lg:text-7xl md:text-5xl text-3xl">
            {" "}
            We are at the forefront of AI
          </p>
          <div className="text-xl">
            <p>
              From Conserving Wildlife to Automatically Generating Caricatures  <span className="font-semibold">– We Do It All</span>
            </p>
           
          </div>
          <Button className="py-7 w-fit hover:bg-white border hover:border-black hover:text-black rounded-xl px-12 text-lg">Learn More</Button>
        </div>
       </div>

      </div>

      <div className="relative hidden dark:block">
        <video autoPlay muted loop className="">
          <source src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4" />
        </video>
        <div className="absolute top-[50%] flex flex-col justify-center items-center gap-7 max-w-[1080px] w-11/12 left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <p className="text-white w-full font-semibold lg:text-7xl md:text-5xl text-3xl">
            {" "}
            We are at the forefront of AI
          </p>
          <div className="text-center text-xl">
            <p>
              From Conserving Wildlife to Automatically Generating Caricatures
            </p>
            <p className="font-semibold">– We Do It All</p>
          </div>
          <Button className="py-7 rounded-xl px-12 text-lg">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
