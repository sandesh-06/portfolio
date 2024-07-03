import React, { useRef } from "react";
import { TitleUnderline, CardStackUI, TextGenerate, DetailsCard } from "../components";
import {motion, useInView} from "framer-motion"
const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true})
  return (
    <section
      id="about"
      className="min-h-[100vh] gap-5 md:gap-0 py-24 flex flex-col lg:flex-row-reverse items-center"
    >
      <div className="w-full md:w-1/3 h-full flex flex-col justify-center items-center text-white">
        <p className="text-neutral-800 dark:text-white text-center text-4xl py-2 font-jost tracking-widest opacity-95 z-0">
          About Me
        </p>
        <TitleUnderline className="w-2/3" />

        <div className="hidden lg:block px-4">
          <TextGenerate sentence="As a full stack developer and curious undergrad, I love diving into new tech and coming up with solutions (even if they hurt my brain). My passion for learning drives me to code like a caffeinated squirrel—always on the hunt for the next big thing!" />
        </div>
      </div>

      <motion.div ref={ref} className="w-full md:w-2/3" 
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        transition={{ duration: 3 }}
      >
        <DetailsCard institution={"Sathyabama University"} marks={"CGPA: 9.19"} duration={"2021 - PRESENT"} degree={"Bachelors in Computer Science and Engineering"} location={"Chennai"}/>
        <DetailsCard institution={"Kola Saraswathi Vaishnav Sr. Sec. School"} marks={"PERCENTAGE: 90.4%"} duration={"2020 - 2021"} degree={"12th Standard"} location={"Chennai"}/>
        <CardStackUI className="py-16"/>
      </motion.div>
    </section>
  );
};

export default About;
