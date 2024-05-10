import { ChevronsRight } from "lucide-react";
import React from "react";

const BlogCard = () => {
  return (
    <div className="w-11/12 space-y-6 mx-auto max-w-[1080px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <GenerativeCard />
        <EvolutionCard />
      </div>
      <UnmaskingCard />
    </div>
  );
};

export default BlogCard;

const GenerativeCard = () => {
  return (
    <div className="relative group hover:bg-[#FFFBEA] dark:bg-[#1B1C1E] rounded-xl overflow-hidden pt-10 p-6">
      <div className="flex flex-col justify-center gap-y-7 group-hover:-translate-y-20 transition-all duration-200">
        <p className="text-orange-700 text-2xl">New!</p>
        <p className="text-3xl font-light">Generative AI</p>
        <div className="bg-[#FFF6CD] dark:bg-[#242424] text-lg mt-14 rounded-xl p-4 py-8  text-muted-foreground">
          In {"today's"}data-driven marketing world, keeping up with content
          creation demands can be a challenge. Read our latest blog to explore
          the power of Generative AI and its potential to reshape the marketing
          landscape....
        </div>
      </div>
      <div className=" absolute bottom-4 text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a
          className="flex items-center text-orange-700"
          href="https://lenscorp.ai/blogs/Generative%20AI"
        >
          Read More <ChevronsRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};
const EvolutionCard = () => {
  return (
    <div className="relative group hover:bg-[#F2F9FF]  dark:bg-[#1B1C1E] rounded-xl overflow-hidden pt-10 p-6">
      <div className="flex flex-col justify-center gap-y-7 group-hover:-translate-y-20 transition-all duration-200">
        <p className="text-muted-foreground text-2xl">April 25, 2024</p>
        <p className="text-3xl font-light">The Evolution of AI in Games</p>
        <div className="bg-[#E2F2FF] dark:bg-[#242424] text-lg mt-6 rounded-xl p-4 py-8  text-muted-foreground">
          The integration of artificial intelligence (AI) within the gaming
          industry has been a remarkable journey, marked by continual
          innovation. Read our latest blog to dive deep into the fascinating
          history of AI in games and discover the evolution that continues to
          shape the future of play!...
        </div>
      </div>
      <div className=" absolute bottom-4 text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a
          className="flex items-center text-orange-700"
          href="https://lenscorp.ai/blogs/Generative%20AI"
        >
          Read More <ChevronsRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};
const UnmaskingCard = () => {
  return (
    <div className="relative group  dark:bg-[#1B1C1E] hover:bg-gradient-to-tr from-[#FFE3E3] dark:from-transparent via-transparent to-transparent rounded-xl overflow-hidden pt-10 p-6">
      <div className="flex flex-col justify-center gap-y-7 group-hover:-translate-y-20 transition-all duration-200">
        <p className="text-muted-foreground text-2xl">April 18, 2024</p>
        <p className="lg:text-3xl text-2xl font-light">
          Unmasking the Misconceptions of Artificial Intelligence in the
          Workplace
        </p>
        <div className="bg-[#FFECEB] dark:bg-[#242424] text-lg mt-6 rounded-xl p-4 py-8  text-muted-foreground">
          The rise of Artificial Intelligence (AI) has sparked both excitement
          and apprehension. Many professionals are unsure how AI impacts their
          work....
        </div>
      </div>
      <div className=" absolute bottom-4 text-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
        <a
          className="flex items-center text-orange-700"
          href="https://lenscorp.ai/blogs/Generative%20AI"
        >
          Read More <ChevronsRight className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};
