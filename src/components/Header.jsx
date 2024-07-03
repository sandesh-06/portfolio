import React from "react";
import Socials from "./socials/Socials";
import {ThemeButton} from "./index"
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
      <div className="bg-slate-50 dark:bg-black flex justify-between items-center h-16 px-3 md:px-5 relative shadow-lg border border-t-0 border-l-0 border-r-0 border-gray-900">
        {/* Logo */}
        <div className="hover:cursor-pointer w-fit">
          <p className="text-start w-fit">
            <span className="font-helvi font-bold text-xl bg-gradient-to-r from-cyan-800 to-blue-800 text-transparent bg-clip-text">
              Sandesh
            </span>
          </p>
        </div>

        {/* NavItems */}
        <div className="h-full hidden sm:block w-full">
          <ul className="hidden md:flex justify-center items-center h-full  lg:gap-5 xl:gap-10">
            {navItems.map((item) => (
              <li
                key={item.text}
                className="h-full flex items-center px-4 text-lg text-neutral-800 dark:text-neutral-100 font-normal opacity-90"
              >
                <a href={`#${item.path}`} className="cursor-pointer hover:opacity-65">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Socials */}
        <div className="hover:cursor-pointer hidden sm:flex items-center gap-3">
          {/* <ThemeButton /> */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
