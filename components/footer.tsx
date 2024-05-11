import Image from "next/image";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord, FaFacebook } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="flex lg:flex-row flex-col justify-between my-10 mb-16 w-11/12 max-w-[1280px] mx-auto">
        <div>
        <div className="dark:hidden block">
          <Image
            width={80}
            height={80}
            src={
              "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75"
            }
            alt="logo"
          />
        </div>
        <div className="dark:block hidden">
          <Image
            width={80}
            height={80}
            src={
              "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=96&q=75"
            }
            alt="logo"
          />
        </div>
            {/* <img src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75" alt="logo" /> */}
            <p>{"Tomorrow's"} Vision, Today!</p>
            <div className="flex gap-5 text-3xl mt-16">
                <a href="">
                <FaFacebook />
                </a>
                <a href=""><BsInstagram /></a>
                <a href=""><ImLinkedin /></a>
                <a href=""><FaDiscord /></a>
                <a href=""><RiTwitterXLine/></a>
            </div>
        </div>
        <div>
          <p className="my-6 font-semibold text-lg">SITEMAP</p>
          <div className="flex flex-col  gap-3">
            <a href="https://makemyweb.ai/en" className="hover:bg-gradient-to-r from-[#0796FF] to-[#91F6FF] bg-clip-text hover:text-transparent">MakeMyWeb.</a>
            <a href="#services" className="hover:bg-gradient-to-r from-[#0796FF] to-[#91F6FF]  bg-clip-text hover:text-transparent">Services</a>
            <a href="/" className="hover:bg-gradient-to-r from-[#0796FF] to-[#91F6FF]  bg-clip-text hover:text-transparent">Products</a>
            <a href="#blogs" className="hover:bg-gradient-to-r from-[#0796FF] to-[#91F6FF]  bg-clip-text hover:text-transparent">Blogs</a>
            <a href="/" className="hover:bg-gradient-to-r from-[#0796FF] to-[#91F6FF]  bg-clip-text hover:text-transparent">Life at LENS</a>
          </div>
        </div>
        <div>
          <p className="my-6 font-semibold text-lg">CONNECT</p>
          <div className="flex flex-col gap-3">
            <a href="telto:+1-517-9300-792" className="hover:bg-gradient-to-r from-[#0796FF] to-[#91F6FF]  bg-clip-text hover:text-transparent">+1-517-9300-792</a>
            <a href="telto:+91-9990-736-796" className="hover:bg-gradient-to-r from-[#0796FF] to-[#91F6FF]  bg-clip-text hover:text-transparent">+91-9990-736-796</a>
            <a href="mailto:+91-9990-736-796" className="hover:bg-gradient-to-r from-[#0796FF] to-[#91F6FF]  bg-clip-text hover:text-transparent">solutions@lenscorp.ai</a>
          </div>
        </div>
      </div>
      <div className="dark:bg-[#242424] py-12 bg-[#272E5C]">
        <div className="w-10/12 text-white mx-auto flex flex-wrap justify-between items-center">
          <p>2023 LENS, Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://lenscorp.ai/Files/LENS_Code_of_Conduct.pdf"
              target="_blank"
            >
              Code of conduct
            </a>
            <a
              href="https://lenscorp.ai/Files/LENS_Sustainability_Goals.pdf"
              target="_blank"
            >
              Sustainability Goals
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
