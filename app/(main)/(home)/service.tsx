import { serviceData } from "@/data/service-data";
import React from "react";
import ServiceCard from "./_components/service-card";

const ServiceSection = () => {
  return (
    <div id="services" className="overflow-hidden">
      <div className="flex flex-col w-11/12 mx-auto items-center justify-center pb-10">
        <div className="w-fit my-10">
          <h2 className="lg:text-xl uppercase my-1">Services</h2>
          <div className="bg-gradient-to-r from-[#0796FF] to-[#91F6FF] rounded-lg mx-auto w-8/12 h-[4px]"></div>
        </div>
        <div>
          <p className="lg:text-7xl text-center">
            We provide Artificial Intelligence Services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 max-w-[1080px]">
          <ServiceCard data={serviceData} />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
