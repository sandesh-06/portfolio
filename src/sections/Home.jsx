import React from "react";
import {
  SpotLight,
  FlipwordsEffect,
  GridBackground,
  BorderEffect,
} from "../components";
import useTheme from "../context/themeContext";
const Home = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="h-[100vh]">
      <GridBackground>
        <div className="w-full flex flex-col md:flex-row justify-center items-center h-full py-8">
          {/* Text side */}
          <div className="md:w-1/2 h-full text-neutral-900 dark:text-white flex flex-col justify-center items-center md:items-start md:pl-16 xl:pl-32  gap-3">
            {/* Hello text */}
            <div className="font-jost">
              <p className="text-[3vh] sm:text-2xl lg:text-[5vh] tracking-widest font-semibold opacity-90">
                HELLO I'M
              </p>
            </div>

            {/* Name */}
            <div className="font-helvi ">
              <p className="text-[7vh] sm:text-[10vh] md:text-[7.5vh] lg:text-[10vh] xl:text-[12vh] bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
                Sandesh S
              </p>
            </div>

            {/* Typewriter text */}
            <div className="flex gap-4 h-12 font-jost lg:mt-2 lg:mb-12">
              <FlipwordsEffect
                effectWords={["Dreamer", "Learner", "Developer"]}
              />
            </div>
            {/* Button */}
            <div className="sm:my-8 md:my-0">
              <BorderEffect text="Download Resume" />
            </div>
          </div>

          {/* Image side */}
          <div className="flex justify-center items-center md:w-1/2 px-1 py-8">
            <div className="w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] lg:w-[30rem] lg:h-[30rem] xl:w-[35rem] xl:h-[35rem] rounded-full overflow-hidden">
              <img
                src="https://res.cloudinary.com/sandesh-06/image/upload/v1719939392/portfolio/admnpv6nu5jnvu6uxh7m.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
};

export default Home;
