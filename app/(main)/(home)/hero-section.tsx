import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="dark:hidden relative h-screen overflow-y-hidden">
        <div className="absolute -top-14 left-16 w-[650px] h-full bg-gradient-to-b from-[#68cefe] to-[#34d4af] blur-2xl opacity-35 z-0"></div>
        <div className="absolute -top-14 left-[35%] w-[500px]  h-full bg-gradient-to-bl from-[#b6e1ffdf] to-[#ffd92f7e] blur-2xl opacity-35 z-0"></div>
        <div className="absolute bottom-16 left-[50%] w-[400px] h-full bg-gradient-to-b from-[#b1784f] to-[#ffb9a9]  blur-2xl  opacity-25 z-0"></div>
        <div className="absolute -top-14 right-16 w-[500px] h-full bg-gradient-to-bl from-[#F5E1BF] to-[#ffb9a9] blur-2xl  opacity-35 z-0"></div>
        <div className="w-11/12 mx-auto flex md:items-start items-center h-screen max-w-[1080px]">
          <div className="flex flex-col md:items-start items-center justify-center absolute mt-36 gap-7 max-w-[500px]">
            <p className="w-full text-center md:text-left lg:text-7xl text-black text-5xl ">
              {" "}
              We are at the forefront of AI
            </p>
            <div className="text-xl hidden md:block">
              <p>
                From Conserving Wildlife to Automatically Generating Caricatures{" "}
                <span className="font-semibold">– We Do It All</span>
              </p>
            </div>
            <Button className="py-7 w-fit hover:bg-white border hover:border-black hover:text-black rounded-xl px-12 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="relative hidden h-screen dark:block">
        <video autoPlay muted loop className="object-cover h-screen md:h-fit">
          <source className="" src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4" />
        </video>
        <div className="absolute top-[50%] flex flex-col justify-center items-center gap-7 max-w-[1080px] w-11/12 left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <p className="text-white w-full font-semibold text-center lg:text-7xl text-5xl">
            {" "}
            We are at the forefront of AI
          </p>
          <div className="text-center hidden md:block text-xl">
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
