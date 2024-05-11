import React from "react";

const GetInTouch = () => {
  return (
    <div className="flex lg:flex-row flex-col mt-16 justify-between w-11/12 max-w-[1300px] mx-auto">
      <div className="space-y-8">
        <p className="lg:text-7xl max-w-[400px] text-5xl">
          Get in  touch with us
        </p>
        <p className="text-xl">Send your enquiry now!</p>
        <div className="bg-gray-200 dark:bg-gray-800 relative max-w-[600px] p-1 rounded-full">
          <input
            type="text"
            name=""
            placeholder="Enter email address"
            id=""
            className="p-3 focus:outline-none bg-transparent"
          />
          <button className="bg-[#272E5C] absolute right-1 rounded-full p-3 text-white">
            Request Demo
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75"
          alt="map"
        />
      </div>
    </div>
  );
};

export default GetInTouch;
