import React from "react";
import {Socials} from "./index";

const Footer = () => {
  const commityClass =
    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text";
  return (
    <footer className="bg-black border border-t border-b-0 border-r-0 border-l-0 border-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3 md:flex-row justify-between items-center">
          {/* Logo or Name */}
          <div className="text-2xl font-bold mb-2 md:mb-0">
            <span className="font-helvi font-bold text-xl bg-gradient-to-r from-cyan-800 to-blue-800 text-transparent bg-clip-text">
              Sandesh S
            </span>
          </div>

          {/* Social Media Links */}
          <div className="">
            <Socials hide={false}/>
          </div>

          {/* Copyright Info */}
          <div className="text-sm text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Sandesh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
