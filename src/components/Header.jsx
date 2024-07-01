import React from "react";
import { createPortal } from "react-dom";
import Socials from "./socials/Socials";
const Header = () => {
  const navItems = [
    {
      text: "Home",
      path: "home",
    },
    {
      text: "About",
      path: "about",
    },
    {
      text: "Skills",
      path: "skills",
    },
    {
      text: "Projects",
      path: "projects",
    },
    {
      text: "Contact",
      path: "contact",
    },
  ];

  return (
    <header className="font-nunito fixed top-0 left-0 w-full z-[100]">
      <div className="bg-black flex justify-between items-center h-16 px-3 md:px-5 relative shadow-md border border-t-0 border-l-0 border-r-0 border-gray-700">
        {/* Logo */}
        <div className="hover:cursor-pointer">
          <h1 className="text-start">
            <span className="font-playground font-bold text-xl bg-gradient-to-r from-cyan-800 to-blue-800 text-transparent bg-clip-text">
              Sandesh
            </span>
          </h1>
        </div>

        {/* NavItems */}
        <div className="h-full hidden sm:block w-full">
          <ul className="hidden md:flex justify-center items-center h-full  lg:gap-5 xl:gap-10">
            {navItems.map((item) => (
              <li
                key={item.text}
                className="h-full flex items-center px-4 text-lg text-neutral-100 font-semibold"
              >
                <a href={`#${item.path}`} className="cursor-pointer hover:opacity-65">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="hover:cursor-pointer">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
