import React from "react";
import BlogCard from "./_components/blog-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OurBlogs = () => {
  return (
    <div id="blogs" className="flex flex-col items-center justify-center">
      <div className="w-fit mt-20">
        <h2 className="lg:text-xl font-semibold uppercase my-1">Our Blogs</h2>
        <div className="bg-gradient-to-r from-[#0796FF] to-[#91F6FF] rounded-lg mx-auto w-8/12 h-[4px]"></div>
      </div>
      <div className="lg:text-7xl max-w-[1080px] text-center my-10 md:text-5xl text-3xl">
        <p>Inhouse Mindscape</p>
      </div>
      <BlogCard/>
      <Button variant={"outline"}  className="w-fit p-6 my-16 rounded-xl group/button">Explore More <ArrowRight className="hidden group-hover/button:block transition-all duration-200 w-4 h-4 ml-2"/> </Button>

    </div>
  );
};

export default OurBlogs;
