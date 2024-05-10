import { Fingerprint, Scale } from "lucide-react";
import React from "react";

const LineSection = () => {
  return (
    <div className="max-w-[980px] mx-auto w-11/12">
      <div className="grid grid-cols-2 gap-y-14">
        <DiversitySection />
        <div className="relative lg:border-l-2 border-dashed border-gray-500 h-full">
          <div className="absolute top-[50%] left-[50%] lg:-top-16 lg:-left-[30px] p-1 rounded-full w-fit border-4 border-muted-foreground/90">
            <img className="w-[45px] h-[45px] block dark:hidden" src="/group.svg" alt="" />
            <img className="w-[45px] h-[45px] hidden dark:block" src="/group-light.svg" alt="" />
          </div>
        </div>
        <div className="relative lg:border-r-2 border-dashed border-gray-500 h-full">
          <div className="absolute top-[50%] right-[50%]  lg:-top-14 lg:-right-[30px] p-1 rounded-full w-fit border-4 border-muted-foreground/90">
            <Fingerprint className="w-10 h-10" /> 
          </div>
        </div>
        <RegulatorySection />
        <CodeSection />
        <div className="relative lg:border-l-2 border-dashed border-gray-500 h-full">
          <div className="absolute top-[50%] left-[50%] lg:-top-14 lg:-left-[30px] p-1 rounded-full w-fit border-4 border-muted-foreground/90">
            <Scale className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineSection;

const DiversitySection = () => {
  return (
    <div className="lg:px-24 p-2 space-y-10 hover:scale-105 transition-all duration-300">
      <h6 className="lg:text-3xl text-2xl font-semibold">
        Diversity & Fairness
      </h6>
      <p className="text-muted-foreground text-lg">
        When training our AI models, we consider ethical and social implications
        of algorithm-based decision making. Our solutions use high-quality and
        fairly-represented data sets to eliminate human cognitive biases.
      </p>
    </div>
  );
};
const RegulatorySection = () => {
  return (
    <div className="lg:p-16 p-2 space-y-10 hover:scale-105 transition-all duration-300">
      <h6 className="lg:text-3xl text-2xl font-semibold">
        Regulatory Compliance
      </h6>
      <p className="text-muted-foreground text-lg">
        Working with clients globally, LENS acknowledges applicable data privacy
        regulations, such as the GDPR, HIPAA and others, in all our solutions
        handling sensitive data. We also ensure our algorithms allow for the
        required level of decision-making transparency and explainability.
      </p>
    </div>
  );
};
const CodeSection = () => {
  return (
    <div className="lg:px-16 p-2 space-y-10 hover:scale-105 transition-all duration-300">
      <h6 className="lg:text-3xl text-2xl font-semibold">Code of Ethics</h6>
      <p className="text-muted-foreground text-lg">
        LENS believes in a just, non-violent world of equality and fairness. We
        prize democratic values, civil liberties and open and informed debate.
        When used to further these values, algorithm-based decision-making
        models can continue to make the world a safer, better place for
        everyone.
      </p>
    </div>
  );
};
