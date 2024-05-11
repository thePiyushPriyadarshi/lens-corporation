import { chooseLens } from "@/data/choose-data";
import Image from "next/image";
import React from "react";

const ChooseCard = () => {
  return (
    <div className="my-20 flex flex-wrap justify-center gap-5 w-[95%] mx-auto">
      <div className="relative h-full">
        <div className="absolute w-[300px] -top-12 -z-10 -left-12 aspect-square dark:bg-transparent bg-[#34d4afa9] blur-[150px] "></div>
        <Card1 cardData={chooseLens[0]} />
      </div>
      <div className="relative">
        <div className="absolute w-[300px] -top-12 -z-10 -left-12 aspect-square dark:bg-transparent bg-[#69bfe7a7] blur-[150px] "></div>
        <Card2 cardData={chooseLens[1]} />
      </div>
      <div className="relative">
        <div className="absolute w-[300px] -top-12 -z-10 -left-12 aspect-square dark:bg-transparent bg-[#69bfe7a7] blur-[150px] "></div>
        <Card3 cardData={chooseLens[2]} />
      </div>
      <div className="relative">
        <div className="absolute w-[300px] -top-12 -z-10 -left-12 aspect-square dark:bg-transparent bg-[#ff9f3177] blur-[150px] "></div>
        <Card4 cardData={chooseLens[3]} />
      </div> 
    </div>
  );
};

export default ChooseCard;

const Card1 = ({ cardData }: any) => {
  return (
    <div
      className={`relative flex flex-col justify-between w-[336px] h-[435px] z-10 border border-transparent rounded-[30px] hover:bg-transparent bg-white dark:bg-[#1b1c1e] hover:border-[#34D4AE] group pt-8 p-6`}
    >
      {/* <div className="absolute -top-10 -left-10 w-full h-[300px] bg-gradient-to-b from-[#01c99b] via-teal-100 to-transparent blur-2xl opacity-35 -z-10"></div> */}
      <p className="text-2xl font-semibold">{cardData.title}</p>
      <div className="relative image-container-1 group-hover:opacity-100 w-[251px] h-[91px] mx-auto">
        <Image fill src={cardData.img} alt="img" />
      </div>
      <div className="text-muted-foreground/70">{cardData?.desc}</div>
    </div>
  );
};
const Card2 = ({ cardData }: any) => {
  return (
    <div
      className={`relative flex flex-col justify-between w-[336px] h-[435px] bg-white hover:bg-transparent z-10 border-transparent rounded-[30px] dark:bg-[#1b1c1e] hover:border-[#69C0E7] group border pt-8 p-6`}
    >
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#01c99b] via-teal-100 to-transparent blur-2xl opacity-35 z-0"></div> */}
      <p className="text-2xl font-semibold">{cardData.title}</p>
      <div className="relative image-container-2 group-hover:opacity-100 w-[138px] h-[138px] mx-auto">
        <Image fill src={cardData.img} alt="img" />
      </div>
      <div className="text-muted-foreground/70">{cardData?.desc}</div>
    </div>
  );
};
const Card3 = ({ cardData }: any) => {
  return (
    <div
      className={`relative flex flex-col justify-between w-[336px] h-[435px] bg-white hover:bg-transparent z-10 border-transparent rounded-[30px] dark:bg-[#1b1c1e] hover:border-[#FF605F] group border pt-8 p-6`}
    >
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#01c99b] via-teal-100 to-transparent blur-2xl opacity-35 z-0"></div> */}
      <p className="text-2xl font-semibold">{cardData.title}</p>
      <div className="relative image-container-3 group-hover:opacity-100 w-[125px] h-[200px] mt-5 mx-auto">
        <Image fill src={cardData.img} alt="img" />
      </div>
      <div className="text-muted-foreground/70">{cardData?.desc}</div>
    </div>
  );
};
const Card4 = ({ cardData }: any) => {
  return (
    <div
      className={`relative flex flex-col justify-between w-[336px] h-[435px] bg-white  hover:bg-transparent z-10  border-transparent rounded-[30px] dark:bg-[#1b1c1e] hover:border-[#FF9F31] group border pt-8 p-6`}
    >
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#01c99b] via-teal-100 to-transparent blur-2xl opacity-35 z-0"></div> */}
      <p className="text-2xl font-semibold">{cardData.title}</p>
      <div className="relative image-container-4 group-hover:opacity-100 w-[125px] h-[160px] mx-auto">
        <Image fill src={cardData.img} alt="img" />
      </div>
      <div className="text-muted-foreground/70">{cardData?.desc}</div>
    </div>
  );
};
