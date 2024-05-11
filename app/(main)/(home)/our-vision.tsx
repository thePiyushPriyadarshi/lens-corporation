import React from "react";
import LineSection from "./_components/line-section";

const OurVisionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-fit my-10">
        <h2 className="text-2xl font-semibold uppercase my-1">Our Visions</h2>
        <div className="bg-gradient-to-r from-[#0796FF] to-[#91F6FF] rounded-lg mx-auto w-8/12 h-[4px]"></div>
      </div>
      <div className="lg:text-7xl max-w-[1080px] text-center mt-16 mb-10 md:text-5xl text-3xl">
        <p>AI for Social Good</p>
      </div>
      <div className="lg:text-2xl max-w-[880px] font-light  text-muted-foreground text-center text-xl">
        <p>
          Explainable AI (XAI) is an emerging subject of machine learning
          research that refers to strategies that try to provide transparency to
          typically opaque AI models and their predictions.
        </p>
      </div>
      <div className="mt-32">
        <LineSection />
      </div>
    </div>
  );
};

export default OurVisionSection;
