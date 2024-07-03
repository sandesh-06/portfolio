import React, { useRef } from "react";
import { SkillProgress, SparklesBackground, TextGenerate, TitleUnderline } from "../components";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const skills = [
    { title: "Frontend", percent: "80" },
    { title: "Backend", percent: "70" },
    { title: "Python", percent: "60" },
    { title: "Javascript", percent: "60" },
    { title: "Java", percent: "80" },
    { title: "Problem Solving", percent: "65" },
  ];


  return (
    <section id="skills" className="flex flex-col lg:flex-row px-4 py-24 min-h-[99vh]">
      {/* Text */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center text-white">
        <p className="text-neutral-800 dark:text-white text-center text-4xl py-2 font-jost tracking-widest opacity-95 z-0">
          SKILLS
        </p>
       <TitleUnderline className="w-2/3"/>
       <div className="hidden lg:block">
        <TextGenerate sentence="Next, I have to learn three new skills so that the skill meter layout isn't compromised and also to enhance my portfolio of course."/>
       </div>
      </div>

      {/* Skills */}
      <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-2">
        {skills.map((skill, i) => (
          <SkillProgress key={i} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
