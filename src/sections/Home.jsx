import React from "react";
import { SpotLight, FlipwordsEffect, HoverGradient } from "../components";
const Home = () => {
  return (
    <section id="home" className="h-[90vh]">
      <div className="flex flex-col md:flex-row-reverse h-full">
        {/* Text side */}
        <div className="w-1/2 h-full text-white flex flex-col justify-center pl-16 xl:pl-32  gap-3">
          {/* <SpotLight
            className="-top-40 left-0 md:-left-50 md:-top-10"
            fill="white"
          /> */}
          {/* Hello text */}
          <div className="font-jost">
            <p className="lg:text-4xl tracking-widest font-semibold opacity-90">
              HELLO I'M
            </p>
          </div>

          {/* Name */}
          <div className="font-playground ">
            <p className="text-[10vh] xl:text-[100px]  bg-gradient-to-r from-cyan-800 to-blue-800 text-transparent bg-clip-text shadow-md">
              Sandesh S
            </p>
          </div>

          {/* Typewriter text */}
          <div className="flex gap-4 h-12 font-jost mt-8 mb-12">
            <FlipwordsEffect
              effectWords={["Dreamer", "Learner", "Developer"]}
            />
          </div>
          {/* Button */}
          <div className="w-full ">
            <HoverGradient text="Download Resume" />
          </div>
        </div>

        {/* Image side */}
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default Home;
