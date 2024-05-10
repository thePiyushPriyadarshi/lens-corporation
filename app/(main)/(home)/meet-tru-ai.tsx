import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import ChooseCard from "./_components/choose-card";

const MeetTruAiSection = () => {
  return (
    <div className="mt-28 z-10">
      <div className="clip w-full min-h-[600px] bg-[#272E5C] py-10 dark:bg-[#242424]">
        <div className="flex justify-between items-center text-white md:pt-48 mx-auto">
          <div className="relative ml-24 lg:visible invisible w-[350px] aspect-square">
            <Image
              className=""
              fill
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=384&q=75"
              alt="img"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-5">
            <div className="text-7xl  font-semibold flex gap-3">
              Meet{" "}
              <div className="sliding-animation">
                Tru-AI
                <img
                  className="w-[230px]"
                  src="https://lenscorp.ai/_next/static/media/underline.27e9f7f7.svg"
                  alt=""
                />
              </div>
            </div>
            <p className="text-2xl">Design. Create. Deploy.</p>
            <p className="text-xl sliding-animation font-semibold">
              the Future of AI | Power to EDIT
            </p>
            <p className="text-center">
              Based On Your Website & Traffic Trends, Tru-AI Optimises Your
              Website
            </p>
            <Button
              variant={"outline"}
              className="w-fit p-6 mt-5 rounded-xl border-white group/button"
            >
              Learn More{" "}
              <ArrowRight className="hidden group-hover/button:block transition-all duration-200 w-4 h-4 ml-2" />{" "}
            </Button>
          </div>
          <div className="w-[400px] lg:visible invisible">
            <video autoPlay muted loop className="rounded-l-[100px]">
              <source
                src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTruAiSection;
