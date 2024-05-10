"use client"
import { navbarOptions } from "@/data/navbar-options";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggler";
import { usePathname } from "next/navigation";
import MobileNavbar from "./mobile-navbar";


const Navbar = () => {
   const pathname = usePathname();
   const route = (path:string) =>{
    return path === pathname;
   }
  return (
    <nav className="bg-white fixed top-0 dark:bg-transparent z-50 w-full backdrop-blur-3xl text-black dark:text-white py-3">
      <div className="w-11/12 lg:w-10/12 mx-auto flex justify-between items-center">
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
        <div className="hidden lg:block">
            <div className="flex gap-6">
             <a href="https://makemyweb.ai/en" target="_blank">MakeMyWeb.</a>
            {
                navbarOptions.map((option,i)=>(
                    <Link key={i} className={`${route(option.path) ? "bg-gradient-to-r text-transparent from-[#0796FF] to-[#91F6FF]" : ""}  font-semibold bg-clip-text`} href={option.path}>{option.label}</Link>
                ))
            }
            <ModeToggle/>
            </div>
        </div>
       <div className="block lg:hidden">
       <MobileNavbar/>
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
