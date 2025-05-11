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
          <TextGenerate sentence="Currently working as a Salesforce Developer at PwC, where I build smart solutions and occasionally talk to Apex like it's a teammate.My journey started at GUVI, my first job and the place where I not only learned but also mentored students in tech,translating complex code into something even 8th graders could enjoy (and sometimes debug better than me). I love sharing knowledge, solving problems, and making tech less scary for everyone.Fluent in five languages (and sarcasm), and always ready for a challenges especially if it comes with choosing a place for an outing.Forever curious, always learning, and yes... still breaking things just right to fix them better." />
        </div>
      </div>

      <motion.div ref={ref} className="w-full md:w-2/3" 
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        transition={{ duration: 3 }}
      >
        <DetailsCard institution={"Sathyabama University"} marks={"CGPA: 9.19"} duration={"2021 - 2025"} degree={"Bachelors in Computer Science and Engineering"} location={"Chennai"}/>
        <DetailsCard institution={"Kola Saraswathi Vaishnav Sr. Sec. School"} marks={"PERCENTAGE: 90.4%"} duration={"2020 - 2021"} degree={"12th Standard"} location={"Chennai"}/>
        <CardStackUI className="py-16"/>
      </motion.div>
    </section>
  );
};

export default About;
