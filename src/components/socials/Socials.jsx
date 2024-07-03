import React from "react";
import "./Socials.css";
import { FaGithub } from "react-icons/fa";
const Socials = ({hide=true}) => {
  return (
    <div className="flex icons">
      {/* Github */}
     <div className="mx-2">
     <a
        href="https://github.com/sandesh-06"
        target="_blank"
        className=" text-white hover:text-gray-400"
      >
       <FaGithub size={"40px"}/>
      </a>
     </div>

     {/* FB and LinkedIn */}
      <div className={`${hide ? "hidden sm:flex" : "flex"}`}>
      <div className="social flex items-center justify-center">
        <a
          href="https://www.facebook.com/profile.php?id=100009558465904"
          target="_blank"
        >
          <i className="social-icon fab fa-facebook-f"></i>
        </a>
      </div>

      <div className="social ">
        <a href="https://www.linkedin.com/in/ss0603/" target="_blank">
          <i className="social-icon fab fa-linkedin-in"></i>
        </a>
      </div>
      </div>
    </div>
  );
};

export default Socials;
