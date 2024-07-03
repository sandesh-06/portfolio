import React from "react";
import "./movingText.css";
import { MdLocationOn } from "react-icons/md";
const MovingText = ({
  className = "",
  moveWords = [],
  animate = "left",
  location = false,
}) => {
  const words = moveWords;
  const moveText =
    animate === "right" ? "animate-move-text-reverse" : "animate-move-text";
  return (
    <div id="moving-text" className={`flex pt-4 pb-2 ${className}`}>
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className={`con flex ${moveText}`}>
          {words.map((word, i) => (
            <div key={i} className="flex items-center">
              <h1 className="text-4xl md:text-[4vw] text-black dark:text-white">
                {word}
              </h1>
              {location ? (
                <MdLocationOn size={"50px"} color="white" />
              ) : (
                <div className="dot bg-gradient-to-r from-cyan-800 to-blue-800 w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"></div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MovingText;
