import { navbarOptions } from "@/data/navbar-options";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ModeToggle } from "./mode-toggler";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const route = (path: string) => {
    return path === pathname;
  };
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="w-[70px] bg-transparent"
    >
      <NavbarContent className="sm:hidden bg-transparent" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarMenu className="py-20 space-y-4">
      <NavbarMenuItem>
      <a href="https://makemyweb.ai/en" target="_blank">MakeMyWeb.</a>

        </NavbarMenuItem>
        {navbarOptions.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`${
                route(item.path)
                  ? "bg-gradient-to-r text-transparent from-[#0796FF] to-[#91F6FF]"
                  : ""
              }  font-semibold bg-clip-text`}
              href={item.path}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <ModeToggle />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default MobileNavbar;
