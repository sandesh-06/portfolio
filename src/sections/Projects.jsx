import React, { useRef } from "react";
import { ProjectDisplay, TextGenerate, TitleUnderline } from "../components";
import { useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      className="py-32 flex flex-col lg:flex-row-reverse bg-[#0c0c0c] px-4"
    >
      <div className="flex flex-col justify-center items-center w-full lg:w-1/3 text-white">
        <p className="text-center text-4xl py-2 opacity-95 z-0 font-jost tracking-widest">
          PROJECTS
        </p>
        <TitleUnderline className="w-2/3"/>

        <div className="hidden lg:block">
          <TextGenerate sentence="Here are some of my no sleep projects which I enjoyed (sometimes) working." />
        </div>
      </div>

      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="w-full lg:w-2/3"
      >
        <ProjectDisplay />
      </div>
    </section>
  );
};

export default Projects;
