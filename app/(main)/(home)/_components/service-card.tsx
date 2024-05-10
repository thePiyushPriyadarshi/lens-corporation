import { serviceData } from "@/data/service-data";

const ServiceCard = ({ data }: any) => {
  return (
    <>
      <div className="relative">
        <div className="absolute w-[300px] -top-12 -z-10 -left-12 aspect-square dark:bg-transparent bg-[#34d4afa9] blur-[150px] "></div>
        <Card1 cardData={data[0]} />
      </div>
      <div className="relative">
        <div className="absolute w-[300px] -top-12 -z-10 -right-12 aspect-square dark:bg-transparent bg-[#69bfe7a7] blur-[150px] "></div>
        <Card2 cardData={data[1]} />
      </div>
      <div className="relative">
        <div className="absolute w-[300px] -bottom-12 -z-10 -left-12 aspect-square dark:bg-transparent bg-[#ff5f5f79] blur-[150px] "></div>
        <Card3 cardData={data[2]} />
      </div>
      <div className="relative">
        <div className="absolute w-[300px] -bottom-12 -z-10 -right-12 aspect-square dark:bg-transparent bg-[#ff9f3177] blur-[150px] "></div>
        <Card4 cardData={data[3]} />
      </div> 
    </>
  );
};

export default ServiceCard;

const Card1 = ({ cardData }: any) => {
  return (
    <div
      className={`relative w-full z-10 border-1 border-transparent rounded-xl dark:bg-[#1b1c1e] bg-white dark:hover:bg-black hover:bg-transparent hover:border-[#34D4AE] group border p-10`}
    >
      {/* <div className="absolute top-0 left-0 w-full h-full dark:hidden group-hover:bg-gradient-to-br from-[#34d4afc6] to-[#ecfffb] blur-2xl opacity-35 z-0"></div> */}
      <div className="flex items-center">
        <p className="text-8xl text-muted-foreground/25 font-semibold">
          <span>0</span>
          <span className={`group-hover:text-[#34D4AE]`}>
            {cardData?.index}
          </span>
        </p>
        <p
          className={`-ml-10 group-hover:translate-x-10 transition-all duration-300 text-4xl text-[#34D4AE] group-hover:text-muted-foreground/80 font-semibold`}
        >
          {cardData?.title}
        </p>
      </div>
      <div className="mt-16 text-muted-foreground/80 text-xl leading-8 font-semibold">
        {cardData?.desc}
      </div>
    </div>
  );
};
const Card2 = ({ cardData }: any) => {
  return (
    <div
      className={`relative z-10 border-1 border-transparent rounded-xl dark:bg-[#1b1c1e] bg-white dark:hover:bg-black hover:bg-transparent hover:border-[#69C0E7] group border p-10`}
    >
      {/* <div className="absolute top-0 right-0 w-full h-full dark:hidden group-hover:bg-gradient-to-bl from-[#69C0E7] to-[#ecfffb] blur-2xl opacity-35 z-0"></div> */}

      <div className="flex items-center">
        <p className="text-8xl text-muted-foreground/25 font-semibold">
          <span>0</span>
          <span className={`group-hover:text-[#69C0E7]`}>
            {cardData?.index}
          </span>
        </p>
        <p
          className={`-ml-10 group-hover:translate-x-10 transition-all duration-300 text-4xl text-[#69C0E7] group-hover:text-muted-foreground/80 font-semibold`}
        >
          {cardData?.title}
        </p>
      </div>
      <div className="mt-16 text-muted-foreground/80 text-xl leading-8 font-semibold">
        {cardData?.desc}
      </div>
    </div>
  );
};
const Card3 = ({ cardData }: any) => {
  return (
    <div
      className={`relative z-10 border-1 border-transparent rounded-xl dark:bg-[#1b1c1e] dark:hover:bg-black bg-white hover:bg-transparent hover:border-[#FF605F] group border p-10`}
    >
      {/* <div className="absolute bottom-0 right-0 w-full h-full dark:hidden group-hover:bg-gradient-to-tr from-[#FF605F] to-[#ecfffb] blur-2xl opacity-0 z-0"></div> */}

      <div className="flex items-center">
        <p className="text-8xl text-muted-foreground/25 font-semibold">
          <span>0</span>
          <span className={`group-hover:text-[#FF605F]`}>
            {cardData?.index}
          </span>
        </p>
        <p
          className={`-ml-10 group-hover:translate-x-10 transition-all duration-300 text-4xl text-[#FF605F] group-hover:text-muted-foreground/80 font-semibold`}
        >
          {cardData?.title}
        </p>
      </div>
      <div className="mt-16 text-muted-foreground/80 text-xl leading-8 font-semibold">
        {cardData?.desc}
      </div>
    </div>
  );
};
const Card4 = ({ cardData }: any) => {
  return (
    <div
      className={`relative z-10 border-1 border-transparent rounded-xl dark:bg-[#1b1c1e] dark:hover:bg-black  bg-white hover:bg-transparent hover:border-[#FF9F31] group border p-10`}
    >
      {/* <div className="absolute bottom-0 left-0 w-full h-full dark:hidden group-hover:bg-gradient-to-tl from-[#FF9F31] to-[#ecfffb] blur-2xl opacity-20 z-0"></div> */}

      <div className="flex items-center">
        <p className="text-8xl text-muted-foreground/25 font-semibold">
          <span>0</span>
          <span className={`group-hover:text-[#FF9F31]`}>
            {cardData?.index}
          </span>
        </p>
        <p
          className={`-ml-10 group-hover:translate-x-10 transition-all duration-300 text-4xl text-[#FF9F31] group-hover:text-muted-foreground/80 font-semibold`}
        >
          {cardData?.title}
        </p>
      </div>
      <div className="mt-16 text-muted-foreground/80 text-xl leading-8 font-semibold">
        {cardData?.desc}
      </div>
    </div>
  );
};
