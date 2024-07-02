import React from "react";
import "./movingText.css";

const MovingText = () => {
  const words = ["FULL STACK DEVELOPER", "UNDERGRAD", "OPEN TO WORK"];
  return (
    <div id="moving-text" className="flex py-14">
    {Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className="con flex">
        {words.map((word, i) => (
          <div key={i} className="flex items-center">
            <h1 className="text-4xl md:text-[4vw] text-black dark:text-white">{word}</h1>
            <div className="dot bg-gradient-to-r from-cyan-800 to to-blue-800 w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]"></div>
          </div>
        ))}
      </div>
    ))}
  </div>
  );
};

export default MovingText;
